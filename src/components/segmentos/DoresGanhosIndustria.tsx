import Reveal from "../Reveal";
import {
  IconArrowUpRight,
  IconBolt,
  IconChart,
  IconCheck,
  IconFactory,
  IconLeaf,
  IconShield,
  IconTrending,
  IconWallet,
} from "../Icons";

type Item = {
  titulo: string;
  desc: string;
  icon: React.ReactNode;
};

const DORES: Item[] = [
  {
    titulo: "Demanda contratada come 18-35% do custo operacional",
    desc: "Você paga pela demanda mesmo quando não usa · 100% do mês, 100% do ano. TUSD + TE pesam no orçamento da planta · custo recorrente sem nenhum ativo agregado ao balanço.",
    icon: <IconChart size={22} />,
  },
  {
    titulo: "Multa por ultrapassagem + reativos sem compensação",
    desc: "Bandeira vermelha + multa por ultrapassagem + correção de fator de potência. Parcelas que somam custo adicional TODO MÊS · costuma passar despercebido porque é débito automático. O tamanho aparece quando se audita o ano inteiro.",
    icon: <IconArrowUpRight size={22} />,
  },
  {
    titulo: "Expansão da operação = nova fatura travando caixa",
    desc: "Cada novo galpão, cada nova linha de produção exige nova demanda contratada. Você expande operação · Energisa cobra mais antes de você faturar. Capex de máquina + opex de energia · dois custos batendo ao mesmo tempo.",
    icon: <IconBolt size={22} />,
  },
];

const GANHOS: Item[] = [
  {
    titulo: "TIR 18-25% a.a. · bate CDB e expansão de máquina",
    desc: "Solar industrial em TO entrega TIR superior a CDB e a maioria dos projetos de expansão. Caixa que estava queimando virando ativo de 25 anos.",
    icon: <IconTrending size={22} />,
  },
  {
    titulo: "BNDES Finame Baixo Carbono · ICMS subsidiado TO",
    desc: "Linha BNDES Baixo Carbono (Finame Solar verde) com prazo 10-12 anos e taxa subsidiada. Convênio 16/15 do Tocantins reduz ICMS sobre o sistema. Aura cuida do enquadramento.",
    icon: <IconWallet size={22} />,
  },
  {
    titulo: "Estabilidade frente a reajustes Energisa",
    desc: "Tarifa industrial sobe acima da inflação ano após ano · bandeira vermelha, reajuste anual, novos encargos. Solar trava o custo de 80% do consumo em valor fixo por 25 anos. Você foge da curva.",
    icon: <IconArrowUpRight size={22} />,
  },
  {
    titulo: "Crédito de carbono e ESG no balanço",
    desc: "Cada sistema instalado evita centenas de toneladas de CO₂ por ano · ativo elegível pra relatório ESG, supply chain audit, certificação verde. Cliente B2B começou a exigir e quem tem fica na frente.",
    icon: <IconLeaf size={22} />,
  },
  {
    titulo: "ART, projeto executivo, monitoramento incluso",
    desc: "Engenheiro responsável (CREA), projeto executivo dimensionado, monitoramento 24/7 via portal, contrato com SLA de geração. Não é caixa preta — você acompanha cada kWh.",
    icon: <IconShield size={22} />,
  },
];

export default function DoresGanhosIndustria() {
  return (
    <section id="dores-ganhos" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="bg-grid-soft absolute inset-0 opacity-40" aria-hidden />

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
              Análise pra decisor industrial
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[var(--aura-text)] mb-4">
              O custo invisível da operação{" "}
              <span style={{ color: "var(--aura-blue-deep)" }}>
                vira ativo do seu balanço.
              </span>
            </h2>
            <p className="text-lg text-[var(--aura-text-muted)] max-w-2xl mx-auto">
              3 dores que sua planta absorve hoje sem perceber — 5 ganhos que
              entram no DRE depois da homologação.
            </p>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-10">
          {/* Dores */}
          <Reveal delay={1}>
            <div className="premium-card p-6 sm:p-8 h-full">
              <div className="flex items-center gap-3 mb-6 pb-5 border-b border-[var(--aura-border)]">
                <span
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{
                    background: "rgba(255, 107, 71, 0.10)",
                    color: "var(--aura-urgent)",
                  }}
                >
                  <IconArrowUpRight size={20} />
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[var(--aura-text)]">
                  Custo invisível hoje
                </h3>
              </div>

              <div className="space-y-5">
                {DORES.map((d) => (
                  <div key={d.titulo} className="flex gap-4">
                    <span
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{
                        background: "rgba(255, 107, 71, 0.08)",
                        color: "var(--aura-urgent)",
                      }}
                    >
                      {d.icon}
                    </span>
                    <div>
                      <h4 className="font-bold text-[var(--aura-text)] mb-1">
                        {d.titulo}
                      </h4>
                      <p className="text-sm text-[var(--aura-text-muted)] leading-relaxed">
                        {d.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Ganhos */}
          <Reveal delay={2}>
            <div className="premium-card p-6 sm:p-8 h-full">
              <div className="flex items-center gap-3 mb-6 pb-5 border-b border-[var(--aura-border)]">
                <span
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{
                    background: "rgba(14, 33, 82, 0.08)",
                    color: "var(--aura-blue-deep)",
                  }}
                >
                  <IconCheck size={20} strokeWidth={2.5} />
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[var(--aura-text)]">
                  Ativo de 25 anos
                </h3>
              </div>

              <div className="space-y-5">
                {GANHOS.map((g) => (
                  <div key={g.titulo} className="flex gap-4">
                    <span
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{
                        background: "rgba(14, 33, 82, 0.08)",
                        color: "var(--aura-blue-deep)",
                      }}
                    >
                      {g.icon}
                    </span>
                    <div>
                      <h4 className="font-bold text-[var(--aura-text)] mb-1">
                        {g.titulo}
                      </h4>
                      <p className="text-sm text-[var(--aura-text-muted)] leading-relaxed">
                        {g.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
