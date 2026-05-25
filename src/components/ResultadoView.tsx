"use client";

import { useEffect, useMemo } from "react";
import AnimatedCounter from "./AnimatedCounter";
import Reveal from "./Reveal";
import {
  IconArrowRight,
  IconBolt,
  IconChart,
  IconCheck,
  IconClock,
  IconHome,
  IconLeaf,
  IconPanelGrid,
  IconShield,
  IconSparkles,
  IconTrending,
  IconWallet,
  IconWhatsApp,
} from "./Icons";

const RENATO_WHATSAPP = "5563992688852";

// Constantes Energisa-TO + Palmas (mesma fórmula do Simulador.tsx)
const TARIFA = 0.95;
const HSP = 5.9;
const PRODUCAO_KWP_MES = HSP * 30 * 0.78;
const CUSTO_KWP = 4400;
const ECONOMIA_PCT = 0.92;
const POTENCIA_PAINEL_W = 575;
const VIDA_UTIL_ANOS = 25;

// Comparativo investimento 25 anos (mesmo da seção Investimento da LP)
const COMPARATIVO = [
  { nome: "Poupança", taxa: 0.075, cor: "#94A3B8", icon: <IconWallet size={18} /> },
  { nome: "CDI 100%", taxa: 0.14, cor: "#3B82F6", icon: <IconChart size={18} /> },
  { nome: "Ibovespa", taxa: 0.13, cor: "#A855F7", icon: <IconTrending size={18} /> },
];

type Props = {
  conta: number;
  nome: string;
  tipo: string;
  cidade: string;
  objetivo: string;
  pagamento: string;
  urgencia: string;
  whatsapp: string;
};

export default function ResultadoView({
  conta,
  nome,
  tipo,
  cidade,
  objetivo,
  pagamento,
  urgencia,
  whatsapp,
}: Props) {
  const calc = useMemo(() => calcularProjeto(conta), [conta]);

  // Dispara webhook pro email do Eduardo quando a página abre (lead chegou)
  useEffect(() => {
    if (!conta || !nome) return;
    const payload = {
      data: {
        fields: [
          { key: "tipo", label: "Tipo de imóvel", value: tipo, type: "text" },
          { key: "conta", label: "Conta de luz", value: conta, type: "number" },
          { key: "cidade", label: "Cidade", value: cidade, type: "text" },
          { key: "objetivo", label: "Objetivo", value: objetivo, type: "text" },
          { key: "pagamento", label: "Pagamento", value: pagamento, type: "text" },
          { key: "urgencia", label: "Urgência", value: urgencia, type: "text" },
          { key: "nome", label: "Nome", value: nome, type: "text" },
          {
            key: "whatsapp",
            label: "WhatsApp",
            value: whatsapp,
            type: "phone",
          },
        ],
        formId: "tally-redirect",
        submissionId: `${Date.now()}`,
        createdAt: new Date().toISOString(),
      },
    };
    fetch("/api/lead/qualified", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(payload),
    }).catch(() => {
      // silenciar — usuário não precisa saber
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Sem dados (acesso direto sem Tally) — mostra fallback
  if (!conta || conta < 50) {
    return <SemDadosFallback />;
  }

  const linkWhats = montarLinkWhats(nome, conta, calc);

  return (
    <div className="space-y-12">
      {/* HERO PERSONALIZADO */}
      <Reveal>
        <div className="text-center">
          <span className="badge-yellow inline-flex mb-5">
            <IconSparkles size={14} />
            Cálculo personalizado pra você
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-[var(--aura-text)] mb-5">
            {nome ? `${primeiroNome(nome)},` : "Olá,"}
            <br />
            seu projeto <span className="text-gradient-aura">Aura tá saindo</span>.
          </h1>
          <p className="text-base sm:text-lg text-[var(--aura-text-soft)] max-w-2xl mx-auto leading-relaxed">
            Calculei seu sistema com base nos dados que você passou.
            Veja o resumo e fale com o Renato pra agendar visita técnica gratuita.
          </p>
        </div>
      </Reveal>

      {/* 4 CARDS DE RESULTADO PRINCIPAIS */}
      <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
        <Reveal delay={1}>
          <ResultCard
            icon={<IconChart size={22} />}
            label="Você economiza por mês"
            valueNode={
              <AnimatedCounter
                value={calc.economiaMes}
                prefix="R$ "
                suffix="/mês"
              />
            }
            subtext={`Sobre sua conta de ${formatBRL(conta)}`}
            tone="green"
          />
        </Reveal>

        <Reveal delay={2}>
          <ResultCard
            icon={<IconSparkles size={22} />}
            label="Em 25 anos de geração"
            valueNode={
              <AnimatedCounter value={calc.economia25} prefix="R$ " />
            }
            subtext="Economia acumulada · vida útil do sistema"
            tone="dark-gold"
            highlight
          />
        </Reveal>

        <Reveal delay={3}>
          <ResultCard
            icon={<IconPanelGrid size={22} />}
            label="Sistema ideal"
            valueNode={
              <>
                <AnimatedCounter
                  value={calc.kwp}
                  decimals={2}
                  format="raw"
                  suffix=" kWp"
                />
                <span className="block text-xs sm:text-sm font-medium text-[var(--aura-text-muted)] mt-1">
                  {calc.paineis} painéis · ~{calc.areaTelhado} m² de telhado
                </span>
              </>
            }
            tone="blue"
          />
        </Reveal>

        <Reveal delay={4}>
          <ResultCard
            icon={<IconClock size={22} />}
            label="Investimento se paga em"
            valueNode={
              <AnimatedCounter
                value={calc.payback}
                decimals={1}
                format="raw"
                suffix=" anos"
              />
            }
            subtext={`Investimento estimado: ${formatBRL(calc.investimento)}`}
            tone="neutral"
          />
        </Reveal>
      </div>

      {/* CTA WHATSAPP GIGANTE */}
      <Reveal delay={5}>
        <div
          className="rounded-3xl p-6 sm:p-10 text-center"
          style={{
            background:
              "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(245,188,44,0.15) 0%, transparent 70%), white",
            border: "2px solid var(--aura-yellow)",
            boxShadow: "0 30px 60px -20px rgba(245,188,44,0.30)",
          }}
        >
          <p className="text-xs font-bold uppercase tracking-widest text-[var(--aura-yellow-deep)] mb-2">
            Próximo passo
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--aura-text)] mb-4 leading-tight">
            Agora o Renato te chama no WhatsApp
            <br className="hidden sm:block" />
            pra agendar a visita técnica gratuita.
          </h2>
          <p className="text-sm sm:text-base text-[var(--aura-text-soft)] mb-7 max-w-2xl mx-auto">
            Em até 2h. Sem compromisso. Visita em até 48h pra medir telhado,
            confirmar economia e te entregar projeto exato.
          </p>
          <a
            href={linkWhats}
            target="_blank"
            rel="noopener"
            className="btn-yellow btn-pulse inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-4 sm:py-5 rounded-2xl text-base sm:text-lg font-bold"
          >
            <IconWhatsApp size={22} />
            Falar com Renato agora
            <IconArrowRight size={20} />
          </a>
          <p className="text-xs text-[var(--aura-text-muted)] mt-5">
            Ou ligue: <strong className="text-[var(--aura-blue)]">(63) 9 9268-8852</strong>
          </p>
        </div>
      </Reveal>

      {/* DETALHES DO PROJETO */}
      <Reveal delay={6}>
        <section className="space-y-4">
          <div className="text-center">
            <span className="badge-blue inline-flex">
              <IconBolt size={14} />
              Detalhes do seu projeto
            </span>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <DetailCard
              icon={<IconShield size={20} />}
              label="Equipamentos Tier 1"
              value="Astrobergy · DAH · Trina · Jinko"
              sub="Garantia 12 anos painel · vida útil 25 anos"
            />
            <DetailCard
              icon={<IconBolt size={20} />}
              label="Inversor"
              value="Hoymiles · Solis · Huawei"
              sub="10 anos garantia · App monitoramento"
            />
            <DetailCard
              icon={<IconLeaf size={20} />}
              label="CO₂ evitado"
              value={`${(calc.economiaMes * 12 * 0.0817).toFixed(1)} t/ano`}
              sub="Equivalente a plantar ~40 árvores/ano"
            />
          </div>
        </section>
      </Reveal>

      {/* COMPARATIVO INVESTIMENTO (versão compacta) */}
      <Reveal delay={6}>
        <section
          className="dark-zone-neon rounded-3xl overflow-hidden p-6 sm:p-10"
          style={{
            position: "relative",
          }}
        >
          <div className="text-center mb-6">
            <span
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest backdrop-blur-sm mb-3"
              style={{
                background: "rgba(16, 241, 159, 0.10)",
                color: "var(--aura-neon-green)",
                border: "1px solid rgba(16, 241, 159, 0.30)",
              }}
            >
              <IconTrending size={14} />
              Solar como classe de ativo
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 leading-tight">
              Você não <span className="line-through opacity-50">gasta</span>{" "}
              <span className="text-gradient-aura">investe</span>{" "}
              {formatBRL(calc.investimento)} em solar.
            </h2>
            <p className="text-sm text-white/70">
              Mesma quantia em 25 anos em outros destinos:
            </p>
          </div>

          <div className="space-y-3 max-w-2xl mx-auto">
            {COMPARATIVO.map((c) => {
              const valor = simularInvestimento(calc.investimento, c.taxa, 25);
              return (
                <ComparativoBarra
                  key={c.nome}
                  nome={c.nome}
                  valor={valor}
                  cor={c.cor}
                  icon={c.icon}
                  max={calc.economia25}
                  destaque={false}
                />
              );
            })}
            <ComparativoBarra
              nome="Sistema Solar"
              valor={calc.economia25}
              cor="var(--aura-neon-green)"
              icon={<IconSparkles size={18} />}
              max={calc.economia25}
              destaque
            />
          </div>

          <p className="text-center text-xs text-white/60 mt-6 italic">
            Valores estimados em moeda corrente. Solar = economia anual + valorização imóvel 5-10%.
          </p>
        </section>
      </Reveal>

      {/* CONTEXTO DO LEAD (que ele preencheu) */}
      <Reveal delay={6}>
        <section className="premium-card p-5 sm:p-7">
          <h3 className="text-sm font-bold uppercase tracking-widest text-[var(--aura-text-muted)] mb-4">
            Recebemos do seu cadastro
          </h3>
          <div className="grid sm:grid-cols-2 gap-3">
            <SmallInfo label="Nome" value={nome} />
            <SmallInfo label="WhatsApp" value={formatWhats(whatsapp)} />
            <SmallInfo label="Tipo de imóvel" value={tipo} icon={<IconHome size={14} />} />
            <SmallInfo label="Cidade" value={cidade} />
            <SmallInfo label="Conta de luz mensal" value={formatBRL(conta)} />
            <SmallInfo label="Objetivo" value={objetivo} />
            <SmallInfo label="Pagamento" value={pagamento} />
            <SmallInfo label="Urgência" value={urgencia} />
          </div>
        </section>
      </Reveal>

      {/* CTA FINAL — repetição do WhatsApp porque alta intenção rolou aqui */}
      <Reveal delay={6}>
        <div className="text-center pt-4">
          <a
            href={linkWhats}
            target="_blank"
            rel="noopener"
            className="btn-blue inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl text-base"
          >
            <IconWhatsApp size={18} />
            Falar com Renato no WhatsApp
            <IconArrowRight size={16} />
          </a>
        </div>
      </Reveal>
    </div>
  );
}

// =====================================================================
// HELPERS
// =====================================================================

function calcularProjeto(conta: number) {
  if (conta <= 0) {
    return {
      consumo: 0,
      kwp: 0,
      paineis: 0,
      areaTelhado: 0,
      investimento: 0,
      economiaMes: 0,
      economia25: 0,
      payback: 0,
    };
  }
  const consumo = conta / TARIFA;
  const kwp = (consumo / PRODUCAO_KWP_MES) * 1.08;
  const paineis = Math.ceil((kwp * 1000) / POTENCIA_PAINEL_W);
  const areaTelhado = Math.ceil(paineis * 2.7); // ~2.7m² por painel
  const investimento = Math.round(kwp * CUSTO_KWP);
  const economiaMes = Math.round(conta * ECONOMIA_PCT);
  const economia25 = Math.round(economiaMes * 12 * VIDA_UTIL_ANOS);
  const payback = Number((investimento / (economiaMes * 12)).toFixed(1));

  return {
    consumo: Math.round(consumo),
    kwp: Number(kwp.toFixed(2)),
    paineis,
    areaTelhado,
    investimento,
    economiaMes,
    economia25,
    payback,
  };
}

function simularInvestimento(principal: number, taxaAnual: number, anos: number) {
  return Math.round(principal * Math.pow(1 + taxaAnual, anos));
}

function formatBRL(value: number) {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
}

function formatWhats(w: string) {
  const cleaned = w.replace(/\D/g, "");
  if (!cleaned) return "—";
  if (cleaned.length === 11) {
    return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 7)}-${cleaned.slice(7)}`;
  }
  return cleaned;
}

function primeiroNome(s: string) {
  return (s || "").split(" ")[0] || "";
}

function montarLinkWhats(
  nome: string,
  conta: number,
  calc: ReturnType<typeof calcularProjeto>
): string {
  const texto =
    `Oi Renato! Acabei de fazer a calculadora da Aura.\n\n` +
    `*${nome || "Cliente"}*\n` +
    `Conta atual: ${formatBRL(conta)}/mês\n` +
    `Sistema sugerido: ${calc.kwp} kWp (${calc.paineis} painéis)\n` +
    `Investimento estimado: ${formatBRL(calc.investimento)}\n` +
    `Economia/mês: ${formatBRL(calc.economiaMes)}\n` +
    `Em 25 anos: ${formatBRL(calc.economia25)}\n\n` +
    `Quero agendar a visita técnica gratuita.`;
  return `https://wa.me/${RENATO_WHATSAPP}?text=${encodeURIComponent(texto)}`;
}

// =====================================================================
// COMPONENTES INTERNOS
// =====================================================================

function ResultCard({
  icon,
  label,
  valueNode,
  subtext,
  tone,
  highlight = false,
}: {
  icon: React.ReactNode;
  label: string;
  valueNode: React.ReactNode;
  subtext?: string;
  tone: "green" | "blue" | "dark-gold" | "neutral";
  highlight?: boolean;
}) {
  const styles =
    tone === "green"
      ? {
          background:
            "linear-gradient(135deg, rgba(16, 241, 159, 0.12) 0%, rgba(16, 185, 129, 0.08) 100%)",
          color: "#059669",
          border: "1px solid rgba(16, 241, 159, 0.25)",
        }
      : tone === "blue"
      ? {
          background: "var(--aura-blue-tint)",
          color: "var(--aura-blue)",
          border: "1px solid rgba(27, 58, 135, 0.20)",
        }
      : tone === "dark-gold"
      ? {
          background:
            "linear-gradient(135deg, var(--aura-blue-deep) 0%, var(--aura-blue-deep) 100%)",
          color: "white",
          border: "2px solid var(--aura-yellow)",
        }
      : {
          background: "var(--aura-bg-soft)",
          color: "var(--aura-text)",
          border: "1px solid var(--aura-border)",
        };

  return (
    <div
      className={`rounded-3xl p-6 sm:p-7 ${
        highlight
          ? "shadow-2xl shadow-[var(--aura-yellow)]/25 scale-100 sm:scale-[1.02]"
          : ""
      }`}
      style={styles}
    >
      <div className="flex items-center gap-2 mb-3 opacity-90">
        {icon}
        <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest">
          {label}
        </span>
      </div>
      <div
        className={`font-extrabold leading-tight counter-tabular ${
          highlight
            ? "text-3xl sm:text-5xl text-[var(--aura-yellow-bright)]"
            : "text-2xl sm:text-4xl"
        }`}
      >
        {valueNode}
      </div>
      {subtext && (
        <p
          className="text-xs sm:text-sm mt-2 opacity-75"
          style={{
            color: tone === "dark-gold" ? "rgba(255,255,255,0.75)" : undefined,
          }}
        >
          {subtext}
        </p>
      )}
    </div>
  );
}

function DetailCard({
  icon,
  label,
  value,
  sub,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  sub: string;
}) {
  return (
    <div className="premium-card p-5 sm:p-6 h-full">
      <div className="flex items-center gap-2 mb-3 text-[var(--aura-yellow-deep)]">
        {icon}
        <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[var(--aura-text-muted)]">
          {label}
        </span>
      </div>
      <div className="text-base sm:text-lg font-bold text-[var(--aura-text)] mb-1.5 leading-tight">
        {value}
      </div>
      <p className="text-xs text-[var(--aura-text-muted)] leading-relaxed">{sub}</p>
    </div>
  );
}

function ComparativoBarra({
  nome,
  valor,
  cor,
  icon,
  max,
  destaque,
}: {
  nome: string;
  valor: number;
  cor: string;
  icon: React.ReactNode;
  max: number;
  destaque: boolean;
}) {
  const pct = Math.min(100, Math.max(5, (valor / max) * 100));
  return (
    <div>
      <div className="flex items-center justify-between gap-3 mb-1.5">
        <div className="flex items-center gap-2">
          <span
            className="w-7 h-7 rounded-lg flex items-center justify-center"
            style={{ background: `${cor}25`, color: cor }}
          >
            {icon}
          </span>
          <span className={`font-bold ${destaque ? "text-base text-white" : "text-sm text-white/85"}`}>
            {nome}
          </span>
        </div>
        <span
          className={`counter-tabular font-extrabold ${
            destaque ? "text-xl sm:text-2xl" : "text-base sm:text-lg"
          }`}
          style={{ color: cor }}
        >
          {formatBRL(valor)}
        </span>
      </div>
      <div className="h-2 sm:h-2.5 rounded-full bg-white/5 overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-1500 ease-out"
          style={{
            background: destaque
              ? `linear-gradient(90deg, ${cor} 0%, #34d399 100%)`
              : cor,
            width: `${pct}%`,
            boxShadow: destaque
              ? `0 0 20px ${cor}80`
              : "none",
          }}
        />
      </div>
    </div>
  );
}

function SmallInfo({
  label,
  value,
  icon,
}: {
  label: string;
  value: string;
  icon?: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-[var(--aura-text-muted)] mb-1">
        {icon}
        {label}
      </div>
      <div className="text-sm font-semibold text-[var(--aura-text)] truncate">
        {value || <span className="text-[var(--aura-text-faded)]">—</span>}
      </div>
    </div>
  );
}

function SemDadosFallback() {
  return (
    <div className="text-center py-20">
      <div
        className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6"
        style={{
          background: "var(--aura-yellow-tint)",
          color: "var(--aura-yellow-deep)",
        }}
      >
        <IconSparkles size={36} />
      </div>
      <h2 className="text-2xl sm:text-3xl font-bold text-[var(--aura-text)] mb-3">
        Pra calcular sua economia, preciso de alguns dados.
      </h2>
      <p className="text-base text-[var(--aura-text-muted)] mb-8 max-w-md mx-auto">
        A calculadora completa leva 2 minutos pra preencher.
        Termina e cai aqui de novo com seu projeto pronto.
      </p>
      <a
        href="/orcamento"
        className="btn-yellow inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl text-base font-bold"
      >
        <IconCheck size={18} />
        Fazer a calculadora agora
        <IconArrowRight size={18} />
      </a>
    </div>
  );
}
