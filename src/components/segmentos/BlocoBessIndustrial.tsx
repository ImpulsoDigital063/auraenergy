import Reveal from "../Reveal";
import {
  IconBolt,
  IconCheck,
  IconChart,
  IconFactory,
  IconShield,
} from "../Icons";

// Bloco BESS industrial · materializa o "eixo central Aura" cravado no briefing
// V3.1 do Renato (22/05/2026) aplicado ao decisor industrial.
// 4 aplicacoes filtradas: peak shaving · microrede · backup operacional · demanda otimizada.
// Paleta blue-deep (primaria industria) com acento amarelo Aura.

const BLUE_DEEP = "#0E2152";
const YELLOW_DEEP = "#C99419";
const YELLOW_SOFT = "rgba(201, 148, 25, 0.12)";

// Icone bateria inline (consistente com BlocoBessRural)
function IconBattery({ size = 24, strokeWidth = 1.75 }: { size?: number; strokeWidth?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="7" width="16" height="10" rx="2" />
      <path d="M22 11v2" />
      <path d="M6 11v2" />
      <path d="M10 11v2" />
      <path d="M14 11v2" />
    </svg>
  );
}

type Aplicacao = {
  icon: React.ReactNode;
  titulo: string;
  desc: string;
  destaque?: string;
};

const APLICACOES: Aplicacao[] = [
  {
    icon: <IconBolt size={26} />,
    titulo: "Peak shaving · ponta cara zerada",
    desc:
      "Tarifa azul cobra ate 6x mais na ponta (18h-21h). Banco carrega de dia com solar, descarrega na ponta. Sua conta despenca onde mais doi.",
    destaque: "ponta 6x → 1x",
  },
  {
    icon: <IconFactory size={26} />,
    titulo: "Microrede industrial · operacao isolada da rede",
    desc:
      "Frigorifico, beneficiamento, agroindustria pode operar em modo ilha quando a rede falha. Linha de producao nao para, freezer nao descongela, contratos com penalidade ficam protegidos.",
    destaque: "modo ilha",
  },
  {
    icon: <IconShield size={26} />,
    titulo: "Backup operacional · maquina nao para no apagao",
    desc:
      "Energisa cai com bandeira vermelha. Sua planta para? Multas, paradas de linha, produto perdido. Bateria mantem operacao critica ate a rede voltar.",
    destaque: "uptime 99%",
  },
  {
    icon: <IconChart size={26} />,
    titulo: "Demanda contratada otimizada",
    desc:
      "Banco descarrega nas horas de pico de demanda contratada. Voce contrata menor demanda, paga menos fixo, evita multa por ultrapassagem. Caixa que volta direto pro DRE.",
    destaque: "demanda −30%",
  },
];

export default function BlocoBessIndustrial() {
  return (
    <section
      className="relative py-20 sm:py-24 overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${BLUE_DEEP} 0%, #050B1F 100%)`,
      }}
    >
      {/* Glow amarelo industrial sutil no fundo */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 20% 30%, rgba(201, 148, 25, 0.08) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 80% 70%, rgba(255, 255, 255, 0.04) 0%, transparent 60%)",
        }}
        aria-hidden
      />

      {/* Grid tecnico */}
      <div className="bg-grid-soft absolute inset-0 opacity-10" aria-hidden />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-12 sm:mb-14">
            <span
              className="mb-5 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest"
              style={{
                background: YELLOW_SOFT,
                color: YELLOW_DEEP,
                border: `1px solid ${YELLOW_DEEP}40`,
              }}
            >
              <IconBattery size={14} />
              Bateria + Solar
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4 leading-[1.05]">
              Sua planta nao para
              <br />
              <span style={{ color: YELLOW_DEEP }}>
                quando a rede falha.
              </span>
            </h2>
            <p className="text-base sm:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
              Solar gera de dia, banco armazena, planta opera quando precisa.
              Ponta sai do orcamento, demanda contratada cai, maquina nao para
              no apagao. Voce decide quando a Energisa importa.
            </p>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-10 items-stretch">
          {/* Coluna 4 aplicacoes — 3/5 */}
          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-4 sm:gap-5">
            {APLICACOES.map((app, i) => (
              <Reveal key={app.titulo} delay={((i % 3) + 1) as 1 | 2 | 3}>
                <div
                  className="rounded-2xl p-6 h-full transition-all"
                  style={{
                    background: "rgba(255, 255, 255, 0.04)",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{
                      background: YELLOW_SOFT,
                      color: YELLOW_DEEP,
                    }}
                  >
                    {app.icon}
                  </div>
                  {app.destaque && (
                    <div
                      className="text-[10px] font-bold uppercase tracking-widest mb-1.5"
                      style={{ color: YELLOW_DEEP }}
                    >
                      {app.destaque}
                    </div>
                  )}
                  <h3 className="text-lg font-bold text-white mb-2 leading-tight">
                    {app.titulo}
                  </h3>
                  <p className="text-sm text-white/65 leading-relaxed">
                    {app.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Coluna calculo peak shaving — 2/5 */}
          <Reveal delay={3}>
            <div className="lg:col-span-2">
              <div
                className="rounded-3xl p-7 sm:p-8 h-full flex flex-col"
                style={{
                  background: `linear-gradient(135deg, ${YELLOW_DEEP} 0%, #A0750F 100%)`,
                  boxShadow: `0 24px 60px -16px ${YELLOW_DEEP}60`,
                }}
              >
                <div className="flex items-center justify-between mb-5">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-white/85">
                    Caso-tipo · peak shaving
                  </span>
                  <span
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: "rgba(255, 255, 255, 0.20)" }}
                  >
                    <IconBattery size={20} />
                  </span>
                </div>

                <div className="flex-1">
                  <div className="text-[11px] font-bold uppercase tracking-widest text-white/75 mb-2">
                    Planta industrial 200 kWp
                  </div>
                  <div className="text-5xl sm:text-6xl font-extrabold counter-tabular leading-none mb-2 text-white">
                    + R$ 10k
                  </div>
                  <div className="text-sm text-white/85 mb-6">
                    economia extra na ponta · todo mes
                  </div>

                  <div
                    className="rounded-xl p-4 mb-5"
                    style={{ background: "rgba(255, 255, 255, 0.18)" }}
                  >
                    <div className="text-[10px] font-bold uppercase tracking-widest text-white/85 mb-1">
                      Calculo cravado
                    </div>
                    <ul className="space-y-1 text-sm text-white">
                      <li>· Banco 50 kWh acoplado ao sistema solar</li>
                      <li>· Tarifa ponta TO ≈ 6x fora ponta</li>
                      <li>· Banco descarrega 18h-21h</li>
                    </ul>
                  </div>

                  <ul className="space-y-2 text-sm text-white/90">
                    <li className="flex items-start gap-2">
                      <IconCheck size={16} className="mt-0.5 flex-shrink-0" />
                      <span>BNDES Finame Baixo Carbono · 10-12 anos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <IconCheck size={16} className="mt-0.5 flex-shrink-0" />
                      <span>Marcas: <strong>BYD + Huawei</strong> · inversor hibrido Sungrow SH</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <IconCheck size={16} className="mt-0.5 flex-shrink-0" />
                      <span>Garantia bateria <strong>10 anos</strong></span>
                    </li>
                  </ul>
                </div>

                <div className="mt-6 pt-5 border-t border-white/20 text-[11px] text-white/70 leading-relaxed">
                  Calculo conservador · varia conforme perfil de carga, demanda
                  contratada e tarifa Energisa vigente.
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Linha tecnica rodape */}
        <Reveal delay={5}>
          <div className="mt-12 sm:mt-14 flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-8 text-center sm:text-left flex-wrap">
            <Selo titulo="Lei 15.269/2025" sub="novo marco BESS BR" />
            <span className="hidden sm:inline text-white/20">·</span>
            <Selo titulo="Fio B 60% → 100%" sub="ate 2029 · janela fecha" />
            <span className="hidden sm:inline text-white/20">·</span>
            <Selo titulo="Garantia 10 anos" sub="bateria + inversor" />
            <span className="hidden sm:inline text-white/20">·</span>
            <Selo titulo="ESG / Carbono" sub="credito eligivel" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Selo({ titulo, sub }: { titulo: string; sub: string }) {
  return (
    <div>
      <div
        className="text-sm font-bold leading-tight"
        style={{ color: YELLOW_DEEP }}
      >
        {titulo}
      </div>
      <div className="text-[11px] text-white/55 leading-tight mt-0.5">
        {sub}
      </div>
    </div>
  );
}
