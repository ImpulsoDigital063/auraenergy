import puppeteer from "puppeteer-core";
import { mkdirSync, existsSync } from "node:fs";
import { join } from "node:path";

const CHROME_PATH = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";

const TARGETS = [
  // Linktree premium
  { path: "/links", name: "links", viewports: ["mobile"] },
  // LPs com novidades (BlocoPIX)
  { path: "/casa", name: "casa-pix", viewports: ["mobile", "desktop"], scrollY: 4500 },
  { path: "/comercio", name: "comercio-pix", viewports: ["mobile"], scrollY: 2800 },
  // 2 artigos novos
  {
    path: "/artigos/energisa-tocantins-homologacao-solar-passo-a-passo",
    name: "artigo-energisa",
    viewports: ["mobile", "desktop"],
  },
  {
    path: "/artigos/programa-palmas-solar-40-desconto-iptu-passo-a-passo",
    name: "artigo-palmas-solar",
    viewports: ["mobile", "desktop"],
  },
  // Hub com 13 artigos
  { path: "/artigos", name: "artigos-13", viewports: ["mobile", "desktop"] },
  // Sticky CTA WhatsApp · scroll mobile pra cravar que aparece
  { path: "/casa", name: "casa-sticky-whats", viewports: ["mobile"], scrollY: 1200 },
];

const VIEWPORTS = {
  mobile: { width: 375, height: 812, isMobile: true },
  desktop: { width: 1280, height: 800, isMobile: false },
};

const OUT_DIR = "audit-shots";
const BASE = "https://auraenergypalmas.com";

if (!existsSync(OUT_DIR)) mkdirSync(OUT_DIR, { recursive: true });

const browser = await puppeteer.launch({
  executablePath: CHROME_PATH,
  headless: "new",
  args: ["--no-sandbox", "--disable-setuid-sandbox"],
});

console.log("[audit] iniciado");
const start = Date.now();

for (const target of TARGETS) {
  for (const vpName of target.viewports) {
    const vp = VIEWPORTS[vpName];
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

    const url = BASE + target.path;
    const file = join(OUT_DIR, `${target.name}-${vpName}.png`);

    try {
      await page.goto(url, { waitUntil: "networkidle2", timeout: 30000 });
      await new Promise((r) => setTimeout(r, 1500));
      if (target.scrollY) {
        await page.evaluate((y) => window.scrollTo(0, y), target.scrollY);
        await new Promise((r) => setTimeout(r, 1200));
      }
      await page.screenshot({ path: file, fullPage: false });
      console.log(`[OK] ${target.name}-${vpName}.png`);
    } catch (e) {
      console.log(`[FAIL] ${target.name}-${vpName}: ${e.message}`);
    }

    await page.close();
  }
}

await browser.close();
console.log(`[audit] terminado em ${((Date.now() - start) / 1000).toFixed(1)}s`);
