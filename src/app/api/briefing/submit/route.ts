import { NextResponse } from "next/server";
import { Resend } from "resend";
import { briefingSchema, type BriefingData } from "@/lib/briefing-schema";

// =====================================================================
// POST /api/briefing/submit
// Recebe briefing V2 (9 blocos) preenchido pelo Renato → envia email
// branded pro Eduardo (suporte Impulso) via Resend.
// =====================================================================

const TO_EMAIL = "edubchaves5@gmail.com";
const FROM_EMAIL =
  process.env.RESEND_FROM_EMAIL || "Aura Energy Briefing <onboarding@resend.dev>";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = briefingSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Dados inválidos", issues: parsed.error.issues },
        { status: 400 }
      );
    }

    const data = parsed.data;
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error("[briefing] RESEND_API_KEY não configurado");
      return NextResponse.json({
        ok: true,
        warning: "email não enviado (configurar RESEND_API_KEY)",
      });
    }

    const resend = new Resend(apiKey);
    const html = renderBriefingEmail(data);

    await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      subject: `🎯 Briefing-V2 Aura preenchido — ${data.nome} · pronto pra calibrar LPs`,
      html,
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
// HELPERS
// =====================================================================

function escape(text: string | undefined | null): string {
  if (!text) return "";
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function fmtBRL(n: number | undefined): string {
  if (!n || n === 0) return "—";
  return n.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 0,
  });
}

function fmtList(arr: string[] | undefined): string {
  if (!arr || arr.length === 0) return "<em style='color:#999'>—</em>";
  return `<ul style='margin:4px 0 0 18px;padding:0'>${arr
    .map((x) => `<li>${escape(x)}</li>`)
    .join("")}</ul>`;
}

function fmtRow(label: string, value: string | number | undefined): string {
  const v = value === 0 || value === "" || value == null ? "—" : value;
  return `<tr>
    <td style='padding:6px 12px 6px 0;color:#666;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.04em;width:200px;vertical-align:top'>${label}</td>
    <td style='padding:6px 0;font-size:14px;color:#1a1a1a'>${escape(String(v))}</td>
  </tr>`;
}

const TRADUCAO_ENUM: Record<string, string> = {
  // projetoInterno
  interno: "Interno (Aura)",
  terceiro: "Terceirizado",
  // bateriaFrequencia
  frequente: "Frequente (>20% das vendas)",
  ocasional: "Ocasional (5-20%)",
  raro: "Raro (<5%)",
  nunca: "Nunca, só on-grid",
  // aceitaPixEntrada
  sim_recomendo: "Sim, recomendo",
  sim_nao_incentivo: "Sim, mas não incentivo",
  nao: "Não",
  // experienciaPronaf
  sim_varias: "Sim, várias vendas",
  sim_alguma: "Sim, alguma",
  nao_quero_aprender: "Não, mas quero aprender",
  nao_conhecia: "Não conhecia",
  // precoLpStrategy
  preco_fixo: "Preço fixo público",
  faixa: "Faixa (a partir de R$X)",
  pedir_orcamento: "Apenas pedir orçamento",
  outro: "Outro",
  // marcaModuloDominante
  uma_marca: "1 marca dominante",
  varias_marcas: "Várias marcas",
  depende_nicho: "Depende do nicho",
  // pronafEspecialista / bonusPalmasSolar / etc
  sim_dominar: "Sim, vou dominar",
  sim_so_indicar: "Sim, só indico",
  nao_agora: "Não agora",
  sim_gratis: "Sim, grátis",
  sim_cobrando: "Sim, cobrando R$X",
  nao_oferece: "Não ofereço",
  sim_foco: "Sim, foco principal",
  sim_upsell: "Sim, como upsell",
  sim_oferecer: "Sim, oferecer",
  sim_com_condicoes: "Sim, com condições",
  nao_oferecer: "Não oferecer",
  sim: "Sim",
  sim_sempre_gratis: "Sempre grátis",
  sim_dentro_km: "Grátis até X km",
  cobro_visita: "Cobro visita",
  nao_faco: "Não faço",
  sim_top_gama: "Sim, top de gama",
  talvez_futuro: "Talvez no futuro",
  nao_faz_sentido: "Não faz sentido",
  sim_ajuda: "Sim, ajuda cliente",
  nao_cliente_nao_quer: "Não, cliente não quer",
};

function tr(v: string | undefined): string {
  return v ? TRADUCAO_ENUM[v] ?? v : "—";
}

function renderBriefingEmail(d: BriefingData): string {
  return `<!doctype html>
<html lang="pt-BR">
<head>
<meta charset="utf-8">
<style>
body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; background: #fffef2; color: #1a1a1a; padding: 24px; margin: 0; }
.container { max-width: 760px; margin: 0 auto; background: #fff; border-radius: 16px; padding: 32px; box-shadow: 0 4px 16px rgba(0,0,0,0.06); }
h1 { color: #0F1B3D; margin: 0 0 8px; font-size: 26px; }
h2 { color: #0F1B3D; margin: 32px 0 14px; font-size: 17px; padding-bottom: 8px; border-bottom: 2px solid #F5BC2C; }
h3 { color: #0F1B3D; margin: 18px 0 8px; font-size: 14px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; }
.card { background: #fffef2; padding: 16px; border-radius: 12px; margin-bottom: 14px; border: 1px solid rgba(26,26,26,0.06); }
table { border-collapse: collapse; width: 100%; }
.highlight { background: #FFF6DC; border-left: 4px solid #F5BC2C; padding: 12px 16px; border-radius: 8px; margin: 10px 0; }
ul { margin: 4px 0 4px 18px; padding: 0; }
.footer { margin-top: 32px; padding-top: 16px; border-top: 1px solid #eee; font-size: 12px; color: #666; }
.tag { display: inline-block; background: #F5BC2C; color: #0F1B3D; font-size: 10px; font-weight: 700; padding: 2px 8px; border-radius: 4px; text-transform: uppercase; letter-spacing: 0.05em; vertical-align: middle; margin-left: 8px; }
</style>
</head>
<body>
<div class="container">
  <h1>🎯 Briefing-V2 Aura preenchido</h1>
  <p style="color:#666; margin: 0 0 4px;"><strong>${escape(d.nome)}</strong> respondeu o briefing — pronto pra calibrar as LPs e a estratégia de captação.</p>
  <p style="color:#666; margin: 0 0 24px; font-size:13px;">WhatsApp: ${escape(d.whatsapp)} · Lembrete: revisar com Renato antes de subir qualquer copy ao público.</p>

  <h2>🏗 Bloco 1 — Operação Brasfrio→Aura</h2>
  <div class="card"><table>
    ${fmtRow("Anos da Brasfrio", d.anosBrasfrio)}
    ${fmtRow("Início fotovoltaico", d.anoInicioFotovoltaico)}
    ${fmtRow("Instalações últimos 12m", d.instalacoes12m)}
    ${fmtRow("Total kWp instalados (12m)", d.kwpTotal12m)}
    ${fmtRow("Maior projeto", d.maiorProjeto)}
    ${fmtRow("Equipe (técnicos / vendas / admin)", `${d.numTecnicos} / ${d.numVendas} / ${d.numAdmin}`)}
    ${fmtRow("CREA-TO", d.creaTO)}
    ${fmtRow("ART pública", d.artPublica)}
    ${fmtRow("Prazo entrega · residencial", `${d.prazoEntregaResidencial} dias`)}
    ${fmtRow("Prazo · comercial / industrial / rural", `${d.prazoEntregaComercial ?? "—"} / ${d.prazoEntregaIndustrial ?? "—"} / ${d.prazoEntregaRural ?? "—"} dias`)}
    ${fmtRow("Frota própria", d.frotaPropria ? "Sim" : "Não")}
    ${fmtRow("Ferramental completo", d.ferramentaCompleta ? "Sim" : "Não")}
    ${fmtRow("Projeto técnico", tr(d.projetoInterno))}
    ${fmtRow("Distância máxima de Palmas", `${d.distanciaMaxKm} km`)}
  </table></div>

  <h2>🎯 Bloco 2 — Cliente ideal</h2>
  <div class="card"><table>
    ${fmtRow("Mix · residencial / comercial / industrial / rural (%)", `${d.mixResidencial} / ${d.mixComercial} / ${d.mixIndustrial} / ${d.mixRural}`)}
    ${fmtRow("Nicho mais lucrativo", d.nichoMaisLucro)}
    ${fmtRow("Ticket médio · res / com / ind / rural", `${fmtBRL(d.ticketResidencial)} / ${fmtBRL(d.ticketComercial)} / ${fmtBRL(d.ticketIndustrial)} / ${fmtBRL(d.ticketRural)}`)}
    ${fmtRow("Ticket mínimo aceitável", fmtBRL(d.ticketMinimo))}
  </table></div>
  <h3>De onde vêm os clientes</h3>
  <div class="card">${fmtList(d.origemLead)}</div>
  <h3>Maior objeção de fechamento</h3>
  <div class="card">${fmtList(d.objecaoFechamento)}${d.objecaoOutra ? `<p style='margin:8px 0 0;font-size:13px'>Outra: ${escape(d.objecaoOutra)}</p>` : ""}</div>
  <h3>Maior dor inicial do cliente</h3>
  <div class="card">${fmtList(d.dorInicial)}${d.dorOutra ? `<p style='margin:8px 0 0;font-size:13px'>Outra: ${escape(d.dorOutra)}</p>` : ""}</div>

  <h2>🎨 Bloco 3 — Posicionamento</h2>
  <div class="highlight"><strong>Aura é:</strong> ${escape(d.auraEhOQue)}</div>
  <div class="card"><table>
    ${fmtRow("Onde quer estar em 12m", d.posicionamento12m)}
    ${fmtRow("Concorrente que mais ameaça", d.concorrentePalmas)}
    ${fmtRow("Marcas admiradas (não-solar)", d.marcasAdmiradas)}
  </table></div>
  <h3>Vibe da marca</h3>
  <div class="card">${fmtList(d.vibeMarca)}</div>

  <h2>⚡ Bloco 4 — Catálogo, marcas, kits</h2>
  <h3>Módulos</h3>
  <div class="card">
    <p style='margin:0 0 8px;font-size:13px;color:#666'>Marcas que usa:</p>
    ${fmtList(d.modulosUsa)}
    <p style='margin:12px 0 0;font-size:13px'><strong>Preferida:</strong> ${escape(d.moduloPreferido)}</p>
  </div>
  <h3>Inversores</h3>
  <div class="card">
    <p style='margin:0 0 8px;font-size:13px;color:#666'>Marcas que usa:</p>
    ${fmtList(d.inversoresUsa)}
    <p style='margin:12px 0 0;font-size:13px'><strong>Preferida:</strong> ${escape(d.inversorPreferido)}</p>
  </div>
  <h3>Bateria</h3>
  <div class="card"><table>
    ${fmtRow("Frequência", tr(d.bateriaFrequencia))}
    ${d.bateriaFrequencia !== "nunca" ? `<tr><td colspan='2'>${fmtList(d.bateriasUsa)}</td></tr>` : ""}
  </table></div>

  <h3>Tabela de preços residencial</h3>
  <div class="card"><table>
    ${fmtRow("Mini 3 kWp", fmtBRL(d.precoKitMini3kwp))}
    ${fmtRow("Padrão 5 kWp", fmtBRL(d.precoKitPadrao5kwp))}
    ${fmtRow("Plus 8 kWp", fmtBRL(d.precoKitPlus8kwp))}
    ${fmtRow("Premium 10 kWp", fmtBRL(d.precoKitPremium10kwp))}
    ${fmtRow("Premium+ 15 kWp", fmtBRL(d.precoKitPremiumPlus15kwp))}
  </table></div>
  <h3>Garantias</h3>
  <div class="card"><table>
    ${fmtRow("Módulo / Inversor / Serviço (anos)", `${d.garantiaModulo} / ${d.garantiaInversor} / ${d.garantiaServico}`)}
    ${fmtRow("Performance contratada?", d.ofereceGarantiaPerformance ? `Sim · ${d.garantiaPerformancePct ?? 0}% por ${d.garantiaPerformanceAnos ?? 0} anos` : "Não")}
  </table></div>

  <h2>🏦 Bloco 5 — Financiamento</h2>
  <h3>Bancos com convênio</h3>
  <div class="card">${fmtList(d.bancosConvenio)}</div>
  <div class="card"><table>
    ${fmtRow("Banco preferido", d.bancoPreferido)}
    ${fmtRow("Taxa aprovação média", `${d.taxaAprovacao}%`)}
    ${fmtRow("PIX como entrada parcial", tr(d.aceitaPixEntrada))}
    ${fmtRow("Experiência Pronaf Bioeconomia", tr(d.experienciaPronaf))}
  </table></div>

  <h2>🚀 Bloco 6 — Heros das LPs (CRÍTICO)</h2>

  <h3>🏠 LP /casa</h3>
  <div class="highlight"><strong>Headline:</strong> ${escape(d.heroCasaHeadline)}</div>
  <div class="card"><table>
    ${fmtRow("Caso · Bairro / kWp", `${d.casoCasaBairro ?? "—"} / ${d.casoCasaKwp ?? "—"} kWp`)}
    ${fmtRow("Conta antes / depois", `${fmtBRL(d.casoCasaContaAntes)} → ${fmtBRL(d.casoCasaContaDepois)}`)}
  </table></div>

  <h3>🏬 LP /comercio</h3>
  <div class="highlight"><strong>Headline:</strong> ${escape(d.heroComercioHeadline)}</div>
  <div class="card"><table>
    ${fmtRow("Caso · Tipo / kWp", `${d.casoComercioTipo ?? "—"} / ${d.casoComercioKwp ?? "—"} kWp`)}
    ${fmtRow("Conta antes / depois", `${fmtBRL(d.casoComercioContaAntes)} → ${fmtBRL(d.casoComercioContaDepois)}`)}
  </table></div>
  <div class="card">${fmtList(d.argumentoComercial)}</div>

  <h3>🏭 LP /industria</h3>
  <div class="highlight"><strong>Headline:</strong> ${escape(d.heroIndustriaHeadline)}</div>
  <div class="card"><table>
    ${fmtRow("Setor / kWp", `${d.casoIndustriaSetor ?? "—"} / ${d.casoIndustriaKwp ?? "—"} kWp`)}
    ${fmtRow("Investimento / Economia mensal / ROI", `${fmtBRL(d.casoIndustriaInvest)} · ${fmtBRL(d.casoIndustriaEconomia)}/mês · ${d.casoIndustriaRoi ?? "—"} anos`)}
  </table></div>
  <div class="card">${fmtList(d.argumentoIndustrial)}</div>

  <h3>🌾 LP /rural</h3>
  <div class="highlight"><strong>Headline:</strong> ${escape(d.heroRuralHeadline)}</div>
  <div class="card"><table>
    ${fmtRow("Tipo / Cidade / kWp / Uso", `${d.casoRuralTipo ?? "—"} / ${d.casoRuralCidade ?? "—"} / ${d.casoRuralKwp ?? "—"} kWp / ${d.casoRuralUso ?? "—"}`)}
  </table></div>
  <div class="card">${fmtList(d.bloqueioRural)}</div>

  <h3>🏠🏬🏭🌾 LP mãe (/)</h3>
  <div class="highlight"><strong>Frase de impacto:</strong> ${escape(d.heroMaeFraseImpacto)}</div>

  <h2>📅 Bloco 7 — Estratégia 90 dias</h2>
  <div class="card"><table>
    ${fmtRow("Tempo/dia dedicado à Aura", d.tempoDiaAura)}
    ${fmtRow("Quem responde WhatsApp", d.quemRespondeWpp)}
    ${fmtRow("Investimento mensal ads", fmtBRL(d.investimentoMensalAds))}
    ${fmtRow("Meta · M1 / M2 / M3 (instalações)", `${d.metaMes1} / ${d.metaMes2} / ${d.metaMes3}`)}
  </table></div>
  <h3>Canal de captação primário</h3>
  <div class="card">${fmtList(d.canalCaptacaoPrimario)}</div>

  <h2>🛡 Bloco 8 — Diferenciais</h2>
  <h3>O que JÁ oferece</h3>
  <div class="card">${fmtList(d.garantiasOferece)}</div>
  <h3>Certificações</h3>
  <div class="card">${fmtList(d.certificacoes)}${d.certificacoesOutras ? `<p style='margin:8px 0 0'>Outras: ${escape(d.certificacoesOutras)}</p>` : ""}</div>
  ${d.brigadaProtecao ? `<h3>Brigada de proteção</h3><div class="card"><p style='margin:0;line-height:1.6'>${escape(d.brigadaProtecao)}</p></div>` : ""}

  <h2>✨ Bloco 9 — Decisões estratégicas</h2>
  <div class="card"><table>
    ${fmtRow("Estratégia de preço LPs", tr(d.precoLpStrategy))}
    ${fmtRow("Marca de módulo dominante", tr(d.marcaModuloDominante))}
    ${fmtRow("Pronaf como diferencial", tr(d.pronafEspecialista))}
    ${fmtRow("Bônus Palmas Solar grátis", `${tr(d.bonusPalmasSolar)}${d.bonusPalmasSolarValor ? ` · ${fmtBRL(d.bonusPalmasSolarValor)}` : ""}`)}
    ${fmtRow("Bateria · posicionamento", tr(d.bateriaPosicionamento))}
    ${fmtRow("Garantia de performance", tr(d.garantiaPerformanceDecisao))}
    ${fmtRow("Visita técnica pré-orçamento", `${tr(d.visitaTecnicaPolitica)}${d.visitaTecnicaKm ? ` · ${d.visitaTecnicaKm}km` : ""}${d.visitaTecnicaValor ? ` · ${fmtBRL(d.visitaTecnicaValor)}` : ""}`)}
    ${fmtRow("Pacote assinatura mensal", tr(d.pacoteAssinaturaInteresse))}
    ${fmtRow("Mini-curso pós-venda", tr(d.cursoBonusInteresse))}
  </table></div>

  ${d.motivacao12m ? `<h2>💭 Última pergunta</h2><div class="highlight"><em>"Se a Aura virasse a maior em Palmas em 12 meses..."</em><br><br>${escape(d.motivacao12m)}</div>` : ""}

  <div class="footer">
    Enviado automaticamente via auraenergy.vercel.app/briefing<br>
    Aura Energy · Impulso Digital · ${new Date().toLocaleString("pt-BR")}
  </div>
</div>
</body>
</html>`;
}
