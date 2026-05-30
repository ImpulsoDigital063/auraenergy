/**
 * Brand Voice · Aura Energy
 *
 * Fonte da verdade pra qualquer geração de copy Aura. Cravado a partir de:
 * - DIAGNOSTICO-BRASFRIO-SOLAR.md (seção 7C — Aura ≠ Brasfrio)
 * - MEGA-CLAUDE.md (regras de tom Impulso + palavras proibidas)
 * - 6-ARTES-INSTAGRAM-AURA.md (copies validadas em produção)
 * - PAUTA-STORIES-AURA.md (15 stories cravados em 08/05)
 * - LP em produção (auraenergypalmas.com)
 *
 * Importar em qualquer prompt de geração de copy.
 */

import type { BrandVoice } from "./types";

export const auraVoice: BrandVoice = {
  id: "aura-energy",
  displayName: "Aura Energy",

  identity: {
    sector: "Energia solar fotovoltaica",
    location: "Palmas-TO + região metropolitana + Tocantins",
    target: "Residencial / Comércio / Indústria / Rural",
    differential:
      "Engenheiro CREA-TO + financiamento BV Financeira (preferido) + 5 bancos parceiros + Pronaf 0,5% pra agro + Lei 14.300 transparente + garantia 12 anos painel · 10 anos inversor · 1 ano serviço",
    founder: {
      name: "Renato Edson",
      role: "Engenheiro eletricista CREA-TO · sócio Brasfrio + Aura",
      whatsapp: "(63) 9 9270-6284",
      voice:
        "Primeira pessoa do Renato (não institucional 'a Aura'). Engenheiro de Palmas conversando com cliente local. Profissional + acessível.",
    },
  },

  // Pilares — todo conteúdo bate em pelo menos 1
  pillars: [
    {
      name: "Especialista solar",
      description:
        "Não é generalista de Palmas. Vocabulário técnico-acessível. Diferencia de Brasfrio (genérico) e concorrentes locais que falam só economia abstrata.",
    },
    {
      name: "Tecnologia transparente",
      description:
        "Mostra cálculo, calculadora interativa, dados ANEEL, marcas Tier 1 (Trina/Canadian/Jinko + Growatt/Sungrow). Não vende sonho — vende projeto auditável com ART.",
    },
    {
      name: "Atendimento direto com Renato",
      description:
        "WhatsApp direto do Renato, não call center. Renato é o produto. Engenheiro responsável CREA-TO assina. Sem terceirização.",
    },
  ],

  tone: {
    posture: "Especialista/consultiva",
    relationship:
      "Engenheiro de Palmas conversando com cliente local — mostra os números, deixa a pessoa decidir",
    voiceRule:
      "Primeira pessoa do Renato (sócio). 'Eu fiz', 'A gente entrega', NUNCA 'A Aura é líder em soluções'.",
    formality:
      "Profissional + acessível. Não corporativo. Não influencer. Não guru.",
    urgency:
      "Regulatória factual (Fio B 60% em 2026, cronograma ANEEL). NUNCA fabricada ('ÚLTIMA CHANCE!!!', 'só hoje', 'vagas limitadas')",
    proof:
      "Dados duros + storytelling humano. Cliente real (bairro + kWp + R$ antes/depois) sempre que tiver permissão. Faixa de mercado quando não tiver.",
  },

  vocabulary: {
    use: [
      // Técnico-acessível (diferencial vs concorrentes locais)
      "Lei 14.300",
      "Fio B",
      "TUSD",
      "Energisa-TO",
      "kWp",
      "kWh/mês",
      "ART",
      "CREA-TO",
      "MMGD",
      "compensação de energia",
      "homologação",
      "concessionária",
      // Marcas Tier 1 (autoridade técnica)
      "Trina",
      "Canadian",
      "Jinko",
      "JA Solar",
      "Growatt",
      "Sungrow",
      "Huawei",
      "Fronius",
      "GoodWe",
      // Financiamento estruturado (Brasfrio nunca falou)
      "Solfácil",
      "BV",
      "Caixa CDC Solar",
      "Pronaf Bioeconomia",
      "carência",
      "120 meses",
      "0,79% a.m.",
      // Garantias (Brasfrio nunca falou)
      "garantia 12 anos painel",
      "10 anos inversor",
      "vida útil 25 anos",
      // Próprios da marca
      "Renato",
      "Aura Energy",
      "Palmas-TO",
      "Tocantins",
      // Localidade
      "Plano Diretor Sul",
      "Plano Diretor Norte",
      "Aureny",
      "Taquaralto",
      "Setor Sul",
      "Lago Sul",
      "Paraíso",
      "Luzimangues",
      "Dianópolis",
      "Colinas",
    ],

    // Evitar — sai do tom Aura
    avoid: [
      // Corporativês genérico
      "soluções",
      "experiência única",
      "atendimento personalizado",
      "transformar sua casa",
      "mudança de vida",
      "energia limpa" /* (sozinho, sem dado) */,
      "sustentabilidade" /* (sozinho, sem dado) */,
      "consciência ambiental",
      // Vendedor agressivo
      "ÚLTIMA CHANCE",
      "OFERTA IMPERDÍVEL",
      "VAGAS LIMITADAS",
      "SÓ HOJE",
      "PROMOÇÃO RELÂMPAGO",
      // Brasfrio-like (a evitar pra diferenciar marca)
      "líder em energia solar",
      "referência no segmento",
      // Influencer
      "vibes",
      "queridos",
      "minha gente",
      "galera",
    ],

    // Proibido — feedback explícito Eduardo cravado
    forbidden: [
      // MEGA-CLAUDE
      "exatamente",
      "absolutamente",
      "potencializar",
      "alavancar",
      "democratizar",
      "excelência",
      "sinergia",
      // Palavrões (feedback tom_sem_palavroes)
      "caralho",
      "porra",
      "puta merda",
    ],
  },

  patterns: {
    openersValidated: [
      "Você sabia?",
      "Cada ano que você adia, [X].",
      "Para [bairro] em Palmas-TO:",
      "Cliente Aura · [bairro] · [kWp]:",
      "Tô vendo muito cliente perguntar:",
      "Engenheiro CREA-TO em Palmas:",
      "Oi, eu sou o Renato.",
      "Hoje [DATA] em Palmas-TO:",
    ],

    ctasValidated: [
      "Calcula sua economia em 30s — link na bio",
      "Manda foto da sua conta no WhatsApp",
      "Falar com o Renato direto · (63) 9 9270-6284",
      "Quero entender o Fio B no meu caso",
      "Simular meu sistema sem cadastro",
      "Receber orçamento personalizado em 24h",
    ],

    proofPattern:
      "Cliente Aura · [bairro] · [kWp] sistema · pagava R$[antes]/mês · agora paga R$[depois]/mês · ROI [anos] anos",

    objectionHandlers: {
      caro: "Sistema 5kWp paga em 4-5 anos. Depois disso, 20+ anos gerando energia de graça. Em 25 anos: R$[X] economizados.",
      "fio b mata": "Fio B 60% reduz a vantagem mas NÃO elimina. ROI passou de 4 pra 5,5 anos. Sistema ainda gera 19,5 anos de lucro puro depois disso.",
      financiamento:
        "Solfácil 0,79% a.m. em 120 meses. Parcela quase sempre menor que conta atual.",
      "nublado palmas":
        "Palmas tem HSP 5,9 kWh/m²/dia — entre os 3 maiores do Brasil. Sistema gera em qualquer estação.",
    },
  },

  visual: {
    palettePrimary: {
      cream: "#fffef2",
      darkZone: "#0a0d18",
      blue: "#1B3A87",
      blueDeep: "#0E2152",
    },
    paletteAccent: {
      yellow: "#F5BC2C", // sol/energia
      orange: "#FF8B3D", // urgência regulatória
      neonGreen: "#10F19F", // ativo financeiro / ROI
    },
    typography:
      "Inter (Google Fonts) — body 400/500, heading 700/800. Família condensed (Bebas/Anton) opcional pra números-herói.",
    iconRule:
      "SVG inline sempre. Nunca emoji decorativo. Emoji só funcional (📍 pin, ✅ check) e cirúrgico (max 1-2 por peça).",
  },

  // Exemplos cravados de copy validada em produção (3-shot pro LLM)
  examples: [
    {
      format: "post-instagram",
      objective: "Educação · Lei 14.300 · urgência regulatória",
      copy: `Você sabia?

Em janeiro/2026, a cobrança do Fio B subiu pra 60%. Em 2025 era 45%.

Significa: quem instalar HOJE ainda paga MENOS pelo restante da vida útil do sistema (25 anos).

Quem espera 2027 vai pagar 75% do Fio B. 2028: 90%. 2029: 100%.

A janela boa é AGORA. Calcula sua economia em 30s — link na bio.`,
    },
    {
      format: "story",
      objective: "Prova social · antes/depois conta de luz",
      copy: `Cliente Aura · Plano Diretor Sul · 5,5 kWp.

Pagava R$ 720/mês de luz. Agora paga R$ 92.

Investimento: R$ 38mil. ROI: 5 anos. Sistema dura 25.

Quer simular o seu? Manda foto da conta no WhatsApp.`,
    },
    {
      format: "meta-ads-topo",
      objective: "Captação residencial classe B/C Palmas",
      copy: `Engenheiro CREA-TO de Palmas-TO.

Calculo sua economia com solar em 30 segundos. Sem cadastro, sem call center insistindo depois. Só números honestos.

Já mostro:
- Quanto você paga hoje vs com solar
- Em quanto tempo o sistema se paga
- Quanto economiza em 25 anos

[botão] Simular agora`,
    },
    {
      format: "carrossel-instagram-capa",
      objective: "Hook + curiosidade · Fio B",
      copy: `ATENÇÃO PALMAS-TO

Cada ano que você adia,
solar fica mais caro.

Lei 14.300 sobe a taxa da TUSD todo ano até 2029.

→ Arrasta pra entender em 4 cards`,
    },
  ],

  // Negativos cravados — copies que NÃO podem ser geradas
  antiExamples: [
    {
      reason: "Vendedor agressivo + urgência fabricada",
      bad: `🔥🔥 ÚLTIMA CHANCE 🔥🔥 Não perca essa OFERTA IMPERDÍVEL de energia solar! VAGAS LIMITADAS! Transforme sua vida HOJE!`,
    },
    {
      reason: "Corporativês genérico sem dado",
      bad: `A Aura Energy é líder em soluções de energia limpa, oferecendo experiência única em sustentabilidade para democratizar o acesso à energia solar.`,
    },
    {
      reason: "Influencer fora do tom técnico-acessível",
      bad: `Oi galerinhaaa! Hoje vim contar pra vocês sobre o solar 😍 que tá bombando aqui em Palmas! Vibes positivas total ✨`,
    },
  ],
};
