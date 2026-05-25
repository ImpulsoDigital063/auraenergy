"use client";

import { useMemo, useState } from "react";
import AnimatedCounter from "./AnimatedCounter";
import {
  IconBolt,
  IconChart,
  IconClock,
  IconPanelGrid,
  IconWhatsApp,
} from "./Icons";

// =====================================================================
// CONSTANTES DE CÁLCULO — fontes: ABSOLAR, ANEEL, Energisa TO (mai/2026)
// =====================================================================

const TARIFA_ENERGISA_TO = 0.95; // R$/kWh — B1 residencial com tributos (jul/25 a jul/26)
const HSP_PALMAS = 5.9; // horas de sol pleno/dia — Palmas-TO é uma das mais altas do BR
const PRODUCAO_KWH_POR_KWP_MES = HSP_PALMAS * 30 * 0.78; // 78% de eficiência média = ~138 kWh/kWp/mês
const CUSTO_POR_KWP = 4400; // R$/kWp instalado, faixa Tier 1, mai/2026
const ECONOMIA_PCT = 0.82; // 82% de economia média com Fio B em 60% (Lei 14.300, 2026)
const POTENCIA_PAINEL_W = 575; // painel padrão 2026 (TOPCon)
const VIDA_UTIL_ANOS = 25;
const RENATO_WHATSAPP = "5563992706284"; // sem traços/espaços

// =====================================================================

type Resultado = {
  consumoKwh: number;
  sistemaKwp: number;
  numPaineis: number;
  investimento: number;
  economiaMes: number;
  economiaAno: number;
  economia25Anos: number;
  payback: number;
};

function calcularResultado(contaMensal: number): Resultado {
  if (contaMensal <= 0) {
    return {
      consumoKwh: 0,
      sistemaKwp: 0,
      numPaineis: 0,
      investimento: 0,
      economiaMes: 0,
      economiaAno: 0,
      economia25Anos: 0,
      payback: 0,
    };
  }

  const consumoKwh = contaMensal / TARIFA_ENERGISA_TO;
  const sistemaKwp = (consumoKwh / PRODUCAO_KWH_POR_KWP_MES) * 1.08; // 8% margem
  const numPaineis = Math.ceil((sistemaKwp * 1000) / POTENCIA_PAINEL_W);
  const investimento = sistemaKwp * CUSTO_POR_KWP;
  const economiaMes = contaMensal * ECONOMIA_PCT;
  const economiaAno = economiaMes * 12;
  const economia25Anos = economiaAno * VIDA_UTIL_ANOS;
  const payback = investimento / economiaAno;

  return {
    consumoKwh: Math.round(consumoKwh),
    sistemaKwp: Number(sistemaKwp.toFixed(2)),
    numPaineis,
    investimento: Math.round(investimento),
    economiaMes: Math.round(economiaMes),
    economiaAno: Math.round(economiaAno),
    economia25Anos: Math.round(economia25Anos),
    payback: Number(payback.toFixed(1)),
  };
}

function formatBRL(value: number) {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
}

// =====================================================================
// COMPONENTE
// =====================================================================

export default function Simulador() {
  const [conta, setConta] = useState(600);
  const [tocou, setTocou] = useState(false);

  const resultado = useMemo(() => calcularResultado(conta), [conta]);

  const mensagemWhatsApp = useMemo(() => {
    const texto =
      `Olá Renato, simulei na sua LP da Aura Energy.\n\n` +
      `Minha conta de luz: ${formatBRL(conta)}/mês\n` +
      `Sistema sugerido: ${resultado.sistemaKwp} kWp (${resultado.numPaineis} painéis)\n` +
      `Investimento estimado: ${formatBRL(resultado.investimento)}\n` +
      `Economia/mês: ${formatBRL(resultado.economiaMes)}\n\n` +
      `Quero agendar a visita técnica gratuita.`;
    return encodeURIComponent(texto);
  }, [conta, resultado]);

  const linkWhatsApp = `https://wa.me/${RENATO_WHATSAPP}?text=${mensagemWhatsApp}`;

  return (
    <div className="glow-border w-full max-w-2xl mx-auto">
      <div className="glow-border-inner p-6 sm:p-8">
        {/* Header do simulador */}
        <div className="flex items-center justify-between gap-3 mb-6 flex-wrap">
          <div className="flex items-center gap-2">
            <span className="badge-live">
              <span className="dot" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-widest text-[var(--aura-blue)]">
              Simulação ao vivo
            </span>
          </div>
          <span className="badge-yellow">
            <IconBolt size={14} />
            Energisa-TO 2026
          </span>
        </div>

        {/* Slider input */}
        <div className="mb-8">
          <label className="block text-sm font-semibold text-[var(--aura-text-soft)] mb-3">
            Quanto você paga por mês na conta de luz?
          </label>

          <div className="flex items-end gap-3 mb-4">
            <span className="text-2xl font-bold text-[var(--aura-blue)]">R$</span>
            <input
              type="number"
              min={100}
              max={5000}
              step={50}
              value={conta}
              onFocus={() => setTocou(true)}
              onChange={(e) => {
                setTocou(true);
                const v = Number(e.target.value);
                setConta(Number.isFinite(v) ? v : 0);
              }}
              className="text-5xl sm:text-6xl font-extrabold text-[var(--aura-blue)] bg-transparent border-0 outline-0 w-full counter-tabular tracking-tight"
              style={{ minWidth: 0 }}
            />
            <span className="text-base font-medium text-[var(--aura-text-muted)] mb-2 whitespace-nowrap">
              /mês
            </span>
          </div>

          <input
            type="range"
            min={150}
            max={3000}
            step={50}
            value={Math.min(Math.max(conta, 150), 3000)}
            onChange={(e) => {
              setTocou(true);
              setConta(Number(e.target.value));
            }}
            className="w-full accent-[var(--aura-yellow)] cursor-pointer"
            style={{
              height: 6,
            }}
          />

          <div className="flex justify-between text-xs text-[var(--aura-text-faded)] mt-2 font-medium">
            <span>R$ 150</span>
            <span>R$ 1.500</span>
            <span>R$ 3.000</span>
          </div>

          {!tocou && (
            <p className="text-xs text-[var(--aura-text-muted)] mt-3 italic">
              ↑ arraste o slider ou digite o valor da sua conta
            </p>
          )}
        </div>

        {/* Resultado — 4 cards animados */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6">
          <ResultCard
            icon={<IconChart size={20} />}
            label="Você economiza"
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
            icon={<IconBolt size={20} />}
            label="Em 25 anos"
            value={
              <AnimatedCounter
                value={resultado.economia25Anos}
                prefix="R$ "
              />
            }
            tone="blue"
            highlight
          />
          <ResultCard
            icon={<IconPanelGrid size={20} />}
            label="Sistema ideal"
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
            icon={<IconClock size={20} />}
            label="Se paga em"
            value={
              <AnimatedCounter
                value={resultado.payback}
                decimals={1}
                format="raw"
                suffix=" anos"
              />
            }
            tone="neutral"
          />
        </div>

        {/* Disclaimer + CTA */}
        <p className="text-[11px] text-[var(--aura-text-muted)] mb-4 leading-relaxed">
          Estimativa baseada em tarifa Energisa-TO (R$ 0,95/kWh com tributos), Lei
          14.300 (Fio B 60% em 2026) e irradiação solar média de Palmas
          (5,9 kWh/m²/dia). O orçamento exato depende de visita técnica gratuita.
        </p>

        <a
          href={linkWhatsApp}
          target="_blank"
          rel="noopener"
          className="btn-yellow btn-pulse w-full inline-flex items-center justify-center gap-3 px-6 py-4 rounded-2xl text-base sm:text-lg"
        >
          <IconWhatsApp size={22} />
          Agendar visita técnica gratuita
        </a>
      </div>
    </div>
  );
}

// =====================================================================

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
      <div className="text-2xl sm:text-3xl font-extrabold leading-tight">{value}</div>
    </div>
  );
}
