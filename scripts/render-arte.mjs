#!/usr/bin/env node
import puppeteer from "puppeteer-core";
import { existsSync } from "node:fs";
import { resolve } from "node:path";

const CHROME_PATHS = [
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe",
  process.env.LOCALAPPDATA + "/Google/Chrome/Application/chrome.exe",
];

function findChrome() {
  for (const p of CHROME_PATHS) {
    if (existsSync(p)) return p;
  }
  throw new Error("Chrome não encontrado. Procurei em:\n" + CHROME_PATHS.join("\n"));
}

const url = process.argv[2];
const out = process.argv[3];
const width = parseInt(process.argv[4] || "1080", 10);
const height = parseInt(process.argv[5] || "1080", 10);

if (!url || !out) {
  console.error(`
Uso: node scripts/render-arte.mjs <url> <output.png> [width=1080] [height=1080]

Exemplos:
  node scripts/render-arte.mjs https://auraenergy.vercel.app/artes/fio-b/1 ./out/slide1.png
  node scripts/render-arte.mjs http://localhost:3000/artes-canvas/teste ./out/teste.png 1080 1350
`);
  process.exit(1);
}

const outPath = resolve(out);
const chrome = findChrome();

console.log(`Chrome: ${chrome}`);
console.log(`URL: ${url}`);
console.log(`Saída: ${outPath} (${width}×${height})`);

const browser = await puppeteer.launch({
  executablePath: chrome,
  headless: true,
  defaultViewport: { width, height, deviceScaleFactor: 2 },
  args: ["--no-sandbox", "--disable-setuid-sandbox"],
});

try {
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: "networkidle0", timeout: 30000 });

  // Espera fontes carregarem
  await page.evaluateHandle("document.fonts.ready");

  await page.screenshot({
    path: outPath,
    type: "png",
    omitBackground: false,
    clip: { x: 0, y: 0, width, height },
  });

  console.log(`✓ Renderizado: ${outPath}`);
} finally {
  await browser.close();
}
