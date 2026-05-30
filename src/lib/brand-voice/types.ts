/**
 * Tipos do sistema Brand Voice.
 * Cada cliente Impulso vira um arquivo seguindo essa interface.
 */

export interface BrandVoice {
  id: string;
  displayName: string;

  identity: {
    sector: string;
    location: string;
    target: string;
    differential: string;
    founder?: {
      name: string;
      role: string;
      whatsapp?: string;
      voice: string;
    };
  };

  pillars: Array<{
    name: string;
    description: string;
  }>;

  tone: {
    posture: string;
    relationship: string;
    voiceRule: string;
    formality: string;
    urgency: string;
    proof: string;
  };

  vocabulary: {
    use: string[];
    avoid: string[];
    forbidden: string[];
  };

  patterns: {
    openersValidated: string[];
    ctasValidated: string[];
    proofPattern: string;
    objectionHandlers: Record<string, string>;
  };

  visual: {
    palettePrimary: Record<string, string>;
    paletteAccent: Record<string, string>;
    typography: string;
    iconRule: string;
    assets?: Record<string, string>;
  };

  examples: Array<{
    format: string;
    objective: string;
    copy: string;
  }>;

  antiExamples: Array<{
    reason: string;
    bad: string;
  }>;
}

export type CopyFormat =
  | "post-instagram"
  | "carrossel-instagram-capa"
  | "carrossel-instagram-slide"
  | "story"
  | "story-sequencial"
  | "reel-script"
  | "meta-ads-topo"
  | "meta-ads-meio"
  | "meta-ads-fundo"
  | "email"
  | "whatsapp-mensagem"
  | "site-headline"
  | "site-bullet";

export interface CopyBrief {
  client: string; // ID do BrandVoice (ex: "aura-energy")
  format: CopyFormat;
  objective: string; // o que o post precisa fazer
  context?: string; // info adicional (público, oferta, prova etc.)
  tone?: "conservador" | "punchy" | "ousado"; // intensidade da variação
}

export interface CopyOutput {
  variations: Array<{
    label: "curta" | "média" | "longa";
    copy: string;
    framework_used: string; // qual estrutura cravada foi aplicada
  }>;
  reasoning: string; // por que esse caminho
  warnings?: string[]; // se algo bateu em palavra proibida etc.
}
