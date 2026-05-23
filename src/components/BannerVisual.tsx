import Image from "next/image";
import Reveal from "./Reveal";
import { IconBolt, IconCheck } from "./Icons";

// Banner cinematográfico full-width entre Hero e Marquee.
// Imagem cravada via Replicate Flux Pro (2026-05-23): aérea Tocantins cerrado
// com 3 escalas de instalação solar (residencial · industrial · rural com pivô).
// Estética: golden hour cinematográfico · documental editorial.
const BANNER_URL = "/img/heros/hero-home.png";

export default function BannerVisual() {
  return (
    <section className="relative h-[55vh] sm:h-[65vh] min-h-[420px] max-h-[700px] overflow-hidden">
      {/* Imagem de fundo */}
      <Image
        src={BANNER_URL}
        alt="Solar em Tocantins · instalações residenciais, industriais e rurais ao pôr-do-sol no cerrado · Aura Energy"
        fill
        priority={false}
        sizes="100vw"
        className="object-cover"
      />

      {/* Overlay gradient pra texto ficar legível */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(11,18,38,0.85) 0%, rgba(27,58,135,0.65) 50%, rgba(11,18,38,0.55) 100%)",
        }}
        aria-hidden
      />

      {/* Padrão decorativo de circuito */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-30"
        viewBox="0 0 1200 600"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          d="M0,300 Q300,150 600,300 T1200,300"
          className="circuit-line"
          style={{ stroke: "rgba(245,188,44,0.7)" }}
        />
        <circle cx="300" cy="240" className="circuit-pulse" />
        <circle cx="900" cy="320" className="circuit-pulse" style={{ animationDelay: "1s" }} />
      </svg>

      {/* Conteúdo */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-2xl">
          <Reveal>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-[var(--aura-yellow)]/15 text-[var(--aura-yellow)] border border-[var(--aura-yellow)]/30 backdrop-blur-sm mb-5">
              <IconBolt size={14} />
              Energia gerada pela própria casa
            </span>
          </Reveal>

          <Reveal delay={1}>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05] text-white mb-5">
              Sua casa não é
              <br />
              <span className="text-[var(--aura-yellow)]">consumidora.</span>
              <br />É <span className="text-[var(--aura-yellow-bright)]">geradora.</span>
            </h2>
          </Reveal>

          <Reveal delay={2}>
            <p className="text-base sm:text-lg text-white/85 mb-6 leading-relaxed max-w-xl">
              Cada placa instalada é um pedaço de futuro pendurado no seu telhado.
              Energia limpa, conta zerada, imóvel valorizado — e independência da
              concessionária pelos próximos 25 anos.
            </p>
          </Reveal>

          <Reveal delay={3}>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              {[
                "Instalação em até 30 dias",
                "Garantia 25 anos",
                "App de monitoramento",
              ].map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-xs sm:text-sm font-semibold text-white"
                >
                  <span className="w-5 h-5 rounded-full bg-[var(--aura-yellow)] text-[var(--aura-blue-deep)] flex items-center justify-center">
                    <IconCheck size={12} strokeWidth={3} />
                  </span>
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>

      {/* Stat flutuante canto direito (desktop) */}
      <Reveal delay={4}>
        <div
          className="hidden lg:flex absolute bottom-8 right-8 flex-col items-end gap-1 px-6 py-4 rounded-2xl backdrop-blur-md"
          style={{
            background: "rgba(255,255,255,0.10)",
            border: "1px solid rgba(255,255,255,0.20)",
          }}
        >
          <div className="text-xs uppercase tracking-widest text-white/70 font-semibold">
            Em Palmas
          </div>
          <div className="text-3xl font-extrabold text-white counter-tabular leading-none">
            5,9 h/dia
          </div>
          <div className="text-xs text-white/70">
            Sol pleno · 3ª maior do Brasil
          </div>
        </div>
      </Reveal>
    </section>
  );
}
