"use client";

// Pagina cliente-facing pra recuperar rascunho do briefing salvo no localStorage.
// Cravada 21/05/2026 pós-incidente Renato (3 briefings perdidos por falha silenciosa).
// noindex configurado via layout.tsx pra esta rota nao indexar no Google.

import { useEffect, useState } from "react";

// Le o localStorage que o BriefingForm salva (chave + formato cravados em src/components/BriefingForm.tsx).
const STORAGE_KEY = "aura-briefing-v3";

type SavedShape = {
  data?: Record<string, unknown>;
  step?: number;
};

type ViewState = "loading" | "found" | "empty" | "copied";

export default function RecuperarBriefingPage() {
  const [state, setState] = useState<ViewState>("loading");
  const [rawJson, setRawJson] = useState<string>("");
  const [step, setStep] = useState<number>(0);
  const [filledCount, setFilledCount] = useState<number>(0);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (!saved) {
        setState("empty");
        return;
      }
      const parsed = JSON.parse(saved) as SavedShape;
      const dataObj = (parsed.data ?? {}) as Record<string, unknown>;
      const filled = Object.values(dataObj).filter((v) => {
        if (v === null || v === undefined || v === "") return false;
        if (Array.isArray(v) && v.length === 0) return false;
        if (typeof v === "number" && v === 0) return false;
        if (typeof v === "boolean" && v === false) return false;
        return true;
      }).length;
      setStep(parsed.step ?? 0);
      setFilledCount(filled);
      setRawJson(JSON.stringify(parsed, null, 2));
      setState(filled > 0 ? "found" : "empty");
    } catch {
      setState("empty");
    }
  }, []);

  async function copyAll() {
    try {
      await navigator.clipboard.writeText(rawJson);
      setState("copied");
      setTimeout(() => setState("found"), 3000);
    } catch {
      const textarea = document.getElementById("respostas-textarea") as HTMLTextAreaElement | null;
      if (textarea) {
        textarea.select();
        document.execCommand("copy");
        setState("copied");
        setTimeout(() => setState("found"), 3000);
      }
    }
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#FFFEF2",
        padding: "32px 16px 64px",
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      }}
    >
      <div style={{ maxWidth: 720, margin: "0 auto" }}>
        <p
          style={{
            fontSize: 11,
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.14em",
            color: "#F5BC2C",
            margin: 0,
          }}
        >
          Aura Energy · Impulso Digital
        </p>
        <h1
          style={{
            fontSize: 30,
            fontWeight: 700,
            color: "#0F1B3D",
            marginTop: 6,
            marginBottom: 10,
            lineHeight: 1.2,
          }}
        >
          Recuperar suas respostas
        </h1>
        <p
          style={{
            fontSize: 14,
            color: "rgba(15,27,61,0.65)",
            marginBottom: 32,
            lineHeight: 1.55,
          }}
        >
          Esta página lê o rascunho que ficou salvo neste navegador e te ajuda a
          enviar pro Eduardo sem você precisar preencher tudo de novo.
        </p>

        {state === "loading" && (
          <p
            style={{
              textAlign: "center",
              padding: 48,
              color: "rgba(15,27,61,0.55)",
            }}
          >
            Carregando…
          </p>
        )}

        {state === "empty" && (
          <div
            style={{
              background: "#fff",
              border: "1px solid rgba(15,27,61,0.10)",
              borderRadius: 16,
              padding: 28,
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontSize: 16,
                fontWeight: 700,
                color: "#0F1B3D",
                marginTop: 0,
                marginBottom: 10,
              }}
            >
              Não encontrei suas respostas neste navegador
            </p>
            <p
              style={{
                fontSize: 14,
                color: "rgba(15,27,61,0.65)",
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              Pode ser que você tenha preenchido em outro navegador / aparelho,
              ou que o rascunho já tenha sido enviado. Se foi outro
              navegador/aparelho, abre esta mesma URL nele.
            </p>
            <p
              style={{
                fontSize: 13,
                color: "rgba(15,27,61,0.55)",
                marginTop: 18,
                marginBottom: 0,
              }}
            >
              Se ainda não preencheu o briefing, começa em{" "}
              <a
                href="/briefing"
                style={{ color: "#0F1B3D", textDecoration: "underline" }}
              >
                /briefing
              </a>
              .
            </p>
          </div>
        )}

        {(state === "found" || state === "copied") && (
          <>
            <div
              style={{
                background: "rgba(245,188,44,0.18)",
                borderLeft: "4px solid #F5BC2C",
                padding: "16px 20px",
                borderRadius: 8,
                marginBottom: 24,
              }}
            >
              <p
                style={{
                  fontSize: 14,
                  fontWeight: 700,
                  color: "#0F1B3D",
                  margin: 0,
                  marginBottom: 4,
                }}
              >
                Encontrei {filledCount} campo{filledCount === 1 ? "" : "s"}{" "}
                preenchido{filledCount === 1 ? "" : "s"} · você estava no bloco{" "}
                {step + 1} de 12
              </p>
              <p
                style={{
                  fontSize: 13,
                  color: "rgba(15,27,61,0.70)",
                  margin: 0,
                  lineHeight: 1.5,
                }}
              >
                Aperta o botão abaixo, cola no WhatsApp do Eduardo e manda. Ele
                recupera tudo em segundos do lado dele.
              </p>
            </div>

            <button
              type="button"
              onClick={copyAll}
              style={{
                width: "100%",
                padding: "18px 24px",
                borderRadius: 12,
                fontSize: 16,
                fontWeight: 700,
                color: "#fff",
                background:
                  state === "copied"
                    ? "#16A34A"
                    : "linear-gradient(135deg, #0F1B3D 0%, #1A2B5C 100%)",
                border: "none",
                cursor: "pointer",
                boxShadow: "0 8px 20px -6px rgba(15,27,61,0.40)",
                marginBottom: 24,
                transition: "background 200ms",
              }}
            >
              {state === "copied"
                ? "Copiado · agora cola no WhatsApp do Eduardo"
                : "Copiar minhas respostas"}
            </button>

            <p
              style={{
                fontSize: 12,
                color: "rgba(15,27,61,0.55)",
                marginBottom: 8,
              }}
            >
              Conteúdo que vai ser copiado (pra conferência):
            </p>
            <textarea
              id="respostas-textarea"
              readOnly
              value={rawJson}
              onClick={(e) => (e.target as HTMLTextAreaElement).select()}
              style={{
                width: "100%",
                minHeight: 240,
                padding: 16,
                borderRadius: 12,
                border: "1px solid rgba(15,27,61,0.10)",
                fontSize: 11,
                fontFamily:
                  'ui-monospace, SFMono-Regular, Menlo, Consolas, monospace',
                background: "#fff",
                color: "#0F1B3D",
                resize: "vertical",
                lineHeight: 1.5,
              }}
            />
          </>
        )}

        <p
          style={{
            marginTop: 36,
            paddingTop: 16,
            borderTop: "1px solid rgba(15,27,61,0.10)",
            fontSize: 11,
            color: "rgba(15,27,61,0.50)",
            textAlign: "center",
            lineHeight: 1.6,
          }}
        >
          Esta página não envia nada automaticamente. Suas respostas só vão pro
          Eduardo quando você copiar e colar manualmente.
        </p>
      </div>
    </div>
  );
}

export const dynamic = "force-dynamic";
