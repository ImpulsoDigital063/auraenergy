import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BriefingForm from "@/components/BriefingForm";
import { IconSparkles } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Briefing · Aura Energy",
  description: "Briefing privado pra montar o plano de negócio Aura Energy.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
};

export default function BriefingPage() {
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
                Briefing privado
              </div>
            </div>
          </Link>

          <span className="badge-yellow text-[10px] sm:text-xs">
            <IconSparkles size={12} />
            Privado
          </span>
        </div>
      </header>

      <main className="flex-1 max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-12 w-full">
        {/* Intro */}
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--aura-text)] mb-4 leading-tight">
            Vamos montar o
            <br />
            <span className="text-gradient-aura">plano de negócio</span> da Aura.
          </h1>
          <p className="text-base sm:text-lg text-[var(--aura-text-soft)] leading-relaxed max-w-2xl mx-auto">
            Cada resposta aqui vira parte do plano que vou montar pra você.
            <br className="hidden sm:block" />
            Leva ~30 min. Pode pausar, voltar, ajustar.
          </p>
          <div
            className="mt-6 inline-flex items-center gap-3 px-4 py-2.5 rounded-2xl"
            style={{
              background: "var(--aura-bg-soft)",
              border: "1px solid var(--aura-border)",
            }}
          >
            <span className="text-xs font-semibold text-[var(--aura-text-muted)] uppercase tracking-widest">
              Quem te enviou:
            </span>
            <span className="text-sm font-bold text-[var(--aura-blue)]">
              Eduardo Barros · Impulso Digital
            </span>
          </div>
        </div>

        {/* Form */}
        <BriefingForm />
      </main>

      <footer
        className="py-6 text-center text-xs text-[var(--aura-text-muted)]"
        style={{ borderTop: "1px solid var(--aura-border)" }}
      >
        Briefing privado · Aura Energy · {new Date().getFullYear()}
      </footer>
    </div>
  );
}
