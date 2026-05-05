import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import TallyEmbed from "@/components/TallyEmbed";
import {
  IconBolt,
  IconCheck,
  IconClock,
  IconShield,
  IconSparkles,
} from "@/components/Icons";

export const metadata: Metadata = {
  title: "Calculadora de Economia Solar · Aura Energy",
  description:
    "Descubra em 2 minutos quanto você economiza com solar. Cálculo personalizado + visita técnica gratuita Palmas-TO.",
  openGraph: {
    title: "Aura Energy · Calculadora de Economia Solar",
    description:
      "Descubra em 2 minutos quanto você economiza com solar. Cálculo personalizado + visita técnica gratuita.",
    locale: "pt_BR",
  },
};

export default function OrcamentoPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header simplificado */}
      <header
        className="sticky top-0 z-50 backdrop-blur-xl"
        style={{
          background: "rgba(255, 254, 242, 0.92)",
          borderBottom: "1px solid var(--aura-border)",
        }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/logo-aura.png"
              alt="Aura Energy"
              width={48}
              height={48}
              className="w-10 h-10 sm:w-12 sm:h-12 object-contain group-hover:scale-105 transition-transform"
              priority
            />
            <div className="leading-tight">
              <div className="font-extrabold text-base sm:text-lg text-[var(--aura-blue)]">
                Aura Energy
              </div>
              <div className="text-[9px] uppercase tracking-widest text-[var(--aura-text-muted)] font-bold hidden sm:block">
                Calculadora de Economia
              </div>
            </div>
          </Link>

          <span className="badge-yellow text-[10px] sm:text-xs">
            <IconClock size={12} />2 min
          </span>
        </div>
      </header>

      <main className="flex-1 max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-12 w-full">
        {/* Intro */}
        <div className="text-center mb-8 sm:mb-10">
          <span className="badge-blue inline-flex mb-4">
            <IconSparkles size={14} />
            Cálculo personalizado
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--aura-text)] mb-4 leading-tight">
            Descubra quanto você
            <br />
            <span className="text-gradient-aura">economiza com solar</span>.
          </h1>
          <p className="text-base sm:text-lg text-[var(--aura-text-soft)] leading-relaxed max-w-2xl mx-auto">
            8 perguntas rápidas. Em 2 minutos você sabe seu sistema ideal,
            economia em 25 anos, payback e investimento real.
          </p>
        </div>

        {/* 4 trust pills */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 mb-8">
          <Pill icon={<IconCheck size={14} />} text="Sem custo" />
          <Pill icon={<IconCheck size={14} />} text="Sem compromisso" />
          <Pill icon={<IconBolt size={14} />} text="Visita em 48h" />
          <Pill icon={<IconShield size={14} />} text="Dados seguros" />
        </div>

        {/* Tally embed */}
        <div
          className="rounded-3xl p-3 sm:p-6"
          style={{
            background: "var(--aura-bg-card)",
            border: "1px solid var(--aura-border)",
            boxShadow: "var(--shadow-md)",
          }}
        >
          <TallyEmbed src="https://tally.so/embed/1AGlpl?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" />
        </div>

        {/* Trust footer */}
        <div className="mt-10 text-center">
          <p className="text-sm text-[var(--aura-text-muted)] leading-relaxed">
            Atendimento por <strong className="text-[var(--aura-blue)]">Renato Edson</strong> — sócio Brasfrio + fundador Aura Energy
            <br />
            Palmas e região · Engenheiro responsável CREA-TO
          </p>
        </div>
      </main>

      <footer
        className="py-6 text-center text-xs text-[var(--aura-text-muted)]"
        style={{ borderTop: "1px solid var(--aura-border)" }}
      >
        <div className="max-w-3xl mx-auto px-4">
          <p>
            Cálculo baseado em tarifa Energisa-TO (R$ 0,95/kWh com tributos),
            Lei 14.300 e irradiação solar média de Palmas (5,9 kWh/m²/dia).
          </p>
          <p className="mt-2 text-[var(--aura-text-faded)]">
            Aura Energy · {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  );
}

function Pill({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <span
      className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold"
      style={{
        background: "var(--aura-bg-soft)",
        color: "var(--aura-text-soft)",
        border: "1px solid var(--aura-border)",
      }}
    >
      <span className="text-[#10b981]">{icon}</span>
      {text}
    </span>
  );
}
