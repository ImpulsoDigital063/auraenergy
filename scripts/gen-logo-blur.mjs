#!/usr/bin/env node
/**
 * Gera versão desfocada/dessaturada do logo Aura pra usar como
 * background watermark em artes (Satori não suporta filter: blur).
 *
 * Uso: node scripts/gen-logo-blur.mjs
 * Output: public/logo-aura-blur-bg.png (1200x1200, blur 35)
 */

import sharp from "sharp";
import { resolve } from "node:path";

const ROOT = resolve(import.meta.dirname, "..");
const input = `${ROOT}/public/logo-aura-perfil.png`;
const output = `${ROOT}/public/logo-aura-blur-bg.png`;

console.log(`Lendo: ${input}`);

await sharp(input)
  .resize(1200, 1200, {
    fit: "contain",
    background: { r: 0, g: 0, b: 0, alpha: 0 },
  })
  .blur(12)
  .toFile(output);

console.log(`✓ Gerado: ${output}`);
