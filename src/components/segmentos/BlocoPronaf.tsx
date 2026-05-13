import Reveal from "../Reveal";
import {
  IconCheck,
  IconLeaf,
  IconShield,
  IconTrending,
  IconWallet,
} from "../Icons";

const RURAL_GREEN = "#15803D";
const RURAL_GREEN_SOFT = "rgba(21, 128, 61, 0.08)";

// Bloco institucional Pronaf — Aura é a primeira solar em TO a comunicar
// linhas de crédito rural com clareza. Diferencial cravado no relatório
// competitivo: NENHUM dos 18 concorrentes mapeados em Palmas comunica Pronaf
// publicamente.
export default function BlocoPronaf() {
  return (
    <section className="relative py-16 sm:py-20 overflow-hidden">
      {/* Fundo verde rural sutil */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 30% 30%, rgba(21, 128, 61, 0.06) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 80% 80%, rgba(245, 188, 44, 0.06) 0%, transparent 60%)",
        }}
        aria-hidden
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div
            className="rounded-3xl p-7 sm:p-12 relative overflow-hidden"
            style={{
              background: "var(--aura-bg-card)",
              border: `2px solid ${RURAL_GREEN}30`,
              boxShadow: "var(--shadow-lg)",
            }}
          >
            {/* Selo */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold"
                style={{
                  background: RURAL_GREEN_SOFT,
                  color: RURAL_GREEN,
                  border: `1px solid ${RURAL_GREEN}30`,
                }}
              >
                <IconLeaf size={14} />
                Crédito rural subsidiado
              </span>
              <span
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold"
                style={{
                  background: "var(--aura-yellow-tint)",
                  color: "var(--aura-yellow-deep)",
                  border: "1px solid rgba(245, 188, 44, 0.30)",
                }}
              >
                <IconShield size={12} />
                BNDES · Banco do Brasil · Bancos credenciados
              </span>
            </div>

            <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
              {/* Coluna texto — 3/5 */}
              <div className="lg:col-span-3">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[var(--aura-text)] leading-tight mb-4">
                  <span style={{ color: RURAL_GREEN }}>
                    Pronaf, Moderagro e FCO Verde
                  </span>{" "}
                  — os juros mais baixos do Brasil ainda valem pra solar.
                </h2>

                <p className="text-base sm:text-lg text-[var(--aura-text-soft)] leading-relaxed mb-6">
                  O <strong style={{ color: RURAL_GREEN }}>Pronaf Mais Alimentos</strong>{" "}
                  financia sistemas solares em até{" "}
                  <strong style={{ color: RURAL_GREEN }}>12 anos a 0,5% a.m.</strong>
                  {" "}— a parcela mensal costuma ficar{" "}
                  <strong className="text-[var(--aura-blue)]">
                    menor que sua economia na conta de luz
                  </strong>
                  . Aura cuida do enquadramento (DAP/CAF), do projeto técnico e
                  da documentação que o banco pede.
                </p>

                <div className="space-y-3">
                  <Item
                    icon={<IconWallet size={18} />}
                    titulo="Pronaf Mais Alimentos"
                    desc="Até 0,5% a.m. · prazo 12 anos · até R$ 250 mil. Produtor com DAP/CAF tem acesso direto."
                  />
                  <Item
                    icon={<IconTrending size={18} />}
                    titulo="Moderagro & FCO Verde"
                    desc="Linhas pra médio e grande produtor · taxa subsidiada · prazos 8-12 anos."
                  />
                  <Item
                    icon={<IconShield size={18} />}
                    titulo="BNDES Finame Solar"
                    desc="Pra agroindústria, frigorífico, beneficiamento. Acima de R$ 250 mil."
                  />
                </div>
              </div>

              {/* Coluna número — 2/5 */}
              <div className="lg:col-span-2">
                <div
                  className="rounded-2xl p-6 sm:p-8 text-center"
                  style={{
                    background: `linear-gradient(135deg, ${RURAL_GREEN} 0%, #166534 100%)`,
                    color: "white",
                    boxShadow: `0 16px 40px -10px ${RURAL_GREEN}80`,
                  }}
                >
                  <div className="text-[11px] font-bold uppercase tracking-widest mb-2 opacity-80">
                    Pronaf Mais Alimentos
                  </div>
                  <div className="text-5xl sm:text-6xl font-extrabold counter-tabular leading-none mb-2">
                    0,5%
                  </div>
                  <div className="text-sm font-bold mb-4">ao mês · 12 anos</div>
                  <div className="text-xs opacity-90 leading-relaxed mb-4">
                    Os juros agrícolas mais baixos do Brasil
                  </div>
                  <div
                    className="rounded-xl py-3 px-4"
                    style={{ background: "rgba(255, 255, 255, 0.15)" }}
                  >
                    <div className="text-[10px] font-bold uppercase tracking-widest opacity-75 mb-0.5">
                      Caixa líquido típico
                    </div>
                    <div className="text-2xl font-extrabold">+ R$ 800-2.000/mês</div>
                    <div className="text-[10px] opacity-75 mt-1">
                      desde o 1° mês de operação
                    </div>
                  </div>
                </div>

                <p className="text-[11px] text-[var(--aura-text-muted)] mt-3 italic text-center leading-relaxed">
                  Único diferencial Aura no mercado de Palmas — nenhum dos 18
                  concorrentes mapeados comunica linhas de crédito rural
                  publicamente.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Item({
  icon,
  titulo,
  desc,
}: {
  icon: React.ReactNode;
  titulo: string;
  desc: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <span
        className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
        style={{
          background: RURAL_GREEN_SOFT,
          color: RURAL_GREEN,
        }}
      >
        {icon}
      </span>
      <div>
        <h4 className="font-bold text-[var(--aura-text)] text-[15px] mb-0.5">
          {titulo}
        </h4>
        <p className="text-sm text-[var(--aura-text-muted)] leading-relaxed">
          {desc}
        </p>
      </div>
    </div>
  );
}
