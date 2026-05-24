import Image from "next/image";
import Reveal from "../Reveal";
import {
  IconLeaf,
  IconMapPin,
  IconSparkles,
  IconTractor,
} from "../Icons";

// Cases rurais · cases-tipo (Renato nao cravou cases reais nominais agro
// no briefing V3.1 alem do caso BESS 100 kWh Paraiso). Numeros sao
// projecoes plausiveis. Quando Renato cravar caso real, atualizar.

const RURAL_GREEN = "#15803D";

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
    segmento: "Pivo central + granja",
    cidade: "Palmas — TO",
    geracao: "80 kWp · Pronaf 0,5% a.m.",
    destaque:
      "Irrigacao do pivo + ventilacao da granja com banco de bateria · payback 3,8 anos.",
    fotoUrl: "/img/heros/hero-rural.png",
    alt: "Pivo central de irrigacao com paineis solares ao fundo",
  },
  {
    segmento: "Bombeamento + irrigacao",
    cidade: "Paraiso — TO",
    geracao: "60 kWp · Pronaf 0,5% a.m.",
    destaque:
      "Bomba puxa agua do poco com solar · banco mantém irrigação 24h sem rede.",
    fotoUrl: "/img/cases/bombeamento.png",
    alt: "Estacao de bombeamento solar para irrigacao rural",
  },
  {
    segmento: "Aviario de corte",
    cidade: "Gurupi — TO",
    geracao: "100 kWp · Pronaf 0,5% a.m.",
    destaque:
      "Ventilacao 24h + iluminacao + nebulizacao · frango nao perde por apagao.",
    fotoUrl: "/img/cases/aviario.png",
    alt: "Aviario com sistema solar fotovoltaico no telhado",
  },
];

export default function CasesRural() {
  return (
    <section className="relative py-20 sm:py-28 section-soft border-t border-[var(--aura-border)] overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-12">
            <span
              className="mb-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest"
              style={{
                background: "rgba(21, 128, 61, 0.08)",
                color: RURAL_GREEN,
                border: `1px solid ${RURAL_GREEN}30`,
              }}
            >
              <IconTractor size={14} />
              Propriedades rurais Aura
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[var(--aura-text)] mb-4">
              Como solar entra{" "}
              <span style={{ color: RURAL_GREEN }}>no orçamento da sua safra.</span>
            </h2>
            <p className="text-lg text-[var(--aura-text-muted)] max-w-2xl mx-auto">
              Cada projeto rural com financiamento Pronaf 0,5% a.m. e
              dimensionamento pra pivô, granja, bombeamento ou aviário. Abaixo,
              3 perfis-tipo de propriedade · números projetados pra ilustrar a faixa.
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
                      color: RURAL_GREEN,
                      border: `1px solid ${RURAL_GREEN}30`,
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
                  <div
                    className="text-[11px] font-bold uppercase tracking-widest mb-1 flex items-center gap-1.5"
                    style={{ color: RURAL_GREEN }}
                  >
                    <IconLeaf size={12} />
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
