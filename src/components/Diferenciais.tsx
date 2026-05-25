import Reveal from "./Reveal";
import {
  IconAward,
  IconBolt,
  IconCheck,
  IconLeaf,
  IconMapPin,
  IconShield,
  IconTrending,
  IconUsers,
  IconWallet,
} from "./Icons";

const DIFERENCIAIS = [
  {
    icon: <IconUsers size={26} />,
    titulo: "Quem te atende é o engenheiro",
    desc:
      "Não vendedor terceirizado. Renato Edson na obra, no projeto, na revisão e no WhatsApp. Você sempre fala com quem assina o laudo.",
  },
  {
    icon: <IconMapPin size={26} />,
    titulo: "Visita técnica grátis até 100 km de Palmas",
    desc:
      "Vou na sua casa, comércio ou propriedade pra medir o telhado, conferir disjuntor e calcular sistema sob medida. Sem cobrar visita dentro do raio.",
  },
  {
    icon: <IconShield size={26} />,
    titulo: "Homologação Energisa sem dor de cabeça",
    desc:
      "Eu cuido do processo inteiro com a Energisa Tocantins. ART, projeto, vistoria. Você recebe a aprovação em mãos.",
  },
  {
    icon: <IconAward size={26} />,
    titulo: "Calculadora antes do orçamento",
    desc:
      "Faço o cálculo da sua economia ANTES de te visitar. Você vê o número, decide se quer continuar. Zero pressão.",
  },
  {
    icon: <IconLeaf size={26} />,
    titulo: "Bônus Palmas Solar grátis",
    desc:
      "Pra adesões em 2026 ao Programa Palmas Solar (LC 327/2015), o município concede 40% de desconto no IPTU por 5 anos. Eu monto a documentação técnica e dou entrada no Resolve Palmas — sem cobrar à parte.",
  },
  {
    icon: <IconTrending size={26} />,
    titulo: "Payback em 4 anos em Palmas",
    desc:
      "Tocantins tem irradiação solar de 5,9 kWh/m²/dia — top 3 do Brasil. Sua conta de luz cai 85-95% e o sistema se paga rápido.",
  },
  {
    icon: <IconWallet size={26} />,
    titulo: "Financiamento sem entrada · 6 bancos",
    desc:
      "BV Financeira (preferido) + Solfácil, Sicredi, Sicoob, Santander, BB Programa Agro Energia. Pra agro, Pronaf 0,5% a.m. em 12 anos. Em muitos casos a parcela pode ficar menor que a conta atual · simulação sob medida.",
  },
  {
    icon: <IconBolt size={26} />,
    titulo: "Indicou? Recebe 5%",
    desc:
      "Cliente Aura que indica outro cliente ganha 5% do valor do contrato fechado. Pago após instalação aprovada na Energisa. Sem letra miúda.",
  },
];

export default function Diferenciais() {
  return (
    <section id="diferenciais" className="relative py-20 sm:py-28 section-soft overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <span className="badge-yellow mb-4 inline-flex">
              <IconCheck size={14} />
              Por que escolher a Aura Energy
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[var(--aura-text)] mb-4">
              8 motivos pra você não fechar
              <br />
              com qualquer um.
            </h2>
            <p className="text-lg text-[var(--aura-text-muted)] max-w-2xl mx-auto">
              Solar é investimento de R$ 20-40 mil que dura 25 anos. A escolha do
              instalador importa tanto quanto a do equipamento.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {DIFERENCIAIS.map((d, i) => (
            <Reveal key={d.titulo} delay={((i % 3) + 1) as 1 | 2 | 3}>
              <div className="premium-card p-7 h-full">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--aura-yellow)] to-[var(--aura-orange)] text-[var(--aura-blue-deep)] flex items-center justify-center mb-5 shadow-md">
                  {d.icon}
                </div>
                <h3 className="text-xl font-bold text-[var(--aura-text)] mb-3 leading-tight">
                  {d.titulo}
                </h3>
                <p className="text-[15px] text-[var(--aura-text-muted)] leading-relaxed">
                  {d.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Selo "energia limpa" rodapé */}
        <Reveal delay={4}>
          <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-5 text-center sm:text-left">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#22c55e] to-[#10b981] text-white flex items-center justify-center shadow-lg">
              <IconLeaf size={32} />
            </div>
            <div>
              <div className="text-xl font-bold text-[var(--aura-text)] leading-tight">
                Energia limpa, certificada e acessível.
              </div>
              <div className="text-sm text-[var(--aura-text-muted)] mt-1">
                Cada sistema instalado evita ~3,5 toneladas de CO₂ por ano.
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
