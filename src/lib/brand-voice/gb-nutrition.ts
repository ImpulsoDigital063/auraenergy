/**
 * Brand Voice · GB Nutrition
 *
 * Cliente: Gabriel Barros · personal trainer · Palmas-TO
 * Negócio: e-commerce suplementos com curadoria profissional
 * Site: https://gbnutrition.online/
 * Instagram: @gbnutritionn
 *
 * Cravado em 16/05/2026 a partir de:
 * - README do projeto (`segundo-cerebro/2-PROCESSAMENTO/gb-nutrition/`)
 * - Análise visual do site (WebFetch · paleta + tom + tagline)
 * - 4 roteiros já aprovados (reel-1-curadoria, reel-2-motoboy, reel-3-educativo, stories-pack-7dias)
 */

import type { BrandVoice } from "./types";

export const gbNutritionVoice: BrandVoice = {
  id: "gb-nutrition",
  displayName: "GB Nutrition",

  identity: {
    sector: "E-commerce de suplementos · curadoria profissional",
    location: "Palmas-TO (matriz · entrega motoboy mesmo dia) + Brasil todo (Correios + transportadoras)",
    target: "Praticantes de musculação · alunos de academia · atletas amadores · público fitness Palmas-TO em primeiro lugar, depois Brasil todo",
    differential:
      "Curadoria de personal trainer (Gabriel só vende o que usa nele e nos alunos) + 5 marcas Tier 1 (Shark Pro, New Millen, IntegralMédica, Max Titanium, Nutrata) + logística diferenciada (motoboy Palmas mesmo dia)",
    founder: {
      name: "Gabriel Barros",
      role: "Personal trainer · dono GB Nutrition",
      voice:
        "Personal falando com aluno. Direto, sem floreio. Não corporativo, não influencer. Mostra produto, mostra resultado, deixa cliente decidir.",
    },
  },

  pillars: [
    {
      name: "Curadoria profissional",
      description:
        "Gabriel só vende o que ele USA nele mesmo ou nos alunos dele. Não é loja de margem — é prateleira do personal. Diferencia de marketplace genérico e farmácia.",
    },
    {
      name: "Logística que entrega",
      description:
        "Motoboy Palmas no MESMO dia (horário comercial) · Correios + transportadoras com melhor custo/prazo pra Brasil todo. Sem 'comprou e ficou 15 dias esperando'.",
    },
    {
      name: "Marcas Tier 1 testadas",
      description:
        "Shark Pro · New Millen · IntegralMédica · Max Titanium · Nutrata. Marcas com lastro científico e procedência. Gabriel rejeita marca duvidosa só porque o preço é baixo.",
    },
  ],

  tone: {
    posture: "Personal trainer falando com aluno",
    relationship:
      "Profissional + acessível. 'A gente já tá no game, sabe o que funciona' — sem postura de 'expert distante'",
    voiceRule:
      "Primeira pessoa do Gabriel ('Eu testei', 'O que eu indico'). Em copy de loja sem voz pessoal: 'na GB' ou 'aqui na loja', NUNCA 'a empresa' ou 'nossa missão'",
    formality:
      "Profissional-comercial fitness. Direto, prático. Não infantilizado. Não 'mano' / 'galera' / 'queridos'. Pode dizer 'aluno', 'treino', 'shape', 'cutting', 'bulking'",
    urgency:
      "Factual sempre. 'Frete grátis até 24/05' / 'Estoque limitado dessa marca' — só quando for VERDADE. Nunca 'última chance' fabricada",
    proof:
      "Caso real do treino (Gabriel ou aluno usando o produto), antes/depois físico SE autorizado, ranking de mais vendidos, depoimento direto",
  },

  vocabulary: {
    use: [
      // Técnico-fitness (uso diferencia de loja genérica)
      "hipertrofia",
      "definição",
      "cutting",
      "bulking",
      "recovery",
      "pump",
      "pré-treino",
      "pós-treino",
      "shake",
      "scoop",
      "dose",
      "g de proteína",
      "creatina monohidratada",
      "BCAA",
      "glutamina",
      "termogênico",
      "óxido nítrico",
      "vasculor",
      "treino pesado",
      // Marcas parceiras (autoridade)
      "Shark Pro",
      "New Millen",
      "IntegralMédica",
      "Max Titanium",
      "Nutrata",
      // Categorias do catálogo
      "Whey Protein",
      "Albumina",
      "Beef Protein",
      "hipercalórico",
      "pasta de amendoim",
      "C4",
      "Vasculor",
      "Evora",
      "Night Train",
      "Panic",
      // Logística
      "motoboy",
      "entrega mesmo dia",
      "Correios",
      "transportadora",
      "rastreamento",
      "Palmas-TO",
      // Personal
      "Gabriel",
      "personal trainer",
      "aluno",
      "academia",
      "treino",
      "ciclo",
      "fase",
      "objetivo",
    ],

    avoid: [
      // Corporativês genérico
      "soluções nutricionais",
      "experiência de compra",
      "nossa missão",
      "atendimento humanizado",
      "transformação completa",
      // Influencer/clichê
      "vibe",
      "galera",
      "mano",
      "queridos",
      "fala pessoal",
      // Promessa exagerada
      "resultado garantido em X dias",
      "ganhe 10kg em",
      "secou em 30 dias",
      "milagre",
      // Vendedor agressivo
      "ÚLTIMA CHANCE",
      "OFERTA IMPERDÍVEL",
      "VAGAS LIMITADAS",
      // Genérico vazio
      "mude sua vida",
      "viva sua melhor versão",
    ],

    forbidden: [
      // Cravado MEGA-CLAUDE Impulso
      "exatamente",
      "absolutamente",
      "potencializar",
      "alavancar",
      "democratizar",
      "excelência",
      "sinergia",
      // Palavrões
      "caralho",
      "porra",
    ],
  },

  patterns: {
    openersValidated: [
      "Personal aqui:",
      "O que eu tomo:",
      "O que eu indico pros meus alunos:",
      "80% do que tá na farmácia eu não venderia pro meu aluno.",
      "Treino pesado precisa de:",
      "Curadoria profissional não é marketing — é trabalho.",
      "Aluno meu pediu, eu fui buscar:",
    ],

    ctasValidated: [
      "Link na bio · gbnutrition.online",
      "Palmas: motoboy no mesmo dia · Brasil todo: Correios e transportadora",
      "Manda DM 'COMBO' que eu te explico",
      "Compra agora pelo site · entrega hoje em Palmas",
      "Frete GRÁTIS pra todo Brasil até [DATA]",
    ],

    proofPattern:
      "Aluno [bairro/perfil] · objetivo [hipertrofia/cutting/recovery] · usa [produto/marca] · resultado [observação direta sem promessa absurda]",

    objectionHandlers: {
      "caro":
        "Suplemento bom NÃO é caro — é investimento por dose. Compara g de proteína por R$ vs marca duvidosa. Sai mais barato no longo prazo.",
      "não confio em loja online":
        "Pode confirmar marca diretamente nos sites dos fabricantes. Aqui na GB só tem marca com SAC, rastreamento e nota fiscal.",
      "demora pra chegar":
        "Palmas: motoboy NO MESMO DIA se comprar até [hora]. Brasil todo: Correios + transportadora · prazo no checkout · rastreamento sempre.",
      "não sei o que tomar":
        "Manda DM com seu objetivo (hipertrofia / cutting / pré-treino). Eu indico o que daria pro meu aluno na mesma situação.",
    },
  },

  visual: {
    palettePrimary: {
      darkPure: "#0a0a0a", // background dominante (logo + posts existentes)
      darkSoft: "#1a1a1a", // dark suave pra cards e zonas
      darkCard: "#262626", // cards/zonas internas
      white: "#FFFFFF",
    },
    paletteAccent: {
      cyan: "#19D9E0", // CIANO ELÉTRICO — accent principal cravado no logo + posts
      cyanDeep: "#0EB8C0", // ciano mais saturado pra hover/destaque
      red: "#EF4444", // urgência / esgotamento
      green: "#10B981", // sucesso / frete grátis / ganho
    },
    typography:
      "Anton (Google Fonts) pra hero numbers e watermarks em caps · Inter pra body 400/500 e headlines 700/800",
    iconRule:
      "SVG inline ou emoji apenas funcional (📦 frete, 💪 hipertrofia, ⚡ entrega rápida). Sem decorativo. Cuidado com clichê fitness (🏋️🔥).",
    assets: {
      logo: "/gb/logo-gb.jpg",
      gabrielFoto: "/gb/gabriel-foto.jpg",
      motoboy: "/gb/motoboy.jpg",
      mapaBrasil: "/gb/mapa-brasil.jpg",
    },
  },

  examples: [
    {
      format: "post-instagram",
      objective: "Apresentar curadoria · diferencial Gabriel",
      copy: `Personal aqui.

80% do que tá na prateleira da farmácia eu não venderia pro meu aluno.

Por isso abri a GB Nutrition: só tem o que eu uso em mim e indico pros alunos. Shark Pro, New Millen, IntegralMédica, Max Titanium e Nutrata. Marcas que eu testei na academia, no treino pesado de verdade.

Não tem marca duvidosa só porque a margem é boa.

Palmas: motoboy no mesmo dia.
Brasil todo: Correios + transportadora, melhor custo/prazo.

Link na bio · gbnutrition.online`,
    },
    {
      format: "story",
      objective: "Frete grátis lançamento",
      copy: `🚀 Lança SEGUNDA.

FRETE GRÁTIS pro Brasil todo na 1ª semana de lançamento.

Tem combo de pré-treino + creatina, whey + creatina, kit completo.

Link na bio → gbnutrition.online`,
    },
    {
      format: "carrossel-instagram-capa",
      objective: "Hook autoridade Gabriel",
      copy: `PERSONAL AQUI

80% do que tá
na prateleira da farmácia
eu não venderia
pro meu aluno.

→ Por isso abri a GB Nutrition`,
    },
  ],

  antiExamples: [
    {
      reason: "Influencer fora do tom técnico-comercial",
      bad: `Galeraaaa! Hojeee vim falar pra vocêss sobre meu novo projetinho 😍 a GB Nutrition tá no ar! Vibes positivas total pra trazer pra vocês os melhores suplementos do mercadinho fitness ✨`,
    },
    {
      reason: "Promessa exagerada / clichê",
      bad: `A GB Nutrition é a sua transformação completa! Resultado garantido em 30 dias. Mude sua vida hoje! Viva sua melhor versão!`,
    },
    {
      reason: "Vendedor agressivo + urgência fabricada",
      bad: `🔥 ÚLTIMA CHANCE 🔥 VAGAS LIMITADAS! Os melhores suplementos com PROMOÇÃO RELÂMPAGO! Aproveite ANTES QUE ACABE!`,
    },
  ],
};
