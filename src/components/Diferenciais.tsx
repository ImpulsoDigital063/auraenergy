import Reveal from "./Reveal";
import {
  IconAward,
  IconBolt,
  IconCheck,
  IconLeaf,
  IconShield,
  IconTrending,
  IconUsers,
  IconWallet,
} from "./Icons";

const DIFERENCIAIS = [
  {
    icon: <IconShield size={26} />,
    titulo: "Homologação Energisa garantida",
    desc:
      "Engenheiro com ART responsável. Microgeração aprovada em até 15 dias úteis pela Energisa Tocantins.",
  },
  {
    icon: <IconAward size={26} />,
    titulo: "Equipamentos Tier 1 internacional",
    desc:
      "Painéis Trina/Canadian/Jinko com 25 anos de garantia de geração. Inversores Growatt/Sungrow com 10 anos.",
  },
  {
    icon: <IconWallet size={26} />,
    titulo: "Financiamento direto pelo banco",
    desc:
      "Solfácil 0,79% a.m. em até 120 meses. Parcela quase sempre menor que sua conta atual de luz.",
  },
  {
    icon: <IconTrending size={26} />,
    titulo: "Payback em 4 anos em Palmas",
    desc:
      "Irradiação solar de 5,9 kWh/m²/dia (uma das maiores do BR) + tarifa Energisa cara = retorno mais rápido.",
  },
  {
    icon: <IconBolt size={26} />,
    titulo: "App de monitoramento incluso",
    desc:
      "Acompanhe sua geração em tempo real pelo celular. Sabe exatamente quanto economizou hoje, no mês e no ano.",
  },
  {
    icon: <IconUsers size={26} />,
    titulo: "Atendimento de quem mora aqui",
    desc:
      "Renato Edson e equipe, baseados em Palmas. Visita técnica gratuita, suporte rápido, manutenção sem espera.",
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
              6 motivos pra você não fechar
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
