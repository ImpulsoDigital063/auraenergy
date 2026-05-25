import { NextResponse } from "next/server";
import { Resend } from "resend";

// =====================================================================
// POST /api/lead/qualified
// Webhook do Tally (form de qualificação de lead).
// Recebe payload do Tally → calcula score → envia email pra Eduardo
// + opcional WhatsApp deep link pro Renato.
// =====================================================================

const EDUARDO_EMAIL = "edubchaves5@gmail.com";
const RENATO_WHATSAPP = "5563992688852";
const FROM_EMAIL = "Aura Energy Lead <onboarding@resend.dev>";

// Tally envia em formato `{ data: { fields: [{ key, label, value, type, ... }] } }`
type TallyField = {
  key: string;
  label: string;
  value: unknown;
  type: string;
  options?: Array<{ id: string; text: string }>;
};

type TallyPayload = {
  data?: {
    fields?: TallyField[];
    formId?: string;
    submissionId?: string;
    createdAt?: string;
  };
  // Permite payload custom direto também (não-Tally)
  [k: string]: unknown;
};

export async function POST(req: Request) {
  try {
    const payload = (await req.json()) as TallyPayload;
    const fields = payload?.data?.fields || [];

    // Mapear respostas do Tally pra estrutura conhecida
    const lead = parseLead(fields);
    const score = scoreLead(lead);

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("[lead/qualified] RESEND_API_KEY não configurado");
      // Retorna sucesso pro Tally não retentar
      return NextResponse.json({ ok: true, warning: "email não enviado" });
    }

    const resend = new Resend(apiKey);
    const html = renderLeadEmail(lead, score);

    await resend.emails.send({
      from: FROM_EMAIL,
      to: EDUARDO_EMAIL,
      subject: `${score.emoji} LEAD AURA · ${lead.nome || "(sem nome)"} · ${formatBRL(lead.contaLuz)}/mês · ${score.tier}`,
      html,
    });

    return NextResponse.json({ ok: true, score: score.tier });
  } catch (error) {
    console.error("[lead/qualified] erro:", error);
    return NextResponse.json(
      { error: "Erro ao processar lead" },
      { status: 500 }
    );
  }
}

// Aceita também GET pra teste (não faz nada, só responde)
export async function GET() {
  return NextResponse.json({
    ok: true,
    info: "Endpoint Aura lead webhook. Use POST.",
  });
}

// =====================================================================

type Lead = {
  tipoImovel: string;
  contaLuz: number;
  cidade: string;
  objetivo: string;
  pagamento: string;
  urgencia: string;
  proprietario: string;
  nome: string;
  whatsapp: string;
  email: string;
  raw: Record<string, unknown>;
};

function parseLead(fields: TallyField[]): Lead {
  const get = (key: string): unknown => {
    // Tenta match por label (insensitive) ou key
    const f = fields.find(
      (f) =>
        f.key === key ||
        f.label.toLowerCase().includes(key.toLowerCase())
    );
    if (!f) return null;
    // Se for multiple choice com options, mapeia ID pra texto
    if (f.options && Array.isArray(f.value)) {
      const ids = f.value as string[];
      return ids
        .map((id) => f.options?.find((o) => o.id === id)?.text || id)
        .join(", ");
    }
    if (f.options && typeof f.value === "string") {
      return f.options.find((o) => o.id === f.value)?.text || f.value;
    }
    return f.value;
  };

  const raw: Record<string, unknown> = {};
  for (const f of fields) raw[f.label] = f.value;

  return {
    tipoImovel: String(get("tipo") || get("imóvel") || get("imovel") || ""),
    contaLuz: Number(get("conta") || get("luz") || 0),
    cidade: String(get("cidade") || ""),
    objetivo: String(get("objetivo") || ""),
    pagamento: String(get("pagamento") || get("pagar") || ""),
    urgencia: String(get("urgência") || get("urgencia") || get("instalar") || ""),
    proprietario: String(get("proprietário") || get("proprietario") || ""),
    nome: String(get("nome") || ""),
    whatsapp: String(get("whatsapp") || get("telefone") || get("phone") || ""),
    email: String(get("email") || ""),
    raw,
  };
}

// =====================================================================

type Score = {
  tier: "HOT" | "WARM" | "COLD" | "ELIMINADO";
  emoji: string;
  motivo: string;
};

function scoreLead(lead: Lead): Score {
  const eliminado = lead.proprietario?.toLowerCase().includes("inquilino");
  if (eliminado) {
    return {
      tier: "ELIMINADO",
      emoji: "⚫",
      motivo: "Inquilino — não é decisor",
    };
  }

  const urgenteAlto =
    lead.urgencia?.toLowerCase().includes("urgente") ||
    lead.urgencia?.toLowerCase().includes("este mês") ||
    lead.urgencia?.toLowerCase().includes("esse mês");

  const naoDecidiu =
    lead.urgencia?.toLowerCase().includes("pesquisando") ||
    lead.urgencia?.toLowerCase().includes("só estou");

  const comercial =
    lead.tipoImovel?.toLowerCase().includes("comércio") ||
    lead.tipoImovel?.toLowerCase().includes("comercio") ||
    lead.tipoImovel?.toLowerCase().includes("indústria") ||
    lead.tipoImovel?.toLowerCase().includes("industria");

  if (lead.contaLuz > 1500) {
    return { tier: "HOT", emoji: "🔥", motivo: "Conta alta (R$ 1.500+)" };
  }
  if (comercial && (urgenteAlto || lead.urgencia?.includes("4 semanas"))) {
    return { tier: "HOT", emoji: "🔥", motivo: "Comercial com urgência" };
  }
  if (lead.contaLuz >= 500 && urgenteAlto) {
    return {
      tier: "HOT",
      emoji: "🔥",
      motivo: "Conta média + urgência alta",
    };
  }
  if (lead.contaLuz >= 300 && lead.contaLuz < 500) {
    return { tier: "WARM", emoji: "🟡", motivo: "Conta na faixa média" };
  }
  if (lead.contaLuz < 300 || naoDecidiu) {
    return {
      tier: "COLD",
      emoji: "🟢",
      motivo: lead.contaLuz < 300 ? "Conta baixa" : "Só pesquisando",
    };
  }
  return { tier: "WARM", emoji: "🟡", motivo: "Default" };
}

// =====================================================================

function formatBRL(n: number): string {
  return n.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 0,
  });
}

function escapeHTML(s: string): string {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/\n/g, "<br>");
}

// =====================================================================

function calcularProjeto(contaLuz: number) {
  const TARIFA = 0.95;
  const HSP = 5.9;
  const PRODUCAO = HSP * 30 * 0.78;
  const CUSTO_KWP = 4400;
  const ECONOMIA_PCT = 0.92;
  const POTENCIA_PAINEL = 575;

  if (contaLuz <= 0) return null;

  const consumo = contaLuz / TARIFA;
  const kwp = (consumo / PRODUCAO) * 1.08;
  const paineis = Math.ceil((kwp * 1000) / POTENCIA_PAINEL);
  const investimento = Math.round(kwp * CUSTO_KWP);
  const economiaMes = Math.round(contaLuz * ECONOMIA_PCT);
  const economia25 = Math.round(economiaMes * 12 * 25);
  const payback = Number((investimento / (economiaMes * 12)).toFixed(1));

  return {
    consumo: Math.round(consumo),
    kwp: Number(kwp.toFixed(2)),
    paineis,
    investimento,
    economiaMes,
    economia25,
    payback,
  };
}

// =====================================================================

function renderLeadEmail(lead: Lead, score: Score): string {
  const projeto = calcularProjeto(lead.contaLuz);
  const whatsappLink = lead.whatsapp
    ? `https://wa.me/55${lead.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(
        `Olá ${lead.nome}! Aqui é o Renato da Aura Energy. Recebi seu cálculo solar e quero agendar sua visita técnica gratuita.`
      )}`
    : null;

  return `<!doctype html>
<html lang="pt-BR">
<head>
<meta charset="utf-8">
<style>
body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; background: #fffef2; color: #1a1a1a; padding: 24px; }
.container { max-width: 720px; margin: 0 auto; background: #fff; border-radius: 16px; padding: 32px; box-shadow: 0 4px 16px rgba(0,0,0,0.06); }
h1 { color: #1B3A87; margin: 0 0 8px; font-size: 24px; }
.score { display: inline-block; padding: 8px 16px; border-radius: 999px; font-size: 14px; font-weight: 700; margin: 8px 0 24px; }
.score-hot { background: #FFE4D6; color: #c53030; }
.score-warm { background: #FFF6DC; color: #b45309; }
.score-cold { background: #DBEAFE; color: #1d4ed8; }
.score-out { background: #f3f4f6; color: #6b7280; }
h2 { color: #1B3A87; margin: 24px 0 12px; font-size: 16px; padding-bottom: 6px; border-bottom: 2px solid #F5BC2C; }
.grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
.card { background: #fffef2; padding: 16px; border-radius: 12px; border: 1px solid rgba(26,26,26,0.06); }
.label { font-size: 11px; font-weight: 700; color: #666; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 4px; }
.value { font-size: 15px; color: #1a1a1a; font-weight: 600; }
.projeto { background: linear-gradient(135deg, #FFF6DC 0%, #FFE4D6 100%); padding: 20px; border-radius: 12px; margin: 12px 0; }
.cta { display: inline-block; background: linear-gradient(135deg, #F5BC2C 0%, #FF8B3D 100%); color: #0e2152; padding: 14px 24px; border-radius: 12px; text-decoration: none; font-weight: 700; margin-top: 16px; }
.footer { margin-top: 32px; padding-top: 16px; border-top: 1px solid #eee; font-size: 12px; color: #666; }
</style>
</head>
<body>
<div class="container">
  <h1>${score.emoji} Lead Aura Energy qualificado</h1>
  <span class="score score-${score.tier === "HOT" ? "hot" : score.tier === "WARM" ? "warm" : score.tier === "COLD" ? "cold" : "out"}">
    ${score.emoji} ${score.tier} · ${escapeHTML(score.motivo)}
  </span>

  <h2>👤 Lead</h2>
  <div class="grid">
    <div class="card">
      <div class="label">Nome</div>
      <div class="value">${escapeHTML(lead.nome) || "—"}</div>
    </div>
    <div class="card">
      <div class="label">WhatsApp</div>
      <div class="value">${escapeHTML(lead.whatsapp) || "—"}</div>
    </div>
    ${lead.email ? `<div class="card"><div class="label">Email</div><div class="value">${escapeHTML(lead.email)}</div></div>` : ""}
    <div class="card">
      <div class="label">Cidade</div>
      <div class="value">${escapeHTML(lead.cidade) || "—"}</div>
    </div>
  </div>

  <h2>⚡ Necessidade</h2>
  <div class="grid">
    <div class="card">
      <div class="label">Tipo de imóvel</div>
      <div class="value">${escapeHTML(lead.tipoImovel) || "—"}</div>
    </div>
    <div class="card">
      <div class="label">Conta de luz mensal</div>
      <div class="value">${formatBRL(lead.contaLuz)}</div>
    </div>
    <div class="card">
      <div class="label">Objetivo</div>
      <div class="value">${escapeHTML(lead.objetivo) || "—"}</div>
    </div>
    <div class="card">
      <div class="label">Pagamento</div>
      <div class="value">${escapeHTML(lead.pagamento) || "—"}</div>
    </div>
    <div class="card">
      <div class="label">Urgência</div>
      <div class="value">${escapeHTML(lead.urgencia) || "—"}</div>
    </div>
    <div class="card">
      <div class="label">Proprietário</div>
      <div class="value">${escapeHTML(lead.proprietario) || "—"}</div>
    </div>
  </div>

  ${
    projeto
      ? `
  <h2>🎯 Projeto calculado</h2>
  <div class="projeto">
    <div class="grid">
      <div>
        <div class="label">Sistema ideal</div>
        <div style="font-size:24px; font-weight:800; color:#1B3A87;">${projeto.kwp} kWp</div>
        <div style="font-size:12px; color:#666;">${projeto.paineis} painéis · ${projeto.consumo} kWh/mês</div>
      </div>
      <div>
        <div class="label">Investimento</div>
        <div style="font-size:24px; font-weight:800; color:#1B3A87;">${formatBRL(projeto.investimento)}</div>
        <div style="font-size:12px; color:#666;">payback ${projeto.payback} anos</div>
      </div>
      <div>
        <div class="label">Economia mensal</div>
        <div style="font-size:24px; font-weight:800; color:#10b981;">${formatBRL(projeto.economiaMes)}</div>
      </div>
      <div>
        <div class="label">Em 25 anos</div>
        <div style="font-size:24px; font-weight:800; color:#10F19F;">${formatBRL(projeto.economia25)}</div>
      </div>
    </div>
  </div>
  `
      : ""
  }

  ${
    whatsappLink
      ? `<a href="${whatsappLink}" class="cta">📲 Abrir conversa no WhatsApp do lead</a>`
      : ""
  }

  <div class="footer">
    Lead recebido via formulário Tally · ${new Date().toLocaleString("pt-BR")}<br>
    auraenergypalmas.com/api/lead/qualified
  </div>
</div>
</body>
</html>`;
}
