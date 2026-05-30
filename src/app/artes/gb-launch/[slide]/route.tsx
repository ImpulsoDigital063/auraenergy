import { ImageResponse } from "next/og";

export const runtime = "edge";

const SITE = process.env.NEXT_PUBLIC_BASE_URL || "https://auraenergypalmas.com";

const ANTON_URL =
  "https://raw.githubusercontent.com/google/fonts/main/ofl/anton/Anton-Regular.ttf";

let fontCache: { anton: ArrayBuffer } | null = null;

async function loadFonts() {
  if (fontCache) return fontCache;
  const res = await fetch(ANTON_URL);
  if (!res.ok) throw new Error(`Falha ao carregar Anton: ${res.status}`);
  const anton = await res.arrayBuffer();
  fontCache = { anton };
  return fontCache;
}

const SIZE = { width: 1080, height: 1080 };

// Paleta GB Nutrition (cravada do logo + posts)
const COLORS = {
  darkPure: "#0a0a0a",
  darkSoft: "#1a1a1a",
  darkCard: "#262626",
  white: "#FFFFFF",
  cyan: "#19D9E0",
  cyanDeep: "#0EB8C0",
  red: "#EF4444",
  green: "#10B981",
};

// ========== HELPER · LogoBlock GB ==========
function LogoBlock() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
      <img
        src={`${SITE}/gb/logo-gb.jpg`}
        alt="GB Nutrition"
        width={88}
        height={88}
        style={{ objectFit: "contain", borderRadius: 14 }}
      />
      <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <span
          style={{
            fontFamily: "Anton, sans-serif",
            fontSize: 26,
            color: "#fff",
            letterSpacing: 3,
            textTransform: "uppercase",
            lineHeight: 1,
          }}
        >
          GB Nutrition
        </span>
        <span
          style={{
            fontSize: 11,
            fontWeight: 700,
            color: COLORS.cyan,
            letterSpacing: 2,
            textTransform: "uppercase",
          }}
        >
          Personal · Palmas · Brasil
        </span>
      </div>
    </div>
  );
}

// ========== HELPER · DotGrid ==========
function DotGrid() {
  const dots: React.ReactNode[] = [];
  const cols = 18;
  const rows = 18;
  const spacing = 60;
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      dots.push(
        <div
          key={`${r}-${c}`}
          style={{
            position: "absolute",
            top: 30 + r * spacing,
            left: 30 + c * spacing,
            width: 3,
            height: 3,
            borderRadius: "50%",
            background: "rgba(25, 217, 224, 0.06)",
          }}
        />,
      );
    }
  }
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: "flex",
        flexWrap: "wrap",
        pointerEvents: "none",
        zIndex: 0,
      }}
    >
      {dots}
    </div>
  );
}

// ========== HELPER · Indicador de slide ==========
function SlideIndicator({ current }: { current: number }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
      {[1, 2, 3, 4, 5].map((n) => (
        <div
          key={n}
          style={{
            width: n === current ? 36 : 8,
            height: 8,
            borderRadius: 4,
            background: n === current ? COLORS.cyan : "rgba(255,255,255,0.2)",
          }}
        />
      ))}
    </div>
  );
}

// ========== SLIDE 1 — CAPA · Anúncio de lançamento ==========
function Slide1() {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "60px 70px 60px",
        background: COLORS.darkPure,
        fontFamily: "Inter, system-ui, sans-serif",
        color: "#fff",
        overflow: "hidden",
      }}
    >
      {/* L0 · Foto background — loja suplementos cyan */}
      <img
        src={`${SITE}/gb/hero-loja.png`}
        alt=""
        width={1080}
        height={1080}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: 1080,
          height: 1080,
          objectFit: "cover",
          opacity: 0.78,
          zIndex: 0,
        }}
      />

      {/* L1 · Overlay gradient diagonal asymmetric */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `linear-gradient(115deg, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0.7) 40%, rgba(10,10,10,0.3) 65%, rgba(10,10,10,0.85) 100%)`,
          zIndex: 1,
        }}
      />

      {/* L1 · Glow cyan top-right (atmosfera neon) */}
      <div
        style={{
          position: "absolute",
          top: -250,
          right: -200,
          width: 700,
          height: 700,
          borderRadius: "50%",
          background: `radial-gradient(circle, rgba(25,217,224,0.4) 0%, transparent 60%)`,
          zIndex: 1,
        }}
      />

      {/* L1 · Glow cyan bottom-left */}
      <div
        style={{
          position: "absolute",
          bottom: -300,
          left: -250,
          width: 700,
          height: 700,
          borderRadius: "50%",
          background: `radial-gradient(circle, rgba(25,217,224,0.18) 0%, transparent 65%)`,
          zIndex: 1,
        }}
      />

      {/* Crivo visual reprovou Hórus aqui · slide é sobre LOJA NO AR, produto não reforça.
          [[02-PRINCIPIOS#9 CRIVO VISUAL]] · removido em 16/05/2026 */}

      {/* L2 · Stencil decorativo "GB" gigante */}
      <div
        style={{
          position: "absolute",
          bottom: -40,
          left: 60,
          fontFamily: "Anton, sans-serif",
          fontSize: 480,
          color: "rgba(25,217,224,0.06)",
          letterSpacing: -20,
          lineHeight: 0.85,
          pointerEvents: "none",
          zIndex: 1,
        }}
      >
        GB
      </div>

      {/* L2 · Linha diagonal cyan decorativa */}
      <div
        style={{
          position: "absolute",
          top: 180,
          right: -100,
          width: 800,
          height: 3,
          background: `linear-gradient(90deg, transparent 0%, ${COLORS.cyan} 50%, transparent 100%)`,
          transform: "rotate(-35deg)",
          opacity: 0.55,
          zIndex: 2,
        }}
      />

      {/* L2 · Frame angular top-right cravando 01 */}
      <div
        style={{
          position: "absolute",
          top: 80,
          right: 90,
          padding: "8px 18px",
          border: `1.5px solid ${COLORS.cyan}`,
          borderRadius: 4,
          transform: "rotate(-4deg)",
          background: "rgba(25,217,224,0.08)",
          backdropFilter: "blur(4px)",
          zIndex: 3,
          display: "flex",
        }}
      >
        <span
          style={{
            fontFamily: "Anton, sans-serif",
            fontSize: 22,
            color: COLORS.cyan,
            letterSpacing: 3,
            textTransform: "uppercase",
          }}
        >
          01 / 05
        </span>
      </div>

      <DotGrid />

      {/* Top: LogoBlock */}
      <div style={{ display: "flex", position: "relative", zIndex: 3 }}>
        <LogoBlock />
      </div>

      {/* Hero text */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 0,
          position: "relative",
          zIndex: 3,
          marginTop: -10,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            marginBottom: 18,
          }}
        >
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              background: COLORS.green,
              boxShadow: `0 0 12px ${COLORS.green}`,
            }}
          />
          <span
            style={{
              fontFamily: "Anton, sans-serif",
              fontSize: 22,
              color: COLORS.cyan,
              letterSpacing: 3,
              textTransform: "uppercase",
            }}
          >
            Lançamento oficial
          </span>
        </div>

        <span
          style={{
            fontFamily: "Anton, sans-serif",
            fontSize: 116,
            color: "#fff",
            letterSpacing: -3,
            lineHeight: 0.92,
            textTransform: "uppercase",
          }}
        >
          A loja
        </span>
        <span
          style={{
            fontFamily: "Anton, sans-serif",
            fontSize: 116,
            color: COLORS.cyan,
            letterSpacing: -3,
            lineHeight: 0.92,
            textTransform: "uppercase",
          }}
        >
          do personal
        </span>
        <span
          style={{
            fontFamily: "Anton, sans-serif",
            fontSize: 116,
            color: "#fff",
            letterSpacing: -3,
            lineHeight: 0.92,
            textTransform: "uppercase",
          }}
        >
          tá no ar.
        </span>
        <span
          style={{
            fontSize: 26,
            fontWeight: 500,
            color: "rgba(255,255,255,0.7)",
            letterSpacing: -0.3,
            lineHeight: 1.4,
            marginTop: 20,
            maxWidth: 880,
          }}
        >
          gbnutrition.online — suplementos com curadoria de quem vive o mundo fitness.
        </span>
      </div>

      {/* Footer */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingTop: 22,
          borderTop: "1px solid rgba(255,255,255,0.12)",
          position: "relative",
          zIndex: 3,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <span
            style={{
              fontSize: 13,
              fontWeight: 700,
              color: COLORS.cyan,
              letterSpacing: 2.5,
              textTransform: "uppercase",
            }}
          >
            O que muda pra você
          </span>
          <span
            style={{
              fontSize: 24,
              fontWeight: 700,
              color: "rgba(255,255,255,0.85)",
              letterSpacing: -0.3,
            }}
          >
            Arrasta em 4 cards →
          </span>
        </div>
        <SlideIndicator current={1} />
      </div>
    </div>
  );
}

// ========== SLIDE 2 — O que tem no site (categorias) ==========
function Slide2() {
  const CATEGORIAS = [
    { titulo: "Proteicos", sub: "Whey · Albumina · Beef" },
    { titulo: "Pré-treino", sub: "C4 · Évora · Vasculor" },
    { titulo: "Creatinas", sub: "Mono · Pura · Probiótica" },
    { titulo: "Ganho de massa", sub: "Hipercalóricos · Glutamina" },
    { titulo: "Queima", sub: "Termogênicos · Cafeína" },
    { titulo: "Saúde geral", sub: "Ômega-3 · Melatonina · Multi" },
  ];

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "60px 70px 50px",
        background: COLORS.darkPure,
        fontFamily: "Inter, system-ui, sans-serif",
        color: "#fff",
        overflow: "hidden",
      }}
    >
      {/* L0 · Foto background flat lay */}
      <img
        src={`${SITE}/gb/produtos-flatlay.png`}
        alt=""
        width={1080}
        height={1080}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: 1080,
          height: 1080,
          objectFit: "cover",
          opacity: 0.7,
          zIndex: 0,
        }}
      />

      {/* L1 · Overlay diagonal */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `linear-gradient(160deg, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0.55) 35%, rgba(10,10,10,0.4) 60%, rgba(10,10,10,0.98) 100%)`,
          zIndex: 1,
        }}
      />

      {/* L1 · Glows cyan */}
      <div
        style={{
          position: "absolute",
          top: -200,
          right: -200,
          width: 600,
          height: 600,
          borderRadius: "50%",
          background: `radial-gradient(circle, rgba(25,217,224,0.3) 0%, transparent 65%)`,
          zIndex: 1,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: -200,
          left: -200,
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: `radial-gradient(circle, rgba(25,217,224,0.15) 0%, transparent 65%)`,
          zIndex: 1,
        }}
      />

      {/* L2 · Cutout scoop com pó cyan */}
      <img
        src={`${SITE}/gb/cutout-scoop.png`}
        alt=""
        width={360}
        height={360}
        style={{
          position: "absolute",
          right: -40,
          top: 60,
          width: 360,
          height: 360,
          objectFit: "contain",
          opacity: 0.85,
          transform: "rotate(-12deg)",
          zIndex: 2,
        }}
      />

      {/* L2 · Stencil "ALUNO" decorativo */}
      <div
        style={{
          position: "absolute",
          top: 100,
          right: -40,
          fontFamily: "Anton, sans-serif",
          fontSize: 380,
          color: "rgba(25,217,224,0.05)",
          letterSpacing: -14,
          lineHeight: 0.85,
          pointerEvents: "none",
          zIndex: 1,
          transform: "rotate(-3deg)",
        }}
      >
        +600
      </div>

      {/* L2 · Linha diagonal cyan */}
      <div
        style={{
          position: "absolute",
          top: 540,
          left: -100,
          width: 800,
          height: 2,
          background: `linear-gradient(90deg, transparent 0%, ${COLORS.cyan} 60%, transparent 100%)`,
          transform: "rotate(15deg)",
          opacity: 0.5,
          zIndex: 2,
        }}
      />

      {/* L2 · Frame angular "02/05" */}
      <div
        style={{
          position: "absolute",
          top: 80,
          right: 90,
          padding: "8px 18px",
          border: `1.5px solid ${COLORS.cyan}`,
          borderRadius: 4,
          transform: "rotate(3deg)",
          background: "rgba(25,217,224,0.08)",
          zIndex: 3,
          display: "flex",
        }}
      >
        <span
          style={{
            fontFamily: "Anton, sans-serif",
            fontSize: 22,
            color: COLORS.cyan,
            letterSpacing: 3,
            textTransform: "uppercase",
          }}
        >
          02 / 05
        </span>
      </div>

      <DotGrid />

      <div style={{ display: "flex", position: "relative", zIndex: 3 }}>
        <LogoBlock />
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 6,
          position: "relative",
          zIndex: 3,
          marginTop: -10,
        }}
      >
        <span
          style={{
            fontFamily: "Anton, sans-serif",
            fontSize: 22,
            color: COLORS.cyan,
            letterSpacing: 3,
            textTransform: "uppercase",
            marginBottom: 8,
          }}
        >
          Catálogo cravado
        </span>
        <span
          style={{
            fontFamily: "Anton, sans-serif",
            fontSize: 80,
            color: "#fff",
            letterSpacing: -2.5,
            lineHeight: 0.95,
            textTransform: "uppercase",
          }}
        >
          Tudo que
        </span>
        <span
          style={{
            fontFamily: "Anton, sans-serif",
            fontSize: 80,
            color: COLORS.cyan,
            letterSpacing: -2.5,
            lineHeight: 0.95,
            textTransform: "uppercase",
          }}
        >
          o aluno usa.
        </span>
      </div>

      {/* Grid 3x2 de produtos REAIS em cards */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 12,
          position: "relative",
          zIndex: 3,
        }}
      >
        {[
          { img: "max-horus.png", titulo: "Pré-treino", marca: "Max Titanium" },
          { img: "max-whey.png", titulo: "Whey 100%", marca: "Max Titanium" },
          { img: "nutrata-whey.png", titulo: "Whey Zero", marca: "Nutrata" },
          { img: "creatina-mono.webp", titulo: "Creatina", marca: "New Millen" },
          { img: "beta-alanine.png", titulo: "Beta-Alanine", marca: "Atlhetica" },
          { img: "night-train.png", titulo: "Night Train", marca: "Max Titanium" },
        ].map((p, i) => (
          <div
            key={i}
            style={{
              width: 296,
              display: "flex",
              flexDirection: "column",
              background: "#fff",
              borderRadius: 14,
              overflow: "hidden",
              border: `1px solid rgba(25, 217, 224, 0.5)`,
              boxShadow: `0 10px 30px rgba(0,0,0,0.5), 0 0 20px rgba(25,217,224,0.18)`,
            }}
          >
            <div
              style={{
                width: "100%",
                height: 140,
                background: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: 10,
              }}
            >
              <img
                src={`${SITE}/gb/produtos/${p.img}`}
                alt={p.titulo}
                width={120}
                height={120}
                style={{
                  width: "100%",
                  height: 120,
                  objectFit: "contain",
                }}
              />
            </div>
            <div
              style={{
                background: COLORS.darkPure,
                padding: "10px 12px",
                display: "flex",
                flexDirection: "column",
                gap: 2,
                borderTop: `1px solid ${COLORS.cyan}`,
              }}
            >
              <span
                style={{
                  fontFamily: "Anton, sans-serif",
                  fontSize: 18,
                  color: "#fff",
                  letterSpacing: 1,
                  textTransform: "uppercase",
                  lineHeight: 1,
                }}
              >
                {p.titulo}
              </span>
              <span
                style={{
                  fontSize: 11,
                  color: COLORS.cyan,
                  letterSpacing: 1,
                  textTransform: "uppercase",
                  fontWeight: 700,
                }}
              >
                {p.marca}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingTop: 22,
          borderTop: "1px solid rgba(255,255,255,0.12)",
          position: "relative",
          zIndex: 3,
        }}
      >
        <span
          style={{
            fontSize: 14,
            fontWeight: 700,
            color: COLORS.cyan,
            letterSpacing: 2.5,
            textTransform: "uppercase",
          }}
        >
          Próximo · quem cravou →
        </span>
        <SlideIndicator current={2} />
      </div>
    </div>
  );
}

// ========== SLIDE 3 — 5 marcas Tier 1 aprovadas ==========
function Slide3() {
  const MARCAS = [
    "Shark Pro",
    "New Millen",
    "IntegralMédica",
    "Max Titanium",
    "Nutrata",
  ];

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "60px 70px 50px",
        background: COLORS.darkPure,
        fontFamily: "Inter, system-ui, sans-serif",
        color: "#fff",
        overflow: "hidden",
      }}
    >
      {/* L0 · Foto academia */}
      <img
        src={`${SITE}/gb/academia.png`}
        alt=""
        width={1080}
        height={1080}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: 1080,
          height: 1080,
          objectFit: "cover",
          opacity: 0.5,
          zIndex: 0,
        }}
      />

      {/* L1 · Overlay diagonal */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `linear-gradient(105deg, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0.75) 45%, rgba(10,10,10,0.4) 75%, rgba(10,10,10,0.85) 100%)`,
          zIndex: 1,
        }}
      />

      {/* L1 · Glows */}
      <div
        style={{
          position: "absolute",
          top: -200,
          right: -150,
          width: 600,
          height: 600,
          borderRadius: "50%",
          background: `radial-gradient(circle, rgba(25,217,224,0.3) 0%, transparent 65%)`,
          zIndex: 1,
        }}
      />

      {/* L2 · Foto Gabriel cropada flutuante direita */}
      <img
        src={`${SITE}/gb/gabriel-cropped.jpg`}
        alt=""
        width={440}
        height={500}
        style={{
          position: "absolute",
          right: -60,
          top: 320,
          width: 440,
          height: 500,
          objectFit: "cover",
          objectPosition: "center top",
          opacity: 0.95,
          borderRadius: 14,
          transform: "rotate(2deg)",
          boxShadow: `0 20px 60px rgba(0,0,0,0.6), 0 0 40px rgba(25,217,224,0.2)`,
          border: `2px solid rgba(25,217,224,0.4)`,
          zIndex: 2,
        }}
      />

      {/* L2 · Stencil "TIER 1" decorativo */}
      <div
        style={{
          position: "absolute",
          top: 380,
          left: -20,
          fontFamily: "Anton, sans-serif",
          fontSize: 280,
          color: "rgba(25,217,224,0.05)",
          letterSpacing: -10,
          lineHeight: 0.85,
          pointerEvents: "none",
          zIndex: 1,
        }}
      >
        TIER 1
      </div>

      {/* L2 · Linha diagonal cyan */}
      <div
        style={{
          position: "absolute",
          top: 240,
          left: -100,
          width: 700,
          height: 2,
          background: `linear-gradient(90deg, transparent 0%, ${COLORS.cyan} 60%, transparent 100%)`,
          transform: "rotate(-8deg)",
          opacity: 0.4,
          zIndex: 2,
        }}
      />

      {/* L2 · Frame 03/05 */}
      <div
        style={{
          position: "absolute",
          top: 80,
          right: 90,
          padding: "8px 18px",
          border: `1.5px solid ${COLORS.cyan}`,
          borderRadius: 4,
          transform: "rotate(-3deg)",
          background: "rgba(25,217,224,0.08)",
          zIndex: 3,
          display: "flex",
        }}
      >
        <span
          style={{
            fontFamily: "Anton, sans-serif",
            fontSize: 22,
            color: COLORS.cyan,
            letterSpacing: 3,
            textTransform: "uppercase",
          }}
        >
          03 / 05
        </span>
      </div>

      <DotGrid />

      <div style={{ display: "flex", position: "relative", zIndex: 3 }}>
        <LogoBlock />
      </div>

      {/* Title */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 8,
          position: "relative",
          zIndex: 3,
          marginTop: -20,
        }}
      >
        <span
          style={{
            fontFamily: "Anton, sans-serif",
            fontSize: 22,
            color: COLORS.cyan,
            letterSpacing: 3,
            textTransform: "uppercase",
            marginBottom: 8,
          }}
        >
          As marcas que eu uso
        </span>
        <span
          style={{
            fontFamily: "Anton, sans-serif",
            fontSize: 80,
            color: "#fff",
            letterSpacing: -2.5,
            lineHeight: 0.95,
            textTransform: "uppercase",
          }}
        >
          5 marcas
        </span>
        <span
          style={{
            fontFamily: "Anton, sans-serif",
            fontSize: 80,
            color: COLORS.cyan,
            letterSpacing: -2.5,
            lineHeight: 0.95,
            textTransform: "uppercase",
          }}
        >
          aprovadas.
        </span>
      </div>

      {/* Lista de marcas em pills */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 14,
          position: "relative",
          zIndex: 3,
          maxWidth: 940,
        }}
      >
        {MARCAS.map((marca) => (
          <div
            key={marca}
            style={{
              display: "flex",
              alignItems: "center",
              padding: "16px 28px",
              borderRadius: 999,
              background: "rgba(25, 217, 224, 0.08)",
              border: `1.5px solid ${COLORS.cyan}`,
            }}
          >
            <span
              style={{
                fontFamily: "Anton, sans-serif",
                fontSize: 30,
                color: "#fff",
                letterSpacing: 1.5,
                textTransform: "uppercase",
              }}
            >
              {marca}
            </span>
          </div>
        ))}
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 14,
          position: "relative",
          zIndex: 3,
        }}
      >
        <span
          style={{
            fontSize: 22,
            fontWeight: 500,
            color: "rgba(255,255,255,0.75)",
            letterSpacing: -0.2,
            lineHeight: 1.45,
            maxWidth: 900,
          }}
        >
          Marca com SAC, lastro científico e procedência. Nada de marca duvidosa só porque a margem é boa.
        </span>

        {/* Linha de assinatura · curadoria Gabriel */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            padding: "12px 18px",
            background: "rgba(25, 217, 224, 0.08)",
            border: `1px solid rgba(25, 217, 224, 0.4)`,
            borderRadius: 14,
            alignSelf: "flex-start",
          }}
        >
          <img
            src={`${SITE}/gb/gabriel-cropped.jpg`}
            alt="Gabriel"
            width={56}
            height={56}
            style={{
              borderRadius: "50%",
              objectFit: "cover",
              objectPosition: "center top",
            }}
          />
          <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <span
              style={{
                fontSize: 11,
                fontWeight: 700,
                color: COLORS.cyan,
                letterSpacing: 2,
                textTransform: "uppercase",
              }}
            >
              Curadoria
            </span>
            <span
              style={{
                fontFamily: "Anton, sans-serif",
                fontSize: 22,
                color: "#fff",
                letterSpacing: 1,
                textTransform: "uppercase",
                lineHeight: 1,
              }}
            >
              Gabriel Barros · Personal Palmas-TO
            </span>
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingTop: 20,
          borderTop: "1px solid rgba(255,255,255,0.12)",
          position: "relative",
          zIndex: 3,
        }}
      >
        <span
          style={{
            fontSize: 14,
            fontWeight: 700,
            color: COLORS.cyan,
            letterSpacing: 2.5,
            textTransform: "uppercase",
          }}
        >
          Próximo · entrega →
        </span>
        <SlideIndicator current={3} />
      </div>
    </div>
  );
}

// ========== SLIDE 4 — 2 zonas de entrega (Palmas + Brasil) ==========
function Slide4() {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "60px 70px 50px",
        background: COLORS.darkPure,
        fontFamily: "Inter, system-ui, sans-serif",
        color: "#fff",
        overflow: "hidden",
      }}
    >
      {/* L0 · Foto entrega */}
      <img
        src={`${SITE}/gb/entrega.png`}
        alt=""
        width={1080}
        height={1080}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: 1080,
          height: 1080,
          objectFit: "cover",
          opacity: 0.55,
          zIndex: 0,
        }}
      />

      {/* L1 · Overlay diagonal */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `linear-gradient(165deg, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0.6) 35%, rgba(10,10,10,0.4) 60%, rgba(10,10,10,0.98) 100%)`,
          zIndex: 1,
        }}
      />

      {/* L1 · Glows */}
      <div
        style={{
          position: "absolute",
          bottom: -200,
          right: -180,
          width: 600,
          height: 600,
          borderRadius: "50%",
          background: `radial-gradient(circle, rgba(25,217,224,0.3) 0%, transparent 65%)`,
          zIndex: 1,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: -150,
          left: -100,
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: `radial-gradient(circle, rgba(25,217,224,0.15) 0%, transparent 70%)`,
          zIndex: 1,
        }}
      />

      {/* L2 · Sombra elipse pra produto saindo da caixa · escala maior pra cumprir função */}
      <div
        style={{
          position: "absolute",
          right: 100,
          top: 580,
          width: 280,
          height: 50,
          borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(0,0,0,0.6) 0%, transparent 70%)",
          filter: "blur(6px)",
          zIndex: 2,
        }}
      />

      {/* L2 · Max Whey saindo da caixa · agora COM presença (escala 340 vs 240 antes)
          [[02-PRINCIPIOS#9]] · elemento serve a mensagem "comprou, chegou" */}
      <img
        src={`${SITE}/gb/produtos/nobg/max-whey.png`}
        alt=""
        width={340}
        height={340}
        style={{
          position: "absolute",
          right: 60,
          top: 250,
          width: 340,
          height: 340,
          objectFit: "contain",
          transform: "rotate(-10deg)",
          filter:
            "drop-shadow(0 25px 30px rgba(0,0,0,0.65)) drop-shadow(0 0 30px rgba(25,217,224,0.22))",
          zIndex: 3,
        }}
      />

      {/* L2 · Stencil "FAST" decorativo */}
      <div
        style={{
          position: "absolute",
          top: 200,
          right: -30,
          fontFamily: "Anton, sans-serif",
          fontSize: 360,
          color: "rgba(25,217,224,0.05)",
          letterSpacing: -12,
          lineHeight: 0.85,
          pointerEvents: "none",
          zIndex: 1,
          transform: "rotate(4deg)",
        }}
      >
        FAST
      </div>

      {/* L2 · Linha diagonal cyan */}
      <div
        style={{
          position: "absolute",
          top: 540,
          right: -100,
          width: 800,
          height: 2,
          background: `linear-gradient(90deg, transparent 0%, ${COLORS.cyan} 50%, transparent 100%)`,
          transform: "rotate(-20deg)",
          opacity: 0.4,
          zIndex: 2,
        }}
      />

      {/* L2 · Frame 04/05 */}
      <div
        style={{
          position: "absolute",
          top: 80,
          right: 90,
          padding: "8px 18px",
          border: `1.5px solid ${COLORS.cyan}`,
          borderRadius: 4,
          transform: "rotate(2deg)",
          background: "rgba(25,217,224,0.08)",
          zIndex: 3,
          display: "flex",
        }}
      >
        <span
          style={{
            fontFamily: "Anton, sans-serif",
            fontSize: 22,
            color: COLORS.cyan,
            letterSpacing: 3,
            textTransform: "uppercase",
          }}
        >
          04 / 05
        </span>
      </div>

      <DotGrid />

      {/* Watermark */}
      <div
        style={{
          position: "absolute",
          top: 250,
          left: -40,
          right: -40,
          fontFamily: "Anton, sans-serif",
          fontSize: 360,
          color: "rgba(25, 217, 224, 0.05)",
          letterSpacing: -14,
          lineHeight: 0.85,
          textTransform: "uppercase",
          whiteSpace: "nowrap",
          display: "flex",
          justifyContent: "center",
          pointerEvents: "none",
          zIndex: 1,
        }}
      >
        ENTREGA
      </div>

      <div style={{ display: "flex", position: "relative", zIndex: 3 }}>
        <LogoBlock />
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 6,
          position: "relative",
          zIndex: 3,
          marginTop: -10,
        }}
      >
        <span
          style={{
            fontFamily: "Anton, sans-serif",
            fontSize: 22,
            color: COLORS.cyan,
            letterSpacing: 3,
            textTransform: "uppercase",
            marginBottom: 8,
          }}
        >
          Como você recebe
        </span>
        <span
          style={{
            fontFamily: "Anton, sans-serif",
            fontSize: 80,
            color: "#fff",
            letterSpacing: -2.5,
            lineHeight: 0.95,
            textTransform: "uppercase",
          }}
        >
          Comprou,
        </span>
        <span
          style={{
            fontFamily: "Anton, sans-serif",
            fontSize: 80,
            color: COLORS.cyan,
            letterSpacing: -2.5,
            lineHeight: 0.95,
            textTransform: "uppercase",
          }}
        >
          chegou.
        </span>
      </div>

      {/* 2 zonas: Palmas + Brasil */}
      <div
        style={{
          display: "flex",
          gap: 14,
          position: "relative",
          zIndex: 3,
        }}
      >
        {/* PALMAS */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: 8,
            padding: "22px 24px",
            background: COLORS.cyan,
            borderRadius: 18,
          }}
        >
          <span
            style={{
              fontSize: 11,
              fontWeight: 800,
              color: COLORS.darkPure,
              letterSpacing: 2.5,
              textTransform: "uppercase",
              opacity: 0.75,
            }}
          >
            Palmas-TO
          </span>
          <span
            style={{
              fontFamily: "Anton, sans-serif",
              fontSize: 38,
              color: COLORS.darkPure,
              letterSpacing: -1,
              textTransform: "uppercase",
              lineHeight: 0.95,
            }}
          >
            Motoboy mesmo dia
          </span>
          <span
            style={{
              fontSize: 16,
              fontWeight: 700,
              color: COLORS.darkPure,
              letterSpacing: -0.2,
              lineHeight: 1.4,
              marginTop: 6,
            }}
          >
            Comprou em horário comercial → recebe hoje. Sem esperar 5 dias.
          </span>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              marginTop: 10,
              padding: "8px 14px",
              background: COLORS.darkPure,
              borderRadius: 999,
              alignSelf: "flex-start",
            }}
          >
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: COLORS.green,
                boxShadow: `0 0 8px ${COLORS.green}`,
              }}
            />
            <span
              style={{
                fontFamily: "Anton, sans-serif",
                fontSize: 18,
                color: COLORS.green,
                letterSpacing: 1.5,
                textTransform: "uppercase",
              }}
            >
              Frete grátis · 1ª semana
            </span>
          </div>
        </div>

        {/* BRASIL */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: 8,
            padding: "22px 24px",
            background: COLORS.darkSoft,
            border: `1.5px solid ${COLORS.cyan}`,
            borderRadius: 18,
          }}
        >
          <span
            style={{
              fontSize: 11,
              fontWeight: 800,
              color: COLORS.cyan,
              letterSpacing: 2.5,
              textTransform: "uppercase",
              opacity: 0.85,
            }}
          >
            Brasil todo
          </span>
          <span
            style={{
              fontFamily: "Anton, sans-serif",
              fontSize: 38,
              color: "#fff",
              letterSpacing: -1,
              textTransform: "uppercase",
              lineHeight: 0.95,
            }}
          >
            +4 transportadoras
          </span>
          <span
            style={{
              fontSize: 16,
              color: "rgba(255,255,255,0.75)",
              letterSpacing: -0.2,
              lineHeight: 1.4,
              marginTop: 6,
            }}
          >
            Você escolhe a melhor opção no checkout · rastreamento sempre · liberdade de prazo e preço.
          </span>
          <div style={{ display: "flex", gap: 6, marginTop: 10, flexWrap: "wrap" }}>
            {["Correios", "Jadlog", "Loggi", "Total Express"].map((t) => (
              <span
                key={t}
                style={{
                  fontFamily: "Anton, sans-serif",
                  fontSize: 13,
                  color: COLORS.cyan,
                  letterSpacing: 1.2,
                  textTransform: "uppercase",
                  padding: "5px 10px",
                  border: `1px solid rgba(25,217,224,0.4)`,
                  borderRadius: 999,
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingTop: 18,
          borderTop: "1px solid rgba(255,255,255,0.12)",
          position: "relative",
          zIndex: 3,
        }}
      >
        <span
          style={{
            fontSize: 14,
            fontWeight: 700,
            color: COLORS.cyan,
            letterSpacing: 2.5,
            textTransform: "uppercase",
          }}
        >
          Último card →
        </span>
        <SlideIndicator current={4} />
      </div>
    </div>
  );
}

// ========== SLIDE 5 — CTA ==========
function Slide5() {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "60px 70px",
        background: COLORS.darkPure,
        fontFamily: "Inter, system-ui, sans-serif",
        color: "#fff",
        overflow: "hidden",
      }}
    >
      {/* L0 · Foto mockup celular */}
      <img
        src={`${SITE}/gb/mockup-celular.png`}
        alt=""
        width={1080}
        height={1080}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: 1080,
          height: 1080,
          objectFit: "cover",
          opacity: 0.55,
          zIndex: 0,
        }}
      />

      {/* L1 · Overlay diagonal */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `linear-gradient(175deg, rgba(10,10,10,0.92) 0%, rgba(10,10,10,0.5) 30%, rgba(10,10,10,0.4) 55%, rgba(10,10,10,0.98) 100%)`,
          zIndex: 1,
        }}
      />

      {/* L1 · Glows múltiplos */}
      <div
        style={{
          position: "absolute",
          bottom: -250,
          left: "50%",
          marginLeft: -350,
          width: 700,
          height: 700,
          borderRadius: "50%",
          background: `radial-gradient(circle, rgba(25,217,224,0.4) 0%, transparent 65%)`,
          zIndex: 1,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: -150,
          right: -150,
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: `radial-gradient(circle, rgba(25,217,224,0.18) 0%, transparent 70%)`,
          zIndex: 1,
        }}
      />

      {/* Crivo visual reprovou Creatina aqui · slide é sobre ACESSO À LOJA, produto isolado não reforça.
          Mockup celular JÁ comunica "loja no celular". [[02-PRINCIPIOS#9 CRIVO VISUAL]] · removido 16/05 */}

      {/* L2 · Stencil "BORA" decorativo */}
      <div
        style={{
          position: "absolute",
          top: 250,
          right: -60,
          fontFamily: "Anton, sans-serif",
          fontSize: 380,
          color: "rgba(25,217,224,0.06)",
          letterSpacing: -14,
          lineHeight: 0.85,
          pointerEvents: "none",
          zIndex: 1,
          transform: "rotate(-2deg)",
        }}
      >
        BORA
      </div>

      {/* L2 · Linhas diagonais cyan duplas */}
      <div
        style={{
          position: "absolute",
          top: 200,
          right: -100,
          width: 700,
          height: 2,
          background: `linear-gradient(90deg, transparent 0%, ${COLORS.cyan} 60%, transparent 100%)`,
          transform: "rotate(-22deg)",
          opacity: 0.45,
          zIndex: 2,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 750,
          right: -100,
          width: 700,
          height: 2,
          background: `linear-gradient(90deg, transparent 0%, ${COLORS.cyan} 60%, transparent 100%)`,
          transform: "rotate(15deg)",
          opacity: 0.3,
          zIndex: 2,
        }}
      />

      {/* L2 · Frame 05/05 */}
      <div
        style={{
          position: "absolute",
          top: 80,
          right: 90,
          padding: "8px 18px",
          border: `1.5px solid ${COLORS.cyan}`,
          borderRadius: 4,
          transform: "rotate(-2deg)",
          background: "rgba(25,217,224,0.08)",
          zIndex: 3,
          display: "flex",
        }}
      >
        <span
          style={{
            fontFamily: "Anton, sans-serif",
            fontSize: 22,
            color: COLORS.cyan,
            letterSpacing: 3,
            textTransform: "uppercase",
          }}
        >
          05 / 05
        </span>
      </div>

      <DotGrid />

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          position: "relative",
          zIndex: 3,
        }}
      >
        <LogoBlock />
        <SlideIndicator current={5} />
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 6,
          position: "relative",
          zIndex: 3,
          marginTop: -10,
        }}
      >
        <span
          style={{
            fontFamily: "Anton, sans-serif",
            fontSize: 20,
            color: COLORS.cyan,
            letterSpacing: 3,
            textTransform: "uppercase",
            marginBottom: 8,
          }}
        >
          Bora?
        </span>
        <span
          style={{
            fontFamily: "Anton, sans-serif",
            fontSize: 96,
            color: "#fff",
            letterSpacing: -2.5,
            lineHeight: 0.92,
            textTransform: "uppercase",
          }}
        >
          A prateleira
        </span>
        <span
          style={{
            fontFamily: "Anton, sans-serif",
            fontSize: 96,
            color: COLORS.cyan,
            letterSpacing: -2.5,
            lineHeight: 0.92,
            textTransform: "uppercase",
          }}
        >
          do personal
        </span>
        <span
          style={{
            fontFamily: "Anton, sans-serif",
            fontSize: 96,
            color: "#fff",
            letterSpacing: -2.5,
            lineHeight: 0.92,
            textTransform: "uppercase",
          }}
        >
          tá no ar.
        </span>
        <span
          style={{
            fontSize: 22,
            color: "rgba(255,255,255,0.75)",
            letterSpacing: -0.2,
            lineHeight: 1.4,
            marginTop: 14,
            fontWeight: 500,
            maxWidth: 880,
          }}
        >
          Palmas: motoboy no mesmo dia · FRETE GRÁTIS na 1ª semana de lançamento. Brasil todo: +4 transportadoras, você escolhe o melhor prazo.
        </span>
      </div>

      <div
        style={{
          display: "flex",
          gap: 16,
          position: "relative",
          zIndex: 3,
        }}
      >
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 8,
            padding: "22px 24px",
            background: COLORS.cyan,
            borderRadius: 18,
            boxShadow: `0 6px 20px rgba(25,217,224,0.35)`,
          }}
        >
          <span
            style={{
              fontSize: 12,
              fontWeight: 800,
              color: COLORS.darkPure,
              letterSpacing: 2,
              textTransform: "uppercase",
              opacity: 0.7,
            }}
          >
            Acessa a loja
          </span>
          <span
            style={{
              fontFamily: "Anton, sans-serif",
              fontSize: 28,
              color: COLORS.darkPure,
              letterSpacing: -0.5,
            }}
          >
            gbnutrition.online
          </span>
        </div>

        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 8,
            padding: "22px 24px",
            background: COLORS.darkSoft,
            border: `1.5px solid ${COLORS.cyan}`,
            borderRadius: 18,
          }}
        >
          <span
            style={{
              fontSize: 12,
              fontWeight: 800,
              color: COLORS.cyan,
              letterSpacing: 2,
              textTransform: "uppercase",
              opacity: 0.85,
            }}
          >
            Instagram
          </span>
          <span
            style={{
              fontFamily: "Anton, sans-serif",
              fontSize: 28,
              color: "#fff",
              letterSpacing: -0.5,
            }}
          >
            @gbnutritionn
          </span>
        </div>
      </div>
    </div>
  );
}

export async function GET(
  _req: Request,
  ctx: { params: Promise<{ slide: string }> },
) {
  const { slide } = await ctx.params;

  let content;
  switch (slide) {
    case "1":
      content = <Slide1 />;
      break;
    case "2":
      content = <Slide2 />;
      break;
    case "3":
      content = <Slide3 />;
      break;
    case "4":
      content = <Slide4 />;
      break;
    case "5":
      content = <Slide5 />;
      break;
    default:
      return new Response("Slide não encontrado. Use /artes/gb-launch/1 a /5.", {
        status: 404,
      });
  }

  const { anton } = await loadFonts();

  return new ImageResponse(content, {
    ...SIZE,
    fonts: [
      {
        name: "Anton",
        data: anton,
        weight: 400,
        style: "normal",
      },
    ],
  });
}
