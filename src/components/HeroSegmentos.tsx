import Image from "next/image";
import Reveal from "./Reveal";
import {
  IconArrowRight,
  IconFactory,
  IconHome,
  IconMapPin,
  IconSparkles,
  IconStore,
  IconTractor,
  IconWhatsApp,
} from "./Icons";

const RENATO_WHATSAPP = "5563992706284";

type Segmento = {
  slug: string;
  label: string;
  hook: string;
  ticket: string;
  icon: React.ReactNode;
  accent: string;
  accentSoft: string;
  whatsMsg: string;
};

const SEGMENTOS: Segmento[] = [
  {
    slug: "/casa",
    label: "Sua casa",
    hook: "Sua conta de luz cai 85-95% e paga o sistema em 4-5 anos.",
    ticket: "R$ 25-50 mil",
    icon: <IconHome size={28} strokeWidth={1.6} />,
    accent: "var(--aura-blue)",
    accentSoft: "var(--aura-blue-tint)",
    whatsMsg:
      "Olá Renato, vim pelo site da Aura — quero solar pra minha casa em Palmas.",
  },
  {
    slug: "/comercio",
    label: "Seu comércio",
    hook: "Geladeira, ar-condicionado e refrigeração 24h sem estourar a margem.",
    ticket: "R$ 50-150 mil",
    icon: <IconStore size={28} strokeWidth={1.6} />,
    accent: "var(--aura-yellow-deep)",
    accentSoft: "var(--aura-yellow-tint)",
    whatsMsg:
      "Olá Renato, vim pelo site da Aura — quero solar pro meu comércio em Palmas.",
  },
  {
    slug: "/industria",
    label: "Sua indústria",
    hook: "Demanda contratada + consumo são 18-35% do seu custo. Solar tira isso.",
    ticket: "R$ 150-800 mil",
    icon: <IconFactory size={28} strokeWidth={1.6} />,
    accent: "var(--aura-blue-deep)",
    accentSoft: "rgba(14, 33, 82, 0.10)",
    whatsMsg:
      "Olá Renato, vim pelo site da Aura — quero analisar usina solar pra minha indústria em Tocantins.",
  },
  {
    slug: "/rural",
    label: "Rural",
    hook: "Fazenda, sítio, chácara, pivô, granja, aviário — com Pronaf e Moderagro a partir de 0,5% a.m.",
    ticket: "R$ 80-300 mil",
    icon: <IconTractor size={28} strokeWidth={1.6} />,
    accent: "#15803D",
    accentSoft: "rgba(21, 128, 61, 0.10)",
    whatsMsg:
      "Olá Renato, vim pelo site da Aura — tenho propriedade rural no Tocantins e quero solar.",
  },
];

const linkWhats = (msg: string) =>
  `https://wa.me/${RENATO_WHATSAPP}?text=${encodeURIComponent(msg)}`;

const linkWhatsGenerico = linkWhats(
  "Olá Renato, vim pelo site da Aura mas não sei em qual cenário me encaixo. Pode me ajudar?"
);

export default function HeroSegmentos() {
  return (
    <section
      id="top"
      className="relative pt-24 sm:pt-28 pb-20 sm:pb-28 overflow-hidden"
    >
      {/* Mesh gradient solar animado — herdado da identidade Aura */}
      <div className="solar-mesh" aria-hidden />
      <div className="sun-rays" aria-hidden />

      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-40"
        viewBox="0 0 1200 800"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          d="M0,200 Q300,100 600,200 T1200,200"
          className="circuit-line"
        />
        <path
          d="M0,560 Q400,460 800,560 T1200,510"
          className="circuit-line"
          style={{ animationDelay: "1s" }}
        />
        <circle cx="240" cy="170" className="circuit-pulse" />
        <circle cx="780" cy="220" className="circuit-pulse" style={{ animationDelay: "0.8s" }} />
        <circle cx="980" cy="540" className="circuit-pulse" style={{ animationDelay: "1.5s" }} />
      </svg>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header textual */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Reveal>
            <span className="badge-blue mb-5 inline-flex">
              <IconMapPin size={14} />
              A primeira solar B2B-segmentada do Tocantins
            </span>
          </Reveal>

          <Reveal delay={1}>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight leading-[1.05] text-[var(--aura-text)] mb-5">
              Que operação você quer
              <br />
              <span className="text-gradient-aura">alimentar com o sol</span>
              <br />
              <span className="text-[var(--aura-blue)]">de Tocantins?</span>
            </h1>
          </Reveal>

          <Reveal delay={2}>
            <p className="text-lg sm:text-xl text-[var(--aura-text-soft)] leading-relaxed">
              Casa, comércio, indústria, propriedade rural — cada um com{" "}
              <strong className="text-[var(--aura-blue)]">cálculo, garantia e linha de crédito</strong>{" "}
              próprios. Engenheiro responsável, ART, projeto executivo. Aura
              Energy · Palmas-TO · atende todo o estado.
            </p>
          </Reveal>
        </div>

        {/* Grid 4 cards segmentados */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-12 sm:mb-16">
          {SEGMENTOS.map((seg, i) => (
            <Reveal key={seg.slug} delay={(i + 1) as 1 | 2 | 3 | 4}>
              <a
                href={seg.slug}
                className="premium-card group flex flex-col h-full p-6 sm:p-7"
                style={{ minHeight: 280 }}
              >
                {/* Icon + ticket badge */}
                <div className="flex items-start justify-between mb-5">
                  <span
                    className="w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-[-4deg]"
                    style={{
                      background: seg.accentSoft,
                      color: seg.accent,
                    }}
                  >
                    {seg.icon}
                  </span>
                  <span
                    className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full"
                    style={{
                      background: "var(--aura-bg-soft)",
                      color: "var(--aura-text-muted)",
                      border: "1px solid var(--aura-border)",
                    }}
                  >
                    {seg.ticket}
                  </span>
                </div>

                {/* Label */}
                <h3
                  className="text-2xl sm:text-[1.6rem] font-extrabold leading-tight mb-3"
                  style={{ color: seg.accent }}
                >
                  {seg.label}
                </h3>

                {/* Hook */}
                <p className="text-[15px] text-[var(--aura-text-soft)] leading-relaxed mb-6 flex-1">
                  {seg.hook}
                </p>

                {/* CTA inline */}
                <span
                  className="inline-flex items-center gap-2 text-sm font-bold transition-all duration-300 group-hover:gap-3"
                  style={{ color: seg.accent }}
                >
                  Ver caminho
                  <IconArrowRight size={16} strokeWidth={2.25} />
                </span>
              </a>
            </Reveal>
          ))}
        </div>

        {/* Banner CTA secundário — não decidiu? */}
        <Reveal delay={5}>
          <div className="max-w-3xl mx-auto">
            <a
              href={linkWhatsGenerico}
              target="_blank"
              rel="noopener"
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
                    background: "#25D366",
                    color: "white",
                    boxShadow: "0 8px 20px -8px rgba(37, 211, 102, 0.55)",
                  }}
                >
                  <IconWhatsApp size={20} />
                </span>
                <div className="min-w-0">
                  <div className="font-bold text-[var(--aura-text)] text-sm sm:text-base leading-tight">
                    Não sabe em qual cenário você se encaixa?
                  </div>
                  <div className="text-xs sm:text-sm text-[var(--aura-text-muted)] truncate">
                    Fala direto com o Renato no WhatsApp · resposta em até 1h
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
                Falar com engenheiro →
              </span>
              <span className="sm:hidden text-[var(--aura-blue)] flex-shrink-0">
                <IconArrowRight size={20} />
              </span>
            </a>
          </div>
        </Reveal>

        {/* Stats bar */}
        <Reveal delay={6}>
          <div className="mt-16 sm:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <Stat number="5,9" label="Horas de sol pleno/dia em Palmas" sub="Top 3 do Brasil" />
            <Stat number="469 MW" label="Solar instalado em Tocantins" sub="44 mil conexões" />
            <Stat number="2026" label="Janela do Fio B abre 60% TUSD" sub="Cada ano custa caro" />
            <Stat number="40%" label="Desconto IPTU · 5 anos · Programa Palmas Solar 2026" sub="Aura cuida do Resolve Palmas" />
          </div>
        </Reveal>
      </div>

      {/* Logo Aura watermark de fundo (mantém branding) */}
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

      {/* Logo flutuante destaque no canto */}
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
          <IconSparkles size={12} className="inline mr-1" />
          Aura Energy
        </div>
      </div>
    </section>
  );
}

function Stat({ number, label, sub }: { number: string; label: string; sub?: string }) {
  return (
    <div className="text-center md:text-left">
      <div className="text-3xl sm:text-4xl font-extrabold text-[var(--aura-blue)] counter-tabular leading-none mb-1.5">
        {number}
      </div>
      <div className="text-xs sm:text-sm font-semibold text-[var(--aura-text)] leading-tight mb-0.5">
        {label}
      </div>
      {sub && (
        <div className="text-[11px] text-[var(--aura-text-muted)] leading-tight">
          {sub}
        </div>
      )}
    </div>
  );
}
