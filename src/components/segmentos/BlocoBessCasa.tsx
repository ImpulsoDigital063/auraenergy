import Reveal from "../Reveal";
import {
  IconBolt,
  IconCheck,
  IconHome,
  IconShield,
} from "../Icons";

// Bloco BESS residencial · materializa o "eixo central Aura" cravado no briefing
// V3.1 do Renato (22/05/2026) aplicado a casa.
// 4 aplicacoes filtradas: backup apagao · autoconsumo noite · carro eletrico · independencia.
// Paleta blue-deep com acento amarelo Aura warm.

const YELLOW = "#F5BC2C";
const YELLOW_DEEP = "#C99419";
const YELLOW_SOFT = "rgba(245, 188, 44, 0.15)";

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

function IconCar({ size = 24, strokeWidth = 1.75 }: { size?: number; strokeWidth?: number }) {
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
      <path d="M3 13l2-6h14l2 6" />
      <path d="M3 13v5a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2" />
      <path d="M17 19h2a1 1 0 0 0 1-1v-5" />
      <path d="M7 17h10" />
      <circle cx="7" cy="15" r="1.5" />
      <circle cx="17" cy="15" r="1.5" />
    </svg>
  );
}

function IconMoon({ size = 24, strokeWidth = 1.75 }: { size?: number; strokeWidth?: number }) {
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
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
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
    icon: <IconShield size={26} />,
    titulo: "Apagao? Sua casa nao para",
    desc:
      "Energisa cai (acontece em Palmas). Luz, geladeira, freezer, ar-condicionado, internet, alarme, portao continuam funcionando. Banco entrega energia ate a rede voltar.",
    destaque: "luz na hora certa",
  },
  {
    icon: <IconMoon size={26} />,
    titulo: "Solar de dia, banco a noite · conta perto de zero",
    desc:
      "Solar gera o dia inteiro · banco armazena o que sobra · sua casa usa essa energia ate o sol voltar. Autoconsumo total. Voce nao depende de credito Energisa no fim do mes.",
    destaque: "autoconsumo total",
  },
  {
    icon: <IconCar size={26} />,
    titulo: "Carro eletrico carrega de graca",
    desc:
      "Pretende comprar um carro eletrico? Carrega de madrugada com energia armazenada do banco solar. Sem aumentar conta, sem usar tarifa cheia. V2H/V2G entrega autonomia total casa+carro.",
    destaque: "V2H/V2G",
  },
  {
    icon: <IconHome size={26} />,
    titulo: "Independencia da Energisa",
    desc:
      "Conta de luz alta, bandeira vermelha, reajuste anual. Solar + bateria te tira da dependencia. Voce decide quanto da Energisa importa todo mes. Casa vira ativo, nao despesa.",
    destaque: "voce decide",
  },
];

export default function BlocoBessCasa() {
  return (
    <section
      className="relative py-20 sm:py-24 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0E2152 0%, #050B1F 100%)",
      }}
    >
      {/* Glow amarelo Aura warm */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 20% 30%, rgba(245, 188, 44, 0.14) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 80% 70%, rgba(232, 153, 48, 0.06) 0%, transparent 60%)",
        }}
        aria-hidden
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-12 sm:mb-14">
            <span
              className="mb-5 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest"
              style={{
                background: YELLOW_SOFT,
                color: YELLOW,
                border: `1px solid ${YELLOW}40`,
              }}
            >
              <IconBattery size={14} />
              Bateria + Solar
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4 leading-[1.05]">
              Sua casa nao apaga
              <br />
              <span style={{ color: YELLOW }}>
                quando a Energisa cai.
              </span>
            </h2>
            <p className="text-base sm:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
              Solar gera de dia, banco armazena, sua casa usa quando precisa.
              Apagao nao desliga a geladeira, conta de luz quase zera no fim do
              mes, carro eletrico carrega de graca. Voce decide quando a Energisa
              importa.
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
                      color: YELLOW,
                    }}
                  >
                    {app.icon}
                  </div>
                  {app.destaque && (
                    <div
                      className="text-[10px] font-bold uppercase tracking-widest mb-1.5"
                      style={{ color: YELLOW }}
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

          {/* Coluna caso-tipo — 2/5 */}
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
                    Caso real Aura
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
                    Casa · Quadra 407 · Palmas
                  </div>
                  <div className="text-5xl sm:text-6xl font-extrabold counter-tabular leading-none mb-2 text-white">
                    R$ 130
                  </div>
                  <div className="text-sm text-white/85 mb-6">
                    conta mensal depois do sistema (era R$ 900)
                  </div>

                  <div
                    className="rounded-xl p-4 mb-5"
                    style={{ background: "rgba(255, 255, 255, 0.18)" }}
                  >
                    <div className="text-[10px] font-bold uppercase tracking-widest text-white/85 mb-1">
                      Numeros do caso
                    </div>
                    <ul className="space-y-1 text-sm text-white">
                      <li>· Sistema solar <strong>8,5 kWp</strong></li>
                      <li>· Economia: <strong>R$ 770/mes</strong> · 85% de corte</li>
                      <li>· Com banco 5 kWh: <strong>apagao zero impacto</strong></li>
                    </ul>
                  </div>

                  <ul className="space-y-2 text-sm text-white/90">
                    <li className="flex items-start gap-2">
                      <IconCheck size={16} className="mt-0.5 flex-shrink-0" />
                      <span>BV Financeira · 6 bancos · entrada zero</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <IconCheck size={16} className="mt-0.5 flex-shrink-0" />
                      <span>Marcas: <strong>BYD + Huawei</strong> · inversor hibrido Solis</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <IconCheck size={16} className="mt-0.5 flex-shrink-0" />
                      <span>Garantia bateria <strong>10 anos</strong></span>
                    </li>
                  </ul>
                </div>

                <div className="mt-6 pt-5 border-t border-white/20 text-[11px] text-white/70 leading-relaxed">
                  Caso real entregue pela Aura. Sob NDA · valores arredondados.
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Linha tecnica rodape */}
        <Reveal delay={5}>
          <div className="mt-12 sm:mt-14 flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-8 text-center sm:text-left flex-wrap">
            <Selo titulo="Apagao zero impacto" sub="luz na hora critica" />
            <span className="hidden sm:inline text-white/20">·</span>
            <Selo titulo="Garantia 10 anos" sub="bateria + inversor" />
            <span className="hidden sm:inline text-white/20">·</span>
            <Selo titulo="Pronto pra carro eletrico" sub="V2H/V2G" />
            <span className="hidden sm:inline text-white/20">·</span>
            <Selo titulo="Visita gratis 100 km" sub="dentro de Palmas e regiao" />
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
        style={{ color: YELLOW }}
      >
        {titulo}
      </div>
      <div className="text-[11px] text-white/55 leading-tight mt-0.5">
        {sub}
      </div>
    </div>
  );
}
