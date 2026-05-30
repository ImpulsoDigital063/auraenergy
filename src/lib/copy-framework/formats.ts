/**
 * Framework de Copy · estruturas cravadas por formato.
 *
 * Princípios gerais:
 * - Cada formato tem "beats" obrigatórios (estrutura testada)
 * - Cada beat tem regras específicas pra LLM seguir
 * - Constraints definem limites (caracteres, linhas)
 * - Não troca beat por outro — só preenche dentro de cada um
 */

import type { FormatFramework } from "./types";

// ──────────────────────────────────────────────────────────
// POST INSTAGRAM (estático único · 1080×1080 ou vertical)
// ──────────────────────────────────────────────────────────

export const postInstagram: FormatFramework = {
  format: "post-instagram",
  displayName: "Post Instagram (estático)",
  description:
    "Post único do feed. Hook visual + caption educativa/persuasiva.",
  context: "Feed Instagram. Cliente passa scrollando. Tem 1-2s pra parar.",
  beats: [
    {
      name: "hook",
      role: "Pattern interrupt — para o scroll. Pergunta ou afirmação contraintuitiva.",
      rules: [
        "Máximo 2 linhas",
        "Específico (cidade/contexto), nunca genérico",
        "Sem clickbait — promete só o que entrega",
      ],
      examples: [
        "Você sabia?",
        "Cliente Aura · Plano Diretor Sul · 5,5 kWp:",
        "Cada ano que você adia, solar fica mais caro.",
      ],
    },
    {
      name: "dor",
      role: "Concretizar o problema com dado real.",
      rules: [
        "Usar número, lei ou fato verificável",
        "Vincular à realidade local (Palmas-TO, Energisa, Tocantins)",
      ],
      examples: [
        "Conta de luz aumenta TODO mês na Energisa-TO.",
        "Em 2026, Fio B subiu pra 60% da TUSD.",
      ],
    },
    {
      name: "solucao",
      role: "Posicionar a resposta com prova concreta.",
      rules: [
        "Mencionar capacidade técnica (kWp, marcas Tier 1, CREA-TO)",
        "Evitar promessa abstrata ('mudança de vida')",
      ],
    },
    {
      name: "prova",
      role: "Caso real ou dado público autoritativo.",
      rules: [
        "Cliente Aura (bairro + kWp + R$ antes/depois) sempre que tiver",
        "Senão: dado ANEEL/ABSOLAR com fonte mencionada",
      ],
    },
    {
      name: "cta",
      role: "Próximo passo claro com baixíssima fricção.",
      rules: [
        "1 ação só (não bombardear)",
        "Usar CTA validado do brand voice",
        "Link na bio sempre que aplicável",
      ],
    },
  ],
  constraints: {
    maxChars: 2200, // limite Instagram caption
    notes:
      "Caption pode ser longa, mas as primeiras 125 chars aparecem antes do 'ver mais'. Hook + dor têm que caber aí.",
  },
  principles: [
    "Hook + dor nos primeiros 125 caracteres (antes do 'ver mais')",
    "Quebra de linha visual entre beats — facilita leitura mobile",
    "Sem emoji decorativo. SVG funcional só na arte, não na caption",
    "Última linha = CTA explícito",
  ],
};

// ──────────────────────────────────────────────────────────
// CARROSSEL INSTAGRAM · CAPA (slide 1)
// ──────────────────────────────────────────────────────────

export const carrosselInstagramCapa: FormatFramework = {
  format: "carrossel-instagram-capa",
  displayName: "Carrossel Instagram (capa · slide 1)",
  description:
    "Primeiro slide do carrossel. Função: parar scroll + obrigar arraste.",
  context:
    "Capa de carrossel educativo/persuasivo. Deve criar lacuna de curiosidade.",
  beats: [
    {
      name: "atencao",
      role: "Marker de relevância — quem deveria parar.",
      rules: [
        "Vocativo geográfico ou nichado ('ATENÇÃO PALMAS-TO', 'PRODUTOR RURAL DO TOCANTINS')",
        "Caixa alta opcional só nesse marker",
      ],
    },
    {
      name: "headline",
      role: "Afirmação principal — sintetiza o valor do carrossel.",
      rules: [
        "Máximo 8-10 palavras",
        "Direto, sem rodeio. Frase completa, não tópico",
        "Pode usar destaque colorido em palavra-chave (cor de acento)",
      ],
    },
    {
      name: "sub",
      role: "Contexto/dado adicional que reforça a importância.",
      rules: [
        "Máximo 1 linha",
        "Lei, dado factual ou fonte de autoridade",
      ],
    },
    {
      name: "instrucao-arraste",
      role: "Indica que tem mais — força a continuidade.",
      rules: [
        "Texto pequeno no rodapé do slide",
        "Mencionar contagem ('em 4 cards', 'em 5 slides')",
        "Seta → opcional",
      ],
      examples: [
        "→ Arrasta pra entender em 4 cards",
        "Lei 14.300 explicada · 5 slides",
      ],
    },
  ],
  constraints: {
    maxLines: 6,
    notes: "Capa precisa funcionar como thumbnail no feed — legível em 1cm².",
  },
  principles: [
    "Curiosidade > clarity (a capa não entrega tudo, ela puxa)",
    "Hierarquia visual brutal (1 elemento dominante)",
    "Sem CTA na capa — CTA mora no último slide",
  ],
};

// ──────────────────────────────────────────────────────────
// CARROSSEL INSTAGRAM · SLIDE DO MEIO
// ──────────────────────────────────────────────────────────

export const carrosselInstagramSlide: FormatFramework = {
  format: "carrossel-instagram-slide",
  displayName: "Carrossel Instagram (slide do meio)",
  description: "Slide 2-N do carrossel. 1 ideia por slide. Progressão lógica.",
  context: "Slides intermediários. Cada um avança o argumento.",
  beats: [
    {
      name: "label",
      role: "Categoria/etapa — orienta onde o leitor está.",
      rules: [
        "Caixa alta pequena no topo",
        "Cor de acento (amarelo Aura)",
        "Ex: 'O QUE É O FIO B?', 'O QUE VOCÊ PERDE AO ADIAR'",
      ],
    },
    {
      name: "afirmacao",
      role: "1 ideia central do slide — frase forte.",
      rules: [
        "Máximo 2 linhas",
        "Sintetizar a ideia, não detalhar (detalhe vem em sub)",
      ],
    },
    {
      name: "sub-detalhe",
      role: "Contexto ou dado que sustenta a afirmação.",
      rules: [
        "Máximo 3 linhas",
        "Pode ter destaque colorido em palavra-chave",
      ],
    },
    {
      name: "transicao",
      role: "Conecta com próximo slide — mantém continuidade.",
      rules: [
        "Texto pequeno rodapé",
        "Anuncia o próximo card",
      ],
      examples: [
        "Veja o cronograma no próximo card →",
        "Próximo card: o impacto na sua conta →",
      ],
    },
  ],
  constraints: {
    maxLines: 8,
    notes:
      "Um slide = uma ideia. Se tem 2 ideias, separa em 2 slides. Densidade baixa.",
  },
  principles: [
    "1 conceito por slide",
    "Visual > texto (gráfico, comparativo, número-herói)",
    "Transição explícita pro próximo (cria momentum)",
  ],
};

// ──────────────────────────────────────────────────────────
// STORY ÚNICO (15s)
// ──────────────────────────────────────────────────────────

export const story: FormatFramework = {
  format: "story",
  displayName: "Story (frame único · 15s)",
  description:
    "Story isolado. Vida curta (24h). Função: lembrar, provocar, qualificar.",
  context:
    "Story do dia. Cliente viu por acaso entre stories de outros. Precisa engajar em 2s.",
  beats: [
    {
      name: "abertura",
      role: "Hook curto — fato, pergunta ou prova.",
      rules: [
        "Máximo 1 frase",
        "Visual ou texto sobre fundo limpo",
      ],
    },
    {
      name: "corpo",
      role: "Conteúdo central — caso real, dado, observação.",
      rules: [
        "3-5 linhas no máximo",
        "Frase curta. Quebra de linha entre beats",
      ],
    },
    {
      name: "sticker-engagement",
      role: "Mecânica de interação (quiz, enquete, slider, link).",
      rules: [
        "Stories com sticker engagam 60% mais",
        "Quiz ou enquete preferidos vs só link",
        "Se for link: usar 'ME MANDA UMA MSG' → DM",
      ],
      examples: [
        "Quiz: 'Quanto sua conta? a) <R$300 b) R$300-700 c) R$700-1500 d) R$1500+'",
        "Sticker 'FALAR COM RENATO' → WhatsApp",
        "Enquete: 'Qual seu nicho? 🏠 Casa | 🏬 Comércio'",
      ],
    },
  ],
  constraints: {
    maxLines: 8,
    notes:
      "Story vai sobre vídeo/foto, então texto sobreposto deve ser legível em mobile.",
  },
  principles: [
    "Sticker engagement é obrigatório — sem ele, story é desperdício",
    "Vincular ao feed (preview do próximo post, ou continuação de post antigo)",
    "Tom mais informal que feed — mas dentro das regras do brand voice",
  ],
};

// ──────────────────────────────────────────────────────────
// META ADS · TOPO DE FUNIL
// ──────────────────────────────────────────────────────────

export const metaAdsTopo: FormatFramework = {
  format: "meta-ads-topo",
  displayName: "Meta Ads · topo de funil",
  description:
    "Anúncio pra público frio. Função: gerar reconhecimento + interesse + clique.",
  context:
    "Lookalike ou interesse Meta Ads. Cliente NUNCA ouviu falar de você.",
  beats: [
    {
      name: "pattern-interrupt",
      role: "Quebra o scroll com fato, dado ou afirmação contra-intuitiva.",
      rules: [
        "Primeira linha do texto principal",
        "NÃO começa com 'A [Empresa]' ou 'Olá!'",
        "Geo-específico se aplicável (Palmas-TO, Tocantins)",
      ],
    },
    {
      name: "pain",
      role: "Articula a dor do público com precisão.",
      rules: [
        "Dor concreta, mensurável",
        "Sem dramatizar — só nomear",
      ],
    },
    {
      name: "promise",
      role: "Promessa específica + tempo + escopo.",
      rules: [
        "Tempo definido ('em 30s', 'em 24h')",
        "Sem cadastro' / 'grátis' / 'sem ligação' são diferenciais válidos",
        "Evitar superlativos ('o melhor', 'o maior')",
      ],
    },
    {
      name: "micro-commit",
      role: "Próxima ação tem fricção mínima.",
      rules: [
        "1 ação só ('Simular', 'Calcular', 'Receber proposta')",
        "Botão Meta Ads suportado: 'Saiba mais', 'Cadastre-se', 'Solicitar orçamento'",
      ],
    },
  ],
  constraints: {
    maxChars: 200, // Meta Ads texto principal aparece curto
    notes:
      "Primeiras 90 chars aparecem antes do 'Ver mais' no mobile. Pattern interrupt + pain têm que caber aí.",
  },
  principles: [
    "Topo de funil NÃO vende — qualifica + entrega valor",
    "Lead magnet (calculadora, ebook, simulação) > venda direta",
    "Variar criativo a cada 7-14 dias (fadiga de criativo)",
  ],
};

// ──────────────────────────────────────────────────────────
// STORY SEQUENCIAL (5-8 frames)
// ──────────────────────────────────────────────────────────

export const storySequencial: FormatFramework = {
  format: "story-sequencial",
  displayName: "Story Sequencial (5-8 frames)",
  description:
    "Sequência narrativa. Cada frame avança a história. Cliente assiste em sequência.",
  context:
    "Stories temáticos do dia (ex: 'Lei 14.300 explicada em 6 stories'). Engajam mais que stories isolados.",
  beats: [
    {
      name: "frame-1-hook",
      role: "Marker do tema + promessa de pagar a curiosidade até o fim.",
      rules: [
        "Anuncia o tema com claridade",
        "Sugerir contagem ('em 6 stories', '6 cards')",
      ],
    },
    {
      name: "frames-meio",
      role: "Cada frame = 1 conceito/dado/passo.",
      rules: [
        "1 ideia por frame",
        "Densidade baixa, leitura em 3s",
        "Numerar visualmente (1/6, 2/6...)",
      ],
    },
    {
      name: "frame-final-cta",
      role: "Recompensa + ação clara.",
      rules: [
        "Resumir o aprendizado",
        "1 CTA (link, sticker engagement, ou DM)",
      ],
    },
  ],
  constraints: {
    maxLines: 6, // por frame
    notes: "Total ~6 frames. Conteúdo denso vira carrossel, não story.",
  },
  principles: [
    "Arco narrativo claro: hook → desenvolvimento → CTA",
    "Numeração visível em cada frame (gera completude)",
    "Sticker engagement em pelo menos 2 frames (não só no último)",
  ],
};

// ──────────────────────────────────────────────────────────
// WHATSAPP MENSAGEM
// ──────────────────────────────────────────────────────────

export const whatsappMensagem: FormatFramework = {
  format: "whatsapp-mensagem",
  displayName: "WhatsApp · mensagem",
  description:
    "Mensagem WhatsApp do Renato pra cliente/lead. Tom de conversa real.",
  context:
    "Cliente respondeu story, mandou pergunta, ou Renato faz follow-up. Conversa 1-a-1.",
  beats: [
    {
      name: "abertura",
      role: "Cumprimento curto + nome se souber.",
      rules: [
        "Sem 'Prezado', 'Caro cliente' — soa robô",
        "'Oi [nome]' ou 'Fala [nome]'",
        "Sem horário específico ('Bom dia') — pode chegar à noite",
      ],
    },
    {
      name: "razao-contato",
      role: "Direto ao ponto — por que essa msg.",
      rules: [
        "Frase curta",
        "Sem rodeio, sem 'tudo bem?'",
      ],
    },
    {
      name: "valor",
      role: "Entrega algo útil antes de pedir algo.",
      rules: [
        "Pode ser: número (simulação), dica técnica, prova social",
        "Pessoal — referenciar contexto do cliente quando souber",
      ],
    },
    {
      name: "cta-leve",
      role: "Convite, não pressão.",
      rules: [
        "Pergunta aberta ('Quer simular o teu caso?')",
        "Sem 'me responde até X', sem 'última chance'",
      ],
    },
  ],
  constraints: {
    maxChars: 600,
    notes:
      "WhatsApp longo = não lido. 3-4 parágrafos curtos máximo.",
  },
  principles: [
    "Cada msg = 1 propósito",
    "Áudio é melhor que texto longo pro Renato (gravar > digitar)",
    "Sem grupos massivos — só conversa 1-a-1",
  ],
};

// ──────────────────────────────────────────────────────────
// REGISTRY
// ──────────────────────────────────────────────────────────

import { registerFormat } from "./types";

registerFormat(postInstagram);
registerFormat(carrosselInstagramCapa);
registerFormat(carrosselInstagramSlide);
registerFormat(story);
registerFormat(storySequencial);
registerFormat(metaAdsTopo);
registerFormat(whatsappMensagem);

export const ALL_FORMATS = [
  postInstagram,
  carrosselInstagramCapa,
  carrosselInstagramSlide,
  story,
  storySequencial,
  metaAdsTopo,
  whatsappMensagem,
];
