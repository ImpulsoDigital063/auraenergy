// FOOTER-CTA GIGANTE full-bleed antes do Footer real.
// Padrão extraído de Tesla, Whoop, Allurium, Huberman (4 dos 5 estudados).
// Captura usuário de alta intenção que rolou a página inteira.
// Sem isso, deixa 5-10% de conversão na mesa.

import Image from "next/image";
import Reveal from "./Reveal";
import { IconArrowRight, IconBolt, IconWhatsApp } from "./Icons";

const RENATO_WHATSAPP = "5563992688852";
const link = `https://wa.me/${RENATO_WHATSAPP}?text=${encodeURIComponent(
  "Olá Renato! Cheguei até o final do site e quero agendar minha visita técnica gratuita."
)}`;

export default function FinalCTA() {
  return (
    <section
      className="dark-zone-neon relative overflow-hidden py-24 sm:py-32 lg:py-40"
      style={{
        borderTop: "1px solid rgba(255, 255, 255, 0.06)",
      }}
    >
      {/* Watermark logo gigante de fundo */}
      <div
        className="absolute -bottom-32 -right-32 w-[600px] h-[600px] opacity-[0.04] pointer-events-none rotate-12 hidden md:block"
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

      {/* Linhas de circuito decorativas */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-30"
        viewBox="0 0 1200 600"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          d="M0,300 Q300,150 600,300 T1200,300"
          className="circuit-line"
          style={{ stroke: "rgba(245, 188, 44, 0.6)" }}
        />
        <circle cx="200" cy="270" className="circuit-pulse" />
        <circle cx="700" cy="310" className="circuit-pulse" style={{ animationDelay: "0.8s" }} />
        <circle cx="1000" cy="280" className="circuit-pulse" style={{ animationDelay: "1.5s" }} />
      </svg>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Reveal>
          <span
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest backdrop-blur-sm mb-6"
            style={{
              background: "rgba(255, 255, 255, 0.08)",
              color: "var(--aura-yellow)",
              border: "1px solid rgba(245, 188, 44, 0.30)",
            }}
          >
            <IconBolt size={14} />
            Última chamada
          </span>
        </Reveal>

        <Reveal delay={1}>
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.05] text-white mb-6">
            Sua próxima conta de luz
            <br />
            pode ser <span className="text-gradient-aura">a última cara</span>.
          </h2>
        </Reveal>

        <Reveal delay={2}>
          <p
            className="text-lg sm:text-xl mb-10 leading-relaxed max-w-3xl mx-auto"
            style={{ color: "rgba(246, 245, 232, 0.75)" }}
          >
            Visita técnica gratuita em até 48h. Sem compromisso, sem custo.
            Em 30 dias você pode estar gerando a própria energia.
          </p>
        </Reveal>

        <Reveal delay={3}>
          <a
            href={link}
            target="_blank"
            rel="noopener"
            className="btn-yellow btn-pulse inline-flex items-center justify-center gap-3 px-8 py-5 sm:px-10 sm:py-6 rounded-2xl text-lg sm:text-xl font-extrabold mb-8"
          >
            <IconWhatsApp size={26} />
            Agendar visita técnica gratuita
            <IconArrowRight size={22} />
          </a>
        </Reveal>

        <Reveal delay={4}>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm" style={{ color: "rgba(246, 245, 232, 0.55)" }}>
            <span className="inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--aura-neon-green)]" />
              Atendimento Palmas e região
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--aura-yellow)]" />
              Visita técnica em até 48h
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--aura-orange)]" />
              Sem compromisso
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
