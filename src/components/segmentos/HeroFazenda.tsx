import Image from "next/image";
import Reveal from "../Reveal";
import HeroCarrosselCasos from "./HeroCarrosselCasos";
import { CASOS_RURAL } from "./casos-aura";
import {
  IconArrowRight,
  IconCheck,
  IconLeaf,
  IconMapPin,
  IconShield,
  IconSparkles,
  IconTractor,
  IconWhatsApp,
} from "../Icons";

const RENATO_WHATSAPP = "5563992688852";
const linkWhats = `https://wa.me/${RENATO_WHATSAPP}?text=${encodeURIComponent(
  "Olá Renato, tenho propriedade rural no Tocantins e quero analisar solar pra fazenda — pivô/granja/aviário/irrigação. Pode me passar uma proposta?"
)}`;

const RURAL_GREEN = "#15803D";
const RURAL_GREEN_SOFT = "rgba(21, 128, 61, 0.08)";

// Hero rural — paleta verde · foco pivô/granja/aviário + Pronaf/Moderagro
export default function HeroFazenda() {
  return (
    <section
      id="top"
      className="relative pt-24 sm:pt-28 pb-16 sm:pb-24 overflow-hidden"
    >
      {/* Foto cinematográfica · pivô central Tocantins · cravada via Replicate Flux Pro */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
        <Image
          src="/img/heros/hero-rural.png"
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

      <div className="solar-mesh" aria-hidden style={{ opacity: 0.6 }} />
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
      </svg>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-12 items-center">
          {/* Coluna texto */}
          <div className="lg:col-span-3 text-center lg:text-left">
            <Reveal>
              <span
                className="mb-5 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest"
                style={{
                  background: RURAL_GREEN_SOFT,
                  color: RURAL_GREEN,
                  border: `1px solid ${RURAL_GREEN}30`,
                }}
              >
                <IconTractor size={14} />
                Especialista em agro · Tocantins
              </span>
            </Reveal>

            <Reveal delay={1}>
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] mb-5"
                style={{ color: "var(--aura-text)" }}
              >
                Pivô, granja, aviário,
                <br />
                <span className="text-gradient-aura">irrigação rodando</span>
                <br />
                <span style={{ color: RURAL_GREEN }}>
                  com sol de Tocantins.
                </span>
              </h1>
            </Reveal>

            <Reveal delay={2}>
              <p className="text-lg sm:text-xl text-[var(--aura-text-soft)] mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Aura é solar com{" "}
                <strong style={{ color: RURAL_GREEN }}>
                  calibragem agro
                </strong>{" "}
                · ângulo ainda pouco explorado em Tocantins. Pivô consome até{" "}
                <strong style={{ color: RURAL_GREEN }}>
                  60% da receita do mês de pico
                </strong>
                . Granja e aviário rodam ar-condicionado 24h. Solar rural com{" "}
                <strong style={{ color: RURAL_GREEN }}>
                  Pronaf 0,5% a.m. em 12 anos
                </strong>
                {" "}— autoconsumo remoto compensa geração entre matrizes na mesma propriedade.
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
                    background: RURAL_GREEN,
                    boxShadow: `0 16px 40px -12px ${RURAL_GREEN}80`,
                  }}
                >
                  <IconWhatsApp size={18} />
                  Quero proposta pra minha fazenda
                </a>
                <a
                  href="#dores-ganhos"
                  className="btn-outline inline-flex items-center gap-2 px-6 py-4 rounded-xl text-sm"
                >
                  Ver linhas de crédito rural
                  <IconArrowRight size={16} />
                </a>
              </div>
            </Reveal>

            <Reveal delay={4}>
              <div className="flex flex-wrap gap-3 sm:gap-5 justify-center lg:justify-start">
                <Feature icon={<IconCheck size={16} />} text="Pronaf 0,5% a.m." />
                <Feature
                  icon={<IconLeaf size={16} />}
                  text="Autoconsumo remoto"
                />
                <Feature
                  icon={<IconShield size={16} />}
                  text="Bombeamento direto"
                />
              </div>
            </Reveal>
          </div>

          {/* Coluna lateral — carrossel de 3 casos rurais */}
          <Reveal delay={2}>
            <div className="lg:col-span-2">
              <HeroCarrosselCasos
                casos={CASOS_RURAL}
                cor={RURAL_GREEN}
                corSoft={RURAL_GREEN_SOFT}
                ariaLabel="Casos rurais Aura Energy"
              />
            </div>
          </Reveal>
        </div>

        {/* Stats rural-focused */}
        <Reveal delay={5}>
          <div className="mt-16 sm:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <Stat number="0,5% a.m." label="Pronaf Mais Alimentos · juros mais baixos do BR" cor={RURAL_GREEN} />
            <Stat number="60%" label="Pode ser custo da safra eliminado em pivô central" cor={RURAL_GREEN} />
            <Stat number="12 anos" label="Prazo Pronaf / Moderagro / FCO Verde" cor={RURAL_GREEN} />
            <Stat number="Remoto" label="Autoconsumo entre matrizes da fazenda" cor={RURAL_GREEN} />
          </div>
        </Reveal>

        {/* Breadcrumb */}
        <Reveal delay={6}>
          <div className="mt-10 text-center">
            <a
              href="/"
              className="inline-flex items-center gap-2 text-xs text-[var(--aura-text-muted)] transition-colors hover:text-[var(--aura-blue)]"
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
          background: RURAL_GREEN_SOFT,
          color: RURAL_GREEN,
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

function Stat({ number, label, cor }: { number: string; label: string; cor: string }) {
  return (
    <div className="text-center lg:text-left">
      <div
        className="text-3xl sm:text-4xl font-extrabold counter-tabular leading-none mb-1.5"
        style={{ color: cor }}
      >
        {number}
      </div>
      <div className="text-xs sm:text-sm text-[var(--aura-text-muted)] leading-tight">
        {label}
      </div>
    </div>
  );
}
