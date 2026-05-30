import Image from "next/image";
import Reveal from "../Reveal";
import HeroCarrosselCasos from "./HeroCarrosselCasos";
import { CASOS_INDUSTRIA } from "./casos-aura";
import {
  IconArrowRight,
  IconChart,
  IconCheck,
  IconFactory,
  IconMapPin,
  IconShield,
  IconSparkles,
  IconWhatsApp,
} from "../Icons";

const RENATO_WHATSAPP = "5563992706284";
const linkWhats = `https://wa.me/${RENATO_WHATSAPP}?text=${encodeURIComponent(
  "Olá Renato, sou tomador de decisão na minha indústria em Tocantins. Quero analisar usina solar pro nosso parque fabril — pode me passar uma análise inicial?"
)}`;

// Hero industrial — paleta blue-deep · vibe executiva · foco TIR + custo invisível 18-35%
export default function HeroIndustria() {
  return (
    <section
      id="top"
      className="relative pt-24 sm:pt-28 pb-16 sm:pb-24 overflow-hidden"
      style={{ background: "linear-gradient(180deg, var(--aura-bg) 0%, var(--aura-bg-soft) 100%)" }}
    >
      {/* Foto cinematográfica · galpão industrial Tocantins · cravada via Replicate Flux Pro */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
        <Image
          src="/img/heros/hero-industria.png"
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

      <div className="solar-mesh" aria-hidden style={{ opacity: 0.5 }} />

      {/* Grid técnico de fundo */}
      <div className="bg-grid-soft absolute inset-0 opacity-30" aria-hidden />

      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-30"
        viewBox="0 0 1200 800"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path d="M0,200 Q300,100 600,200 T1200,200" className="circuit-line" />
        <path
          d="M0,560 Q400,460 800,560 T1200,510"
          className="circuit-line"
          style={{ animationDelay: "1.2s" }}
        />
        <circle cx="240" cy="170" className="circuit-pulse" />
        <circle cx="780" cy="220" className="circuit-pulse" style={{ animationDelay: "0.6s" }} />
      </svg>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-12 items-center">
          {/* Coluna texto */}
          <div className="lg:col-span-3 text-center lg:text-left">
            <Reveal>
              <span
                className="mb-5 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold"
                style={{
                  background: "rgba(14, 33, 82, 0.06)",
                  color: "var(--aura-blue-deep)",
                  border: "1px solid rgba(14, 33, 82, 0.18)",
                }}
              >
                <IconFactory size={14} />
                Pra sua indústria · Tocantins
              </span>
            </Reveal>

            <Reveal delay={1}>
              <h1
                className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight leading-[1.05] mb-5"
                style={{ color: "var(--aura-blue-deep)" }}
              >
                Sua indústria pode tirar
                <br />
                <span className="text-gradient-aura">80% do custo invisível</span>
                <br />
                <span style={{ color: "var(--aura-blue)" }}>
                  da operação.
                </span>
              </h1>
            </Reveal>

            <Reveal delay={2}>
              <p className="text-lg sm:text-xl text-[var(--aura-text-soft)] mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Demanda contratada + consumo somam{" "}
                <strong style={{ color: "var(--aura-blue-deep)" }}>
                  18-35% do custo operacional
                </strong>{" "}
                de uma planta industrial — e ninguém percebe porque o pagamento é
                automático. Solar industrial em TO entrega{" "}
                <strong style={{ color: "var(--aura-blue-deep)" }}>
                  TIR 18-25% a.a.
                </strong>
                , bate CDB e bate expansão de máquina. Engenheiro responsável,
                ART, projeto executivo, monitoramento.
              </p>
            </Reveal>

            <Reveal delay={3}>
              <div className="flex flex-wrap gap-3 sm:gap-4 mb-8 justify-center lg:justify-start">
                <a
                  href={linkWhats}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-2.5 px-6 py-4 rounded-xl text-base font-bold text-white transition-all duration-300 hover:-translate-y-0.5"
                  style={{
                    background: "var(--aura-blue-deep)",
                    boxShadow: "0 16px 40px -12px rgba(14, 33, 82, 0.45)",
                  }}
                >
                  <IconWhatsApp size={18} />
                  Quero análise pra minha planta
                </a>
                <a
                  href="#dores-ganhos"
                  className="btn-outline inline-flex items-center gap-2 px-6 py-4 rounded-xl text-sm"
                >
                  Ver linhas de crédito
                  <IconArrowRight size={16} />
                </a>
              </div>
            </Reveal>

            <Reveal delay={4}>
              <div className="flex flex-wrap gap-3 sm:gap-5 justify-center lg:justify-start">
                <Feature icon={<IconCheck size={16} />} text="TIR 18-25% a.a." />
                <Feature icon={<IconShield size={16} />} text="ART + homologação inclusos" />
                <Feature icon={<IconSparkles size={16} />} text="Entrega 90 dias" />
                <Feature
                  icon={<IconChart size={16} />}
                  text="BNDES Finame Solar"
                />
              </div>
            </Reveal>
          </div>

          {/* Coluna lateral — carrossel de 3 casos industriais */}
          <Reveal delay={2}>
            <div className="lg:col-span-2">
              <HeroCarrosselCasos
                casos={CASOS_INDUSTRIA}
                cor="var(--aura-blue-deep)"
                corSoft="rgba(14, 33, 82, 0.08)"
                ariaLabel="Casos industriais Aura Energy"
              />
            </div>
          </Reveal>
        </div>

        {/* Stats indústria-focused */}
        <Reveal delay={5}>
          <div className="mt-16 sm:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <Stat number="18-25%" label="TIR projetada · planta industrial Palmas" />
            <Stat number="4-6 anos" label="Payback típico em galpão/fábrica" />
            <Stat number="35%" label="Custo de energia eliminado da operação" />
            <Stat number="ICMS" label="Subsidiado em TO · Convênio 16/15" />
          </div>
        </Reveal>

        {/* Breadcrumb */}
        <Reveal delay={6}>
          <div className="mt-10 text-center">
            <a
              href="/"
              className="inline-flex items-center gap-2 text-xs text-[var(--aura-text-muted)] hover:text-[var(--aura-blue-deep)] transition-colors"
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
        />
      </div>
    </section>
  );
}

function Feature({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--aura-text-soft)]">
      <span
        className="w-7 h-7 rounded-full flex items-center justify-center"
        style={{
          background: "rgba(14, 33, 82, 0.08)",
          color: "var(--aura-blue-deep)",
        }}
      >
        {icon}
      </span>
      {text}
    </div>
  );
}

function CardLinha({
  label,
  valor,
  cor,
  destaque = false,
}: {
  label: string;
  valor: string;
  cor: string;
  destaque?: boolean;
}) {
  return (
    <div className="flex items-baseline justify-between gap-3">
      <span className="text-sm text-[var(--aura-text-muted)]">{label}</span>
      <span
        className={`counter-tabular leading-none ${
          destaque ? "text-2xl sm:text-3xl font-extrabold" : "text-lg font-bold"
        }`}
        style={{ color: cor }}
      >
        {valor}
      </span>
    </div>
  );
}

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div className="text-center lg:text-left">
      <div
        className="text-3xl sm:text-4xl font-extrabold counter-tabular leading-none mb-1.5"
        style={{ color: "var(--aura-blue-deep)" }}
      >
        {number}
      </div>
      <div className="text-xs sm:text-sm text-[var(--aura-text-muted)] leading-tight">
        {label}
      </div>
    </div>
  );
}
