import Reveal from "../Reveal";
import {
  IconArrowUpRight,
  IconBolt,
  IconChart,
  IconCheck,
  IconClock,
  IconShield,
  IconStore,
  IconTrending,
  IconWallet,
} from "../Icons";

type Item = {
  titulo: string;
  desc: string;
  icon: React.ReactNode;
};

const DORES: Item[] = [
  {
    titulo: "Refrigeração 24h estoura a margem",
    desc: "Geladeira, freezer, ar-condicionado, vitrine rodam o dia inteiro. Comércio típico tem grande parte do consumo entre 8h-22h · exatamente quando o sol cobre · e a Energisa cobra do mesmo jeito. Custo que cresce sem trazer nenhum ativo pro negócio.",
    icon: <IconClock size={22} />,
  },
  {
    titulo: "Tarifa branca pune horário de pico",
    desc: "Das 18h às 21h o kWh fica significativamente mais caro na tarifa branca. Restaurante, padaria, supermercado pagam tarifa de pico no horário em que mais vendem · sem alternativa pelo lado da concessionária.",
    icon: <IconBolt size={22} />,
  },
  {
    titulo: "Bandeira vermelha em mês de pico",
    desc: "Mês de calor extremo, hidráulica baixa, conta sobe sem aviso. Planilha de margem do mês fica difícil de fechar. Você não controla seu próprio custo fixo de energia · só recebe o boleto pra pagar.",
    icon: <IconArrowUpRight size={22} />,
  },
];

const GANHOS: Item[] = [
  {
    titulo: "Payback geralmente em 3-4 anos no comercial",
    desc: "Comércio costuma pagar mais rápido que residencial por causa do consumo concentrado no horário solar. Depois do payback, são mais de 20 anos de geração no mesmo ativo · número exato depende do perfil de carga.",
    icon: <IconCheck size={22} strokeWidth={2.5} />,
  },
  {
    titulo: "Capex vira opex no balanço",
    desc: "Financia em 120 meses (BV Financeira preferida + 5 bancos). Parcela entra como custo operacional, libera caixa pra giro e estoque. Em muitos casos a parcela já fica menor que a conta atual desde o primeiro mês.",
    icon: <IconWallet size={22} />,
  },
  {
    titulo: "Marketing verde de verdade",
    desc: "Cliente final escolhe marca sustentável. Selo de empresa solar é diferencial · placa na fachada, comunicação no Instagram, posicionamento ESG. Atrai público que valoriza isso · sem custo extra de mídia.",
    icon: <IconTrending size={22} />,
  },
];

export default function DoresGanhosComercio() {
  return (
    <section id="dores-ganhos" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="bg-grid-soft absolute inset-0 opacity-40" aria-hidden />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-12">
            <span
              className="mb-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold"
              style={{
                background: "var(--aura-yellow-tint)",
                color: "var(--aura-yellow-deep)",
                border: "1px solid rgba(245, 188, 44, 0.30)",
              }}
            >
              <IconStore size={14} />
              Pro seu comércio
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[var(--aura-text)] mb-4">
              O que tira margem hoje{" "}
              <span className="text-gradient-aura">vira lucro amanhã.</span>
            </h2>
            <p className="text-lg text-[var(--aura-text-muted)] max-w-2xl mx-auto">
              3 dores que todo comércio em Palmas conhece — 3 ganhos que solar
              entrega no próximo balanço.
            </p>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-10">
          {/* Dores */}
          <Reveal delay={1}>
            <div className="premium-card p-6 sm:p-8 h-full">
              <div className="flex items-center gap-3 mb-6 pb-5 border-b border-[var(--aura-border)]">
                <span
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{
                    background: "rgba(255, 107, 71, 0.10)",
                    color: "var(--aura-urgent)",
                  }}
                >
                  <IconArrowUpRight size={20} />
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[var(--aura-text)]">
                  O que tira margem hoje
                </h3>
              </div>

              <div className="space-y-5">
                {DORES.map((d) => (
                  <div key={d.titulo} className="flex gap-4">
                    <span
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{
                        background: "rgba(255, 107, 71, 0.08)",
                        color: "var(--aura-urgent)",
                      }}
                    >
                      {d.icon}
                    </span>
                    <div>
                      <h4 className="font-bold text-[var(--aura-text)] mb-1">
                        {d.titulo}
                      </h4>
                      <p className="text-sm text-[var(--aura-text-muted)] leading-relaxed">
                        {d.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Ganhos */}
          <Reveal delay={2}>
            <div className="premium-card p-6 sm:p-8 h-full">
              <div className="flex items-center gap-3 mb-6 pb-5 border-b border-[var(--aura-border)]">
                <span
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{
                    background: "var(--aura-yellow-tint)",
                    color: "var(--aura-yellow-deep)",
                  }}
                >
                  <IconCheck size={20} strokeWidth={2.5} />
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[var(--aura-text)]">
                  O que entra no balanço
                </h3>
              </div>

              <div className="space-y-5">
                {GANHOS.map((g) => (
                  <div key={g.titulo} className="flex gap-4">
                    <span
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{
                        background: "var(--aura-yellow-tint)",
                        color: "var(--aura-yellow-deep)",
                      }}
                    >
                      {g.icon}
                    </span>
                    <div>
                      <h4 className="font-bold text-[var(--aura-text)] mb-1">
                        {g.titulo}
                      </h4>
                      <p className="text-sm text-[var(--aura-text-muted)] leading-relaxed">
                        {g.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
