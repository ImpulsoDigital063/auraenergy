"use client";

import { useMemo, useState } from "react";
import AnimatedCounter from "../AnimatedCounter";
import {
  IconBolt,
  IconChart,
  IconClock,
  IconFactory,
  IconTrending,
  IconWhatsApp,
} from "../Icons";

// =====================================================================
// SIMULADOR INDUSTRIAL — Aura Energy
// Classe A4 média tensão · fontes: Energisa-TO, ANEEL, ABSOLAR (mai/2026)
//
// Realismo:
// - Tarifa A4 com TUSD + TE + tributos: R$ 0,68/kWh média
// - Custo/kWp em escala industrial (50-500 kWp): R$ 3.500 (Tier 1)
// - Economia pós-Fio B 60%: 70-78% (componente B mantido + reativos)
// - TIR projetada: 18-22% a.a. típica (faixa, depende de variáveis reais)
// - ICMS subsidiado pelo Convênio 16/15 do Tocantins não embutido aqui — vai
//   na proposta executiva
// - Comparação com CDB usando taxa Selic projetada 2026 (~9% a.a.)
// =====================================================================

const TARIFA_A4 = 0.68;
const HSP_PALMAS = 5.9;
const PRODUCAO_KWH_POR_KWP_MES = HSP_PALMAS * 30 * 0.78;
const CUSTO_POR_KWP = 3500;
const ECONOMIA_PCT = 0.74;
const MARGEM_DIMENSIONAMENTO = 1.05;
const POTENCIA_PAINEL_W = 575;
const VIDA_UTIL_ANOS = 25;
const MANUTENCAO_PCT_AA = 0.018; // 1,8% a.a. de O&M
const CDB_PROJ_AA = 0.09; // 9% a.a. CDB conservador 2026
const RENATO_WHATSAPP = "5563992706284";

type Resultado = {
  consumoKwh: number;
  sistemaKwp: number;
  numPaineis: number;
  investimento: number;
  economiaMes: number;
  economiaAno: number;
  economia25Anos: number;
  paybackAnos: number;
  tirProjetada: number;
  ganhoVsCDB: number;
};

function calcular(contaMensal: number): Resultado {
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
      tirProjetada: 0,
      ganhoVsCDB: 0,
    };
  }

  const consumoKwh = contaMensal / TARIFA_A4;
  const sistemaKwp =
    (consumoKwh / PRODUCAO_KWH_POR_KWP_MES) * MARGEM_DIMENSIONAMENTO;
  const numPaineis = Math.ceil((sistemaKwp * 1000) / POTENCIA_PAINEL_W);
  const investimento = sistemaKwp * CUSTO_POR_KWP;
  const economiaMes = contaMensal * ECONOMIA_PCT;
  const economiaAno = economiaMes * 12;
  const economia25Anos = economiaAno * VIDA_UTIL_ANOS;
  const paybackAnos = investimento / economiaAno;

  // TIR aproximada: economia anual / investimento - manutenção
  const tirProjetada = (economiaAno / investimento - MANUTENCAO_PCT_AA) * 100;

  // Ganho vs CDB: solar (ROI 25 anos) vs CDB com mesmo capital aplicado
  const ganhoSolarLiquido = economia25Anos - investimento;
  const ganhoCDB =
    investimento * (Math.pow(1 + CDB_PROJ_AA, VIDA_UTIL_ANOS) - 1);
  const ganhoVsCDB = ((ganhoSolarLiquido - ganhoCDB) / ganhoCDB) * 100;

  return {
    consumoKwh: Math.round(consumoKwh),
    sistemaKwp: Number(sistemaKwp.toFixed(1)),
    numPaineis,
    investimento: Math.round(investimento),
    economiaMes: Math.round(economiaMes),
    economiaAno: Math.round(economiaAno),
    economia25Anos: Math.round(economia25Anos),
    paybackAnos: Number(paybackAnos.toFixed(1)),
    tirProjetada: Math.round(tirProjetada),
    ganhoVsCDB: Math.round(ganhoVsCDB),
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

function tirTexto(tir: number): string {
  if (tir === 0) return "—";
  const min = Math.max(0, Math.round(tir - 3));
  const max = Math.round(tir + 3);
  return `${min}-${max}% a.a.`;
}

// =====================================================================

export default function SimuladorIndustria() {
  const [conta, setConta] = useState(35000);

  const resultado = useMemo(() => calcular(conta), [conta]);

  const linkWhats = useMemo(() => {
    const texto =
      `Boa tarde Renato. Sou tomador de decisão na minha indústria em Tocantins.\n\n` +
      `Conta atual: ${formatBRL(conta)}/mês (classe A4 média tensão)\n` +
      `Sistema sugerido: ${resultado.sistemaKwp} kWp (${resultado.numPaineis} painéis)\n` +
      `Investimento estimado: ${formatBRL(resultado.investimento)}\n` +
      `Economia/mês: ${formatBRL(resultado.economiaMes)}\n` +
      `Payback estimado: ${paybackTexto(resultado.paybackAnos)}\n` +
      `TIR projetada: ${tirTexto(resultado.tirProjetada)}\n\n` +
      `Quero análise técnica detalhada e proposta executiva.`;
    return `https://wa.me/${RENATO_WHATSAPP}?text=${encodeURIComponent(texto)}`;
  }, [conta, resultado]);

  const BLUE_DEEP = "var(--aura-blue-deep)";
  const BLUE_SOFT = "rgba(14, 33, 82, 0.08)";

  return (
    <div
      className="w-full max-w-3xl mx-auto rounded-3xl"
      style={{
        background: "var(--aura-bg-card)",
        border: "1px solid var(--aura-border-strong)",
        boxShadow: "var(--shadow-lg)",
        padding: 0,
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
              style={{ color: BLUE_DEEP }}
            >
              Análise industrial
            </span>
          </div>
          <span
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold"
            style={{
              background: BLUE_SOFT,
              color: BLUE_DEEP,
              border: "1px solid rgba(14, 33, 82, 0.18)",
            }}
          >
            <IconFactory size={14} />
            A4 média tensão · 2026
          </span>
        </div>

        {/* Slider conta */}
        <div className="mb-7">
          <label
            className="block text-sm font-semibold mb-3"
            style={{ color: BLUE_DEEP }}
          >
            Quanto sua planta paga por mês na conta de luz?
          </label>

          <div className="flex items-end gap-3 mb-4">
            <span
              className="text-2xl font-bold"
              style={{ color: BLUE_DEEP }}
            >
              R$
            </span>
            <input
              type="number"
              min={5000}
              max={500000}
              step={1000}
              value={conta}
              onChange={(e) => {
                const v = Number(e.target.value);
                setConta(Number.isFinite(v) ? v : 0);
              }}
              className="text-4xl sm:text-6xl font-extrabold bg-transparent border-0 outline-0 w-full counter-tabular tracking-tight"
              style={{ color: BLUE_DEEP, minWidth: 0 }}
            />
            <span className="text-base font-medium text-[var(--aura-text-muted)] mb-2 whitespace-nowrap">
              /mês
            </span>
          </div>

          <input
            type="range"
            min={5000}
            max={150000}
            step={1000}
            value={Math.min(Math.max(conta, 5000), 150000)}
            onChange={(e) => setConta(Number(e.target.value))}
            className="w-full cursor-pointer"
            style={{
              height: 6,
              accentColor: "#0E2152",
            }}
          />

          <div className="flex justify-between text-xs text-[var(--aura-text-faded)] mt-2 font-medium">
            <span>R$ 5k</span>
            <span>R$ 50k</span>
            <span>R$ 150k</span>
          </div>
        </div>

        {/* Resultados — análise executiva */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-5">
          <BlocoExec
            icon={<IconChart size={20} />}
            label="Economia mensal"
            value={
              <AnimatedCounter
                value={resultado.economiaMes}
                prefix="R$ "
                suffix="/mês"
              />
            }
            destaque
          />
          <BlocoExec
            icon={<IconClock size={20} />}
            label="Payback projetado"
            value={paybackTexto(resultado.paybackAnos)}
          />
          <BlocoExec
            icon={<IconTrending size={20} />}
            label="TIR projetada"
            value={tirTexto(resultado.tirProjetada)}
            highlight
          />
          <BlocoExec
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
                  {resultado.numPaineis} painéis
                </span>
              </>
            }
          />
        </div>

        {/* Comparação Solar vs CDB */}
        <div
          className="rounded-xl p-4 mb-5"
          style={{
            background:
              "linear-gradient(135deg, rgba(14, 33, 82, 0.04) 0%, var(--aura-yellow-tint) 100%)",
            border: "1px solid rgba(14, 33, 82, 0.12)",
          }}
        >
          <div
            className="text-[10px] font-bold uppercase tracking-widest mb-2"
            style={{ color: BLUE_DEEP }}
          >
            Comparativo · 25 anos
          </div>
          <div className="grid grid-cols-3 gap-3">
            <div>
              <div className="text-[10px] text-[var(--aura-text-muted)] mb-1">
                Investimento
              </div>
              <div
                className="text-base sm:text-lg font-extrabold counter-tabular leading-none"
                style={{ color: BLUE_DEEP }}
              >
                {formatBRL(resultado.investimento)}
              </div>
            </div>
            <div>
              <div className="text-[10px] text-[var(--aura-text-muted)] mb-1">
                Economia 25 anos
              </div>
              <div
                className="text-base sm:text-lg font-extrabold counter-tabular leading-none"
                style={{ color: "#15803D" }}
              >
                {formatBRL(resultado.economia25Anos)}
              </div>
            </div>
            <div>
              <div className="text-[10px] text-[var(--aura-text-muted)] mb-1">
                Solar vs CDB 9%
              </div>
              <div
                className="text-base sm:text-lg font-extrabold counter-tabular leading-none"
                style={{
                  color: resultado.ganhoVsCDB > 0 ? "#15803D" : BLUE_DEEP,
                }}
              >
                {resultado.ganhoVsCDB > 0 ? "+" : ""}
                {resultado.ganhoVsCDB}%
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="text-[11px] text-[var(--aura-text-muted)] mb-4 leading-relaxed">
          Estimativa preliminar pra classe A4 média tensão (tarifa média
          R$ 0,68/kWh com TUSD+TE+tributos), considerando Lei 14.300 com Fio B
          60% em 2026 e irradiação solar de Palmas (5,9 kWh/m²/dia). TIR e
          payback exatos dependem de demanda contratada, fator de potência,
          horário de operação e ICMS subsidiado pelo Convênio 16/15 do
          Tocantins — variáveis tratadas na proposta executiva.
        </p>

        <a
          href={linkWhats}
          target="_blank"
          rel="noopener"
          className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 rounded-2xl text-base sm:text-lg font-bold text-white transition-all duration-300 hover:-translate-y-0.5"
          style={{
            background: BLUE_DEEP,
            boxShadow: "0 16px 40px -12px rgba(14, 33, 82, 0.45)",
          }}
        >
          <IconWhatsApp size={22} />
          Quero proposta executiva pra minha planta
        </a>
      </div>
    </div>
  );
}

function BlocoExec({
  icon,
  label,
  value,
  destaque = false,
  highlight = false,
}: {
  icon: React.ReactNode;
  label: string;
  value: React.ReactNode;
  destaque?: boolean;
  highlight?: boolean;
}) {
  const baseStyles = destaque
    ? {
        background:
          "linear-gradient(135deg, var(--aura-blue-deep) 0%, var(--aura-blue) 100%)",
        color: "white",
        borderColor: "var(--aura-blue-deep)",
      }
    : highlight
    ? {
        background:
          "linear-gradient(135deg, rgba(255,246,220,1) 0%, rgba(255,236,180,1) 100%)",
        color: "var(--aura-yellow-deep)",
        borderColor: "rgba(245, 188, 44, 0.30)",
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
      style={baseStyles}
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
