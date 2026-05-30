import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ARTIGOS } from "@/content/artigos";
import { renderMarkdown, extractToc } from "@/lib/markdown";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArtigoToc from "@/components/ArtigoToc";
import { IconArrowRight, IconClock, IconWhatsApp } from "@/components/Icons";

const SITE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://auraenergypalmas.com";
const WHATSAPP = "5563992706284";

const COR_CATEGORIA: Record<string, { bg: string; text: string }> = {
  Economia: { bg: "rgba(34, 197, 94, 0.10)", text: "#15803D" },
  Regulamentação: { bg: "var(--aura-blue-tint)", text: "var(--aura-blue)" },
  Equipamentos: { bg: "rgba(168, 85, 247, 0.10)", text: "#7E22CE" },
  Financiamento: { bg: "var(--aura-yellow-tint)", text: "var(--aura-yellow-deep)" },
};

export async function generateStaticParams() {
  return ARTIGOS.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const artigo = ARTIGOS.find((a) => a.slug === slug);

  if (!artigo) {
    return { title: "Artigo não encontrado · Aura Energy" };
  }

  const url = `${SITE_URL}/artigos/${slug}`;

  return {
    title: `${artigo.titulo} · Aura Energy`,
    description: artigo.resumo,
    keywords: [
      "energia solar Palmas",
      "Aura Energy",
      artigo.categoria.toLowerCase(),
      "Tocantins solar",
      "Renato Edson",
    ],
    openGraph: {
      title: artigo.titulo,
      description: artigo.resumo,
      type: "article",
      url,
      siteName: "Aura Energy",
      publishedTime: artigo.dataPublicacao,
      authors: ["Renato Edson · Aura Energy"],
    },
    twitter: {
      card: "summary_large_image",
      title: artigo.titulo,
      description: artigo.resumo,
    },
    alternates: {
      canonical: url,
    },
  };
}

export default async function ArtigoPage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const artigo = ARTIGOS.find((a) => a.slug === slug);

  if (!artigo) {
    notFound();
  }

  const html = renderMarkdown(artigo.conteudo);
  const cor = COR_CATEGORIA[artigo.categoria] ?? {
    bg: "var(--aura-bg-soft)",
    text: "var(--aura-text)",
  };
  const url = `${SITE_URL}/artigos/${slug}`;

  // JSON-LD @graph · combina Article + BreadcrumbList em um único bloco.
  // Ajuda Google a entender estrutura completa + mostrar rich snippet de
  // navegação ("Início > Artigos > Categoria > Título") direto no resultado.
  const jsonLdGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${url}#article`,
        headline: artigo.titulo,
        description: artigo.resumo,
        datePublished: artigo.dataPublicacao,
        dateModified: artigo.dataPublicacao,
        author: {
          "@type": "Person",
          name: "Renato Edson",
          jobTitle: "Engenheiro · CREA-TO",
          worksFor: { "@type": "Organization", name: "Aura Energy" },
        },
        publisher: {
          "@type": "Organization",
          name: "Aura Energy",
          url: SITE_URL,
          logo: {
            "@type": "ImageObject",
            url: `${SITE_URL}/logo-aura.png`,
          },
        },
        mainEntityOfPage: { "@type": "WebPage", "@id": url },
        articleSection: artigo.categoria,
        inLanguage: "pt-BR",
        image: `${url}/opengraph-image`,
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
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
          {
            "@type": "ListItem",
            position: 3,
            name: artigo.categoria,
            item: `${SITE_URL}/artigos#${
              {
                Economia: "economia",
                Regulamentação: "regulamentacao",
                Equipamentos: "equipamentos",
                Financiamento: "financiamento",
              }[artigo.categoria] ?? "artigos"
            }`,
          },
          {
            "@type": "ListItem",
            position: 4,
            name: artigo.titulo,
            item: url,
          },
        ],
      },
    ],
  };

  const whatsLink = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
    `Olá Renato, vi o artigo "${artigo.titulo}" no site da Aura e queria conversar.`
  )}`;

  const toc = extractToc(artigo.conteudo);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
      />
      <Header />

      <main className="pt-24 pb-20 min-h-screen">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[1fr_240px] lg:gap-12">
        <article>
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm text-[var(--aura-text-muted)]">
            <Link href="/" className="hover:text-[var(--aura-blue)] transition-colors">
              Início
            </Link>
            <span className="mx-2">/</span>
            <Link href="/artigos" className="hover:text-[var(--aura-blue)] transition-colors">
              Artigos
            </Link>
            <span className="mx-2">/</span>
            <span className="text-[var(--aura-text-soft)]">{artigo.categoria}</span>
          </nav>

          {/* Header do artigo */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-5">
              <span
                className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase"
                style={{ background: cor.bg, color: cor.text }}
              >
                {artigo.categoria}
              </span>
              <span className="inline-flex items-center gap-1 text-xs text-[var(--aura-text-muted)] font-medium">
                <IconClock size={12} />
                {artigo.tempoLeitura} de leitura
              </span>
              <time
                dateTime={artigo.dataPublicacao}
                className="text-xs text-[var(--aura-text-muted)] font-medium"
              >
                {new Date(artigo.dataPublicacao).toLocaleDateString("pt-BR", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                })}
              </time>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[var(--aura-text)] mb-5 leading-[1.15]">
              {artigo.titulo}
            </h1>

            <p className="text-lg sm:text-xl text-[var(--aura-text-muted)] leading-relaxed max-w-3xl">
              {artigo.resumo}
            </p>

            <div className="mt-6 pt-6 border-t border-[var(--aura-border)] flex items-center gap-3 text-sm text-[var(--aura-text-muted)]">
              <div className="w-10 h-10 rounded-full bg-[var(--aura-blue-tint)] flex items-center justify-center font-bold text-[var(--aura-blue)]">
                RE
              </div>
              <div>
                <div className="font-semibold text-[var(--aura-text)]">Renato Edson</div>
                <div className="text-xs">Engenheiro · CREA-TO · Aura Energy</div>
              </div>
            </div>
          </header>

          {/* Conteúdo markdown renderizado */}
          <div className="artigo-prose-wrapper">
            <div
              className="artigo-prose"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>

          {/* CTA fim de artigo */}
          <aside className="mt-16 p-8 rounded-2xl bg-[var(--aura-bg-soft)] border border-[var(--aura-border)]">
            <h3 className="text-2xl font-bold text-[var(--aura-text)] mb-3">
              Quer cravar a proposta pra seu caso?
            </h3>
            <p className="text-[var(--aura-text-muted)] mb-6 leading-relaxed">
              Visita técnica gratuita até 100 km de Palmas. Renato faz pessoalmente
              o levantamento. Sem custo, sem compromisso de fechamento.
            </p>
            <a
              href={whatsLink}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-base font-bold text-white bg-[var(--aura-blue-deep)] hover:bg-[var(--aura-blue)] transition-colors shadow-lg"
            >
              <IconWhatsApp size={18} />
              Conversar no WhatsApp · (63) 9 9270-6284
            </a>
          </aside>

          {/* Outros artigos */}
          <section className="mt-16 pt-12 border-t border-[var(--aura-border)]">
            <h3 className="text-xl font-bold text-[var(--aura-text)] mb-6">
              Outros artigos Aura
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {ARTIGOS.filter((a) => a.slug !== slug)
                .slice(0, 4)
                .map((a) => {
                  const c = COR_CATEGORIA[a.categoria] ?? cor;
                  return (
                    <Link
                      key={a.slug}
                      href={`/artigos/${a.slug}`}
                      className="block p-5 rounded-xl border border-[var(--aura-border)] hover:border-[var(--aura-blue)] hover:shadow-md transition-all group"
                    >
                      <span
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide mb-3"
                        style={{ background: c.bg, color: c.text }}
                      >
                        {a.categoria}
                      </span>
                      <h4 className="text-base font-bold text-[var(--aura-text)] group-hover:text-[var(--aura-blue)] transition-colors leading-snug">
                        {a.titulo}
                      </h4>
                    </Link>
                  );
                })}
            </div>

            <div className="mt-8 text-center">
              <Link
                href="/artigos"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--aura-blue)] hover:text-[var(--aura-yellow-deep)] transition-colors"
              >
                Ver todos os artigos
                <IconArrowRight size={14} />
              </Link>
            </div>
          </section>
        </article>

        {/* TOC sticky lateral · só renderiza em lg: (1024px+) */}
        <aside className="hidden lg:block">
          <div className="sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto pr-2">
            <ArtigoToc items={toc} />
          </div>
        </aside>
        </div>
      </main>

      <Footer />
    </>
  );
}
