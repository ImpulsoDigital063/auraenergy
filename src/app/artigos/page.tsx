import type { Metadata } from "next";
import Link from "next/link";
import { ARTIGOS } from "@/content/artigos";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { IconArrowUpRight, IconClock, IconSparkles } from "@/components/Icons";

const SITE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://auraenergypalmas.com";

const COR_CATEGORIA: Record<string, { bg: string; text: string }> = {
  Economia: { bg: "rgba(34, 197, 94, 0.10)", text: "#15803D" },
  Regulamentação: { bg: "var(--aura-blue-tint)", text: "var(--aura-blue)" },
  Equipamentos: { bg: "rgba(168, 85, 247, 0.10)", text: "#7E22CE" },
  Financiamento: { bg: "var(--aura-yellow-tint)", text: "var(--aura-yellow-deep)" },
};

// Slug fixo por categoria (anchor link pra navegação interna).
// Mapa direto evita problemas com unicode combining marks no regex.
const SLUG_CATEGORIA: Record<string, string> = {
  Economia: "economia",
  Regulamentação: "regulamentacao",
  Equipamentos: "equipamentos",
  Financiamento: "financiamento",
};

export const metadata: Metadata = {
  title: "Artigos · Aura Energy · Energia solar em Palmas-TO",
  description:
    "Conteúdo direto sobre energia solar em Tocantins: preços, Lei 14.300, Pronaf Bioeconomia, ICMS Convênio 16/15, BESS rural. Sem promessa furada · fontes oficiais.",
  keywords: [
    "artigos energia solar Palmas",
    "blog Aura Energy",
    "Pronaf Bioeconomia solar",
    "ICMS solar Tocantins",
    "BESS rural",
    "Lei 14.300",
  ],
  openGraph: {
    title: "Artigos · Aura Energy",
    description:
      "Guias técnicos sobre energia solar em Tocantins · Pronaf Bioeconomia, ICMS Convênio 16/15, BESS rural, Lei 14.300 e mais.",
    url: `${SITE_URL}/artigos`,
    siteName: "Aura Energy",
    type: "website",
  },
  alternates: {
    canonical: `${SITE_URL}/artigos`,
  },
};

export default function ArtigosIndexPage() {
  // Agrupa por categoria pra navegação visual
  const porCategoria = ARTIGOS.reduce<Record<string, typeof ARTIGOS>>((acc, art) => {
    if (!acc[art.categoria]) acc[art.categoria] = [];
    acc[art.categoria].push(art);
    return acc;
  }, {});

  const categorias = Object.keys(porCategoria);

  // JSON-LD @graph · CollectionPage + BreadcrumbList + ItemList dos artigos.
  // Ajuda Google entender que /artigos é hub de conteúdo · cada artigo aparece
  // como item da coleção · breadcrumb mostra hierarquia.
  const jsonLdGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${SITE_URL}/artigos#collection`,
        url: `${SITE_URL}/artigos`,
        name: "Artigos · Aura Energy",
        description:
          "Guias técnicos sobre energia solar em Tocantins · com sumário, dados quantitativos e fontes oficiais.",
        inLanguage: "pt-BR",
        publisher: {
          "@type": "Organization",
          name: "Aura Energy",
          url: SITE_URL,
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}/artigos#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Início",
            item: SITE_URL,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Artigos",
            item: `${SITE_URL}/artigos`,
          },
        ],
      },
      {
        "@type": "ItemList",
        "@id": `${SITE_URL}/artigos#itemlist`,
        numberOfItems: ARTIGOS.length,
        itemListElement: ARTIGOS.map((art, idx) => ({
          "@type": "ListItem",
          position: idx + 1,
          url: `${SITE_URL}/artigos/${art.slug}`,
          name: art.titulo,
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
      />
      <Header />

      <main className="pt-24 pb-20 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero da listagem */}
          <div className="text-center mb-14">
            <span className="badge-yellow mb-4 inline-flex">
              <IconSparkles size={14} />
              Recursos Aura
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[var(--aura-text)] mb-5 leading-[1.1]">
              Artigos pra você decidir{" "}
              <span className="text-gradient-aura">com clareza.</span>
            </h1>
            <p className="text-lg sm:text-xl text-[var(--aura-text-muted)] max-w-3xl mx-auto leading-relaxed">
              Conteúdo direto sobre energia solar em Tocantins · com sumário, dados
              quantitativos e fontes oficiais (ANEEL, ABSOLAR, MAPA, CONFAZ, IBGE).
              Sem promessa furada.
            </p>
          </div>

          {/* Navegação por categoria */}
          <nav className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
            {categorias.map((cat) => {
              const cor = COR_CATEGORIA[cat] ?? {
                bg: "var(--aura-bg-soft)",
                text: "var(--aura-text)",
              };
              const slug = SLUG_CATEGORIA[cat] ?? cat.toLowerCase();
              return (
                <a
                  key={cat}
                  href={`#${slug}`}
                  className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold transition-transform hover:-translate-y-0.5"
                  style={{ background: cor.bg, color: cor.text }}
                >
                  {cat} ({porCategoria[cat].length})
                </a>
              );
            })}
          </nav>

          {/* Lista por categoria */}
          {categorias.map((cat) => {
            const cor = COR_CATEGORIA[cat] ?? {
              bg: "var(--aura-bg-soft)",
              text: "var(--aura-text)",
            };
            const slug = SLUG_CATEGORIA[cat] ?? cat.toLowerCase();
            return (
              <section key={cat} id={slug} className="mb-16 scroll-mt-24">
                <header className="mb-8 flex items-center gap-4">
                  <span
                    className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest"
                    style={{ background: cor.bg, color: cor.text }}
                  >
                    {cat}
                  </span>
                  <div className="flex-1 h-px bg-[var(--aura-border)]" />
                </header>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                  {porCategoria[cat].map((art) => (
                    <Link
                      key={art.slug}
                      href={`/artigos/${art.slug}`}
                      className="block"
                    >
                      <article className="premium-card p-7 h-full flex flex-col group cursor-pointer">
                        <div className="flex items-center justify-between gap-3 mb-5">
                          <span
                            className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide"
                            style={{ background: cor.bg, color: cor.text }}
                          >
                            {art.categoria}
                          </span>
                          <span className="inline-flex items-center gap-1 text-xs text-[var(--aura-text-muted)] font-medium">
                            <IconClock size={12} />
                            {art.tempoLeitura}
                          </span>
                        </div>

                        <h2 className="text-xl font-bold text-[var(--aura-text)] mb-3 leading-tight group-hover:text-[var(--aura-blue)] transition-colors">
                          {art.titulo}
                        </h2>

                        <p className="text-[15px] text-[var(--aura-text-muted)] leading-relaxed mb-6 flex-1">
                          {art.resumo}
                        </p>

                        <div className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--aura-yellow-deep)] group-hover:text-[var(--aura-blue)] transition-colors">
                          Ler artigo completo
                          <IconArrowUpRight size={16} />
                        </div>
                      </article>
                    </Link>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </main>

      <Footer />
    </>
  );
}
