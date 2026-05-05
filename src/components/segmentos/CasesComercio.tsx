import Image from "next/image";
import Reveal from "../Reveal";
import {
  IconArrowRight,
  IconMapPin,
  IconSparkles,
  IconStore,
} from "../Icons";

// Cases comerciais — números reais executados pelo Renato Edson.
// Permissão LGPD nominada será confirmada antes do go-live público.
type Case = {
  cliente: string;
  segmento: string;
  cidade: string;
  geracao: string;
  destaque: string;
  fotoUrl: string;
  alt: string;
};

const CASES: Case[] = [
  {
    cliente: "BAKA Lanches · Brahma",
    segmento: "Lanchonete · conveniência",
    cidade: "Palmas — TO",
    geracao: "3.000 kWh/mês",
    destaque: "Refrigeração 24h zerou impacto na conta",
    fotoUrl:
      "https://images.unsplash.com/photo-1545208067-fcc1c6f49d40?w=1200&q=80&auto=format&fit=crop",
    alt: "Sistema solar comercial em telhado de lanchonete",
  },
  {
    cliente: "Restaurante Bom Sabor",
    segmento: "Restaurante",
    cidade: "Palmas — TO",
    geracao: "Sistema executado",
    destaque: "Cozinha + ar-condicionado em horário de pico",
    fotoUrl:
      "https://images.unsplash.com/photo-1566093097221-ac2335b09e70?w=1200&q=80&auto=format&fit=crop",
    alt: "Sistema fotovoltaico em restaurante",
  },
  {
    cliente: "Triedro Arquitetura e Engenharia",
    segmento: "Escritório B2B",
    cidade: "Palmas — TO",
    geracao: "Sistema executado",
    destaque: "Escritório técnico com posicionamento sustentável",
    fotoUrl:
      "https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=1200&q=80&auto=format&fit=crop",
    alt: "Escritório com sistema solar fotovoltaico",
  },
];

export default function CasesComercio() {
  return (
    <section className="relative py-20 sm:py-28 section-soft border-t border-[var(--aura-border)] overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-12">
            <span
              className="mb-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold"
              style={{
                background: "var(--aura-yellow-tint)",
                color: "var(--aura-yellow-deep)",
                border: "1px solid rgba(245, 188, 44, 0.30)",
              }}
            >
              <IconStore size={14} />
              Comércios atendidos
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[var(--aura-text)] mb-4">
              Comércios em Palmas{" "}
              <span className="text-gradient-aura">já fazendo a conta certa.</span>
            </h2>
            <p className="text-lg text-[var(--aura-text-muted)] max-w-2xl mx-auto">
              Cada projeto pensado pelo perfil de consumo do negócio. Veja
              referências de comércios já operando com solar pelo Renato.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-5 sm:gap-6">
          {CASES.map((c, i) => (
            <Reveal key={c.cliente} delay={(i + 1) as 1 | 2 | 3}>
              <article className="premium-card overflow-hidden flex flex-col h-full">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={c.fotoUrl}
                    alt={c.alt}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    unoptimized
                  />
                  <div
                    className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold backdrop-blur-md"
                    style={{
                      background: "rgba(255, 255, 255, 0.92)",
                      color: "var(--aura-yellow-deep)",
                      border: "1px solid rgba(245, 188, 44, 0.35)",
                    }}
                  >
                    <IconSparkles size={12} />
                    {c.geracao}
                  </div>
                  <div
                    className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold backdrop-blur-md"
                    style={{
                      background: "rgba(11, 18, 38, 0.78)",
                      color: "white",
                    }}
                  >
                    <IconMapPin size={12} />
                    {c.cidade}
                  </div>
                </div>

                <div className="p-5 sm:p-6 flex-1 flex flex-col">
                  <div className="text-[11px] font-bold uppercase tracking-widest text-[var(--aura-yellow-deep)] mb-1">
                    {c.segmento}
                  </div>
                  <h3 className="text-xl font-extrabold text-[var(--aura-text)] leading-tight mb-3">
                    {c.cliente}
                  </h3>
                  <p className="text-sm text-[var(--aura-text-muted)] leading-relaxed mt-auto">
                    {c.destaque}
                  </p>
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
