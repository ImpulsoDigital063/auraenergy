import { NextResponse } from "next/server";
import { Resend } from "resend";
import {
  diagnosticoSchema,
  type DiagnosticoData,
} from "@/lib/diagnostico-schema";

// =====================================================================
// POST /api/diagnostico/submit
// Recebe diagnóstico pré-reunião preenchido pelo Renato → envia email
// pro Eduardo via Resend formatado pra leitura rápida.
// =====================================================================

const EDUARDO_EMAIL = "edubchaves5@gmail.com";
const FROM_EMAIL = "Aura Diagnóstico <onboarding@resend.dev>";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = diagnosticoSchema.safeParse(body);

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
      console.error("[diagnostico] RESEND_API_KEY não configurado");
      return NextResponse.json({
        ok: true,
        warning: "email não enviado (configurar RESEND_API_KEY)",
      });
    }

    const resend = new Resend(apiKey);
    const html = renderDiagnosticoEmail(data);

    await resend.emails.send({
      from: FROM_EMAIL,
      to: EDUARDO_EMAIL,
      subject: `🔥 Diagnóstico Renato preenchido — pronto pra reunião`,
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[diagnostico] erro:", error);
    return NextResponse.json(
      { error: "Erro ao processar diagnóstico" },
      { status: 500 }
    );
  }
}

// =====================================================================

function renderDiagnosticoEmail(d: DiagnosticoData): string {
  const linha = (label: string, value: string | undefined) => {
    if (!value || value.trim() === "") return "";
    return `<div class="row"><div class="lbl">${escape(label)}</div><div class="val">${escape(value)}</div></div>`;
  };

  const lista = (label: string, arr: string[] | undefined) => {
    if (!arr || arr.length === 0) return "";
    return `<div class="row"><div class="lbl">${escape(label)}</div><div class="val">${arr.map((x) => `<span class="chip">${escape(x)}</span>`).join(" ")}</div></div>`;
  };

  return `<!doctype html>
<html lang="pt-BR">
<head>
<meta charset="utf-8">
<style>
body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; background: #fffef2; color: #1B3A87; padding: 24px; margin: 0; }
.container { max-width: 720px; margin: 0 auto; background: #fff; border-radius: 16px; padding: 32px; box-shadow: 0 4px 16px rgba(0,0,0,0.06); }
h1 { color: #1B3A87; margin: 0 0 8px; font-size: 22px; }
h2 { color: #1B3A87; margin: 28px 0 12px; font-size: 15px; padding-bottom: 6px; border-bottom: 2px solid #F5BC2C; text-transform: uppercase; letter-spacing: 0.05em; }
.row { padding: 10px 0; border-bottom: 1px dashed #eee; }
.lbl { font-size: 11px; font-weight: 700; color: #5A7BB5; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 4px; }
.val { font-size: 14px; color: #1B3A87; line-height: 1.5; white-space: pre-line; }
.chip { display: inline-block; background: #FFF6DC; color: #B88A1E; padding: 3px 10px; border-radius: 999px; font-size: 12px; font-weight: 600; margin: 2px; }
.critico { background: #FFF6DC; border-left: 4px solid #F5BC2C; padding: 14px 18px; border-radius: 8px; margin: 12px 0; }
.footer { margin-top: 32px; padding-top: 16px; border-top: 1px solid #eee; font-size: 11px; color: #5A7BB5; }
</style>
</head>
<body>
<div class="container">
  <h1>🔥 Diagnóstico Renato preenchido</h1>
  <p style="color:#5A7BB5; margin: 0 0 20px; font-size: 14px;">Renato respondeu o diagnóstico pré-reunião. Material pronto pra montar plano + LPs com base na verdade dele.</p>

  <h2>👤 Identificação</h2>
  ${linha("Nome", d.nome)}
  ${linha("WhatsApp", d.whatsapp)}

  <h2>🔧 Operação real</h2>
  ${linha("Sistemas residenciais (12m)", d.sistemasUltimo12mResidencial)}
  ${linha("Sistemas comerciais (12m)", d.sistemasUltimo12mComercial)}
  ${linha("Sistemas industriais (12m)", d.sistemasUltimo12mIndustrial)}
  ${linha("Sistemas rurais (12m)", d.sistemasUltimo12mRural)}

  <div class="critico">
    <div class="lbl">⭐ MAIOR PROJETO ASSINADO</div>
    <div class="val">${escape(d.maiorProjeto)}</div>
  </div>

  ${linha("Carteira B2B atual (>50 kWp / pivô / granja)", d.carteiraB2BAtual)}
  ${linha("CREA-TO", d.creaNumero)}
  ${linha("ART pública pra citar", d.artPublica)}

  <h2>📸 Cases e prova social</h2>
  ${linha("Clientes que autorizam ser nominados (LGPD)", d.clientesAutorizam)}
  ${linha("Quem topa depoimento em vídeo", d.depoimentoVideo)}

  <h2>🎯 Ambição e investimento</h2>
  <div class="critico">
    <div class="lbl">🎯 CENÁRIO DE SUCESSO 12 MESES</div>
    <div class="val">${escape(d.cenarioSucesso12m)}</div>
  </div>

  ${lista("Tipos de crescimento que interessam", d.ambicaoTipo)}
  ${linha("Investimento mensal disponível em mídia", d.investimentoMidiaMensal)}

  <h2>👷 Equipe e estrutura</h2>
  ${linha("Equipe técnica", d.equipeTecnica)}
  ${linha("Drone / fotógrafo", d.drone)}
  ${linha("Marcas que trabalha", d.marcasTrabalha)}

  <h2>📱 Operacional digital</h2>
  ${linha("Quem responde WhatsApp", d.whatsappResponde)}
  ${linha("CRM / planilha / WhatsApp", d.crmOuPlanilha)}

  <h2>🏛 Programa Palmas Solar + Pronaf</h2>
  ${linha("Experiência protocolando IPTU verde", d.iptuExperiencia)}
  ${linha("Experiência com Pronaf", d.pronafExperiencia)}

  <h2>⚔️ Concorrência local</h2>
  ${linha("Pra quem perde mais", d.perdeMaisPra)}
  ${linha("Diferencial que faz fechar", d.diferencialQueFecha)}

  <h2>🎬 Info-produto FASE 2</h2>
  ${linha("Topa gravar curso B2B em 12-18m?", d.infoProdutoTopa)}
  ${linha("Tema/foco em mente", d.infoProdutoIdeia)}

  <h2>🚫 Restrições</h2>
  ${d.restricoes ? `<div class="critico"><div class="val">${escape(d.restricoes)}</div></div>` : `<div class="row"><em>nenhuma restrição declarada</em></div>`}

  <div class="footer">
    Enviado via auraenergy.vercel.app/diagnostico — ${new Date().toLocaleString("pt-BR")}
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
    .replace(/"/g, "&quot;");
}
