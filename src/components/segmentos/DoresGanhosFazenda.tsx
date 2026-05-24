import Reveal from "../Reveal";
import {
  IconArrowUpRight,
  IconBolt,
  IconChart,
  IconCheck,
  IconLeaf,
  IconShield,
  IconTractor,
  IconTrending,
  IconWallet,
} from "../Icons";

const RURAL_GREEN = "#15803D";
const RURAL_GREEN_SOFT = "rgba(21, 128, 61, 0.08)";

type Item = {
  titulo: string;
  desc: string;
  icon: React.ReactNode;
};

const DORES: Item[] = [
  {
    titulo: "Pivô central consome alta parcela da receita do mês de pico",
    desc: "Pivô de irrigação consome em geral 80-180 kWh por hectare/mês na safra · TODA SAFRA, ano após ano. Em propriedade média vira uma das maiores despesas fixas. Tarifa rural também sobe acima da inflação a cada reajuste.",
    icon: <IconChart size={22} />,
  },
  {
    titulo: "Granja e aviário rodam 24h · apagão coloca lote em risco",
    desc: "Climatização, exaustão, ração automatizada, bebedouro · operação contínua. Apagões em zona rural Tocantins acontecem · cada interrupção de ventilação por tempo prolongado coloca o lote em risco. Energisa não ressarce produtividade perdida.",
    icon: <IconBolt size={22} />,
  },
  {
    titulo: "Off-grid · gerador a diesel é custo recorrente sem ativo",
    desc: "Onde a Energisa não chega, gerador a diesel tem custo por kWh várias vezes maior que solar · ainda quebra, ainda precisa abastecer, ainda polui. Mês a mês é gasto que não vira investimento · combustível some, sistema solar fica.",
    icon: <IconArrowUpRight size={22} />,
  },
];

const GANHOS: Item[] = [
  {
    titulo: "Pronaf 0,5% a.m. · Moderagro · FCO Verde até 12 anos",
    desc: "As linhas de crédito rural mais baratas do Brasil são pra solar agro. Aura cuida do enquadramento, do projeto e da documentação que o banco pede.",
    icon: <IconWallet size={22} />,
  },
  {
    titulo: "Autoconsumo remoto entre matrizes da mesma propriedade",
    desc: "Gera no telhado da granja, compensa no pivô a 4 km. Lei 14.300 permite expressamente pra produtor rural. Renato monta o esquema certo na hora da homologação.",
    icon: <IconLeaf size={22} />,
  },
  {
    titulo: "Bombeamento solar dedicado · sem inversor, sem diesel",
    desc: "Bomba submersa ou centrífuga ligada DIRETO nos painéis. Zero combustível, zero ruído, zero manutenção mensal. Independência total da Energisa em poço artesiano e captação.",
    icon: <IconShield size={22} />,
  },
];

export default function DoresGanhosFazenda() {
  return (
    <section id="dores-ganhos" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="bg-grid-soft absolute inset-0 opacity-40" aria-hidden />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-12">
            <span
              className="mb-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold"
              style={{
                background: RURAL_GREEN_SOFT,
                color: RURAL_GREEN,
                border: `1px solid ${RURAL_GREEN}30`,
              }}
            >
              <IconTractor size={14} />
              Pra produtor rural
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[var(--aura-text)] mb-4">
              O que sai da safra hoje{" "}
              <span style={{ color: RURAL_GREEN }}>volta como margem amanhã.</span>
            </h2>
            <p className="text-lg text-[var(--aura-text-muted)] max-w-2xl mx-auto">
              3 dores que toda fazenda em Tocantins reconhece — 3 ganhos que entram
              na próxima safra com Pronaf e autoconsumo remoto.
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
                  O que come a safra
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
                    background: RURAL_GREEN_SOFT,
                    color: RURAL_GREEN,
                  }}
                >
                  <IconCheck size={20} strokeWidth={2.5} />
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[var(--aura-text)]">
                  O que entra na próxima safra
                </h3>
              </div>

              <div className="space-y-5">
                {GANHOS.map((g) => (
                  <div key={g.titulo} className="flex gap-4">
                    <span
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{
                        background: RURAL_GREEN_SOFT,
                        color: RURAL_GREEN,
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
