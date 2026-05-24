import Reveal from "./Reveal";
import {
  IconBolt,
  IconCheck,
  IconHome,
  IconPanelGrid,
  IconShield,
  IconSparkles,
  IconWhatsApp,
} from "./Icons";

const RENATO_WHATSAPP = "5563992688852";

// Preços faixa cravados pelo Renato no briefing V3.1 (22/05/2026).
// Estratégia: 'a partir de' · cálculo final é feito sob medida na visita técnica.
const KITS = [
  {
    nome: "Mini",
    kwp: "3 kWp",
    contaIdeal: "até R$ 350/mês",
    paineis: "6× painéis 575W",
    marcaPainel: "Tier 1 (Astrobergy / DAH Solar · preferidas Aura)",
    inversor: "Hoymiles 3 kW",
    geracaoMes: "~440 kWh",
    areaTelhado: "~16 m²",
    precoApartirDe: "A partir de R$ 7 mil",
    parcela: "Parcela sob simulação",
    destaque: false,
    icon: <IconHome size={24} />,
    gradient: "from-[var(--aura-blue-tint)] to-white",
  },
  {
    nome: "Padrão",
    kwp: "5 kWp",
    contaIdeal: "R$ 350-700/mês",
    paineis: "9× painéis 575W",
    marcaPainel: "Tier 1 (Astrobergy / DAH Solar)",
    inversor: "Hoymiles 5 kW",
    geracaoMes: "~735 kWh",
    areaTelhado: "~24 m²",
    precoApartirDe: "A partir de R$ 15 mil",
    parcela: "Parcela sob simulação",
    destaque: true,
    badge: "Mais escolhido",
    icon: <IconPanelGrid size={24} />,
    gradient: "from-[var(--aura-yellow-tint)] to-white",
  },
  {
    nome: "Plus",
    kwp: "8 kWp",
    contaIdeal: "R$ 700-1.200/mês",
    paineis: "14× painéis 575W",
    marcaPainel: "Tier 1 (DAH Solar / Trina / JA / Jinko)",
    inversor: "Hoymiles / Solis 8 kW",
    geracaoMes: "~1.180 kWh",
    areaTelhado: "~38 m²",
    precoApartirDe: "A partir de R$ 18 mil",
    parcela: "Parcela sob simulação",
    destaque: false,
    icon: <IconBolt size={24} />,
    gradient: "from-[var(--aura-orange)]/10 to-white",
  },
  {
    nome: "Premium",
    kwp: "10 kWp",
    contaIdeal: "R$ 1.200+/mês",
    paineis: "18× painéis 575W",
    marcaPainel: "Tier 1 (DAH Solar / Canadian)",
    inversor: "Hoymiles / Huawei 10 kW",
    geracaoMes: "~1.470 kWh",
    areaTelhado: "~48 m²",
    precoApartirDe: "A partir de R$ 20,5 mil",
    parcela: "Parcela sob simulação",
    destaque: false,
    badge: "Premium+ (15 kWp) sob consulta",
    icon: <IconShield size={24} />,
    gradient: "from-purple-50 to-white",
  },
];

const INCLUSO = [
  "Painéis Tier 1 · garantia Aura 12 anos painel",
  "Inversor com 10 anos de garantia",
  "Estrutura em alumínio anodizado",
  "Cabeamento CC certificado",
  "Stringbox + DPS",
  "Projeto + ART de engenheiro",
  "Homologação completa Energisa-TO",
  "Troca do medidor por bidirecional",
  "App de monitoramento",
  "Suporte pós-instalação 1 ano",
];

export default function CatalogoKits() {
  return (
    <section
      id="kits"
      className="relative py-20 sm:py-28 section-soft overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-14">
            <span className="badge-blue mb-4 inline-flex">
              <IconPanelGrid size={14} />
              Catálogo de sistemas
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[var(--aura-text)] mb-4">
              O que você leva pra casa
              <br />
              <span className="text-gradient-aura">por kWp instalado.</span>
            </h2>
            <p className="text-lg text-[var(--aura-text-muted)] max-w-2xl mx-auto">
              Equipamento, geração estimada e investimento. Sem letra miúda.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {KITS.map((k, i) => (
            <Reveal key={k.nome} delay={((i + 1) % 4 || 4) as 1 | 2 | 3 | 4}>
              <div
                className={`relative h-full flex flex-col rounded-3xl overflow-hidden transition-all duration-500 ${
                  k.destaque
                    ? "ring-2 ring-[var(--aura-yellow)] shadow-2xl shadow-[var(--aura-yellow)]/25 scale-100 lg:scale-105 z-10"
                    : "border border-[var(--aura-border)] shadow-md hover:shadow-xl"
                }`}
                style={{
                  background: k.destaque
                    ? "linear-gradient(180deg, var(--aura-bg-card) 0%, var(--aura-yellow-tint) 100%)"
                    : "var(--aura-bg-card)",
                }}
              >
                {k.destaque && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-[var(--aura-yellow)] to-[var(--aura-orange)] text-[var(--aura-blue-deep)] text-xs font-bold uppercase tracking-wider text-center py-2">
                    ⭐ {k.badge}
                  </div>
                )}

                <div className={`p-6 sm:p-7 ${k.destaque ? "pt-12" : ""}`}>
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{
                        background: k.destaque
                          ? "linear-gradient(135deg, var(--aura-yellow) 0%, var(--aura-orange) 100%)"
                          : "var(--aura-blue-tint)",
                        color: k.destaque ? "white" : "var(--aura-blue)",
                      }}
                    >
                      {k.icon}
                    </span>
                    {!k.destaque && k.badge && (
                      <span className="badge-blue text-[10px]">{k.badge}</span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-[var(--aura-text)] mb-1">
                    {k.nome}
                  </h3>
                  <div className="text-3xl sm:text-4xl font-extrabold text-[var(--aura-blue)] counter-tabular leading-none mb-1">
                    {k.kwp}
                  </div>
                  <div className="text-xs text-[var(--aura-text-muted)] mb-5">
                    Pra conta de {k.contaIdeal}
                  </div>

                  {/* Specs */}
                  <ul className="space-y-2.5 mb-6 text-sm">
                    <Spec label="Painéis" value={k.paineis} sub={k.marcaPainel} />
                    <Spec label="Inversor" value={k.inversor} />
                    <Spec label="Geração/mês" value={k.geracaoMes} />
                    <Spec label="Área no telhado" value={k.areaTelhado} />
                  </ul>

                  {/* Preço */}
                  <div className="mb-5">
                    <div className="text-2xl sm:text-3xl font-extrabold text-[var(--aura-text)] counter-tabular leading-none">
                      {k.precoApartirDe}
                    </div>
                    <div className="text-xs text-[var(--aura-text-muted)] mt-1">
                      {k.parcela} · BV Financeira + 5 bancos
                    </div>
                  </div>

                  {/* CTA */}
                  <a
                    href={`https://wa.me/${RENATO_WHATSAPP}?text=${encodeURIComponent(
                      `Olá Renato! Quero orçamento do kit ${k.nome} (${k.kwp}). Atende em Palmas?`
                    )}`}
                    target="_blank"
                    rel="noopener"
                    className={`w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                      k.destaque
                        ? "btn-yellow"
                        : "btn-outline"
                    }`}
                  >
                    <IconWhatsApp size={16} />
                    Pedir orçamento
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* O que está incluso em todos os kits */}
        <Reveal delay={4}>
          <div className="mt-14 premium-card p-6 sm:p-8 lg:p-10">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#22c55e] to-[#10b981] text-white flex items-center justify-center">
                <IconSparkles size={20} />
              </span>
              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-[var(--aura-text-muted)]">
                  Em todos os kits
                </div>
                <div className="text-xl font-extrabold text-[var(--aura-text)]">
                  10 itens já inclusos no preço
                </div>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-3">
              {INCLUSO.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-2 text-sm text-[var(--aura-text-soft)]"
                >
                  <IconCheck
                    size={16}
                    strokeWidth={2.5}
                    className="text-[#10b981] mt-0.5 flex-shrink-0"
                  />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={5}>
          <p className="text-center text-xs text-[var(--aura-text-muted)] mt-8 max-w-3xl mx-auto leading-relaxed">
            * Faixa "a partir de" · valor final calculado sob medida na visita
            técnica conforme complexidade do telhado, distância e logística.
            Financiamento via BV Financeira (preferido) + Solfácil · Sicredi ·
            Sicoob · Santander · BB Programa Agro Energia. Sujeito a análise.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Spec({
  label,
  value,
  sub,
}: {
  label: string;
  value: string;
  sub?: string;
}) {
  return (
    <li className="flex justify-between items-start gap-3 pb-2 border-b border-[var(--aura-border)]">
      <span className="text-[11px] font-semibold uppercase tracking-wider text-[var(--aura-text-muted)] mt-0.5">
        {label}
      </span>
      <span className="text-right">
        <span className="text-sm font-semibold text-[var(--aura-text)] block leading-tight">
          {value}
        </span>
        {sub && (
          <span className="text-[10px] text-[var(--aura-text-faded)] block mt-0.5">
            {sub}
          </span>
        )}
      </span>
    </li>
  );
}
