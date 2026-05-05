import { z } from "zod";

// =====================================================================
// BRIEFING AURA ENERGY — schema canônico
// 15 perguntas agrupadas em 10 cards temáticos.
// =====================================================================

export const SERVICOS_OPCOES = [
  "Sistema fotovoltaico residencial on-grid",
  "Sistema fotovoltaico comercial on-grid",
  "Sistema fotovoltaico industrial (>30 kWp)",
  "Sistema com bateria / híbrido (BESS)",
  "Sistema off-grid rural",
  "Bombeamento solar (poço artesiano / pivô)",
  "Carregadores veiculares EV (Wallbox)",
  "Aquecimento solar térmico (boiler)",
  "Manutenção / limpeza de placas",
  "Auditoria energética",
] as const;

export const PAINEIS_OPCOES = [
  "Trina Solar",
  "Canadian Solar",
  "Jinko",
  "JA Solar",
  "LONGi",
  "Risen",
  "BYD",
] as const;

export const INVERSORES_OPCOES = [
  "Growatt",
  "Sungrow",
  "Solis",
  "Huawei",
  "Fronius",
  "GoodWe",
  "Deye",
] as const;

export const PAGAMENTO_OPCOES = [
  "À vista (PIX/transferência)",
  "Cartão de crédito",
  "Financiamento Solfácil",
  "Financiamento BV",
  "Financiamento Caixa CDC Solar",
  "Financiamento Santander",
] as const;

export const COBERTURA_OPCOES = [
  "Só Palmas-TO",
  "Palmas + região metropolitana (Paraíso, Luzimangues, Aureny)",
  "Tocantins inteiro",
  "Tocantins + cidades vizinhas (Imperatriz, Marabá, Belém…)",
] as const;

export const POSICIONAMENTO_OPCOES = [
  "A · Aura é minha empresa nova, Brasfrio nem aparece",
  "B · Aura é minha frente solar, sustentada pela infra técnica da Brasfrio",
  "C · Aura e Brasfrio são empresas-irmãs com comunicação integrada",
] as const;

export const CLIENTE_ALVO_OPCOES = [
  "Residencial classe média (conta R$ 300-700)",
  "Residencial alto padrão (conta R$ 700+)",
  "Comércio pequeno (conta R$ 500-1.500)",
  "Comércio médio (conta R$ 1.500-5.000)",
  "Indústria pequena",
  "Produtor rural / fazendeiro",
  "Profissional liberal (médico, advogado, engenheiro)",
] as const;

export const ENGENHEIRO_OPCOES = [
  "Eu mesmo (Renato)",
  "Sócio da Brasfrio",
  "Engenheiro terceirizado",
] as const;

// =====================================================================
// SCHEMA Zod
// =====================================================================

export const briefingSchema = z.object({
  // Card 1 — Serviços
  servicos: z.array(z.string()).min(1, "Marque pelo menos 1 serviço"),
  servicosOutro: z.string().optional(),

  // Card 2 — Equipamentos
  paineis: z.array(z.string()),
  paineisOutro: z.string().optional(),
  inversores: z.array(z.string()),
  inversoresOutro: z.string().optional(),

  // Card 3 — Comercial
  ticketResidencialMin: z.coerce.number().min(0),
  ticketResidencialMax: z.coerce.number().min(0),
  ticketComercialMin: z.coerce.number().min(0),
  ticketComercialMax: z.coerce.number().min(0),
  prazoMedioDias: z.coerce.number().min(1).max(365),
  pagamento: z.array(z.string()),
  pagamentoOutro: z.string().optional(),

  // Card 4 — Técnico
  engenheiroResponsavel: z.string().min(1),
  engenheiroNome: z.string().optional(),
  engenheiroCrea: z.string().optional(),

  // Card 5 — Operação
  anosBrasfrio: z.coerce.number().min(0).max(50),
  numInstalacoes: z.coerce.number().min(0),
  cobertura: z.string().min(1),

  // Card 6 — Cliente-alvo + Dor
  clienteAlvoTop3: z.array(z.string()).min(1).max(3),
  dorReal: z.string().min(10, "Conta um pouco mais sobre a dor (mín 10 chars)"),

  // Card 7 — Posicionamento
  posicionamento: z.string().min(1),

  // Card 8 — Investimento + Meta
  investimentoMensal: z.coerce.number().min(0),
  meta90Dias: z.string().min(5, "Conta sua meta (mín 5 chars)"),

  // Card 9 — Materiais
  fotosEquipe: z.coerce.number().min(0),
  fotosInstalacoes: z.coerce.number().min(0),
  videos: z.coerce.number().min(0),
  depoimentosTexto: z.coerce.number().min(0),
  depoimentosVideo: z.coerce.number().min(0),
  contasAntesDepois: z.coerce.number().min(0),
  imagensDrone: z.boolean(),

  // Card 10 — Restrições
  restricoes: z.string().optional(),

  // Identificação Renato (sutil — só pra confirmar quem preencheu)
  nome: z.string().min(2, "Como podemos chamar você?"),
  whatsapp: z.string().min(8, "WhatsApp pra eu confirmar recebimento"),
});

export type BriefingData = z.infer<typeof briefingSchema>;

// =====================================================================
// Default values pra inicializar form
// =====================================================================

export const briefingDefaults: BriefingData = {
  servicos: [],
  servicosOutro: "",
  paineis: [],
  paineisOutro: "",
  inversores: [],
  inversoresOutro: "",
  ticketResidencialMin: 12000,
  ticketResidencialMax: 25000,
  ticketComercialMin: 25000,
  ticketComercialMax: 80000,
  prazoMedioDias: 30,
  pagamento: [],
  pagamentoOutro: "",
  engenheiroResponsavel: "",
  engenheiroNome: "",
  engenheiroCrea: "",
  anosBrasfrio: 0,
  numInstalacoes: 0,
  cobertura: "",
  clienteAlvoTop3: [],
  dorReal: "",
  posicionamento: "",
  investimentoMensal: 1500,
  meta90Dias: "",
  fotosEquipe: 0,
  fotosInstalacoes: 0,
  videos: 0,
  depoimentosTexto: 0,
  depoimentosVideo: 0,
  contasAntesDepois: 0,
  imagensDrone: false,
  restricoes: "",
  nome: "",
  whatsapp: "",
};
