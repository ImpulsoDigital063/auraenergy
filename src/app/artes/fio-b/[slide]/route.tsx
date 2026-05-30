import { ImageResponse } from "next/og";

export const runtime = "edge";

const SITE = process.env.NEXT_PUBLIC_BASE_URL || "https://auraenergypalmas.com";

// Anton (condensed black) — para números-herói e labels caps
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

const TIMELINE = [
  { ano: "2023", pct: 15, state: "passou" as const },
  { ano: "2024", pct: 30, state: "passou" as const },
  { ano: "2025", pct: 45, state: "passou" as const },
  { ano: "2026", pct: 60, state: "agora" as const },
  { ano: "2027", pct: 75, state: "futuro" as const },
  { ano: "2028", pct: 90, state: "futuro" as const },
  { ano: "2029+", pct: 100, state: "ruim" as const },
];

function barBg(state: "passou" | "agora" | "futuro" | "ruim") {
  if (state === "passou") return "rgba(148,163,184,0.35)";
  if (state === "agora") return "linear-gradient(180deg, #F5BC2C 0%, #FF8B3D 100%)";
  if (state === "futuro") return "linear-gradient(180deg, #FF8B3D 0%, #ef4444 100%)";
  return "linear-gradient(180deg, #ef4444 0%, #b91c1c 100%)";
}

const SIZE = { width: 1080, height: 1080 };

// ========== HELPER · LogoBlock padronizado (top-left em todos os slides) ==========
function LogoBlock({ variant }: { variant: "dark" | "light" }) {
  const isDark = variant === "dark";
  // Em dark zone, usar perfil_minimal (tem fundo cream sutil que destaca do azul).
  // Em light zone, usar logo sem fundo (integra natural com cream).
  const logoSrc = isDark
    ? `${SITE}/logo-aura-perfil.png`
    : `${SITE}/logo-aura.png`;
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
      <img
        src={logoSrc}
        alt="Aura Energy"
        width={150}
        height={150}
        style={{ objectFit: "contain" }}
      />
      <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
        <span
          style={{
            fontFamily: "Anton, sans-serif",
            fontSize: 34,
            color: isDark ? "#F5BC2C" : "#1B3A87",
            letterSpacing: 2.5,
            textTransform: "uppercase",
            lineHeight: 1,
          }}
        >
          Aura Energy
        </span>
        <span
          style={{
            fontSize: 13,
            fontWeight: 700,
            color: isDark ? "rgba(255,255,255,0.6)" : "#666",
            letterSpacing: 1.8,
            textTransform: "uppercase",
          }}
        >
          Solar · CREA-TO · Palmas
        </span>
      </div>
    </div>
  );
}

// ========== HELPER · DotGrid de fundo (textura premium) ==========
function DotGrid({ variant }: { variant: "dark" | "light" }) {
  const dotColor =
    variant === "dark" ? "rgba(245,188,44,0.06)" : "rgba(27,58,135,0.06)";
  const dots: React.ReactNode[] = [];
  const cols = 18;
  const rows = 18;
  const spacing = 60;
  const offsetX = 30;
  const offsetY = 30;
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      dots.push(
        <div
          key={`${r}-${c}`}
          style={{
            position: "absolute",
            top: offsetY + r * spacing,
            left: offsetX + c * spacing,
            width: 3,
            height: 3,
            borderRadius: "50%",
            background: dotColor,
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

// ========== SLIDE 1 — CAPA (DARK + FOTO) ==========
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
        background:
          "radial-gradient(130% 100% at 50% 0%, #1B3A87 0%, #0E2152 60%), #0E2152",
        fontFamily: "Inter, system-ui, sans-serif",
        color: "#ffffff",
        overflow: "hidden",
      }}
    >
      {/* Foto Unsplash de painéis solares — bottom right com fade pro blue */}
      <img
        src="https://images.unsplash.com/photo-1545209463-e2825498edbf?w=900&q=80"
        alt="Painéis solares"
        width={620}
        height={620}
        style={{
          position: "absolute",
          right: -120,
          bottom: -100,
          width: 720,
          height: 720,
          objectFit: "cover",
          opacity: 0.42,
          maskImage:
            "radial-gradient(circle at 70% 70%, black 30%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(circle at 70% 70%, black 30%, transparent 75%)",
          filter: "saturate(0.65) brightness(0.85)",
          zIndex: 1,
        }}
      />

      {/* Overlay gradient pra escurecer área de texto */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            "linear-gradient(95deg, rgba(14,33,82,0.95) 0%, rgba(14,33,82,0.78) 45%, rgba(14,33,82,0.15) 75%, transparent 100%)",
          zIndex: 1,
        }}
      />

      {/* DotGrid de fundo — textura premium */}
      <DotGrid variant="dark" />

      {/* Watermark tipográfico AURA atrás de tudo */}
      <div
        style={{
          position: "absolute",
          top: 200,
          left: -40,
          right: -40,
          fontFamily: "Anton, sans-serif",
          fontSize: 540,
          color: "rgba(245, 188, 44, 0.07)",
          letterSpacing: -18,
          lineHeight: 0.85,
          textTransform: "uppercase",
          whiteSpace: "nowrap",
          display: "flex",
          justifyContent: "center",
          pointerEvents: "none",
          zIndex: 1,
        }}
      >
        AURA
      </div>

      {/* Top bar: logo PADRONIZADA top-left + badge top-right */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          position: "relative",
          zIndex: 3,
        }}
      >
        <LogoBlock variant="dark" />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            padding: "10px 20px",
            borderRadius: 999,
            background: "rgba(245, 188, 44, 0.15)",
            border: "1px solid rgba(245, 188, 44, 0.55)",
          }}
        >
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "#F5BC2C",
            }}
          />
          <span
            style={{
              fontFamily: "Anton, sans-serif",
              fontSize: 20,
              letterSpacing: 3,
              textTransform: "uppercase",
              color: "#F5BC2C",
            }}
          >
            Atenção Palmas-TO
          </span>
        </div>
      </div>

      {/* Hero: hook em 4 linhas Anton + tagline */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 0,
          position: "relative",
          zIndex: 3,
          marginTop: -30,
        }}
      >
        <span
          style={{
            fontFamily: "Anton, sans-serif",
            fontSize: 30,
            color: "#F5BC2C",
            letterSpacing: 3,
            textTransform: "uppercase",
            marginBottom: 18,
          }}
        >
          Por que
        </span>
        <span
          style={{
            fontFamily: "Anton, sans-serif",
            fontSize: 110,
            color: "#fff",
            letterSpacing: -2.5,
            lineHeight: 0.92,
            textTransform: "uppercase",
          }}
        >
          Solar em 2026
        </span>
        <span
          style={{
            fontFamily: "Anton, sans-serif",
            fontSize: 110,
            color: "#fff",
            letterSpacing: -2.5,
            lineHeight: 0.92,
            textTransform: "uppercase",
          }}
        >
          vai pagar mais
        </span>
        <span
          style={{
            fontFamily: "Anton, sans-serif",
            fontSize: 110,
            color: "#F5BC2C",
            letterSpacing: -2.5,
            lineHeight: 0.92,
            textTransform: "uppercase",
          }}
        >
          que em 2027.
        </span>
        <span
          style={{
            fontSize: 26,
            fontStyle: "italic",
            fontWeight: 500,
            color: "rgba(246, 245, 232, 0.65)",
            letterSpacing: -0.3,
            marginTop: 18,
          }}
        >
          (matemática pura · Lei 14.300)
        </span>
      </div>

      {/* Footer: instrução arraste (sem branding duplicado — logo já tá no top) */}
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
              fontSize: 14,
              fontWeight: 700,
              color: "rgba(245, 188, 44, 0.85)",
              letterSpacing: 2.5,
              textTransform: "uppercase",
            }}
          >
            ANEEL · cronograma Fio B
          </span>
          <span
            style={{
              fontSize: 26,
              fontWeight: 700,
              color: "#ffffff",
              letterSpacing: -0.3,
            }}
          >
            Entenda em 4 cards →
          </span>
        </div>

        {/* Indicador slide 1/5 minimalista */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          {[1, 2, 3, 4, 5].map((n) => (
            <div
              key={n}
              style={{
                width: n === 1 ? 36 : 8,
                height: 8,
                borderRadius: 4,
                background: n === 1 ? "#F5BC2C" : "rgba(255,255,255,0.2)",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// ========== SLIDE 2 — O QUE É FIO B (LIGHT) ==========
function Slide2() {
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
        background:
          "radial-gradient(110% 80% at 100% 0%, rgba(245,188,44,0.22) 0%, transparent 55%), #fffef2",
        fontFamily: "Inter, system-ui, sans-serif",
        color: "#1A1A1A",
        overflow: "hidden",
      }}
    >
      {/* DotGrid */}
      <DotGrid variant="light" />

      {/* Watermark tipográfico */}
      <div
        style={{
          position: "absolute",
          top: 200,
          left: -80,
          right: -80,
          fontFamily: "Anton, sans-serif",
          fontSize: 520,
          color: "rgba(27, 58, 135, 0.045)",
          letterSpacing: -20,
          lineHeight: 0.85,
          textTransform: "uppercase",
          whiteSpace: "nowrap",
          display: "flex",
          justifyContent: "center",
          pointerEvents: "none",
          zIndex: 1,
        }}
      >
        TUSD
      </div>

      {/* Top: LogoBlock padronizado */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          position: "relative",
          zIndex: 2,
        }}
      >
        <LogoBlock variant="light" />
      </div>

      {/* Hero: pergunta + resposta conversacional (leigo+expert) */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 14,
          position: "relative",
          zIndex: 2,
          marginTop: -10,
        }}
      >
        <span
          style={{
            fontFamily: "Anton, sans-serif",
            fontSize: 22,
            color: "#D9A012",
            letterSpacing: 3,
            textTransform: "uppercase",
            marginBottom: 4,
          }}
        >
          Antes de tudo
        </span>
        <span
          style={{
            fontFamily: "Anton, sans-serif",
            fontSize: 96,
            color: "#1B3A87",
            letterSpacing: -2.5,
            lineHeight: 0.95,
            textTransform: "uppercase",
          }}
        >
          O que é
        </span>
        <span
          style={{
            fontFamily: "Anton, sans-serif",
            fontSize: 96,
            color: "#FF8B3D",
            letterSpacing: -2.5,
            lineHeight: 0.95,
            textTransform: "uppercase",
          }}
        >
          o Fio B?
        </span>

        <span
          style={{
            fontSize: 30,
            fontWeight: 700,
            lineHeight: 1.3,
            letterSpacing: -0.5,
            color: "#1A1A1A",
            marginTop: 18,
            maxWidth: 880,
          }}
        >
          Pensa assim: você tem solar, gera energia, e o que sobra vai pra rede da Energisa.
        </span>
        <span
          style={{
            fontSize: 24,
            fontWeight: 500,
            lineHeight: 1.45,
            color: "#444",
            letterSpacing: -0.2,
            maxWidth: 880,
          }}
        >
          Antes da Lei 14.300, esse &quot;empréstimo&quot; valia 100% — você gerava 1 kWh, abatia 1 kWh na conta.
        </span>
        <span
          style={{
            fontSize: 24,
            fontWeight: 700,
            lineHeight: 1.45,
            color: "#D9A012",
            letterSpacing: -0.2,
            maxWidth: 880,
          }}
        >
          Agora a Energisa cobra uma taxa nessa troca. Chama Fio B (TUSD) — e sobe todo ano.
        </span>
      </div>

      {/* Footer */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingTop: 22,
          borderTop: "1px solid rgba(26,26,26,0.12)",
          position: "relative",
          zIndex: 2,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <span
            style={{
              fontSize: 13,
              fontWeight: 700,
              color: "#D9A012",
              letterSpacing: 2.5,
              textTransform: "uppercase",
            }}
          >
            Próximo card
          </span>
          <span
            style={{
              fontSize: 24,
              fontWeight: 700,
              color: "#333",
              letterSpacing: -0.3,
            }}
          >
            O cronograma · ano a ano →
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          {[1, 2, 3, 4, 5].map((n) => (
            <div
              key={n}
              style={{
                width: n === 2 ? 36 : 8,
                height: 8,
                borderRadius: 4,
                background: n === 2 ? "#F5BC2C" : "rgba(26,26,26,0.18)",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// ========== SLIDE 3 — CRONOGRAMA (BLUE AURA) ==========
function Slide3() {
  const BAR_HEIGHT = 380;
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "60px 60px 50px",
        background:
          "radial-gradient(130% 100% at 50% 0%, #1B3A87 0%, #0E2152 60%), #0E2152",
        fontFamily: "Inter, system-ui, sans-serif",
        color: "#ffffff",
        overflow: "hidden",
      }}
    >
      {/* DotGrid */}
      <DotGrid variant="dark" />

      {/* Watermark */}
      <div
        style={{
          position: "absolute",
          top: 260,
          left: -40,
          right: -40,
          fontFamily: "Anton, sans-serif",
          fontSize: 380,
          color: "rgba(245, 188, 44, 0.04)",
          letterSpacing: -12,
          lineHeight: 0.85,
          textTransform: "uppercase",
          whiteSpace: "nowrap",
          display: "flex",
          justifyContent: "center",
          pointerEvents: "none",
          zIndex: 1,
        }}
      >
        TUSD
      </div>

      {/* Top: LogoBlock + título */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 24,
          position: "relative",
          zIndex: 2,
        }}
      >
        <LogoBlock variant="dark" />

        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <span
            style={{
              fontFamily: "Anton, sans-serif",
              fontSize: 22,
              color: "#F5BC2C",
              letterSpacing: 3,
              textTransform: "uppercase",
            }}
          >
            Cronograma · Lei 14.300
          </span>
          <span
            style={{
              fontFamily: "Anton, sans-serif",
              fontSize: 70,
              color: "#fff",
              letterSpacing: -2,
              lineHeight: 0.95,
              textTransform: "uppercase",
            }}
          >
            % da sua geração
          </span>
          <span
            style={{
              fontFamily: "Anton, sans-serif",
              fontSize: 70,
              color: "#FF8B3D",
              letterSpacing: -2,
              lineHeight: 0.95,
              textTransform: "uppercase",
            }}
          >
            que vira taxa
          </span>
        </div>
      </div>

      {/* Gráfico */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          gap: 10,
          position: "relative",
          zIndex: 2,
        }}
      >
        {TIMELINE.map((t) => {
          const isAgora = t.state === "agora";
          return (
            <div
              key={t.ano}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 12,
                position: "relative",
                width: 124,
              }}
            >
              {isAgora && (
                <div
                  style={{
                    position: "absolute",
                    top: -42,
                    left: "50%",
                    transform: "translateX(-50%)",
                    padding: "6px 14px",
                    borderRadius: 999,
                    background: "#F5BC2C",
                    color: "#0E2152",
                    fontFamily: "Anton, sans-serif",
                    fontSize: 16,
                    letterSpacing: 1.8,
                    textTransform: "uppercase",
                    whiteSpace: "nowrap",
                    display: "flex",
                  }}
                >
                  ▼ você está aqui
                </div>
              )}

              <div
                style={{
                  position: "relative",
                  width: 124,
                  height: BAR_HEIGHT,
                  background: "rgba(255,255,255,0.035)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 12,
                  display: "flex",
                  alignItems: "flex-end",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: `${t.pct}%`,
                    background: barBg(t.state),
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "Anton, sans-serif",
                      fontSize: isAgora ? 44 : 32,
                      color: isAgora
                        ? "#0E2152"
                        : t.state === "passou"
                          ? "rgba(255,255,255,0.55)"
                          : "#fff",
                      letterSpacing: -1,
                    }}
                  >
                    {t.pct}%
                  </span>
                </div>
              </div>

              <span
                style={{
                  fontFamily: "Anton, sans-serif",
                  fontSize: 22,
                  color: isAgora ? "#F5BC2C" : "rgba(246,245,232,0.55)",
                  letterSpacing: 1.5,
                }}
              >
                {t.ano}
              </span>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingTop: 20,
          borderTop: "1px solid rgba(255,255,255,0.1)",
          position: "relative",
          zIndex: 2,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <span
            style={{
              fontSize: 13,
              fontWeight: 700,
              color: "#F5BC2C",
              letterSpacing: 2.5,
              textTransform: "uppercase",
            }}
          >
            Próximo card
          </span>
          <span
            style={{
              fontSize: 22,
              fontWeight: 700,
              color: "rgba(246,245,232,0.85)",
              letterSpacing: -0.3,
            }}
          >
            O impacto na sua conta →
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          {[1, 2, 3, 4, 5].map((n) => (
            <div
              key={n}
              style={{
                width: n === 3 ? 36 : 8,
                height: 8,
                borderRadius: 4,
                background: n === 3 ? "#F5BC2C" : "rgba(255,255,255,0.2)",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// ========== SLIDE 4 — IMPACTO FINANCEIRO (LIGHT) ==========
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
        padding: "60px 70px 60px",
        background:
          "radial-gradient(110% 80% at 0% 0%, rgba(255,139,61,0.18) 0%, transparent 55%), #fffef2",
        fontFamily: "Inter, system-ui, sans-serif",
        color: "#1A1A1A",
        overflow: "hidden",
      }}
    >
      {/* DotGrid */}
      <DotGrid variant="light" />

      {/* Watermark */}
      <div
        style={{
          position: "absolute",
          top: 230,
          left: -60,
          right: -60,
          fontFamily: "Anton, sans-serif",
          fontSize: 460,
          color: "rgba(220, 38, 38, 0.04)",
          letterSpacing: -16,
          lineHeight: 0.85,
          textTransform: "uppercase",
          whiteSpace: "nowrap",
          display: "flex",
          justifyContent: "center",
          pointerEvents: "none",
          zIndex: 1,
        }}
      >
        ADIAR
      </div>

      {/* Top: LogoBlock padronizado */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          position: "relative",
          zIndex: 2,
        }}
      >
        <LogoBlock variant="light" />
      </div>

      {/* Hero text compacto */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          position: "relative",
          zIndex: 2,
          marginTop: -10,
        }}
      >
        <span
          style={{
            fontFamily: "Anton, sans-serif",
            fontSize: 18,
            color: "#D9A012",
            letterSpacing: 3,
            textTransform: "uppercase",
            marginBottom: 8,
          }}
        >
          Caso real · Palmas-TO
        </span>
        <span
          style={{
            fontFamily: "Anton, sans-serif",
            fontSize: 64,
            color: "#1A1A1A",
            letterSpacing: -1.8,
            lineHeight: 0.95,
            textTransform: "uppercase",
          }}
        >
          R$ 1.573
        </span>
        <span
          style={{
            fontFamily: "Anton, sans-serif",
            fontSize: 64,
            color: "#10b981",
            letterSpacing: -1.8,
            lineHeight: 0.95,
            textTransform: "uppercase",
          }}
        >
          virou R$ 390/mês.
        </span>
        <span
          style={{
            fontSize: 20,
            color: "#666",
            fontWeight: 500,
            letterSpacing: -0.2,
            marginTop: 10,
            maxWidth: 880,
            lineHeight: 1.4,
          }}
        >
          Sistema 11,21 kWp · 1.300 kWh/mês · projeto entregue pela equipe técnica do Renato
        </span>
      </div>

      {/* 2 cards de janela vs custo de adiar */}
      <div style={{ display: "flex", flexDirection: "column", gap: 12, position: "relative", zIndex: 2 }}>
        <ImpactRow
          label="Instalando em 2026"
          value="75% off"
          sub="na sua conta (caso acima · Fio B 60%)"
          color="#10b981"
          tag="JANELA BOA"
          tagColor="#10b981"
        />
        <ImpactRow
          label="Adiando pra 2027 (Fio B 75%)"
          value="-R$ 150"
          sub="por mês a menos na economia futura"
          color="#FF8B3D"
          tag="-12 MESES"
          tagColor="#FF8B3D"
        />
        <ImpactRow
          label="Adiando pra 2028 (Fio B 90%)"
          value="-R$ 220"
          sub="por mês a menos na economia futura"
          color="#dc2626"
          tag="-24 MESES"
          tagColor="#dc2626"
        />
      </div>

      {/* Footer */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingTop: 18,
          borderTop: "1px solid rgba(26,26,26,0.12)",
          position: "relative",
          zIndex: 2,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <span
            style={{
              fontSize: 13,
              fontWeight: 700,
              color: "#D9A012",
              letterSpacing: 2.5,
              textTransform: "uppercase",
            }}
          >
            Último card
          </span>
          <span
            style={{
              fontSize: 22,
              fontWeight: 700,
              color: "#333",
              letterSpacing: -0.3,
            }}
          >
            Como falar com o Renato →
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          {[1, 2, 3, 4, 5].map((n) => (
            <div
              key={n}
              style={{
                width: n === 4 ? 36 : 8,
                height: 8,
                borderRadius: 4,
                background: n === 4 ? "#F5BC2C" : "rgba(26,26,26,0.18)",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function ImpactRow({
  label,
  value,
  sub,
  color,
  tag,
  tagColor,
}: {
  label: string;
  value: string;
  sub: string;
  color: string;
  tag: string;
  tagColor: string;
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "18px 22px",
        background: "#fff",
        borderRadius: 16,
        border: "1px solid rgba(26,26,26,0.08)",
        boxShadow: "0 1px 3px rgba(26,26,26,0.04)",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
        <span
          style={{
            fontFamily: "Anton, sans-serif",
            fontSize: 18,
            color: "#666",
            letterSpacing: 2,
            textTransform: "uppercase",
          }}
        >
          {label}
        </span>
        <span style={{ fontSize: 20, color: "#333", letterSpacing: -0.3 }}>{sub}</span>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
        <span
          style={{
            fontFamily: "Anton, sans-serif",
            fontSize: 56,
            color,
            letterSpacing: -1.5,
            lineHeight: 1,
          }}
        >
          {value}
        </span>
        <span
          style={{
            fontFamily: "Anton, sans-serif",
            fontSize: 12,
            color: tagColor,
            background: `${tagColor}1f`,
            padding: "6px 10px",
            borderRadius: 999,
            letterSpacing: 1.5,
            textTransform: "uppercase",
            whiteSpace: "nowrap",
          }}
        >
          {tag}
        </span>
      </div>
    </div>
  );
}

// ========== SLIDE 5 — CTA (LIGHT GRADIENT) ==========
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
        padding: "60px 70px 60px",
        background:
          "radial-gradient(90% 70% at 50% 110%, rgba(245,188,44,0.45) 0%, transparent 60%), radial-gradient(80% 60% at 0% 0%, rgba(255,139,61,0.22) 0%, transparent 60%), #fffef2",
        fontFamily: "Inter, system-ui, sans-serif",
        color: "#1A1A1A",
        overflow: "hidden",
      }}
    >
      {/* DotGrid */}
      <DotGrid variant="light" />

      {/* Watermark */}
      <div
        style={{
          position: "absolute",
          top: 240,
          left: -60,
          right: -60,
          fontFamily: "Anton, sans-serif",
          fontSize: 480,
          color: "rgba(27, 58, 135, 0.05)",
          letterSpacing: -18,
          lineHeight: 0.85,
          textTransform: "uppercase",
          whiteSpace: "nowrap",
          display: "flex",
          justifyContent: "center",
          pointerEvents: "none",
          zIndex: 1,
        }}
      >
        AGORA
      </div>

      {/* Top: LogoBlock + indicador slide */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          position: "relative",
          zIndex: 2,
        }}
      >
        <LogoBlock variant="light" />

        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          {[1, 2, 3, 4, 5].map((n) => (
            <div
              key={n}
              style={{
                width: n === 5 ? 36 : 8,
                height: 8,
                borderRadius: 4,
                background: n === 5 ? "#F5BC2C" : "rgba(26,26,26,0.18)",
              }}
            />
          ))}
        </div>
      </div>

      {/* Hero CTA */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 8,
          position: "relative",
          zIndex: 2,
          marginTop: -10,
        }}
      >
        <span
          style={{
            fontFamily: "Anton, sans-serif",
            fontSize: 20,
            color: "#D9A012",
            letterSpacing: 3,
            textTransform: "uppercase",
            marginBottom: 8,
          }}
        >
          Renato Edson · Aura Energy
        </span>
        <span
          style={{
            fontFamily: "Anton, sans-serif",
            fontSize: 92,
            color: "#1A1A1A",
            letterSpacing: -2.5,
            lineHeight: 0.92,
            textTransform: "uppercase",
          }}
        >
          Quer ver quanto
        </span>
        <span
          style={{
            fontFamily: "Anton, sans-serif",
            fontSize: 92,
            color: "#FF8B3D",
            letterSpacing: -2.5,
            lineHeight: 0.92,
            textTransform: "uppercase",
          }}
        >
          economiza no SEU caso?
        </span>
        <span
          style={{
            fontSize: 24,
            color: "#333",
            letterSpacing: -0.2,
            lineHeight: 1.4,
            marginTop: 14,
            fontWeight: 500,
            maxWidth: 880,
          }}
        >
          Manda foto da sua conta no WhatsApp. Eu mesmo calculo seu sistema com os dados reais da Energisa-TO — sem cadastro, sem call center, sem promessa de economia mágica.
        </span>
      </div>

      {/* 2 CTAs paralelos */}
      <div
        style={{
          display: "flex",
          gap: 16,
          position: "relative",
          zIndex: 2,
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
            background: "linear-gradient(135deg, #F5BC2C 0%, #FF8B3D 100%)",
            borderRadius: 18,
            boxShadow: "0 6px 20px rgba(245,188,44,0.35)",
          }}
        >
          <span
            style={{
              fontSize: 12,
              fontWeight: 800,
              color: "#0E2152",
              letterSpacing: 2,
              textTransform: "uppercase",
              opacity: 0.7,
            }}
          >
            Calculadora rápida
          </span>
          <span
            style={{
              fontFamily: "Anton, sans-serif",
              fontSize: 28,
              color: "#0E2152",
              letterSpacing: -0.5,
            }}
          >
            Link na bio
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
            background: "#1B3A87",
            borderRadius: 18,
            boxShadow: "0 6px 20px rgba(27,58,135,0.3)",
          }}
        >
          <span
            style={{
              fontSize: 12,
              fontWeight: 800,
              color: "#fff",
              letterSpacing: 2,
              textTransform: "uppercase",
              opacity: 0.65,
            }}
          >
            Falar com Renato
          </span>
          <span
            style={{
              fontFamily: "Anton, sans-serif",
              fontSize: 28,
              color: "#fff",
              letterSpacing: -0.5,
            }}
          >
            (63) 9 9270-6284
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
      return new Response("Slide não encontrado. Use /artes/fio-b/1 a /5.", {
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
