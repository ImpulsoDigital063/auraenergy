import Reveal from "../Reveal";
import { IconAward, IconCheck, IconMapPin, IconSparkles } from "../Icons";

// Bloco institucional sobre Programa Palmas Solar (incentivo IPTU verde da Prefeitura).
// Diferencial Aura: nenhum dos 18 concorrentes mapeados em Palmas comunica isso bem.
// Reutilizável em /casa (IPTU residencial) e /comercio (IPTU comercial).

type BlocoPalmasSolarProps = {
  variante?: "residencial" | "comercial";
};

export default function BlocoPalmasSolar({
  variante = "residencial",
}: BlocoPalmasSolarProps) {
  const isComercial = variante === "comercial";

  return (
    <section className="relative py-16 sm:py-20 overflow-hidden">
      {/* Fundo cinematográfico verde-amarelo (cores da bandeira de Palmas) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 20%, rgba(245, 188, 44, 0.08) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 80% 80%, rgba(21, 128, 61, 0.06) 0%, transparent 60%)",
        }}
        aria-hidden
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div
            className="rounded-3xl p-7 sm:p-12 relative overflow-hidden"
            style={{
              background: "var(--aura-bg-card)",
              border: "2px solid rgba(245, 188, 44, 0.30)",
              boxShadow: "var(--shadow-lg)",
            }}
          >
            {/* Selo institucional */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold"
                style={{
                  background: "var(--aura-yellow-tint)",
                  color: "var(--aura-yellow-deep)",
                  border: "1px solid rgba(245, 188, 44, 0.40)",
                }}
              >
                <IconAward size={14} />
                Programa Palmas Solar
              </span>
              <span
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold"
                style={{
                  background: "var(--aura-blue-tint)",
                  color: "var(--aura-blue)",
                  border: "1px solid rgba(27, 58, 135, 0.18)",
                }}
              >
                <IconMapPin size={12} />
                Prefeitura Municipal de Palmas
              </span>
            </div>

            <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
              {/* Coluna texto — 3/5 */}
              <div className="lg:col-span-3">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[var(--aura-text)] leading-tight mb-4">
                  {isComercial ? (
                    <>
                      Seu comércio em Palmas pode{" "}
                      <span className="text-gradient-aura">
                        pagar 40% menos de IPTU por 5 anos
                      </span>{" "}
                      ao instalar solar.
                    </>
                  ) : (
                    <>
                      Sua casa em Palmas pode{" "}
                      <span className="text-gradient-aura">
                        pagar 40% menos de IPTU por 5 anos
                      </span>{" "}
                      ao instalar solar.
                    </>
                  )}
                </h2>

                <p className="text-base sm:text-lg text-[var(--aura-text-soft)] leading-relaxed mb-6">
                  O <strong>Programa Palmas Solar</strong> — instituído pela{" "}
                  <strong>Lei Complementar Municipal nº 327/2015</strong> e
                  regulamentado pelo <strong>Decreto nº 1.506/2017</strong> —
                  concede desconto progressivo no IPTU pra imóveis com sistema
                  fotovoltaico homologado. Pra adesões protocoladas em{" "}
                  <strong className="text-[var(--aura-blue)]">2026</strong>, o
                  benefício chega a <strong>40% de desconto no IPTU por 5 anos
                  consecutivos</strong> (vigência 2027-2031). Aura cuida de toda
                  a documentação técnica e do protocolo no Resolve Palmas —{" "}
                  <strong className="text-[var(--aura-blue)]">
                    zero burocracia pra você
                  </strong>
                  .
                </p>

                <div className="space-y-3">
                  <Item texto="Documentação técnica + ART + memorial descritivo inclusos" />
                  <Item texto="Protocolo no Resolve Palmas (presencial ou Portal do Cidadão) por nossa conta" />
                  <Item texto="Acompanhamento até emissão do Selo Solar pela Secretaria Municipal da Habitação" />
                  <Item texto="1.037 contribuintes já beneficiados em Palmas (Prefeitura, 02/2026)" />
                </div>
              </div>

              {/* Coluna número — 2/5 */}
              <div className="lg:col-span-2">
                <div
                  className="rounded-2xl p-6 sm:p-8 text-center"
                  style={{
                    background:
                      "linear-gradient(135deg, var(--aura-yellow) 0%, var(--aura-orange) 100%)",
                    color: "var(--aura-blue-deep)",
                    boxShadow: "var(--shadow-glow-yellow)",
                  }}
                >
                  <div className="text-[11px] font-bold uppercase tracking-widest mb-2 opacity-80">
                    Adesão protocolada em 2026
                  </div>
                  <div className="text-6xl sm:text-7xl font-extrabold counter-tabular leading-none mb-2">
                    40%
                  </div>
                  <div className="text-sm font-bold mb-4">
                    de desconto no IPTU
                    <br />
                    por 5 anos consecutivos
                  </div>
                  <div className="text-[11px] opacity-75 leading-relaxed">
                    Vigência 2027-2031 · LC 327/2015 + Dec. 1.506/2017 ·
                    desconto progressivo decrescente até 2035
                  </div>
                </div>

                <p className="text-[11px] text-[var(--aura-text-muted)] mt-3 italic text-center leading-relaxed">
                  Diferencial Aura no mercado de Palmas — nenhum dos 18
                  concorrentes mapeados comunica este benefício com clareza
                  legal.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Item({ texto }: { texto: string }) {
  return (
    <div className="flex items-start gap-3">
      <span
        className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
        style={{
          background: "var(--aura-yellow-tint)",
          color: "var(--aura-yellow-deep)",
        }}
      >
        <IconCheck size={14} strokeWidth={2.5} />
      </span>
      <span className="text-[15px] text-[var(--aura-text)] font-medium leading-snug">
        {texto}
      </span>
    </div>
  );
}
