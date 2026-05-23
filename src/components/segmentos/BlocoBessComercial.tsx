import Reveal from "../Reveal";
import {
  IconBolt,
  IconCheck,
  IconShield,
  IconStore,
  IconWallet,
} from "../Icons";

// Bloco BESS comercial · materializa o "eixo central Aura" cravado no briefing
// V3.1 do Renato (22/05/2026) aplicado ao dono de comercio.
// 4 aplicacoes filtradas: peak shaving · backup camara fria · microrede 24h · demanda otimizada.
// Paleta blue-deep com acento amarelo Aura (cor primaria comercial).

const YELLOW_DEEP = "#C99419";
const YELLOW_SOFT = "rgba(245, 188, 44, 0.15)";
const YELLOW_BRIGHT = "#F5BC2C";

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

function IconFridge({ size = 24, strokeWidth = 1.75 }: { size?: number; strokeWidth?: number }) {
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
      <rect x="5" y="2" width="14" height="20" rx="2" />
      <path d="M5 10h14" />
      <path d="M8 6v1" />
      <path d="M8 14v2" />
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
    titulo: "Peak shaving · ponta zerada todo dia",
    desc:
      "Tarifa branca cobra mais caro entre 18h-21h, justo quando seu comercio mais consome (luz, ar, freezer). Banco carrega de dia com solar, descarrega na ponta. Conta despenca onde mais doi.",
    destaque: "ponta zerada",
  },
  {
    icon: <IconFridge size={26} />,
    titulo: "Backup pra freezer, camara fria, padaria",
    desc:
      "Apagao Energisa = freezer descongela, fermento estraga, vacina perde. Bateria mantem refrigeracao critica ate a rede voltar. Voce dorme tranquilo no fim de semana.",
    destaque: "produto preservado",
  },
  {
    icon: <IconStore size={26} />,
    titulo: "Loja 24h sem depender da rede",
    desc:
      "Conveniencia, lava-jato, posto, restaurante de madrugada. Microrede comercial mantem caixa, freezer, iluminacao e Wi-Fi operando mesmo se a Energisa cair. Cliente nao vai embora.",
    destaque: "operacao continua",
  },
  {
    icon: <IconWallet size={26} />,
    titulo: "Demanda contratada otimizada",
    desc:
      "Banco descarrega nos picos do dia, voce contrata demanda menor, paga menos fixo na fatura. Multa por ultrapassagem some. Caixa volta direto pra margem operacional.",
    destaque: "demanda −25%",
  },
];

export default function BlocoBessComercial() {
  return (
    <section
      className="relative py-20 sm:py-24 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0E2152 0%, #050B1F 100%)",
      }}
    >
      {/* Glow amarelo Aura sutil */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 20% 30%, rgba(245, 188, 44, 0.12) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 80% 70%, rgba(255, 255, 255, 0.04) 0%, transparent 60%)",
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
                color: YELLOW_BRIGHT,
                border: `1px solid ${YELLOW_BRIGHT}40`,
              }}
            >
              <IconBattery size={14} />
              Bateria + Solar
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4 leading-[1.05]">
              Seu comercio nao para
              <br />
              <span style={{ color: YELLOW_BRIGHT }}>
                quando a luz cai.
              </span>
            </h2>
            <p className="text-base sm:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
              Solar gera de dia, banco armazena, comercio usa quando precisa.
              Freezer nao descongela no apagao, ponta sai do orcamento,
              cliente nao vai embora porque a rede caiu. Voce decide quando
              a Energisa importa.
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
                      color: YELLOW_BRIGHT,
                    }}
                  >
                    {app.icon}
                  </div>
                  {app.destaque && (
                    <div
                      className="text-[10px] font-bold uppercase tracking-widest mb-1.5"
                      style={{ color: YELLOW_BRIGHT }}
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
                    Caso-tipo · supermercado
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
                    Mercado · Palmas-TO
                  </div>
                  <div className="text-5xl sm:text-6xl font-extrabold counter-tabular leading-none mb-2 text-white">
                    R$ 155
                  </div>
                  <div className="text-sm text-white/85 mb-6">
                    conta mensal depois do sistema (era R$ 3.000)
                  </div>

                  <div
                    className="rounded-xl p-4 mb-5"
                    style={{ background: "rgba(255, 255, 255, 0.18)" }}
                  >
                    <div className="text-[10px] font-bold uppercase tracking-widest text-white/85 mb-1">
                      Caso real Aura
                    </div>
                    <ul className="space-y-1 text-sm text-white">
                      <li>· Sistema solar 25 kWp</li>
                      <li>· Conta antes: R$ 3.000/mes</li>
                      <li>· Economia: <strong>R$ 2.845/mes</strong></li>
                      <li>· Com banco 15 kWh: <strong>+R$ 800/mes</strong> peak shaving</li>
                    </ul>
                  </div>

                  <ul className="space-y-2 text-sm text-white/90">
                    <li className="flex items-start gap-2">
                      <IconCheck size={16} className="mt-0.5 flex-shrink-0" />
                      <span>BV Financeira · BNDES Finame · 6 bancos</span>
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
                  Caso real entregue pela Aura. Investimento financiavel · ROI
                  conforme perfil de consumo.
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Argumentos cravados Renato · rodape */}
        <Reveal delay={5}>
          <div className="mt-12 sm:mt-14 flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-8 text-center sm:text-left flex-wrap">
            <Selo titulo="ROI em meses" sub="payback comercial rapido" />
            <span className="hidden sm:inline text-white/20">·</span>
            <Selo titulo="Reduz folha fixa" sub="energia sai do opex" />
            <span className="hidden sm:inline text-white/20">·</span>
            <Selo titulo="Marketing verde" sub="atrai cliente ESG" />
            <span className="hidden sm:inline text-white/20">·</span>
            <Selo titulo="Valoriza o ponto" sub="ativo agrega ao imovel" />
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
        style={{ color: "#F5BC2C" }}
      >
        {titulo}
      </div>
      <div className="text-[11px] text-white/55 leading-tight mt-0.5">
        {sub}
      </div>
    </div>
  );
}
