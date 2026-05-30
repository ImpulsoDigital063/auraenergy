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

const C = {
  navy: "#0E2152",
  navy2: "#1B3A87",
  cream: "#FFFDF5",
  yellow: "#F5BC2C",
  orange: "#FF8B3D",
  yellowDark: "#D9A012",
  green: "#10B981",
  greenDark: "#059669",
  red: "#DC2626",
  whats: "#25D366",
  text: "#1A1A1A",
  textMid: "#4B5563",
  textSoft: "#6B7280",
};

// =============== HELPERS ===============

function NumberBadge({ n, variant }: { n: number; variant: "dark" | "light" }) {
  const isDark = variant === "dark";
  return (
    <div
      style={{
        position: "absolute",
        top: 44,
        left: 44,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 68,
        height: 68,
        borderRadius: 16,
        background: isDark ? C.yellow : C.navy,
        boxShadow: isDark
          ? "0 6px 18px rgba(245,188,44,0.35)"
          : "0 6px 18px rgba(14,33,82,0.25)",
        zIndex: 4,
      }}
    >
      <span
        style={{
          fontFamily: "Anton, sans-serif",
          fontSize: 42,
          color: isDark ? C.navy : "#fff",
          letterSpacing: -1,
          lineHeight: 1,
        }}
      >
        {n}
      </span>
    </div>
  );
}

function LogoTopRight({ variant }: { variant: "dark" | "light" }) {
  const isDark = variant === "dark";
  const logoSrc = isDark
    ? `${SITE}/logo-aura-perfil.png`
    : `${SITE}/logo-aura.png`;
  return (
    <div
      style={{
        position: "absolute",
        top: 44,
        right: 44,
        display: "flex",
        alignItems: "center",
        gap: 10,
        zIndex: 4,
      }}
    >
      <img
        src={logoSrc}
        alt="Aura Energy"
        width={68}
        height={68}
        style={{ objectFit: "contain" }}
      />
      <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <span
          style={{
            fontFamily: "Anton, sans-serif",
            fontSize: 22,
            color: isDark ? C.yellow : C.navy,
            letterSpacing: 2,
            textTransform: "uppercase",
            lineHeight: 1,
          }}
        >
          Aura Energy
        </span>
        <span
          style={{
            fontSize: 11,
            fontWeight: 700,
            color: isDark ? "rgba(255,255,255,0.55)" : C.textSoft,
            letterSpacing: 1.5,
            textTransform: "uppercase",
          }}
        >
          Solar · Palmas-TO
        </span>
      </div>
    </div>
  );
}

function ArrowCTA({ variant }: { variant: "dark" | "light" }) {
  const isDark = variant === "dark";
  return (
    <div
      style={{
        position: "absolute",
        bottom: 44,
        right: 44,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 70,
        height: 70,
        borderRadius: "50%",
        background: isDark ? C.yellow : C.navy,
        boxShadow: isDark
          ? "0 6px 18px rgba(245,188,44,0.35)"
          : "0 6px 18px rgba(14,33,82,0.25)",
        zIndex: 4,
      }}
    >
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
        <path
          d="M5 12h14M13 5l7 7-7 7"
          stroke={isDark ? C.navy : "#fff"}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

function LogoWatermark({ variant }: { variant: "dark" | "light" }) {
  return (
    <div
      style={{
        position: "absolute",
        bottom: 30,
        left: 44,
        display: "flex",
        alignItems: "center",
        pointerEvents: "none",
        zIndex: 2,
      }}
    >
      <img
        src={`${SITE}/logo-aura-watermark.png`}
        alt=""
        width={120}
        height={120}
        style={{
          objectFit: "contain",
          opacity: variant === "dark" ? 0.22 : 0.18,
        }}
      />
    </div>
  );
}

function CheckIcon({ size = 28, color }: { size?: number; color: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="11" fill={color} />
      <path
        d="M7 12.5l3.2 3.2L17 9"
        stroke="#fff"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function XCircle({ size = 28, color }: { size?: number; color: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="11" fill={color} />
      <path
        d="M8 8l8 8M16 8l-8 8"
        stroke="#fff"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SunRayIcon({ size = 80, color }: { size?: number; color: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      <circle cx="40" cy="40" r="14" fill={color} />
      {Array.from({ length: 12 }, (_, i) => {
        const a = (i * Math.PI) / 6;
        const x1 = 40 + Math.cos(a) * 22;
        const y1 = 40 + Math.sin(a) * 22;
        const x2 = 40 + Math.cos(a) * 34;
        const y2 = 40 + Math.sin(a) * 34;
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke={color}
            strokeWidth="5"
            strokeLinecap="round"
          />
        );
      })}
    </svg>
  );
}

function WarningIcon({ size = 32, color }: { size?: number; color: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path
        d="M12 3l10 18H2L12 3z"
        fill={color}
      />
      <path
        d="M12 10v5M12 18v.5"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function WhatsIcon({ size = 36, color = "#fff" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2a10 10 0 00-8.7 14.9L2 22l5.3-1.3A10 10 0 1012 2z"
        fill={color}
      />
      <path
        d="M8 7.5c.4-.4.9-.5 1.3-.4.4.1.8 1.3 1 1.7.2.4-.1.7-.4 1-.3.3-.6.5-.2 1.1.4.6 1.6 2.1 2.9 2.7.6.3 1 .2 1.3-.1.3-.3.6-.7.9-.5.3.2 2 1 2.3 1.1.3.1.5.2.3.6-.2.4-.9 1.5-2 1.7-1.1.2-3-.4-4.7-1.6C9.1 12.5 7.7 10.7 7 9c-.3-.6.1-1.1.4-1.3.2-.1.4-.1.6-.2z"
        fill={C.whats}
      />
    </svg>
  );
}

// =============== SLIDES ===============

// SLIDE 1 — CAPA NAVY com painel solar lado direito
function Slide1() {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        display: "flex",
        background: "linear-gradient(135deg, #1B3A87 0%, #0E2152 100%)",
        fontFamily: "Inter, system-ui, sans-serif",
        color: "#fff",
        overflow: "hidden",
      }}
    >
      {/* Foto direita */}
      <img
        src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1100&q=85"
        alt=""
        width={620}
        height={1080}
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          width: 620,
          height: 1080,
          objectFit: "cover",
          maskImage:
            "linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.85) 25%, #000 50%)",
          WebkitMaskImage:
            "linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.85) 25%, #000 50%)",
          filter: "saturate(0.95) brightness(0.92)",
          zIndex: 1,
        }}
      />
      {/* Halo amarelo (sol) atrás direita superior */}
      <div
        style={{
          position: "absolute",
          right: 80,
          top: 60,
          width: 220,
          height: 220,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(245,188,44,0.5) 0%, transparent 70%)",
          filter: "blur(20px)",
          zIndex: 1,
        }}
      />

      <NumberBadge n={1} variant="dark" />
      <LogoTopRight variant="dark" />

      {/* Hero esquerda */}
      <div
        style={{
          position: "relative",
          width: "60%",
          padding: "200px 60px 200px 60px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 0,
          zIndex: 3,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginBottom: 18,
          }}
        >
          <SunRayIcon size={44} color={C.yellow} />
          <span
            style={{
              fontFamily: "Anton, sans-serif",
              fontSize: 22,
              color: C.yellow,
              letterSpacing: 3,
              textTransform: "uppercase",
            }}
          >
            mito · ano 2026
          </span>
        </div>
        <span
          style={{
            fontFamily: "Anton, sans-serif",
            fontSize: 112,
            color: C.yellow,
            letterSpacing: -3,
            lineHeight: 0.9,
            textTransform: "uppercase",
          }}
        >
          Taxação
        </span>
        <span
          style={{
            fontFamily: "Anton, sans-serif",
            fontSize: 112,
            color: C.yellow,
            letterSpacing: -3,
            lineHeight: 0.9,
            textTransform: "uppercase",
            marginBottom: 18,
          }}
        >
          do Sol
        </span>
        <span
          style={{
            fontFamily: "Anton, sans-serif",
            fontSize: 46,
            color: "#fff",
            letterSpacing: -1.2,
            lineHeight: 1,
            textTransform: "uppercase",
          }}
        >
          acabou com solar?
        </span>
        <span
          style={{
            fontSize: 19,
            fontWeight: 500,
            color: "rgba(255,255,255,0.75)",
            letterSpacing: -0.2,
            lineHeight: 1.45,
            marginTop: 20,
            maxWidth: 460,
          }}
        >
          A verdade que quase ninguém explica sobre a Lei 14.300 e o Fio B.
        </span>
      </div>

      <LogoWatermark variant="dark" />
      <ArrowCTA variant="dark" />
    </div>
  );
}

function Placeholder({ n, variant }: { n: number; variant: "dark" | "light" }) {
  const isDark = variant === "dark";
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: isDark
          ? "linear-gradient(135deg, #1B3A87 0%, #0E2152 100%)"
          : C.cream,
        fontFamily: "Inter, system-ui, sans-serif",
        color: isDark ? "#fff" : C.text,
      }}
    >
      <NumberBadge n={n} variant={variant} />
      <LogoTopRight variant={variant} />
      <LogoWatermark variant={variant} />
      <ArrowCTA variant={variant} />
      <span
        style={{
          fontFamily: "Anton, sans-serif",
          fontSize: 80,
          color: isDark ? C.yellow : C.navy,
        }}
      >
        Slide {n}
      </span>
    </div>
  );
}

// =============== ROUTE ===============

export async function GET(
  _req: Request,
  ctx: { params: Promise<{ slide: string }> },
) {
  const { slide } = await ctx.params;

  let content;
  switch (slide) {
    case "1": content = <Slide1 />; break;
    case "2": content = <Placeholder n={2} variant="light" />; break;
    case "3": content = <Placeholder n={3} variant="light" />; break;
    case "4": content = <Placeholder n={4} variant="light" />; break;
    case "5": content = <Placeholder n={5} variant="light" />; break;
    case "6": content = <Placeholder n={6} variant="dark" />; break;
    case "7": content = <Placeholder n={7} variant="light" />; break;
    case "8": content = <Placeholder n={8} variant="dark" />; break;
    case "9": content = <Placeholder n={9} variant="dark" />; break;
    default:
      return new Response("Slide não encontrado. Use /artes/taxacao-sol/1 a /9.", { status: 404 });
  }

  const { anton } = await loadFonts();

  return new ImageResponse(content, {
    ...SIZE,
    fonts: [{ name: "Anton", data: anton, weight: 400, style: "normal" }],
  });
}
