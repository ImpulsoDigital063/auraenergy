"use client";

import { useEffect, useRef, useState } from "react";
import {
  briefingSchema,
  briefingDefaults,
  type BriefingData,
  MARCAS_MODULO,
  MARCAS_INVERSOR,
  MARCAS_BATERIA,
  BANCOS_SOLAR,
  VIBE_MARCA,
  POSICIONAMENTO_12M,
  ORIGEM_LEAD,
  OBJECAO_FECHAMENTO,
  DOR_INICIAL,
  ARG_COMERCIAL,
  ARG_INDUSTRIAL,
  BLOQUEIO_RURAL,
  TEMPO_DIA,
  QUEM_RESPONDE_WPP,
  CANAL_CAPTACAO,
  GARANTIAS_OFERECIDAS,
  CERTIFICACOES,
  BESS_APLICACOES,
  BESS_MARCAS,
  BESS_INVERSOR_HIBRIDO,
  BESS_ARGUMENTO_VENDA,
} from "@/lib/briefing-schema";
import { useRouter } from "next/navigation";

const STORAGE_KEY = "aura-briefing-v3";
const BRIEFING_SLUG = "renato-aura"; // V1: hardcoded · futuro: prop por cliente

const TOTAL_STEPS = 12;

const BLOCOS = [
  { titulo: "Quem responde", subtitulo: "Pra eu confirmar recebimento", emoji: "👤" },
  { titulo: "Operação", subtitulo: "Brasfrio + Aura · números reais", emoji: "🏗" },
  { titulo: "Cliente ideal", subtitulo: "Quem compra, dor, objeção", emoji: "🎯" },
  { titulo: "Posicionamento", subtitulo: "Vibe da marca, concorrentes", emoji: "🎨" },
  { titulo: "Catálogo", subtitulo: "Marcas, kits, garantias", emoji: "⚡" },
  { titulo: "Financiamento", subtitulo: "Bancos parceiros + Pronaf", emoji: "🏦" },
  { titulo: "BESS · Baterias", subtitulo: "Lei 15.269/2025 + peak shaving + Fio B 60%", emoji: "🔋" },
  { titulo: "Heros das LPs", subtitulo: "O que tá no ar hoje · sua sugestão se quiser ajustar", emoji: "🚀" },
  { titulo: "Estratégia 90 dias", subtitulo: "Capacidade, canal, meta", emoji: "📅" },
  { titulo: "Diferenciais", subtitulo: "Garantias, certificações", emoji: "🛡" },
  { titulo: "Co-criação", subtitulo: "Sua hora de propor · não só responder", emoji: "💡" },
  { titulo: "Decisões estratégicas", subtitulo: "Você decide, não a gente", emoji: "✨" },
] as const;

type SaveState = "idle" | "saving" | "saved" | "error";

export default function BriefingForm() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [data, setData] = useState<BriefingData>(briefingDefaults);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [saveState, setSaveState] = useState<SaveState>("idle");
  const [loadedFromServer, setLoadedFromServer] = useState(false);
  const lastSavedHash = useRef<string>("");

  // Load: server primeiro, fallback localStorage
  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch(`/api/briefing/draft?slug=${BRIEFING_SLUG}`, {
          cache: "no-store",
        });
        if (!cancelled && res.ok) {
          const json = await res.json();
          if (json.briefing?.data) {
            setData({ ...briefingDefaults, ...(json.briefing.data as BriefingData) });
            setStep(Math.min(TOTAL_STEPS - 1, json.briefing.progress ?? 0));
            lastSavedHash.current = JSON.stringify(json.briefing.data);
            setLoadedFromServer(true);
            return;
          }
        }
      } catch {}
      // fallback
      try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved && !cancelled) {
          const parsed = JSON.parse(saved);
          setData({ ...briefingDefaults, ...parsed.data });
          setStep(parsed.step ?? 0);
        }
      } catch {}
      if (!cancelled) setLoadedFromServer(true);
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  // localStorage backup
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ data, step }));
    } catch {}
  }, [data, step]);

  function updateField<K extends keyof BriefingData>(key: K, value: BriefingData[K]) {
    setData((prev) => ({ ...prev, [key]: value }));
  }

  function toggleArrayItem(key: keyof BriefingData, value: string) {
    setData((prev) => {
      const current = (prev[key] as string[]) ?? [];
      const next = current.includes(value)
        ? current.filter((v) => v !== value)
        : [...current, value];
      return { ...prev, [key]: next as BriefingData[typeof key] };
    });
  }

  async function persistDraft(): Promise<boolean> {
    const hash = JSON.stringify(data);
    setSaveState("saving");
    setError(null);
    try {
      const res = await fetch("/api/briefing/draft", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          slug: BRIEFING_SLUG,
          name: data.nome || null,
          data,
          progress: step,
          status: "draft",
        }),
      });
      if (!res.ok) throw new Error("falha");
      lastSavedHash.current = hash;
      setSaveState("saved");
      setTimeout(() => setSaveState("idle"), 2500);
      return true;
    } catch {
      setSaveState("error");
      setError(
        "Não consegui salvar esse bloco no servidor. Confere sua conexão e clica em \"💾 Salvar progresso desse bloco\" de novo. Você não vai avançar enquanto não salvar."
      );
      return false;
    }
  }

  async function handleSaveAndNext() {
    const ok = await persistDraft();
    if (!ok) return;
    setStep(Math.min(TOTAL_STEPS - 1, step + 1));
  }

  async function handleSubmit() {
    setError(null);
    const parsed = briefingSchema.safeParse(data);
    if (!parsed.success) {
      const firstIssue = parsed.error.issues[0];
      setError(`Tem algo faltando: ${firstIssue?.message ?? "verifica os campos"}`);
      return;
    }
    setSubmitting(true);
    try {
      // 1. Persiste como completed no Supabase
      await fetch("/api/briefing/draft", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          slug: BRIEFING_SLUG,
          name: data.nome || null,
          data: parsed.data,
          progress: TOTAL_STEPS - 1,
          status: "completed",
        }),
      });
      // 2. Dispara email Resend pro Eduardo
      const res = await fetch("/api/briefing/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      if (!res.ok) throw new Error("Erro ao enviar");
      localStorage.removeItem(STORAGE_KEY);
      router.push("/briefing/obrigado");
    } catch {
      setError("Falha no envio. Tenta de novo ou manda print pro Eduardo no grupo.");
      setSubmitting(false);
    }
  }

  const blocoAtual = BLOCOS[step];
  const isLastStep = step === TOTAL_STEPS - 1;

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[var(--aura-text-muted)]">
            {blocoAtual.emoji} {blocoAtual.titulo}
          </span>
          <span className="text-xs text-[var(--aura-text-muted)]">
            {step + 1} de {TOTAL_STEPS}
          </span>
        </div>
        <div className="h-2 rounded-full overflow-hidden" style={{ background: "rgba(15,27,61,0.10)" }}>
          <div
            className="h-full transition-all duration-500 rounded-full"
            style={{
              width: `${((step + 1) / TOTAL_STEPS) * 100}%`,
              background: "linear-gradient(90deg, var(--aura-blue) 0%, var(--aura-yellow) 100%)",
            }}
          />
        </div>
        <p className="text-sm text-[var(--aura-text-muted)] mt-3">{blocoAtual.subtitulo}</p>
      </div>

      {!loadedFromServer && (
        <p className="text-center text-sm text-[var(--aura-text-muted)] py-12">
          Carregando suas respostas anteriores…
        </p>
      )}

      {loadedFromServer && (
        <div className="space-y-6">
          {step === 0 && <BlocoIdentificacao data={data} update={updateField} />}
          {step === 1 && <Bloco1Operacao data={data} update={updateField} />}
          {step === 2 && <Bloco2ClienteIdeal data={data} update={updateField} toggle={toggleArrayItem} />}
          {step === 3 && <Bloco3Posicionamento data={data} update={updateField} toggle={toggleArrayItem} />}
          {step === 4 && <Bloco4Catalogo data={data} update={updateField} toggle={toggleArrayItem} />}
          {step === 5 && <Bloco5Financiamento data={data} update={updateField} toggle={toggleArrayItem} />}
          {step === 6 && <Bloco6BESS data={data} update={updateField} toggle={toggleArrayItem} />}
          {step === 7 && <Bloco7Heros data={data} update={updateField} toggle={toggleArrayItem} />}
          {step === 8 && <Bloco8Estrategia data={data} update={updateField} toggle={toggleArrayItem} />}
          {step === 9 && <Bloco9Diferenciais data={data} update={updateField} toggle={toggleArrayItem} />}
          {step === 10 && <Bloco10Cocriacao data={data} update={updateField} />}
          {step === 11 && <Bloco11Decisoes data={data} update={updateField} />}
        </div>
      )}

      {/* Botão Salvar Progresso (sempre visível, exceto step final que tem submit) */}
      {loadedFromServer && !isLastStep && (
        <div className="mt-8 pt-6 border-t border-[var(--aura-border)]">
          <button
            type="button"
            onClick={persistDraft}
            disabled={saveState === "saving"}
            className="w-full px-5 py-3 rounded-xl font-semibold text-sm transition-all disabled:opacity-50"
            style={{
              background: saveState === "saved" ? "rgba(34,197,94,0.10)" : "var(--aura-bg-soft)",
              color: saveState === "saved" ? "#16A34A" : "var(--aura-blue)",
              border: `1px solid ${saveState === "saved" ? "rgba(34,197,94,0.30)" : "var(--aura-border)"}`,
            }}
          >
            {saveState === "saving" && "💾 Salvando…"}
            {saveState === "saved" && "✅ Salvo no servidor"}
            {saveState === "error" && "⚠️ Erro · tenta de novo"}
            {saveState === "idle" && "💾 Salvar progresso desse bloco"}
          </button>
        </div>
      )}

      {error && (
        <div className="mt-6 p-4 rounded-lg text-sm" style={{ background: "rgba(220,38,38,0.10)", border: "1px solid rgba(220,38,38,0.30)", color: "#DC2626" }}>
          {error}
        </div>
      )}

      <div className="flex items-center justify-between gap-4 mt-6 pt-6 border-t border-[var(--aura-border)]">
        <button
          type="button"
          onClick={() => setStep(Math.max(0, step - 1))}
          disabled={step === 0 || submitting}
          className="px-5 py-3 rounded-xl font-semibold text-sm transition-opacity disabled:opacity-30"
          style={{ background: "transparent", color: "var(--aura-text-muted)", border: "1px solid var(--aura-border)" }}
        >
          ← Voltar
        </button>

        {isLastStep ? (
          <button
            type="button"
            onClick={handleSubmit}
            disabled={submitting}
            className="px-7 py-3.5 rounded-xl font-bold text-sm transition-all disabled:opacity-40"
            style={{
              background: "linear-gradient(135deg, var(--aura-blue) 0%, var(--aura-yellow-deep) 100%)",
              color: "#fff",
              boxShadow: "0 8px 20px -6px rgba(15,27,61,0.40)",
            }}
          >
            {submitting ? "Enviando…" : "🎯 Enviar briefing"}
          </button>
        ) : (
          <button
            type="button"
            onClick={handleSaveAndNext}
            disabled={saveState === "saving"}
            className="px-7 py-3.5 rounded-xl font-bold text-sm transition-all disabled:opacity-50"
            style={{
              background: "linear-gradient(135deg, var(--aura-blue) 0%, var(--aura-blue-deep) 100%)",
              color: "#fff",
              boxShadow: "0 8px 20px -6px rgba(15,27,61,0.40)",
            }}
          >
            Salvar e próximo →
          </button>
        )}
      </div>

      <p className="text-[11px] text-center text-[var(--aura-text-muted)] mt-4">
        💾 Suas respostas só salvam quando você clica em <strong>Salvar e próximo</strong> (ou no botão de salvar acima). Se aparecer ⚠️, salva de novo antes de avançar. Pode voltar pelo mesmo link.
      </p>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────────────────────────────

function Field({ label, hint, children }: { label: string; hint?: string; children: React.ReactNode }) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-semibold text-[var(--aura-text)]">{label}</label>
      {hint && <p className="text-xs text-[var(--aura-text-muted)] leading-relaxed">{hint}</p>}
      {children}
    </div>
  );
}

const inputStyle =
  "w-full px-4 py-3 rounded-lg text-sm bg-white border border-[var(--aura-border)] focus:outline-none focus:ring-2 focus:ring-[var(--aura-yellow)]/30";

function TextInput({ value, onChange, placeholder }: { value: string; onChange: (v: string) => void; placeholder?: string }) {
  return <input type="text" value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} className={inputStyle} />;
}

function NumberInput({ value, onChange, placeholder, min = 0, max }: { value: number; onChange: (v: number) => void; placeholder?: string; min?: number; max?: number }) {
  return <input type="number" value={value || ""} onChange={(e) => onChange(Number(e.target.value) || 0)} placeholder={placeholder} min={min} max={max} className={inputStyle} />;
}

function Textarea({ value, onChange, placeholder, rows = 4 }: { value: string; onChange: (v: string) => void; placeholder?: string; rows?: number }) {
  return <textarea value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} rows={rows} className={inputStyle + " resize-y"} />;
}

function Checkbox({ checked, onChange, label }: { checked: boolean; onChange: (v: boolean) => void; label: string }) {
  return (
    <label className="flex items-start gap-3 p-3 rounded-lg cursor-pointer hover:bg-[var(--aura-blue)]/5 transition-colors">
      <input type="checkbox" checked={checked} onChange={(e) => onChange(e.target.checked)} className="mt-0.5 w-5 h-5 cursor-pointer accent-[var(--aura-blue)]" />
      <span className="text-sm text-[var(--aura-text)] leading-snug">{label}</span>
    </label>
  );
}

function Radio({ checked, onChange, label }: { checked: boolean; onChange: () => void; label: string }) {
  return (
    <label className="flex items-start gap-3 p-3 rounded-lg cursor-pointer hover:bg-[var(--aura-blue)]/5 transition-colors">
      <input type="radio" checked={checked} onChange={onChange} className="mt-0.5 w-5 h-5 cursor-pointer accent-[var(--aura-blue)]" />
      <span className="text-sm text-[var(--aura-text)] leading-snug">{label}</span>
    </label>
  );
}

// ─────────────────────────────────────────────────────────────────
// BLOCOS
// ─────────────────────────────────────────────────────────────────

type BlocoProps = { data: BriefingData; update: <K extends keyof BriefingData>(key: K, value: BriefingData[K]) => void };
type BlocoToggleProps = BlocoProps & { toggle: (key: keyof BriefingData, value: string) => void };

function BlocoIdentificacao({ data, update }: BlocoProps) {
  return (
    <>
      <Field label="Como te chamamos?" hint="Seu nome / apelido">
        <TextInput value={data.nome} onChange={(v) => update("nome", v)} placeholder="Renato" />
      </Field>
      <Field label="WhatsApp" hint="Pra eu te confirmar quando receber">
        <TextInput value={data.whatsapp} onChange={(v) => update("whatsapp", v)} placeholder="(63) 99999-9999" />
      </Field>
    </>
  );
}

function Bloco1Operacao({ data, update }: BlocoProps) {
  return (
    <>
      <p className="text-sm text-[var(--aura-text-muted)] bg-[var(--aura-blue)]/5 p-4 rounded-lg leading-relaxed">
        Preciso de números duros pra LP comprovar competência. Sem isso, copy fica vazia e cliente desconfia.
      </p>

      <div className="grid grid-cols-2 gap-4">
        <Field label="Anos da Brasfrio">
          <NumberInput value={data.anosBrasfrio} onChange={(v) => update("anosBrasfrio", v)} />
        </Field>
        <Field label="Ano que começou fotovoltaico">
          <NumberInput value={data.anoInicioFotovoltaico} onChange={(v) => update("anoInicioFotovoltaico", v)} min={2000} max={2030} />
        </Field>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Field label="Instalações fotovoltaicas (12m)" hint="Esse é OURO pra LP">
          <NumberInput value={data.instalacoes12m} onChange={(v) => update("instalacoes12m", v)} />
        </Field>
        <Field label="Total kWp instalados (12m)">
          <NumberInput value={data.kwpTotal12m} onChange={(v) => update("kwpTotal12m", v)} />
        </Field>
      </div>

      <Field label="Maior projeto entregue" hint="Ex: '40 kWp pra Cliente X em Palmas, R$120k'">
        <Textarea value={data.maiorProjeto ?? ""} onChange={(v) => update("maiorProjeto", v)} rows={2} />
      </Field>

      <p className="text-xs text-[var(--aura-text-muted)] font-semibold uppercase tracking-wider pt-2">Equipe atual</p>
      <div className="grid grid-cols-3 gap-4">
        <Field label="Técnicos"><NumberInput value={data.numTecnicos} onChange={(v) => update("numTecnicos", v)} /></Field>
        <Field label="Vendas"><NumberInput value={data.numVendas} onChange={(v) => update("numVendas", v)} /></Field>
        <Field label="Admin"><NumberInput value={data.numAdmin} onChange={(v) => update("numAdmin", v)} /></Field>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Field label="CREA-TO PJ"><TextInput value={data.creaTO ?? ""} onChange={(v) => update("creaTO", v)} /></Field>
        <Field label="ART pública"><TextInput value={data.artPublica ?? ""} onChange={(v) => update("artPublica", v)} /></Field>
      </div>

      <p className="text-xs text-[var(--aura-text-muted)] font-semibold uppercase tracking-wider pt-2">Prazo entrega (dias)</p>
      <div className="grid grid-cols-2 gap-4">
        <Field label="Residencial"><NumberInput value={data.prazoEntregaResidencial} onChange={(v) => update("prazoEntregaResidencial", v)} /></Field>
        <Field label="Comercial"><NumberInput value={data.prazoEntregaComercial ?? 0} onChange={(v) => update("prazoEntregaComercial", v)} /></Field>
        <Field label="Industrial"><NumberInput value={data.prazoEntregaIndustrial ?? 0} onChange={(v) => update("prazoEntregaIndustrial", v)} /></Field>
        <Field label="Rural"><NumberInput value={data.prazoEntregaRural ?? 0} onChange={(v) => update("prazoEntregaRural", v)} /></Field>
      </div>

      <div className="space-y-2 pt-2">
        <Checkbox checked={data.frotaPropria} onChange={(v) => update("frotaPropria", v)} label="Tem frota própria (vans/carros)" />
        <Checkbox checked={data.ferramentaCompleta} onChange={(v) => update("ferramentaCompleta", v)} label="Ferramental completo próprio" />
      </div>

      <Field label="Projeto técnico">
        <div className="grid grid-cols-2 gap-2">
          <Radio checked={data.projetoInterno === "interno"} onChange={() => update("projetoInterno", "interno")} label="Interno" />
          <Radio checked={data.projetoInterno === "terceiro"} onChange={() => update("projetoInterno", "terceiro")} label="Terceirizado" />
        </div>
      </Field>

      <Field label="Distância máxima de Palmas (km)">
        <NumberInput value={data.distanciaMaxKm} onChange={(v) => update("distanciaMaxKm", v)} />
      </Field>
    </>
  );
}

function Bloco2ClienteIdeal({ data, update, toggle }: BlocoToggleProps) {
  return (
    <>
      <p className="text-sm text-[var(--aura-text-muted)] bg-[var(--aura-blue)]/5 p-4 rounded-lg leading-relaxed">
        5 LPs (mãe + 4 segmentadas) cada uma fala com um perfil. Sem entender quem compra, copy mira errado.
      </p>

      <p className="text-xs font-semibold uppercase tracking-wider text-[var(--aura-text-muted)]">Mix de clientes (12m) · soma 100%</p>
      <div className="grid grid-cols-2 gap-4">
        <Field label="Residencial (%)"><NumberInput value={data.mixResidencial} onChange={(v) => update("mixResidencial", v)} max={100} /></Field>
        <Field label="Comercial (%)"><NumberInput value={data.mixComercial} onChange={(v) => update("mixComercial", v)} max={100} /></Field>
        <Field label="Industrial (%)"><NumberInput value={data.mixIndustrial} onChange={(v) => update("mixIndustrial", v)} max={100} /></Field>
        <Field label="Rural (%)"><NumberInput value={data.mixRural} onChange={(v) => update("mixRural", v)} max={100} /></Field>
      </div>

      <Field label="De onde vêm os clientes hoje?">
        <div className="space-y-1">
          {ORIGEM_LEAD.map((opt) => (
            <Checkbox key={opt} checked={data.origemLead.includes(opt)} onChange={() => toggle("origemLead", opt)} label={opt} />
          ))}
        </div>
      </Field>

      <Field label="Qual nicho dá mais lucro %?" hint="Maior margem, não maior volume">
        <TextInput value={data.nichoMaisLucro} onChange={(v) => update("nichoMaisLucro", v)} placeholder="Ex: comercial médio · 25% margem" />
      </Field>

      <Field label="Maior objeção de fechamento">
        <div className="space-y-1">
          {OBJECAO_FECHAMENTO.map((opt) => (
            <Checkbox key={opt} checked={data.objecaoFechamento.includes(opt)} onChange={() => toggle("objecaoFechamento", opt)} label={opt} />
          ))}
        </div>
      </Field>

      <Field label="Maior dor inicial" hint="Primeira mensagem do cliente">
        <div className="space-y-1">
          {DOR_INICIAL.map((opt) => (
            <Checkbox key={opt} checked={data.dorInicial.includes(opt)} onChange={() => toggle("dorInicial", opt)} label={opt} />
          ))}
        </div>
      </Field>

      <p className="text-xs font-semibold uppercase tracking-wider text-[var(--aura-text-muted)] pt-2">Ticket médio por nicho (R$)</p>
      <div className="grid grid-cols-2 gap-4">
        <Field label="Residencial"><NumberInput value={data.ticketResidencial} onChange={(v) => update("ticketResidencial", v)} /></Field>
        <Field label="Comercial"><NumberInput value={data.ticketComercial} onChange={(v) => update("ticketComercial", v)} /></Field>
        <Field label="Industrial"><NumberInput value={data.ticketIndustrial} onChange={(v) => update("ticketIndustrial", v)} /></Field>
        <Field label="Rural"><NumberInput value={data.ticketRural} onChange={(v) => update("ticketRural", v)} /></Field>
      </div>

      <Field label="Ticket mínimo aceitável" hint="Abaixo disso não vale o esforço">
        <NumberInput value={data.ticketMinimo} onChange={(v) => update("ticketMinimo", v)} />
      </Field>
    </>
  );
}

function Bloco3Posicionamento({ data, update, toggle }: BlocoToggleProps) {
  return (
    <>
      <p className="text-sm text-[var(--aura-text-muted)] bg-[var(--aura-blue)]/5 p-4 rounded-lg leading-relaxed">
        A vibe da marca define cores, copy, filtro de cliente.
      </p>

      <Field label="Em 1 frase, quem é a Aura Energy pra você?">
        <Textarea value={data.auraEhOQue} onChange={(v) => update("auraEhOQue", v)} rows={2} placeholder="Ex: A frente premium B2B da Brasfrio em Tocantins" />
      </Field>

      <Field label="Onde quer estar em 12 meses?">
        <div className="space-y-1">
          {POSICIONAMENTO_12M.map((opt) => (
            <Radio key={opt} checked={data.posicionamento12m === opt} onChange={() => update("posicionamento12m", opt)} label={opt} />
          ))}
        </div>
      </Field>

      <Field label="Vibe da marca · escolhe 2">
        <div className="space-y-1">
          {VIBE_MARCA.map((opt) => (
            <Checkbox key={opt} checked={data.vibeMarca.includes(opt)} onChange={() => toggle("vibeMarca", opt)} label={opt} />
          ))}
        </div>
      </Field>

      <Field label="Concorrente que mais te tira o sono em Palmas">
        <TextInput value={data.concorrentePalmas} onChange={(v) => update("concorrentePalmas", v)} placeholder="Nome real, sem medo" />
      </Field>

      <Field label="3 marcas (NÃO solar) que você admira" hint="Apple, Nubank, Hospital Albert Einstein, etc">
        <Textarea value={data.marcasAdmiradas ?? ""} onChange={(v) => update("marcasAdmiradas", v)} rows={2} />
      </Field>
    </>
  );
}

function Bloco4Catalogo({ data, update, toggle }: BlocoToggleProps) {
  return (
    <>
      <p className="text-sm text-[var(--aura-text-muted)] bg-[var(--aura-blue)]/5 p-4 rounded-lg leading-relaxed">
        LPs vão ter <strong>kits públicos com preço</strong> — converte 30%+ a mais.
      </p>

      <Field label="Marcas de MÓDULOS que você usa">
        <div className="space-y-1">
          {MARCAS_MODULO.map((opt) => (
            <Checkbox key={opt} checked={data.modulosUsa.includes(opt)} onChange={() => toggle("modulosUsa", opt)} label={opt} />
          ))}
        </div>
      </Field>
      <Field label="Sua marca preferida de módulo">
        <TextInput value={data.moduloPreferido} onChange={(v) => update("moduloPreferido", v)} placeholder="Ex: Canadian Solar" />
      </Field>

      <Field label="Marcas de INVERSORES que você usa">
        <div className="space-y-1">
          {MARCAS_INVERSOR.map((opt) => (
            <Checkbox key={opt} checked={data.inversoresUsa.includes(opt)} onChange={() => toggle("inversoresUsa", opt)} label={opt} />
          ))}
        </div>
      </Field>
      <Field label="Sua marca preferida de inversor">
        <TextInput value={data.inversorPreferido} onChange={(v) => update("inversorPreferido", v)} placeholder="Ex: Deye" />
      </Field>

      <Field label="Frequência de sistemas com bateria">
        <div className="grid grid-cols-2 gap-2">
          <Radio checked={data.bateriaFrequencia === "frequente"} onChange={() => update("bateriaFrequencia", "frequente")} label="Frequente (>20%)" />
          <Radio checked={data.bateriaFrequencia === "ocasional"} onChange={() => update("bateriaFrequencia", "ocasional")} label="Ocasional (5-20%)" />
          <Radio checked={data.bateriaFrequencia === "raro"} onChange={() => update("bateriaFrequencia", "raro")} label="Raro (<5%)" />
          <Radio checked={data.bateriaFrequencia === "nunca"} onChange={() => update("bateriaFrequencia", "nunca")} label="Nunca" />
        </div>
      </Field>
      {data.bateriaFrequencia !== "nunca" && (
        <Field label="Marcas de bateria">
          <div className="space-y-1">
            {MARCAS_BATERIA.map((opt) => (
              <Checkbox key={opt} checked={(data.bateriasUsa ?? []).includes(opt)} onChange={() => toggle("bateriasUsa", opt)} label={opt} />
            ))}
          </div>
        </Field>
      )}

      <p className="text-xs font-semibold uppercase tracking-wider text-[var(--aura-text-muted)] pt-2">Tabela de preços RESIDENCIAL (R$ instalado completo)</p>
      <div className="grid grid-cols-2 gap-4">
        <Field label="Mini 3 kWp" hint="conta até R$350"><NumberInput value={data.precoKitMini3kwp ?? 0} onChange={(v) => update("precoKitMini3kwp", v)} /></Field>
        <Field label="Padrão 5 kWp" hint="R$ 350-600"><NumberInput value={data.precoKitPadrao5kwp ?? 0} onChange={(v) => update("precoKitPadrao5kwp", v)} /></Field>
        <Field label="Plus 8 kWp" hint="R$ 600-900"><NumberInput value={data.precoKitPlus8kwp ?? 0} onChange={(v) => update("precoKitPlus8kwp", v)} /></Field>
        <Field label="Premium 10 kWp" hint="R$ 900-1.200"><NumberInput value={data.precoKitPremium10kwp ?? 0} onChange={(v) => update("precoKitPremium10kwp", v)} /></Field>
      </div>

      <p className="text-xs font-semibold uppercase tracking-wider text-[var(--aura-text-muted)] pt-2">Garantias (anos)</p>
      <div className="grid grid-cols-3 gap-4">
        <Field label="Módulo (padrão 25)"><NumberInput value={data.garantiaModulo} onChange={(v) => update("garantiaModulo", v)} /></Field>
        <Field label="Inversor (padrão 10)"><NumberInput value={data.garantiaInversor} onChange={(v) => update("garantiaInversor", v)} /></Field>
        <Field label="Serviço"><NumberInput value={data.garantiaServico} onChange={(v) => update("garantiaServico", v)} /></Field>
      </div>

      <Checkbox checked={data.ofereceGarantiaPerformance} onChange={(v) => update("ofereceGarantiaPerformance", v)} label="Oferece garantia de PERFORMANCE (% mínimo de geração)" />
      {data.ofereceGarantiaPerformance && (
        <div className="grid grid-cols-2 gap-4">
          <Field label="% mínimo geração"><NumberInput value={data.garantiaPerformancePct ?? 0} onChange={(v) => update("garantiaPerformancePct", v)} max={100} /></Field>
          <Field label="Por X anos"><NumberInput value={data.garantiaPerformanceAnos ?? 0} onChange={(v) => update("garantiaPerformanceAnos", v)} /></Field>
        </div>
      )}
    </>
  );
}

function Bloco5Financiamento({ data, update, toggle }: BlocoToggleProps) {
  return (
    <>
      <p className="text-sm text-[var(--aura-text-muted)] bg-[var(--aura-blue)]/5 p-4 rounded-lg leading-relaxed">
        70% das vendas residenciais BR são financiadas. Selo de banco converte 2-3× mais.
      </p>

      <Field label="Bancos com convênio ativo">
        <div className="space-y-1">
          {BANCOS_SOLAR.map((opt) => (
            <Checkbox key={opt} checked={data.bancosConvenio.includes(opt)} onChange={() => toggle("bancosConvenio", opt)} label={opt} />
          ))}
        </div>
      </Field>

      <Field label="Banco preferido">
        <TextInput value={data.bancoPreferido} onChange={(v) => update("bancoPreferido", v)} placeholder="Ex: Solfácil" />
      </Field>

      <Field label="Taxa de aprovação média (%)">
        <NumberInput value={data.taxaAprovacao} onChange={(v) => update("taxaAprovacao", v)} max={100} />
      </Field>

      <Field label="Aceita PIX como entrada parcial?">
        <div className="space-y-1">
          <Radio checked={data.aceitaPixEntrada === "sim_recomendo"} onChange={() => update("aceitaPixEntrada", "sim_recomendo")} label="Sim, recomendo" />
          <Radio checked={data.aceitaPixEntrada === "sim_nao_incentivo"} onChange={() => update("aceitaPixEntrada", "sim_nao_incentivo")} label="Sim, mas não incentivo" />
          <Radio checked={data.aceitaPixEntrada === "nao"} onChange={() => update("aceitaPixEntrada", "nao")} label="Não, financia 100%" />
        </div>
      </Field>

      <Field label="Pronaf Bioeconomia (rural)" hint="2,75% a.a. · 5 anos carência · até R$ 165k. Diferencial RARO em Palmas.">
        <div className="space-y-1">
          <Radio checked={data.experienciaPronaf === "sim_varias"} onChange={() => update("experienciaPronaf", "sim_varias")} label="Sim, várias vendas" />
          <Radio checked={data.experienciaPronaf === "sim_alguma"} onChange={() => update("experienciaPronaf", "sim_alguma")} label="Sim, alguma" />
          <Radio checked={data.experienciaPronaf === "nao_quero_aprender"} onChange={() => update("experienciaPronaf", "nao_quero_aprender")} label="Não, mas quero aprender" />
          <Radio checked={data.experienciaPronaf === "nao_conhecia"} onChange={() => update("experienciaPronaf", "nao_conhecia")} label="Não conhecia" />
        </div>
      </Field>
    </>
  );
}

function Bloco6BESS({ data, update, toggle }: BlocoToggleProps) {
  return (
    <>
      <p className="text-sm text-[var(--aura-text-muted)] bg-[var(--aura-yellow)]/15 border border-[var(--aura-yellow)]/30 p-4 rounded-lg leading-relaxed">
        <strong>🔋 BESS é o maior pivô do mercado solar 2026.</strong> Você falou bastante disso na nossa reunião.
        Lei 15.269/2025 abriu mercado novo · Fio B 60% em 2026 · peak shaving comercial vira receita real.
        Quero entender ONDE você quer entrar e com qual força.
      </p>

      <Field label="Sua experiência com baterias até hoje">
        <div className="space-y-1">
          <Radio checked={data.bessExperiencia === "ja_vendi_varios"} onChange={() => update("bessExperiencia", "ja_vendi_varios")} label="Já vendi vários sistemas com bateria" />
          <Radio checked={data.bessExperiencia === "instalei_uma_vez"} onChange={() => update("bessExperiencia", "instalei_uma_vez")} label="Instalei 1-2 vezes" />
          <Radio checked={data.bessExperiencia === "so_cotei"} onChange={() => update("bessExperiencia", "so_cotei")} label="Só cotei, nunca fechei" />
          <Radio checked={data.bessExperiencia === "nao_mexi_ainda"} onChange={() => update("bessExperiencia", "nao_mexi_ainda")} label="Não mexi ainda · quero começar com Aura" />
        </div>
      </Field>

      <Field label="Onde a Aura vai aplicar BESS?" hint="Marca tudo que faz sentido — vamos transformar em LP/seção segmentada">
        <div className="space-y-1">
          {BESS_APLICACOES.map((opt) => (
            <Checkbox key={opt} checked={(data.bessAplicacoes ?? []).includes(opt)} onChange={() => toggle("bessAplicacoes", opt)} label={opt} />
          ))}
        </div>
      </Field>

      <Field label="Maior projeto de bateria que você já cotou ou entregou" hint='Ex: "30 kWh BYD pra fazenda em Porto Nacional, R$95k"'>
        <Textarea value={data.bessMaiorProjeto ?? ""} onChange={(v) => update("bessMaiorProjeto", v)} rows={2} />
      </Field>

      <Field label="Marcas de bateria que confia / quer trabalhar">
        <div className="space-y-1">
          {BESS_MARCAS.map((opt) => (
            <Checkbox key={opt} checked={(data.bessMarcas ?? []).includes(opt)} onChange={() => toggle("bessMarcas", opt)} label={opt} />
          ))}
        </div>
      </Field>

      <Field label="Inversor híbrido preferido" hint="Hardware diferente do solar puro. Crítico pra retrofit.">
        <div className="space-y-1">
          {BESS_INVERSOR_HIBRIDO.map((opt) => (
            <Checkbox key={opt} checked={(data.bessInversorHibrido ?? []).includes(opt)} onChange={() => toggle("bessInversorHibrido", opt)} label={opt} />
          ))}
        </div>
      </Field>

      <p className="text-xs font-semibold uppercase tracking-wider text-[var(--aura-text-muted)] pt-2">
        Faixa de preço · sistema completo instalado (R$)
      </p>
      <p className="text-xs text-[var(--aura-text-muted)] -mt-1">
        Pode ser estimativa. Vamos colocar &quot;a partir de&quot; nas LPs.
      </p>
      <div className="grid grid-cols-1 gap-4">
        <Field label="Backup residencial 5 kWh" hint="Geladeira, luz, internet em apagão">
          <NumberInput value={data.bessPrecoBackup5kwh ?? 0} onChange={(v) => update("bessPrecoBackup5kwh", v)} placeholder="35000" />
        </Field>
        <Field label="Comercial 15 kWh" hint="Peak shaving loja média">
          <NumberInput value={data.bessPrecoComercial15kwh ?? 0} onChange={(v) => update("bessPrecoComercial15kwh", v)} placeholder="80000" />
        </Field>
        <Field label="Industrial 50 kWh+" hint="Microrede / grande peak shaving">
          <NumberInput value={data.bessPrecoIndustrial50kwh ?? 0} onChange={(v) => update("bessPrecoIndustrial50kwh", v)} placeholder="280000" />
        </Field>
      </div>

      <Field label="Cliente já chega pedindo bateria?">
        <div className="space-y-1">
          <Radio checked={data.bessClienteEntendeFioB === "sim_perguntam"} onChange={() => update("bessClienteEntendeFioB", "sim_perguntam")} label="Sim, perguntam direto sobre Fio B / autonomia" />
          <Radio checked={data.bessClienteEntendeFioB === "as_vezes"} onChange={() => update("bessClienteEntendeFioB", "as_vezes")} label="Às vezes — nicho mais informado" />
          <Radio checked={data.bessClienteEntendeFioB === "raro"} onChange={() => update("bessClienteEntendeFioB", "raro")} label="Raro — eu que apresento" />
          <Radio checked={data.bessClienteEntendeFioB === "nunca"} onChange={() => update("bessClienteEntendeFioB", "nunca")} label="Nunca — mercado em Palmas ainda não pediu" />
        </div>
      </Field>

      <Field label="Modelo comercial que faz mais sentido pra Aura" hint="Como o cliente paga pela bateria?">
        <div className="space-y-1">
          <Radio checked={data.bessModeloComercial === "venda_capex"} onChange={() => update("bessModeloComercial", "venda_capex")} label="Venda CAPEX (cliente compra) — modelo tradicional" />
          <Radio checked={data.bessModeloComercial === "leasing"} onChange={() => update("bessModeloComercial", "leasing")} label="Leasing / aluguel mensal" />
          <Radio checked={data.bessModeloComercial === "energy_as_service"} onChange={() => update("bessModeloComercial", "energy_as_service")} label='Energy-as-a-Service (cliente paga R$/kWh economizado)' />
          <Radio checked={data.bessModeloComercial === "multiplos"} onChange={() => update("bessModeloComercial", "multiplos")} label="Múltiplos modelos · depende do cliente" />
          <Radio checked={data.bessModeloComercial === "nao_decidi"} onChange={() => update("bessModeloComercial", "nao_decidi")} label="Não decidi · me ajuda a pensar" />
        </div>
      </Field>

      <Field label="Lei 15.269/2025 (marco regulatório armazenamento)" hint="Permite leilões de capacidade · regulamenta integração BESS na rede">
        <div className="space-y-1">
          <Radio checked={data.bessConheceLei15269 === "sim_estudei"} onChange={() => update("bessConheceLei15269", "sim_estudei")} label="Sim, estudei e tô preparado" />
          <Radio checked={data.bessConheceLei15269 === "sim_superficial"} onChange={() => update("bessConheceLei15269", "sim_superficial")} label="Vi superficialmente, preciso aprofundar" />
          <Radio checked={data.bessConheceLei15269 === "nao_conhecia"} onChange={() => update("bessConheceLei15269", "nao_conhecia")} label="Não conhecia · pode mandar resumo" />
        </div>
      </Field>

      <Field label="Argumento de venda mais forte que VOCÊ acredita pra BESS">
        <div className="space-y-1">
          {BESS_ARGUMENTO_VENDA.map((opt) => (
            <Checkbox key={opt} checked={(data.bessArgumentoVenda ?? []).includes(opt)} onChange={() => toggle("bessArgumentoVenda", opt)} label={opt} />
          ))}
        </div>
      </Field>

      <Field label="Foco da Aura nos próximos 12m">
        <div className="space-y-1">
          <Radio checked={data.bessFocoCentral === "sim_central_aura"} onChange={() => update("bessFocoCentral", "sim_central_aura")} label='BESS é o eixo CENTRAL da Aura ("primeira solar+bateria de Palmas")' />
          <Radio checked={data.bessFocoCentral === "sim_secundario"} onChange={() => update("bessFocoCentral", "sim_secundario")} label="Solar é o produto principal · BESS upsell premium" />
          <Radio checked={data.bessFocoCentral === "nao_agora"} onChange={() => update("bessFocoCentral", "nao_agora")} label="Não é foco agora · entra em 2027" />
        </div>
      </Field>

      <div className="grid grid-cols-2 gap-4">
        <Field label="Garantia bateria (anos)" hint="Mercado: 8-10 anos típico">
          <NumberInput value={data.bessGarantiaAnos ?? 0} onChange={(v) => update("bessGarantiaAnos", v)} max={30} />
        </Field>
        <Field label="Retrofit em sistemas antigos">
          <div className="space-y-1">
            <Radio checked={data.bessRetrofit === "sim_ofereco"} onChange={() => update("bessRetrofit", "sim_ofereco")} label="Sim, ofereço" />
            <Radio checked={data.bessRetrofit === "nao_so_novos"} onChange={() => update("bessRetrofit", "nao_so_novos")} label="Não, só sistemas novos" />
            <Radio checked={data.bessRetrofit === "nao_decidi"} onChange={() => update("bessRetrofit", "nao_decidi")} label="Não decidi" />
          </div>
        </Field>
      </div>
    </>
  );
}

function HeroAtual({ texto }: { texto: string }) {
  return (
    <div
      className="rounded-xl p-4 mb-2"
      style={{
        background: "rgba(15,27,61,0.04)",
        border: "1px dashed rgba(15,27,61,0.18)",
      }}
    >
      <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--aura-text-muted)] mb-1.5">
        ✍️ Como tá no ar hoje
      </p>
      <p className="text-base font-semibold leading-snug text-[var(--aura-text)]">
        &ldquo;{texto}&rdquo;
      </p>
    </div>
  );
}

function Bloco7Heros({ data, update, toggle }: BlocoToggleProps) {
  return (
    <>
      <p className="text-sm text-[var(--aura-text-muted)] bg-[var(--aura-blue)]/5 p-4 rounded-lg leading-relaxed">
        Cada LP já tem um Hero no ar. <strong>Lê os atuais e me diz se quer ajustar</strong> — se você curtiu como tá, deixa em branco.
        <br />Os <strong>casos reais</strong> (bairro, kWp, conta antes/depois) vão dentro da seção de cases — esses preenche aqui.
      </p>

      <h3 className="text-base font-bold text-[var(--aura-blue)] pt-4">🏠 LP /casa</h3>
      <HeroAtual texto="Sua casa em Palmas pode parar de pagar luz." />
      <Field label="Sua sugestão de headline (opcional)" hint='Como você falaria com cliente residencial? Em branco = mantém atual'>
        <Textarea value={data.heroCasaHeadline ?? ""} onChange={(v) => update("heroCasaHeadline", v)} rows={2} placeholder="ex: Sua casa em Palmas com conta de R$ 50/mês" />
      </Field>
      <p className="text-xs font-semibold uppercase tracking-wider text-[var(--aura-text-muted)] pt-2">📍 Caso real residencial (vira card de prova)</p>
      <div className="grid grid-cols-2 gap-4">
        <Field label="Bairro Palmas"><TextInput value={data.casoCasaBairro ?? ""} onChange={(v) => update("casoCasaBairro", v)} /></Field>
        <Field label="kWp"><NumberInput value={data.casoCasaKwp ?? 0} onChange={(v) => update("casoCasaKwp", v)} /></Field>
        <Field label="Conta antes (R$)"><NumberInput value={data.casoCasaContaAntes ?? 0} onChange={(v) => update("casoCasaContaAntes", v)} /></Field>
        <Field label="Conta depois (R$)"><NumberInput value={data.casoCasaContaDepois ?? 0} onChange={(v) => update("casoCasaContaDepois", v)} /></Field>
      </div>

      <h3 className="text-base font-bold text-[var(--aura-blue)] pt-6">🏬 LP /comercio</h3>
      <HeroAtual texto="Sua loja, padaria, posto pagando R$ 0 de luz." />
      <Field label="Sua sugestão de headline (opcional)">
        <Textarea value={data.heroComercioHeadline ?? ""} onChange={(v) => update("heroComercioHeadline", v)} rows={2} />
      </Field>
      <p className="text-xs font-semibold uppercase tracking-wider text-[var(--aura-text-muted)] pt-2">📍 Caso real comercial</p>
      <div className="grid grid-cols-2 gap-4">
        <Field label="Tipo (loja, clínica, etc)"><TextInput value={data.casoComercioTipo ?? ""} onChange={(v) => update("casoComercioTipo", v)} /></Field>
        <Field label="kWp"><NumberInput value={data.casoComercioKwp ?? 0} onChange={(v) => update("casoComercioKwp", v)} /></Field>
        <Field label="Conta antes (R$)"><NumberInput value={data.casoComercioContaAntes ?? 0} onChange={(v) => update("casoComercioContaAntes", v)} /></Field>
        <Field label="Conta depois (R$)"><NumberInput value={data.casoComercioContaDepois ?? 0} onChange={(v) => update("casoComercioContaDepois", v)} /></Field>
      </div>
      <Field label="Argumento decisivo">
        <div className="space-y-1">
          {ARG_COMERCIAL.map((opt) => (
            <Checkbox key={opt} checked={(data.argumentoComercial ?? []).includes(opt)} onChange={() => toggle("argumentoComercial", opt)} label={opt} />
          ))}
        </div>
      </Field>

      <h3 className="text-base font-bold text-[var(--aura-blue)] pt-6">🏭 LP /industria</h3>
      <HeroAtual texto="Sua indústria pode tirar 80% do custo invisível da operação." />
      <Field label="Sua sugestão de headline (opcional)">
        <Textarea value={data.heroIndustriaHeadline ?? ""} onChange={(v) => update("heroIndustriaHeadline", v)} rows={2} />
      </Field>
      <p className="text-xs font-semibold uppercase tracking-wider text-[var(--aura-text-muted)] pt-2">📍 Caso real industrial</p>
      <div className="grid grid-cols-2 gap-4">
        <Field label="Setor"><TextInput value={data.casoIndustriaSetor ?? ""} onChange={(v) => update("casoIndustriaSetor", v)} placeholder="alimentos, metalurgia, etc" /></Field>
        <Field label="kWp"><NumberInput value={data.casoIndustriaKwp ?? 0} onChange={(v) => update("casoIndustriaKwp", v)} /></Field>
        <Field label="Investimento R$"><NumberInput value={data.casoIndustriaInvest ?? 0} onChange={(v) => update("casoIndustriaInvest", v)} /></Field>
        <Field label="Economia/mês R$"><NumberInput value={data.casoIndustriaEconomia ?? 0} onChange={(v) => update("casoIndustriaEconomia", v)} /></Field>
        <Field label="ROI (anos)"><NumberInput value={data.casoIndustriaRoi ?? 0} onChange={(v) => update("casoIndustriaRoi", v)} /></Field>
      </div>
      <Field label="Argumento decisivo industrial">
        <div className="space-y-1">
          {ARG_INDUSTRIAL.map((opt) => (
            <Checkbox key={opt} checked={(data.argumentoIndustrial ?? []).includes(opt)} onChange={() => toggle("argumentoIndustrial", opt)} label={opt} />
          ))}
        </div>
      </Field>

      <h3 className="text-base font-bold text-[var(--aura-blue)] pt-6">🌾 LP /rural</h3>
      <HeroAtual texto="Pivô, granja, aviário, irrigação rodando com sol de Tocantins." />
      <Field label="Sua sugestão de headline (opcional)">
        <Textarea value={data.heroRuralHeadline ?? ""} onChange={(v) => update("heroRuralHeadline", v)} rows={2} />
      </Field>
      <p className="text-xs font-semibold uppercase tracking-wider text-[var(--aura-text-muted)] pt-2">📍 Caso real rural</p>
      <div className="grid grid-cols-2 gap-4">
        <Field label="Tipo de propriedade"><TextInput value={data.casoRuralTipo ?? ""} onChange={(v) => update("casoRuralTipo", v)} placeholder="sítio/fazenda/granja" /></Field>
        <Field label="Cidade"><TextInput value={data.casoRuralCidade ?? ""} onChange={(v) => update("casoRuralCidade", v)} /></Field>
        <Field label="kWp"><NumberInput value={data.casoRuralKwp ?? 0} onChange={(v) => update("casoRuralKwp", v)} /></Field>
        <Field label="Pra quê serve a energia?"><TextInput value={data.casoRuralUso ?? ""} onChange={(v) => update("casoRuralUso", v)} placeholder="irrigação/ordenha" /></Field>
      </div>
      <Field label="Maior bloqueio do produtor rural">
        <div className="space-y-1">
          {BLOQUEIO_RURAL.map((opt) => (
            <Checkbox key={opt} checked={(data.bloqueioRural ?? []).includes(opt)} onChange={() => toggle("bloqueioRural", opt)} label={opt} />
          ))}
        </div>
      </Field>

      <h3 className="text-base font-bold text-[var(--aura-blue)] pt-6">🏠🏬🏭🌾 LP mãe (/)</h3>
      <HeroAtual texto="Que operação você quer alimentar com o sol de Tocantins?" />
      <Field label="Sua sugestão de frase pra LP mãe (opcional)">
        <Textarea value={data.heroMaeFraseImpacto ?? ""} onChange={(v) => update("heroMaeFraseImpacto", v)} rows={2} />
      </Field>
    </>
  );
}

function Bloco8Estrategia({ data, update, toggle }: BlocoToggleProps) {
  return (
    <>
      <p className="text-sm text-[var(--aura-text-muted)] bg-[var(--aura-blue)]/5 p-4 rounded-lg leading-relaxed">
        Promessa sem capacidade real é receita pra Aura morrer no berço.
      </p>

      <Field label="Quanto tempo/dia consegue dedicar à Aura?">
        <div className="space-y-1">
          {TEMPO_DIA.map((opt) => (
            <Radio key={opt} checked={data.tempoDiaAura === opt} onChange={() => update("tempoDiaAura", opt)} label={opt} />
          ))}
        </div>
      </Field>

      <Field label="Quem responde WhatsApp Business da Aura?">
        <div className="space-y-1">
          {QUEM_RESPONDE_WPP.map((opt) => (
            <Radio key={opt} checked={data.quemRespondeWpp === opt} onChange={() => update("quemRespondeWpp", opt)} label={opt} />
          ))}
        </div>
      </Field>

      <Field label="Investimento mensal em ads (R$)">
        <NumberInput value={data.investimentoMensalAds} onChange={(v) => update("investimentoMensalAds", v)} />
      </Field>

      <Field label="Canal de captação primário">
        <div className="space-y-1">
          {CANAL_CAPTACAO.map((opt) => (
            <Checkbox key={opt} checked={data.canalCaptacaoPrimario.includes(opt)} onChange={() => toggle("canalCaptacaoPrimario", opt)} label={opt} />
          ))}
        </div>
      </Field>

      <p className="text-xs font-semibold uppercase tracking-wider text-[var(--aura-text-muted)] pt-2">Meta de vendas Aura · 90 dias</p>
      <div className="grid grid-cols-3 gap-4">
        <Field label="Mês 1"><NumberInput value={data.metaMes1} onChange={(v) => update("metaMes1", v)} /></Field>
        <Field label="Mês 2"><NumberInput value={data.metaMes2} onChange={(v) => update("metaMes2", v)} /></Field>
        <Field label="Mês 3"><NumberInput value={data.metaMes3} onChange={(v) => update("metaMes3", v)} /></Field>
      </div>
    </>
  );
}

function Bloco9Diferenciais({ data, toggle, update }: BlocoToggleProps) {
  return (
    <>
      <p className="text-sm text-[var(--aura-text-muted)] bg-[var(--aura-blue)]/5 p-4 rounded-lg leading-relaxed">
        Cada selo aqui vira <strong>redução de objeção</strong>. Cliente vê &quot;garantia 25 anos · monitoramento app · limpeza grátis ano 1&quot; → 2-3× menos objeções.
      </p>

      <Field label="O que você JÁ oferece hoje">
        <div className="space-y-1">
          {GARANTIAS_OFERECIDAS.map((opt) => (
            <Checkbox key={opt} checked={data.garantiasOferece.includes(opt)} onChange={() => toggle("garantiasOferece", opt)} label={opt} />
          ))}
        </div>
      </Field>

      <Field label="Selos / certificações que tem">
        <div className="space-y-1">
          {CERTIFICACOES.map((opt) => (
            <Checkbox key={opt} checked={data.certificacoes.includes(opt)} onChange={() => toggle("certificacoes", opt)} label={opt} />
          ))}
        </div>
      </Field>
      <Field label="Outras certificações">
        <TextInput value={data.certificacoesOutras ?? ""} onChange={(v) => update("certificacoesOutras", v)} />
      </Field>

      <Field label="Brigada de proteção do investimento (opcional)" hint="Seguro raio/granizo? Garantia estendida? Plano mensal?">
        <Textarea value={data.brigadaProtecao ?? ""} onChange={(v) => update("brigadaProtecao", v)} rows={3} />
      </Field>
    </>
  );
}

function Bloco10Cocriacao({ data, update }: BlocoProps) {
  return (
    <>
      <p className="text-sm text-[var(--aura-text-muted)] bg-[var(--aura-yellow)]/15 border border-[var(--aura-yellow)]/30 p-4 rounded-lg leading-relaxed">
        <strong>💡 Aqui você é sócio do projeto, não cliente respondendo.</strong>
        <br />A Aura vai ser <em>sua marca</em>, então o que você acha que falta nas LPs pra atrair mais lead — fala. Pode ser ferramenta, formato, ideia maluca. A gente sabe construir; você sabe o que funciona em Palmas.
      </p>

      <div
        className="rounded-xl p-4 mb-2"
        style={{
          background: "rgba(15,27,61,0.04)",
          border: "1px dashed rgba(15,27,61,0.18)",
        }}
      >
        <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--aura-text-muted)] mb-2">
          ✍️ O que as LPs já têm hoje (pra você usar de referência)
        </p>
        <ul className="text-sm text-[var(--aura-text)] space-y-1 leading-relaxed">
          <li>🔢 <strong>Simulador de economia</strong> em cada LP segmentada (cliente digita conta de luz e vê economia/payback)</li>
          <li>🧮 <strong>Calculadora completa</strong> em /economia-resultado (cálculo dinâmico ROI 25 anos)</li>
          <li>🩺 <strong>Diagnóstico personalizado</strong> em /diagnostico (qualifica lead antes de orçamento)</li>
          <li>📋 <strong>Cases reais</strong> Brasfrio com fotos · ❓ <strong>FAQ</strong> por nicho</li>
          <li>🌾 <strong>Bloco Pronaf Bioeconomia</strong> (rural) · <strong>Bloco Palmas Solar</strong> (40% IPTU)</li>
          <li>🏷️ <strong>Comparativo</strong> Aura vs concorrentes · <strong>Galeria</strong> de instalações</li>
          <li>📞 <strong>Cartão visita digital</strong> · <strong>Mapa</strong> de instalações Palmas</li>
        </ul>
      </div>

      <Field
        label="Que ferramenta NOVA você acha que ajudaria a fechar mais venda?"
        hint="Pode ser doida — a gente avalia. Ex: dimensionador rápido por foto da conta, comparador de bancos, chat com você no WhatsApp dentro da LP, contador regressivo do Fio B, simulador BESS, calculadora ROI por nicho, agendamento de visita técnica, etc."
      >
        <Textarea
          value={data.cocriacaoFerramentaNova ?? ""}
          onChange={(v) => update("cocriacaoFerramentaNova", v)}
          rows={4}
          placeholder="Qualquer ideia. Mesmo que pareça difícil — fala que a gente quebra."
        />
      </Field>

      <Field
        label="Que SEÇÃO ou conteúdo você acha que falta nas LPs?"
        hint="Algo que o cliente em Palmas precisa ler/ver antes de fechar e hoje não tá lá."
      >
        <Textarea
          value={data.cocriacaoSecaoFalta ?? ""}
          onChange={(v) => update("cocriacaoSecaoFalta", v)}
          rows={3}
          placeholder='Ex: "vídeo 60s do antes/depois", "explicação visual do Fio B", "comparativo de marcas de módulo"...'
        />
      </Field>

      <Field
        label="Tem algo nas LPs atuais que você MUDARIA ou TIRARIA?"
        hint="Hero, simulador, FAQ, comparativo, qualquer seção. Sem medo — eu refaço."
      >
        <Textarea
          value={data.cocriacaoMudaria ?? ""}
          onChange={(v) => update("cocriacaoMudaria", v)}
          rows={3}
          placeholder='Ex: "tirar a calculadora simples e deixar só a completa", "hero da rural ficou meio frio", etc.'
        />
      </Field>

      <Field
        label="Alguma ideia ORIGINAL que você nunca viu concorrente fazer?"
        hint='Algo que se a gente fizer, marca a Aura como "diferente". Pode ser oferta, formato, brinde, garantia, ritual, qualquer coisa. As ideias mais fortes nascem na cabeça de quem opera, não de marketing.'
      >
        <Textarea
          value={data.cocriacaoIdeaOriginal ?? ""}
          onChange={(v) => update("cocriacaoIdeaOriginal", v)}
          rows={4}
          placeholder='Ex: "garantia de raio sem custo nos 5 primeiros anos", "1 visita técnica anual de revisão grátis pra todo cliente Aura", "kit indicação: 5% economia perpétua pra quem indicar"...'
        />
      </Field>
    </>
  );
}

function Bloco11Decisoes({ data, update }: BlocoProps) {
  return (
    <>
      <p className="text-sm text-[var(--aura-text-muted)] bg-[var(--aura-yellow)]/15 border border-[var(--aura-yellow)]/30 p-4 rounded-lg leading-relaxed">
        <strong>⚠️ Decisões SUAS, não nossas.</strong> Pesquisei várias coisas que PODEM virar diferencial Aura. Cada uma tem trade-off. Você marca o que faz sentido pro seu jeito.
      </p>

      <Field label="Estratégia de PREÇO nas LPs (kit residencial)">
        <div className="space-y-1">
          <Radio checked={data.precoLpStrategy === "preco_fixo"} onChange={() => update("precoLpStrategy", "preco_fixo")} label="Preço fixo público (converte +30% mas trava margem)" />
          <Radio checked={data.precoLpStrategy === "faixa"} onChange={() => update("precoLpStrategy", "faixa")} label='Faixa ("a partir de R$X") — meio-termo' />
          <Radio checked={data.precoLpStrategy === "pedir_orcamento"} onChange={() => update("precoLpStrategy", "pedir_orcamento")} label="Apenas pedir orçamento — controle total" />
        </div>
      </Field>

      <Field label="Marca de módulo dominante">
        <div className="space-y-1">
          <Radio checked={data.marcaModuloDominante === "uma_marca"} onChange={() => update("marcaModuloDominante", "uma_marca")} label='1 marca dominante (selo "Aura instala Canadian Solar")' />
          <Radio checked={data.marcaModuloDominante === "varias_marcas"} onChange={() => update("marcaModuloDominante", "varias_marcas")} label="Várias marcas (flexibilidade)" />
          <Radio checked={data.marcaModuloDominante === "depende_nicho"} onChange={() => update("marcaModuloDominante", "depende_nicho")} label="Depende do nicho" />
        </div>
      </Field>

      <Field label="Pronaf Bioeconomia como diferencial RURAL">
        <div className="space-y-1">
          <Radio checked={data.pronafEspecialista === "sim_dominar"} onChange={() => update("pronafEspecialista", "sim_dominar")} label="Sim, vou estudar e dominar" />
          <Radio checked={data.pronafEspecialista === "sim_so_indicar"} onChange={() => update("pronafEspecialista", "sim_so_indicar")} label="Sim, mas só indico o caminho" />
          <Radio checked={data.pronafEspecialista === "nao_agora"} onChange={() => update("pronafEspecialista", "nao_agora")} label="Não nesse momento" />
        </div>
      </Field>

      <Field label='Bônus "Aura monta dossiê Palmas Solar grátis"' hint="40% IPTU desconto · cliente economiza R$ 500-1.500/ano">
        <div className="space-y-1">
          <Radio checked={data.bonusPalmasSolar === "sim_gratis"} onChange={() => update("bonusPalmasSolar", "sim_gratis")} label="Sim, ofereço grátis" />
          <Radio checked={data.bonusPalmasSolar === "sim_cobrando"} onChange={() => update("bonusPalmasSolar", "sim_cobrando")} label="Sim, mas cobrando R$X" />
          <Radio checked={data.bonusPalmasSolar === "nao_oferece"} onChange={() => update("bonusPalmasSolar", "nao_oferece")} label="Não ofereço — só explico que existe" />
        </div>
      </Field>

      <Field label="Sistema com bateria (Fio B 60% em 2026 favorece)">
        <div className="space-y-1">
          <Radio checked={data.bateriaPosicionamento === "sim_foco"} onChange={() => update("bateriaPosicionamento", "sim_foco")} label="Sim, foco principal" />
          <Radio checked={data.bateriaPosicionamento === "sim_upsell"} onChange={() => update("bateriaPosicionamento", "sim_upsell")} label="Sim, como upsell" />
          <Radio checked={data.bateriaPosicionamento === "nao_agora"} onChange={() => update("bateriaPosicionamento", "nao_agora")} label="Não agora" />
        </div>
      </Field>

      <Field label="Garantia de performance (% mínimo geração)">
        <div className="space-y-1">
          <Radio checked={data.garantiaPerformanceDecisao === "sim_oferecer"} onChange={() => update("garantiaPerformanceDecisao", "sim_oferecer")} label="Sim, vou oferecer" />
          <Radio checked={data.garantiaPerformanceDecisao === "sim_com_condicoes"} onChange={() => update("garantiaPerformanceDecisao", "sim_com_condicoes")} label="Sim, com condições" />
          <Radio checked={data.garantiaPerformanceDecisao === "nao_oferecer"} onChange={() => update("garantiaPerformanceDecisao", "nao_oferecer")} label="Não ofereço" />
        </div>
      </Field>

      <Field label="Visita técnica pré-orçamento">
        <div className="space-y-1">
          <Radio checked={data.visitaTecnicaPolitica === "sim_sempre_gratis"} onChange={() => update("visitaTecnicaPolitica", "sim_sempre_gratis")} label="Sempre grátis" />
          <Radio checked={data.visitaTecnicaPolitica === "sim_dentro_km"} onChange={() => update("visitaTecnicaPolitica", "sim_dentro_km")} label="Grátis até X km" />
          <Radio checked={data.visitaTecnicaPolitica === "cobro_visita"} onChange={() => update("visitaTecnicaPolitica", "cobro_visita")} label="Cobro se não fechar" />
          <Radio checked={data.visitaTecnicaPolitica === "nao_faco"} onChange={() => update("visitaTecnicaPolitica", "nao_faco")} label="Não faço (Google Earth + conta)" />
        </div>
      </Field>

      <Field label='Pacote "tudo incluso" mensal (R$X/mês)'>
        <div className="space-y-1">
          <Radio checked={data.pacoteAssinaturaInteresse === "sim_top_gama"} onChange={() => update("pacoteAssinaturaInteresse", "sim_top_gama")} label="Sim, top de gama" />
          <Radio checked={data.pacoteAssinaturaInteresse === "talvez_futuro"} onChange={() => update("pacoteAssinaturaInteresse", "talvez_futuro")} label="Talvez no futuro" />
          <Radio checked={data.pacoteAssinaturaInteresse === "nao_faz_sentido"} onChange={() => update("pacoteAssinaturaInteresse", "nao_faz_sentido")} label="Não faz sentido em Palmas" />
        </div>
      </Field>

      <Field label="Última pergunta" hint='"Se a Aura virasse a maior empresa de fotovoltaico de Palmas em 12 meses, o que seria diferente da sua vida hoje?"'>
        <Textarea value={data.motivacao12m ?? ""} onChange={(v) => update("motivacao12m", v)} rows={4} />
      </Field>
    </>
  );
}
