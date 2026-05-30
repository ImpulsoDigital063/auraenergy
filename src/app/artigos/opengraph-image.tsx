import { ImageResponse } from "next/og";
import { ARTIGOS } from "@/content/artigos";

// OG image do hub /artigos · Next 16 reconhece automaticamente.
// Mostra título do hub + contador de artigos + lista das categorias.

export const alt = "Artigos Aura Energy · guias técnicos de energia solar em Palmas-TO";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function ArtigosHubOG() {
  const categorias = [...new Set(ARTIGOS.map((a) => a.categoria))];

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
            Aura Energy · Recursos
          </span>
        </div>

        {/* Center: título + contador */}
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <h1
            style={{
              fontSize: 88,
              fontWeight: 800,
              lineHeight: 1,
              margin: 0,
              letterSpacing: -2,
            }}
          >
            Artigos pra você decidir
            <br />
            <span style={{ color: "#F5BC2C" }}>com clareza.</span>
          </h1>
          <p
            style={{
              fontSize: 30,
              fontWeight: 400,
              opacity: 0.85,
              margin: 0,
              lineHeight: 1.3,
              maxWidth: 1040,
            }}
          >
            {ARTIGOS.length} guias técnicos com sumário, dados e fontes oficiais
            (ANEEL · ABSOLAR · MAPA · CONFAZ · IBGE).
          </p>
        </div>

        {/* Bottom: categorias + url */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 18,
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              flexWrap: "wrap",
            }}
          >
            {categorias.map((cat) => (
              <span
                key={cat}
                style={{
                  fontSize: 18,
                  fontWeight: 600,
                  padding: "6px 16px",
                  borderRadius: 999,
                  background: "rgba(255,255,255,0.10)",
                  border: "1px solid rgba(255,255,255,0.20)",
                  letterSpacing: 1,
                }}
              >
                {cat}
              </span>
            ))}
          </div>
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
            <span style={{ fontSize: 22, opacity: 0.6 }}>
              Renato Edson · CREA-TO
            </span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
