"use client";

import { useState, type FormEvent } from "react";
import { listBrandVoices } from "@/lib/brand-voice/registry";
import type { CopyFormat, CopyOutput } from "@/lib/brand-voice/types";

const FORMATS: Array<{ value: CopyFormat; label: string }> = [
  { value: "post-instagram", label: "Post Instagram (estático)" },
  { value: "carrossel-instagram-capa", label: "Carrossel · capa (slide 1)" },
  { value: "carrossel-instagram-slide", label: "Carrossel · slide do meio" },
  { value: "story", label: "Story (frame único)" },
  { value: "story-sequencial", label: "Story Sequencial (5-8 frames)" },
  { value: "meta-ads-topo", label: "Meta Ads · topo de funil" },
  { value: "whatsapp-mensagem", label: "WhatsApp · mensagem" },
];

const TONES = [
  { value: "conservador", label: "Conservador (cauteloso, dados)" },
  { value: "punchy", label: "Punchy (balanceado, ritmo)" },
  { value: "ousado", label: "Ousado (hooks fortes)" },
];

export default function CopyGenPage() {
  const clients = listBrandVoices();

  const [token, setToken] = useState("");
  const [client, setClient] = useState(clients[0]?.id || "");
  const [format, setFormat] = useState<CopyFormat>("post-instagram");
  const [objective, setObjective] = useState("");
  const [context, setContext] = useState("");
  const [tone, setTone] = useState<"conservador" | "punchy" | "ousado">("punchy");

  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState<CopyOutput | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setOutput(null);
    setError(null);

    try {
      const res = await fetch("/api/copy-gen", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-copy-token": token,
        },
        body: JSON.stringify({ client, format, objective, context, tone }),
      });

      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Erro desconhecido");
      } else {
        setOutput(data);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro de rede");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#fffef2] text-[#1A1A1A]">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <header className="mb-10">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#D9A012]">
            Impulso Digital · Sistema Copy
          </p>
          <h1 className="mt-2 text-4xl sm:text-5xl font-extrabold tracking-tight">
            Copy Gen
          </h1>
          <p className="mt-3 text-base text-[#666] max-w-2xl leading-relaxed">
            Gera 3 variações de copy seguindo brand voice + framework cravados.
            Use objetivo curto e contexto se tiver caso real. Não inventa
            dados — só usa o que vem no brief.
          </p>
        </header>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Token de acesso">
              <input
                type="password"
                required
                value={token}
                onChange={(e) => setToken(e.target.value)}
                className="input"
                placeholder="COPY_GEN_TOKEN"
              />
            </Field>

            <Field label="Cliente">
              <select
                value={client}
                onChange={(e) => setClient(e.target.value)}
                className="input"
              >
                {clients.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.displayName}
                  </option>
                ))}
              </select>
            </Field>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Formato">
              <select
                value={format}
                onChange={(e) => setFormat(e.target.value as CopyFormat)}
                className="input"
              >
                {FORMATS.map((f) => (
                  <option key={f.value} value={f.value}>
                    {f.label}
                  </option>
                ))}
              </select>
            </Field>

            <Field label="Intensidade do tom">
              <select
                value={tone}
                onChange={(e) => setTone(e.target.value as typeof tone)}
                className="input"
              >
                {TONES.map((t) => (
                  <option key={t.value} value={t.value}>
                    {t.label}
                  </option>
                ))}
              </select>
            </Field>
          </div>

          <Field label="Objetivo do copy (1-2 frases)">
            <textarea
              required
              rows={2}
              value={objective}
              onChange={(e) => setObjective(e.target.value)}
              className="input"
              placeholder='Ex: "Explicar Lei 14.300 e criar urgência regulatória pra instalar solar em 2026 antes do Fio B subir"'
            />
          </Field>

          <Field label="Contexto adicional (opcional · cliente real, oferta, prova)">
            <textarea
              rows={3}
              value={context}
              onChange={(e) => setContext(e.target.value)}
              className="input"
              placeholder='Ex: "Cliente Aura · Plano Diretor Sul · 5,5 kWp · pagava R$720/mês, agora R$92"'
            />
          </Field>

          <button
            type="submit"
            disabled={loading}
            className="px-6 py-3 bg-[#0E2152] text-white font-bold rounded-xl hover:bg-[#1B3A87] transition disabled:opacity-50"
          >
            {loading ? "Gerando..." : "Gerar 3 variações"}
          </button>
        </form>

        {error && (
          <div className="mt-8 p-4 rounded-xl bg-red-50 border border-red-200 text-red-900">
            <strong>Erro:</strong> {error}
          </div>
        )}

        {output && (
          <section className="mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold tracking-tight">
              Variações geradas
            </h2>

            {output.warnings && output.warnings.length > 0 && (
              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200">
                <strong className="text-amber-900">Avisos:</strong>
                <ul className="mt-2 list-disc list-inside text-amber-900 text-sm">
                  {output.warnings.map((w, i) => (
                    <li key={i}>{w}</li>
                  ))}
                </ul>
              </div>
            )}

            {output.reasoning && (
              <div className="p-4 rounded-xl bg-[#f6f5e8] border border-[#1A1A1A]/10">
                <p className="text-xs font-bold tracking-widest uppercase text-[#666] mb-1">
                  Raciocínio
                </p>
                <p className="text-sm text-[#333] leading-relaxed">
                  {output.reasoning}
                </p>
              </div>
            )}

            {output.variations.map((v, i) => (
              <VariationCard key={i} variation={v} />
            ))}
          </section>
        )}
      </div>

      <style>{`
        .input {
          width: 100%;
          padding: 0.75rem 1rem;
          border: 1px solid rgba(26, 26, 26, 0.12);
          border-radius: 0.75rem;
          background: #fff;
          font-family: inherit;
          font-size: 0.95rem;
          color: #1A1A1A;
          transition: border-color 150ms;
        }
        .input:focus {
          outline: none;
          border-color: #1B3A87;
          box-shadow: 0 0 0 3px rgba(27, 58, 135, 0.1);
        }
      `}</style>
    </main>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-xs font-bold tracking-widest uppercase text-[#666] mb-2">
        {label}
      </span>
      {children}
    </label>
  );
}

function VariationCard({
  variation,
}: {
  variation: { label: string; copy: string; framework_used: string };
}) {
  async function copyToClipboard() {
    await navigator.clipboard.writeText(variation.copy);
  }

  return (
    <article className="rounded-2xl bg-white border border-[#1A1A1A]/10 overflow-hidden">
      <header className="px-5 py-3 bg-[#0E2152] text-white flex items-center justify-between">
        <span className="text-xs font-bold tracking-widest uppercase">
          Variação · {variation.label}
        </span>
        <button
          type="button"
          onClick={copyToClipboard}
          className="text-xs font-bold tracking-wide uppercase px-3 py-1.5 rounded-md bg-[#F5BC2C] text-[#0E2152] hover:bg-[#FFD668] transition"
        >
          Copiar
        </button>
      </header>
      <div className="p-5">
        <pre className="whitespace-pre-wrap font-sans text-[15px] leading-relaxed text-[#1A1A1A]">
          {variation.copy}
        </pre>
        {variation.framework_used && (
          <p className="mt-4 pt-4 border-t border-[#1A1A1A]/10 text-xs text-[#666] italic">
            {variation.framework_used}
          </p>
        )}
      </div>
    </article>
  );
}
