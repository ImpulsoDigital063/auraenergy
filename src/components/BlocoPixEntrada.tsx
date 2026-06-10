import Reveal from "./Reveal";
import { IconArrowRight, IconCheck, IconSparkles, IconWhatsApp } from "./Icons";

const RENATO_WHATSAPP = "5563992706284";

type Props = {
  segmento?: "casa" | "comercio";
};

// Bloco PIX entrada cravado · briefing V3.1 Renato.
// Estratégia híbrida: PIX 20-40% de entrada + saldo financiado em BV/Solfácil.
// Reduz parcela · acelera aprovação de crédito · libera caixa.
export default function BlocoPixEntrada({ segmento = "casa" }: Props) {
  const isComercio = segmento === "comercio";

  const exemplo = isComercio
    ? {
        sistema: "Plus 8 kWp · R$ 18.000",
        sistemaValor: 18000,
        contaAtual: "R$ 900",
        pixEntrada: 5400, // 30%
        saldoFinanciado: 12600,
        parcelaSem: 295, // 18.000 a 96m BV
        parcelaCom: 207, // 12.600 a 96m BV
        economiaConta: 720,
      }
    : {
        sistema: "Padrão 5 kWp · R$ 15.000",
        sistemaValor: 15000,
        contaAtual: "R$ 600",
        pixEntrada: 4500, // 30%
        saldoFinanciado: 10500,
        parcelaSem: 245, // 15.000 a 96m BV
        parcelaCom: 172, // 10.500 a 96m BV
        economiaConta: 480,
      };

  const fmt = (v: number) =>
    `R$ ${v.toLocaleString("pt-BR", { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;

  const whatsLink = `https://wa.me/${RENATO_WHATSAPP}?text=${encodeURIComponent(
    isComercio
      ? "Olá Renato, quero simular PIX entrada + financiamento pro meu comércio."
      : "Olá Renato, quero simular PIX entrada + financiamento pra minha casa."
  )}`;

  return (
    <section className="py-20 sm:py-28 section-soft overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4"
              style={{
                background: "rgba(34, 197, 94, 0.10)",
                color: "#15803D",
                border: "1px solid rgba(34, 197, 94, 0.25)",
              }}
            >
              <IconSparkles size={14} />
              Estratégia cravada Aura
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[var(--aura-text)] mb-4 leading-tight">
              Use PIX como entrada ·{" "}
              <span className="text-gradient-aura">libera mais caixa</span>
            </h2>
            <p className="text-lg text-[var(--aura-text-muted)] max-w-3xl mx-auto leading-relaxed">
              Combinar PIX de entrada (20-40%) com financiamento do saldo reduz a parcela mensal,
              acelera aprovação de crédito e ainda economiza juros totais. Estratégia cravada pelo
              Renato no briefing técnico.
            </p>
          </div>
        </Reveal>

        <Reveal delay={1}>
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {/* Cenário SEM PIX */}
            <div className="premium-card p-7">
              <div className="text-xs font-bold uppercase tracking-widest text-[var(--aura-text-muted)] mb-3">
                Cenário tradicional
              </div>
              <h3 className="text-xl font-bold text-[var(--aura-text)] mb-5 leading-tight">
                Financiar 100% sem entrada
              </h3>
              <div className="space-y-3 text-sm">
                <Linha label="Sistema" valor={exemplo.sistema} />
                <Linha label="Entrada" valor="R$ 0" cor="muted" />
                <Linha label="Valor financiado" valor={fmt(exemplo.sistemaValor)} />
                <Linha label="Parcela BV 96m" valor={`${fmt(exemplo.parcelaSem)}/mês`} destaque />
                <div className="border-t border-[var(--aura-border)] pt-3">
                  <Linha
                    label="Saldo positivo no mês 1"
                    valor={fmt(exemplo.economiaConta - exemplo.parcelaSem)}
                    destaque
                    corValor="#15803D"
                  />
                </div>
              </div>
            </div>

            {/* Cenário COM PIX */}
            <div
              className="premium-card p-7 relative"
              style={{
                background:
                  "linear-gradient(135deg, var(--aura-yellow-tint) 0%, white 80%)",
                border: "2px solid var(--aura-yellow)",
              }}
            >
              <span className="absolute -top-3 left-7 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-white"
                style={{ background: "var(--aura-yellow-deep)" }}
              >
                Recomendado Aura
              </span>
              <div className="text-xs font-bold uppercase tracking-widest text-[var(--aura-yellow-deep)] mb-3">
                Cenário híbrido
              </div>
              <h3 className="text-xl font-bold text-[var(--aura-text)] mb-5 leading-tight">
                PIX entrada 30% + financiar saldo
              </h3>
              <div className="space-y-3 text-sm">
                <Linha label="Sistema" valor={exemplo.sistema} />
                <Linha label="PIX entrada (30%)" valor={fmt(exemplo.pixEntrada)} destaque />
                <Linha label="Valor financiado" valor={fmt(exemplo.saldoFinanciado)} />
                <Linha label="Parcela BV 96m" valor={`${fmt(exemplo.parcelaCom)}/mês`} destaque />
                <div className="border-t border-[var(--aura-yellow)] pt-3">
                  <Linha
                    label="Saldo positivo no mês 1"
                    valor={fmt(exemplo.economiaConta - exemplo.parcelaCom)}
                    destaque
                    corValor="#15803D"
                  />
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={2}>
          <div className="grid sm:grid-cols-3 gap-4 mb-10">
            <Vantagem
              titulo="Aprovação mais rápida"
              texto="Entrada PIX sinaliza compromisso · análise BV cai pra 24-48h"
            />
            <Vantagem
              titulo="Menos juros pagos"
              texto="Financia valor menor · economia de R$ 2-5 mil em juros totais"
            />
            <Vantagem
              titulo="Caixa preservado"
              texto="Mantém parte da reserva pra emergência · não compromete tudo"
            />
          </div>
        </Reveal>

        <Reveal delay={3}>
          <div className="text-center">
            <p className="text-sm text-[var(--aura-text-muted)] mb-4">
              Valores ilustrativos · simulação cravada na visita técnica considerando seu perfil de crédito
            </p>
            <a
              href={whatsLink}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2.5 px-7 py-4 rounded-xl text-base font-bold text-white transition-all duration-300 hover:-translate-y-0.5"
              style={{
                background: "var(--aura-blue-deep)",
                boxShadow: "0 16px 40px -12px rgba(14, 33, 82, 0.45)",
              }}
            >
              <IconWhatsApp size={18} />
              Quero simular PIX + financiamento
              <IconArrowRight size={16} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Linha({
  label,
  valor,
  destaque = false,
  cor = "default",
  corValor,
}: {
  label: string;
  valor: string;
  destaque?: boolean;
  cor?: "default" | "muted";
  corValor?: string;
}) {
  return (
    <div className="flex items-baseline justify-between gap-3">
      <span
        className={`text-sm ${cor === "muted" ? "text-[var(--aura-text-faded)]" : "text-[var(--aura-text-muted)]"}`}
      >
        {label}
      </span>
      <span
        className={`font-${destaque ? "extrabold" : "semibold"} ${destaque ? "text-base" : "text-sm"}`}
        style={{ color: corValor ?? "var(--aura-text)" }}
      >
        {valor}
      </span>
    </div>
  );
}

function Vantagem({ titulo, texto }: { titulo: string; texto: string }) {
  return (
    <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-[var(--aura-border)]">
      <span
        className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
        style={{
          background: "rgba(34, 197, 94, 0.10)",
          color: "#15803D",
        }}
      >
        <IconCheck size={18} />
      </span>
      <div className="flex-1">
        <div className="font-bold text-sm text-[var(--aura-text)] mb-1">{titulo}</div>
        <div className="text-xs text-[var(--aura-text-muted)] leading-relaxed">{texto}</div>
      </div>
    </div>
  );
}
