import Image from "next/image";
import Reveal from "../Reveal";
import SimuladorCasa from "./SimuladorCasa";
import {
  IconArrowRight,
  IconCheck,
  IconHome,
  IconMapPin,
  IconShield,
  IconSparkles,
} from "../Icons";

// Hero residencial específico — substitui Hero genérico em /casa.
// Foco: dor "conta nunca para de subir" + payback 4-5 anos + Programa Palmas Solar.
export default function HeroCasa() {
  return (
    <section
      id="top"
      className="relative pt-24 sm:pt-28 pb-16 sm:pb-24 overflow-hidden"
    >
      {/* Foto cinematográfica · casa Palmas-TO · cravada via Replicate Flux Pro */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
        <Image
          src="/img/heros/hero-casa.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-30"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,254,242,0.92) 0%, rgba(255,254,242,0.70) 50%, rgba(255,254,242,0.90) 100%)",
          }}
        />
      </div>

      <div className="solar-mesh" aria-hidden />
      <div className="sun-rays" aria-hidden />

      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-50"
        viewBox="0 0 1200 800"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path d="M0,200 Q300,100 600,200 T1200,200" className="circuit-line" />
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
                <IconHome size={14} />
                Pra sua casa · Palmas-TO
              </span>
            </Reveal>

            <Reveal delay={1}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] text-[var(--aura-text)] mb-5">
                Sua casa em Palmas pode
                <br />
                <span className="text-gradient-aura">parar de pagar luz.</span>
                <br />
                <span className="text-[var(--aura-blue)]">
                  Em 4-5 anos o sistema se paga.
                </span>
              </h1>
            </Reveal>

            <Reveal delay={2}>
              <p className="text-lg sm:text-xl text-[var(--aura-text-soft)] mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Tocantins é o 2° estado mais buscado em solar no Brasil — e a{" "}
                <strong className="text-[var(--aura-blue)]">
                  Lei do Fio B em 60% em 2026
                </strong>{" "}
                faz cada mês de espera doer mais. Tira a Energisa do seu
                orçamento fixo e ainda{" "}
                <strong className="text-[var(--aura-blue)]">
                  paga 40% menos de IPTU por 5 anos
                </strong>{" "}
                pelo Programa Palmas Solar (LC 327/2015).
              </p>
            </Reveal>

            <Reveal delay={3}>
              <div className="flex flex-wrap gap-3 sm:gap-5 justify-center lg:justify-start">
                <Feature icon={<IconCheck size={16} />} text="Conta cai 85-95%" />
                <Feature icon={<IconShield size={16} />} text="Garantia 25 anos" />
                <Feature
                  icon={<IconSparkles size={16} />}
                  text="Solfácil até 120x"
                />
              </div>
            </Reveal>
          </div>

          {/* Coluna simulador */}
          <Reveal delay={2}>
            <div id="simulador">
              <SimuladorCasa />
            </div>
          </Reveal>
        </div>

        {/* Banner: calculadora completa */}
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
                    Quer cálculo mais detalhado pra sua casa?
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

        {/* Stats residencial-focused */}
        <Reveal delay={4}>
          <div className="mt-16 sm:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <Stat number="85-95%" label="Redução típica na sua conta de luz" />
            <Stat number="4-5 anos" label="Payback médio em casa de Palmas" />
            <Stat number="25 anos" label="Vida útil dos painéis Tier 1" />
            <Stat number="40%" label="Desconto IPTU · 5 anos · Programa Palmas Solar 2026" />
          </div>
        </Reveal>

        {/* Breadcrumb sutil pra HUB */}
        <Reveal delay={5}>
          <div className="mt-10 text-center">
            <a
              href="/"
              className="inline-flex items-center gap-2 text-xs text-[var(--aura-text-muted)] hover:text-[var(--aura-blue)] transition-colors"
            >
              <IconMapPin size={12} />
              Outro segmento? Voltar pra escolha
            </a>
          </div>
        </Reveal>
      </div>

      {/* Logo Aura watermark */}
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
