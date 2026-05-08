import { ImageResponse } from "next/og";

// Next.js 16 reconhece automaticamente este arquivo e gera o
// /opengraph-image como meta og:image em todas as paginas que nao
// definem o seu proprio. Resolução padrão Facebook/WhatsApp/LinkedIn:
// 1200x630. Brilha em compartilhamentos sociais.

export const alt = "Aura Energy — Energia solar profissional em Palmas-TO";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
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
          background:
            "linear-gradient(135deg, #0F1B3D 0%, #1A2D5C 60%, #F5BC2C 100%)",
          fontFamily: "system-ui, -apple-system, sans-serif",
          color: "#fff",
        }}
      >
        {/* Top: badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            padding: "10px 22px",
            borderRadius: 999,
            background: "rgba(245, 188, 44, 0.15)",
            border: "1px solid rgba(245, 188, 44, 0.45)",
          }}
        >
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              background: "#F5BC2C",
            }}
          />
          <span
            style={{
              fontSize: 22,
              fontWeight: 600,
              letterSpacing: 2,
              textTransform: "uppercase",
              color: "#F5BC2C",
            }}
          >
            Aura Energy · Palmas-TO
          </span>
        </div>

        {/* Center: headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <h1
            style={{
              fontSize: 88,
              fontWeight: 800,
              lineHeight: 1,
              margin: 0,
              letterSpacing: -2,
            }}
          >
            Energia solar
            <br />
            <span style={{ color: "#F5BC2C" }}>que paga em 4-5 anos.</span>
          </h1>
          <p
            style={{
              fontSize: 32,
              fontWeight: 400,
              opacity: 0.85,
              margin: 0,
              lineHeight: 1.3,
              maxWidth: 950,
            }}
          >
            Casa · Comércio · Indústria · Rural — engenheiro responsável
            CREA-TO · financiamento Solfácil/BV/Pronaf.
          </p>
        </div>

        {/* Bottom: URL bar */}
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
            auraenergy.vercel.app
          </span>
          <span style={{ fontSize: 22, opacity: 0.6 }}>
            Garantia 25 anos · CREA-TO
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
