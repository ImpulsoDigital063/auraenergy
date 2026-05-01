import Image from "next/image";
import Reveal from "./Reveal";
import Simulador from "./Simulador";
import { IconBolt, IconCheck, IconMapPin, IconShield } from "./Icons";

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
                Atendendo Palmas e região do Tocantins
              </span>
            </Reveal>

            <Reveal delay={1}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05] text-[var(--aura-text)] mb-5">
                Sua casa pode gerar
                <br />
                <span className="text-gradient-aura">a própria energia</span>
                <br />
                <span className="text-[var(--aura-blue)]">e você economiza até 90%.</span>
              </h1>
            </Reveal>

            <Reveal delay={2}>
              <p className="text-lg sm:text-xl text-[var(--aura-text-soft)] mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Sistema solar fotovoltaico instalado em até{" "}
                <strong className="text-[var(--aura-blue)]">30 dias</strong>, com{" "}
                <strong className="text-[var(--aura-blue)]">payback em 4 anos</strong> em
                Palmas. Veja agora quanto você economiza.
              </p>
            </Reveal>

            <Reveal delay={3}>
              <div className="flex flex-wrap gap-3 sm:gap-5 justify-center lg:justify-start">
                <Feature icon={<IconCheck size={16} />} text="Homologação Energisa" />
                <Feature icon={<IconShield size={16} />} text="Garantia 25 anos" />
                <Feature icon={<IconBolt size={16} />} text="Equipamento Tier 1" />
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
        <Reveal delay={4}>
          <div className="mt-16 sm:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <Stat number="3,9 mi+" label="Brasileiros já têm energia solar" />
            <Stat number="6º" label="Brasil no ranking mundial de solar" />
            <Stat number="5,9" label="Horas de sol pleno/dia em Palmas" />
            <Stat number="25 anos" label="Vida útil dos painéis Tier 1" />
          </div>
        </Reveal>
      </div>

      {/* Logo Aura sutil flutuando no canto, assinatura visual */}
      <div className="absolute bottom-6 right-6 hidden lg:block opacity-40 hover:opacity-100 transition-opacity">
        <Image
          src="/logo-aura.png"
          alt=""
          width={80}
          height={80}
          className="float-soft"
          aria-hidden
        />
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
