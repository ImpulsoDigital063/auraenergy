import Reveal from "./Reveal";
import {
  IconAward,
  IconBolt,
  IconCheck,
  IconShield,
  IconWallet,
} from "./Icons";

const CREDENCIAIS = [
  {
    titulo: "Cadastrada na Energisa-TO",
    sub: "Acesso direto ao parecer da concessionária",
    icon: <IconBolt size={24} />,
  },
  {
    titulo: "Engenheiro CREA-TO",
    sub: "ART em todo projeto, responsabilidade técnica",
    icon: <IconAward size={24} />,
  },
  {
    titulo: "Equipamentos INMETRO",
    sub: "Painéis e inversores certificados",
    icon: <IconShield size={24} />,
  },
  {
    titulo: "Conformidade ANEEL",
    sub: "REN 1.000/2021 e 1.059/2023",
    icon: <IconCheck size={24} />,
  },
  {
    titulo: "Parceria Solfácil",
    sub: "Financiamento direto, taxa especial",
    icon: <IconWallet size={24} />,
  },
];

export default function Credenciais() {
  return (
    <section className="py-14 sm:py-16 bg-[var(--aura-blue-deep)] text-white relative overflow-hidden">
      {/* Glow sutil */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 50% 0%, rgba(245,188,44,0.30) 0%, transparent 60%)",
        }}
        aria-hidden
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-white/10 text-[var(--aura-yellow)] border border-[var(--aura-yellow)]/25 mb-3">
              <IconShield size={14} />
              Credenciais técnicas
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight mb-2">
              Empresa{" "}
              <span className="text-[var(--aura-yellow)]">credenciada</span>,
              projeto{" "}
              <span className="text-[var(--aura-yellow)]">homologado</span>.
            </h2>
            <p className="text-sm sm:text-base text-white/70 max-w-2xl mx-auto">
              Solar é investimento de 25 anos. A escolha do instalador importa
              tanto quanto a do equipamento.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {CREDENCIAIS.map((c, i) => (
            <Reveal
              key={c.titulo}
              delay={(((i + 1) % 5) || 5) as 1 | 2 | 3 | 4 | 5}
            >
              <div className="rounded-2xl p-4 sm:p-5 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[var(--aura-yellow)]/40 transition-all duration-300 h-full flex flex-col items-center text-center">
                <span className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--aura-yellow)] to-[var(--aura-orange)] text-[var(--aura-blue-deep)] flex items-center justify-center mb-3 shadow-lg shadow-[var(--aura-yellow)]/30">
                  {c.icon}
                </span>
                <div className="font-bold text-sm sm:text-base leading-tight mb-1.5">
                  {c.titulo}
                </div>
                <div className="text-[11px] sm:text-xs text-white/60 leading-relaxed">
                  {c.sub}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
