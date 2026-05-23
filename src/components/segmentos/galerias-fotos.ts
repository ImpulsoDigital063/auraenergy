// Catálogos de fotos segmentadas por nicho.
// Cada array tem 6 fotos representando o nicho específico.
// URLs Unsplash placeholder até substituição pelas fotos reais das instalações
// executadas pelo Renato (drone/equipe/cliente final).

export type FotoSegmento = {
  url: string;
  legenda: string;
  alt: string;
};

// =====================================================================
// CASA — residencial · telhados de casa, painéis residenciais
// =====================================================================
export const FOTOS_CASA: FotoSegmento[] = [
  {
    url: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&q=80&auto=format&fit=crop",
    legenda: "Casa em Palmas — sistema 14,64 kWp",
    alt: "Casa moderna em Palmas com sistema solar fotovoltaico no telhado",
  },
  {
    url: "/img/equipe/paineis-telhado.png",
    legenda: "Telhado residencial em Dianópolis — 8,55 kWp",
    alt: "Painéis solares em telhado residencial em Dianópolis",
  },
  {
    url: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1200&q=80&auto=format&fit=crop",
    legenda: "Detalhe de painel TOPCon — 575W",
    alt: "Close-up de painel solar fotovoltaico Tier 1",
  },
  {
    url: "/img/equipe/conexao-mc4.png",
    legenda: "Cabeamento certificado — instalação residencial",
    alt: "Cabeamento solar com conectores MC4",
  },
  {
    url: "/img/equipe/tecnico-instalando.png",
    legenda: "Equipe técnica em telhado residencial",
    alt: "Técnicos com EPI instalando painéis em telhado de casa",
  },
  {
    url: "/img/equipe/sistema-entregue.png",
    legenda: "Sistema entregue — Colinas do Tocantins",
    alt: "Sistema solar residencial pronto pra ativação",
  },
];

// =====================================================================
// COMÉRCIO — telhados de loja, vista aérea de comércio
// =====================================================================
export const FOTOS_COMERCIO: FotoSegmento[] = [
  {
    url: "/img/equipe/sistema-entregue.png",
    legenda: "Lanchonete em Palmas — 22 kWp",
    alt: "Sistema solar em telhado comercial vista contra céu azul",
  },
  {
    url: "https://images.unsplash.com/photo-1566093097221-ac2335b09e70?w=1200&q=80&auto=format&fit=crop",
    legenda: "Vista aérea — restaurante com solar",
    alt: "Sistema fotovoltaico vista drone em estabelecimento comercial",
  },
  {
    url: "/img/equipe/paineis-telhado.png",
    legenda: "Telhado de comércio — 15 kWp",
    alt: "Painéis solares em telhado de loja",
  },
  {
    url: "/img/equipe/tecnico-instalando.png",
    legenda: "Instalação em escritório técnico",
    alt: "Equipe Aura instalando solar em comércio",
  },
  {
    url: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200&q=80&auto=format&fit=crop",
    legenda: "Sistema comercial em escala",
    alt: "Painéis solares em larga escala em estabelecimento",
  },
  {
    url: "/img/equipe/sistema-entregue.png",
    legenda: "Detalhe técnico — comércio em Palmas",
    alt: "Instalação de painéis em fachada comercial",
  },
];

// =====================================================================
// INDÚSTRIA — galpões grandes, fábricas, sistema em escala
// =====================================================================
export const FOTOS_INDUSTRIA: FotoSegmento[] = [
  {
    url: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200&q=80&auto=format&fit=crop",
    legenda: "Usina solar industrial — 200 kWp",
    alt: "Sistema solar fotovoltaico em galpão industrial",
  },
  {
    url: "/img/equipe/usina-industrial.png",
    legenda: "Galpão metálico — telhado completo",
    alt: "Painéis solares cobrindo telhado de galpão industrial metálico",
  },
  {
    url: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1200&q=80&auto=format&fit=crop",
    legenda: "Painéis Tier 1 em escala industrial",
    alt: "Painéis solares Tier 1 em sistema industrial",
  },
  {
    url: "https://images.unsplash.com/photo-1581094289810-adf5d25690e3?w=1200&q=80&auto=format&fit=crop",
    legenda: "Engenheiro responsável — análise técnica",
    alt: "Engenheiro fazendo análise técnica em planta industrial",
  },
  {
    url: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=1200&q=80&auto=format&fit=crop",
    legenda: "Projeto executivo — A4 média tensão",
    alt: "Projeto fotovoltaico executivo industrial",
  },
  {
    url: "/img/equipe/conexao-mc4.png",
    legenda: "Cabeamento certificado — alta potência",
    alt: "Cabeamento industrial com inversores de alta capacidade",
  },
];

// =====================================================================
// RURAL — campo aberto, granja, pivô, painéis em solo
// =====================================================================
export const FOTOS_RURAL: FotoSegmento[] = [
  {
    url: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200&q=80&auto=format&fit=crop",
    legenda: "Sistema rural em solo — 80 kWp",
    alt: "Painéis solares em estrutura de solo em propriedade rural",
  },
  {
    url: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&q=80&auto=format&fit=crop",
    legenda: "Propriedade rural Tocantins — pivô central",
    alt: "Campo agrícola com sistema de irrigação",
  },
  {
    url: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1200&q=80&auto=format&fit=crop",
    legenda: "Painéis em telhado de galpão agrícola",
    alt: "Sistema solar em telhado de galpão de fazenda",
  },
  {
    url: "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=1200&q=80&auto=format&fit=crop",
    legenda: "Granja com solar — autoconsumo remoto",
    alt: "Granja com sistema solar fotovoltaico instalado",
  },
  {
    url: "/img/equipe/sistema-entregue.png",
    legenda: "Instalação técnica — sistema rural",
    alt: "Equipe instalando painéis em propriedade rural",
  },
  {
    url: "/img/equipe/conexao-mc4.png",
    legenda: "Cabeamento certificado — propriedade rural",
    alt: "Cabeamento solar em sistema rural",
  },
];

// =====================================================================
// COMO FUNCIONA — 4 passos do processo · fotos por nicho
// =====================================================================

export type PassoFoto = {
  url: string;
  alt: string;
};

// 4 fotos representando os 4 passos: visita técnica → projeto → instalação → ativação

// PASSOS · 4 etapas universais (visita · projeto · instalação · ativação)
// Imagens cravadas via Replicate Flux Dev (2026-05-23). Compartilhadas entre
// as 4 LPs segmentadas pra consistência visual da jornada.

const PASSOS_UNIVERSAIS: PassoFoto[] = [
  {
    url: "/img/etapas/visita-tecnica.png",
    alt: "Engenheiro com EPI medindo painel solar em telhado terracota em visita técnica",
  },
  {
    url: "/img/etapas/projeto-energisa.png",
    alt: "Engenheiro elaborando projeto fotovoltaico em tablet com blueprint técnico",
  },
  {
    url: "/img/equipe/tecnico-instalando.png",
    alt: "Técnico Aura instalando painel solar em telhado residencial com EPI completo",
  },
  {
    url: "/img/equipe/sistema-entregue.png",
    alt: "Sistema solar entregue em telhado terracota brasileiro · golden hour Palmas-TO",
  },
];

export const PASSOS_CASA: PassoFoto[] = PASSOS_UNIVERSAIS;
export const PASSOS_COMERCIO: PassoFoto[] = PASSOS_UNIVERSAIS;
export const PASSOS_INDUSTRIA: PassoFoto[] = PASSOS_UNIVERSAIS;
export const PASSOS_RURAL: PassoFoto[] = PASSOS_UNIVERSAIS;
