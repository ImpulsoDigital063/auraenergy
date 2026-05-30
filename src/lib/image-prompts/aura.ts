/**
 * Biblioteca de prompts cravados pra Aura Energy.
 *
 * Cada prompt segue 3 regras:
 * 1. Vibe Palmas-TO / Tocantins / Brasil (não foto solar genérica internacional)
 * 2. Sem rosto antropomorfizado em objeto ([[feedback_nunca_mascote_objeto_antropomorfizado_ia]])
 * 3. Estilo editorial documentário · não cartoon · não ilustração
 */

export const AURA_IMAGE_PROMPTS = {
  // ─── Pessoas (fictícias, sem identidade real) ───────────────────────────
  engenheiroSolar: {
    prompt:
      "Brazilian solar engineer, 35 years old, wearing white safety helmet and tucked work shirt, standing on a residential rooftop with installed solar panels, sunny day, Tocantins Brazil aesthetic, professional editorial photography, natural lighting, shallow depth of field, photorealistic, cinematic, no logo",
    negativePrompt: "cartoon, illustration, anime, blurry, text overlay, watermark, hands deformed, multiple people",
    aspectRatio: "3:4" as const,
    suggestedModel: "dev" as const,
    note: "Foto editorial pra slide 5 V11 (CTA Renato) · figura fictícia até Renato mandar foto real",
  },

  tecnicoInstalando: {
    prompt:
      "Hands of a technician installing a solar panel on a brazilian tile roof, close-up, work gloves, screwdriver, blue solar panels with silver frames visible, golden hour lighting, documentary photography style, photorealistic, no faces visible",
    negativePrompt: "cartoon, illustration, full body, multiple people, text, logo, watermark",
    aspectRatio: "1:1" as const,
    suggestedModel: "schnell" as const,
    note: "B-roll · stories e slides de bastidores",
  },

  // ─── Cenários / Casas / Instalações ─────────────────────────────────────
  casaPalmasComSolar: {
    prompt:
      "Aerial drone view of a Brazilian middle-class single-family house in Palmas Tocantins, terracotta tile roof fully covered with solar panels, blue sky, tropical green vegetation around, neighborhood streets visible, photorealistic, high resolution, no text, no people",
    negativePrompt: "cartoon, illustration, european architecture, snow, text overlay",
    aspectRatio: "16:9" as const,
    suggestedModel: "dev" as const,
    note: "Slide 1 V11 · substitui foto Unsplash genérica",
  },

  telhadoSolarCloseUp: {
    prompt:
      "Close-up of solar photovoltaic panels installed on a residential roof, deep blue monocrystalline cells, silver aluminum frames, golden hour reflection, Brazilian sky in the background, photorealistic, editorial quality, no text",
    negativePrompt: "cartoon, illustration, text overlay, watermark, logo",
    aspectRatio: "1:1" as const,
    suggestedModel: "schnell" as const,
    note: "Hero genérico solar · uso múltiplo",
  },

  fazendaSolar: {
    prompt:
      "Rural farm in Tocantins Brazil with solar panels installed on a barn roof, golden hour, cattle in distance, blue sky with few clouds, tropical landscape, photorealistic, documentary photography, no text",
    negativePrompt: "cartoon, illustration, european landscape, text overlay",
    aspectRatio: "16:9" as const,
    suggestedModel: "dev" as const,
    note: "Slide pra audiência rural · Pronaf Bioeconomia",
  },

  // ─── Produtos / Equipamentos ────────────────────────────────────────────
  inversorSolar: {
    prompt:
      "Modern white solar inverter mounted on a clean garage wall, clear LCD display showing energy production, cables organized professionally, natural daylight, editorial product photography, photorealistic, no text, no logos visible",
    negativePrompt: "cartoon, multiple inverters, text overlay, brand logos",
    aspectRatio: "4:3" as const,
    suggestedModel: "dev" as const,
    note: "Educativo · tech transparente",
  },

  contaDeLuz: {
    prompt:
      "Detail of a brazilian electricity bill on a wooden table, Energisa-style format, focus on the total amount in Brazilian reais, glasses and pen nearby, soft natural lighting, editorial product photography, photorealistic, blurred specific account numbers, generic visible text",
    negativePrompt: "cartoon, illustration, fake currency, US dollar, european bill",
    aspectRatio: "1:1" as const,
    suggestedModel: "dev" as const,
    note: "Slide impacto financeiro · ancorar dor concreta",
  },

  // ─── Ambientes / Símbolos ───────────────────────────────────────────────
  sunriseTocantins: {
    prompt:
      "Sunrise over Palmas Tocantins Brazil cityscape, golden sky, modern buildings silhouette, slight haze, photorealistic, cinematic wide angle, no text overlay",
    negativePrompt: "cartoon, illustration, snowy mountains, text overlay",
    aspectRatio: "16:9" as const,
    suggestedModel: "schnell" as const,
    note: "Background atmosférico · capa de carrossel premium",
  },
} as const;

export type AuraPromptKey = keyof typeof AURA_IMAGE_PROMPTS;

export function getAuraPrompt(key: AuraPromptKey) {
  return AURA_IMAGE_PROMPTS[key];
}
