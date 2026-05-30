#!/usr/bin/env node
/**
 * Face swap: pega rosto exato do Azeitona (foto original)
 * e cola sobre a cena cinematográfica gerada pelo Flux Kontext.
 * Garante fisionomia 100% preservada.
 *
 * Uso:
 *   node scripts/gen-azeitona-faceswap.mjs <variant=show|vaquejada|...> <target=desktop|mobile|square>
 *   (default: show desktop)
 */

import { config } from "dotenv";
import Replicate from "replicate";
import { writeFile, readFile } from "node:fs/promises";

config({ path: ".env.local" });
config();

const TOKEN = process.env.REPLICATE_API_TOKEN;
if (!TOKEN) {
  console.error("✗ REPLICATE_API_TOKEN não encontrada");
  process.exit(1);
}

const ASSETS = "C:/Users/Usuario/Desktop/azeitona-do-forro/assets";
const SOURCE_FACE = `${ASSETS}/azeitona.jpg`;

const variant = process.argv[2] || "show";
const target = process.argv[3] || "desktop";
if (!["desktop", "mobile", "square"].includes(target)) {
  console.error("✗ alvo inválido (use: desktop|mobile|square)");
  process.exit(1);
}

const targetPath = `${ASSETS}/hero-${variant}-${target}.png`;
const outPath = `${ASSETS}/hero-${variant}-${target}.png`; // overwrite

console.log(`Source face: ${SOURCE_FACE}`);
console.log(`Target img:  ${targetPath}`);
console.log(`Output:      ${outPath} (overwrite)`);

const toDataUri = async (path) => {
  const buf = await readFile(path);
  const mime = path.toLowerCase().endsWith(".png") ? "image/png" : "image/jpeg";
  return `data:${mime};base64,${buf.toString("base64")}`;
};

const [sourceUri, targetUri] = await Promise.all([
  toDataUri(SOURCE_FACE),
  toDataUri(targetPath),
]);

console.log(`→ Rodando face swap (codeplugtech/face-swap)...`);
const t0 = Date.now();
const replicate = new Replicate({ auth: TOKEN });

const output = await replicate.run(
  "codeplugtech/face-swap:278a81e7ebb22db98bcba54de985d22cc1abeead2754eb1f2af717247be69b34",
  {
    input: {
      swap_image: sourceUri,
      input_image: targetUri,
    },
  }
);

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
  console.error("✗ Output inesperado:", JSON.stringify(output).slice(0, 300));
  process.exit(1);
}

console.log(`✓ Face swap em ${((Date.now() - t0) / 1000).toFixed(1)}s`);
console.log(`URL Replicate: ${url}`);

const res = await fetch(url);
const buf = Buffer.from(await res.arrayBuffer());
await writeFile(outPath, buf);
console.log(`✓ Salvo: ${outPath} (${(buf.length / 1024).toFixed(1)} KB)`);
