#!/usr/bin/env node
/**
 * Remove background de imagens via API do remove.bg.
 *
 * Uso:
 *   npm run nobg -- <input.png> [output.png]
 *   npm run nobg -- public/gb/produtos/max-horus.png
 *
 * Output padrão: <input>-nobg.png (mesma pasta)
 */

import { config } from "dotenv";
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { resolve, dirname, basename, extname } from "node:path";

config({ path: ".env.local" });

const KEY = process.env.REMOVE_BG_API_KEY;
if (!KEY) {
  console.error("✗ REMOVE_BG_API_KEY não setada");
  process.exit(1);
}

const [, , inputArg, outputArg] = process.argv;

if (!inputArg) {
  console.error(`
Uso: npm run nobg -- <input.png> [output.png]
`);
  process.exit(1);
}

const inputPath = resolve(inputArg);
const out =
  outputArg ||
  resolve(
    dirname(inputPath),
    "nobg",
    `${basename(inputPath, extname(inputPath))}.png`,
  );
const outPath = resolve(out);

await mkdir(dirname(outPath), { recursive: true });

console.log(`Input:  ${inputPath}`);
console.log(`Output: ${outPath}`);
console.log("→ Enviando pra remove.bg...");

const imageBuffer = await readFile(inputPath);
const formData = new FormData();
formData.append(
  "image_file",
  new Blob([imageBuffer]),
  basename(inputPath),
);
formData.append("size", "auto");

const t0 = Date.now();
const res = await fetch("https://api.remove.bg/v1.0/removebg", {
  method: "POST",
  headers: { "X-Api-Key": KEY },
  body: formData,
});

if (!res.ok) {
  const err = await res.text();
  console.error(`✗ Erro ${res.status}: ${err}`);
  process.exit(1);
}

const buf = Buffer.from(await res.arrayBuffer());
await writeFile(outPath, buf);

console.log(
  `✓ Removido bg em ${((Date.now() - t0) / 1000).toFixed(1)}s · ${(buf.length / 1024).toFixed(1)} KB`,
);
console.log(`Créditos restantes: ${res.headers.get("x-credits-charged")} cobrados nesta call`);
