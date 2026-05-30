import { ImageResponse } from "next/og";
import { ARTIGOS } from "@/content/artigos";

// OG image dinâmica por artigo · Next 16 reconhece automaticamente.
// Resolução 1200x630 · padrão Facebook/WhatsApp/LinkedIn/Twitter.
// Cada share de /artigos/[slug] vai mostrar uma imagem cravada com o título
// do artigo + categoria + branding Aura.

export const alt = "Artigo Aura Energy · energia solar em Palmas-TO";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const COR_CATEGORIA: Record<
  string,
  { bg: string; text: string; gradient: string }
> = {
  Economia: {
    bg: "rgba(34, 197, 94, 0.15)",
    text: "#22C55E",
    gradient: "linear-gradient(135deg, #0F1B3D 0%, #15803D 100%)",
  },
  Regulamentação: {
    bg: "rgba(27, 58, 135, 0.25)",
    text: "#5B8DEF",
    gradient: "linear-gradient(135deg, #0F1B3D 0%, #1B3A87 100%)",
  },
  Equipamentos: {
    bg: "rgba(168, 85, 247, 0.18)",
    text: "#C084FC",
    gradient: "linear-gradient(135deg, #0F1B3D 0%, #7E22CE 100%)",
  },
  Financiamento: {
    bg: "rgba(245, 188, 44, 0.18)",
    text: "#F5BC2C",
    gradient: "linear-gradient(135deg, #0F1B3D 0%, #D9A012 100%)",
  },
};

export default async function ArtigoOG(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const artigo = ARTIGOS.find((a) => a.slug === slug);

  if (!artigo) {
    return new ImageResponse(
      (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#0F1B3D",
            color: "#fff",
            fontSize: 48,
            fontFamily: "system-ui, sans-serif",
          }}
        >
          Aura Energy
        </div>
      ),
      { ...size }
    );
  }

  const cor = COR_CATEGORIA[artigo.categoria] ?? COR_CATEGORIA.Economia;

  // Trunca título se for muito grande pra caber bonito
  const titulo =
    artigo.titulo.length > 90
      ? artigo.titulo.slice(0, 87) + "..."
      : artigo.titulo;

  const resumo =
    artigo.resumo.length > 180
      ? artigo.resumo.slice(0, 177) + "..."
      : artigo.resumo;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          padding: "60px 80px",
          background: cor.gradient,
          fontFamily: "system-ui, -apple-system, sans-serif",
          color: "#fff",
        }}
      >
        {/* Top: badge categoria + Aura */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              padding: "10px 22px",
              borderRadius: 999,
              background: cor.bg,
              border: `1px solid ${cor.text}66`,
            }}
          >
            <div
              style={{
                width: 12,
                height: 12,
                borderRadius: "50%",
                background: cor.text,
              }}
            />
            <span
              style={{
                fontSize: 22,
                fontWeight: 600,
                letterSpacing: 2,
                textTransform: "uppercase",
                color: cor.text,
              }}
            >
              {artigo.categoria}
            </span>
          </div>

          <span
            style={{
              fontSize: 22,
              fontWeight: 600,
              opacity: 0.7,
              letterSpacing: 2,
              textTransform: "uppercase",
            }}
          >
            Aura Energy · Palmas-TO
          </span>
        </div>

        {/* Center: título + resumo */}
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <h1
            style={{
              fontSize: 60,
              fontWeight: 800,
              lineHeight: 1.08,
              margin: 0,
              letterSpacing: -1,
              maxWidth: 1040,
            }}
          >
            {titulo}
          </h1>
          <p
            style={{
              fontSize: 28,
              fontWeight: 400,
              opacity: 0.85,
              margin: 0,
              lineHeight: 1.35,
              maxWidth: 1040,
            }}
          >
            {resumo}
          </p>
        </div>

        {/* Bottom: URL + tempo de leitura */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            paddingTop: 24,
            borderTop: "1px solid rgba(255,255,255,0.15)",
          }}
        >
          <span style={{ fontSize: 26, fontWeight: 600, opacity: 0.9 }}>
            auraenergypalmas.com/artigos
          </span>
          <span
            style={{
              fontSize: 22,
              opacity: 0.7,
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            {artigo.tempoLeitura} de leitura · Renato Edson · CREA-TO
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
