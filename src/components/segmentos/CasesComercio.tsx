import Image from "next/image";
import Reveal from "../Reveal";
import {
  IconArrowRight,
  IconMapPin,
  IconSparkles,
  IconStore,
} from "../Icons";

// Cases comerciais · perfis-tipo (sem nome de cliente sem autorização LGPD).
// Renato cravou caso REAL Mercado Palmas no briefing V3.1 · primeiro card.
// Demais sao perfis-tipo ilustrativos. Quando Renato cravar mais nomes
// com autorizacao escrita, atualizar e mudar badge.
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
    cliente: "Mercado em Palmas",
    segmento: "Mercado · supermercado",
    cidade: "Palmas — TO",
    geracao: "25 kWp · R$ 3.000 → R$ 155/mês",
    destaque: "Refrigeração 24h sem impacto na conta · economia ~95%",
    fotoUrl: "/img/equipe/sistema-entregue.png",
    alt: "Sistema solar comercial em telhado de mercado em Palmas-TO",
  },
  {
    cliente: "Lanchonete · perfil-tipo",
    segmento: "Lanchonete · conveniência",
    cidade: "Palmas — TO",
    geracao: "22 kWp · sob simulação",
    destaque: "Cozinha + freezer + ar-condicionado em horário de pico",
    fotoUrl: "/img/equipe/paineis-telhado.png",
    alt: "Sistema fotovoltaico em telhado de lanchonete",
  },
  {
    cliente: "Padaria · perfil-tipo",
    segmento: "Padaria · panificadora",
    cidade: "Paraíso do Tocantins",
    geracao: "18 kWp · sob simulação",
    destaque: "Forno elétrico + câmara fria · backup BESS opcional",
    fotoUrl: "/img/equipe/conexao-mc4.png",
    alt: "Sistema solar em telhado de padaria",
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
          <p className="text-center text-xs text-[var(--aura-text-faded)] mt-8 italic max-w-2xl mx-auto leading-relaxed">
            ⚠ Mercado em Palmas é caso real Aura (briefing Renato 22/05).
            Demais cards são perfis-tipo ilustrativos · não retratam clientes
            específicos. Imagens ilustrativas · fotos reais publicadas conforme
            autorização nominal.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
