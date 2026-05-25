"use client";

import { useMemo, useState } from "react";
import AnimatedCounter from "../AnimatedCounter";
import {
  IconBolt,
  IconChart,
  IconClock,
  IconStore,
  IconTrending,
  IconWhatsApp,
} from "../Icons";

// =====================================================================
// SIMULADOR COMERCIAL — Aura Energy
// Classe B3 baixa tensão · fontes: Energisa-TO, ABSOLAR, ANEEL (mai/2026)
//
// Realismo:
// - Tarifa B3 média Palmas com tributos: R$ 0,90/kWh
// - Custo/kWp em escala comercial: R$ 4.100 (Tier 1, mai/2026)
// - Economia pós-Fio B 60% em 2026: 78-82% (faixa, não pontual)
// - Tipo de operação ajusta perfil de consumo (refrigeração 24h, comercial, escritório)
// =====================================================================

const TARIFA_B3 = 0.9;
const HSP_PALMAS = 5.9;
const PRODUCAO_KWH_POR_KWP_MES = HSP_PALMAS * 30 * 0.78;
const CUSTO_POR_KWP = 4100;
const ECONOMIA_PCT = 0.80;
const MARGEM_DIMENSIONAMENTO = 1.10;
const POTENCIA_PAINEL_W = 575;
const VIDA_UTIL_ANOS = 25;
const RENATO_WHATSAPP = "5563992706284";

type PerfilOperacao = {
  key: string;
  label: string;
  desc: string;
  multiplicadorConsumo: number;
};

const PERFIS: PerfilOperacao[] = [
  {
    key: "refrigeracao",
    label: "Refrigeração 24h",
    desc: "Supermercado, lanchonete, padaria, sorveteria",
    multiplicadorConsumo: 1.45,
  },
  {
    key: "comercial",
    label: "Comércio 8h-22h",
    desc: "Loja, restaurante, posto, salão, clínica",
    multiplicadorConsumo: 1.0,
  },
  {
    key: "escritorio",
    label: "Escritório 8h-18h",
    desc: "Escritório técnico, consultório, advocacia",
    multiplicadorConsumo: 0.82,
  },
];

type Resultado = {
  consumoKwh: number;
  sistemaKwp: number;
  numPaineis: number;
  investimento: number;
  economiaMes: number;
  economiaAno: number;
  economia25Anos: number;
  paybackMeses: number;
  roi5anos: number;
};

function calcular(contaMensal: number, perfil: PerfilOperacao): Resultado {
  if (contaMensal <= 0) {
    return {
      consumoKwh: 0,
      sistemaKwp: 0,
      numPaineis: 0,
      investimento: 0,
      economiaMes: 0,
      economiaAno: 0,
      economia25Anos: 0,
      paybackMeses: 0,
      roi5anos: 0,
    };
  }

  const consumoBase = contaMensal / TARIFA_B3;
  const consumoKwh = consumoBase * perfil.multiplicadorConsumo;
  const sistemaKwp =
    (consumoKwh / PRODUCAO_KWH_POR_KWP_MES) * MARGEM_DIMENSIONAMENTO;
  const numPaineis = Math.ceil((sistemaKwp * 1000) / POTENCIA_PAINEL_W);
  const investimento = sistemaKwp * CUSTO_POR_KWP;
  const economiaMes = contaMensal * ECONOMIA_PCT;
  const economiaAno = economiaMes * 12;
  const economia25Anos = economiaAno * VIDA_UTIL_ANOS;
  const paybackMeses = (investimento / economiaMes);
  const roi5anos = ((economiaAno * 5) / investimento) * 100;

  return {
    consumoKwh: Math.round(consumoKwh),
    sistemaKwp: Number(sistemaKwp.toFixed(2)),
    numPaineis,
    investimento: Math.round(investimento),
    economiaMes: Math.round(economiaMes),
    economiaAno: Math.round(economiaAno),
    economia25Anos: Math.round(economia25Anos),
    paybackMeses: Math.round(paybackMeses),
    roi5anos: Math.round(roi5anos),
  };
}

function formatBRL(v: number) {
  return v.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
}

function paybackEmTexto(meses: number): string {
  if (meses === 0) return "—";
  const anos = meses / 12;
  if (anos < 1) return `${meses} meses`;
  const anosArred = Math.floor(anos);
  const restoMeses = meses - anosArred * 12;
  if (restoMeses === 0) return `${anosArred} ${anosArred === 1 ? "ano" : "anos"}`;
  return `${anosArred}a ${restoMeses}m`;
}

// =====================================================================

export default function SimuladorComercio() {
  const [conta, setConta] = useState(2500);
  const [perfilKey, setPerfilKey] = useState<string>("comercial");
  const perfil = PERFIS.find((p) => p.key === perfilKey)!;

  const resultado = useMemo(() => calcular(conta, perfil), [conta, perfil]);

  const linkWhats = useMemo(() => {
    const texto =
      `Olá Renato, simulei na LP da Aura pro meu comércio.\n\n` +
      `Tipo de operação: ${perfil.label}\n` +
      `Conta atual: ${formatBRL(conta)}/mês\n` +
      `Sistema sugerido: ${resultado.sistemaKwp} kWp (${resultado.numPaineis} painéis)\n` +
      `Investimento estimado: ${formatBRL(resultado.investimento)}\n` +
      `Economia/mês: ${formatBRL(resultado.economiaMes)}\n` +
      `Payback estimado: ${paybackEmTexto(resultado.paybackMeses)}\n\n` +
      `Quero análise técnica detalhada do meu negócio.`;
    return `https://wa.me/${RENATO_WHATSAPP}?text=${encodeURIComponent(texto)}`;
  }, [conta, perfil, resultado]);

  const YELLOW_DEEP = "var(--aura-yellow-deep)";

  return (
    <div className="glow-border w-full max-w-2xl mx-auto">
      <div className="glow-border-inner p-6 sm:p-8">
        {/* Header */}
        <div className="flex items-center justify-between gap-3 mb-6 flex-wrap">
          <div className="flex items-center gap-2">
            <span className="badge-live">
              <span className="dot" />
            </span>
            <span
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: YELLOW_DEEP }}
            >
              Simulador comercial
            </span>
          </div>
          <span className="badge-yellow">
            <IconStore size={14} />
            Energisa B3 · 2026
          </span>
        </div>

        {/* Tipo de operação */}
        <div className="mb-6">
          <label className="block text-sm font-semibold text-[var(--aura-text-soft)] mb-3">
            Qual o perfil do seu negócio?
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {PERFIS.map((p) => {
              const ativo = p.key === perfilKey;
              return (
                <button
                  key={p.key}
                  type="button"
                  onClick={() => setPerfilKey(p.key)}
                  className={`text-left px-3 py-3 rounded-xl border-2 transition-all duration-200 ${
                    ativo
                      ? "border-[var(--aura-yellow-deep)] bg-[var(--aura-yellow-tint)]"
                      : "border-[var(--aura-border)] bg-white hover:border-[var(--aura-yellow)]"
                  }`}
                  style={{
                    boxShadow: ativo ? "0 6px 16px -8px rgba(245,188,44,0.40)" : undefined,
                  }}
                >
                  <div
                    className="text-sm font-bold leading-tight mb-0.5"
                    style={{ color: ativo ? YELLOW_DEEP : "var(--aura-text)" }}
                  >
                    {p.label}
                  </div>
                  <div className="text-[11px] text-[var(--aura-text-muted)] leading-tight">
                    {p.desc}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Slider conta */}
        <div className="mb-7">
          <label className="block text-sm font-semibold text-[var(--aura-text-soft)] mb-3">
            Quanto seu negócio paga por mês na conta de luz?
          </label>

          <div className="flex items-end gap-3 mb-4">
            <span
              className="text-2xl font-bold"
              style={{ color: YELLOW_DEEP }}
            >
              R$
            </span>
            <input
              type="number"
              min={500}
              max={20000}
              step={100}
              value={conta}
              onChange={(e) => {
                const v = Number(e.target.value);
                setConta(Number.isFinite(v) ? v : 0);
              }}
              className="text-5xl sm:text-6xl font-extrabold bg-transparent border-0 outline-0 w-full counter-tabular tracking-tight"
              style={{ color: YELLOW_DEEP, minWidth: 0 }}
            />
            <span className="text-base font-medium text-[var(--aura-text-muted)] mb-2 whitespace-nowrap">
              /mês
            </span>
          </div>

          <input
            type="range"
            min={500}
            max={15000}
            step={100}
            value={Math.min(Math.max(conta, 500), 15000)}
            onChange={(e) => setConta(Number(e.target.value))}
            className="w-full accent-[var(--aura-yellow-deep)] cursor-pointer"
            style={{ height: 6 }}
          />

          <div className="flex justify-between text-xs text-[var(--aura-text-faded)] mt-2 font-medium">
            <span>R$ 500</span>
            <span>R$ 5.000</span>
            <span>R$ 15.000</span>
          </div>
        </div>

        {/* Resultados */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6">
          <ResultCard
            icon={<IconChart size={20} />}
            label="Economia mensal"
            value={
              <AnimatedCounter
                value={resultado.economiaMes}
                prefix="R$ "
                suffix="/mês"
              />
            }
            tone="yellow"
          />
          <ResultCard
            icon={<IconClock size={20} />}
            label="Payback estimado"
            value={paybackEmTexto(resultado.paybackMeses)}
            tone="blue"
            highlight
          />
          <ResultCard
            icon={<IconBolt size={20} />}
            label="Sistema sugerido"
            value={
              <>
                <AnimatedCounter
                  value={resultado.sistemaKwp}
                  decimals={2}
                  format="raw"
                  suffix=" kWp"
                />
                <span className="block text-xs font-medium text-[var(--aura-text-muted)] mt-1">
                  {resultado.numPaineis} painéis
                </span>
              </>
            }
            tone="neutral"
          />
          <ResultCard
            icon={<IconTrending size={20} />}
            label="ROI em 5 anos"
            value={
              <AnimatedCounter
                value={resultado.roi5anos}
                format="raw"
                suffix="%"
              />
            }
            tone="neutral"
          />
        </div>

        {/* Linha extra: economia 25 anos */}
        <div
          className="rounded-xl p-3.5 text-center mb-5"
          style={{
            background:
              "linear-gradient(135deg, var(--aura-yellow-tint) 0%, rgba(255,246,220,0.5) 100%)",
            border: "1px solid rgba(245, 188, 44, 0.30)",
          }}
        >
          <div
            className="text-[10px] font-bold uppercase tracking-widest mb-0.5"
            style={{ color: YELLOW_DEEP }}
          >
            Economia em 25 anos de operação
          </div>
          <div
            className="text-2xl sm:text-3xl font-extrabold counter-tabular leading-none"
            style={{ color: "var(--aura-blue-deep)" }}
          >
            <AnimatedCounter
              value={resultado.economia25Anos}
              prefix="R$ "
            />
          </div>
        </div>

        {/* Disclaimer */}
        <p className="text-[11px] text-[var(--aura-text-muted)] mb-4 leading-relaxed">
          Estimativa baseada em tarifa Energisa-TO classe B3 (R$ 0,90/kWh com
          tributos), Lei 14.300 (Fio B 60% em 2026) e irradiação solar média de
          Palmas (5,9 kWh/m²/dia). O perfil de operação ajusta o
          dimensionamento. Investimento exato sai após visita técnica e análise
          de fatura — pode variar ±10-15% conforme telhado, distância da rede e
          tipo de inversor.
        </p>

        <a
          href={linkWhats}
          target="_blank"
          rel="noopener"
          className="btn-yellow btn-pulse w-full inline-flex items-center justify-center gap-3 px-6 py-4 rounded-2xl text-base sm:text-lg"
        >
          <IconWhatsApp size={22} />
          Quero análise técnica do meu negócio
        </a>
      </div>
    </div>
  );
}

function ResultCard({
  icon,
  label,
  value,
  tone,
  highlight = false,
}: {
  icon: React.ReactNode;
  label: string;
  value: React.ReactNode;
  tone: "yellow" | "blue" | "neutral";
  highlight?: boolean;
}) {
  const toneStyles =
    tone === "yellow"
      ? {
          background:
            "linear-gradient(135deg, rgba(255,246,220,1) 0%, rgba(255,236,180,1) 100%)",
          color: "var(--aura-yellow-deep)",
          borderColor: "rgba(245, 188, 44, 0.30)",
        }
      : tone === "blue"
      ? {
          background:
            "linear-gradient(135deg, var(--aura-blue) 0%, var(--aura-blue-soft) 100%)",
          color: "white",
          borderColor: "var(--aura-blue)",
        }
      : {
          background: "var(--aura-bg-soft)",
          color: "var(--aura-text)",
          borderColor: "var(--aura-border)",
        };

  return (
    <div
      className={`rounded-2xl p-4 sm:p-5 border transition-all duration-300 ${
        highlight ? "ring-2 ring-[var(--aura-yellow)] ring-offset-2 ring-offset-white" : ""
      }`}
      style={toneStyles}
    >
      <div className="flex items-center gap-2 mb-2 opacity-90">
        {icon}
        <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider">
          {label}
        </span>
      </div>
      <div className="text-2xl sm:text-3xl font-extrabold leading-tight">
        {value}
      </div>
    </div>
  );
}
