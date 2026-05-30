/**
 * Registry de Brand Voices.
 * Cada cliente Impulso é registrado aqui. Pra adicionar novo:
 *  1. Cria arquivo em src/lib/brand-voice/<cliente>.ts
 *  2. Importa e adiciona no Map abaixo.
 */

import type { BrandVoice } from "./types";
import { auraVoice } from "./aura";
import { gbNutritionVoice } from "./gb-nutrition";

export const BRAND_VOICES: Record<string, BrandVoice> = {
  "aura-energy": auraVoice,
  "gb-nutrition": gbNutritionVoice,
};

export function getBrandVoice(id: string): BrandVoice | undefined {
  return BRAND_VOICES[id];
}

export function listBrandVoices(): Array<{ id: string; displayName: string }> {
  return Object.values(BRAND_VOICES).map((v) => ({
    id: v.id,
    displayName: v.displayName,
  }));
}
