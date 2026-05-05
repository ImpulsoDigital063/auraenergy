"use client";

import { useMemo, useState } from "react";
import {
  briefingDefaults,
  CLIENTE_ALVO_OPCOES,
  COBERTURA_OPCOES,
  ENGENHEIRO_OPCOES,
  INVERSORES_OPCOES,
  PAGAMENTO_OPCOES,
  PAINEIS_OPCOES,
  POSICIONAMENTO_OPCOES,
  SERVICOS_OPCOES,
  type BriefingData,
} from "@/lib/briefing-schema";
import { IconCheck, IconArrowRight, IconWhatsApp, IconSparkles } from "./Icons";

const TOTAL_CARDS = 10;

export default function BriefingForm() {
  const [data, setData] = useState<BriefingData>(briefingDefaults);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Progresso baseado em cards "completos" (heuristic simples)
  const progress = useMemo(() => {
    let completed = 0;
    if (data.servicos.length > 0) completed++;
    if (data.paineis.length > 0 || data.inversores.length > 0) completed++;
    if (data.ticketResidencialMin > 0 && data.prazoMedioDias > 0 && data.pagamento.length > 0) completed++;
    if (data.engenheiroResponsavel) completed++;
    if (data.cobertura) completed++;
    if (data.clienteAlvoTop3.length > 0 && data.dorReal.length >= 10) completed++;
    if (data.posicionamento) completed++;
    if (data.meta90Dias.length >= 5) completed++;
    if (data.fotosEquipe + data.fotosInstalacoes + data.videos > 0 || data.imagensDrone) completed++;
    if (data.nome.length >= 2 && data.whatsapp.length >= 8) completed++;
    return completed;
  }, [data]);

  const update = <K extends keyof BriefingData>(key: K, value: BriefingData[K]) => {
    setData((prev) => ({ ...prev, [key]: value }));
  };

  const toggleArrayItem = (
    key: "servicos" | "paineis" | "inversores" | "pagamento" | "clienteAlvoTop3",
    item: string
  ) => {
    const current = data[key] as string[];
    if (current.includes(item)) {
      update(key, current.filter((x) => x !== item) as never);
    } else {
      // limit clienteAlvoTop3 to 3
      if (key === "clienteAlvoTop3" && current.length >= 3) return;
      update(key, [...current, item] as never);
    }
  };

  const handleSubmit = async () => {
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch("/api/briefing/submit", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.error || "Erro ao enviar");
      }
      setSuccess(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (e) {
      setError(e instanceof Error ? e.message : "Erro desconhecido");
    } finally {
      setSubmitting(false);
    }
  };

  const canSubmit =
    data.servicos.length > 0 &&
    data.dorReal.length >= 10 &&
    data.meta90Dias.length >= 5 &&
    data.nome.length >= 2 &&
    data.whatsapp.length >= 8 &&
    data.posicionamento &&
    data.cobertura &&
    data.engenheiroResponsavel;

  if (success) {
    return <SuccessScreen />;
  }

  return (
    <div className="space-y-6">
      {/* Progress bar sticky no topo */}
      <div
        className="sticky top-16 sm:top-20 z-40 -mx-4 sm:mx-0 px-4 py-3 backdrop-blur-md"
        style={{
          background: "rgba(255, 254, 242, 0.92)",
          borderBottom: "1px solid var(--aura-border)",
        }}
      >
        <div className="flex items-center justify-between text-xs sm:text-sm font-semibold text-[var(--aura-text-soft)] mb-2">
          <span>Progresso</span>
          <span className="text-[var(--aura-blue)] counter-tabular">
            {progress} de {TOTAL_CARDS}
          </span>
        </div>
        <div className="h-2 bg-[var(--aura-bg-soft)] rounded-full overflow-hidden">
          <div
            className="h-full transition-all duration-500"
            style={{
              width: `${(progress / TOTAL_CARDS) * 100}%`,
              background:
                "linear-gradient(90deg, var(--aura-yellow) 0%, var(--aura-orange) 100%)",
            }}
          />
        </div>
      </div>

      {/* CARD 1 — Serviços */}
      <Card numero={1} titulo="Serviços que a Aura vai oferecer">
        <p className="text-sm text-[var(--aura-text-muted)] mb-4">
          Marque tudo que faz parte da sua operação Aura — pode ser tudo que já
          presta hoje ou vai começar a prestar.
        </p>
        <div className="grid sm:grid-cols-2 gap-2">
          {SERVICOS_OPCOES.map((s) => (
            <CheckboxRow
              key={s}
              label={s}
              checked={data.servicos.includes(s)}
              onToggle={() => toggleArrayItem("servicos", s)}
            />
          ))}
        </div>
        <TextInput
          label="Outro serviço (se tiver)"
          value={data.servicosOutro || ""}
          onChange={(v) => update("servicosOutro", v)}
          placeholder="Algo que não está na lista?"
        />
      </Card>

      {/* CARD 2 — Equipamentos */}
      <Card numero={2} titulo="Equipamentos que você usa / vai usar">
        <p className="text-sm text-[var(--aura-text-muted)] mb-4">
          Marque marcas que você trabalha hoje E que pretende oferecer na Aura.
        </p>
        <div className="space-y-4">
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-[var(--aura-text-muted)] mb-2">
              Painéis
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {PAINEIS_OPCOES.map((p) => (
                <CheckboxRow
                  key={p}
                  label={p}
                  compact
                  checked={data.paineis.includes(p)}
                  onToggle={() => toggleArrayItem("paineis", p)}
                />
              ))}
            </div>
            <TextInput
              label="Outro painel"
              value={data.paineisOutro || ""}
              onChange={(v) => update("paineisOutro", v)}
              compact
            />
          </div>

          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-[var(--aura-text-muted)] mb-2">
              Inversores
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {INVERSORES_OPCOES.map((i) => (
                <CheckboxRow
                  key={i}
                  label={i}
                  compact
                  checked={data.inversores.includes(i)}
                  onToggle={() => toggleArrayItem("inversores", i)}
                />
              ))}
            </div>
            <TextInput
              label="Outro inversor"
              value={data.inversoresOutro || ""}
              onChange={(v) => update("inversoresOutro", v)}
              compact
            />
          </div>
        </div>
      </Card>

      {/* CARD 3 — Comercial */}
      <Card numero={3} titulo="Comercial — preço, prazo, pagamento">
        <div className="space-y-5">
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-[var(--aura-text-muted)] mb-3">
              Faixa de ticket residencial
            </div>
            <div className="grid grid-cols-2 gap-3">
              <NumberInput
                label="Mínimo (R$)"
                value={data.ticketResidencialMin}
                onChange={(v) => update("ticketResidencialMin", v)}
              />
              <NumberInput
                label="Máximo (R$)"
                value={data.ticketResidencialMax}
                onChange={(v) => update("ticketResidencialMax", v)}
              />
            </div>
          </div>

          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-[var(--aura-text-muted)] mb-3">
              Faixa de ticket comercial
            </div>
            <div className="grid grid-cols-2 gap-3">
              <NumberInput
                label="Mínimo (R$)"
                value={data.ticketComercialMin}
                onChange={(v) => update("ticketComercialMin", v)}
              />
              <NumberInput
                label="Máximo (R$)"
                value={data.ticketComercialMax}
                onChange={(v) => update("ticketComercialMax", v)}
              />
            </div>
          </div>

          <NumberInput
            label="Prazo médio do orçamento à entrega final (dias)"
            value={data.prazoMedioDias}
            onChange={(v) => update("prazoMedioDias", v)}
          />

          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-[var(--aura-text-muted)] mb-2">
              Modalidades de pagamento que oferece
            </div>
            <div className="space-y-2">
              {PAGAMENTO_OPCOES.map((p) => (
                <CheckboxRow
                  key={p}
                  label={p}
                  checked={data.pagamento.includes(p)}
                  onToggle={() => toggleArrayItem("pagamento", p)}
                />
              ))}
            </div>
            <TextInput
              label="Outra modalidade"
              value={data.pagamentoOutro || ""}
              onChange={(v) => update("pagamentoOutro", v)}
              compact
            />
          </div>
        </div>
      </Card>

      {/* CARD 4 — Técnico */}
      <Card numero={4} titulo="Engenheiro responsável (CREA-TO)">
        <p className="text-sm text-[var(--aura-text-muted)] mb-4">
          Quem assina ART em todo projeto?
        </p>
        <div className="space-y-2 mb-4">
          {ENGENHEIRO_OPCOES.map((e) => (
            <RadioRow
              key={e}
              label={e}
              checked={data.engenheiroResponsavel === e}
              onSelect={() => update("engenheiroResponsavel", e)}
            />
          ))}
        </div>
        <TextInput
          label="Nome do engenheiro"
          value={data.engenheiroNome || ""}
          onChange={(v) => update("engenheiroNome", v)}
        />
        <TextInput
          label="CREA-TO nº"
          value={data.engenheiroCrea || ""}
          onChange={(v) => update("engenheiroCrea", v)}
          placeholder="Ex: 12345"
        />
      </Card>

      {/* CARD 5 — Operação */}
      <Card numero={5} titulo="Operação atual + cobertura Aura">
        <div className="space-y-4">
          <NumberInput
            label="Anos da Brasfrio em Palmas"
            value={data.anosBrasfrio}
            onChange={(v) => update("anosBrasfrio", v)}
          />
          <NumberInput
            label="Quantas instalações solar a Brasfrio já fez (estimativa)"
            value={data.numInstalacoes}
            onChange={(v) => update("numInstalacoes", v)}
          />
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-[var(--aura-text-muted)] mb-2">
              Cobertura geográfica que a Aura vai atender
            </div>
            <div className="space-y-2">
              {COBERTURA_OPCOES.map((c) => (
                <RadioRow
                  key={c}
                  label={c}
                  checked={data.cobertura === c}
                  onSelect={() => update("cobertura", c)}
                />
              ))}
            </div>
          </div>
        </div>
      </Card>

      {/* CARD 6 — Cliente-alvo + DOR */}
      <Card numero={6} titulo="Cliente-alvo + a dor que você quer resolver">
        <p className="text-sm text-[var(--aura-text-muted)] mb-4">
          Marque os <strong>3 perfis mais importantes</strong> (em ordem que
          você marcar = ordem de prioridade).
        </p>
        <div className="space-y-2 mb-5">
          {CLIENTE_ALVO_OPCOES.map((c, i) => {
            const idx = data.clienteAlvoTop3.indexOf(c);
            const checked = idx >= 0;
            const disabled = !checked && data.clienteAlvoTop3.length >= 3;
            return (
              <button
                key={c}
                type="button"
                onClick={() => toggleArrayItem("clienteAlvoTop3", c)}
                disabled={disabled}
                className={`w-full text-left flex items-center gap-3 p-3 rounded-xl border transition-all ${
                  checked
                    ? "border-[var(--aura-yellow)] bg-[var(--aura-yellow-tint)]"
                    : disabled
                    ? "opacity-50 cursor-not-allowed border-[var(--aura-border)] bg-[var(--aura-bg-soft)]"
                    : "border-[var(--aura-border)] bg-white hover:border-[var(--aura-yellow)]/40"
                }`}
              >
                <span
                  className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 ${
                    checked
                      ? "bg-[var(--aura-yellow)] text-[var(--aura-blue-deep)]"
                      : "bg-[var(--aura-bg-soft)] text-[var(--aura-text-muted)]"
                  }`}
                >
                  {checked ? idx + 1 : "—"}
                </span>
                <span className="text-sm font-medium text-[var(--aura-text)]">{c}</span>
              </button>
            );
          })}
        </div>

        <Textarea
          label="⚡ Em 1-2 frases: qual problema você quer resolver criando a Aura?"
          value={data.dorReal}
          onChange={(v) => update("dorReal", v)}
          placeholder="Ex: não consigo captar lead novo, dependo do boca-a-boca da Brasfrio que tá esgotando..."
          rows={4}
          highlight
        />
      </Card>

      {/* CARD 7 — Posicionamento */}
      <Card numero={7} titulo="Como a Aura se posiciona em relação à Brasfrio?">
        <div className="space-y-2">
          {POSICIONAMENTO_OPCOES.map((p) => (
            <RadioRow
              key={p}
              label={p}
              checked={data.posicionamento === p}
              onSelect={() => update("posicionamento", p)}
              big
            />
          ))}
        </div>
      </Card>

      {/* CARD 8 — Investimento + Meta */}
      <Card numero={8} titulo="Investimento + meta de 90 dias">
        <NumberInput
          label="Investimento mensal disponível pra digital (Meta Ads, ferramentas)"
          value={data.investimentoMensal}
          onChange={(v) => update("investimentoMensal", v)}
          prefix="R$"
          suffix="/mês"
        />
        <Textarea
          label="🎯 Onde você quer estar daqui 3 meses?"
          value={data.meta90Dias}
          onChange={(v) => update("meta90Dias", v)}
          placeholder="Ex: 5 vendas/mês, faturando R$ 100k, com 2 vendedores..."
          rows={3}
          highlight
        />
      </Card>

      {/* CARD 9 — Materiais */}
      <Card numero={9} titulo="Materiais que você já tem disponível">
        <div className="grid sm:grid-cols-2 gap-3">
          <NumberInput
            label="Fotos da equipe trabalhando"
            value={data.fotosEquipe}
            onChange={(v) => update("fotosEquipe", v)}
            compact
          />
          <NumberInput
            label="Fotos de instalações concluídas"
            value={data.fotosInstalacoes}
            onChange={(v) => update("fotosInstalacoes", v)}
            compact
          />
          <NumberInput
            label="Vídeos"
            value={data.videos}
            onChange={(v) => update("videos", v)}
            compact
          />
          <NumberInput
            label="Depoimentos texto"
            value={data.depoimentosTexto}
            onChange={(v) => update("depoimentosTexto", v)}
            compact
          />
          <NumberInput
            label="Depoimentos vídeo"
            value={data.depoimentosVideo}
            onChange={(v) => update("depoimentosVideo", v)}
            compact
          />
          <NumberInput
            label="Antes/depois de conta de luz real"
            value={data.contasAntesDepois}
            onChange={(v) => update("contasAntesDepois", v)}
            compact
          />
        </div>
        <div className="mt-3">
          <CheckboxRow
            label="Tem imagens de drone das obras"
            checked={data.imagensDrone}
            onToggle={() => update("imagensDrone", !data.imagensDrone)}
          />
        </div>
      </Card>

      {/* CARD 10 — Restrições + identificação */}
      <Card numero={10} titulo="Restrições + sua identificação">
        <Textarea
          label="Tem algo que você NÃO quer fazer? (opcional)"
          value={data.restricoes || ""}
          onChange={(v) => update("restricoes", v)}
          placeholder="Ex: não quero mencionar Brasfrio publicamente, não respondo cliente depois das 19h..."
          rows={3}
        />
        <div className="grid sm:grid-cols-2 gap-3 mt-4">
          <TextInput
            label="Como podemos te chamar?"
            value={data.nome}
            onChange={(v) => update("nome", v)}
            placeholder="Renato Edson"
            required
          />
          <TextInput
            label="WhatsApp pra confirmar recebimento"
            value={data.whatsapp}
            onChange={(v) => update("whatsapp", v)}
            placeholder="(63) 9 9268-8852"
            required
          />
        </div>
      </Card>

      {/* SUBMIT */}
      <div className="pt-6 pb-12 text-center space-y-4">
        {error && (
          <div
            className="p-4 rounded-xl text-sm"
            style={{
              background: "rgba(239, 68, 68, 0.10)",
              border: "1px solid rgba(239, 68, 68, 0.30)",
              color: "#dc2626",
            }}
          >
            {error}
          </div>
        )}

        <button
          type="button"
          onClick={handleSubmit}
          disabled={!canSubmit || submitting}
          className={`w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-5 rounded-2xl text-base sm:text-lg font-bold transition-all ${
            canSubmit && !submitting
              ? "btn-yellow btn-pulse"
              : "opacity-50 cursor-not-allowed bg-[var(--aura-bg-soft)] text-[var(--aura-text-muted)]"
          }`}
        >
          {submitting ? (
            <>Enviando...</>
          ) : (
            <>
              <IconSparkles size={22} />
              Enviar briefing pro Eduardo
              <IconArrowRight size={20} />
            </>
          )}
        </button>

        {!canSubmit && !submitting && (
          <p className="text-xs text-[var(--aura-text-muted)]">
            Preencha pelo menos os campos obrigatórios pra enviar
          </p>
        )}
      </div>
    </div>
  );
}

// =====================================================================
// COMPONENTES AUXILIARES
// =====================================================================

function Card({
  numero,
  titulo,
  children,
}: {
  numero: number;
  titulo: string;
  children: React.ReactNode;
}) {
  return (
    <section className="premium-card p-6 sm:p-8">
      <div className="flex items-center gap-3 mb-5">
        <span
          className="w-10 h-10 rounded-xl flex items-center justify-center font-extrabold text-sm flex-shrink-0"
          style={{
            background:
              "linear-gradient(135deg, var(--aura-yellow) 0%, var(--aura-orange) 100%)",
            color: "var(--aura-blue-deep)",
          }}
        >
          {numero}
        </span>
        <h2 className="text-xl sm:text-2xl font-bold text-[var(--aura-text)] leading-tight">
          {titulo}
        </h2>
      </div>
      {children}
    </section>
  );
}

function CheckboxRow({
  label,
  checked,
  onToggle,
  compact = false,
}: {
  label: string;
  checked: boolean;
  onToggle: () => void;
  compact?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className={`w-full text-left flex items-center gap-3 ${
        compact ? "p-2.5" : "p-3"
      } rounded-xl border transition-all ${
        checked
          ? "border-[var(--aura-yellow)] bg-[var(--aura-yellow-tint)]"
          : "border-[var(--aura-border)] bg-white hover:border-[var(--aura-yellow)]/40"
      }`}
    >
      <span
        className={`w-5 h-5 rounded-md border-2 flex items-center justify-center flex-shrink-0 ${
          checked
            ? "bg-[var(--aura-yellow)] border-[var(--aura-yellow)] text-[var(--aura-blue-deep)]"
            : "border-[var(--aura-border-strong)]"
        }`}
      >
        {checked && <IconCheck size={14} strokeWidth={3} />}
      </span>
      <span className={`${compact ? "text-xs sm:text-sm" : "text-sm"} font-medium text-[var(--aura-text)]`}>
        {label}
      </span>
    </button>
  );
}

function RadioRow({
  label,
  checked,
  onSelect,
  big = false,
}: {
  label: string;
  checked: boolean;
  onSelect: () => void;
  big?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`w-full text-left flex items-start gap-3 ${
        big ? "p-4" : "p-3"
      } rounded-xl border transition-all ${
        checked
          ? "border-[var(--aura-yellow)] bg-[var(--aura-yellow-tint)]"
          : "border-[var(--aura-border)] bg-white hover:border-[var(--aura-yellow)]/40"
      }`}
    >
      <span
        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5 ${
          checked
            ? "border-[var(--aura-yellow)]"
            : "border-[var(--aura-border-strong)]"
        }`}
      >
        {checked && (
          <span className="w-2.5 h-2.5 rounded-full bg-[var(--aura-yellow)]" />
        )}
      </span>
      <span className={`${big ? "text-sm sm:text-base" : "text-sm"} font-medium text-[var(--aura-text)] leading-relaxed`}>
        {label}
      </span>
    </button>
  );
}

function TextInput({
  label,
  value,
  onChange,
  placeholder,
  required,
  compact = false,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  required?: boolean;
  compact?: boolean;
}) {
  return (
    <label className={`block ${compact ? "mt-2" : "mt-4"}`}>
      <span className="block text-xs font-bold uppercase tracking-widest text-[var(--aura-text-muted)] mb-2">
        {label}{required && " *"}
      </span>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="form-input"
      />
      <style>{`
        .form-input {
          width: 100%;
          padding: 0.75rem 1rem;
          background: var(--aura-bg-soft);
          border: 1px solid var(--aura-border);
          border-radius: 12px;
          font-size: 16px;
          color: var(--aura-text);
          transition: all 0.2s ease;
          outline: none;
        }
        .form-input::placeholder { color: var(--aura-text-faded); }
        .form-input:focus {
          background: white;
          border-color: var(--aura-yellow);
          box-shadow: 0 0 0 4px rgba(245, 188, 44, 0.12);
        }
      `}</style>
    </label>
  );
}

function Textarea({
  label,
  value,
  onChange,
  placeholder,
  rows = 3,
  highlight = false,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  rows?: number;
  highlight?: boolean;
}) {
  return (
    <label className={`block mt-4 ${highlight ? "p-4 rounded-2xl" : ""}`}
      style={highlight ? { background: "var(--aura-yellow-tint)", border: "1px solid rgba(245,188,44,0.30)" } : undefined}
    >
      <span className="block text-xs font-bold uppercase tracking-widest text-[var(--aura-text-muted)] mb-2">
        {label}
      </span>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={rows}
        className="form-textarea"
      />
      <style>{`
        .form-textarea {
          width: 100%;
          padding: 0.75rem 1rem;
          background: white;
          border: 1px solid var(--aura-border);
          border-radius: 12px;
          font-size: 16px;
          font-family: inherit;
          color: var(--aura-text);
          transition: all 0.2s ease;
          outline: none;
          resize: vertical;
          line-height: 1.5;
        }
        .form-textarea::placeholder { color: var(--aura-text-faded); }
        .form-textarea:focus {
          border-color: var(--aura-yellow);
          box-shadow: 0 0 0 4px rgba(245, 188, 44, 0.12);
        }
      `}</style>
    </label>
  );
}

function NumberInput({
  label,
  value,
  onChange,
  prefix,
  suffix,
  compact = false,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
  prefix?: string;
  suffix?: string;
  compact?: boolean;
}) {
  return (
    <label className={`block ${compact ? "" : "mt-4"}`}>
      <span className="block text-xs font-bold uppercase tracking-widest text-[var(--aura-text-muted)] mb-2">
        {label}
      </span>
      <div className="relative flex items-center gap-2">
        {prefix && (
          <span className="text-sm font-semibold text-[var(--aura-text-muted)]">{prefix}</span>
        )}
        <input
          type="number"
          inputMode="numeric"
          value={value}
          onChange={(e) => onChange(Number(e.target.value) || 0)}
          className="form-input flex-1"
          min={0}
        />
        {suffix && (
          <span className="text-sm font-semibold text-[var(--aura-text-muted)]">{suffix}</span>
        )}
      </div>
    </label>
  );
}

function SuccessScreen() {
  return (
    <div className="text-center py-20">
      <div className="inline-block mb-8">
        <div
          className="w-24 h-24 rounded-full flex items-center justify-center mx-auto"
          style={{
            background:
              "linear-gradient(135deg, #10F19F 0%, #34d399 100%)",
            color: "white",
            boxShadow: "0 20px 50px -10px rgba(16, 241, 159, 0.45)",
          }}
        >
          <IconCheck size={48} strokeWidth={3} />
        </div>
      </div>
      <h2 className="text-3xl sm:text-4xl font-bold text-[var(--aura-text)] mb-4">
        Briefing recebido. <span className="text-gradient-aura">Tô preparando seu plano.</span>
      </h2>
      <p className="text-lg text-[var(--aura-text-soft)] max-w-xl mx-auto leading-relaxed mb-8">
        Em até 2 dias úteis você recebe o plano de negócio Aura completo no
        WhatsApp. Estratégia digital, plano de Instagram, plano de tráfego pago,
        cronograma de 90 dias.
      </p>
      <a
        href="https://wa.me/5563992688852?text=Briefing+enviado%2C+aguardando+plano+de+neg%C3%B3cio."
        target="_blank"
        rel="noopener"
        className="btn-yellow inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl text-base font-bold"
      >
        <IconWhatsApp size={20} />
        Confirmar no WhatsApp do Eduardo
      </a>
    </div>
  );
}
