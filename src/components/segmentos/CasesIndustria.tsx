import Image from "next/image";
import Reveal from "../Reveal";
import {
  IconChart,
  IconFactory,
  IconMapPin,
  IconSparkles,
} from "../Icons";

// Cases industriais · cases-tipo (Renato nao cravou cases reais industriais
// no briefing V3.1). Numeros sao projecoes plausiveis dentro da faixa
// Aura/Brasfrio. Quando Renato cravar caso real, atualizar e mudar badge.

type Case = {
  segmento: string;
  cidade: string;
  geracao: string;
  destaque: string;
  fotoUrl: string;
  alt: string;
};

const CASES: Case[] = [
  {
    segmento: "Galpao metalurgico",
    cidade: "Palmas — TO",
    geracao: "200 kWp · TIR 22% a.a.",
    destaque:
      "Demanda contratada otimizada · payback 4,5 anos · BNDES Finame Baixo Carbono.",
    fotoUrl: "/img/heros/hero-industria.png",
    alt: "Galpao industrial com array solar fotovoltaico no telhado",
  },
  {
    segmento: "Frigorifico",
    cidade: "Gurupi — TO",
    geracao: "350 kWp · TIR 20% a.a.",
    destaque:
      "Camara fria protegida com backup BESS · operacao 24h sem risco de produto perdido.",
    fotoUrl: "/img/equipe/usina-industrial.png",
    alt: "Frigorifico com sistema solar e estacao de monitoramento",
  },
  {
    segmento: "Beneficiamento de graos",
    cidade: "Paraiso — TO",
    geracao: "500 kWp · TIR 23% a.a.",
    destaque:
      "Maior projeto · agroindustria de soja com peak shaving e secagem solar.",
    fotoUrl: "/img/cases/beneficiamento-graos.png",
    alt: "Beneficiamento de graos com array solar e silos ao fundo",
  },
];

export default function CasesIndustria() {
  return (
    <section className="relative py-20 sm:py-28 section-soft border-t border-[var(--aura-border)] overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-12">
            <span
              className="mb-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold"
              style={{
                background: "rgba(14, 33, 82, 0.06)",
                color: "var(--aura-blue-deep)",
                border: "1px solid rgba(14, 33, 82, 0.18)",
              }}
            >
              <IconFactory size={14} />
              Plantas industriais Aura
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[var(--aura-text)] mb-4">
              Como solar entra{" "}
              <span className="text-gradient-aura">no perfil da sua planta.</span>
            </h2>
            <p className="text-lg text-[var(--aura-text-muted)] max-w-2xl mx-auto">
              Cada projeto industrial pensado pelo perfil de carga, demanda
              contratada e janela de operação. Abaixo, 3 perfis-tipo de planta
              · números projetados pra ilustrar a faixa.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-5 sm:gap-6">
          {CASES.map((c, i) => (
            <Reveal key={c.segmento} delay={(i + 1) as 1 | 2 | 3}>
              <article className="premium-card overflow-hidden flex flex-col h-full">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={c.fotoUrl}
                    alt={c.alt}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div
                    className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold backdrop-blur-md"
                    style={{
                      background: "rgba(255, 255, 255, 0.92)",
                      color: "var(--aura-blue-deep)",
                      border: "1px solid rgba(14, 33, 82, 0.20)",
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
                  <div className="text-[11px] font-bold uppercase tracking-widest text-[var(--aura-blue-deep)] mb-1 flex items-center gap-1.5">
                    <IconChart size={12} />
                    {c.segmento}
                  </div>
                  <p className="text-sm text-[var(--aura-text-muted)] leading-relaxed mt-3">
                    {c.destaque}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={4}>
          <p className="text-center text-xs text-[var(--aura-text-faded)] mt-8 italic max-w-2xl mx-auto leading-relaxed">
            ⚠ Perfis-tipo · números são projeções ilustrativas dentro da faixa
            de mercado, não retratam clientes específicos. Cálculo real é feito
            sob medida pela Aura após visita técnica.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
