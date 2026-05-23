import Reveal from "../Reveal";
import {
  IconBolt,
  IconCheck,
  IconLeaf,
  IconShield,
  IconTractor,
} from "../Icons";

// Bloco BESS rural · materializa o "eixo central Aura" cravado no briefing
// V3.1 do Renato (22/05/2026). Foca em 4 aplicações filtradas pra agro:
// off-grid · backup granja/aviario · bombeamento com banco · microrede agroindustrial.
// Caso real cravado: 100 kWh Paraiso TO · R$450k · maior projeto BESS Renato.

const RURAL_GREEN = "#15803D";
const RURAL_GREEN_BRIGHT = "#22C55E";
const RURAL_GREEN_SOFT = "rgba(34, 197, 94, 0.10)";

// Icone bateria inline (nao existe no Icons.tsx)
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

function IconWaterDrop({ size = 24, strokeWidth = 1.75 }: { size?: number; strokeWidth?: number }) {
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
      <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.32 0z" />
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
    icon: <IconBattery size={26} />,
    titulo: "Sitio longe da rede · independencia total",
    desc:
      "Propriedade sem acesso a rede Energisa nao paga poste nem espera concessao. Geracao solar + banco de bateria entrega energia 24h. Voce vira a sua propria concessionaria.",
    destaque: "Sem fio, sem rede",
  },
  {
    icon: <IconShield size={26} />,
    titulo: "Quando a Energisa cai · granja e aviario nao param",
    desc:
      "Apagao em Tocantins acontece. Bateria mantem ventilacao, ar-condicionado e refrigeracao rodando ate a rede voltar. Ovos, frango, leite, vacina nao perdem.",
    destaque: "Apagao zero impacto",
  },
  {
    icon: <IconWaterDrop size={26} />,
    titulo: "Pivo e bombeamento rodando ate a madrugada",
    desc:
      "Bomba puxa agua do poco de dia, banco armazena, irrigacao roda no fim da tarde e madrugada. Pivo nao para por sol fraco nem por queda de rede.",
    destaque: "Pivo 24h",
  },
  {
    icon: <IconBolt size={26} />,
    titulo: "Frigorifico e agroindustria · ponta zerada",
    desc:
      "Beneficiamento, frigorifico, agroindustria. Banco corta o horario de ponta (caro) com tarifa branca + bateria. Conta despenca onde mais doi.",
    destaque: "Peak shaving",
  },
];

export default function BlocoBessRural() {
  return (
    <section
      className="relative py-20 sm:py-24 overflow-hidden"
      style={{ background: "var(--aura-blue-deep, #0A1330)" }}
    >
      {/* Glow verde rural sutil no fundo */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 20% 30%, rgba(34, 197, 94, 0.10) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 80% 70%, rgba(245, 188, 44, 0.05) 0%, transparent 60%)",
        }}
        aria-hidden
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-12 sm:mb-14">
            <span
              className="mb-5 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest"
              style={{
                background: RURAL_GREEN_SOFT,
                color: RURAL_GREEN_BRIGHT,
                border: `1px solid ${RURAL_GREEN_BRIGHT}40`,
              }}
            >
              <IconBattery size={14} />
              Bateria + Solar
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4 leading-[1.05]">
              A energia da sua fazenda
              <br />
              <span style={{ color: RURAL_GREEN_BRIGHT }}>
                nao pode parar.
              </span>
            </h2>
            <p className="text-base sm:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
              Solar gera de dia, banco de bateria armazena, fazenda usa quando precisa.
              Pivo nao para na queda de rede, granja nao desliga no apagao,
              camara fria roda 24h. Voce decide quando a Energisa importa.
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
                      background: RURAL_GREEN_SOFT,
                      color: RURAL_GREEN_BRIGHT,
                    }}
                  >
                    {app.icon}
                  </div>
                  {app.destaque && (
                    <div
                      className="text-[10px] font-bold uppercase tracking-widest mb-1.5"
                      style={{ color: RURAL_GREEN_BRIGHT }}
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

          {/* Coluna caso real — 2/5 */}
          <Reveal delay={3}>
            <div className="lg:col-span-2">
              <div
                className="rounded-3xl p-7 sm:p-8 h-full flex flex-col"
                style={{
                  background: `linear-gradient(135deg, ${RURAL_GREEN} 0%, #166534 100%)`,
                  boxShadow: `0 24px 60px -16px ${RURAL_GREEN}60`,
                }}
              >
                <div className="flex items-center justify-between mb-5">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-white/80">
                    Maior projeto BESS Aura
                  </span>
                  <span
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: "rgba(255, 255, 255, 0.18)" }}
                  >
                    <IconBattery size={20} />
                  </span>
                </div>

                <div className="flex-1">
                  <div className="text-[11px] font-bold uppercase tracking-widest text-white/70 mb-2">
                    Paraiso do Tocantins
                  </div>
                  <div className="text-5xl sm:text-6xl font-extrabold counter-tabular leading-none mb-2 text-white">
                    100 kWh
                  </div>
                  <div className="text-sm text-white/80 mb-6">
                    banco de bateria · sistema solar acoplado
                  </div>

                  <div
                    className="rounded-xl p-4 mb-5"
                    style={{ background: "rgba(255, 255, 255, 0.12)" }}
                  >
                    <div className="text-[10px] font-bold uppercase tracking-widest text-white/70 mb-1">
                      Investimento total
                    </div>
                    <div className="text-2xl font-extrabold text-white">
                      R$ 450.000
                    </div>
                    <div className="text-[11px] text-white/65 mt-1">
                      financiavel via Pronaf Mais Alimentos
                    </div>
                  </div>

                  <ul className="space-y-2 text-sm text-white/85">
                    <li className="flex items-start gap-2">
                      <IconCheck size={16} className="mt-0.5 flex-shrink-0" />
                      <span>
                        Marcas: <strong>BYD + Huawei</strong> · inversor hibrido Solis
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <IconCheck size={16} className="mt-0.5 flex-shrink-0" />
                      <span>Garantia bateria <strong>10 anos</strong></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <IconCheck size={16} className="mt-0.5 flex-shrink-0" />
                      <span>Renato faz <strong>retrofit em sistemas antigos</strong> tambem</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-6 pt-5 border-t border-white/15 text-[11px] text-white/60 leading-relaxed">
                  Caso real entregue pela Aura. Sob NDA · valores arredondados.
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
            <Selo titulo="Garantia 10 anos" sub="bateria + inversor hibrido" />
            <span className="hidden sm:inline text-white/20">·</span>
            <Selo titulo="Pronaf financiavel" sub="0,5% a.m. · 12 anos" />
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
        className="text-sm font-bold text-white leading-tight"
        style={{ color: RURAL_GREEN_BRIGHT }}
      >
        {titulo}
      </div>
      <div className="text-[11px] text-white/55 leading-tight mt-0.5">
        {sub}
      </div>
    </div>
  );
}
