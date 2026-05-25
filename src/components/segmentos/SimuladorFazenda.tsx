"use client";

import { useMemo, useState } from "react";
import AnimatedCounter from "../AnimatedCounter";
import {
  IconBolt,
  IconChart,
  IconClock,
  IconLeaf,
  IconTractor,
  IconWallet,
  IconWhatsApp,
} from "../Icons";

// =====================================================================
// SIMULADOR RURAL — Aura Energy
// Classe B2 Rural · fontes: Energisa-TO, BNDES Pronaf, ABSOLAR (mai/2026)
//
// Realismo:
// - Tarifa B2 Rural Palmas: R$ 0,78/kWh (desconto rural ~25% sobre B1)
// - Custo/kWp: telhado R$ 4.200 / solo R$ 4.700 (estrutura de solo encarece)
// - Economia pós-Fio B 60% em 2026: 78-82%
// - Pronaf Mais Alimentos: 0,5% a.m. (~6,17% a.a.) · prazo até 12 anos (144 meses)
// - Operação ajusta multiplicador de consumo (pivô consome muito mais que aviário)
// =====================================================================

const TARIFA_B2_RURAL = 0.78;
const HSP_PALMAS = 5.9;
const PRODUCAO_KWH_POR_KWP_MES = HSP_PALMAS * 30 * 0.78;
const ECONOMIA_PCT = 0.80;
const MARGEM_DIMENSIONAMENTO = 1.10;
const POTENCIA_PAINEL_W = 575;
const VIDA_UTIL_ANOS = 25;
const PRONAF_TAXA_AM = 0.005; // 0,5% a.m.
const PRONAF_PRAZO_MESES = 144; // 12 anos
const RENATO_WHATSAPP = "5563992706284";

type TipoOperacao = {
  key: string;
  label: string;
  desc: string;
  multiplicador: number;
};

const OPERACOES: TipoOperacao[] = [
  {
    key: "pivo",
    label: "Pivô central · irrigação",
    desc: "Bombeamento, pivô, irrigação por aspersão",
    multiplicador: 1.50,
  },
  {
    key: "granja",
    label: "Granja · aviário",
    desc: "Climatização, exaustão, ração automatizada",
    multiplicador: 1.25,
  },
  {
    key: "mista",
    label: "Propriedade mista",
    desc: "Casa + galpão + curral + pomar",
    multiplicador: 1.0,
  },
  {
    key: "outros",
    label: "Outras operações rurais",
    desc: "Pequena/média propriedade · uso geral",
    multiplicador: 0.85,
  },
];

type Local = "telhado" | "solo";

type Resultado = {
  consumoKwh: number;
  sistemaKwp: number;
  numPaineis: number;
  investimento: number;
  economiaMes: number;
  economiaAno: number;
  economia25Anos: number;
  paybackAnos: number;
  parcelaPronaf: number;
  caixaLiquidoMes: number;
};

function calcParcelaPronaf(pv: number): number {
  if (pv <= 0) return 0;
  const i = PRONAF_TAXA_AM;
  const n = PRONAF_PRAZO_MESES;
  const pmt = (pv * (i * Math.pow(1 + i, n))) / (Math.pow(1 + i, n) - 1);
  return pmt;
}

function calcular(
  contaMensal: number,
  operacao: TipoOperacao,
  local: Local
): Resultado {
  if (contaMensal <= 0) {
    return {
      consumoKwh: 0,
      sistemaKwp: 0,
      numPaineis: 0,
      investimento: 0,
      economiaMes: 0,
      economiaAno: 0,
      economia25Anos: 0,
      paybackAnos: 0,
      parcelaPronaf: 0,
      caixaLiquidoMes: 0,
    };
  }

  const consumoBase = contaMensal / TARIFA_B2_RURAL;
  const consumoKwh = consumoBase * operacao.multiplicador;
  const sistemaKwp =
    (consumoKwh / PRODUCAO_KWH_POR_KWP_MES) * MARGEM_DIMENSIONAMENTO;
  const numPaineis = Math.ceil((sistemaKwp * 1000) / POTENCIA_PAINEL_W);
  const custoKwp = local === "telhado" ? 4200 : 4700;
  const investimento = sistemaKwp * custoKwp;
  const economiaMes = contaMensal * ECONOMIA_PCT;
  const economiaAno = economiaMes * 12;
  const economia25Anos = economiaAno * VIDA_UTIL_ANOS;
  const paybackAnos = investimento / economiaAno;
  const parcelaPronaf = calcParcelaPronaf(investimento);
  const caixaLiquidoMes = economiaMes - parcelaPronaf;

  return {
    consumoKwh: Math.round(consumoKwh),
    sistemaKwp: Number(sistemaKwp.toFixed(1)),
    numPaineis,
    investimento: Math.round(investimento),
    economiaMes: Math.round(economiaMes),
    economiaAno: Math.round(economiaAno),
    economia25Anos: Math.round(economia25Anos),
    paybackAnos: Number(paybackAnos.toFixed(1)),
    parcelaPronaf: Math.round(parcelaPronaf),
    caixaLiquidoMes: Math.round(caixaLiquidoMes),
  };
}

function formatBRL(v: number) {
  if (v >= 1_000_000) {
    return `R$ ${(v / 1_000_000).toFixed(1).replace(".", ",")} mi`;
  }
  return v.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
}

function paybackTexto(anos: number): string {
  if (anos === 0) return "—";
  const min = Math.max(1, anos - 0.7);
  const max = anos + 0.7;
  return `${min.toFixed(1).replace(".", ",")}-${max.toFixed(1).replace(".", ",")} anos`;
}

const RURAL_GREEN = "#15803D";
const RURAL_GREEN_SOFT = "rgba(21, 128, 61, 0.08)";
const RURAL_GREEN_TINT = "rgba(21, 128, 61, 0.15)";

// =====================================================================

export default function SimuladorFazenda() {
  const [conta, setConta] = useState(8000);
  const [operKey, setOperKey] = useState<string>("pivo");
  const [local, setLocal] = useState<Local>("telhado");

  const operacao = OPERACOES.find((o) => o.key === operKey)!;
  const resultado = useMemo(
    () => calcular(conta, operacao, local),
    [conta, operacao, local]
  );

  const linkWhats = useMemo(() => {
    const texto =
      `Olá Renato, simulei na LP da Aura pra minha propriedade rural.\n\n` +
      `Operação: ${operacao.label}\n` +
      `Instalação: ${local === "telhado" ? "telhado" : "solo"}\n` +
      `Conta atual: ${formatBRL(conta)}/mês\n` +
      `Sistema sugerido: ${resultado.sistemaKwp} kWp (${resultado.numPaineis} painéis)\n` +
      `Investimento estimado: ${formatBRL(resultado.investimento)}\n` +
      `Parcela Pronaf 0,5% a.m.: ${formatBRL(resultado.parcelaPronaf)}\n` +
      `Economia/mês: ${formatBRL(resultado.economiaMes)}\n` +
      `Caixa líquido/mês: ${formatBRL(resultado.caixaLiquidoMes)}\n\n` +
      `Quero proposta com enquadramento Pronaf.`;
    return `https://wa.me/${RENATO_WHATSAPP}?text=${encodeURIComponent(texto)}`;
  }, [conta, operacao, local, resultado]);

  return (
    <div
      className="w-full max-w-3xl mx-auto rounded-3xl"
      style={{
        background: "var(--aura-bg-card)",
        border: `1px solid ${RURAL_GREEN}30`,
        boxShadow: "var(--shadow-lg)",
      }}
    >
      <div className="p-6 sm:p-8">
        {/* Header */}
        <div className="flex items-center justify-between gap-3 mb-6 flex-wrap">
          <div className="flex items-center gap-2">
            <span className="badge-live">
              <span className="dot" />
            </span>
            <span
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: RURAL_GREEN }}
            >
              Simulador rural
            </span>
          </div>
          <span
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold"
            style={{
              background: RURAL_GREEN_SOFT,
              color: RURAL_GREEN,
              border: `1px solid ${RURAL_GREEN}30`,
            }}
          >
            <IconTractor size={14} />
            B2 Rural · Pronaf · 2026
          </span>
        </div>

        {/* Tipo operação */}
        <div className="mb-6">
          <label
            className="block text-sm font-semibold mb-3"
            style={{ color: RURAL_GREEN }}
          >
            Qual o uso principal da propriedade?
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {OPERACOES.map((o) => {
              const ativo = o.key === operKey;
              return (
                <button
                  key={o.key}
                  type="button"
                  onClick={() => setOperKey(o.key)}
                  className="text-left px-3 py-3 rounded-xl border-2 transition-all duration-200"
                  style={{
                    borderColor: ativo ? RURAL_GREEN : "var(--aura-border)",
                    background: ativo ? RURAL_GREEN_TINT : "white",
                    boxShadow: ativo
                      ? `0 6px 16px -8px ${RURAL_GREEN}50`
                      : undefined,
                  }}
                >
                  <div
                    className="text-sm font-bold leading-tight mb-0.5"
                    style={{
                      color: ativo ? RURAL_GREEN : "var(--aura-text)",
                    }}
                  >
                    {o.label}
                  </div>
                  <div className="text-[11px] text-[var(--aura-text-muted)] leading-tight">
                    {o.desc}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Local de instalação */}
        <div className="mb-6">
          <label
            className="block text-sm font-semibold mb-3"
            style={{ color: RURAL_GREEN }}
          >
            Onde vamos instalar os painéis?
          </label>
          <div className="grid grid-cols-2 gap-2">
            {(["telhado", "solo"] as const).map((opt) => {
              const ativo = opt === local;
              return (
                <button
                  key={opt}
                  type="button"
                  onClick={() => setLocal(opt)}
                  className="px-4 py-3 rounded-xl border-2 transition-all duration-200 text-sm font-semibold capitalize"
                  style={{
                    borderColor: ativo ? RURAL_GREEN : "var(--aura-border)",
                    background: ativo ? RURAL_GREEN_TINT : "white",
                    color: ativo ? RURAL_GREEN : "var(--aura-text-soft)",
                  }}
                >
                  {opt === "telhado"
                    ? "Telhado de galpão"
                    : "Sistema em solo"}
                </button>
              );
            })}
          </div>
        </div>

        {/* Slider conta */}
        <div className="mb-7">
          <label
            className="block text-sm font-semibold mb-3"
            style={{ color: RURAL_GREEN }}
          >
            Quanto sua propriedade paga por mês na conta de luz?
          </label>

          <div className="flex items-end gap-3 mb-4">
            <span
              className="text-2xl font-bold"
              style={{ color: RURAL_GREEN }}
            >
              R$
            </span>
            <input
              type="number"
              min={1500}
              max={80000}
              step={500}
              value={conta}
              onChange={(e) => {
                const v = Number(e.target.value);
                setConta(Number.isFinite(v) ? v : 0);
              }}
              className="text-4xl sm:text-6xl font-extrabold bg-transparent border-0 outline-0 w-full counter-tabular tracking-tight"
              style={{ color: RURAL_GREEN, minWidth: 0 }}
            />
            <span className="text-base font-medium text-[var(--aura-text-muted)] mb-2 whitespace-nowrap">
              /mês
            </span>
          </div>

          <input
            type="range"
            min={1500}
            max={50000}
            step={500}
            value={Math.min(Math.max(conta, 1500), 50000)}
            onChange={(e) => setConta(Number(e.target.value))}
            className="w-full cursor-pointer"
            style={{ height: 6, accentColor: RURAL_GREEN }}
          />

          <div className="flex justify-between text-xs text-[var(--aura-text-faded)] mt-2 font-medium">
            <span>R$ 1,5k</span>
            <span>R$ 20k</span>
            <span>R$ 50k</span>
          </div>
        </div>

        {/* Resultados — 4 cards */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-5">
          <BlocoRural
            icon={<IconChart size={20} />}
            label="Economia mensal"
            value={
              <AnimatedCounter
                value={resultado.economiaMes}
                prefix="R$ "
                suffix="/mês"
              />
            }
            tone="green-soft"
          />
          <BlocoRural
            icon={<IconClock size={20} />}
            label="Payback projetado"
            value={paybackTexto(resultado.paybackAnos)}
            tone="green-deep"
            highlight
          />
          <BlocoRural
            icon={<IconBolt size={20} />}
            label="Sistema sugerido"
            value={
              <>
                <AnimatedCounter
                  value={resultado.sistemaKwp}
                  decimals={1}
                  format="raw"
                  suffix=" kWp"
                />
                <span className="block text-xs font-medium text-[var(--aura-text-muted)] mt-1">
                  {resultado.numPaineis} painéis · em {local}
                </span>
              </>
            }
            tone="neutral"
          />
          <BlocoRural
            icon={<IconLeaf size={20} />}
            label="Em 25 anos"
            value={
              <AnimatedCounter
                value={resultado.economia25Anos}
                prefix="R$ "
              />
            }
            tone="neutral"
          />
        </div>

        {/* Bloco Pronaf — caixa líquido */}
        <div
          className="rounded-xl p-4 mb-5"
          style={{
            background: `linear-gradient(135deg, ${RURAL_GREEN_SOFT} 0%, var(--aura-yellow-tint) 100%)`,
            border: `1px solid ${RURAL_GREEN}30`,
          }}
        >
          <div
            className="flex items-center gap-2 mb-3"
            style={{ color: RURAL_GREEN }}
          >
            <IconWallet size={16} />
            <div className="text-[11px] font-bold uppercase tracking-widest">
              Com Pronaf 0,5% a.m. · 12 anos
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3">
            <div>
              <div className="text-[10px] text-[var(--aura-text-muted)] mb-1">
                Parcela mensal
              </div>
              <div
                className="text-base sm:text-lg font-extrabold counter-tabular leading-none"
                style={{ color: "var(--aura-text)" }}
              >
                {formatBRL(resultado.parcelaPronaf)}
              </div>
            </div>
            <div>
              <div className="text-[10px] text-[var(--aura-text-muted)] mb-1">
                Economia mensal
              </div>
              <div
                className="text-base sm:text-lg font-extrabold counter-tabular leading-none"
                style={{ color: RURAL_GREEN }}
              >
                {formatBRL(resultado.economiaMes)}
              </div>
            </div>
            <div>
              <div className="text-[10px] text-[var(--aura-text-muted)] mb-1">
                Caixa líquido
              </div>
              <div
                className="text-base sm:text-lg font-extrabold counter-tabular leading-none"
                style={{
                  color:
                    resultado.caixaLiquidoMes > 0
                      ? RURAL_GREEN
                      : "var(--aura-urgent)",
                }}
              >
                {resultado.caixaLiquidoMes > 0 ? "+" : ""}
                {formatBRL(Math.abs(resultado.caixaLiquidoMes))}
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="text-[11px] text-[var(--aura-text-muted)] mb-4 leading-relaxed">
          Estimativa pra classe B2 Rural Energisa-TO (R$ 0,78/kWh com desconto
          rural), Lei 14.300 com Fio B 60% em 2026 e irradiação solar de Palmas
          (5,9 kWh/m²/dia). Pronaf Mais Alimentos a 0,5% a.m. em 12 anos —
          enquadramento depende de DAP/CAF e finalidade. Custo/kWp em telhado de
          galpão = R$ 4.200, em solo = R$ 4.700 (estrutura encarece).
        </p>

        <a
          href={linkWhats}
          target="_blank"
          rel="noopener"
          className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 rounded-2xl text-base sm:text-lg font-bold text-white transition-all duration-300 hover:-translate-y-0.5"
          style={{
            background: RURAL_GREEN,
            boxShadow: `0 16px 40px -12px ${RURAL_GREEN}80`,
          }}
        >
          <IconWhatsApp size={22} />
          Quero proposta com Pronaf
        </a>
      </div>
    </div>
  );
}

function BlocoRural({
  icon,
  label,
  value,
  tone,
  highlight = false,
}: {
  icon: React.ReactNode;
  label: string;
  value: React.ReactNode;
  tone: "green-soft" | "green-deep" | "neutral";
  highlight?: boolean;
}) {
  const baseStyles =
    tone === "green-deep"
      ? {
          background:
            `linear-gradient(135deg, ${RURAL_GREEN} 0%, #166534 100%)`,
          color: "white",
          borderColor: RURAL_GREEN,
        }
      : tone === "green-soft"
      ? {
          background: `linear-gradient(135deg, ${RURAL_GREEN_TINT} 0%, ${RURAL_GREEN_SOFT} 100%)`,
          color: RURAL_GREEN,
          borderColor: `${RURAL_GREEN}30`,
        }
      : {
          background: "var(--aura-bg-soft)",
          color: "var(--aura-text)",
          borderColor: "var(--aura-border)",
        };

  return (
    <div
      className={`rounded-2xl p-4 sm:p-5 border transition-all duration-300 ${
        highlight
          ? `ring-2 ring-offset-2 ring-offset-white`
          : ""
      }`}
      style={{
        ...baseStyles,
        ...(highlight ? { boxShadow: `0 0 0 2px ${RURAL_GREEN}` } : {}),
      }}
    >
      <div className="flex items-center gap-2 mb-2 opacity-90">
        {icon}
        <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider">
          {label}
        </span>
      </div>
      <div className="text-xl sm:text-2xl font-extrabold leading-tight">
        {value}
      </div>
    </div>
  );
}
