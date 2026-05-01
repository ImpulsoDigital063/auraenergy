import Reveal from "./Reveal";
import { IconStar } from "./Icons";

// Eduardo: trocar por depoimentos REAIS quando Renato tiver 3-5 clientes
// que autorizem uso. Por enquanto são marcados como ilustrativos no rodapé.
const DEPOIMENTOS = [
  {
    nome: "Marcus Vinícius",
    cidade: "Plano Diretor Sul · Palmas-TO",
    perfil: "Residencial · 5,5 kWp",
    texto:
      "Conta de luz caiu de R$ 720 pra R$ 92. A equipe da Aura cuidou de tudo, da Energisa à instalação. Em 22 dias eu já tava gerando.",
    economia: "R$ 7.500/ano",
  },
  {
    nome: "Cláudia Ferreira",
    cidade: "Plano Diretor Norte · Palmas-TO",
    perfil: "Comercial · 8 kWp",
    texto:
      "Tava receosa por causa da Lei 14.300. O Renato sentou comigo, mostrou os números no papel e mostrou que mesmo com Fio B vale a pena. Hoje sou cliente e indico.",
    economia: "R$ 11.200/ano",
  },
  {
    nome: "José Antônio",
    cidade: "Taquaralto · Palmas-TO",
    perfil: "Residencial · 4 kWp",
    texto:
      "Financiei pela Solfácil. Parcela do banco ficou MENOR que minha conta de luz antes. Já no primeiro mês tava no lucro.",
    economia: "R$ 5.800/ano",
  },
];

export default function Depoimentos() {
  return (
    <section className="py-20 sm:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-14">
            <span className="badge-yellow mb-4 inline-flex">
              <IconStar size={14} />
              Quem já trocou pra solar
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[var(--aura-text)] mb-4">
              Histórias de quem tomou
              <br />
              <span className="text-gradient-aura">a decisão certa.</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-5 sm:gap-6">
          {DEPOIMENTOS.map((d, i) => (
            <Reveal key={d.nome} delay={((i % 3) + 1) as 1 | 2 | 3}>
              <article className="premium-card p-7 h-full flex flex-col">
                {/* Estrelas */}
                <div className="flex gap-1 mb-4 text-[var(--aura-yellow)]">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <IconStar key={k} size={18} />
                  ))}
                </div>

                <p className="text-[16px] text-[var(--aura-text)] leading-relaxed mb-6 flex-1 italic">
                  &ldquo;{d.texto}&rdquo;
                </p>

                <div className="border-t border-[var(--aura-border)] pt-4">
                  <div className="flex items-center justify-between gap-3 mb-2">
                    <div className="font-bold text-[var(--aura-text)]">{d.nome}</div>
                    <span className="text-sm font-bold text-[var(--aura-yellow-deep)] counter-tabular">
                      {d.economia}
                    </span>
                  </div>
                  <div className="text-xs text-[var(--aura-text-muted)]">
                    {d.cidade}
                  </div>
                  <div className="text-xs text-[var(--aura-blue)] font-semibold mt-1">
                    {d.perfil}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={4}>
          <p className="text-center text-xs text-[var(--aura-text-faded)] mt-10 italic max-w-2xl mx-auto">
            * Depoimentos ilustrativos durante fase de lançamento. Casos reais de
            clientes Aura Energy serão publicados conforme autorização.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
