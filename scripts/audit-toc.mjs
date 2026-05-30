import puppeteer from "puppeteer-core";

const b = await puppeteer.launch({
  executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  headless: "new",
  args: ["--no-sandbox"],
});

const p = await b.newPage();
await p.setViewport({ width: 1280, height: 800, isMobile: false });
await p.goto(
  "https://auraenergypalmas.com/artigos/pronaf-bioeconomia-solar-rural-tocantins",
  { waitUntil: "networkidle2", timeout: 30000 }
);
await new Promise((r) => setTimeout(r, 1500));
await p.screenshot({ path: "audit-shots/artigo-toc-desktop.png", fullPage: false });

await p.evaluate(() => window.scrollTo(0, 1200));
await new Promise((r) => setTimeout(r, 800));
await p.screenshot({
  path: "audit-shots/artigo-toc-desktop-scrolled.png",
  fullPage: false,
});

await b.close();
console.log("OK · 2 screenshots");
