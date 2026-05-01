import Reveal from "./Reveal";
import {
  IconChart,
  IconChevronDown,
  IconClock,
  IconPanelGrid,
  IconShield,
} from "./Icons";

const PASSOS = [
  {
    n: "01",
    titulo: "Visita técnica gratuita",
    desc:
      "Vamos até o local, medimos seu telhado, analisamos sua conta de luz e desenhamos o sistema ideal. Sem compromisso.",
    prazo: "Em até 48h",
    icon: <IconChart size={28} />,
  },
  {
    n: "02",
    titulo: "Projeto + homologação Energisa",
    desc:
      "Engenheiro responsável assina ART, projeta layout e envia pra Energisa Tocantins. Microgeração é homologada em até 15 dias úteis.",
    prazo: "10 a 15 dias úteis",
    icon: <IconShield size={28} />,
  },
  {
    n: "03",
    titulo: "Instalação rápida",
    desc:
      "Equipe própria instala painéis Tier 1 (Trina, Canadian, Jinko) + inversor (Growatt, Sungrow). Sem barulho excessivo, sem bagunça.",
    prazo: "1 a 3 dias",
    icon: <IconPanelGrid size={28} />,
  },
  {
    n: "04",
    titulo: "Energia ligada e economizando",
    desc:
      "Energisa troca o medidor por bidirecional, sistema é ativado e você passa a gerar a própria energia. App de monitoramento no celular.",
    prazo: "Mesmo dia da vistoria",
    icon: <IconClock size={28} />,
  },
];

export default function ComoFunciona() {
  return (
    <section
      id="como-funciona"
      className="relative py-20 sm:py-28 overflow-hidden"
    >
      <div className="bg-grid-soft absolute inset-0 opacity-50" aria-hidden />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <span className="badge-blue mb-4 inline-flex">Processo simplificado</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[var(--aura-text)] mb-4">
              Da primeira visita à <span className="text-gradient-aura">primeira economia</span>
              <br />
              em até <span className="text-[var(--aura-blue)]">30 dias</span>.
            </h2>
            <p className="text-lg text-[var(--aura-text-muted)] max-w-2xl mx-auto">
              Sem burocracia escondida. Cada etapa tem prazo definido e responsável claro.
            </p>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 relative">
          {/* Linha conectora desktop */}
          <div
            className="hidden lg:block absolute top-[120px] left-[8%] right-[8%] h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, rgba(245,188,44,0.50) 25%, rgba(245,188,44,0.50) 75%, transparent 100%)",
            }}
            aria-hidden
          />

          {PASSOS.map((p, i) => (
            <Reveal key={p.n} delay={(i + 1) as 1 | 2 | 3 | 4}>
              <div className="premium-card p-6 sm:p-7 h-full relative">
                <div className="flex items-center justify-between mb-5">
                  <span className="text-5xl font-extrabold text-[var(--aura-yellow)] leading-none counter-tabular">
                    {p.n}
                  </span>
                  <span className="w-12 h-12 rounded-xl flex items-center justify-center bg-[var(--aura-blue-tint)] text-[var(--aura-blue)]">
                    {p.icon}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[var(--aura-text)] mb-2 leading-tight">
                  {p.titulo}
                </h3>
                <p className="text-sm text-[var(--aura-text-muted)] leading-relaxed mb-4">
                  {p.desc}
                </p>

                <div className="flex items-center gap-1.5 text-xs font-semibold text-[var(--aura-yellow-deep)] uppercase tracking-wide">
                  <IconClock size={13} />
                  {p.prazo}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={4}>
          <div className="text-center mt-12 text-sm text-[var(--aura-text-muted)] flex items-center justify-center gap-2">
            <IconChevronDown size={16} />
            Continue rolando pra ver os equipamentos que usamos
          </div>
        </Reveal>
      </div>
    </section>
  );
}
