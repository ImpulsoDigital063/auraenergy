#!/usr/bin/env node
/**
 * Helper pra gerar imagens via Replicate Flux usando prompts cravados.
 *
 * Uso:
 *   npm run img -- <prompt-key>                            (Flux Schnell · auto-output)
 *   npm run img -- <prompt-key> <out.png>                  (modelo default da key)
 *   npm run img -- <prompt-key> <out.png> <schnell|dev|pro>
 *   npm run img -- "<custom prompt completo>" <out.png>    (custom prompt)
 *
 * Prompts cravados:  ver `AURA_PROMPTS` abaixo (espelho de src/lib/image-prompts/aura.ts)
 */

import { config } from "dotenv";
import Replicate from "replicate";
import { writeFile, mkdir } from "node:fs/promises";
import { resolve, dirname } from "node:path";

config({ path: ".env.local" });
config(); // fallback pra .env

const TOKEN = process.env.REPLICATE_API_TOKEN;
if (!TOKEN) {
  console.error("✗ REPLICATE_API_TOKEN não encontrada (.env.local ou env do sistema)");
  process.exit(1);
}

const MODEL_IDS = {
  schnell: "black-forest-labs/flux-schnell",
  dev: "black-forest-labs/flux-dev",
  pro: "black-forest-labs/flux-1.1-pro",
};

// Espelho de src/lib/image-prompts/aura.ts — manter sincronizado
const AURA_PROMPTS = {
  engenheiroSolar: {
    prompt:
      "Brazilian solar engineer, 35 years old, wearing white safety helmet and tucked work shirt, standing on a residential rooftop with installed solar panels, sunny day, Tocantins Brazil aesthetic, professional editorial photography, natural lighting, shallow depth of field, photorealistic, cinematic, no logo",
    negativePrompt:
      "cartoon, illustration, anime, blurry, text overlay, watermark, hands deformed, multiple people",
    aspectRatio: "3:4",
    suggestedModel: "dev",
    note: "Foto editorial pra slide 5 V11 · figura fictícia",
  },
  tecnicoInstalando: {
    prompt:
      "Hands of a technician installing a solar panel on a brazilian tile roof, close-up, work gloves, screwdriver, blue solar panels with silver frames visible, golden hour lighting, documentary photography style, photorealistic, no faces visible",
    negativePrompt: "cartoon, illustration, full body, multiple people, text, logo, watermark",
    aspectRatio: "1:1",
    suggestedModel: "schnell",
    note: "B-roll · stories e bastidores",
  },
  casaPalmasComSolar: {
    prompt:
      "Aerial drone view of a Brazilian middle-class single-family house in Palmas Tocantins, terracotta tile roof fully covered with solar panels, blue sky, tropical green vegetation around, neighborhood streets visible, photorealistic, high resolution, no text, no people",
    negativePrompt: "cartoon, illustration, european architecture, snow, text overlay",
    aspectRatio: "16:9",
    suggestedModel: "dev",
    note: "Slide 1 V11 · substitui Unsplash",
  },
  telhadoSolarCloseUp: {
    prompt:
      "Close-up of solar photovoltaic panels installed on a residential roof, deep blue monocrystalline cells, silver aluminum frames, golden hour reflection, Brazilian sky in the background, photorealistic, editorial quality, no text",
    negativePrompt: "cartoon, illustration, text overlay, watermark, logo",
    aspectRatio: "1:1",
    suggestedModel: "schnell",
    note: "Hero genérico solar · uso múltiplo",
  },
  fazendaSolar: {
    prompt:
      "Rural farm in Tocantins Brazil with solar panels installed on a barn roof, golden hour, cattle in distance, blue sky with few clouds, tropical landscape, photorealistic, documentary photography, no text",
    negativePrompt: "cartoon, illustration, european landscape, text overlay",
    aspectRatio: "16:9",
    suggestedModel: "dev",
    note: "Audiência rural · Pronaf Bioeconomia",
  },
  inversorSolar: {
    prompt:
      "Modern white solar inverter mounted on a clean garage wall, clear LCD display showing energy production, cables organized professionally, natural daylight, editorial product photography, photorealistic, no text, no logos visible",
    negativePrompt: "cartoon, multiple inverters, text overlay, brand logos",
    aspectRatio: "4:3",
    suggestedModel: "dev",
    note: "Educativo · tech transparente",
  },
  contaDeLuz: {
    prompt:
      "Detail of a brazilian electricity bill on a wooden table, Energisa-style format, focus on the total amount in Brazilian reais, glasses and pen nearby, soft natural lighting, editorial product photography, photorealistic, blurred specific account numbers, generic visible text",
    negativePrompt: "cartoon, illustration, fake currency, US dollar, european bill",
    aspectRatio: "1:1",
    suggestedModel: "dev",
    note: "Impacto financeiro · ancorar dor concreta",
  },
  sunriseTocantins: {
    prompt:
      "Sunrise over Palmas Tocantins Brazil cityscape, golden sky, modern buildings silhouette, slight haze, photorealistic, cinematic wide angle, no text overlay",
    negativePrompt: "cartoon, illustration, snowy mountains, text overlay",
    aspectRatio: "16:9",
    suggestedModel: "schnell",
    note: "Background atmosférico · capa premium",
  },
};

const [, , keyOrPrompt, outArg, modelArg, arArg] = process.argv;

if (!keyOrPrompt) {
  console.error(`
Uso: npm run img -- <prompt-key-ou-custom> [out=auto] [model=schnell|dev|pro]

Prompt keys cravados:
${Object.entries(AURA_PROMPTS)
  .map(([k, v]) => `  - ${k.padEnd(24)} ${v.note} (default: ${v.suggestedModel})`)
  .join("\n")}

Exemplos:
  npm run img -- engenheiroSolar
  npm run img -- casaPalmasComSolar ./out-artes/slide1.png dev
  npm run img -- "prompt custom" ./out-artes/custom.png schnell
`);
  process.exit(1);
}

let prompt, aspectRatio, model, negativePrompt, note;
if (AURA_PROMPTS[keyOrPrompt]) {
  const p = AURA_PROMPTS[keyOrPrompt];
  prompt = p.prompt;
  aspectRatio = p.aspectRatio;
  model = modelArg || p.suggestedModel;
  negativePrompt = p.negativePrompt;
  note = p.note;
} else {
  prompt = keyOrPrompt;
  aspectRatio = arArg || "1:1";
  model = modelArg || "schnell";
}

// arArg override (mesmo pra prompt-key)
if (arArg) aspectRatio = arArg;

const out = outArg || `./out-artes/${keyOrPrompt.slice(0, 30).replace(/\W+/g, "-")}-${Date.now()}.png`;
const outPath = resolve(out);

await mkdir(dirname(outPath), { recursive: true });

console.log(`Modelo: ${MODEL_IDS[model]}`);
console.log(`Aspect: ${aspectRatio}`);
if (note) console.log(`Note:   ${note}`);
console.log(`Prompt: ${prompt.slice(0, 110)}${prompt.length > 110 ? "..." : ""}`);
console.log(`→ Gerando...`);

const t0 = Date.now();
const replicate = new Replicate({ auth: TOKEN });

const input = {
  prompt,
  aspect_ratio: aspectRatio,
  output_format: "png",
  output_quality: 95,
};
if (model !== "schnell" && negativePrompt) {
  input.negative_prompt = negativePrompt;
}

const output = await replicate.run(MODEL_IDS[model], { input });

let url;
if (Array.isArray(output)) {
  const first = output[0];
  url = typeof first === "string" ? first : typeof first?.url === "function" ? first.url() : null;
} else if (typeof output === "string") {
  url = output;
} else if (output?.url) {
  url = typeof output.url === "function" ? output.url() : output.url;
}

if (!url) {
  console.error("✗ Output Replicate inesperado:", JSON.stringify(output).slice(0, 200));
  process.exit(1);
}

console.log(`✓ Gerada em ${((Date.now() - t0) / 1000).toFixed(1)}s`);
console.log(`URL temporária Replicate: ${url}`);

const res = await fetch(url);
const buf = Buffer.from(await res.arrayBuffer());
await writeFile(outPath, buf);
console.log(`✓ Salvo: ${outPath} (${(buf.length / 1024).toFixed(1)} KB)`);
