#!/usr/bin/env node
/**
 * Gera versão dourada/clara da logo Aura pra usar em fundos escuros
 * (slides dark zone — Blue Aura Deep). O azul marinho do texto "Aura Energy"
 * some no fundo azul; essa versão vira monocromática em tom dourado pra
 * destacar contra fundo escuro.
 *
 * Uso: node scripts/gen-logo-dark.mjs
 * Output: public/logo-aura-dark.png
 */

import sharp from "sharp";
import { resolve } from "node:path";

const ROOT = resolve(import.meta.dirname, "..");
const input = `${ROOT}/public/logo-aura.png`;
const output = `${ROOT}/public/logo-aura-dark.png`;

console.log(`Lendo: ${input}`);

await sharp(input)
  // tira azul-marinho do texto: dessatura e clareia
  .modulate({ saturation: 0.2, lightness: 1.6 })
  // aplica tint dourado uniforme (mantém transparência)
  .tint({ r: 245, g: 220, b: 130 })
  .toFile(output);

console.log(`✓ Gerado: ${output}`);
