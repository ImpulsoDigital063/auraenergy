import Reveal from "./Reveal";
import { IconBolt, IconClock, IconWhatsApp } from "./Icons";

const RENATO_WHATSAPP = "5563992706284";
const linkWhats = `https://wa.me/${RENATO_WHATSAPP}?text=${encodeURIComponent(
  "Olá Renato, quero garantir minha instalação ainda em 2026 antes do Fio B subir."
)}`;

const TIMELINE = [
  { ano: "2023", pct: 15, status: "passou", label: "Início da cobrança" },
  { ano: "2024", pct: 30, status: "passou", label: "" },
  { ano: "2025", pct: 45, status: "passou", label: "" },
  { ano: "2026", pct: 60, status: "agora", label: "Janela boa" },
  { ano: "2027", pct: 75, status: "futuro", label: "" },
  { ano: "2028", pct: 90, status: "futuro", label: "" },
  { ano: "2029+", pct: 100, status: "ruim", label: "Regra cheia" },
];

export default function JanelaFioB() {
  return (
    <section className="dark-zone-urgent relative py-20 sm:py-28 overflow-hidden">

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-[var(--aura-orange)]/15 text-[var(--aura-orange)] border border-[var(--aura-orange)]/25 mb-4">
              <IconClock size={14} />
              Lei 14.300 — janela do Fio B
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[var(--aura-text)] mb-4">
              Cada ano que você adia,
              <br />
              <span className="text-gradient-aura">o solar fica mais caro.</span>
            </h2>
            <p className="text-lg text-[var(--aura-text-muted)] max-w-2xl mx-auto leading-relaxed">
              O Fio B é a parcela da TUSD que você paga sobre a energia que joga
              na rede da Energisa. Cada ano sobe — e sai do seu bolso.
            </p>
          </div>
        </Reveal>

        {/* Timeline visual */}
        <Reveal delay={1}>
          <div className="premium-card p-6 sm:p-10">
            <div className="grid grid-cols-7 gap-2 sm:gap-3 mb-6 relative">
              {TIMELINE.map((t, i) => {
                const isAgora = t.status === "agora";
                const isPassou = t.status === "passou";
                const isFuturo = t.status === "futuro";
                const isRuim = t.status === "ruim";

                return (
                  <Reveal
                    key={t.ano}
                    delay={(((i + 1) % 6) || 6) as 1 | 2 | 3 | 4 | 5 | 6}
                  >
                    <div className="text-center relative">
                      {/* Marcador "VOCÊ ESTÁ AQUI" */}
                      {isAgora && (
                        <div className="absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap">
                          <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[var(--aura-yellow)] text-[var(--aura-blue-deep)] text-[10px] font-bold uppercase tracking-wider shadow-lg shadow-[var(--aura-yellow)]/40 animate-bounce">
                            ▼ Você está aqui
                          </div>
                        </div>
                      )}

                      <div className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[var(--aura-text-muted)] mb-2">
                        {t.ano}
                      </div>

                      {/* Barra vertical do % */}
                      <div className="relative h-32 sm:h-40 bg-[var(--aura-bg-soft)] rounded-xl overflow-hidden border border-[var(--aura-border)] flex items-end">
                        <div
                          className="w-full transition-all duration-1000 rounded-b-xl"
                          style={{
                            height: `${t.pct}%`,
                            background: isAgora
                              ? "linear-gradient(180deg, var(--aura-yellow) 0%, var(--aura-orange) 100%)"
                              : isPassou
                              ? "rgba(148,163,184,0.4)"
                              : isRuim
                              ? "linear-gradient(180deg, #ef4444 0%, #b91c1c 100%)"
                              : "linear-gradient(180deg, var(--aura-orange) 0%, #ef4444 100%)",
                            boxShadow: isAgora
                              ? "inset 0 0 20px rgba(255,255,255,0.2)"
                              : "none",
                          }}
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span
                            className={`font-extrabold counter-tabular ${
                              isAgora
                                ? "text-xl sm:text-3xl text-[var(--aura-blue-deep)]"
                                : isPassou
                                ? "text-base sm:text-lg text-[var(--aura-text-muted)]"
                                : "text-base sm:text-xl text-white"
                            }`}
                            style={{
                              textShadow: isFuturo || isRuim
                                ? "0 1px 2px rgba(0,0,0,0.3)"
                                : "none",
                            }}
                          >
                            {t.pct}%
                          </span>
                        </div>
                      </div>

                      {t.label && (
                        <div
                          className={`mt-2 text-[10px] sm:text-xs font-semibold ${
                            isAgora
                              ? "text-[var(--aura-yellow-deep)]"
                              : isRuim
                              ? "text-red-600"
                              : "text-[var(--aura-text-muted)]"
                          }`}
                        >
                          {t.label}
                        </div>
                      )}
                    </div>
                  </Reveal>
                );
              })}
            </div>

            {/* Resumo do impacto */}
            <Reveal delay={5}>
              <div className="grid sm:grid-cols-3 gap-4 mt-10 pt-8 border-t border-[var(--aura-border)]">
                <div className="text-center sm:text-left">
                  <div className="text-xs font-semibold uppercase tracking-widest text-[var(--aura-text-muted)] mb-1">
                    Instalando em 2026
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#10b981] counter-tabular leading-tight">
                    74-87%
                  </div>
                  <div className="text-xs text-[var(--aura-text-muted)]">
                    de economia em Palmas
                  </div>
                </div>
                <div className="text-center sm:text-left border-l-0 sm:border-l border-[var(--aura-border)] pl-0 sm:pl-6">
                  <div className="text-xs font-semibold uppercase tracking-widest text-[var(--aura-text-muted)] mb-1">
                    Adiando pra 2027
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[var(--aura-orange)] counter-tabular leading-tight">
                    -R$ 150
                  </div>
                  <div className="text-xs text-[var(--aura-text-muted)]">
                    perda média/mês na economia
                  </div>
                </div>
                <div className="text-center sm:text-left border-l-0 sm:border-l border-[var(--aura-border)] pl-0 sm:pl-6">
                  <div className="text-xs font-semibold uppercase tracking-widest text-[var(--aura-text-muted)] mb-1">
                    Adiando pra 2028
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-red-600 counter-tabular leading-tight">
                    -R$ 220
                  </div>
                  <div className="text-xs text-[var(--aura-text-muted)]">
                    perda média/mês na economia
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={6}>
              <div className="mt-10 text-center">
                <p className="text-base text-[var(--aura-text-soft)] mb-5 max-w-2xl mx-auto leading-relaxed">
                  Cada R$ 100 que você paga a mais de Fio B é R$ 100 que sai
                  todo mês da economia que você poderia estar acumulando.{" "}
                  <strong className="text-[var(--aura-blue)]">
                    2026 é a última janela boa.
                  </strong>
                </p>
                <a
                  href={linkWhats}
                  target="_blank"
                  rel="noopener"
                  className="btn-yellow btn-pulse inline-flex items-center gap-2.5 px-6 py-4 rounded-2xl text-base"
                >
                  <IconWhatsApp size={20} />
                  Garantir instalação ainda em 2026
                </a>
              </div>
            </Reveal>
          </div>
        </Reveal>

        <Reveal delay={6}>
          <p className="text-center text-xs text-[var(--aura-text-muted)] mt-6 italic max-w-3xl mx-auto leading-relaxed">
            * Quem instalou ANTES de 7/jan/2023 tem direito adquirido até 2045 e
            paga ZERO de Fio B (Lei 14.300/2022). Para sistemas novos, o
            cronograma acima é progressivo conforme REN ANEEL 1.059/2023.
            Estimativas baseadas em conta média de R$ 600/mês em Palmas-TO.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
