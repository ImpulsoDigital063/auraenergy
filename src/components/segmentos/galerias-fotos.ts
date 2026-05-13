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
    url: "https://images.unsplash.com/photo-1611365892117-bce8ea1ddd47?w=1200&q=80&auto=format&fit=crop",
    legenda: "Telhado residencial em Dianópolis — 8,55 kWp",
    alt: "Painéis solares em telhado residencial em Dianópolis",
  },
  {
    url: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1200&q=80&auto=format&fit=crop",
    legenda: "Detalhe de painel TOPCon — 575W",
    alt: "Close-up de painel solar fotovoltaico Tier 1",
  },
  {
    url: "https://images.unsplash.com/photo-1559302995-f1d7e5c3a29b?w=1200&q=80&auto=format&fit=crop",
    legenda: "Cabeamento certificado — instalação residencial",
    alt: "Cabeamento solar com conectores MC4",
  },
  {
    url: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=1200&q=80&auto=format&fit=crop",
    legenda: "Equipe técnica em telhado residencial",
    alt: "Técnicos com EPI instalando painéis em telhado de casa",
  },
  {
    url: "https://images.unsplash.com/photo-1605980776566-0486c3ac7617?w=1200&q=80&auto=format&fit=crop",
    legenda: "Sistema entregue — Colinas do Tocantins",
    alt: "Sistema solar residencial pronto pra ativação",
  },
];

// =====================================================================
// COMÉRCIO — telhados de loja, vista aérea de comércio
// =====================================================================
export const FOTOS_COMERCIO: FotoSegmento[] = [
  {
    url: "https://images.unsplash.com/photo-1545208067-fcc1c6f49d40?w=1200&q=80&auto=format&fit=crop",
    legenda: "Lanchonete em Palmas — 22 kWp",
    alt: "Sistema solar em telhado comercial vista contra céu azul",
  },
  {
    url: "https://images.unsplash.com/photo-1566093097221-ac2335b09e70?w=1200&q=80&auto=format&fit=crop",
    legenda: "Vista aérea — restaurante com solar",
    alt: "Sistema fotovoltaico vista drone em estabelecimento comercial",
  },
  {
    url: "https://images.unsplash.com/photo-1591791717127-44b6c4f0d4f9?w=1200&q=80&auto=format&fit=crop",
    legenda: "Telhado de comércio — 15 kWp",
    alt: "Painéis solares em telhado de loja",
  },
  {
    url: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=1200&q=80&auto=format&fit=crop",
    legenda: "Instalação em escritório técnico",
    alt: "Equipe Aura instalando solar em comércio",
  },
  {
    url: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200&q=80&auto=format&fit=crop",
    legenda: "Sistema comercial em escala",
    alt: "Painéis solares em larga escala em estabelecimento",
  },
  {
    url: "https://images.unsplash.com/photo-1605980776566-0486c3ac7617?w=1200&q=80&auto=format&fit=crop",
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
    url: "https://images.unsplash.com/photo-1509389571768-7f5b21c1c81f?w=1200&q=80&auto=format&fit=crop",
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
    url: "https://images.unsplash.com/photo-1559302995-f1d7e5c3a29b?w=1200&q=80&auto=format&fit=crop",
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
    url: "https://images.unsplash.com/photo-1605980776566-0486c3ac7617?w=1200&q=80&auto=format&fit=crop",
    legenda: "Instalação técnica — sistema rural",
    alt: "Equipe instalando painéis em propriedade rural",
  },
  {
    url: "https://images.unsplash.com/photo-1559302995-f1d7e5c3a29b?w=1200&q=80&auto=format&fit=crop",
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

export const PASSOS_CASA: PassoFoto[] = [
  {
    url: "https://images.unsplash.com/photo-1581094289810-adf5d25690e3?w=800&q=85&auto=format&fit=crop",
    alt: "Engenheiro fazendo visita técnica em telhado residencial",
  },
  {
    url: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=800&q=85&auto=format&fit=crop",
    alt: "Engenheiro elaborando projeto fotovoltaico residencial",
  },
  {
    url: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=800&q=85&auto=format&fit=crop",
    alt: "Equipe técnica instalando painéis em telhado de casa",
  },
  {
    url: "https://images.unsplash.com/photo-1611365892117-bce8ea1ddd47?w=800&q=85&auto=format&fit=crop",
    alt: "Sistema residencial instalado e gerando energia",
  },
];

export const PASSOS_COMERCIO: PassoFoto[] = [
  {
    url: "https://images.unsplash.com/photo-1581094289810-adf5d25690e3?w=800&q=85&auto=format&fit=crop",
    alt: "Engenheiro analisando consumo de comércio em Palmas",
  },
  {
    url: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=800&q=85&auto=format&fit=crop",
    alt: "Projeto executivo comercial pra estabelecimento",
  },
  {
    url: "https://images.unsplash.com/photo-1545208067-fcc1c6f49d40?w=800&q=85&auto=format&fit=crop",
    alt: "Instalação de painéis solares em telhado de comércio",
  },
  {
    url: "https://images.unsplash.com/photo-1566093097221-ac2335b09e70?w=800&q=85&auto=format&fit=crop",
    alt: "Sistema comercial entregue e operando",
  },
];

export const PASSOS_INDUSTRIA: PassoFoto[] = [
  {
    url: "https://images.unsplash.com/photo-1581094289810-adf5d25690e3?w=800&q=85&auto=format&fit=crop",
    alt: "Engenheiro responsável fazendo análise técnica em planta industrial",
  },
  {
    url: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=800&q=85&auto=format&fit=crop",
    alt: "Projeto executivo industrial A4 média tensão",
  },
  {
    url: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=85&auto=format&fit=crop",
    alt: "Instalação de sistema fotovoltaico em galpão industrial",
  },
  {
    url: "https://images.unsplash.com/photo-1509389571768-7f5b21c1c81f?w=800&q=85&auto=format&fit=crop",
    alt: "Usina solar industrial entregue e operando",
  },
];

export const PASSOS_RURAL: PassoFoto[] = [
  {
    url: "https://images.unsplash.com/photo-1581094289810-adf5d25690e3?w=800&q=85&auto=format&fit=crop",
    alt: "Engenheiro em visita técnica em propriedade rural",
  },
  {
    url: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=800&q=85&auto=format&fit=crop",
    alt: "Projeto executivo rural com enquadramento Pronaf",
  },
  {
    url: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=85&auto=format&fit=crop",
    alt: "Instalação de painéis em estrutura de solo rural",
  },
  {
    url: "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=800&q=85&auto=format&fit=crop",
    alt: "Sistema rural em granja entregue e operando",
  },
];
