"use client";

import { useEffect, useState, useCallback } from "react";
import { IconCheck, IconMapPin } from "../Icons";

// Carrossel de casos para o hero das LPs B2B (comercio, industria, rural).
// Substitui card estatico de 1 caso por 3 casos em rotacao automatica.
// Mobile-first: prioridade visual em viewport pequeno (60%+ dos acessos).

export type Caso = {
  tipo: string; // "Lanchonete", "Padaria", "Mercado" etc
  cidade: string; // "Palmas-TO", "Paraiso-TO"
  kwp: number;
  contaAntes: number;
  contaDepois: number;
  payback: string; // "3,1 anos" ou "Pronaf 3,8 anos"
  metricaExtra?: { label: string; valor: string }; // ex: TIR, ROI, "Em 25 anos"
  badge?: "real" | "tipo"; // "Caso real Aura" vs "Caso-tipo"
};

type Props = {
  casos: Caso[];
  cor: string; // accent color: var(--aura-yellow-deep), var(--aura-blue-deep), #15803D
  corSoft: string; // accent soft
  ariaLabel: string; // "Casos comerciais Aura", etc
};

const ROTATE_MS = 7000;

function fmtBRL(n: number): string {
  if (n >= 1000000) return `R$ ${(n / 1000000).toFixed(1).replace(".", ",")} mi`;
  return `R$ ${n.toLocaleString("pt-BR")}`;
}

export default function HeroCarrosselCasos({ casos, cor, corSoft, ariaLabel }: Props) {
  const [idx, setIdx] = useState(0);
  const [pausado, setPausado] = useState(false);

  const total = casos.length;

  const proximo = useCallback(() => {
    setIdx((i) => (i + 1) % total);
  }, [total]);

  useEffect(() => {
    if (pausado || total <= 1) return;
    const id = setInterval(proximo, ROTATE_MS);
    return () => clearInterval(id);
  }, [pausado, proximo, total]);

  // Swipe handlers mobile (touch)
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const onTouchStart = (e: React.TouchEvent) => setTouchStart(e.touches[0].clientX);
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const dx = e.changedTouches[0].clientX - touchStart;
    if (Math.abs(dx) > 50) {
      if (dx < 0) setIdx((i) => (i + 1) % total);
      else setIdx((i) => (i - 1 + total) % total);
    }
    setTouchStart(null);
  };

  const caso = casos[idx];
  const economia = caso.contaAntes - caso.contaDepois;
  const economia25anos = economia * 12 * 25;

  return (
    <div
      className="glow-border"
      role="region"
      aria-label={ariaLabel}
      aria-live="polite"
      onMouseEnter={() => setPausado(true)}
      onMouseLeave={() => setPausado(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div className="glow-border-inner relative">
        {/* Header · badge tipo + cidade + indicador de caso */}
        <div className="flex items-start justify-between gap-3 mb-5">
          <div className="flex-1 min-w-0">
            <span
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest"
              style={{
                background: corSoft,
                color: cor,
              }}
            >
              {caso.badge === "real" ? "Caso real Aura" : "Caso-tipo"}
            </span>
            <div className="mt-2.5 flex items-baseline gap-2 flex-wrap">
              <span
                className="text-xl sm:text-2xl font-extrabold leading-tight"
                style={{ color: cor }}
              >
                {caso.tipo}
              </span>
              <span className="inline-flex items-center gap-1 text-xs text-[var(--aura-text-muted)]">
                <IconMapPin size={12} />
                {caso.cidade}
              </span>
            </div>
          </div>
          {/* Indicador caso N de N */}
          <span className="text-[10px] font-bold text-[var(--aura-text-muted)] whitespace-nowrap mt-1">
            {idx + 1}/{total}
          </span>
        </div>

        {/* Hero number · economia mensal grande */}
        <div className="mb-5">
          <div className="text-[10px] font-bold uppercase tracking-widest text-[var(--aura-text-muted)] mb-1">
            Economia mensal
          </div>
          <div
            className="text-4xl sm:text-5xl font-extrabold counter-tabular leading-none"
            style={{ color: "#15803D" }}
          >
            {fmtBRL(economia)}
          </div>
          <div className="text-sm text-[var(--aura-text-muted)] mt-1.5">
            Payback{" "}
            <strong className="text-[var(--aura-text)]">{caso.payback}</strong>
          </div>
        </div>

        {/* Detalhes do caso · grid 2 colunas mobile-friendly */}
        <div className="grid grid-cols-2 gap-3 mb-5 pb-5 border-b border-[var(--aura-border)]">
          <Bloco
            label="Sistema"
            valor={`${caso.kwp} kWp`}
            cor="var(--aura-text)"
          />
          {caso.metricaExtra && (
            <Bloco
              label={caso.metricaExtra.label}
              valor={caso.metricaExtra.valor}
              cor={cor}
            />
          )}
          <Bloco
            label="Conta antes"
            valor={fmtBRL(caso.contaAntes)}
            cor="var(--aura-text-muted)"
            risco
          />
          <Bloco
            label="Conta depois"
            valor={fmtBRL(caso.contaDepois)}
            cor={cor}
            destaque
          />
        </div>

        {/* Footer · 25 anos */}
        <div className="flex items-center justify-between mb-5">
          <span className="text-[11px] font-bold uppercase tracking-widest text-[var(--aura-text-muted)]">
            Em 25 anos
          </span>
          <span
            className="text-xl font-extrabold counter-tabular"
            style={{ color: "var(--aura-blue-deep)" }}
          >
            {fmtBRL(economia25anos)}
          </span>
        </div>

        {/* Navegacao · dots */}
        <div className="flex items-center justify-center gap-2 pt-3 border-t border-[var(--aura-border)]">
          {casos.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIdx(i)}
              aria-label={`Ver caso ${i + 1}`}
              className="transition-all"
              style={{
                width: i === idx ? 24 : 8,
                height: 8,
                borderRadius: 4,
                background: i === idx ? cor : "var(--aura-border-strong)",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function Bloco({
  label,
  valor,
  cor,
  destaque = false,
  risco = false,
}: {
  label: string;
  valor: string;
  cor: string;
  destaque?: boolean;
  risco?: boolean;
}) {
  return (
    <div>
      <div className="text-[10px] font-bold uppercase tracking-widest text-[var(--aura-text-muted)] mb-1">
        {label}
      </div>
      <div
        className={`counter-tabular leading-none ${
          destaque ? "text-2xl font-extrabold" : "text-base font-bold"
        } ${risco ? "line-through opacity-60" : ""}`}
        style={{ color: cor }}
      >
        {valor}
      </div>
    </div>
  );
}
