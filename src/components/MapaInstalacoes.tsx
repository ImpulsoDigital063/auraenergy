import Reveal from "./Reveal";
import { IconMapPin, IconSparkles } from "./Icons";

// Bairros de Palmas-TO com coordenadas estilizadas (não geo-precisas, layout
// pra prova social visual). x e y em % da viewbox.
// Eduardo: trocar por coordenadas reais quando tiver mapa de obras feitas.
const INSTALACOES = [
  { x: 38, y: 28, bairro: "Plano Diretor Norte", n: 4 },
  { x: 45, y: 42, bairro: "Plano Diretor Sul", n: 7 },
  { x: 25, y: 55, bairro: "Aureny III", n: 3 },
  { x: 60, y: 35, bairro: "Lago Norte", n: 5 },
  { x: 55, y: 65, bairro: "Taquaralto", n: 6 },
  { x: 70, y: 50, bairro: "ARSE 122", n: 2 },
  { x: 30, y: 75, bairro: "Aureny IV", n: 3 },
  { x: 75, y: 25, bairro: "Lago Sul", n: 4 },
  { x: 50, y: 18, bairro: "Capim Dourado", n: 2 },
];

const TOTAL = INSTALACOES.reduce((sum, i) => sum + i.n, 0);

export default function MapaInstalacoes() {
  return (
    <section className="py-20 sm:py-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-12">
            <span className="badge-blue mb-4 inline-flex">
              <IconMapPin size={14} />
              Aura está aqui
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[var(--aura-text)] mb-4">
              Instalações em <span className="text-gradient-aura">Palmas</span> e
              região.
            </h2>
            <p className="text-lg text-[var(--aura-text-muted)] max-w-2xl mx-auto">
              Empresa local com técnicos próprios. Atendemos toda a capital e
              cidades da região metropolitana.
            </p>
          </div>
        </Reveal>

        <Reveal delay={1}>
          <div className="premium-card p-6 sm:p-10 lg:p-12 relative overflow-hidden">
            {/* Stats rápidas */}
            <div className="grid grid-cols-3 gap-4 mb-8 pb-8 border-b border-[var(--aura-border)]">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-extrabold text-[var(--aura-blue)] counter-tabular leading-none mb-1">
                  {TOTAL}+
                </div>
                <div className="text-xs sm:text-sm text-[var(--aura-text-muted)]">
                  Instalações concluídas
                </div>
              </div>
              <div className="text-center border-l border-r border-[var(--aura-border)]">
                <div className="text-3xl sm:text-4xl font-extrabold text-[var(--aura-yellow-deep)] counter-tabular leading-none mb-1">
                  {INSTALACOES.length}
                </div>
                <div className="text-xs sm:text-sm text-[var(--aura-text-muted)]">
                  Bairros atendidos
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-extrabold text-[#10b981] counter-tabular leading-none mb-1">
                  100%
                </div>
                <div className="text-xs sm:text-sm text-[var(--aura-text-muted)]">
                  Homologadas Energisa
                </div>
              </div>
            </div>

            {/* Mapa SVG estilizado */}
            <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-[var(--aura-blue-tint)]">
              {/* Background com grid */}
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 100 60"
                preserveAspectRatio="xMidYMid slice"
                aria-hidden
              >
                <defs>
                  <pattern
                    id="grid-mapa"
                    width="5"
                    height="5"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M 5 0 L 0 0 0 5"
                      fill="none"
                      stroke="rgba(27,58,135,0.08)"
                      strokeWidth="0.3"
                    />
                  </pattern>
                  <radialGradient id="cidade-glow" cx="0.5" cy="0.5" r="0.6">
                    <stop offset="0%" stopColor="rgba(245,188,44,0.20)" />
                    <stop offset="100%" stopColor="transparent" />
                  </radialGradient>
                </defs>

                <rect width="100" height="60" fill="url(#grid-mapa)" />

                {/* Glow central representando "centro de Palmas" */}
                <ellipse
                  cx="50"
                  cy="40"
                  rx="35"
                  ry="22"
                  fill="url(#cidade-glow)"
                />

                {/* Linhas estilizadas — avenidas */}
                <line
                  x1="0"
                  y1="40"
                  x2="100"
                  y2="40"
                  stroke="rgba(27,58,135,0.20)"
                  strokeWidth="0.5"
                  strokeDasharray="2 2"
                />
                <line
                  x1="50"
                  y1="0"
                  x2="50"
                  y2="60"
                  stroke="rgba(27,58,135,0.20)"
                  strokeWidth="0.5"
                  strokeDasharray="2 2"
                />

                {/* Rio Tocantins estilizado (curva à esquerda) */}
                <path
                  d="M 5 0 Q 12 20, 8 30 T 12 60"
                  fill="none"
                  stroke="rgba(59, 130, 246, 0.30)"
                  strokeWidth="2"
                  strokeLinecap="round"
                />

                {/* Label "PALMAS-TO" */}
                <text
                  x="50"
                  y="55"
                  textAnchor="middle"
                  fontSize="3"
                  fontWeight="700"
                  fill="rgba(27,58,135,0.30)"
                  letterSpacing="0.5"
                >
                  PALMAS · TOCANTINS
                </text>
              </svg>

              {/* Pins das instalações */}
              {INSTALACOES.map((inst, i) => (
                <div
                  key={inst.bairro}
                  className="absolute -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
                  style={{
                    left: `${inst.x}%`,
                    top: `${inst.y}%`,
                  }}
                >
                  {/* Pulse */}
                  <span
                    className="absolute inset-0 rounded-full animate-ping"
                    style={{
                      background: "rgba(245,188,44,0.40)",
                      animationDuration: "2.4s",
                      animationDelay: `${i * 0.2}s`,
                    }}
                  />
                  {/* Pin */}
                  <div
                    className="relative w-7 h-7 sm:w-9 sm:h-9 rounded-full flex items-center justify-center font-bold text-white text-xs sm:text-sm shadow-lg"
                    style={{
                      background:
                        "linear-gradient(135deg, var(--aura-yellow) 0%, var(--aura-orange) 100%)",
                      boxShadow:
                        "0 4px 16px rgba(245,188,44,0.45), inset 0 1px 0 rgba(255,255,255,0.3)",
                    }}
                  >
                    {inst.n}
                  </div>

                  {/* Tooltip */}
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10 whitespace-nowrap">
                    <div className="bg-[var(--aura-blue-deep)] text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-xl">
                      {inst.bairro}
                      <span className="text-[var(--aura-yellow)] ml-2">
                        {inst.n}× instalações
                      </span>
                    </div>
                    <div
                      className="w-2 h-2 bg-[var(--aura-blue-deep)] rotate-45 absolute left-1/2 -translate-x-1/2 -bottom-1"
                      aria-hidden
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Legenda de bairros */}
            <Reveal delay={2}>
              <div className="mt-8">
                <div className="text-xs font-bold uppercase tracking-widest text-[var(--aura-text-muted)] mb-3 flex items-center gap-2">
                  <IconSparkles size={14} />
                  Bairros já atendidos
                </div>
                <div className="flex flex-wrap gap-2">
                  {INSTALACOES.map((inst) => (
                    <span
                      key={inst.bairro}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[var(--aura-bg-soft)] border border-[var(--aura-border)] text-xs sm:text-sm font-medium text-[var(--aura-text-soft)]"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--aura-yellow)]" />
                      {inst.bairro}
                      <span className="text-[var(--aura-text-muted)]">·</span>
                      <span className="font-bold text-[var(--aura-yellow-deep)] counter-tabular">
                        {inst.n}
                      </span>
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </Reveal>

        <Reveal delay={3}>
          <p className="text-center text-xs text-[var(--aura-text-faded)] mt-6 italic">
            * Mapa ilustrativo durante fase de lançamento. Localizações exatas
            preservadas por privacidade dos clientes.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
