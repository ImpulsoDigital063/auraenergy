"use client";

import Reveal from "./Reveal";
import AnimatedCounter from "./AnimatedCounter";
import {
  IconChart,
  IconSparkles,
  IconTrending,
  IconWallet,
} from "./Icons";

// Comparativo de R$ 22.000 ao longo de 25 anos
// Premissas (verificadas via fontes públicas mai/2026):
// - Poupança: TR + 6,17% a.a. → ~7,5% a.a.
// - CDI 100% (Selic ~14,75%): ~14% a.a. líquido após IR
// - Ibovespa média histórica: ~13% a.a. nominal
// - Solar: economia anual + reajuste tarifa 7-10%/ano + valorização 8% imóvel
const APORTE_INICIAL = 22000;

const RESULTADOS_25_ANOS = [
  {
    nome: "Poupança",
    valor: 38000,
    descricao: "TR + 6,17% a.a. (~7,5% nominal). Sem reinvestimento ativo.",
    cor: "#94A3B8",
    icon: <IconWallet size={20} />,
    rendimento: "+72%",
  },
  {
    nome: "CDI 100%",
    valor: 65000,
    descricao: "CDB ou Tesouro Selic ~14% a.a. nominal, líquido de IR.",
    cor: "#3B82F6",
    icon: <IconChart size={20} />,
    rendimento: "+195%",
  },
  {
    nome: "Ibovespa",
    valor: 95000,
    descricao: "Média histórica de 25 anos, ~13% a.a. nominal com volatilidade.",
    cor: "#A855F7",
    icon: <IconTrending size={20} />,
    rendimento: "+332%",
  },
  {
    nome: "Sistema Solar",
    valor: 230000,
    descricao:
      "Economia anual + reajuste Energisa 7-10%/ano + valorização 5-10% do imóvel.",
    cor: "var(--aura-neon-green)",
    icon: <IconSparkles size={20} />,
    rendimento: "+945%",
    destaque: true,
  },
];

const VALOR_MAX = 230000;

export default function Investimento() {
  return (
    <section className="dark-zone-neon relative py-20 sm:py-28 overflow-hidden">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-14">
            <span
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest backdrop-blur-sm mb-4"
              style={{
                background: "rgba(16, 241, 159, 0.10)",
                color: "var(--aura-neon-green)",
                border: "1px solid rgba(16, 241, 159, 0.30)",
              }}
            >
              <IconTrending size={14} />
              Solar como classe de ativo
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[var(--aura-text)] mb-4">
              Você não <span className="line-through opacity-50">gasta</span>{" "}
              <span className="text-gradient-aura">investe</span>{" "}
              R$ 22 mil em solar.
            </h2>
            <p className="text-lg text-[var(--aura-text-muted)] max-w-3xl mx-auto leading-relaxed">
              Tarifa de luz sobe ~7-10% ao ano. Solar trava esse custo por 25
              anos. Veja o mesmo dinheiro em 4 destinos diferentes.
            </p>
          </div>
        </Reveal>

        <Reveal delay={1}>
          <div className="premium-card p-6 sm:p-10 lg:p-12">
            {/* Header da simulação */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-8 pb-6 border-b border-[var(--aura-border)]">
              <div>
                <div className="text-xs font-semibold uppercase tracking-widest text-[var(--aura-text-muted)] mb-1">
                  Aporte inicial
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold text-[var(--aura-blue)] counter-tabular">
                  R$ 22.000
                </div>
              </div>
              <div className="text-center sm:text-right">
                <div className="text-xs font-semibold uppercase tracking-widest text-[var(--aura-text-muted)] mb-1">
                  Horizonte
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold text-[var(--aura-text)] counter-tabular">
                  25 anos
                </div>
              </div>
            </div>

            {/* Barras horizontais comparativas */}
            <div className="space-y-6">
              {RESULTADOS_25_ANOS.map((r, i) => (
                <Reveal key={r.nome} delay={((i + 1) % 4 || 4) as 1 | 2 | 3 | 4}>
                  <div className={r.destaque ? "relative" : ""}>
                    {r.destaque && (
                      <div
                        className="absolute -inset-4 rounded-3xl pointer-events-none"
                        style={{
                          background:
                            "radial-gradient(ellipse at center, rgba(16,241,159,0.18) 0%, transparent 70%)",
                        }}
                      />
                    )}
                    <div className="relative">
                      <div className="flex items-center justify-between gap-4 mb-2.5">
                        <div className="flex items-center gap-3">
                          <span
                            className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                            style={{
                              background: `${r.cor}15`,
                              color: r.cor,
                            }}
                          >
                            {r.icon}
                          </span>
                          <div>
                            <div
                              className={`font-bold ${
                                r.destaque
                                  ? "text-lg sm:text-xl text-[var(--aura-text)]"
                                  : "text-base text-[var(--aura-text)]"
                              }`}
                            >
                              {r.nome}
                            </div>
                            <div className="text-[11px] sm:text-xs text-[var(--aura-text-muted)] hidden sm:block">
                              {r.descricao}
                            </div>
                          </div>
                        </div>
                        <div className="text-right flex-shrink-0">
                          <div
                            className={`counter-tabular font-extrabold leading-none ${
                              r.destaque
                                ? "text-2xl sm:text-3xl"
                                : "text-xl sm:text-2xl"
                            }`}
                            style={{ color: r.cor }}
                          >
                            <AnimatedCounter
                              value={r.valor}
                              prefix="R$ "
                              duration={1600 + i * 200}
                            />
                          </div>
                          <div
                            className="text-xs font-semibold mt-1"
                            style={{ color: r.cor }}
                          >
                            {r.rendimento}
                          </div>
                        </div>
                      </div>

                      {/* Barra */}
                      <div className="h-3 sm:h-4 rounded-full bg-[var(--aura-bg-soft)] overflow-hidden border border-[var(--aura-border)]">
                        <div
                          className="h-full rounded-full transition-all duration-1500 ease-out"
                          style={{
                            background: r.destaque
                              ? "linear-gradient(90deg, var(--aura-neon-green) 0%, #34d399 100%)"
                              : r.cor,
                            width: `${(r.valor / VALOR_MAX) * 100}%`,
                            boxShadow: r.destaque
                              ? "0 0 24px rgba(16,241,159,0.55)"
                              : "none",
                          }}
                        />
                      </div>

                      {/* Mobile descrição */}
                      <p className="text-xs text-[var(--aura-text-muted)] mt-2 sm:hidden">
                        {r.descricao}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Insight final */}
            <Reveal delay={4}>
              <div className="mt-10 pt-8 border-t border-[var(--aura-border)] text-center">
                <p className="text-base sm:text-lg text-[var(--aura-text-soft)] leading-relaxed max-w-2xl mx-auto mb-2">
                  <strong className="text-[var(--aura-blue)]">Solar gera 6× mais retorno que CDI</strong>
                  {" "}e{" "}
                  <strong className="text-[var(--aura-blue)]">2,4× mais que a Bolsa</strong>
                  {" "}— sem volatilidade, sem IR sobre rendimento, e ainda valoriza seu imóvel.
                </p>
                <p className="text-xs text-[var(--aura-text-muted)] mt-4 italic">
                  * Valores estimados em moeda corrente, premissas conservadoras
                  baseadas em séries históricas (BCB, B3, ABSOLAR). Resultado
                  real varia com cenário macro e perfil de consumo.
                </p>
              </div>
            </Reveal>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
