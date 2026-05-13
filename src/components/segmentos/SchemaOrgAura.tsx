// JSON-LD Schema.org pra Aura Energy — habilita rich snippets no Google.
// CIC confirmou: NENHUM dos 4 líderes (Unità, Palmas Energia Solar, Soluthi,
// Capital Elétrica) tem LocalBusiness + FAQPage + Organization completos.
// Aura sai na frente técnica desde o go-live.

import type { Pergunta } from "./faq-perguntas";

type Props = {
  /** Slug da página (casa, comercio, industria, rural ou home) */
  pagina: "home" | "casa" | "comercio" | "industria" | "rural";
  /** FAQs específicas da página pra gerar FAQPage rich snippets */
  faqs?: Pergunta[];
};

const NOME = "Aura Energy";
const URL_BASE = "https://auraenergy.vercel.app";
const TELEFONE = "+5563992688852";
const ENDERECO_PALMAS = {
  cidade: "Palmas",
  estado: "TO",
  pais: "BR",
  cep: "77000-000",
};
// Coordenadas centro de Palmas-TO (substituir pela sede real do Renato quando definir)
const GEO = { lat: -10.184, lng: -48.334 };

const SERVICOS_POR_PAGINA: Record<string, { nome: string; descricao: string }> = {
  home: {
    nome: "Energia solar fotovoltaica em Tocantins",
    descricao:
      "Solar premium B2B-segmentada em Palmas-TO. Residencial, comercial, industrial e rural com engenheiro responsável CREA-TO.",
  },
  casa: {
    nome: "Energia solar residencial em Palmas",
    descricao:
      "Sistemas solares residenciais em Palmas-TO. Conta cai 85-95%, paga em 4-5 anos, financiamento Solfácil até 120x. Programa Palmas Solar (LC 327/2015) com 40% de desconto no IPTU por 5 anos pra adesões em 2026.",
  },
  comercio: {
    nome: "Energia solar comercial em Palmas",
    descricao:
      "Solar comercial pra loja, padaria, supermercado, posto, clínica. Payback 3-4 anos, 12-25% da margem operacional liberada. Financiamento PJ até 120x.",
  },
  industria: {
    nome: "Energia solar industrial em Tocantins",
    descricao:
      "Solar industrial A4 média tensão. TIR 18-22% a.a., payback 4-6 anos, 80% do custo de energia eliminado. BNDES Finame Solar, ICMS subsidiado pelo Convênio 16/15.",
  },
  rural: {
    nome: "Energia solar rural em Tocantins",
    descricao:
      "Solar pra produtor rural: fazenda, sítio, chácara, pivô, granja, aviário, irrigação. Pronaf 0,5% a.m. em 12 anos, autoconsumo remoto entre matrizes, bombeamento solar.",
  },
};

export default function SchemaOrgAura({ pagina, faqs }: Props) {
  const urlPagina = pagina === "home" ? URL_BASE : `${URL_BASE}/${pagina}`;
  const servico = SERVICOS_POR_PAGINA[pagina];

  // 1. LocalBusiness (perfil principal Aura)
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${URL_BASE}/#localbusiness`,
    name: NOME,
    description:
      "A primeira solar B2B-segmentada do Tocantins. Engenheiro responsável Renato Edson, CREA-TO. Casa, comércio, indústria e rural com cálculo, garantia e linha de crédito próprios.",
    url: URL_BASE,
    telephone: TELEFONE,
    image: `${URL_BASE}/logo-aura.png`,
    logo: `${URL_BASE}/logo-aura.png`,
    address: {
      "@type": "PostalAddress",
      addressLocality: ENDERECO_PALMAS.cidade,
      addressRegion: ENDERECO_PALMAS.estado,
      addressCountry: ENDERECO_PALMAS.pais,
      postalCode: ENDERECO_PALMAS.cep,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: GEO.lat,
      longitude: GEO.lng,
    },
    areaServed: [
      { "@type": "City", name: "Palmas" },
      { "@type": "City", name: "Paraíso do Tocantins" },
      { "@type": "City", name: "Luzimangues" },
      { "@type": "City", name: "Dianópolis" },
      { "@type": "City", name: "Colinas do Tocantins" },
      { "@type": "City", name: "Porto Nacional" },
      { "@type": "City", name: "Araguaína" },
      { "@type": "City", name: "Gurupi" },
      { "@type": "State", name: "Tocantins" },
    ],
    priceRange: "$$$",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: "08:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:00",
        closes: "12:00",
      },
    ],
    sameAs: [
      "https://www.instagram.com/auraenergy",
      "https://wa.me/5563992688852",
    ],
  };

  // 2. Organization (entidade legal Aura)
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${URL_BASE}/#organization`,
    name: NOME,
    url: URL_BASE,
    logo: `${URL_BASE}/logo-aura.png`,
    foundingDate: "2026",
    founder: {
      "@type": "Person",
      name: "Renato Edson",
      jobTitle: "Engenheiro Responsável Técnico · CREA-TO",
      knowsAbout: [
        "Energia Solar Fotovoltaica",
        "Engenharia Elétrica",
        "Geração Distribuída",
        "Lei 14.300",
        "Programa Palmas Solar",
      ],
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: TELEFONE,
      contactType: "Customer Service",
      areaServed: "BR-TO",
      availableLanguage: "Portuguese",
    },
  };

  // 3. Service (serviço específico da página)
  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${urlPagina}/#service`,
    name: servico.nome,
    description: servico.descricao,
    provider: { "@id": `${URL_BASE}/#localbusiness` },
    areaServed: {
      "@type": "State",
      name: "Tocantins",
    },
    serviceType: "Instalação de sistema solar fotovoltaico",
    url: urlPagina,
  };

  // 4. FAQPage (rich snippets de FAQ no Google)
  const faqPage = faqs && faqs.length > 0
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "@id": `${urlPagina}/#faq`,
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.a,
          },
        })),
      }
    : null;

  // 5. BreadcrumbList (hierarquia de navegação)
  const breadcrumbs = pagina !== "home"
    ? {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Aura Energy",
            item: URL_BASE,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: servico.nome,
            item: urlPagina,
          },
        ],
      }
    : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusiness),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organization),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }}
      />
      {faqPage && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
        />
      )}
      {breadcrumbs && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
        />
      )}
    </>
  );
}
