import Image from "next/image";
import Reveal from "./Reveal";
import Simulador from "./Simulador";
import { IconArrowRight, IconBolt, IconCheck, IconMapPin, IconShield, IconSparkles } from "./Icons";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative pt-24 sm:pt-28 pb-16 sm:pb-24 overflow-hidden"
    >
      {/* Mesh gradient solar animado */}
      <div className="solar-mesh" aria-hidden />
      <div className="sun-rays" aria-hidden />

      {/* Circuito SVG decorativo */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-50"
        viewBox="0 0 1200 800"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          d="M0,200 Q300,100 600,200 T1200,200"
          className="circuit-line"
        />
        <path
          d="M0,500 Q400,400 800,500 T1200,450"
          className="circuit-line"
          style={{ animationDelay: "1s" }}
        />
        <circle cx="200" cy="180" className="circuit-pulse" />
        <circle cx="700" cy="210" className="circuit-pulse" style={{ animationDelay: "0.8s" }} />
        <circle cx="900" cy="490" className="circuit-pulse" style={{ animationDelay: "1.5s" }} />
      </svg>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Coluna texto */}
          <div className="text-center lg:text-left">
            <Reveal>
              <span className="badge-blue mb-5 inline-flex">
                <IconMapPin size={14} />
                Engenheiro de Palmas · atende todo Tocantins
              </span>
            </Reveal>

            <Reveal delay={1}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] text-[var(--aura-text)] mb-5">
                Sua conta de luz pode
                <br />
                <span className="text-gradient-aura">cair 85 a 95%.</span>
                <br />
                <span className="text-[var(--aura-blue)]">Em Palmas, faz sentido agora.</span>
              </h1>
            </Reveal>

            <Reveal delay={2}>
              <p className="text-lg sm:text-xl text-[var(--aura-text-soft)] mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Tocantins é o 2° estado mais buscado em energia solar no Brasil — e com a{" "}
                <strong className="text-[var(--aura-blue)]">Lei do Fio B em 60% em 2026</strong>,{" "}
                cada ano de espera vira menos economia.{" "}
                <strong className="text-[var(--aura-blue)]">Veja sua conta agora,</strong>{" "}
                sem cadastro, sem WhatsApp insistindo.
              </p>
            </Reveal>

            <Reveal delay={3}>
              <div className="flex flex-wrap gap-3 sm:gap-5 justify-center lg:justify-start">
                <Feature icon={<IconCheck size={16} />} text="Homologação Energisa" />
                <Feature icon={<IconShield size={16} />} text="Garantia 25 anos" />
                <Feature icon={<IconSparkles size={16} />} text="Programa Palmas Solar" />
              </div>
            </Reveal>
          </div>

          {/* Coluna simulador */}
          <Reveal delay={2}>
            <div id="simulador">
              <Simulador />
            </div>
          </Reveal>
        </div>

        {/* Stats bar inferior do hero */}
        {/* Banner sutil "Calculadora completa" → leva pro Tally /orcamento */}
        <Reveal delay={3}>
          <div className="mt-10 sm:mt-12 max-w-3xl mx-auto">
            <a
              href="/orcamento"
              className="group flex items-center justify-between gap-4 p-4 sm:p-5 rounded-2xl transition-all duration-300 hover:-translate-y-0.5"
              style={{
                background:
                  "linear-gradient(135deg, var(--aura-blue-tint) 0%, var(--aura-yellow-tint) 100%)",
                border: "1px solid rgba(245, 188, 44, 0.30)",
                boxShadow: "var(--shadow-sm)",
              }}
            >
              <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                <span
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background:
                      "linear-gradient(135deg, var(--aura-yellow) 0%, var(--aura-orange) 100%)",
                    color: "var(--aura-blue-deep)",
                    boxShadow: "0 8px 20px -8px rgba(245, 188, 44, 0.45)",
                  }}
                >
                  <IconSparkles size={20} />
                </span>
                <div className="min-w-0">
                  <div className="font-bold text-[var(--aura-text)] text-sm sm:text-base leading-tight">
                    Quer cálculo mais detalhado?
                  </div>
                  <div className="text-xs sm:text-sm text-[var(--aura-text-muted)] truncate">
                    Calculadora completa em 8 perguntas · 2 minutos
                  </div>
                </div>
              </div>
              <span
                className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-bold text-[var(--aura-blue-deep)] flex-shrink-0 group-hover:translate-x-1 transition-transform"
                style={{
                  background: "rgba(255, 255, 255, 0.65)",
                  border: "1px solid rgba(11, 18, 38, 0.08)",
                }}
              >
                Calcular →
              </span>
              <span className="sm:hidden text-[var(--aura-blue)] flex-shrink-0">
                <IconArrowRight size={20} />
              </span>
            </a>
          </div>
        </Reveal>

        <Reveal delay={4}>
          <div className="mt-16 sm:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <Stat number="3,9 mi+" label="Brasileiros já têm energia solar" />
            <Stat number="6º" label="Brasil no ranking mundial de solar" />
            <Stat number="5,9" label="Horas de sol pleno/dia em Palmas" />
            <Stat number="25 anos" label="Vida útil dos painéis Tier 1" />
          </div>
        </Reveal>
      </div>

      {/* Logo Aura GIGANTE como watermark de fundo */}
      <div
        className="absolute -top-20 -left-32 w-[500px] h-[500px] opacity-[0.05] pointer-events-none rotate-[-12deg] hidden md:block"
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

      {/* Logo Aura flutuante destaque no canto */}
      <div className="absolute bottom-8 right-8 hidden lg:flex items-center gap-3 opacity-70 hover:opacity-100 transition-all group">
        <Image
          src="/logo-aura.png"
          alt=""
          width={64}
          height={64}
          className="w-16 h-16 object-contain float-soft drop-shadow-lg"
          aria-hidden
        />
        <div className="text-xs font-bold uppercase tracking-widest text-[var(--aura-blue)] group-hover:text-[var(--aura-yellow-deep)] transition-colors">
          Aura Energy
        </div>
      </div>
    </section>
  );
}

function Feature({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--aura-text-soft)]">
      <span className="w-7 h-7 rounded-full bg-[var(--aura-yellow-tint)] flex items-center justify-center text-[var(--aura-yellow-deep)]">
        {icon}
      </span>
      {text}
    </div>
  );
}

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div className="text-center lg:text-left">
      <div className="text-3xl sm:text-4xl font-extrabold text-[var(--aura-blue)] counter-tabular leading-none mb-1.5">
        {number}
      </div>
      <div className="text-xs sm:text-sm text-[var(--aura-text-muted)] leading-tight">
        {label}
      </div>
    </div>
  );
}
