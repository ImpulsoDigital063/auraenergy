/**
 * Replicate Flux client — geração de imagens fotorrealistas sob demanda.
 *
 * Modelos cravados:
 * - Flux Schnell (~$0.003/img · 4 steps · 5-10s) — prototipagem rápida
 * - Flux Dev (~$0.025/img · 28 steps) — qualidade premium
 * - Flux 1.1 Pro (~$0.05/img) — top qualidade
 */

import Replicate from "replicate";

export type FluxModel = "schnell" | "dev" | "pro";

export interface GenerateImageInput {
  prompt: string;
  model?: FluxModel;
  aspectRatio?: "1:1" | "16:9" | "4:3" | "3:4" | "9:16";
  /** seed pra reproduzir o mesmo resultado depois (opcional) */
  seed?: number;
  /** negative prompt — coisas a evitar (Flux Pro+ suporta) */
  negativePrompt?: string;
}

const MODEL_IDS = {
  schnell: "black-forest-labs/flux-schnell",
  dev: "black-forest-labs/flux-dev",
  pro: "black-forest-labs/flux-1.1-pro",
} as const;

export class ImageGenError extends Error {
  constructor(message: string, public readonly code: string) {
    super(message);
  }
}

/**
 * Gera imagem via Replicate Flux.
 * Retorna URL temporária do Replicate (válida por algumas horas).
 * Pra persistir: baixar via fetch + salvar em /public ou /out-artes.
 */
export async function generateImage(
  input: GenerateImageInput,
): Promise<{ url: string; seed: number; model: string }> {
  const token = process.env.REPLICATE_API_TOKEN;
  if (!token) {
    throw new ImageGenError(
      "REPLICATE_API_TOKEN não setada",
      "missing_api_key",
    );
  }

  const client = new Replicate({ auth: token });
  const model = input.model ?? "schnell";
  const modelId = MODEL_IDS[model];
  const aspectRatio = input.aspectRatio ?? "1:1";

  const seed = input.seed ?? Math.floor(Math.random() * 1_000_000);

  const flexInput: Record<string, unknown> = {
    prompt: input.prompt,
    aspect_ratio: aspectRatio,
    output_format: "png",
    output_quality: 95,
    seed,
  };

  // Schnell tem num_inference_steps 4 (fixo). Dev/Pro aceitam negative_prompt.
  if (model !== "schnell" && input.negativePrompt) {
    flexInput.negative_prompt = input.negativePrompt;
  }

  const output = await client.run(modelId, { input: flexInput });

  // Flux Schnell/Dev retornam array de URLs; Pro retorna string única
  let url: string;
  if (Array.isArray(output)) {
    const first = output[0];
    url = typeof first === "string" ? first : (first as { url: () => string }).url();
  } else if (typeof output === "string") {
    url = output;
  } else if (output && typeof output === "object" && "url" in output) {
    url = (output as { url: () => string }).url();
  } else {
    throw new ImageGenError(
      `Output Replicate inesperado: ${JSON.stringify(output).slice(0, 200)}`,
      "unexpected_output",
    );
  }

  return { url, seed, model: modelId };
}
