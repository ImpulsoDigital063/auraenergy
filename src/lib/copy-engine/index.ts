/**
 * Engine de geração de copy.
 * Orquestra brand voice + framework + briefing → Claude → JSON validado.
 */

import Anthropic from "@anthropic-ai/sdk";
import { getBrandVoice } from "../brand-voice/registry";
import { getFormat } from "../copy-framework/types";
import { buildSystemPrompt, buildUserPrompt } from "./prompt-builder";
import type { CopyBrief, CopyOutput } from "../brand-voice/types";

// Registry só importa por side effect — registra os formatos
import "../copy-framework/formats";

const MODEL = "claude-sonnet-4-6";
const MAX_TOKENS = 4096;

export class CopyGenError extends Error {
  constructor(message: string, public readonly code: string) {
    super(message);
  }
}

export async function generateCopy(brief: CopyBrief): Promise<CopyOutput> {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    throw new CopyGenError(
      "ANTHROPIC_API_KEY não setada no servidor",
      "missing_api_key",
    );
  }

  const brand = getBrandVoice(brief.client);
  if (!brand) {
    throw new CopyGenError(
      `Cliente '${brief.client}' não encontrado no registry`,
      "unknown_client",
    );
  }

  const framework = getFormat(brief.format);
  if (!framework) {
    throw new CopyGenError(
      `Formato '${brief.format}' não cravado no framework`,
      "unknown_format",
    );
  }

  const systemPrompt = buildSystemPrompt({
    brand,
    framework,
    objective: brief.objective,
    context: brief.context,
    tone: brief.tone,
  });

  const userPrompt = buildUserPrompt({
    brand,
    framework,
    objective: brief.objective,
    context: brief.context,
    tone: brief.tone,
  });

  const client = new Anthropic({ apiKey });

  const response = await client.messages.create({
    model: MODEL,
    max_tokens: MAX_TOKENS,
    system: systemPrompt,
    messages: [{ role: "user", content: userPrompt }],
  });

  const textBlock = response.content.find((b) => b.type === "text");
  if (!textBlock || textBlock.type !== "text") {
    throw new CopyGenError("Resposta sem bloco de texto", "no_text_response");
  }

  const raw = textBlock.text.trim();
  const json = extractJson(raw);

  if (!json || !Array.isArray(json.variations) || json.variations.length !== 3) {
    throw new CopyGenError(
      `Resposta malformada do LLM. Raw: ${raw.slice(0, 200)}`,
      "malformed_response",
    );
  }

  // Validar palavras proibidas
  const warnings: string[] = Array.isArray(json.warnings) ? [...json.warnings] : [];
  for (const v of json.variations) {
    for (const forbidden of brand.vocabulary.forbidden) {
      if (
        typeof v.copy === "string" &&
        v.copy.toLowerCase().includes(forbidden.toLowerCase())
      ) {
        warnings.push(
          `Variação "${v.label}" contém palavra proibida "${forbidden}" — revise antes de publicar`,
        );
      }
    }
  }

  return {
    variations: json.variations as CopyOutput["variations"],
    reasoning: json.reasoning || "",
    warnings: warnings.length ? warnings : undefined,
  };
}

function extractJson(raw: string): {
  variations?: Array<{ label: string; copy: string; framework_used: string }>;
  reasoning?: string;
  warnings?: string[];
} | null {
  // Tenta parse direto
  try {
    return JSON.parse(raw);
  } catch {}

  // Tenta extrair JSON entre code fences
  const fenceMatch = raw.match(/```(?:json)?\s*([\s\S]*?)\s*```/);
  if (fenceMatch) {
    try {
      return JSON.parse(fenceMatch[1]);
    } catch {}
  }

  // Tenta extrair primeiro { ... } balanceado
  const start = raw.indexOf("{");
  const end = raw.lastIndexOf("}");
  if (start !== -1 && end !== -1 && end > start) {
    try {
      return JSON.parse(raw.slice(start, end + 1));
    } catch {}
  }

  return null;
}
