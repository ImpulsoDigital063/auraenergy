#!/usr/bin/env node
/**
 * Gera os favicons da Aura a partir do símbolo (sol + torre) recortado da logo.
 * Saídas (auto-detectadas pelo Next App Router em src/app/):
 *   - favicon.ico  (256, embrulhado em ICO)
 *   - icon.png     (512)
 *   - apple-icon.png (180)
 */
import sharp from "sharp";
import { writeFile } from "node:fs/promises";

const SRC = "public/logo-aura.png";
const SYMBOL = { left: 312, top: 240, width: 456, height: 285 }; // só o emblema, sem texto
const WHITE = { r: 255, g: 255, b: 255 };

async function makeIcon(size) {
  const inner = Math.round(size * 0.96);
  const pad = Math.round((size - inner) / 2);
  return sharp(SRC)
    .extract(SYMBOL)
    .resize(inner, inner, { fit: "contain", background: WHITE })
    .extend({ top: pad, bottom: pad, left: pad, right: pad, background: WHITE })
    .flatten({ background: WHITE })
    .ensureAlpha(1) // Turbopack exige PNG RGBA dentro do .ico
    .resize(size, size)
    .png()
    .toBuffer();
}

function pngToIco(png) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2); // type: icon
  header.writeUInt16LE(1, 4); // 1 image
  const entry = Buffer.alloc(16);
  entry.writeUInt8(0, 0); // width 0 = 256
  entry.writeUInt8(0, 1); // height 0 = 256
  entry.writeUInt16LE(1, 4); // planes
  entry.writeUInt16LE(32, 6); // bpp
  entry.writeUInt32LE(png.length, 8);
  entry.writeUInt32LE(22, 12); // offset
  return Buffer.concat([header, entry, png]);
}

const icon512 = await makeIcon(512);
const apple180 = await makeIcon(180);
const png256 = await makeIcon(256);

await writeFile("src/app/icon.png", icon512);
await writeFile("src/app/apple-icon.png", apple180);
await writeFile("src/app/favicon.ico", pngToIco(png256));

console.log("Favicons Aura gerados: icon.png (512), apple-icon.png (180), favicon.ico (256)");
