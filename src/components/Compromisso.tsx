import Image from "next/image";
import Reveal from "./Reveal";
import {
  IconAward,
  IconCheck,
  IconClock,
  IconShield,
  IconSparkles,
} from "./Icons";

const FASES = [
  {
    fase: "Antes",
    label: "01 — Antes da assinatura",
    icon: <IconClock size={26} />,
    cor: "var(--aura-blue)",
    promessas: [
      "Visita técnica gratuita em até 48h",
      "Projeto sob medida pro seu telhado e consumo",
      "Orçamento detalhado por escrito",
      "Sem pressão pra fechar",
    ],
  },
  {
    fase: "Durante",
    label: "02 — Durante a obra",
    icon: <IconAward size={26} />,
    cor: "var(--aura-yellow-deep)",
    promessas: [
      "Equipe própria com EPI e treinamento NR-10",
      "Prazo cravado em contrato com multa por atraso",
      "Equipamentos Tier 1 entregues no endereço",
      "Acompanhamento diário pelo WhatsApp do Renato",
    ],
  },
  {
    fase: "Depois",
    label: "03 — Depois da ativação",
    icon: <IconShield size={26} />,
    cor: "#15803D",
    promessas: [
      "Garantia 12 anos painel · 10 anos inversor · 1 ano serviço",
      "App de monitoramento configurado no seu celular",
      "Visita preventiva anual sem custo adicional",
      "Suporte direto comigo enquanto durar o sistema",
    ],
  },
];

export default function Compromisso() {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none opacity-50"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 70% 50%, rgba(27,58,135,0.08) 0%, transparent 70%)",
        }}
        aria-hidden
      />

      {/* Watermark logo de fundo */}
      <div
        className="absolute -top-20 -left-20 w-[400px] h-[400px] opacity-[0.04] pointer-events-none -rotate-12"
        aria-hidden
      >
        <Image
          src="/logo-aura.png"
          alt=""
          fill
          className="object-contain"
          unoptimized
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-14">
            <span className="badge-yellow mb-4 inline-flex">
              <IconSparkles size={14} />
              Nosso compromisso com você
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[var(--aura-text)] mb-4 leading-tight">
              25 anos de relacionamento.
              <br />
              <span className="text-gradient-aura">Em 3 etapas claras.</span>
            </h2>
            <p className="text-lg text-[var(--aura-text-muted)] max-w-2xl mx-auto leading-relaxed">
              A Aura Energy não termina o trabalho na ativação do sistema. Ele
              começa ali.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-5 lg:gap-6 relative">
          {/* Linha conectora desktop */}
          <div
            className="hidden md:block absolute top-[60px] left-[12%] right-[12%] h-0.5 z-0"
            style={{
              background:
                "linear-gradient(90deg, var(--aura-blue) 0%, var(--aura-yellow) 50%, #15803D 100%)",
              opacity: 0.25,
            }}
            aria-hidden
          />

          {FASES.map((f, i) => (
            <Reveal key={f.fase} delay={(i + 1) as 1 | 2 | 3}>
              <div className="premium-card p-7 h-full relative z-10 flex flex-col">
                {/* Ícone redondo grande */}
                <div className="flex items-center justify-center mb-5">
                  <div className="relative">
                    <div
                      className="w-20 h-20 rounded-full flex items-center justify-center text-white shadow-xl"
                      style={{
                        background: `linear-gradient(135deg, ${f.cor} 0%, ${f.cor}dd 100%)`,
                        boxShadow: `0 12px 30px -8px ${f.cor}80`,
                      }}
                    >
                      {f.icon}
                    </div>
                    {/* Ring pulsante */}
                    <div
                      className="absolute inset-0 rounded-full animate-ping"
                      style={{
                        background: `${f.cor}30`,
                        animationDuration: "3s",
                        animationDelay: `${i * 0.5}s`,
                      }}
                    />
                  </div>
                </div>

                {/* Label */}
                <div className="text-center mb-5">
                  <div
                    className="text-[11px] font-bold uppercase tracking-widest mb-1"
                    style={{ color: f.cor }}
                  >
                    {f.label}
                  </div>
                  <h3 className="text-2xl font-extrabold text-[var(--aura-text)] leading-tight">
                    {f.fase}
                  </h3>
                </div>

                {/* Lista de promessas */}
                <ul className="space-y-3 flex-1">
                  {f.promessas.map((p) => (
                    <li
                      key={p}
                      className="flex items-start gap-3 text-sm text-[var(--aura-text-soft)] leading-relaxed"
                    >
                      <span
                        className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{
                          background: `${f.cor}15`,
                          color: f.cor,
                        }}
                      >
                        <IconCheck size={12} strokeWidth={3} />
                      </span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Selo de promessa */}
        <Reveal delay={4}>
          <div className="mt-14 max-w-3xl mx-auto">
            <div
              className="rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left"
              style={{
                background:
                  "linear-gradient(135deg, var(--aura-blue) 0%, var(--aura-blue-deep) 100%)",
                color: "white",
                boxShadow: "0 20px 50px -10px rgba(27,58,135,0.40)",
              }}
            >
              <div className="flex-shrink-0">
                <Image
                  src="/logo-aura.png"
                  alt="Aura Energy"
                  width={80}
                  height={80}
                  className="w-20 h-20 object-contain bg-white/10 rounded-2xl p-2 backdrop-blur-sm"
                  unoptimized
                />
              </div>
              <div className="flex-1">
                <div className="text-xs font-bold uppercase tracking-widest text-[var(--aura-yellow)] mb-1.5">
                  Compromisso assinado em contrato
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold leading-tight mb-2">
                  Se a Aura falhar com qualquer item acima, o cliente está
                  amparado por contrato.
                </h3>
                <p className="text-sm text-white/80">
                  Empresa registrada, CNPJ ativo, ART em todo projeto, garantia
                  validada pelos fabricantes Tier 1.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
