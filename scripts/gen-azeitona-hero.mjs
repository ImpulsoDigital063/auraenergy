#!/usr/bin/env node
/**
 * Gera hero do Azeitona do Forró via Flux Kontext Pro (img2img).
 * Preserva o rosto da foto de referência, muda cenário.
 *
 * Uso:
 *   node scripts/gen-azeitona-hero.mjs [variant=show|cerrado|estrada] [format=desktop|mobile]
 */

import { config } from "dotenv";
import Replicate from "replicate";
import { writeFile, readFile, mkdir } from "node:fs/promises";
import { dirname } from "node:path";

config({ path: ".env.local" });
config();

const TOKEN = process.env.REPLICATE_API_TOKEN;
if (!TOKEN) {
  console.error("✗ REPLICATE_API_TOKEN não encontrada");
  process.exit(1);
}

const INPUT_PATH = "C:/Users/Usuario/Desktop/azeitona-do-forro/assets/azeitona.jpg";
const OUT_DIR = "C:/Users/Usuario/Desktop/azeitona-do-forro/assets";

const PROMPTS = {
  show: {
    desktop:
      "Same young brazilian man as in the reference photo, preserving his exact facial features and identity, performing live on a forró stage at night, three-quarter wide framing, holding a microphone close to his mouth, mid-song expression, wide-brimmed dark brown felt cowboy hat, black leather biker jacket, deep amber and warm orange stage lights from the side, shafts of light cutting through haze, blurred crowd silhouettes with raised hands spreading across the background, slight motion blur, cinematic documentary photography, anamorphic lens flare, dust and atmosphere particles in the light beams, high contrast, terra-burned warm color palette (deep reds, ambers, blacks), shallow depth of field, photorealistic editorial quality, shot on medium format camera, no text overlay, no logo, no watermark",
    mobile:
      "Same young brazilian man as in the reference photo, preserving his exact facial features and identity, performing live on a forró stage at night, vertical portrait framing centered on him from chest up, holding a microphone close to his mouth, mid-song expression, wide-brimmed dark brown felt cowboy hat, black leather biker jacket, deep amber and warm orange stage lights from above and side, shafts of light cutting through haze, blurred crowd silhouettes with raised hands rising from the bottom of frame, cinematic documentary photography, anamorphic lens flare, dust particles in light beams, high contrast, terra-burned warm color palette, shallow depth of field, photorealistic editorial quality, no text, no logo, no watermark",
  },
  cerrado: {
    desktop:
      "Same young brazilian man as in the reference photo, preserving his exact facial features, standing in the brazilian cerrado at golden hour, three-quarter view looking slightly off camera, wide-brimmed dark brown felt cowboy hat, black leather jacket, dry red earth ground, low scattered cerrado vegetation, vast warm sky with low sun, slight wind, dust particles, cinematic documentary photography, terra-burned warm color palette, shallow depth of field, photorealistic editorial portrait, 35mm film aesthetic, no text, no logo",
    mobile:
      "Same young brazilian man as in the reference photo, preserving his exact facial features, standing in the brazilian cerrado at golden hour, vertical portrait centered on him from waist up, wide-brimmed dark brown felt cowboy hat, black leather jacket, dry red earth and low cerrado vegetation visible at bottom, vast warm sky with low sun behind him, slight wind, dust particles backlit, cinematic documentary photography, terra-burned warm color palette, shallow depth of field, photorealistic editorial portrait, 35mm film aesthetic, no text, no logo",
  },
  estrada: {
    desktop:
      "Same young brazilian man as in the reference photo, preserving his exact facial features, leaning against a dusty pickup truck on a dirt road at dusk in the brazilian sertão, wide-brimmed felt cowboy hat, black leather jacket, warm tungsten headlights glow, red dust suspended in the air, distant horizon with cerrado vegetation, cinematic documentary photography, terra-burned warm color palette, anamorphic flare, shallow depth of field, photorealistic editorial, no text, no logo",
    mobile:
      "Same young brazilian man as in the reference photo, preserving his exact facial features, leaning against a dusty pickup truck on a dirt road at dusk, vertical portrait framing, wide-brimmed felt cowboy hat, black leather jacket, warm tungsten headlights glow from below, red dust suspended in the air, distant cerrado horizon visible at top, cinematic documentary photography, terra-burned warm color palette, anamorphic flare, shallow depth of field, photorealistic editorial, no text, no logo",
  },
  vaquejada: {
    square:
      "Same young brazilian man as in the reference photo, preserving his exact facial features and identity. Singing into a wireless microphone held in his right hand, mid-song expression, performing live at a brazilian vaquejada rural party in the sertão (Maranhão-Tocantins region). Behind him: silhouetted crowd wearing wide-brimmed cowboy hats raising their hands, dusty arena atmosphere. Wooden stage with sound equipment visible. Warm amber and yellow stage lights mixing with deep orange backlight, shafts of light cutting through hanging dust. Night scene. Wearing his signature wide-brimmed dark brown felt cowboy hat, dark sunglasses, black leather biker jacket over black t-shirt. Cinematic documentary photography, anamorphic lens flare, photorealistic editorial quality, shallow depth of field. No text, no logo, no watermark.",
    desktop:
      "Same young brazilian man as in the reference photo, preserving his exact facial features and identity. Singing into a wireless microphone held in his right hand, mid-song expression, performing live at a brazilian vaquejada rural party in the sertão (Maranhão-Tocantins region). Behind him: silhouetted crowd wearing wide-brimmed cowboy hats raising their hands, dusty arena atmosphere. Wooden stage with sound equipment visible. Warm amber and yellow stage lights, shafts of light cutting through hanging dust. Night scene. Wide framing showing him from chest up centered, crowd spreading across the background. Wearing his signature wide-brimmed dark brown felt cowboy hat, dark sunglasses, black leather biker jacket over black t-shirt. Cinematic documentary photography, anamorphic lens flare, photorealistic editorial quality, shallow depth of field. No text, no logo, no watermark.",
    mobile:
      "Same young brazilian man as in the reference photo, preserving his exact facial features and identity. Singing into a wireless microphone held in his right hand, mid-song expression, performing live at a brazilian vaquejada rural party in the sertão. Vertical portrait framing centered on him from chest up. Behind him: silhouetted crowd wearing cowboy hats raising hands. Warm amber and yellow stage lights, shafts of light cutting through hanging dust. Night scene. Brown felt cowboy hat, dark sunglasses, black leather biker jacket. Cinematic documentary photography, anamorphic lens flare, photorealistic editorial quality. No text, no logo, no watermark.",
  },
};

const ASPECT = { desktop: "16:9", mobile: "9:16", square: "1:1" };

const variant = process.argv[2] || "show";
const format = process.argv[3] || "desktop";

if (!PROMPTS[variant]) {
  console.error(`✗ variante inválida: ${variant} (use: ${Object.keys(PROMPTS).join("|")})`);
  process.exit(1);
}
if (!ASPECT[format]) {
  console.error(`✗ formato inválido: ${format} (use: desktop|mobile)`);
  process.exit(1);
}

const prompt = PROMPTS[variant][format];
const aspect_ratio = ASPECT[format];
const outName = `hero-${variant}-${format}.png`;
const outPath = `${OUT_DIR}/${outName}`;
await mkdir(dirname(outPath), { recursive: true });

console.log(`Variante: ${variant} · Formato: ${format} · Aspect: ${aspect_ratio}`);
console.log(`Saída:    ${outPath}`);

const imgBuffer = await readFile(INPUT_PATH);
const mime = INPUT_PATH.toLowerCase().endsWith(".png") ? "image/png" : "image/jpeg";
const dataUri = `data:${mime};base64,${imgBuffer.toString("base64")}`;

console.log(`→ Gerando via Flux Kontext Pro...`);
const t0 = Date.now();
const replicate = new Replicate({ auth: TOKEN });

const output = await replicate.run("black-forest-labs/flux-kontext-pro", {
  input: {
    prompt,
    input_image: dataUri,
    aspect_ratio,
    output_format: "png",
    safety_tolerance: 2,
  },
});

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

console.log(`✓ Gerada em ${((Date.now() - t0) / 1000).toFixed(1)}s`);
console.log(`URL Replicate: ${url}`);

const res = await fetch(url);
const buf = Buffer.from(await res.arrayBuffer());
await writeFile(outPath, buf);
console.log(`✓ Salvo: ${outPath} (${(buf.length / 1024).toFixed(1)} KB)`);
