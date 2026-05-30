/**
 * Tipos do Framework de Copy.
 * Cada formato tem estrutura cravada com "beats" — partes obrigatórias.
 */

import type { CopyFormat } from "../brand-voice/types";

export interface CopyBeat {
  name: string;
  role: string;
  rules: string[];
  examples?: string[];
}

export interface FormatFramework {
  format: CopyFormat;
  displayName: string;
  description: string;
  context: string; // onde/quando usar
  beats: CopyBeat[];
  constraints: {
    maxChars?: number;
    minChars?: number;
    maxLines?: number;
    notes?: string;
  };
  principles: string[]; // regras específicas do formato
  references?: string[]; // sources/inspirações
}

export const FORMAT_REGISTRY = new Map<CopyFormat, FormatFramework>();

export function registerFormat(f: FormatFramework) {
  FORMAT_REGISTRY.set(f.format, f);
}

export function getFormat(format: CopyFormat): FormatFramework | undefined {
  return FORMAT_REGISTRY.get(format);
}
