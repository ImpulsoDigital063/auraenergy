// Audit visual via puppeteer-core · cravado pra modo solo.
// Abre URLs cravadas no Chrome local, tira screenshot mobile + desktop,
// salva em /audit-shots/ pra Verbo Code ler com Read tool.

import puppeteer from "puppeteer-core";
import { mkdirSync, existsSync } from "node:fs";
import { join } from "node:path";

const CHROME_PATH = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";

const URLS = [
  { path: "/", name: "home" },
  { path: "/casa", name: "casa" },
  { path: "/comercio", name: "comercio" },
  { path: "/industria", name: "industria" },
  { path: "/rural", name: "rural" },
  { path: "/artigos", name: "artigos-hub" },
  {
    path: "/artigos/pronaf-bioeconomia-solar-rural-tocantins",
    name: "artigo-pronaf",
  },
];

const VIEWPORTS = [
  { name: "mobile", width: 375, height: 812, isMobile: true },
  { name: "desktop", width: 1280, height: 800, isMobile: false },
];

const OUT_DIR = "audit-shots";
const BASE = "https://auraenergypalmas.com";

if (!existsSync(OUT_DIR)) {
  mkdirSync(OUT_DIR, { recursive: true });
}

const browser = await puppeteer.launch({
  executablePath: CHROME_PATH,
  headless: "new",
  args: ["--no-sandbox", "--disable-setuid-sandbox"],
});

console.log("[audit] iniciado");
const start = Date.now();

for (const url of URLS) {
  for (const vp of VIEWPORTS) {
    const page = await browser.newPage();
    await page.setViewport({
      width: vp.width,
      height: vp.height,
      isMobile: vp.isMobile,
      deviceScaleFactor: 1,
    });

    if (vp.isMobile) {
      await page.setUserAgent(
        "Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.0 Mobile/15E148 Safari/604.1"
      );
    }

    const targetUrl = BASE + url.path;
    const file = join(OUT_DIR, `${url.name}-${vp.name}.png`);

    try {
      await page.goto(targetUrl, { waitUntil: "networkidle2", timeout: 30000 });
      // Aguarda animações iniciais terminarem (Reveal components)
      await new Promise((r) => setTimeout(r, 1500));
      await page.screenshot({ path: file, fullPage: false });
      console.log(`[OK] ${url.name}-${vp.name}.png`);
    } catch (e) {
      console.log(`[FAIL] ${url.name}-${vp.name}: ${e.message}`);
    }

    await page.close();
  }
}

await browser.close();
const sec = ((Date.now() - start) / 1000).toFixed(1);
console.log(`[audit] terminado em ${sec}s · screenshots em ${OUT_DIR}/`);
