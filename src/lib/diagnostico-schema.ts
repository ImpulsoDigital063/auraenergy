import { z } from "zod";

// =====================================================================
// DIAGNÓSTICO PRÉ-REUNIÃO RENATO — schema canônico
// 16 perguntas estratégicas pra Renato responder antes da reunião
// com Eduardo. Mais leve que o briefing técnico — foco em decisão.
// =====================================================================

export const PERFIL_OPCOES = [
  "Eu mesmo (Renato)",
  "Sócio da Brasfrio",
  "Engenheiro terceirizado",
] as const;

export const AMBICAO_OPCOES = [
  "Crescer volume residencial",
  "Fechar 1-2 contratos industriais grandes",
  "Abrir frente rural / agro",
  "Expandir geograficamente em TO",
  "Combinação dos acima",
] as const;

export const CONCORRENTE_OPCOES = [
  "Unità",
  "Soluthi",
  "Palmas Energia Solar",
  "Capital Elétrica",
  "Outro / mais de um",
  "Não perco — fecho quase sempre",
] as const;

// =====================================================================

export const diagnosticoSchema = z.object({
  // Identificação
  nome: z.string().min(2, "Como você prefere ser chamado?"),
  whatsapp: z.string().min(8, "WhatsApp pra confirmação"),

  // 🔴 CRÍTICAS — Operação real
  sistemasUltimo12mResidencial: z.string().optional(),
  sistemasUltimo12mComercial: z.string().optional(),
  sistemasUltimo12mIndustrial: z.string().optional(),
  sistemasUltimo12mRural: z.string().optional(),

  maiorProjeto: z.string().min(3, "Conta seu maior projeto (kWp + cliente + cidade)"),

  carteiraB2BAtual: z.string().optional(),
  carteiraB2BDetalhe: z.string().optional(),

  creaNumero: z.string().optional(),
  artPublica: z.string().optional(),

  // 🔴 CRÍTICAS — Cases e prova social
  clientesAutorizam: z.string().optional(),
  depoimentoVideo: z.string().optional(),

  // 🔴 CRÍTICAS — Ambição e investimento
  cenarioSucesso12m: z.string().min(10, "Conta o cenário de sucesso (mín 10 chars)"),
  ambicaoTipo: z.array(z.string()).optional(),
  investimentoMidiaMensal: z.string().optional(),

  // 🟡 IMPORTANTES — Equipe
  equipeTecnica: z.string().optional(),
  drone: z.string().optional(),
  marcasTrabalha: z.string().optional(),

  // 🟡 IMPORTANTES — Operacional
  whatsappResponde: z.string().optional(),
  crmOuPlanilha: z.string().optional(),

  // 🟡 IMPORTANTES — Programa Palmas Solar + Pronaf
  iptuExperiencia: z.string().optional(),
  pronafExperiencia: z.string().optional(),

  // 🟡 IMPORTANTES — Concorrência
  perdeMaisPra: z.string().optional(),
  diferencialQueFecha: z.string().optional(),

  // 🟡 IMPORTANTE — Info-produto
  infoProdutoTopa: z.string().optional(),
  infoProdutoIdeia: z.string().optional(),

  // Restrições
  restricoes: z.string().optional(),
});

export type DiagnosticoData = z.infer<typeof diagnosticoSchema>;

export const diagnosticoDefaults: DiagnosticoData = {
  nome: "",
  whatsapp: "",
  sistemasUltimo12mResidencial: "",
  sistemasUltimo12mComercial: "",
  sistemasUltimo12mIndustrial: "",
  sistemasUltimo12mRural: "",
  maiorProjeto: "",
  carteiraB2BAtual: "",
  carteiraB2BDetalhe: "",
  creaNumero: "",
  artPublica: "",
  clientesAutorizam: "",
  depoimentoVideo: "",
  cenarioSucesso12m: "",
  ambicaoTipo: [],
  investimentoMidiaMensal: "",
  equipeTecnica: "",
  drone: "",
  marcasTrabalha: "",
  whatsappResponde: "",
  crmOuPlanilha: "",
  iptuExperiencia: "",
  pronafExperiencia: "",
  perdeMaisPra: "",
  diferencialQueFecha: "",
  infoProdutoTopa: "",
  infoProdutoIdeia: "",
  restricoes: "",
};
