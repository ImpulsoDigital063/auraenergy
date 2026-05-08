import { z } from "zod";

// =====================================================================
// BRIEFING AURA V2 — Schema canônico (refatorado 08/05/2026)
// =====================================================================
// 9 Blocos de perguntas profundas + identificação básica.
// Substitui V1 que Renato não respondeu. V2 traz perguntas com opções
// pré-pesquisadas (Greener 2026, bancos solares, Pronaf, Fio B, Programa
// Palmas Solar) e Bloco 9 separando DECISÕES ESTRATÉGICAS.
// =====================================================================

// ─────────────────────────────────────────────────────────────────
// OPÇÕES PRÉ-DEFINIDAS
// ─────────────────────────────────────────────────────────────────

export const MARCAS_MODULO = [
  "Canadian Solar",
  "Trina Solar",
  "JA Solar",
  "Risen Energy",
  "BYD",
  "Jinko",
  "LONGi",
  "DAH Solar",
] as const;

export const MARCAS_INVERSOR = [
  "Growatt",
  "Deye",
  "Sungrow",
  "WEG",
  "Solis",
  "Fronius",
  "GoodWe",
  "SMA",
  "Huawei",
] as const;

export const MARCAS_BATERIA = [
  "BYD",
  "Pylontech",
  "Freedom",
  "Growatt",
  "Deye",
  "Não trabalho com bateria",
] as const;

export const BANCOS_SOLAR = [
  "Solfácil",
  "BV Financeira",
  "Sicredi",
  "Sicoob",
  "BNDES Finame",
  "Banco do Brasil — Programa Agro Energia",
  "Banco do Nordeste — FNE Sol",
  "Pronaf Bioeconomia",
  "Galpa",
  "Meu Financiamento Solar (MFS)",
  "Santander",
  "Itaú",
] as const;

export const VIBE_MARCA = [
  "Técnica e confiável",
  "Premium e exclusiva",
  "Familiar e acolhedora",
  "Inovadora e tech",
  "Robusta e do agro",
  "Sustentável e verde",
] as const;

export const POSICIONAMENTO_12M = [
  "Maior empresa de fotovoltaico de Palmas em volume",
  "Marca premium que cobra mais caro mas entrega projeto perfeito",
  "Especialista em agro/rural (nicho que ninguém domina em TO)",
  "Especialista em B2B/comercial",
  "Empresa institucional pra prefeituras/órgãos públicos",
] as const;

export const ORIGEM_LEAD = [
  "Indicação cliente Brasfrio antigo",
  "Indicação amigo/família",
  "Instagram/Facebook",
  "Google (orgânico)",
  "Anúncios Meta/Google",
  "Visita presencial",
] as const;

export const OBJECAO_FECHAMENTO = [
  '"Vou pensar / pesquisar mais"',
  '"Concorrente fez por menos"',
  '"Não tenho certeza com Fio B"',
  '"Tô esperando bater grana"',
  '"Esposa/marido não topou"',
  '"Medo do financiamento"',
  '"Não confio em fotovoltaico"',
] as const;

export const DOR_INICIAL = [
  '"Conta de luz tá insuportável"',
  '"Quero saber se compensa"',
  '"Vendo todo mundo botando, queria entender"',
  '"Preciso orçamento urgente"',
  '"Quero financiar, qual banco?"',
] as const;

export const ARG_COMERCIAL = [
  "ROI / payback em meses",
  "Reduz folha de R$X/ano",
  "Marketing verde / atrai cliente",
  "Valoriza ponto comercial",
] as const;

export const ARG_INDUSTRIAL = [
  "BNDES Finame Baixo Carbono",
  "Crédito de carbono / ESG",
  "Estabilidade frente a reajustes Energisa",
] as const;

export const BLOQUEIO_RURAL = [
  "Não conhece Pronaf Bioeconomia",
  "Tem medo de financiar",
  "Energia sobrando não compensa",
] as const;

export const TEMPO_DIA = [
  "Menos de 30min — preciso de tudo automatizado",
  "30-60min — consigo postar diariamente",
  "1-2 horas — gravo vídeo, escrevo resposta",
  "2-4 horas — modo guerra",
] as const;

export const QUEM_RESPONDE_WPP = [
  "Eu mesmo (Renato)",
  "Vendedor/SDR Brasfrio",
  "Vou contratar SDR",
  "Bot/automação + eu depois",
] as const;

export const CANAL_CAPTACAO = [
  "Instagram orgânico",
  "Google Ads",
  "Meta Ads",
  "Indicação cliente Brasfrio",
  "WhatsApp em massa (lista Brasfrio)",
  "Parceria lojas material construção",
] as const;

export const GARANTIAS_OFERECIDAS = [
  "Garantia de performance (% mínimo geração)",
  "Monitoramento por app",
  "Limpeza preventiva",
  "Visita técnica anual",
  "Suporte WhatsApp 24h",
  "Suporte horário comercial",
  "Reposição grátis dentro garantia",
  "Treinamento do cliente",
  "Mudança de titularidade se vender imóvel",
  "Curso/conteúdo educativo",
] as const;

export const CERTIFICACOES = [
  "CREA-TO PJ",
  "CREA pessoa física do RT",
  "ISO 9001",
  "Selo Inmetro",
  "Membro ABSOLAR",
  "Cooperativa solar",
] as const;

// ─────────────────────────────────────────────────────────────────
// SCHEMA Zod — 9 blocos
// ─────────────────────────────────────────────────────────────────

export const briefingSchema = z.object({
  // Identificação
  nome: z.string().min(2, "Como te chamamos?"),
  whatsapp: z.string().min(8, "WhatsApp pra confirmar recebimento"),

  // BLOCO 1 · Operação
  anosBrasfrio: z.coerce.number().min(0).max(50),
  anoInicioFotovoltaico: z.coerce.number().min(2000).max(2030),
  instalacoes12m: z.coerce.number().min(0),
  kwpTotal12m: z.coerce.number().min(0),
  maiorProjeto: z.string().optional(),
  numTecnicos: z.coerce.number().min(0),
  numVendas: z.coerce.number().min(0),
  numAdmin: z.coerce.number().min(0),
  creaTO: z.string().optional(),
  artPublica: z.string().optional(),
  prazoEntregaResidencial: z.coerce.number().min(1).max(365),
  prazoEntregaComercial: z.coerce.number().min(1).max(365).optional(),
  prazoEntregaIndustrial: z.coerce.number().min(1).max(365).optional(),
  prazoEntregaRural: z.coerce.number().min(1).max(365).optional(),
  frotaPropria: z.boolean(),
  ferramentaCompleta: z.boolean(),
  projetoInterno: z.enum(["interno", "terceiro"]),
  distanciaMaxKm: z.coerce.number().min(0).max(2000),

  // BLOCO 2 · Cliente ideal
  mixResidencial: z.coerce.number().min(0).max(100),
  mixComercial: z.coerce.number().min(0).max(100),
  mixIndustrial: z.coerce.number().min(0).max(100),
  mixRural: z.coerce.number().min(0).max(100),
  origemLead: z.array(z.string()).min(1),
  nichoMaisLucro: z.string().min(2),
  clienteToxico: z.array(z.string()).optional(),
  clienteToxicoOutro: z.string().optional(),
  objecaoFechamento: z.array(z.string()),
  objecaoOutra: z.string().optional(),
  dorInicial: z.array(z.string()),
  dorOutra: z.string().optional(),
  ticketResidencial: z.coerce.number().min(0),
  ticketComercial: z.coerce.number().min(0),
  ticketIndustrial: z.coerce.number().min(0),
  ticketRural: z.coerce.number().min(0),
  ticketMinimo: z.coerce.number().min(0),

  // BLOCO 3 · Posicionamento
  auraEhOQue: z.string().min(10),
  posicionamento12m: z.string().min(1),
  vibeMarca: z.array(z.string()).min(1).max(2),
  concorrentePalmas: z.string().min(2),
  concorrenteForcas: z.array(z.string()).optional(),
  concorrenteFraquezas: z.array(z.string()).optional(),
  marcasAdmiradas: z.string().optional(),

  // BLOCO 4 · Catálogo
  modulosUsa: z.array(z.string()).min(1),
  moduloPreferido: z.string().min(1),
  inversoresUsa: z.array(z.string()).min(1),
  inversorPreferido: z.string().min(1),
  bateriaFrequencia: z.enum(["frequente", "ocasional", "raro", "nunca"]),
  bateriasUsa: z.array(z.string()).optional(),
  precoKitMini3kwp: z.coerce.number().min(0).optional(),
  precoKitPadrao5kwp: z.coerce.number().min(0).optional(),
  precoKitPlus8kwp: z.coerce.number().min(0).optional(),
  precoKitPremium10kwp: z.coerce.number().min(0).optional(),
  precoKitPremiumPlus15kwp: z.coerce.number().min(0).optional(),
  precoComercialPequeno: z.coerce.number().min(0).optional(),
  precoComercialMedio: z.coerce.number().min(0).optional(),
  precoComercialGrande: z.coerce.number().min(0).optional(),
  precoRuralSitio: z.coerce.number().min(0).optional(),
  precoRuralMedia: z.coerce.number().min(0).optional(),
  garantiaModulo: z.coerce.number().min(0).max(30),
  garantiaInversor: z.coerce.number().min(0).max(30),
  garantiaServico: z.coerce.number().min(0).max(30),
  ofereceGarantiaPerformance: z.boolean(),
  garantiaPerformancePct: z.coerce.number().min(0).max(100).optional(),
  garantiaPerformanceAnos: z.coerce.number().min(0).max(30).optional(),
  margemResidencialPct: z.coerce.number().min(0).max(100).optional(),
  margemComercialPct: z.coerce.number().min(0).max(100).optional(),
  margemIndustrialPct: z.coerce.number().min(0).max(100).optional(),
  margemRuralPct: z.coerce.number().min(0).max(100).optional(),

  // BLOCO 5 · Financiamento
  bancosConvenio: z.array(z.string()),
  bancoPreferido: z.string().min(1),
  taxaAprovacao: z.coerce.number().min(0).max(100),
  pctTrocaBanco: z.coerce.number().min(0).max(100).optional(),
  pctDesistencia: z.coerce.number().min(0).max(100).optional(),
  aceitaPixEntrada: z.enum(["sim_recomendo", "sim_nao_incentivo", "nao"]),
  prazoSolfacil: z.coerce.number().min(0).max(60).optional(),
  prazoBV: z.coerce.number().min(0).max(60).optional(),
  prazoCooperativa: z.coerce.number().min(0).max(60).optional(),
  experienciaPronaf: z.enum([
    "sim_varias",
    "sim_alguma",
    "nao_quero_aprender",
    "nao_conhecia",
  ]),

  // BLOCO 6 · Heros LPs
  heroCasaHeadline: z.string().min(5),
  casoCasaCliente: z.string().optional(),
  casoCasaBairro: z.string().optional(),
  casoCasaKwp: z.coerce.number().min(0).optional(),
  casoCasaContaAntes: z.coerce.number().min(0).optional(),
  casoCasaContaDepois: z.coerce.number().min(0).optional(),
  casoCasaDias: z.coerce.number().min(0).optional(),
  duvidaResidencialFrequente: z.string().optional(),

  heroComercioHeadline: z.string().min(5),
  casoComercioNome: z.string().optional(),
  casoComercioTipo: z.string().optional(),
  casoComercioBairro: z.string().optional(),
  casoComercioKwp: z.coerce.number().min(0).optional(),
  casoComercioContaAntes: z.coerce.number().min(0).optional(),
  casoComercioContaDepois: z.coerce.number().min(0).optional(),
  argumentoComercial: z.array(z.string()).optional(),

  heroIndustriaHeadline: z.string().min(5),
  casoIndustriaNome: z.string().optional(),
  casoIndustriaSetor: z.string().optional(),
  casoIndustriaKwp: z.coerce.number().min(0).optional(),
  casoIndustriaInvest: z.coerce.number().min(0).optional(),
  casoIndustriaEconomia: z.coerce.number().min(0).optional(),
  casoIndustriaRoi: z.coerce.number().min(0).optional(),
  argumentoIndustrial: z.array(z.string()).optional(),

  heroRuralHeadline: z.string().min(5),
  casoRuralTipo: z.string().optional(),
  casoRuralCidade: z.string().optional(),
  casoRuralKwp: z.coerce.number().min(0).optional(),
  casoRuralUso: z.string().optional(),
  bloqueioRural: z.array(z.string()).optional(),

  heroMaeFraseImpacto: z.string().min(5),

  // BLOCO 7 · Estratégia 90d
  tempoDiaAura: z.string().min(1),
  quemRespondeWpp: z.string().min(1),
  investimentoMensalAds: z.coerce.number().min(0),
  canalCaptacaoPrimario: z.array(z.string()).min(1),
  metaMes1: z.coerce.number().min(0),
  metaMes2: z.coerce.number().min(0),
  metaMes3: z.coerce.number().min(0),

  // BLOCO 8 · Garantias e diferenciais
  garantiasOferece: z.array(z.string()),
  garantiasQuerOferecer: z.array(z.string()).optional(),
  certificacoes: z.array(z.string()),
  certificacoesOutras: z.string().optional(),
  brigadaProtecao: z.string().optional(),

  // BLOCO 9 · DECISÕES ESTRATÉGICAS
  precoLpStrategy: z.enum([
    "preco_fixo",
    "faixa",
    "pedir_orcamento",
    "outro",
  ]),
  precoLpStrategyOutro: z.string().optional(),
  marcaModuloDominante: z.enum([
    "uma_marca",
    "varias_marcas",
    "depende_nicho",
  ]),
  marcaModuloDominanteDetalhe: z.string().optional(),
  pronafEspecialista: z.enum([
    "sim_dominar",
    "sim_so_indicar",
    "nao_agora",
    "outro",
  ]),
  pronafEspecialistaOutro: z.string().optional(),
  bonusPalmasSolar: z.enum([
    "sim_gratis",
    "sim_cobrando",
    "nao_oferece",
    "outro",
  ]),
  bonusPalmasSolarValor: z.coerce.number().min(0).optional(),
  bateriaPosicionamento: z.enum([
    "sim_foco",
    "sim_upsell",
    "nao_agora",
    "outro",
  ]),
  garantiaPerformanceDecisao: z.enum([
    "sim_oferecer",
    "sim_com_condicoes",
    "nao_oferecer",
    "outro",
  ]),
  garantiaPerformanceCondicoes: z.string().optional(),
  comunicaClienteNaoAtendido: z.enum(["sim", "nao", "outro"]),
  visitaTecnicaPolitica: z.enum([
    "sim_sempre_gratis",
    "sim_dentro_km",
    "cobro_visita",
    "nao_faco",
    "outro",
  ]),
  visitaTecnicaKm: z.coerce.number().min(0).optional(),
  visitaTecnicaValor: z.coerce.number().min(0).optional(),
  pacoteAssinaturaInteresse: z.enum([
    "sim_top_gama",
    "talvez_futuro",
    "nao_faz_sentido",
  ]),
  cursoBonusInteresse: z.enum(["sim_ajuda", "nao_cliente_nao_quer", "outro"]),

  motivacao12m: z.string().optional(),
});

export type BriefingData = z.infer<typeof briefingSchema>;

// ─────────────────────────────────────────────────────────────────
// Defaults
// ─────────────────────────────────────────────────────────────────

export const briefingDefaults: BriefingData = {
  nome: "",
  whatsapp: "",
  anosBrasfrio: 0,
  anoInicioFotovoltaico: 2020,
  instalacoes12m: 0,
  kwpTotal12m: 0,
  maiorProjeto: "",
  numTecnicos: 0,
  numVendas: 0,
  numAdmin: 0,
  creaTO: "",
  artPublica: "",
  prazoEntregaResidencial: 30,
  prazoEntregaComercial: 45,
  prazoEntregaIndustrial: 90,
  prazoEntregaRural: 60,
  frotaPropria: false,
  ferramentaCompleta: false,
  projetoInterno: "interno",
  distanciaMaxKm: 200,

  mixResidencial: 0,
  mixComercial: 0,
  mixIndustrial: 0,
  mixRural: 0,
  origemLead: [],
  nichoMaisLucro: "",
  clienteToxico: [],
  clienteToxicoOutro: "",
  objecaoFechamento: [],
  objecaoOutra: "",
  dorInicial: [],
  dorOutra: "",
  ticketResidencial: 0,
  ticketComercial: 0,
  ticketIndustrial: 0,
  ticketRural: 0,
  ticketMinimo: 0,

  auraEhOQue: "",
  posicionamento12m: "",
  vibeMarca: [],
  concorrentePalmas: "",
  concorrenteForcas: [],
  concorrenteFraquezas: [],
  marcasAdmiradas: "",

  modulosUsa: [],
  moduloPreferido: "",
  inversoresUsa: [],
  inversorPreferido: "",
  bateriaFrequencia: "raro",
  bateriasUsa: [],
  precoKitMini3kwp: 0,
  precoKitPadrao5kwp: 0,
  precoKitPlus8kwp: 0,
  precoKitPremium10kwp: 0,
  precoKitPremiumPlus15kwp: 0,
  precoComercialPequeno: 0,
  precoComercialMedio: 0,
  precoComercialGrande: 0,
  precoRuralSitio: 0,
  precoRuralMedia: 0,
  garantiaModulo: 25,
  garantiaInversor: 10,
  garantiaServico: 1,
  ofereceGarantiaPerformance: false,
  garantiaPerformancePct: 0,
  garantiaPerformanceAnos: 0,
  margemResidencialPct: 0,
  margemComercialPct: 0,
  margemIndustrialPct: 0,
  margemRuralPct: 0,

  bancosConvenio: [],
  bancoPreferido: "",
  taxaAprovacao: 0,
  pctTrocaBanco: 0,
  pctDesistencia: 0,
  aceitaPixEntrada: "sim_recomendo",
  prazoSolfacil: 0,
  prazoBV: 0,
  prazoCooperativa: 0,
  experienciaPronaf: "nao_conhecia",

  heroCasaHeadline: "",
  casoCasaCliente: "",
  casoCasaBairro: "",
  casoCasaKwp: 0,
  casoCasaContaAntes: 0,
  casoCasaContaDepois: 0,
  casoCasaDias: 0,
  duvidaResidencialFrequente: "",

  heroComercioHeadline: "",
  casoComercioNome: "",
  casoComercioTipo: "",
  casoComercioBairro: "",
  casoComercioKwp: 0,
  casoComercioContaAntes: 0,
  casoComercioContaDepois: 0,
  argumentoComercial: [],

  heroIndustriaHeadline: "",
  casoIndustriaNome: "",
  casoIndustriaSetor: "",
  casoIndustriaKwp: 0,
  casoIndustriaInvest: 0,
  casoIndustriaEconomia: 0,
  casoIndustriaRoi: 0,
  argumentoIndustrial: [],

  heroRuralHeadline: "",
  casoRuralTipo: "",
  casoRuralCidade: "",
  casoRuralKwp: 0,
  casoRuralUso: "",
  bloqueioRural: [],

  heroMaeFraseImpacto: "",

  tempoDiaAura: "",
  quemRespondeWpp: "",
  investimentoMensalAds: 0,
  canalCaptacaoPrimario: [],
  metaMes1: 0,
  metaMes2: 0,
  metaMes3: 0,

  garantiasOferece: [],
  garantiasQuerOferecer: [],
  certificacoes: [],
  certificacoesOutras: "",
  brigadaProtecao: "",

  precoLpStrategy: "faixa",
  precoLpStrategyOutro: "",
  marcaModuloDominante: "uma_marca",
  marcaModuloDominanteDetalhe: "",
  pronafEspecialista: "nao_agora",
  pronafEspecialistaOutro: "",
  bonusPalmasSolar: "nao_oferece",
  bonusPalmasSolarValor: 0,
  bateriaPosicionamento: "nao_agora",
  garantiaPerformanceDecisao: "nao_oferecer",
  garantiaPerformanceCondicoes: "",
  comunicaClienteNaoAtendido: "nao",
  visitaTecnicaPolitica: "sim_dentro_km",
  visitaTecnicaKm: 100,
  visitaTecnicaValor: 0,
  pacoteAssinaturaInteresse: "talvez_futuro",
  cursoBonusInteresse: "sim_ajuda",

  motivacao12m: "",
};
