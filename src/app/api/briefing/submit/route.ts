import { NextResponse } from "next/server";
import { Resend } from "resend";
import { briefingSchema } from "@/lib/briefing-schema";

// =====================================================================
// POST /api/briefing/submit
// Recebe briefing preenchido pelo Renato → envia email pro Eduardo via
// Resend formatado bonito.
// =====================================================================

const EDUARDO_EMAIL = "edubchaves5@gmail.com";
const FROM_EMAIL = "Aura Energy Briefing <onboarding@resend.dev>";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = briefingSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          error: "Dados inválidos",
          issues: parsed.error.issues,
        },
        { status: 400 }
      );
    }

    const data = parsed.data;
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      // Fallback se Resend não configurado: retorna sucesso mas avisa
      console.error("[briefing] RESEND_API_KEY não configurado");
      // Retorna sucesso mesmo assim — Renato não pode ver erro
      return NextResponse.json({
        ok: true,
        warning: "email não enviado (configurar RESEND_API_KEY)",
      });
    }

    const resend = new Resend(apiKey);
    const html = renderBriefingEmail(data);

    await resend.emails.send({
      from: FROM_EMAIL,
      to: EDUARDO_EMAIL,
      subject: `🎯 Briefing Aura Energy preenchido por ${data.nome}`,
      html,
      replyTo: data.whatsapp.includes("@") ? data.whatsapp : undefined,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[briefing] erro:", error);
    return NextResponse.json(
      { error: "Erro ao processar briefing" },
      { status: 500 }
    );
  }
}

// =====================================================================

function renderBriefingEmail(d: ReturnType<typeof briefingSchema.parse>): string {
  const formatList = (arr: string[]) =>
    arr.length === 0 ? "<em>nada marcado</em>" : `<ul>${arr.map((x) => `<li>${escape(x)}</li>`).join("")}</ul>`;

  const formatBRL = (n: number) =>
    n.toLocaleString("pt-BR", { style: "currency", currency: "BRL", minimumFractionDigits: 0 });

  return `<!doctype html>
<html lang="pt-BR">
<head>
<meta charset="utf-8">
<style>
body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; background: #fffef2; color: #1a1a1a; padding: 24px; }
.container { max-width: 720px; margin: 0 auto; background: #fff; border-radius: 16px; padding: 32px; box-shadow: 0 4px 16px rgba(0,0,0,0.06); }
h1 { color: #1B3A87; margin: 0 0 8px; font-size: 24px; }
h2 { color: #1B3A87; margin: 28px 0 12px; font-size: 16px; padding-bottom: 6px; border-bottom: 2px solid #F5BC2C; }
.card { background: #fffef2; padding: 16px; border-radius: 12px; margin-bottom: 12px; border: 1px solid rgba(26,26,26,0.06); }
.label { font-size: 11px; font-weight: 700; color: #666; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 4px; }
.value { font-size: 15px; color: #1a1a1a; }
.dor, .meta, .restr { background: #FFF6DC; border-left: 4px solid #F5BC2C; padding: 12px 16px; border-radius: 8px; margin: 8px 0; }
ul { margin: 4px 0 4px 18px; padding: 0; }
.footer { margin-top: 32px; padding-top: 16px; border-top: 1px solid #eee; font-size: 12px; color: #666; }
</style>
</head>
<body>
<div class="container">
  <h1>🎯 Briefing Aura Energy preenchido</h1>
  <p style="color:#666; margin: 0 0 20px;">Renato Edson preencheu o briefing pra ${escape(d.nome)} — pronto pra montar o plano de negócio.</p>

  <h2>👤 Identificação</h2>
  <div class="card">
    <div class="label">Nome</div><div class="value">${escape(d.nome)}</div>
    <div class="label" style="margin-top:8px;">WhatsApp / Email</div><div class="value">${escape(d.whatsapp)}</div>
  </div>

  <h2>📦 Card 1 — Serviços que Aura vai oferecer</h2>
  <div class="card">${formatList(d.servicos)}
  ${d.servicosOutro ? `<div class="label" style="margin-top:8px;">Outro:</div><div class="value">${escape(d.servicosOutro)}</div>` : ""}
  </div>

  <h2>⚙️ Card 2 — Equipamentos</h2>
  <div class="card">
    <div class="label">Painéis</div>${formatList(d.paineis)}
    ${d.paineisOutro ? `<div class="label">Outro painel:</div><div class="value">${escape(d.paineisOutro)}</div>` : ""}
    <div class="label" style="margin-top:8px;">Inversores</div>${formatList(d.inversores)}
    ${d.inversoresOutro ? `<div class="label">Outro inversor:</div><div class="value">${escape(d.inversoresOutro)}</div>` : ""}
  </div>

  <h2>💰 Card 3 — Comercial</h2>
  <div class="card">
    <div class="label">Ticket residencial</div><div class="value">${formatBRL(d.ticketResidencialMin)} a ${formatBRL(d.ticketResidencialMax)}</div>
    <div class="label" style="margin-top:8px;">Ticket comercial</div><div class="value">${formatBRL(d.ticketComercialMin)} a ${formatBRL(d.ticketComercialMax)}</div>
    <div class="label" style="margin-top:8px;">Prazo médio orçamento → entrega</div><div class="value">${d.prazoMedioDias} dias</div>
    <div class="label" style="margin-top:8px;">Modalidades de pagamento</div>${formatList(d.pagamento)}
    ${d.pagamentoOutro ? `<div class="value">Outro: ${escape(d.pagamentoOutro)}</div>` : ""}
  </div>

  <h2>🛡 Card 4 — Engenheiro Responsável</h2>
  <div class="card">
    <div class="label">Quem assina ART/CREA</div><div class="value">${escape(d.engenheiroResponsavel)}</div>
    ${d.engenheiroNome ? `<div class="label" style="margin-top:8px;">Nome</div><div class="value">${escape(d.engenheiroNome)}</div>` : ""}
    ${d.engenheiroCrea ? `<div class="label" style="margin-top:8px;">CREA-TO</div><div class="value">${escape(d.engenheiroCrea)}</div>` : ""}
  </div>

  <h2>🏗 Card 5 — Operação</h2>
  <div class="card">
    <div class="label">Anos Brasfrio em Palmas</div><div class="value">${d.anosBrasfrio} anos</div>
    <div class="label" style="margin-top:8px;">Instalações solar já feitas</div><div class="value">~${d.numInstalacoes}</div>
    <div class="label" style="margin-top:8px;">Cobertura geográfica Aura</div><div class="value">${escape(d.cobertura)}</div>
  </div>

  <h2>🎯 Card 6 — Cliente-alvo + Dor real</h2>
  <div class="card">
    <div class="label">Top 3 perfis de cliente-alvo (em ordem)</div>${formatList(d.clienteAlvoTop3)}
    <div class="dor">
      <div class="label">⚡ DOR REAL</div>
      <div class="value">${escape(d.dorReal)}</div>
    </div>
  </div>

  <h2>🎨 Card 7 — Posicionamento Aura ↔ Brasfrio</h2>
  <div class="card"><div class="value">${escape(d.posicionamento)}</div></div>

  <h2>📈 Card 8 — Investimento + Meta</h2>
  <div class="card">
    <div class="label">Investimento mensal disponível pra digital</div><div class="value">${formatBRL(d.investimentoMensal)}/mês</div>
    <div class="meta">
      <div class="label">🎯 META 90 DIAS</div>
      <div class="value">${escape(d.meta90Dias)}</div>
    </div>
  </div>

  <h2>🖼 Card 9 — Materiais existentes</h2>
  <div class="card">
    <div class="value">
      Fotos da equipe: <strong>${d.fotosEquipe}</strong><br>
      Fotos de instalações: <strong>${d.fotosInstalacoes}</strong><br>
      Vídeos: <strong>${d.videos}</strong><br>
      Depoimentos texto: <strong>${d.depoimentosTexto}</strong><br>
      Depoimentos vídeo: <strong>${d.depoimentosVideo}</strong><br>
      Antes/depois conta de luz: <strong>${d.contasAntesDepois}</strong><br>
      Imagens drone: <strong>${d.imagensDrone ? "Sim" : "Não"}</strong>
    </div>
  </div>

  <h2>🚫 Card 10 — Restrições</h2>
  ${d.restricoes ? `<div class="restr"><div class="value">${escape(d.restricoes)}</div></div>` : `<div class="card"><em>nenhuma restrição declarada</em></div>`}

  <div class="footer">
    Enviado via auraenergy.vercel.app/briefing — ${new Date().toLocaleString("pt-BR")}
  </div>
</div>
</body>
</html>`;
}

function escape(s: string): string {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/\n/g, "<br>");
}
