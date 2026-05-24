import Image from "next/image";
import Reveal from "../Reveal";
import HeroCarrosselCasos from "./HeroCarrosselCasos";
import { CASOS_COMERCIO } from "./casos-aura";
import {
  IconArrowRight,
  IconBolt,
  IconCheck,
  IconMapPin,
  IconShield,
  IconSparkles,
  IconStore,
  IconWhatsApp,
} from "../Icons";

const RENATO_WHATSAPP = "5563992688852";
const linkWhats = `https://wa.me/${RENATO_WHATSAPP}?text=${encodeURIComponent(
  "Olá Renato, vim pelo site da Aura — quero solar pro meu comércio em Palmas. Posso te passar minha conta de luz pra orçamento?"
)}`;

// Hero comercial — paleta yellow-deep · foco refrigeração 24h + payback rápido
export default function HeroComercio() {
  return (
    <section
      id="top"
      className="relative pt-24 sm:pt-28 pb-16 sm:pb-24 overflow-hidden"
    >
      {/* Foto cinematográfica · background sutil · cravada via Replicate Flux Pro */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
        <Image
          src="/img/heros/hero-comercio.png"
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
        className="absolute inset-0 w-full h-full pointer-events-none opacity-40"
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
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-12 items-center">
          {/* Coluna texto — ocupa 3/5 */}
          <div className="lg:col-span-3 text-center lg:text-left">
            <Reveal>
              <span
                className="mb-5 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold"
                style={{
                  background: "var(--aura-yellow-tint)",
                  color: "var(--aura-yellow-deep)",
                  border: "1px solid rgba(245, 188, 44, 0.30)",
                }}
              >
                <IconStore size={14} />
                Pro seu comércio · Palmas-TO
              </span>
            </Reveal>

            <Reveal delay={1}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] text-[var(--aura-text)] mb-5">
                Sua loja, padaria, posto
                <br />
                <span className="text-gradient-aura">pagando R$ 0 de luz.</span>
                <br />
                <span style={{ color: "var(--aura-yellow-deep)" }}>
                  Em 3-4 anos o sistema se paga.
                </span>
              </h1>
            </Reveal>

            <Reveal delay={2}>
              <p className="text-lg sm:text-xl text-[var(--aura-text-soft)] mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Energia elétrica come{" "}
                <strong className="text-[var(--aura-yellow-deep)]">
                  12-25% da sua margem operacional
                </strong>
                . Solar comercial em Palmas paga mais rápido que residencial — sua
                geladeira, refrigeração e ar-condicionado rodam 24h{" "}
                <strong className="text-[var(--aura-yellow-deep)]">
                  sem estourar a fatura
                </strong>{" "}
                no mês de bandeira vermelha.
              </p>
            </Reveal>

            <Reveal delay={3}>
              <div className="flex flex-wrap gap-3 sm:gap-4 mb-8 justify-center lg:justify-start">
                <a
                  href={linkWhats}
                  target="_blank"
                  rel="noopener"
                  className="btn-yellow inline-flex items-center gap-2.5 px-6 py-4 rounded-xl text-base"
                >
                  <IconWhatsApp size={18} />
                  Quero orçamento pro meu negócio
                </a>
                <a
                  href="#dores-ganhos"
                  className="btn-outline inline-flex items-center gap-2 px-6 py-4 rounded-xl text-sm"
                >
                  Ver como funciona
                  <IconArrowRight size={16} />
                </a>
              </div>
            </Reveal>

            <Reveal delay={4}>
              <div className="flex flex-wrap gap-3 sm:gap-5 justify-center lg:justify-start">
                <Feature icon={<IconCheck size={16} />} text="Payback 3-4 anos" />
                <Feature icon={<IconShield size={16} />} text="Garantia 25 anos" />
                <Feature
                  icon={<IconBolt size={16} />}
                  text="Capex vira opex (120x)"
                />
              </div>
            </Reveal>
          </div>

          {/* Coluna lateral — carrossel de 3 casos comerciais */}
          <Reveal delay={2}>
            <div className="lg:col-span-2">
              <HeroCarrosselCasos
                casos={CASOS_COMERCIO}
                cor="var(--aura-yellow-deep)"
                corSoft="var(--aura-yellow-tint)"
                ariaLabel="Casos comerciais Aura Energy"
              />
            </div>
          </Reveal>
        </div>

        {/* Stats comércio-focused */}
        <Reveal delay={5}>
          <div className="mt-16 sm:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <Stat number="3-4 anos" label="Payback típico em comércio Palmas" />
            <Stat number="12-25%" label="Margem operacional liberada" />
            <Stat number="120x" label="Financiamento BV Financeira + 5 bancos" />
            <Stat number="0%" label="Bandeira tarifária no que você gera" />
          </div>
        </Reveal>

        {/* Breadcrumb pra HUB */}
        <Reveal delay={6}>
          <div className="mt-10 text-center">
            <a
              href="/"
              className="inline-flex items-center gap-2 text-xs text-[var(--aura-text-muted)] hover:text-[var(--aura-yellow-deep)] transition-colors"
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
    </section>
  );
}

function Feature({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--aura-text-soft)]">
      <span
        className="w-7 h-7 rounded-full flex items-center justify-center"
        style={{
          background: "var(--aura-yellow-tint)",
          color: "var(--aura-yellow-deep)",
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
        style={{ color: "var(--aura-yellow-deep)" }}
      >
        {number}
      </div>
      <div className="text-xs sm:text-sm text-[var(--aura-text-muted)] leading-tight">
        {label}
      </div>
    </div>
  );
}
