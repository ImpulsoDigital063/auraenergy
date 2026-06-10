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
// Set escolhido pelo Renato em 03/06 via /selecao-galeria (R1·V3·V2·V1·C3·T2·A3).
export const FOTOS_CASA: FotoSegmento[] = [
  {
    url: "https://images.unsplash.com/photo-1745187946672-2c1d8cf26a2b?w=1200&q=80&auto=format&fit=crop",
    legenda: "Painéis em telhado residencial",
    alt: "Painéis solares em telhado residencial com vegetação ao redor",
  },
  {
    url: "https://images.unsplash.com/photo-1726776230760-ae81dc9d4e55?w=1200&q=80&auto=format&fit=crop",
    legenda: "Cobertura solar em galpão (aérea)",
    alt: "Vista aérea de galpão com telhado coberto de painéis solares",
  },
  {
    url: "https://images.unsplash.com/photo-1726866492047-7f9516558c6e?w=1200&q=80&auto=format&fit=crop",
    legenda: "Cobertura solar ampla (aérea)",
    alt: "Vista aérea de ampla cobertura de painéis solares",
  },
  {
    url: "https://images.unsplash.com/photo-1776918570415-52e7f702802a?w=1200&q=80&auto=format&fit=crop",
    legenda: "Usina em solo · propriedade rural",
    alt: "Vista aérea de usina solar em solo ao lado de propriedade rural",
  },
  {
    url: "https://images.unsplash.com/photo-1726221062287-fda475b85493?w=1200&q=80&auto=format&fit=crop",
    legenda: "Equipe técnica na instalação",
    alt: "Técnico de colete sob a estrutura de painéis solares",
  },
  {
    url: "https://images.unsplash.com/photo-1552197892-f2ad2f75e7c8?w=1200&q=80&auto=format&fit=crop",
    legenda: "Detalhe dos módulos fotovoltaicos",
    alt: "Close-up de painéis solares azuis",
  },
  {
    url: "https://images.unsplash.com/photo-1503495731986-41d521ecbb32?w=1200&q=80&auto=format&fit=crop",
    legenda: "Vista aérea de usina solar",
    alt: "Vista aérea de usina solar fotovoltaica",
  },
];

// =====================================================================
// COMÉRCIO — telhados de loja, vista aérea de comércio
// =====================================================================
export const FOTOS_COMERCIO: FotoSegmento[] = [
  {
    url: "https://images.unsplash.com/photo-1726776230760-ae81dc9d4e55?w=1200&q=80&auto=format&fit=crop",
    legenda: "Cobertura solar em galpão (vista aérea)",
    alt: "Vista aérea de galpão logístico com telhado coberto de painéis solares",
  },
  {
    url: "https://images.unsplash.com/photo-1769697672933-0f599f913f4d?w=1200&q=80&auto=format&fit=crop",
    legenda: "Edifício comercial revestido de painéis",
    alt: "Edifício comercial moderno com fachada e telhado em painéis solares",
  },
  {
    url: "https://images.unsplash.com/photo-1768224123432-729e0a6fed58?w=1200&q=80&auto=format&fit=crop",
    legenda: "Prédio comercial com painéis no telhado",
    alt: "Prédio comercial de tijolo com painéis solares no telhado",
  },
  {
    url: "https://images.unsplash.com/photo-1651379560002-7fe2278df5a7?w=1200&q=80&auto=format&fit=crop",
    legenda: "Grande área de painéis (vista aérea)",
    alt: "Vista aérea de telhados cobertos por grande área de painéis solares",
  },
  {
    url: "https://images.unsplash.com/photo-1726221062299-88f27b653c59?w=1200&q=80&auto=format&fit=crop",
    legenda: "Equipe técnica em instalação",
    alt: "Técnico com EPI em instalação solar comercial",
  },
  {
    url: "https://images.unsplash.com/photo-1724041875334-0a6397111c7e?w=1200&q=80&auto=format&fit=crop",
    legenda: "Detalhe dos módulos · alta eficiência",
    alt: "Close-up de painéis solares de alta eficiência",
  },
];

// =====================================================================
// INDÚSTRIA — galpões grandes, fábricas, sistema em escala
// =====================================================================
export const FOTOS_INDUSTRIA: FotoSegmento[] = [
  {
    url: "https://images.unsplash.com/photo-1775317628391-a0429fe3be1b?w=1200&q=80&auto=format&fit=crop",
    legenda: "Galpão industrial com painéis",
    alt: "Galpão industrial de telhado dente-de-serra com painéis solares",
  },
  {
    url: "https://images.unsplash.com/photo-1726776230760-ae81dc9d4e55?w=1200&q=80&auto=format&fit=crop",
    legenda: "Centro de distribuição (vista aérea)",
    alt: "Vista aérea de centro de distribuição com cobertura solar",
  },
  {
    url: "https://images.unsplash.com/photo-1726795867801-63c0a37b80c6?w=1200&q=80&auto=format&fit=crop",
    legenda: "Usina em telhado industrial (vista aérea)",
    alt: "Vista aérea de grande usina solar em telhado industrial",
  },
  {
    url: "https://images.unsplash.com/photo-1769697672933-0f599f913f4d?w=1200&q=80&auto=format&fit=crop",
    legenda: "Edifício revestido de módulos",
    alt: "Edifício industrial revestido de módulos fotovoltaicos",
  },
  {
    url: "https://images.unsplash.com/photo-1651379560002-7fe2278df5a7?w=1200&q=80&auto=format&fit=crop",
    legenda: "Painéis em escala (vista aérea)",
    alt: "Vista aérea de telhados cobertos de painéis em escala industrial",
  },
  {
    url: "https://images.unsplash.com/photo-1726221062299-88f27b653c59?w=1200&q=80&auto=format&fit=crop",
    legenda: "Equipe técnica em obra",
    alt: "Técnico com EPI em obra industrial de energia solar",
  },
];

// =====================================================================
// RURAL — campo aberto, granja, pivô, painéis em solo
// =====================================================================
export const FOTOS_RURAL: FotoSegmento[] = [
  {
    url: "https://images.unsplash.com/photo-1776918570415-52e7f702802a?w=1200&q=80&auto=format&fit=crop",
    legenda: "Usina em solo · propriedade rural (aérea)",
    alt: "Vista aérea de usina solar em solo ao lado de propriedade rural",
  },
  {
    url: "https://images.unsplash.com/photo-1776918570438-886f538edd93?w=1200&q=80&auto=format&fit=crop",
    legenda: "Fileiras de painéis em solo (aérea)",
    alt: "Vista aérea de fileiras de painéis solares em campo aberto",
  },
  {
    url: "https://images.unsplash.com/photo-1761158495585-eac721decf1b?w=1200&q=80&auto=format&fit=crop",
    legenda: "Telhado de telha com painéis · zona rural",
    alt: "Casa rural de telha cerâmica com painéis solares",
  },
  {
    url: "https://images.unsplash.com/photo-1745187946672-2c1d8cf26a2b?w=1200&q=80&auto=format&fit=crop",
    legenda: "Painéis em telhado · propriedade no campo",
    alt: "Painéis solares em telhado de propriedade rural",
  },
  {
    url: "https://images.unsplash.com/photo-1726221062299-88f27b653c59?w=1200&q=80&auto=format&fit=crop",
    legenda: "Profissional com EPI na instalação",
    alt: "Técnico com colete e capacete em instalação solar rural",
  },
  {
    url: "https://images.unsplash.com/photo-1724041875334-0a6397111c7e?w=1200&q=80&auto=format&fit=crop",
    legenda: "Detalhe dos módulos fotovoltaicos",
    alt: "Close-up de painéis solares fotovoltaicos",
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

// Fotos reais Unsplash (validadas) · trocadas das geradas por IA com pessoa.
const PASSOS_UNIVERSAIS: PassoFoto[] = [
  {
    url: "https://images.unsplash.com/photo-1705579605238-24a90c8799c5?w=1000&q=80&auto=format&fit=crop",
    alt: "Técnico inspecionando o telhado durante a visita técnica",
  },
  {
    url: "https://images.unsplash.com/photo-1542621334-a254cf47733d?w=1000&q=80&auto=format&fit=crop",
    alt: "Projeto técnico do sistema sobre a prancheta",
  },
  {
    url: "https://images.unsplash.com/photo-1660330589782-83776f89dd1e?w=1000&q=80&auto=format&fit=crop",
    alt: "Equipe instalando os painéis no telhado com EPI",
  },
  {
    url: "https://images.unsplash.com/photo-1655300256335-beef51a914fe?w=1000&q=80&auto=format&fit=crop",
    alt: "Sistema solar instalado e gerando energia no telhado",
  },
];

export const PASSOS_CASA: PassoFoto[] = PASSOS_UNIVERSAIS;
export const PASSOS_COMERCIO: PassoFoto[] = PASSOS_UNIVERSAIS;
export const PASSOS_INDUSTRIA: PassoFoto[] = PASSOS_UNIVERSAIS;
export const PASSOS_RURAL: PassoFoto[] = PASSOS_UNIVERSAIS;
