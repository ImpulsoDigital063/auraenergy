import Reveal from "../Reveal";
import {
  IconArrowUpRight,
  IconChart,
  IconCheck,
  IconHome,
  IconShield,
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
    titulo: "Conta de luz nunca para de subir",
    desc: "Tarifa Energisa em Palmas passou de R$ 0,77 → R$ 0,95/kWh em 3 anos · alta de 23%. Já come 8-15% da renda da família. Em 25 anos, isso é R$ 80-150 mil queimados em fatura · sem ativo nenhum pra mostrar.",
    icon: <IconChart size={22} />,
  },
  {
    titulo: "Bandeira tarifária surpresa todo mês",
    desc: "Hidráulica esvazia, vermelha sobe, conta dispara sem aviso. Mês de R$ 600 vira R$ 850 do nada. Você não controla quanto sua casa vai pagar · só recebe o boleto pra pagar.",
    icon: <IconArrowUpRight size={22} />,
  },
  {
    titulo: "Janela do Fio B fechando rápido",
    desc: "Lei 14.300: Fio B já em 60% em 2026 · sobe pra 80% em 2027, 100% em 2029. Cada ano de espera é R$ 1.500-3.000/ano de economia perdida pra sempre. Quem entra agora trava a regra antiga.",
    icon: <IconWallet size={22} />,
  },
];

const GANHOS: Item[] = [
  {
    titulo: "Conta cai 85-95% em 30 dias",
    desc: "Em Palmas, com 5,9 horas de sol pleno (top 3 BR), casa média economiza R$ 4-7 mil/ano. Você sente a diferença na primeira fatura pós-homologação.",
    icon: <IconCheck size={22} />,
  },
  {
    titulo: "Casa valoriza 5-10%",
    desc: "Pesquisas do CRECI confirmam: imóvel com solar vende mais rápido e por mais. Investimento volta no IPTU descontado (40% por 5 anos · Palmas Solar) e na revenda.",
    icon: <IconTrending size={22} />,
  },
  {
    titulo: "Parcela menor que sua conta atual",
    desc: "BV Financeira + 6 bancos · até 120 meses · entrada zero. Você troca conta cara por parcela menor + sistema pago no fim. Sai economizando do mês 1.",
    icon: <IconShield size={22} />,
  },
];

export default function DoresGanhosCasa() {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      <div className="bg-grid-soft absolute inset-0 opacity-40" aria-hidden />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-12">
            <span className="badge-yellow mb-4 inline-flex">
              <IconHome size={14} />
              Pra sua casa
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[var(--aura-text)] mb-4">
              O que te incomoda hoje{" "}
              <span className="text-gradient-aura">vira ganho amanhã.</span>
            </h2>
            <p className="text-lg text-[var(--aura-text-muted)] max-w-2xl mx-auto">
              3 dores reais que toda casa de Palmas sente — 3 ganhos que solar
              entrega em 30-40 dias.
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
                  O que dói hoje
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
                  O que muda em 30-40 dias
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
