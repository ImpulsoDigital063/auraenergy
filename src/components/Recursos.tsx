import Reveal from "./Reveal";
import { ARTIGOS } from "@/content/artigos";
import { IconArrowUpRight, IconClock, IconSparkles } from "./Icons";

const COR_CATEGORIA: Record<string, { bg: string; text: string }> = {
  Economia: { bg: "rgba(34, 197, 94, 0.10)", text: "#15803D" },
  Regulamentação: { bg: "var(--aura-blue-tint)", text: "var(--aura-blue)" },
  Equipamentos: { bg: "rgba(168, 85, 247, 0.10)", text: "#7E22CE" },
  Financiamento: { bg: "var(--aura-yellow-tint)", text: "var(--aura-yellow-deep)" },
};

export default function Recursos() {
  return (
    <section
      id="recursos"
      className="py-20 sm:py-28 section-card-bg overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-14">
            <span className="badge-yellow mb-4 inline-flex">
              <IconSparkles size={14} />
              Recursos Aura
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[var(--aura-text)] mb-4">
              Artigos pra você decidir
              <br />
              <span className="text-gradient-aura">com clareza.</span>
            </h2>
            <p className="text-lg text-[var(--aura-text-muted)] max-w-2xl mx-auto">
              Conteúdo direto, atualizado e com fontes reais (ABSOLAR, ANEEL,
              Energisa-TO). Sem vendarketing, sem promessa furada.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {ARTIGOS.map((art, i) => {
            const cor = COR_CATEGORIA[art.categoria] || {
              bg: "var(--aura-bg-soft)",
              text: "var(--aura-text)",
            };
            return (
              <Reveal key={art.slug} delay={((i % 3) + 1) as 1 | 2 | 3}>
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

                  <h3 className="text-xl font-bold text-[var(--aura-text)] mb-3 leading-tight group-hover:text-[var(--aura-blue)] transition-colors">
                    {art.titulo}
                  </h3>

                  <p className="text-[15px] text-[var(--aura-text-muted)] leading-relaxed mb-6 flex-1">
                    {art.resumo}
                  </p>

                  <div className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--aura-yellow-deep)] group-hover:text-[var(--aura-blue)] transition-colors">
                    Ler artigo completo
                    <IconArrowUpRight size={16} />
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
