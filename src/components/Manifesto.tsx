import Image from "next/image";
import Reveal from "./Reveal";
import {
  IconBolt,
  IconLeaf,
  IconShield,
  IconSparkles,
} from "./Icons";

const PILARES = [
  {
    titulo: "Transparência",
    desc:
      "O orçamento que você assina é o orçamento que você paga. Sem custos escondidos, sem letra miúda no contrato.",
    icon: <IconShield size={28} />,
    cor: "var(--aura-blue)",
  },
  {
    titulo: "Excelência técnica",
    desc:
      "Equipamentos Tier 1, projeto com ART, equipe própria com EPI. Não trabalhamos com o 'mais ou menos'.",
    icon: <IconBolt size={28} />,
    cor: "var(--aura-yellow-deep)",
  },
  {
    titulo: "Compromisso de 25 anos",
    desc:
      "Solar é decisão de longo prazo. Nosso suporte vai durar tanto quanto seus painéis. WhatsApp direto, sempre.",
    icon: <IconLeaf size={28} />,
    cor: "#15803D",
  },
];

export default function Manifesto() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden bg-[var(--aura-blue-deep)] text-white">
      {/* Background — gradient + circuito + sun rays */}
      <div
        className="absolute inset-0 pointer-events-none opacity-50"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(245,188,44,0.25) 0%, transparent 60%), radial-gradient(ellipse 60% 40% at 20% 90%, rgba(27,58,135,0.45) 0%, transparent 60%)",
        }}
        aria-hidden
      />

      {/* Logo gigante de fundo (watermark) */}
      <div
        className="absolute -bottom-32 -right-32 w-[500px] h-[500px] opacity-[0.04] pointer-events-none rotate-12"
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
        viewBox="0 0 1200 800"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          d="M0,250 Q300,150 600,250 T1200,250"
          className="circuit-line"
          style={{ stroke: "rgba(245,188,44,0.6)" }}
        />
        <path
          d="M0,550 Q400,450 800,550 T1200,500"
          className="circuit-line"
          style={{ stroke: "rgba(245,188,44,0.6)", animationDelay: "1s" }}
        />
        <circle cx="200" cy="230" className="circuit-pulse" />
        <circle cx="600" cy="265" className="circuit-pulse" style={{ animationDelay: "0.6s" }} />
        <circle cx="1000" cy="525" className="circuit-pulse" style={{ animationDelay: "1.4s" }} />
      </svg>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo grande no topo */}
        <Reveal>
          <div className="flex justify-center mb-10">
            <div className="relative">
              <div
                className="absolute inset-0 rounded-full blur-2xl"
                style={{
                  background:
                    "radial-gradient(circle, rgba(245,188,44,0.45) 0%, transparent 70%)",
                }}
                aria-hidden
              />
              <Image
                src="/logo-aura.png"
                alt="Aura Energy"
                width={140}
                height={140}
                className="relative w-28 h-28 sm:w-36 sm:h-36 object-contain float-soft"
                unoptimized
              />
            </div>
          </div>
        </Reveal>

        <Reveal delay={1}>
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-white/10 text-[var(--aura-yellow)] border border-[var(--aura-yellow)]/30 backdrop-blur-sm mb-5">
              <IconSparkles size={14} />
              Manifesto Aura Energy
            </span>
          </div>
        </Reveal>

        {/* Manifesto central */}
        <Reveal delay={2}>
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-8">
              Energia que vem do céu,
              <br />
              <span className="text-[var(--aura-yellow)]">instalada com pé no chão.</span>
            </h2>

            <div className="space-y-5 text-base sm:text-lg lg:text-xl text-white/85 leading-relaxed max-w-3xl mx-auto">
              <p>
                A gente não vende placa. A gente entrega{" "}
                <strong className="text-white">independência energética</strong> pra
                família, comércio e produtor rural do Tocantins.
              </p>
              <p>
                A Aura Energy nasceu da percepção de que solar virou commodity — e
                quem perde com isso é o cliente. Empresa fecha venda, vai embora,
                deixa o cliente sozinho com 25 anos de sistema na cabeça.
              </p>
              <p className="text-[var(--aura-yellow-bright)] font-semibold">
                Aqui é diferente. Aqui você compra um relacionamento, não só um produto.
              </p>
            </div>
          </div>
        </Reveal>

        {/* 3 pilares */}
        <div className="grid md:grid-cols-3 gap-5 sm:gap-7">
          {PILARES.map((p, i) => (
            <Reveal key={p.titulo} delay={(i + 3) as 3 | 4 | 5}>
              <div
                className="rounded-3xl p-7 h-full transition-all duration-500 hover:-translate-y-1"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.10)",
                  backdropFilter: "blur(12px)",
                }}
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                  style={{
                    background:
                      "linear-gradient(135deg, var(--aura-yellow) 0%, var(--aura-orange) 100%)",
                    color: "var(--aura-blue-deep)",
                    boxShadow: "0 12px 30px -8px rgba(245,188,44,0.40)",
                  }}
                >
                  {p.icon}
                </div>

                <h3 className="text-xl font-extrabold mb-3 leading-tight">
                  {p.titulo}
                </h3>
                <p className="text-sm text-white/75 leading-relaxed">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Assinatura */}
        <Reveal delay={6}>
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
              <Image
                src="/logo-aura.png"
                alt=""
                width={32}
                height={32}
                className="w-7 h-7 object-contain"
                unoptimized
              />
              <span className="text-sm font-semibold text-white/85 tracking-wide">
                Aura Energy ·{" "}
                <span className="text-[var(--aura-yellow)]">
                  Energia Elétrica Especializada
                </span>
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
