import { NextRequest, NextResponse } from "next/server";
import { generateCopy, CopyGenError } from "@/lib/copy-engine";
import type { CopyBrief, CopyFormat } from "@/lib/brand-voice/types";

export const runtime = "nodejs";
export const maxDuration = 60;

const TOKEN = process.env.COPY_GEN_TOKEN;

const ALLOWED_FORMATS: CopyFormat[] = [
  "post-instagram",
  "carrossel-instagram-capa",
  "carrossel-instagram-slide",
  "story",
  "story-sequencial",
  "meta-ads-topo",
  "whatsapp-mensagem",
];

export async function POST(req: NextRequest) {
  // Auth: token via header ou query
  const authHeader = req.headers.get("x-copy-token")?.trim();
  const url = new URL(req.url);
  const authQuery = url.searchParams.get("token")?.trim();
  const provided = authHeader || authQuery;

  if (!TOKEN) {
    return NextResponse.json(
      { error: "COPY_GEN_TOKEN não setada no servidor" },
      { status: 503 },
    );
  }

  if (!provided || provided !== TOKEN.trim()) {
    return NextResponse.json({ error: "Token inválido" }, { status: 401 });
  }

  let body: Partial<CopyBrief>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "JSON inválido" }, { status: 400 });
  }

  const { client, format, objective, context, tone } = body;

  if (!client || typeof client !== "string") {
    return NextResponse.json({ error: "Campo 'client' obrigatório" }, { status: 400 });
  }

  if (!format || !ALLOWED_FORMATS.includes(format as CopyFormat)) {
    return NextResponse.json(
      {
        error: `Campo 'format' obrigatório. Permitidos: ${ALLOWED_FORMATS.join(", ")}`,
      },
      { status: 400 },
    );
  }

  if (!objective || typeof objective !== "string" || objective.trim().length < 5) {
    return NextResponse.json(
      { error: "Campo 'objective' obrigatório (mínimo 5 chars)" },
      { status: 400 },
    );
  }

  try {
    const output = await generateCopy({
      client,
      format: format as CopyFormat,
      objective: objective.trim(),
      context: context?.trim() || undefined,
      tone: tone as CopyBrief["tone"],
    });

    return NextResponse.json(output);
  } catch (err) {
    if (err instanceof CopyGenError) {
      const status =
        err.code === "missing_api_key"
          ? 503
          : err.code === "unknown_client" || err.code === "unknown_format"
            ? 400
            : 500;
      return NextResponse.json({ error: err.message, code: err.code }, { status });
    }

    console.error("[copy-gen] erro não tratado:", err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Erro desconhecido" },
      { status: 500 },
    );
  }
}
