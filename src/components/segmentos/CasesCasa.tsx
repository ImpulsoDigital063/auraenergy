import Image from "next/image";
import Reveal from "../Reveal";
import { IconArrowRight, IconHome, IconMapPin, IconSparkles } from "../Icons";

// Cases residenciais reais do Renato Edson — números reais, fotos drone serão
// substituídas por imagens das instalações reais conforme o Renato fornecer.
type Case = {
  cidade: string;
  estado: string;
  kwp: string;
  geracao: string;
  antes: string;
  depois: string;
  economiaAno: string;
  fotoUrl: string;
  alt: string;
};

const CASES: Case[] = [
  {
    cidade: "Palmas",
    estado: "TO",
    kwp: "14,64 kWp",
    geracao: "1.800 kWh/mês",
    antes: "R$ 2.178",
    depois: "R$ 218",
    economiaAno: "R$ 23.520",
    fotoUrl:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&q=80&auto=format&fit=crop",
    alt: "Casa em Palmas com sistema solar no telhado",
  },
  {
    cidade: "Dianópolis",
    estado: "TO",
    kwp: "8,55 kWp",
    geracao: "1.000 kWh/mês",
    antes: "R$ 1.210",
    depois: "R$ 363",
    economiaAno: "R$ 10.164",
    fotoUrl:
      "https://images.unsplash.com/photo-1611365892117-bce8ea1ddd47?w=1200&q=80&auto=format&fit=crop",
    alt: "Casa em Dianópolis com sistema solar fotovoltaico",
  },
  {
    cidade: "Colinas do Tocantins",
    estado: "TO",
    kwp: "6,84 kWp",
    geracao: "845 kWh/mês",
    antes: "R$ 1.022",
    depois: "R$ 306",
    economiaAno: "R$ 8.592",
    fotoUrl:
      "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1200&q=80&auto=format&fit=crop",
    alt: "Casa em Colinas do Tocantins com painéis solares",
  },
];

export default function CasesCasa() {
  return (
    <section className="relative py-20 sm:py-28 section-soft border-t border-[var(--aura-border)] overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-12">
            <span className="badge-blue mb-4 inline-flex">
              <IconHome size={14} />
              Projetos residenciais entregues
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[var(--aura-text)] mb-4">
              Casas em Tocantins{" "}
              <span className="text-gradient-aura">economizando agora.</span>
            </h2>
            <p className="text-lg text-[var(--aura-text-muted)] max-w-2xl mx-auto">
              Não é promessa — é projeto executado, instalado e funcionando.
              Veja números reais de famílias atendidas pelo Renato Edson.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-5 sm:gap-6">
          {CASES.map((c, i) => (
            <Reveal key={`${c.cidade}-${c.kwp}`} delay={(i + 1) as 1 | 2 | 3}>
              <article className="premium-card overflow-hidden flex flex-col h-full">
                {/* Foto drone */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={c.fotoUrl}
                    alt={c.alt}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    unoptimized
                  />
                  {/* Badge kWp sobreposto */}
                  <div
                    className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold backdrop-blur-md"
                    style={{
                      background: "rgba(255, 255, 255, 0.92)",
                      color: "var(--aura-blue-deep)",
                      border: "1px solid rgba(245, 188, 44, 0.35)",
                    }}
                  >
                    <IconSparkles size={12} />
                    {c.kwp}
                  </div>
                  {/* Badge cidade sobreposto */}
                  <div
                    className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold backdrop-blur-md"
                    style={{
                      background: "rgba(11, 18, 38, 0.78)",
                      color: "white",
                    }}
                  >
                    <IconMapPin size={12} />
                    {c.cidade} — {c.estado}
                  </div>
                </div>

                {/* Conteúdo */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col">
                  {/* Geração */}
                  <div className="mb-4 pb-4 border-b border-[var(--aura-border)]">
                    <div className="text-[11px] font-bold uppercase tracking-widest text-[var(--aura-text-muted)] mb-1">
                      Geração mensal
                    </div>
                    <div className="text-2xl font-extrabold text-[var(--aura-blue)] counter-tabular leading-none">
                      {c.geracao}
                    </div>
                  </div>

                  {/* Antes → Depois */}
                  <div className="space-y-3 mb-5">
                    <div className="flex items-baseline justify-between gap-2">
                      <span className="text-xs text-[var(--aura-text-muted)]">
                        Conta antes
                      </span>
                      <span className="text-base font-bold text-[var(--aura-text-soft)] counter-tabular line-through opacity-60">
                        {c.antes}
                      </span>
                    </div>
                    <div className="flex items-baseline justify-between gap-2">
                      <span className="text-xs font-semibold text-[var(--aura-text)]">
                        Conta hoje
                      </span>
                      <span
                        className="text-2xl sm:text-3xl font-extrabold counter-tabular leading-none"
                        style={{ color: "#15803D" }}
                      >
                        {c.depois}
                      </span>
                    </div>
                  </div>

                  {/* Economia anual */}
                  <div
                    className="mt-auto rounded-xl p-3.5 text-center"
                    style={{
                      background:
                        "linear-gradient(135deg, var(--aura-yellow-tint) 0%, rgba(255, 246, 220, 0.5) 100%)",
                      border: "1px solid rgba(245, 188, 44, 0.30)",
                    }}
                  >
                    <div className="text-[10px] font-bold uppercase tracking-widest text-[var(--aura-yellow-deep)] mb-0.5">
                      Economia anual
                    </div>
                    <div
                      className="text-xl sm:text-2xl font-extrabold counter-tabular leading-none"
                      style={{ color: "var(--aura-blue-deep)" }}
                    >
                      {c.economiaAno}
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={4}>
          <p className="text-center text-xs text-[var(--aura-text-faded)] mt-8 italic">
            Imagens ilustrativas em transição · fotos reais das instalações em
            atualização.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
