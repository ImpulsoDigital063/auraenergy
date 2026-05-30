"use client";

import Image from "next/image";

// =====================================================================
// PLANO COMPLETO AURA ENERGY — formato Impulso Digital
// Foco: execução tática · o que a Impulso entrega no lançamento da Aura
// Otimizado pra impressão (Ctrl+P → Salvar como PDF)
// =====================================================================

export default function PlanoRenatoView() {
  return (
    <>
      <style jsx global>{`
        :root {
          --plano-bg: #fffef2;
          --plano-text: #1b3a87;
          --plano-text-soft: #2d52a8;
          --plano-text-muted: #5a7bb5;
          --plano-blue: #1b3a87;
          --plano-blue-soft: #2d52a8;
          --plano-blue-deep: #0e2152;
          --plano-yellow: #f5bc2c;
          --plano-yellow-deep: #b88a1e;
          --plano-orange: #ff8b3d;
          --plano-green: #15803d;
          --plano-cream-card: #fbf8ec;
          --plano-warm-accent: #f7ecdd;
          --plano-border: rgba(27, 58, 135, 0.18);
        }

        body {
          background: var(--plano-bg) !important;
          color: var(--plano-text) !important;
        }

        .plano-doc {
          font-family: "Inter", -apple-system, sans-serif;
          line-height: 1.6;
          color: var(--plano-text);
          background: var(--plano-bg);
        }

        .plano-doc h1,
        .plano-doc h2,
        .plano-doc h3 {
          color: var(--plano-blue);
          line-height: 1.2;
        }

        .plano-doc strong {
          color: var(--plano-blue);
        }

        .plano-doc table {
          width: 100%;
          border-collapse: collapse;
          margin: 12px 0;
        }

        .plano-doc th {
          background: var(--plano-cream-card);
          color: var(--plano-blue);
          font-weight: 700;
          text-align: left;
          padding: 10px 12px;
          border-bottom: 2px solid var(--plano-yellow);
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .plano-doc td {
          padding: 10px 12px;
          border-bottom: 1px solid var(--plano-border);
          color: var(--plano-text);
          font-size: 13px;
          vertical-align: top;
        }

        .plano-doc ul,
        .plano-doc ol {
          margin: 8px 0;
          padding-left: 24px;
        }

        .plano-doc li {
          margin: 4px 0;
        }

        .plano-quote {
          background: var(--plano-warm-accent);
          border-left: 4px solid var(--plano-yellow);
          padding: 14px 20px;
          margin: 12px 0;
          font-style: italic;
          color: var(--plano-text-soft);
        }

        .plano-callout {
          background: var(--plano-cream-card);
          border: 1px solid var(--plano-border);
          border-left: 4px solid var(--plano-orange);
          padding: 14px 20px;
          margin: 12px 0;
          border-radius: 6px;
        }

        .plano-callout-blue {
          background: #eef3fa;
          border-left-color: var(--plano-blue);
        }

        .plano-callout-green {
          background: #ecfdf5;
          border-left-color: var(--plano-green);
        }

        .plano-flow {
          background: var(--plano-cream-card);
          border: 1px solid var(--plano-border);
          border-radius: 12px;
          padding: 20px;
          margin: 16px 0;
          font-family: "SF Mono", "Monaco", "Inconsolata", monospace;
          font-size: 12px;
          line-height: 1.8;
          color: var(--plano-blue);
        }

        .plano-page-marker {
          display: inline-block;
          font-size: 10px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.18em;
          color: var(--plano-yellow-deep);
          background: var(--plano-cream-card);
          padding: 5px 14px;
          border-radius: 999px;
          margin-bottom: 16px;
          border: 1px solid var(--plano-border);
        }

        .plano-toc {
          list-style: none;
          padding: 0;
          margin: 16px 0;
        }

        .plano-toc li {
          display: flex;
          align-items: baseline;
          gap: 12px;
          padding: 10px 0;
          border-bottom: 1px dashed var(--plano-border);
          font-size: 14px;
        }

        .plano-toc li:last-child {
          border-bottom: none;
        }

        .plano-toc a {
          color: var(--plano-blue);
          text-decoration: none;
          font-weight: 600;
          flex: 1;
        }

        .plano-toc a:hover {
          color: var(--plano-orange);
          text-decoration: underline;
        }

        .plano-toc-page {
          font-family: "SF Mono", "Monaco", monospace;
          font-size: 12px;
          font-weight: 700;
          color: var(--plano-yellow-deep);
          background: var(--plano-cream-card);
          padding: 3px 10px;
          border-radius: 6px;
          min-width: 60px;
          text-align: center;
          flex-shrink: 0;
        }

        .plano-toc-dots {
          flex: 0 1 auto;
          border-bottom: 1px dotted var(--plano-text-muted);
          margin: 0 4px;
          opacity: 0.4;
          height: 1px;
          align-self: end;
          margin-bottom: 6px;
          min-width: 20px;
        }

        .plano-page {
          page-break-after: always;
        }

        .plano-section {
          page-break-inside: avoid;
          margin-bottom: 32px;
        }

        @media print {
          .no-print {
            display: none !important;
          }

          body,
          .plano-doc {
            background: #fffef2 !important;
            color: #1b3a87 !important;
            font-size: 11pt;
          }

          @page {
            size: A4;
            margin: 22mm 14mm 24mm 14mm;
            @bottom-center {
              content: "Aura Energy · Plano Completo · página "
                counter(page) " de " counter(pages);
              font-family: "Inter", sans-serif;
              font-size: 9pt;
              color: #2d52a8;
              padding-top: 8mm;
            }
            @top-right {
              content: "Plano confidencial · Renato Edson";
              font-family: "Inter", sans-serif;
              font-size: 8pt;
              color: #5a7bb5;
              padding-bottom: 6mm;
            }
          }

          .plano-doc h1 {
            font-size: 28pt;
            page-break-after: avoid;
          }

          .plano-doc h2 {
            font-size: 18pt;
            page-break-after: avoid;
          }

          .plano-doc h3 {
            font-size: 13pt;
            page-break-after: avoid;
          }

          .plano-doc p,
          .plano-doc li {
            font-size: 11pt;
          }

          .plano-section {
            page-break-inside: avoid;
          }

          .plano-page {
            page-break-after: always;
          }

          * {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
        }
      `}</style>

      {/* Botões fixos no topo */}
      <div
        className="no-print"
        style={{
          position: "fixed",
          top: 16,
          right: 16,
          zIndex: 50,
          display: "flex",
          gap: 8,
          alignItems: "center",
        }}
      >
        <a
          href="/"
          style={{
            background: "white",
            border: "1px solid var(--plano-border)",
            padding: "10px 16px",
            borderRadius: 12,
            fontSize: 13,
            fontWeight: 600,
            color: "var(--plano-blue)",
            textDecoration: "none",
          }}
        >
          ← LP
        </a>
        <button
          type="button"
          onClick={() => window.print()}
          style={{
            background:
              "linear-gradient(135deg, #F5BC2C 0%, #FF8B3D 100%)",
            color: "#0e2152",
            border: "none",
            padding: "12px 22px",
            borderRadius: 12,
            fontSize: 14,
            fontWeight: 800,
            cursor: "pointer",
            boxShadow: "0 10px 30px -10px rgba(245, 188, 44, 0.50)",
          }}
        >
          🖨 Imprimir / Salvar PDF
        </button>
      </div>

      <main
        className="plano-doc"
        style={{
          maxWidth: 820,
          margin: "0 auto",
          padding: "48px 32px 96px",
        }}
      >
        {/* ═══════════════════════ CAPA (Pág. 1) ═══════════════════════ */}
        <section
          className="plano-page"
          id="capa"
          style={{
            minHeight: "calc(100vh - 120px)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            padding: "40px 20px",
            position: "relative",
            background:
              "radial-gradient(ellipse at top, rgba(245, 188, 44, 0.10) 0%, rgba(255, 254, 242, 0) 60%), radial-gradient(ellipse at bottom, rgba(27, 58, 135, 0.05) 0%, rgba(255, 254, 242, 0) 50%)",
          }}
        >
          {/* Selo confidencial top */}
          <div
            style={{
              position: "absolute",
              top: 30,
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              alignItems: "center",
              gap: 8,
              fontSize: 9,
              fontWeight: 800,
              letterSpacing: "0.25em",
              color: "var(--plano-text-muted)",
              textTransform: "uppercase",
            }}
          >
            <span style={{ width: 24, height: 1, background: "var(--plano-text-muted)", opacity: 0.4 }} />
            Documento confidencial
            <span style={{ width: 24, height: 1, background: "var(--plano-text-muted)", opacity: 0.4 }} />
          </div>

          {/* Logo com glow */}
          <div
            style={{
              position: "relative",
              marginTop: 60,
              padding: 24,
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(245, 188, 44, 0.18) 0%, rgba(245, 188, 44, 0) 70%)",
            }}
          >
            <Image
              src="/logo-aura.png"
              alt="Aura Energy"
              width={180}
              height={180}
              style={{ width: 160, height: 160, objectFit: "contain" }}
            />
          </div>

          {/* Selo Impulso */}
          <div
            style={{
              fontSize: 10,
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: "0.30em",
              color: "var(--plano-yellow-deep)",
              marginTop: 36,
              padding: "6px 16px",
              border: "1px solid var(--plano-border)",
              borderRadius: 999,
              background: "rgba(255, 255, 255, 0.6)",
              backdropFilter: "blur(8px)",
            }}
          >
            Impulso Digital · Plano Completo
          </div>

          {/* Título principal */}
          <h1
            style={{
              fontSize: 72,
              fontWeight: 900,
              lineHeight: 1,
              marginTop: 20,
              marginBottom: 12,
              color: "var(--plano-blue-deep)",
              letterSpacing: "-0.03em",
              background:
                "linear-gradient(135deg, #0E2152 0%, #1B3A87 50%, #2D52A8 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Aura Energy
          </h1>

          {/* Linha decorativa */}
          <div
            style={{
              width: 80,
              height: 4,
              background:
                "linear-gradient(90deg, #F5BC2C 0%, #FF8B3D 100%)",
              borderRadius: 2,
              margin: "20px 0",
            }}
          />

          {/* Subtítulo */}
          <h2
            style={{
              fontSize: 22,
              fontWeight: 600,
              color: "var(--plano-text-soft)",
              maxWidth: 520,
              marginBottom: 8,
              letterSpacing: "-0.01em",
            }}
          >
            Plano Completo de Lançamento e Captação Digital
          </h2>

          {/* Tagline */}
          <p
            style={{
              fontSize: 15,
              fontStyle: "italic",
              color: "var(--plano-text-muted)",
              marginBottom: 36,
            }}
          >
            90 dias de estratégia · execução · resultado
          </p>

          {/* 3 pilares visuais */}
          <div
            style={{
              display: "flex",
              gap: 12,
              marginBottom: 40,
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {[
              { letter: "1", title: "Posicionamento" },
              { letter: "2", title: "Captação" },
              { letter: "3", title: "Conversão" },
            ].map((pilar) => (
              <div
                key={pilar.title}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "10px 16px",
                  background: "rgba(255, 255, 255, 0.6)",
                  border: "1px solid var(--plano-border)",
                  borderRadius: 999,
                  backdropFilter: "blur(8px)",
                }}
              >
                <span
                  style={{
                    width: 22,
                    height: 22,
                    borderRadius: "50%",
                    background:
                      "linear-gradient(135deg, #F5BC2C 0%, #FF8B3D 100%)",
                    color: "#0E2152",
                    fontSize: 11,
                    fontWeight: 900,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {pilar.letter}
                </span>
                <span style={{ fontSize: 13, fontWeight: 700, color: "var(--plano-blue)" }}>
                  {pilar.title}
                </span>
              </div>
            ))}
          </div>

          {/* Card de dados */}
          <div
            style={{
              background: "white",
              border: "1px solid var(--plano-border)",
              borderRadius: 16,
              padding: "24px 32px",
              maxWidth: 540,
              width: "100%",
              boxShadow: "0 12px 40px -16px rgba(27, 58, 135, 0.18)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Faixa lateral colorida */}
            <div
              style={{
                position: "absolute",
                left: 0,
                top: 0,
                bottom: 0,
                width: 6,
                background:
                  "linear-gradient(180deg, #F5BC2C 0%, #FF8B3D 100%)",
              }}
            />

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, textAlign: "left" }}>
              <div>
                <div style={{ fontSize: 9, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--plano-yellow-deep)", marginBottom: 4 }}>Cliente</div>
                <div style={{ fontSize: 14, fontWeight: 700, color: "var(--plano-blue-deep)" }}>Renato Edson</div>
              </div>
              <div>
                <div style={{ fontSize: 9, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--plano-yellow-deep)", marginBottom: 4 }}>Negócio</div>
                <div style={{ fontSize: 14, fontWeight: 700, color: "var(--plano-blue-deep)" }}>Aura Energy</div>
              </div>
              <div>
                <div style={{ fontSize: 9, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--plano-yellow-deep)", marginBottom: 4 }}>Localização</div>
                <div style={{ fontSize: 14, fontWeight: 700, color: "var(--plano-blue-deep)" }}>Palmas-TO + região</div>
              </div>
              <div>
                <div style={{ fontSize: 9, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--plano-yellow-deep)", marginBottom: 4 }}>Site</div>
                <div style={{ fontSize: 14, fontWeight: 700, color: "var(--plano-blue-deep)" }}>auraenergypalmas.com</div>
              </div>
              <div>
                <div style={{ fontSize: 9, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--plano-yellow-deep)", marginBottom: 4 }}>Reunião</div>
                <div style={{ fontSize: 14, fontWeight: 700, color: "var(--plano-blue-deep)" }}>06 de maio · 2026</div>
              </div>
              <div>
                <div style={{ fontSize: 9, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--plano-yellow-deep)", marginBottom: 4 }}>Responsável</div>
                <div style={{ fontSize: 14, fontWeight: 700, color: "var(--plano-blue-deep)" }}>Eduardo Barros</div>
              </div>
            </div>
          </div>

          {/* Footer da capa */}
          <div
            style={{
              marginTop: 36,
              fontSize: 12,
              color: "var(--plano-text-muted)",
              display: "flex",
              alignItems: "center",
              gap: 12,
            }}
          >
            <span>Impulso Digital</span>
            <span style={{ width: 4, height: 4, borderRadius: "50%", background: "var(--plano-yellow)" }} />
            <span>2026-05-06</span>
            <span style={{ width: 4, height: 4, borderRadius: "50%", background: "var(--plano-yellow)" }} />
            <span>Versão 4.0</span>
          </div>

          <div
            style={{
              marginTop: 28,
              fontSize: 12,
              color: "var(--plano-text-muted)",
              fontStyle: "italic",
            }}
          >
            Sumário completo na próxima página →
          </div>
        </section>

        {/* ═══════════════════════ SUMÁRIO (Pág. 2) ═══════════════════════ */}
        <section className="plano-page plano-section" id="sumario">
          <div className="plano-page-marker">Página 2</div>
          <h2 style={{ fontSize: 32, marginBottom: 8 }}>Sumário</h2>
          <p style={{ color: "var(--plano-text-muted)", fontSize: 13, marginBottom: 24 }}>
            Esse plano foi feito pra ser consultado depois — clique em qualquer
            seção pra pular direto.
          </p>

          <ul className="plano-toc">
            <li>
              <span className="plano-toc-page">Pág. 1</span>
              <a href="#capa">Capa</a>
            </li>
            <li>
              <span className="plano-toc-page">Pág. 2</span>
              <a href="#sumario">Sumário (você está aqui)</a>
            </li>
            <li>
              <span className="plano-toc-page">Pág. 3</span>
              <a href="#secao-visao">1 · Visão geral da Aura</a>
            </li>
            <li>
              <span className="plano-toc-page">Pág. 4</span>
              <a href="#secao-resumo">2 · Resumo executivo</a>
            </li>
            <li>
              <span className="plano-toc-page">Pág. 5</span>
              <a href="#secao-entrega">3 · O que a Impulso Digital entrega</a>
            </li>
            <li>
              <span className="plano-toc-page">Pág. 6</span>
              <a href="#secao-fluxo">4 · Como tudo se conecta — fluxo de captação</a>
            </li>
            <li>
              <span className="plano-toc-page">Pág. 7</span>
              <a href="#secao-pilares">5 · 3 pilares de copy</a>
            </li>
            <li>
              <span className="plano-toc-page">Pág. 8</span>
              <a href="#secao-lp">6 · A LP segmentada por nicho</a>
            </li>
            <li>
              <span className="plano-toc-page">Pág. 9</span>
              <a href="#secao-calculadora">7 · A calculadora de economia</a>
            </li>
            <li>
              <span className="plano-toc-page">Pág. 10</span>
              <a href="#secao-concorrencia">8 · Concorrência local em Palmas</a>
            </li>
            <li>
              <span className="plano-toc-page">Pág. 11</span>
              <a href="#secao-palmas-solar">9 · Programa Palmas Solar — IPTU verde</a>
            </li>
            <li>
              <span className="plano-toc-page">Pág. 12</span>
              <a href="#secao-catalogo">10 · Catálogo de kits + projeção de receita</a>
            </li>
            <li>
              <span className="plano-toc-page">Pág. 13</span>
              <a href="#secao-cronograma">11 · Cronograma 90 dias</a>
            </li>
            <li>
              <span className="plano-toc-page">Pág. 14</span>
              <a href="#secao-artes">12 · As 6 artes Instagram</a>
            </li>
            <li>
              <span className="plano-toc-page">Pág. 15</span>
              <a href="#secao-b2b">13 · Campanhas pra atrair B2B</a>
            </li>
            <li>
              <span className="plano-toc-page">Pág. 16</span>
              <a href="#secao-google">14 · Captação Google — SEO + blog + Ads</a>
            </li>
            <li>
              <span className="plano-toc-page">Pág. 17</span>
              <a href="#secao-info">15 · Bônus: direção info-produto B2B</a>
            </li>
            <li>
              <span className="plano-toc-page">Pág. 18</span>
              <a href="#secao-pricing">16 · Setup completo + próximos serviços</a>
            </li>
            <li>
              <span className="plano-toc-page">Pág. 19</span>
              <a href="#secao-metas">17 · Metas e indicadores de sucesso</a>
            </li>
            <li>
              <span className="plano-toc-page">Pág. 20</span>
              <a href="#secao-checklist">18 · Checklist próximos 30 dias</a>
            </li>
          </ul>
        </section>

        {/* ═══════════════════════ 1. VISÃO GERAL DA AURA (Pág. 3) ═══════════════════════ */}
        <section className="plano-section" id="secao-visao">
          <div className="plano-page-marker">Página 3 · Seção 1</div>
          <h2 style={{ fontSize: 28 }}>Visão geral da Aura</h2>

          <p>
            A Aura Energy é a frente solar especialista de <strong>Renato
            Edson</strong> em Palmas-TO, sustentada pela infraestrutura
            técnica da Brasfrio (refrigeração + energia, anos de operação
            local). Nasce com um objetivo claro: transformar a operação
            técnica que o Renato já entrega há anos em uma{" "}
            <strong>marca digital reconhecida</strong> em toda a região
            metropolitana de Palmas e expansão pro interior do Tocantins.
          </p>

          <h3 style={{ fontSize: 18, marginTop: 24 }}>O que a Aura faz</h3>
          <ul>
            <li>Projeta, instala e ativa sistemas de energia solar fotovoltaica</li>
            <li>Atende residencial mid-high, comércio, indústria pequena/média e produtor rural</li>
            <li>Cobre Palmas + região (Paraíso do Tocantins, Luzimangues, Dianópolis, Colinas)</li>
            <li>Trabalha com painéis Tier 1 (Trina, Canadian, Jinko) + inversores premium (Growatt, Sungrow, Huawei) + ART em todo projeto</li>
            <li>Engenheiro responsável CREA-TO presente em cada visita técnica e projeto</li>
          </ul>

          <h3 style={{ fontSize: 18, marginTop: 24 }}>Posicionamento</h3>
          <div className="plano-callout plano-callout-blue">
            A Aura <strong>não compete por preço</strong>. Compete por
            especialização (100% solar, sem dispersão de foco),
            transparência técnica (calculadora pública, faixa de preço
            por kit) e atendimento direto com o engenheiro responsável
            (sem call center, sem terceirizado).
          </div>

          <h3 style={{ fontSize: 18, marginTop: 24 }}>Pra onde a Aura vai (12 meses)</h3>
          <ul>
            <li>
              <strong>Líder em presença digital solar de Palmas</strong> —
              passa todos concorrentes em followers (hoje líder ARASOL tem 1.540)
            </li>
            <li>
              <strong>Pipeline B2B ativo</strong> em pelo menos 2 nichos
              verticais (comércio mid + indústria/rural)
            </li>
            <li>
              <strong>Marca reconhecida pelo Programa Palmas Solar</strong>{" "}
              como consultora de referência pra desconto IPTU
            </li>
            <li>
              <strong>Base sólida pra info-produto B2B</strong> em 12-18
              meses (curso pra decisor industrial — nova frente de receita
              recorrente)
            </li>
          </ul>

          <h3 style={{ fontSize: 18, marginTop: 24 }}>Por que esse momento</h3>
          <p>
            O mercado solar de Tocantins cresce <strong>25% ao ano</strong>{" "}
            e é o <strong>2º estado mais buscado em &quot;solar empresas&quot;
            no Brasil</strong>. Em Palmas, mais de 90% dos lares ainda não
            têm solar, e a concorrência digital local está vazia (nenhum
            concorrente passa de 2.000 followers no Instagram). Janela
            aberta pra quem ocupar primeiro com profissionalismo e
            consistência.
          </p>
        </section>

        {/* ═══════════════════════ 2. RESUMO EXECUTIVO (Pág. 4) ═══════════════════════ */}
        <section className="plano-section" id="secao-resumo">
          <div className="plano-page-marker">Página 4 · Seção 2</div>
          <h2 style={{ fontSize: 28 }}>Resumo executivo</h2>

          <p>
            O lançamento da Aura Energy foi desenhado em <strong>3 camadas
            simultâneas</strong>:
          </p>

          <table>
            <thead>
              <tr><th>Camada</th><th>Entregas</th><th>Quem produz</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>LP segmentada</strong></td>
                <td>HUB raiz + 4 LPs por nicho (casa, comércio, indústria, fazenda) + calculadora de economia</td>
                <td>Impulso Digital constrói e mantém</td>
              </tr>
              <tr>
                <td><strong>Pacote Instagram</strong></td>
                <td>6 artes pra primeiros 30 dias + cronograma 14 dias + pauta de stories</td>
                <td>Impulso Digital roteiriza + faz arte · Renato posta</td>
              </tr>
              <tr>
                <td><strong>Bônus estratégico</strong></td>
                <td>Direção info-produto B2B em PDF de 1 página</td>
                <td>Impulso Digital entrega · Renato decide quando executar</td>
              </tr>
            </tbody>
          </table>

          <div className="plano-callout plano-callout-blue">
            <strong>Regra de ouro do lançamento:</strong> a Aura Energy não
            depende mais de network social pra captar lead. Cada peça
            (LP, post, story, anúncio, busca no Google) leva o cliente em
            potencial pra um CTA único — falar direto com você no WhatsApp.
          </div>
        </section>

        {/* ═══════════════════════ 3. O QUE A IMPULSO ENTREGA (Pág. 5) ═══════════════════════ */}
        <section className="plano-section" id="secao-entrega">
          <div className="plano-page-marker">Página 5 · Seção 3</div>
          <h2 style={{ fontSize: 28 }}>O que a Impulso Digital entrega (pacote completo)</h2>

          <p>Não é só &quot;fazer um site&quot;. É o caminho inteiro do lançamento:</p>

          <ol>
            <li>
              <strong>LP profissional segmentada em 4 nichos</strong> — em
              produção em <code>auraenergypalmas.com</code>, com calculadora
              de economia ao vivo, mapa de instalações em Palmas, comparativo
              financeiro com CDB e Ibovespa, janela do Fio B
            </li>
            <li>
              <strong>Estratégia de posicionamento</strong> (especialista solar +
              tecnologia transparente + atendimento direto — os 3 pilares)
            </li>
            <li>
              <strong>Cronograma de 14 dias</strong> de lançamento (este doc)
            </li>
            <li>
              <strong>6 artes Instagram</strong> prontas pros primeiros 30 dias
              (cópia + design profissional)
            </li>
            <li>
              <strong>Análise da concorrência local</strong> em Palmas — 6
              empresas mapeadas com o que fazem, o que não fazem e onde
              a Aura entra forte
            </li>
            <li>
              <strong>Estratégia de campanhas B2B</strong> — segmentação
              por nicho (comércio, indústria, rural), tipo de criativo,
              investimento sugerido
            </li>
            <li>
              <strong>Captação Google</strong> — SEO local + Google Ads pras
              buscas &quot;energia solar Palmas&quot;, &quot;solar comercial
              Tocantins&quot;, &quot;Programa Palmas Solar&quot;
            </li>
            <li>
              <strong>Bônus: Direção info-produto B2B</strong> — mapa
              estratégico em 1 página A4 pra você usar quando decidir
              gravar o curso
            </li>
            <li>
              <strong>1 mês de calibragem pós-entrega</strong> — trocamos
              placeholders por fotos e dados reais conforme você nos passa
            </li>
            <li>
              <strong>7 dias de garantia incondicional</strong> pós-pagamento
            </li>
            <li>
              <strong>Pós-lançamento:</strong> depoimento em vídeo do
              Renato vira case da Impulso Digital
            </li>
          </ol>

          <div className="plano-quote">
            Traduzindo: você não precisa pensar em o que postar, quando postar,
            como posicionar a Aura, qual palavra-chave atacar no Google, como
            falar com decisor industrial. Só precisa tirar foto da equipe
            trabalhando, mandar pra Impulso, e clicar em publicar.
          </div>
        </section>

        {/* ═══════════════════════ 4. COMO TUDO SE CONECTA (Pág. 6) ═══════════════════════ */}
        <section className="plano-section" id="secao-fluxo">
          <div className="plano-page-marker">Página 6 · Seção 4</div>
          <h2 style={{ fontSize: 28 }}>Como tudo se conecta — fluxo de captação</h2>

          <p>
            Toda a estrutura digital da Aura tem um único ponto de chegada:
            <strong> WhatsApp do Renato com mensagem já preenchida</strong>.
            Cada canal alimenta esse fluxo de um jeito diferente:
          </p>

          <h3 style={{ fontSize: 17, marginTop: 24 }}>Fluxo 1 · Instagram → LP → Calculadora → WhatsApp</h3>

          <div className="plano-flow">
            Visitante vê post no @auraenergy<br />
            ↓<br />
            Clica no link da bio (<code>auraenergypalmas.com/links</code>)<br />
            ↓<br />
            Escolhe sua situação: casa / comércio / indústria / fazenda<br />
            ↓<br />
            Vai pra LP do nicho dele (<code>/casa</code>, <code>/comercio</code>...)<br />
            ↓<br />
            Usa a calculadora — vê economia mensal estimada<br />
            ↓<br />
            Aperta CTA &quot;Falar com especialista&quot;<br />
            ↓<br />
            <strong>WhatsApp do Renato abre com a simulação já preenchida</strong>
          </div>

          <h3 style={{ fontSize: 17, marginTop: 24 }}>Fluxo 2 · Google → LP → Calculadora → WhatsApp</h3>

          <div className="plano-flow">
            Pessoa busca &quot;energia solar Palmas&quot; no Google<br />
            ↓<br />
            Encontra a Aura nos resultados (orgânico ou Google Ads)<br />
            ↓<br />
            Cai direto na LP do nicho relevante<br />
            ↓<br />
            Vê os 3 pilares (especialista, tecnologia, atendimento)<br />
            ↓<br />
            Usa a calculadora pra conferir economia<br />
            ↓<br />
            Aperta CTA &quot;Receber proposta personalizada&quot;<br />
            ↓<br />
            <strong>WhatsApp do Renato abre com a simulação já preenchida</strong>
          </div>

          <h3 style={{ fontSize: 17, marginTop: 24 }}>Fluxo 3 · Indicação direta → LP → WhatsApp</h3>

          <div className="plano-flow">
            Cliente atual indica pra amigo<br />
            ↓<br />
            Renato manda link da LP do nicho do amigo (ex: <code>/comercio</code> pra dono de loja)<br />
            ↓<br />
            Amigo lê a LP (que já está calibrada pra dor dele)<br />
            ↓<br />
            Aperta CTA<br />
            ↓<br />
            <strong>WhatsApp do Renato abre — atendimento já contextualizado</strong>
          </div>

          <div className="plano-callout plano-callout-blue">
            <strong>Por que esse desenho funciona:</strong> em vez de você
            ter que explicar tudo no WhatsApp, a LP já educou o cliente
            sobre Lei 14.300, mostrou marcas Tier 1, deu uma estimativa
            de economia. Quando ele te chama, já tá &quot;quente&quot;.
          </div>
        </section>

        {/* ═══════════════════════ 5. 3 PILARES DE COPY (Pág. 7) ═══════════════════════ */}
        <section className="plano-section" id="secao-pilares">
          <div className="plano-page-marker">Página 7 · Seção 5</div>
          <h2 style={{ fontSize: 28 }}>3 pilares de copy (todo conteúdo bate em pelo menos um)</h2>

          <div className="plano-callout">
            <h3 style={{ fontSize: 17, marginTop: 0 }}>1 · Especialista solar</h3>
            <p style={{ margin: "8px 0 0" }}>
              A diferença entre quem faz solar de vez em quando e quem é
              especialista.
            </p>
            <ul>
              <li>&quot;Brasfrio refrigera + faz solar. Aura é só solar.&quot;</li>
              <li>&quot;Engenheiro CREA-TO em todo projeto&quot;</li>
              <li>&quot;Equipe 100% dedicada a fotovoltaico&quot;</li>
            </ul>
          </div>

          <div className="plano-callout">
            <h3 style={{ fontSize: 17, marginTop: 0 }}>2 · Tecnologia transparente</h3>
            <p style={{ margin: "8px 0 0" }}>
              Cliente enxerga o sistema antes de falar com você.
            </p>
            <ul>
              <li>&quot;Calculadora ao vivo no site — você vê a economia antes de pedir orçamento&quot;</li>
              <li>&quot;Trabalho com Tier 1: Trina, Canadian, Jinko + inversores Growatt e Sungrow&quot;</li>
              <li>&quot;Garantia 25 anos painel · 10 anos inversor · ART em todo projeto&quot;</li>
            </ul>
          </div>

          <div className="plano-callout">
            <h3 style={{ fontSize: 17, marginTop: 0 }}>3 · Atendimento direto comigo</h3>
            <p style={{ margin: "8px 0 0" }}>
              Você fala diretamente com o engenheiro responsável, não com
              call center.
            </p>
            <ul>
              <li>&quot;Visita técnica gratuita em até 48h&quot;</li>
              <li>&quot;Cliente da Aura é meu cliente pessoal — pelos próximos 25 anos&quot;</li>
              <li>&quot;Sem terceirizado, sem call center&quot;</li>
            </ul>
          </div>
        </section>

        {/* ═══════════════════════ 6. LP SEGMENTADA (Pág. 8) ═══════════════════════ */}
        <section className="plano-section" id="secao-lp">
          <div className="plano-page-marker">Página 8 · Seção 6</div>
          <h2 style={{ fontSize: 28 }}>A LP segmentada por nicho — anatomia das 4 frentes</h2>

          <p>
            A Aura Energy não tem 1 site genérico. Tem <strong>1 HUB raiz +
            4 LPs especializadas</strong>, uma pra cada perfil de cliente.
            O motivo é simples: dono de supermercado não se reconhece numa
            LP que mostra fatura residencial de R$ 800.
          </p>

          <table>
            <thead>
              <tr><th>Rota</th><th>Pra quem</th><th>Headline da dor</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><code>/</code></td>
                <td>HUB raiz</td>
                <td>4 cards: &quot;Você é dono de…&quot; → roteia pro nicho certo</td>
              </tr>
              <tr>
                <td><code>/casa</code></td>
                <td>Residencial mid-high (conta R$ 600+/mês)</td>
                <td>&quot;Conta nunca para de subir&quot;</td>
              </tr>
              <tr>
                <td><code>/comercio</code></td>
                <td>Comércio, supermercado, posto, clínica</td>
                <td>&quot;Geladeira/AC 24h estoura conta&quot;</td>
              </tr>
              <tr>
                <td><code>/industria</code></td>
                <td>Pequena/média indústria</td>
                <td>&quot;Demanda contratada + consumo = custo invisível&quot;</td>
              </tr>
              <tr>
                <td><code>/fazenda</code></td>
                <td>Produtor rural (irrigação, pivô, granja)</td>
                <td>&quot;Pivô consome 60% da receita do mês de pico&quot;</td>
              </tr>
            </tbody>
          </table>

          <h3 style={{ fontSize: 17, marginTop: 32 }}>O que o visitante vê em cada LP de nicho</h3>

          <p>Toda LP segmentada segue a mesma anatomia:</p>

          <ol>
            <li>
              <strong>Hero específico</strong> — foto do nicho (galpão
              industrial, supermercado, pivô rural, casa de classe média)
              + headline forte da dor real + CTA secundário pro WhatsApp
            </li>
            <li>
              <strong>Bloco &quot;3 dores que você sente hoje&quot;</strong>{" "}
              — cada uma com texto curto, contextualizada (ex: indústria
              fala de demanda contratada, rural fala de pico de safra)
            </li>
            <li>
              <strong>Bloco &quot;O que a Aura entrega&quot;</strong> — 3
              ganhos principais traduzidos pra linguagem do decisor (ex:
              comércio fala &quot;previsibilidade financeira&quot;, indústria
              fala &quot;TIR e payback&quot;)
            </li>
            <li>
              <strong>Calculadora de economia</strong> adaptada — residencial
              fala R$/mês economizado, B2B fala payback em meses + retorno
              acumulado em 25 anos
            </li>
            <li>
              <strong>Marcas Tier 1</strong> que a Aura trabalha — Trina,
              Canadian, Jinko nos painéis · Growatt, Sungrow, Huawei nos
              inversores
            </li>
            <li>
              <strong>2-3 cases nominados do nicho</strong> (quando a
              autorização LGPD chegar dos clientes Brasfrio que toparem)
            </li>
            <li>
              <strong>Janela do Fio B</strong> — urgência regulatória factual
              (60% em 2026, 75% em 2027, 100% em 2029)
            </li>
            <li>
              <strong>FAQ de 6-8 perguntas</strong> específicas do nicho
            </li>
            <li>
              <strong>CTA único</strong>: &quot;Receber proposta personalizada
              [nicho]&quot; → WhatsApp Renato com mensagem preenchida
            </li>
          </ol>

          <div className="plano-callout">
            <strong>Como o Renato usa no dia a dia:</strong> quando entra
            lead pelo Insta, em vez de mandar um link genérico, você manda
            o link do nicho dele. O cliente abre uma página que parece
            feita pra ele. Conversão sobe muito.
          </div>
        </section>

        {/* ═══════════════════════ 7. CALCULADORA (Pág. 9) ═══════════════════════ */}
        <section className="plano-section" id="secao-calculadora">
          <div className="plano-page-marker">Página 9 · Seção 7</div>
          <h2 style={{ fontSize: 28 }}>A calculadora de economia — o diferencial técnico</h2>

          <p>
            Na pesquisa que fizemos sobre os 6 concorrentes em Palmas,
            <strong> nenhum tem calculadora pública</strong>. Todos
            forçam o cliente a pedir orçamento. A Aura inverte essa lógica.
          </p>

          <h3 style={{ fontSize: 17, marginTop: 24 }}>O que a calculadora faz</h3>

          <p>
            Cliente preenche 3 campos simples (valor médio da conta, tipo
            de imóvel, cidade). A calculadora retorna em segundos:
          </p>

          <ul>
            <li><strong>Economia mensal estimada</strong> — em reais</li>
            <li><strong>Economia em 25 anos</strong> — projeção total acumulada</li>
            <li><strong>Sistema recomendado</strong> — em kWp + número de painéis</li>
            <li><strong>Payback estimado</strong> — em quantos anos o sistema se paga</li>
          </ul>

          <h3 style={{ fontSize: 17, marginTop: 24 }}>Por que ela é precisa (e os concorrentes vão odiar)</h3>

          <p>A calculadora usa dados reais da Aura no cálculo:</p>

          <table>
            <thead>
              <tr><th>Dado</th><th>Valor usado</th><th>Fonte</th></tr>
            </thead>
            <tbody>
              <tr><td>Tarifa Energisa-TO B1</td><td>R$ 0,95/kWh</td><td>REH ANEEL 3.479/2025</td></tr>
              <tr><td>HSP Palmas-TO</td><td>5,9 kWh/m²/dia</td><td>NASA / Atlas Solar BR</td></tr>
              <tr><td>Lei 14.300 — Fio B 2026</td><td>60% sobre injetada</td><td>ANEEL — cronograma oficial</td></tr>
              <tr><td>Painel referência</td><td>575W (Tier 1 Trina/Canadian/Jinko)</td><td>Mercado 2026</td></tr>
              <tr><td>Performance ratio</td><td>0,80 (média BR)</td><td>ABSOLAR</td></tr>
            </tbody>
          </table>

          <div className="plano-callout plano-callout-green">
            <strong>O efeito na percepção do cliente:</strong> ele entra
            no site achando que vai ser empurrado pra um formulário de
            orçamento. Em vez disso, recebe uma simulação técnica em 30
            segundos. Sai com a sensação de que a Aura é diferente — porque
            é mesmo.
          </div>
        </section>

        {/* ═══════════════════════ 8. CONCORRÊNCIA LOCAL (Pág. 10) ═══════════════════════ */}
        <section className="plano-section" id="secao-concorrencia">
          <div className="plano-page-marker">Página 10 · Seção 8</div>
          <h2 style={{ fontSize: 28 }}>Concorrência local em Palmas — análise competitiva</h2>

          <p>
            A Impulso fez auditoria nas 6 principais empresas solares
            ativas em Palmas. Resultado: o mercado digital tá vazio.
            Quem ocupar primeiro com presença consistente lidera em 6-12 meses.
          </p>

          <h3 style={{ fontSize: 17, marginTop: 24 }}>Os 6 concorrentes mapeados</h3>

          <table>
            <thead>
              <tr><th>Empresa</th><th>Capacidade</th><th>Presença digital</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>ARASOL</strong></td><td>2.500+ kWp · 100+ projetos</td><td>1.540 followers Instagram</td></tr>
              <tr><td><strong>Palmas Energia Solar</strong></td><td>6.000+ kWp (líder em volume)</td><td>@palmasenergiasolar_to</td></tr>
              <tr><td><strong>Unità Soluções</strong></td><td>atende 5 estados (TO/PA/MA/GO/PI)</td><td>foco regional, não Palmas</td></tr>
              <tr><td><strong>Ferpam Energia Solar</strong></td><td>sede como case próprio</td><td>baixa</td></tr>
              <tr><td><strong>UNISOL</strong></td><td>menor que demais</td><td>menor</td></tr>
              <tr><td><strong>Brasfrio Engenharia Solar</strong></td><td>operação atual do Renato</td><td>1.887 followers · vai dar lugar à Aura</td></tr>
            </tbody>
          </table>

          <h3 style={{ fontSize: 17, marginTop: 32 }}>O que eles fazem (e a Aura faz melhor)</h3>

          <ul>
            <li>
              <strong>Comunicam preço &quot;a partir de&quot;</strong> sem
              transparência → <strong>Aura publica catálogo de kits com
              faixa de preço pública</strong>
            </li>
            <li>
              <strong>Falam &quot;25 anos de garantia&quot;</strong> sem
              detalhar → <strong>Aura entrega timeline antes/durante/depois
              com 4 promessas em cada etapa</strong>
            </li>
            <li>
              <strong>Mostram fotos genéricas de painéis solares</strong> →
              <strong> Aura mostra equipe trabalhando em Palmas + mapa
              de instalações locais</strong>
            </li>
          </ul>

          <h3 style={{ fontSize: 17, marginTop: 24 }}>O que eles NÃO fazem (e a Aura ocupa)</h3>

          <ul>
            <li>
              <strong>Nenhum tem calculadora pública</strong> — todos
              forçam orçamento. Aura tem.
            </li>
            <li>
              <strong>Nenhum comunica ativamente o Programa Palmas Solar</strong> (desconto IPTU até 60% até 2030). Aura pode virar &quot;a empresa que cuida da documentação no Resolve Palmas pra você&quot;.
            </li>
            <li>
              <strong>Nenhum educa o cliente final</strong> — todos vendem
              produto direto. Aura usa Lei 14.300, Fio B, payback como
              ganchos educativos.
            </li>
            <li>
              <strong>Nenhum tem nicho vertical claro</strong> — todos
              atendem &quot;geral&quot;. Aura pode dominar rural/agronegócio
              primeiro (TO forte, concorrência fraca).
            </li>
            <li>
              <strong>Nenhum oferece acompanhamento pós-venda formal</strong>{" "}
              — Aura pode lançar Plano de Acompanhamento Anual (R$ 200-400/cliente).
            </li>
            <li>
              <strong>Nenhum passa de 2.000 followers Instagram</strong> —
              líder ARASOL tem 1.540. Mercado digital vazio.
            </li>
          </ul>

          <div className="plano-callout plano-callout-blue">
            <strong>A janela:</strong> com cadência consistente (3 posts/sem
            + 1 reel/sem + stories diários) + tráfego pago, a Aura passa
            a ARASOL em 6 meses e vira #1 em presença digital solar de
            Palmas em 12 meses.
          </div>
        </section>

        {/* ═══════════════════════ 9. PROGRAMA PALMAS SOLAR (Pág. 11) ═══════════════════════ */}
        <section className="plano-section" id="secao-palmas-solar">
          <div className="plano-page-marker">Página 11 · Seção 9</div>
          <h2 style={{ fontSize: 28 }}>Programa Palmas Solar — IPTU verde + benefícios fiscais</h2>

          <p>
            Esse é um dos diferenciais mais fortes da Aura — e que nenhum
            concorrente em Palmas comunica ativamente. A Prefeitura de
            Palmas dá <strong>desconto real em 3 tributos municipais</strong>{" "}
            pra quem instala energia solar. A Aura vira &quot;a empresa
            que cuida da documentação no Resolve Palmas pra você&quot; —
            zero custo extra, valor enorme percebido.
          </p>

          <h3 style={{ fontSize: 18, marginTop: 24 }}>O que é o programa</h3>
          <ul>
            <li><strong>Nome oficial:</strong> Programa Palmas Solar</li>
            <li><strong>Lei criadora:</strong> Lei Complementar Municipal nº 327, de 24/11/2015</li>
            <li><strong>Decreto regulamentador:</strong> Decreto Municipal nº 1.506, de 18/12/2017</li>
            <li><strong>Atualização recente:</strong> Decreto nº 2.378, de 07/06/2023 (atualizou prazo de protocolo + fluxo Resolve → Habitação)</li>
            <li><strong>Validade:</strong> programa permanente · janela de adesão até 2035</li>
            <li><strong>Beneficiários ativos em 2026:</strong> 1.037 contribuintes (fonte: Prefeitura de Palmas, 10/02/2026)</li>
          </ul>

          <h3 style={{ fontSize: 18, marginTop: 32 }}>Os 3 tributos com desconto</h3>
          <table>
            <thead>
              <tr>
                <th>Tributo</th>
                <th>Desconto efetivo (adesão 2026)</th>
                <th>Prazo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>IPTU</strong></td>
                <td>até 40% por 5 anos consecutivos</td>
                <td>5 anos (2027 a 2031)</td>
              </tr>
              <tr>
                <td><strong>ITBI</strong></td>
                <td>até 40%</td>
                <td>aplicado uma vez, na 1ª transferência após concessão</td>
              </tr>
              <tr>
                <td><strong>ISSQN</strong></td>
                <td>80% fixo</td>
                <td>até 10 anos (instaladoras, fabricantes, projetistas)</td>
              </tr>
            </tbody>
          </table>

          <p style={{ fontSize: 13, color: "var(--plano-text-muted)", marginTop: 4 }}>
            <em>Aplica-se a residencial, comercial, industrial — edificações
            novas e preexistentes que se adequem à geração fotovoltaica
            conforme resoluções da ANEEL (LC 327, art. 17).</em>
          </p>

          <div className="plano-callout">
            <strong>Atenção legal importante:</strong> a lei prevê teto
            histórico de até 80% de desconto, mas isso vale só pra adesões
            antigas (2016-2020). Pra adesões em 2026, o benefício efetivo
            é <strong>40% no IPTU por 5 anos</strong> — usar &quot;80%&quot;
            hoje configura propaganda enganosa. A Aura comunica o número
            correto e ainda assim ganha porque o concorrente não comunica
            nada.
          </div>

          <h3 style={{ fontSize: 18, marginTop: 32 }}>Cronograma de janelas (decrescente por ano de adesão)</h3>
          <table>
            <thead>
              <tr>
                <th>Ano de adesão</th>
                <th>Vigência (5 anos)</th>
                <th>Benefício IPTU/ITBI</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>2016-2020</td><td>2017 a 2025</td><td>80% (encerrado)</td></tr>
              <tr><td>2021-2025</td><td>2022 a 2030</td><td>60%</td></tr>
              <tr style={{ background: "rgba(245, 188, 44, 0.15)" }}><td><strong>2026-2030 ← janela atual</strong></td><td><strong>2027 a 2035</strong></td><td><strong>40%</strong></td></tr>
              <tr><td>2031-2035</td><td>2032 a 2040</td><td>20% (último ciclo)</td></tr>
            </tbody>
          </table>

          <div className="plano-callout plano-callout-blue">
            <strong>Argumento de venda pronto:</strong> &quot;Quem aderir
            em 2026 trava 40% de desconto no IPTU por 5 anos consecutivos.
            Em 2031, esse benefício cai pra 20%. Quem espera, perde.&quot;
          </div>

          <h3 style={{ fontSize: 18, marginTop: 32 }}>Quem pode participar</h3>
          <ul>
            <li>Proprietário do imóvel (PF ou PJ contribuinte do município)</li>
            <li>Sistema fotovoltaico homologado na Energisa-TO</li>
            <li>ART do profissional responsável pelo projeto/instalação (CREA-TO)</li>
            <li>Imóvel em dia com a Prefeitura (sem débitos municipais)</li>
            <li>Comprovação anual de continuidade (fatura + relatório de injeção na rede)</li>
          </ul>

          <h3 style={{ fontSize: 18, marginTop: 32 }}>Como solicitar (passo a passo)</h3>
          <ol>
            <li><strong>Onde protocolar:</strong> Resolve Palmas (presencial) ou Portal do Cidadão (online)</li>
            <li><strong>Análise:</strong> Secretaria Municipal da Habitação avalia e emite o &quot;Selo Solar&quot; com percentual e tempo de vigência</li>
            <li><strong>Documentos exigidos:</strong> formulário oficial + RG/CPF (ou CNPJ) + Certidão Negativa de Débitos + fatura recente + termo de habite-se + comprovante de homologação Energisa + notas fiscais dos equipamentos (emitidas em Palmas)</li>
            <li><strong>Prazo limite anual:</strong> protocolo até 30 de outubro de cada ano, pra vigência no exercício fiscal seguinte</li>
            <li><strong>Pendências:</strong> precisam ser sanadas até 30 de novembro, sob pena de indeferimento</li>
          </ol>

          <h3 style={{ fontSize: 18, marginTop: 32 }}>Por que isso vira diferencial estratégico Aura</h3>
          <ol>
            <li>
              <strong>Nenhum concorrente em Palmas comunica isso ativamente.</strong>{" "}
              ARASOL menciona, mas não destaca. Os outros ignoram. A Aura
              pode dominar essa narrativa.
            </li>
            <li>
              <strong>Vira serviço sem custo extra.</strong> A Aura entrega
              a instalação + cuida da documentação no Resolve Palmas. Cliente
              paga zero a mais e ainda economiza tributo por anos.
            </li>
            <li>
              <strong>Posiciona como &quot;consultora full-service&quot;</strong>
              {" "}— não vende só painel, ajuda a maximizar o ROI total
              (instalação + benefício fiscal).
            </li>
            <li>
              <strong>Gera urgência regulatória real.</strong> Em 2031 o
              benefício cai pra 20%. Adesão em 2026 trava 40% por 5 anos.
            </li>
          </ol>

          <h3 style={{ fontSize: 18, marginTop: 32 }}>Fontes oficiais consultadas</h3>
          <ul style={{ fontSize: 13, color: "var(--plano-text-muted)" }}>
            <li>Lei Complementar Municipal nº 327/2015 (íntegra · Câmara Municipal de Palmas)</li>
            <li>Decreto Municipal nº 1.506/2017 (regulamentação vigente)</li>
            <li>Decreto Municipal nº 2.378/2023 (atualização do fluxo)</li>
            <li>Notícia oficial Prefeitura de Palmas — 10/02/2026 (1.037 beneficiários ativos)</li>
            <li>GPublicas — Programa Palmas Solar reconhecido como boa prática</li>
            <li>ICLEI Renewables Roadmap — estudo de caso internacional</li>
          </ul>
        </section>

        {/* ═══════════════════════ 10. CATÁLOGO DE KITS + PROJEÇÃO (Pág. 12) ═══════════════════════ */}
        <section className="plano-section" id="secao-catalogo">
          <div className="plano-page-marker">Página 12 · Seção 10</div>
          <h2 style={{ fontSize: 28 }}>Catálogo de kits + projeção de receita</h2>

          <p>
            A Aura entra no mercado com 4 kits cravados, cobrindo desde
            residencial pequeno até comércio/indústria pequena. Faixa de
            preço pública (diferencial vs concorrentes que escondem) e
            calculadora ao vivo no site pra cliente conferir antes de
            pedir orçamento.
          </p>

          <h3 style={{ fontSize: 18, marginTop: 24 }}>Os 4 kits Aura</h3>
          <table>
            <thead>
              <tr>
                <th>Kit</th>
                <th>Pra quem</th>
                <th>Geração média</th>
                <th>Faixa de investimento</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>3 kWp</strong></td>
                <td>Residencial pequeno (conta R$ 250-400/mês)</td>
                <td>~390 kWh/mês</td>
                <td>R$ 13.000 — 15.000</td>
              </tr>
              <tr>
                <td><strong>5 kWp ⭐</strong></td>
                <td>Residencial médio (conta R$ 500-700/mês) — campeão de venda</td>
                <td>~650 kWh/mês</td>
                <td>R$ 17.000 — 22.000</td>
              </tr>
              <tr>
                <td><strong>8 kWp</strong></td>
                <td>Residencial alto / pequeno comércio (conta R$ 800-1.200/mês)</td>
                <td>~1.040 kWh/mês</td>
                <td>R$ 28.000 — 35.000</td>
              </tr>
              <tr>
                <td><strong>12+ kWp</strong></td>
                <td>Comércio mid / indústria pequena / rural (conta R$ 1.500+/mês)</td>
                <td>~1.560+ kWh/mês</td>
                <td>R$ 38.000 — 55.000+</td>
              </tr>
            </tbody>
          </table>

          <p style={{ fontSize: 13, color: "var(--plano-text-muted)", marginTop: 8 }}>
            <em>Faixas baseadas em tarifa Energisa-TO + HSP Palmas 5,9
            kWh/m²/dia. Painéis Tier 1 (Trina/Canadian/Jinko) +
            inversores premium. ART e garantia 25 anos painel · 10 anos
            inversor inclusas.</em>
          </p>

          <h3 style={{ fontSize: 18, marginTop: 32 }}>O que está incluso em cada kit</h3>
          <ul>
            <li>Visita técnica gratuita no local</li>
            <li>Projeto técnico completo + ART pelo CREA-TO</li>
            <li>Painéis solares Tier 1 (Trina, Canadian ou Jinko)</li>
            <li>Inversor premium (Growatt, Sungrow ou Huawei)</li>
            <li>Estrutura de fixação (alumínio anodizado, certificada)</li>
            <li>String box CC + DPS + disjuntores</li>
            <li>Cabeamento solar + conexão até quadro</li>
            <li>Mão de obra completa de instalação</li>
            <li>Homologação na Energisa-TO</li>
            <li>Configuração do app de monitoramento no celular do cliente</li>
            <li>Suporte técnico pelos 25 anos seguintes</li>
          </ul>

          <h3 style={{ fontSize: 18, marginTop: 32 }}>Projeção de receita — 3 cenários (12 meses)</h3>

          <p>
            Considerando ticket médio de R$ 22.000 (sistema 5 kWp, mais
            vendido) e mix natural entre os 4 kits:
          </p>

          <table>
            <thead>
              <tr>
                <th>Cenário</th>
                <th>Instalações/mês</th>
                <th>Faturamento mensal</th>
                <th>Faturamento ano</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Modesto</strong></td>
                <td>2 instalações</td>
                <td>~R$ 44.000</td>
                <td>~R$ 528.000</td>
              </tr>
              <tr>
                <td><strong>Consistente</strong></td>
                <td>4 instalações</td>
                <td>~R$ 88.000</td>
                <td>~R$ 1.056.000</td>
              </tr>
              <tr>
                <td><strong>Escalado</strong></td>
                <td>6 instalações + 1 B2B/trim.</td>
                <td>~R$ 132.000 + extras B2B</td>
                <td>~R$ 1.580.000 — 2.000.000</td>
              </tr>
            </tbody>
          </table>

          <div className="plano-callout plano-callout-green">
            <strong>Nota sobre B2B:</strong> 1 venda B2B (comércio mid ou
            indústria pequena) tem ticket entre R$ 80.000 e R$ 800.000.
            Cada fechamento B2B substitui 4 a 36 vendas residenciais em
            faturamento. Por isso o pivot pra B2B é estratégico — uma
            venda fechada por trimestre transforma o ano da Aura.
          </div>

          <div className="plano-callout">
            <strong>Importante:</strong> a projeção considera mix de
            captação digital (Insta + Google + indicação) rodando estável
            a partir do mês 3-4. Mês 1-2 são de aquecimento da operação,
            com receita ainda baixa enquanto pipeline se forma.
          </div>
        </section>

        {/* ═══════════════════════ 11. CRONOGRAMA 90 DIAS (Pág. 13) ═══════════════════════ */}
        <section className="plano-section" id="secao-cronograma">
          <div className="plano-page-marker">Página 13 · Seção 11</div>
          <h2 style={{ fontSize: 28 }}>Cronograma 90 dias — feito pra rotina do Renato</h2>

          <p>
            Renato é engenheiro responsável + sócio Brasfrio + atende
            cliente todo dia. Não tem tempo de pensar em conteúdo de
            marketing diariamente. Por isso o cronograma foi desenhado
            no modelo <strong>&quot;Renato grava 1 dia, Impulso roda o
            mês inteiro&quot;</strong>.
          </p>

          <h3 style={{ fontSize: 18, marginTop: 24 }}>Quanto tempo você investe por mês</h3>

          <table>
            <thead>
              <tr><th>Atividade</th><th>Quando</th><th>Tempo</th></tr>
            </thead>
            <tbody>
              <tr><td>Bloco mensal de gravação (4 reels de uma vez)</td><td>1 dia por mês</td><td>4-6h</td></tr>
              <tr><td>Aprovação da pauta mensal</td><td>1 reunião por mês</td><td>30-60 min</td></tr>
              <tr><td>Mandar foto de instalação concluída</td><td>Quando concluir obra</td><td>2 min cada</td></tr>
              <tr><td>Atender lead que chegou pelo WhatsApp</td><td>No fluxo normal</td><td>já faz hoje</td></tr>
              <tr><td><strong>Total mensal</strong></td><td colSpan={2}><strong>5-8 horas por mês</strong></td></tr>
            </tbody>
          </table>

          <div className="plano-callout plano-callout-blue">
            <strong>Comparação:</strong> a maioria dos cronogramas pede 1-2h
            por dia do dono do negócio. Aqui são <strong>5-8 horas no mês
            inteiro</strong>. O resto a Impulso assume.
          </div>

          <h3 style={{ fontSize: 18, marginTop: 32 }}>Quem faz o quê</h3>

          <table>
            <thead>
              <tr><th>Tarefa</th><th>Quem executa</th></tr>
            </thead>
            <tbody>
              <tr><td>Definir tema dos 4 reels do mês</td><td>Impulso (você só aprova)</td></tr>
              <tr><td>Roteiro detalhado dos reels</td><td>Impulso (entrega pronto pra ler)</td></tr>
              <tr><td>Gravação dos reels</td><td>Você (1 dia, no estúdio ou na obra)</td></tr>
              <tr><td>Edição dos reels</td><td>Impulso</td></tr>
              <tr><td>Posts feed (cópia + arte)</td><td>Impulso</td></tr>
              <tr><td>Stories pré-prontos</td><td>Impulso (pacote semanal pra você só repostar)</td></tr>
              <tr><td>Agendamento e publicação</td><td>Impulso</td></tr>
              <tr><td>Tráfego pago</td><td>Impulso</td></tr>
              <tr><td>Atender lead no WhatsApp</td><td>Você</td></tr>
            </tbody>
          </table>

          <h3 style={{ fontSize: 18, marginTop: 32 }}>Cadência mensal de publicação</h3>

          <table>
            <thead>
              <tr><th>Tipo</th><th>Frequência</th><th>Total por mês</th></tr>
            </thead>
            <tbody>
              <tr><td>Posts no feed (carrossel ou imagem)</td><td>2 por semana</td><td>~8 posts</td></tr>
              <tr><td>Reels (do bloco mensal)</td><td>1 por semana</td><td>4 reels</td></tr>
              <tr><td>Stories</td><td>3-5 por semana</td><td>12-20 stories</td></tr>
              <tr><td>Carrossel B2B (comércio, indústria, rural)</td><td>1 a cada 2 semanas</td><td>2 carrosséis</td></tr>
            </tbody>
          </table>

          <h2 style={{ fontSize: 22, marginTop: 40, paddingTop: 24, borderTop: "2px solid var(--plano-border)" }}>
            Visão de 90 dias — mês a mês
          </h2>

          <p>
            O setup entrega o ponto de partida. A operação real acontece
            ao longo dos primeiros 3 meses, com fases bem definidas:
          </p>

          <div className="plano-callout" style={{ borderLeftColor: "var(--plano-yellow)", background: "#fff8e8" }}>
            <h3 style={{ fontSize: 18, marginTop: 0 }}>Mês 1 · Lançamento de marca</h3>
            <p style={{ fontSize: 13, color: "var(--plano-text-muted)", marginTop: 4 }}>
              <em>Foco: a Aura entra no ar com identidade clara, primeiros leads chegando, base digital estruturada.</em>
            </p>

            <h4 style={{ fontSize: 14, marginTop: 16 }}>Semana 1 — Setup técnico</h4>
            <ul>
              <li>Insta @auraenergy + WhatsApp Business + Google Meu Negócio criados</li>
              <li>Pixel Meta + GA4 + Google Search Console instalados nas LPs</li>
              <li>Sitemap submetido pro Google indexar</li>
              <li>Calibragem da LP com fotos e dados reais que você passou</li>
              <li>6 artes finalizadas e prontas pra publicar</li>
            </ul>

            <h4 style={{ fontSize: 14, marginTop: 16 }}>Semana 2 — 4 marcos do lançamento de marca</h4>
            <table>
              <thead>
                <tr><th>Marco</th><th>O que sai</th></tr>
              </thead>
              <tbody>
                <tr><td><strong>Marco 1 · Anúncio oficial</strong></td><td>Arte 1 (Nasce a Aura) + 5 stories de teaser</td></tr>
                <tr><td><strong>Marco 2 · Renato apresenta</strong></td><td>Arte 2 + 1º reel do bloco gravado</td></tr>
                <tr><td><strong>Marco 3 · Educativo + calculadora</strong></td><td>Artes 3 e 4 (Lei 14.300 + Calculadora)</td></tr>
                <tr><td><strong>Marco 4 · Caso real + urgência</strong></td><td>Artes 5 e 6 (Antes/depois + Janela Fio B)</td></tr>
              </tbody>
            </table>

            <h4 style={{ fontSize: 14, marginTop: 16 }}>Semana 3-4 — Cadência ongoing começa</h4>
            <ul>
              <li>2 posts/semana entram no fluxo normal</li>
              <li>Bloco mensal de gravação (Renato grava 4 reels em 1 dia)</li>
              <li>Pacote semanal de stories (Impulso entrega pra postar)</li>
              <li>1ª reunião mensal de revisão (45 min)</li>
            </ul>

            <p style={{ fontSize: 13, marginTop: 12 }}>
              <strong>Resultado esperado mês 1:</strong> 200-300 followers ·
              10-15 leads qualificados · 1-2 instalações fechadas ·
              R$ 22-44k de faturamento.
            </p>
          </div>

          <div className="plano-callout" style={{ borderLeftColor: "var(--plano-orange)" }}>
            <h3 style={{ fontSize: 18, marginTop: 0 }}>Mês 2 · Tração</h3>
            <p style={{ fontSize: 13, color: "var(--plano-text-muted)", marginTop: 4 }}>
              <em>Foco: cadência rodando estável, primeiras vendas via funil digital, pipeline B2B começando.</em>
            </p>

            <h4 style={{ fontSize: 14, marginTop: 16 }}>O que entra no mês 2</h4>
            <ul>
              <li><strong>Tráfego pago Meta Ads</strong> ligado pra LP <code>/casa</code> com geofence Palmas (volume residencial)</li>
              <li><strong>Google Ads</strong> nas palavras-chave principais (energia solar Palmas, Programa Palmas Solar)</li>
              <li><strong>Pacote mensal de conteúdo</strong> rodando: 8 posts + 4 reels + 12-20 stories</li>
              <li><strong>Carrosséis B2B</strong> entram a cada 2 semanas (1 comércio + 1 indústria/rural)</li>
              <li><strong>1ª reativação ativa</strong> de leads frios (quem entrou no diagnóstico mas não fechou)</li>
              <li><strong>Coleta de depoimentos</strong> dos primeiros 2-3 clientes Aura (vídeo de 30-60s no celular)</li>
            </ul>

            <p style={{ fontSize: 13, marginTop: 12 }}>
              <strong>Resultado esperado mês 2:</strong> 500-700 followers ·
              15-25 leads qualificados · 2-4 instalações fechadas ·
              R$ 44-88k faturamento · 2-4 conversas B2B em andamento.
            </p>
          </div>

          <div className="plano-callout" style={{ borderLeftColor: "var(--plano-green)", background: "#ecfdf5" }}>
            <h3 style={{ fontSize: 18, marginTop: 0 }}>Mês 3 · Escala e consolidação</h3>
            <p style={{ fontSize: 13, color: "var(--plano-text-muted)", marginTop: 4 }}>
              <em>Foco: marca consolidada, presença digital virando referência local, B2B avançando pra primeira venda.</em>
            </p>

            <h4 style={{ fontSize: 14, marginTop: 16 }}>O que entra no mês 3</h4>
            <ul>
              <li><strong>SEO local</strong> começa a render frutos — primeiras posições no Google pra long tail (artigos do blog ranqueando)</li>
              <li><strong>Google Meu Negócio</strong> com primeiras avaliações de cliente (pedidas ativamente)</li>
              <li><strong>Tráfego pago refinado</strong> com base nos dados dos meses 1-2 (criativos vencedores escalados, perdedores cortados)</li>
              <li><strong>Domínio próprio</strong> <code>auraenergy.com.br</code> apontando pra Vercel</li>
              <li><strong>Pipeline B2B</strong> com 2-3 reuniões em estágio avançado (proposta enviada, aguardando decisão)</li>
              <li><strong>Depoimentos em vídeo</strong> dos primeiros clientes Aura virando conteúdo orgânico de prova social</li>
              <li><strong>Discussão de RadarPRO</strong> entra em pauta (parceria pra captação ativa B2B)</li>
            </ul>

            <p style={{ fontSize: 13, marginTop: 12 }}>
              <strong>Resultado esperado mês 3:</strong> 1.000+ followers (passa Brasfrio antiga, mira ARASOL) ·
              25-40 leads qualificados/mês · 3-5 instalações fechadas/mês ·
              R$ 66-110k faturamento · 4-8 conversas B2B no pipeline.
            </p>
          </div>

          <div className="plano-callout plano-callout-blue">
            <strong>Realismo do B2B:</strong> primeira venda B2B esperada
            entre <strong>mês 4 e mês 6</strong>, não no mês 3. O ciclo
            é 60-120 dias e o pipeline só começa a esquentar de verdade
            no mês 2. Mês 3 é quando entram as propostas; meses 4-6 são
            quando vêm as primeiras assinaturas.
          </div>

          <div className="plano-callout plano-callout-green">
            <strong>Regra de ouro:</strong> nenhuma postagem cobra ação
            do Renato no momento. Tudo vai pré-pronto com horário sugerido.
            Você só posta quando der ou autoriza a Impulso a postar
            direto. <strong>O Renato não vira social media — segue sendo
            engenheiro.</strong>
          </div>
        </section>

        {/* ═══════════════════════ 12. AS 6 ARTES INSTAGRAM (Pág. 14) ═══════════════════════ */}
        <section className="plano-section" id="secao-artes">
          <div className="plano-page-marker">Página 14 · Seção 12</div>
          <h2 style={{ fontSize: 28 }}>As 6 artes Instagram (entregues na Frente 1)</h2>

          <p>
            Cada arte vem pronta: copy + design profissional + dia recomendado
            de postagem. Você só publica.
          </p>

          <div className="plano-callout">
            <h3 style={{ fontSize: 16, marginTop: 0 }}>Arte 1 — Nasce a Aura (D1)</h3>
            <p style={{ margin: "8px 0 0" }}>
              Anúncio oficial. Apresenta a marca, o que faz, pra quem é.
              Visual: logo Aura + texto forte + CTA pro link na bio.
            </p>
          </div>

          <div className="plano-callout">
            <h3 style={{ fontSize: 16, marginTop: 0 }}>Arte 2 — Renato apresenta (D2)</h3>
            <p style={{ margin: "8px 0 0" }}>
              Quem é o engenheiro responsável. Foto profissional + texto
              curto do background técnico (anos Brasfrio, CREA-TO,
              projetos entregues). Humaniza a marca.
            </p>
          </div>

          <div className="plano-callout">
            <h3 style={{ fontSize: 16, marginTop: 0 }}>Arte 3 — Lei 14.300 explicada (D3)</h3>
            <p style={{ margin: "8px 0 0" }}>
              Carrossel educativo sobre o Fio B (60% em 2026, sobe pra
              75% em 2027). Posiciona a Aura como autoridade técnica e
              gera urgência regulatória real.
            </p>
          </div>

          <div className="plano-callout">
            <h3 style={{ fontSize: 16, marginTop: 0 }}>Arte 4 — Calculadora ao vivo (D5)</h3>
            <p style={{ margin: "8px 0 0" }}>
              Print da calculadora do site + headline forte (&quot;Veja
              sua economia antes de falar com a gente&quot;). Leva tráfego
              pra LP.
            </p>
          </div>

          <div className="plano-callout">
            <h3 style={{ fontSize: 16, marginTop: 0 }}>Arte 5 — Antes/depois conta luz (D7)</h3>
            <p style={{ margin: "8px 0 0" }}>
              Case real com nome + foto + valor da conta antes vs. depois
              (com autorização LGPD do cliente). Prova social que mais
              converte em solar.
            </p>
          </div>

          <div className="plano-callout">
            <h3 style={{ fontSize: 16, marginTop: 0 }}>Arte 6 — Janela do Fio B + last call (D14)</h3>
            <p style={{ margin: "8px 0 0" }}>
              Encerramento da semana com urgência regulatória factual
              (cronograma 2026 → 2029) + CTA forte pra agendar visita
              técnica grátis.
            </p>
          </div>

          <p style={{ marginTop: 16 }}>
            <strong>Entrega:</strong> as 6 artes finalizadas chegam em até
            5 dias após o pagamento da Frente 1. Você posta no ritmo da
            Aura, seguindo o cronograma sugerido ou ajustando se preferir.
          </p>
        </section>

        {/* ═══════════════════════ 13. CAMPANHAS B2B (Pág. 15) ═══════════════════════ */}
        <section className="plano-section" id="secao-b2b">
          <div className="plano-page-marker">Página 15 · Seção 13</div>
          <h2 style={{ fontSize: 28 }}>Campanhas pra atrair B2B</h2>

          <p>
            Cliente B2B (comércio, indústria, rural) não compra por
            impulso de Instagram. Compra por <strong>autoridade técnica
            + cálculo financeiro + relacionamento</strong>. As campanhas
            B2B foram desenhadas pra isso.
          </p>

          <h3 style={{ fontSize: 17, marginTop: 24 }}>Comércio mid (supermercado, padaria, posto, clínica)</h3>

          <table>
            <thead>
              <tr><th>Item</th><th>Detalhe</th></tr>
            </thead>
            <tbody>
              <tr><td>Ticket-alvo</td><td>R$ 50-150k</td></tr>
              <tr><td>Dor central</td><td>&quot;Geladeira/AC/refrigeração 24h estoura conta&quot;</td></tr>
              <tr><td>Tipo de criativo</td><td>Carrossel comparando conta antes/depois de comércio real</td></tr>
              <tr><td>Mídia paga</td><td>Meta Ads geofence Palmas + Google Ads &quot;solar comercial Palmas&quot;</td></tr>
              <tr><td>LP destino</td><td><code>/comercio</code></td></tr>
              <tr><td>Ciclo de venda</td><td>30-60 dias</td></tr>
            </tbody>
          </table>

          <h3 style={{ fontSize: 17, marginTop: 24 }}>Indústria pequena/média</h3>

          <table>
            <thead>
              <tr><th>Item</th><th>Detalhe</th></tr>
            </thead>
            <tbody>
              <tr><td>Ticket-alvo</td><td>R$ 150-800k</td></tr>
              <tr><td>Dor central</td><td>&quot;Demanda contratada + consumo = custo invisível&quot;</td></tr>
              <tr><td>Tipo de criativo</td><td>Reel Renato falando sobre demanda contratada + planilha de payback na tela</td></tr>
              <tr><td>Mídia paga</td><td>Mídia paga B2B segmentada por cargo + Google Ads &quot;solar industrial Tocantins&quot;</td></tr>
              <tr><td>LP destino</td><td><code>/industria</code></td></tr>
              <tr><td>Ciclo de venda</td><td>60-120 dias (3-6 reuniões)</td></tr>
            </tbody>
          </table>

          <h3 style={{ fontSize: 17, marginTop: 24 }}>Rural / agronegócio</h3>

          <table>
            <thead>
              <tr><th>Item</th><th>Detalhe</th></tr>
            </thead>
            <tbody>
              <tr><td>Ticket-alvo</td><td>R$ 80-300k</td></tr>
              <tr><td>Dor central</td><td>&quot;Pivô consome 60% da receita do mês de pico&quot;</td></tr>
              <tr><td>Tipo de criativo</td><td>Reel mostrando instalação rural + Pronaf + Moderagro</td></tr>
              <tr><td>Mídia paga</td><td>Meta Ads segmentado por interesse &quot;agronegócio TO&quot; + indicações de cooperativas</td></tr>
              <tr><td>LP destino</td><td><code>/fazenda</code></td></tr>
              <tr><td>Ciclo de venda</td><td>30-90 dias (depende de safra)</td></tr>
            </tbody>
          </table>

          <h3 style={{ fontSize: 17, marginTop: 24 }}>Investimento mensal sugerido (B2B + B2C combinados)</h3>

          <table>
            <thead>
              <tr><th>Canal</th><th>Investimento</th><th>Função</th></tr>
            </thead>
            <tbody>
              <tr><td>Meta Ads B2C residencial</td><td>R$ 800-1.500</td><td>Volume residencial Palmas</td></tr>
              <tr><td>Mídia paga B2B segmentada</td><td>R$ 600-1.200</td><td>Decisor industrial e rural</td></tr>
              <tr><td>Google Ads palavras-chave</td><td>R$ 500-1.000</td><td>Captura busca ativa</td></tr>
              <tr><td><strong>Total</strong></td><td><strong>R$ 1.900-3.700/mês</strong></td><td>Faixa recomendada</td></tr>
            </tbody>
          </table>

          <div className="plano-callout plano-callout-blue">
            <strong>Ordem natural de ativação:</strong> mês 1-2 ataca B2C
            (ciclo curto, gera caixa) + começa pipeline B2B com mídia
            paga + indicações. Mês 3+ escala B2B conforme reuniões
            avançam. Primeiro fechamento B2B esperado mês 4-6 (ciclo é longo).
          </div>
        </section>

        {/* ═══════════════════════ 14. CAPTAÇÃO GOOGLE (Pág. 16) ═══════════════════════ */}
        <section className="plano-section" id="secao-google">
          <div className="plano-page-marker">Página 16 · Seção 14</div>
          <h2 style={{ fontSize: 28 }}>Captação Google — SEO local + blog + Google Ads</h2>

          <p>
            Toda semana, dezenas de pessoas em Palmas e região digitam
            no Google buscando energia solar. Hoje, esses leads vão pros
            concorrentes. A Aura vai ocupar essa busca via 2 frentes
            paralelas:
          </p>

          <h3 style={{ fontSize: 17, marginTop: 24 }}>Frente A · SEO local — orgânico (gratuito, médio prazo)</h3>

          <p>
            Aparecer no Google sem pagar quando alguém busca palavras-chave
            estratégicas. Demanda 3-6 meses pra ranquear bem, mas vira
            ativo permanente.
          </p>

          <p><strong>Palavras-chave alvo:</strong></p>
          <ul>
            <li>energia solar Palmas</li>
            <li>energia solar Palmas TO</li>
            <li>solar residencial Palmas</li>
            <li>solar comercial Palmas</li>
            <li>Programa Palmas Solar (desconto IPTU)</li>
            <li>solar Paraíso do Tocantins</li>
            <li>painel solar Palmas preço</li>
            <li>instalador solar Palmas</li>
            <li>energia solar fazenda Tocantins</li>
            <li>Pronaf solar Tocantins</li>
          </ul>

          <p><strong>O que entra na execução SEO:</strong></p>
          <ol>
            <li>
              <strong>Submissão no Google Search Console</strong> — todas
              as 5 rotas da Aura (HUB raiz + casa + comércio + indústria +
              fazenda) registradas + sitemap.xml automático submetido pro
              Google indexar imediatamente, em vez de esperar semanas
              pra ele descobrir sozinho
            </li>
            <li>
              <strong>Google Meu Negócio</strong> — ficha completa da Aura
              (endereço, horário, fotos, categoria correta), com pedido
              ativo de avaliações dos primeiros clientes
            </li>
            <li>
              <strong>SEO técnico nas LPs</strong> — meta tags otimizadas
              por nicho, schema.org de empresa local, sitemap.xml,
              robots.txt liberando indexação
            </li>
            <li>
              <strong>Blog educativo já no site</strong> — 5 artigos
              completos com dados reais e fontes oficiais (ABSOLAR, ANEEL,
              Energisa, Canal Solar, Solfácil) que viram porta de entrada
              do Google. Cada artigo ranqueia pra dezenas de buscas long
              tail e termina com CTA pra calculadora ou WhatsApp.
            </li>
            <li>
              <strong>Backlinks locais</strong> — parcerias com Sicredi,
              cooperativas rurais, associações comerciais que mencionam
              a Aura no site delas
            </li>
          </ol>

          <h4 style={{ fontSize: 15, marginTop: 24 }}>Os 5 artigos do blog (já publicados)</h4>
          <ol>
            <li><strong>Quanto custa instalar energia solar em Palmas-TO em 2026?</strong> — captura quem busca preço (R$ 12-38k por faixa de conta)</li>
            <li><strong>Lei 14.300 explicada: ainda vale a pena instalar solar em 2026?</strong> — captura dúvida regulatória (Fio B 60%, economia 74-87%)</li>
            <li><strong>Em quanto tempo o sistema solar se paga? Cálculo real pra Palmas</strong> — captura dúvida de payback (4-6 anos com R$ 800/mês)</li>
            <li><strong>Painéis de 550W ou 600W? Qual escolher pra residência</strong> — captura quem já tá pesquisando equipamento</li>
            <li><strong>Solar à vista ou financiado: qual sai mais barato em 2026?</strong> — captura quem tá decidindo forma de pagamento (Solfácil 0,79% a.m.)</li>
          </ol>

          <div className="plano-callout">
            <strong>Por que blog importa pra solar:</strong> antes de
            comprar, o cliente pesquisa muito. &quot;Quanto custa solar
            Palmas&quot;, &quot;Lei 14.300 vale a pena&quot;, &quot;qual
            painel escolher&quot;. Cada um desses artigos é um caçador de
            lead permanente — escreveu 1 vez, ranqueia por anos. E quem
            chega pelo blog já vem mais quente: educou-se com a Aura.
          </div>

          <h3 style={{ fontSize: 17, marginTop: 32 }}>Frente B · Google Ads — pago (resultado imediato)</h3>

          <p>
            Aparecer nos primeiros 3 resultados patrocinados quando alguém
            busca termos comerciais. Resultado em horas, custo controlado.
          </p>

          <table>
            <thead>
              <tr><th>Tipo de campanha</th><th>Foco</th><th>Investimento</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Pesquisa B2C</strong></td>
                <td>&quot;energia solar Palmas&quot; + &quot;painel solar preço&quot;</td>
                <td>R$ 200-400/mês</td>
              </tr>
              <tr>
                <td><strong>Pesquisa B2B</strong></td>
                <td>&quot;solar comercial&quot; + &quot;solar industrial Tocantins&quot;</td>
                <td>R$ 200-400/mês</td>
              </tr>
              <tr>
                <td><strong>Pesquisa rural</strong></td>
                <td>&quot;Pronaf solar&quot; + &quot;solar fazenda Tocantins&quot;</td>
                <td>R$ 100-200/mês</td>
              </tr>
            </tbody>
          </table>

          <div className="plano-callout">
            <strong>Como sabemos que funciona:</strong> Tocantins é o
            <strong> 2º estado mais buscado em &quot;solar empresas&quot; no
            Brasil</strong> (Google Trends Set/24-Set/25). Tem demanda
            ativa todo dia. O que falta é ter quem captar.
          </div>

          <div className="plano-callout plano-callout-green">
            <strong>Métrica esperada Google Ads:</strong> custo por lead
            qualificado entre R$ 30-80 pra B2C residencial e R$ 80-200
            pra B2B. Conversão lead → visita técnica de 30-40%. ROI
            positivo a partir do mês 2.
          </div>
        </section>

        {/* ═══════════════════════ 15. BÔNUS INFO-PRODUTO (Pág. 17) ═══════════════════════ */}
        <section className="plano-section" id="secao-info">
          <div className="plano-page-marker">Página 17 · Seção 15</div>
          <h2 style={{ fontSize: 28 }}>Bônus: direção info-produto B2B</h2>

          <p>
            Material entregue como bônus na Frente 1: <strong>1 página A4</strong>
            {" "}com a direção pro info-produto que você pode lançar em 12-18
            meses, depois da Aura crescer no B2B.
          </p>

          <h3 style={{ fontSize: 17, marginTop: 24 }}>Por que info-produto B2B (não eletricista)</h3>

          <table>
            <thead>
              <tr><th>Critério</th><th>Curso técnico (saturado)</th><th>Info-produto B2B (vazio)</th></tr>
            </thead>
            <tbody>
              <tr><td>Concorrência BR</td><td>Vários cursos pra eletricista</td><td><strong>Zero player relevante</strong></td></tr>
              <tr><td>Público</td><td>Pessoa física querendo profissão</td><td>Decisor B2B (dono ind/com/rural)</td></tr>
              <tr><td>Ticket</td><td>R$ 19-497</td><td>R$ 297-1.997</td></tr>
              <tr><td>Conexão com Aura</td><td>Indireta (aluno vira concorrente)</td><td><strong>Direta — aluno vira lead Aura</strong></td></tr>
              <tr><td>LTV cliente</td><td>Acaba no curso</td><td>Vira projeto R$ 80-500k</td></tr>
            </tbody>
          </table>

          <div className="plano-callout plano-callout-blue">
            <strong>A pergunta-chave:</strong> quem paga R$ 497 pra entender
            solar B2B antes de comprar? <strong>O decisor que vai investir
            R$ 80-500k.</strong> É o lead mais qualificado que existe em
            solar BR.
          </div>

          <h3 style={{ fontSize: 17, marginTop: 24 }}>Estrutura sugerida — 8 aulas (60-80 min totais)</h3>

          <ol>
            <li>Por que sua conta de energia industrial é o maior custo invisível (7 min)</li>
            <li>Payback de usina solar em indústria: a conta que ninguém te mostra direito (9 min)</li>
            <li>Os 3 modelos de aquisição: à vista, financiado, locação (10 min)</li>
            <li>Telhado, solo ou carport: como decidir em 5 minutos (6 min)</li>
            <li>Rural: Pronaf, Moderagro e o detalhe que dobra o retorno (8 min)</li>
            <li>Comércio e supermercado: por que horário de pico é seu inimigo (7 min)</li>
            <li>Lei 14.300 e Fio B: tradução pra dono de empresa (9 min)</li>
            <li>Os 7 sinais de um projeto solar mal feito (10 min)</li>
          </ol>

          <p style={{ marginTop: 16, color: "var(--plano-text-muted)", fontSize: 13 }}>
            <em>Material completo no PDF de 1 página entregue como bônus.
            Decisão de gravar fica pra quando a Aura tiver pipeline B2B
            sustentável e 5+ cases nominados (estimativa: 12-18 meses).</em>
          </p>
        </section>

        {/* ═══════════════════════ 16. SETUP + PRÓXIMOS SERVIÇOS (Pág. 18) ═══════════════════════ */}
        <section className="plano-section" id="secao-pricing">
          <div className="plano-page-marker">Página 18 · Seção 16</div>
          <h2 style={{ fontSize: 28 }}>Setup completo + próximos serviços</h2>

          <div
            className="plano-callout"
            style={{ borderLeftColor: "var(--plano-yellow)", background: "#fff8e8" }}
          >
            <h3 style={{ fontSize: 24, marginTop: 0 }}>
              Setup completo Aura — <span style={{ color: "var(--plano-orange)" }}>R$ 1.497</span>
            </h3>

            <p style={{ marginTop: 12 }}>
              Tudo que a Aura precisa pra entrar no ar com identidade
              profissional, materiais prontos pros primeiros 30 dias e
              direção estratégica do que vem depois.
            </p>

            <h4 style={{ fontSize: 16, marginTop: 20 }}>O que está incluso no R$ 1.497:</h4>
            <ul>
              <li>
                <strong>LP profissional em produção</strong> — HUB raiz +
                4 LPs segmentadas por nicho (<code>/casa</code>, <code>/comercio</code>,
                <code>/industria</code>, <code>/fazenda</code>)
              </li>
              <li>
                <strong>Calculadora de economia ao vivo</strong> com dados reais
                (tarifa Energisa-TO, HSP Palmas, Lei 14.300 Fio B 60%)
              </li>
              <li>
                <strong>5 artigos de blog</strong> publicados (Lei 14.300,
                payback, financiamento, painéis, custo solar Palmas)
                ranqueando no Google pra dezenas de buscas
              </li>
              <li>
                <strong>6 artes Instagram</strong> finalizadas pros primeiros
                30 dias (cópia + design profissional, prontas pra postar)
              </li>
              <li>
                <strong>Pauta sugerida de stories</strong> pra acompanhar
                as 6 artes
              </li>
              <li>
                <strong>Cartão de visita digital + QR Code</strong> apontando
                pra LP mãe (<code>auraenergypalmas.com</code>) — leva o
                cliente direto pro HUB que segmenta por nicho. Você
                imprime ou envia digital, e o cliente em 1 toque acessa
                a calculadora e a LP certa pro perfil dele
              </li>
              <li>
                <strong>Cronograma sustentável</strong> de operação digital
                (este documento — guia de consulta permanente)
              </li>
              <li>
                <strong>Análise da concorrência local em Palmas</strong> —
                6 empresas mapeadas com o que fazem, o que não fazem e
                onde a Aura entra forte
              </li>
              <li>
                <strong>Estratégia de captação Google</strong> — palavras-chave
                alvo, plano de SEO local, sugestões de Google Ads
              </li>
              <li>
                <strong>Cadastro no Google Search Console</strong> — todas
                as 5 páginas da LP submetidas pro Google indexar (sitemap.xml
                automático), pra clientes que buscam &quot;energia solar
                Palmas&quot; encontrarem a Aura desde o primeiro dia
              </li>
              <li>
                <strong>Estratégia de campanhas B2B</strong> — segmentação
                por nicho (comércio, indústria, rural), tipos de criativo
                e investimento sugerido
              </li>
              <li>
                <strong>BÔNUS: Direção info-produto B2B</strong> — 1 página
                A4 com mapa estratégico do curso que pode ser lançado em
                12-18 meses
              </li>
              <li>
                <strong>1 mês de calibragem pós-entrega</strong> — trocamos
                placeholders por fotos e dados reais conforme você nos passa
              </li>
              <li>
                <strong>7 dias de garantia incondicional</strong> pós-pagamento
              </li>
            </ul>

            <p style={{ marginTop: 16, fontSize: 16 }}>
              <strong>Investimento:</strong> R$ 1.497 à vista PIX ou 3×
              cartão (sem juros).
            </p>
          </div>

          <div className="plano-callout plano-callout-blue">
            <h3 style={{ fontSize: 22, marginTop: 0 }}>
              Próximos serviços (a definir conforme a Aura avança)
            </h3>

            <p>
              O R$ 1.497 entrega o setup completo. A partir daí, conforme
              a tração apareça, vamos precisar discutir os próximos passos
              em momentos diferentes. <strong>Lista do que vai entrar em
              pauta nas próximas reuniões</strong>:
            </p>

            <h4 style={{ fontSize: 15, marginTop: 16 }}>Operação digital contínua</h4>
            <ul>
              <li>Gestão mensal de tráfego pago (Meta Ads + Google Ads)</li>
              <li>Produção mensal de posts e stories pro Instagram</li>
              <li>Gravação e edição mensal de reels (bloco único de gravação)</li>
              <li>Manutenção da LP (atualizações conforme novas instalações ou cases)</li>
              <li>Manutenção mensal de SEO local + Google Meu Negócio</li>
              <li>Dashboard semanal de métricas pelo WhatsApp</li>
              <li>Reunião mensal de revisão estratégica</li>
            </ul>

            <h4 style={{ fontSize: 15, marginTop: 16 }}>Setup técnico complementar</h4>
            <ul>
              <li>Compra e configuração do domínio <code>auraenergy.com.br</code></li>
              <li>Criação do Instagram @auraenergy + WhatsApp Business + Google Meu Negócio</li>
              <li>Configuração do Pixel Meta + GA4 + Google Search Console pra rastreamento</li>
              <li>Submissão das LPs pro Google indexar (sitemap.xml)</li>
            </ul>

            <h4 style={{ fontSize: 15, marginTop: 16 }}>Captação ativa B2B</h4>
            <ul>
              <li>Prospecção de leads B2B qualificados (comércio, indústria, rural)</li>
              <li>Playbook de abordagem comercial pra cada nicho</li>
              <li>Treinamento de pitch e qualificação de lead</li>
              <li>Estratégia de relacionamento com decisor industrial</li>
            </ul>

            <h4 style={{ fontSize: 15, marginTop: 16 }}>Materiais avançados</h4>
            <ul>
              <li>Vídeo institucional da Aura (2-3 min) pra LP + apresentações comerciais</li>
              <li>Modelo de proposta comercial padronizada por nicho</li>
              <li>Planilha simulador de payback B2B (Google Sheets)</li>
              <li>Coleta e produção de depoimentos em vídeo dos primeiros clientes Aura</li>
              <li>Programa de indicação (cliente que indica ganha cashback)</li>
              <li>Plano de Acompanhamento Anual pra cliente pós-instalação</li>
            </ul>

            <h4 style={{ fontSize: 15, marginTop: 16 }}>Info-produto FASE 2 (12-18 meses)</h4>
            <ul>
              <li>Roteiro detalhado das 8 aulas do curso B2B</li>
              <li>Setup técnico de produção (equipamento, iluminação, locação)</li>
              <li>Edição completa do curso + materiais complementares (planilhas, checklists)</li>
              <li>Lançamento na Hotmart + estratégia de tráfego segmentado B2B</li>
            </ul>

            <p style={{ marginTop: 20, fontSize: 13, color: "var(--plano-text-muted)" }}>
              <em>Cada item dessa lista vira pauta de uma reunião específica
              quando fizer sentido pra Aura. Sem pressão de cronograma, sem
              amarração contratual longa. A discussão de valor de cada
              serviço acontece no momento certo, com a Aura já rodando.</em>
            </p>
          </div>

          <div
            className="plano-callout"
            style={{
              borderLeftColor: "var(--plano-orange)",
              background: "linear-gradient(135deg, #fff8e8 0%, #fbf8ec 100%)",
              marginTop: 24,
            }}
          >
            <h3 style={{ fontSize: 22, marginTop: 0 }}>
              Parceria estratégica futura · RadarPRO
            </h3>

            <p>
              Quando a Aura estiver com a operação digital rodando e a
              presença consolidada, abrimos a discussão sobre integrar o
              <strong> RadarPRO</strong> — plataforma proprietária da
              Impulso Digital pra captação ativa de leads B2B.
            </p>

            <h4 style={{ fontSize: 15, marginTop: 16 }}>
              O que o RadarPRO pode fazer pela operação Aura:
            </h4>
            <ul>
              <li>
                Identificar e qualificar empresas em Palmas e região com
                perfil real pra solar (comércio mid, indústria pequena/média,
                produtor rural com pivô/granja)
              </li>
              <li>
                Entregar contato direto com o decisor (dono ou diretor),
                não com setor genérico ou recepção
              </li>
              <li>
                Manter pipeline B2B ativo sem você precisar prospectar
                manualmente — você foca no fechamento, não na busca
              </li>
              <li>
                Filtrar por tamanho de operação, setor de atuação e
                potencial real de consumo de energia (a partir de conta
                de luz estimada)
              </li>
              <li>
                Operação 100% nos bastidores da Impulso — a Aura recebe
                o lead pronto pra conversar, com playbook de abordagem
                pra cada nicho
              </li>
              <li>
                Reativar leads de propostas anteriores que não fecharam,
                no momento certo (nova janela do Fio B, mudança de tarifa,
                expansão de operação)
              </li>
            </ul>

            <p style={{ marginTop: 16, fontSize: 13, fontStyle: "italic", color: "var(--plano-text-muted)" }}>
              A discussão sobre formato da parceria, modelo comercial e
              integração com o atendimento da Aura fica pra um momento
              posterior. Hoje o foco é montar o setup da Aura no ar
              direito.
            </p>
          </div>
        </section>

        {/* ═══════════════════════ 17. METAS E INDICADORES (Pág. 19) ═══════════════════════ */}
        <section className="plano-section" id="secao-metas">
          <div className="plano-page-marker">Página 19 · Seção 17</div>
          <h2 style={{ fontSize: 28 }}>Metas e indicadores de sucesso</h2>

          <p>
            Sem métrica clara, marketing vira achismo. A Aura roda com
            indicadores objetivos que mostram, mês a mês, se o setup está
            entregando resultado. Os números abaixo são <strong>metas
            realistas</strong> — não infladas pra impressionar e não
            tímidas pra esconder ambição.
          </p>

          <h3 style={{ fontSize: 18, marginTop: 24 }}>Indicadores comerciais</h3>
          <table>
            <thead>
              <tr>
                <th>Métrica</th>
                <th>Mês 1</th>
                <th>Mês 3</th>
                <th>Mês 6</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Leads qualificados/mês</strong></td>
                <td>10-15</td>
                <td>25-40</td>
                <td>50-80</td>
              </tr>
              <tr>
                <td><strong>Visitas técnicas/mês</strong></td>
                <td>4-6</td>
                <td>10-15</td>
                <td>20-30</td>
              </tr>
              <tr>
                <td><strong>Instalações fechadas/mês</strong></td>
                <td>1-2</td>
                <td>3-5</td>
                <td>5-8</td>
              </tr>
              <tr>
                <td><strong>Faturamento bruto/mês</strong></td>
                <td>R$ 22-44k</td>
                <td>R$ 66-110k</td>
                <td>R$ 110-180k</td>
              </tr>
              <tr>
                <td><strong>Pipeline B2B ativo</strong></td>
                <td>0-2 conversas</td>
                <td>4-8 conversas</td>
                <td>8-15 conversas (1ª venda B2B esperada)</td>
              </tr>
            </tbody>
          </table>

          <h3 style={{ fontSize: 18, marginTop: 32 }}>Indicadores de marca e presença digital</h3>
          <table>
            <thead>
              <tr>
                <th>Métrica</th>
                <th>Mês 1</th>
                <th>Mês 3</th>
                <th>Mês 6</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Followers @auraenergy</strong></td>
                <td>200-300</td>
                <td>800-1.200 (passa Brasfrio antiga)</td>
                <td>1.800+ (mira ARASOL)</td>
              </tr>
              <tr>
                <td><strong>Engajamento médio Insta</strong></td>
                <td>1,5%</td>
                <td>2,2%</td>
                <td>2,5-3% (vs 0,48% Brasfrio antiga)</td>
              </tr>
              <tr>
                <td><strong>Acessos LP/mês</strong></td>
                <td>300-500</td>
                <td>1.000-1.800</td>
                <td>2.500-4.000</td>
              </tr>
              <tr>
                <td><strong>Taxa de conversão LP → WhatsApp</strong></td>
                <td>3-5%</td>
                <td>5-7%</td>
                <td>7-10%</td>
              </tr>
              <tr>
                <td><strong>Posições no Google (palavras-chave alvo)</strong></td>
                <td>fora do top 100</td>
                <td>top 30 (long tail blog)</td>
                <td>top 10 (3-5 termos principais)</td>
              </tr>
            </tbody>
          </table>

          <h3 style={{ fontSize: 18, marginTop: 32 }}>Indicadores de qualidade do funil</h3>
          <ul>
            <li><strong>Lead → Visita técnica:</strong> meta 30-40% (saudável: 35%)</li>
            <li><strong>Visita técnica → Proposta enviada:</strong> meta 70-80% (Renato fecha visita técnica forte)</li>
            <li><strong>Proposta → Fechamento:</strong> meta 25-35% (residencial) e 20-30% (B2B)</li>
            <li><strong>CAC (custo de aquisição) residencial:</strong> R$ 80-150 com mídia paga rodando estável</li>
            <li><strong>Tempo médio do funil (residencial):</strong> 7-21 dias</li>
            <li><strong>Tempo médio do funil (B2B):</strong> 60-120 dias</li>
          </ul>

          <div className="plano-callout plano-callout-blue">
            <strong>Como acompanhamos:</strong> dashboard semanal por
            WhatsApp + 1 reunião mensal de revisão (45 min). Toda métrica
            tem fonte clara (Insta Insights, Google Analytics, Search
            Console, planilha de leads). Nada de número estimado &quot;de
            cabeça&quot; — só o que dá pra rastrear.
          </div>
        </section>

        {/* ═══════════════════════ 18. CHECKLIST PRÓXIMOS 30 DIAS (Pág. 20) ═══════════════════════ */}
        <section className="plano-section" id="secao-checklist">
          <div className="plano-page-marker">Página 20 · Seção 18</div>
          <h2 style={{ fontSize: 28 }}>Checklist próximos 30 dias</h2>

          <p>
            Ações práticas pra colocar a Aura no ar e começar a captar
            lead já no primeiro mês. Cada item tem responsável claro
            (Aura ou Impulso) e ordem natural de execução.
          </p>

          <h3 style={{ fontSize: 17, marginTop: 24 }}>Semana 1 — Pós-fechamento Frente 1</h3>
          <ul>
            <li>☐ <strong>Aura</strong>: passa fotos reais (Renato, equipe trabalhando, instalações concluídas, drone se tiver)</li>
            <li>☐ <strong>Aura</strong>: passa lista de clientes Brasfrio que toparia autorização LGPD pra usar nome + foto</li>
            <li>☐ <strong>Aura</strong>: confirma número CREA-TO + ART pública pra citar</li>
            <li>☐ <strong>Impulso</strong>: troca placeholders da LP por dados e fotos reais</li>
            <li>☐ <strong>Impulso</strong>: produz e entrega as 6 artes finalizadas</li>
            <li>☐ <strong>Impulso</strong>: entrega PDF da Direção info-produto B2B (1 página)</li>
          </ul>

          <h3 style={{ fontSize: 17, marginTop: 24 }}>Semana 2 — Setup técnico de presença digital</h3>
          <ul>
            <li>☐ <strong>Impulso</strong>: cria Instagram @auraenergy (perfil, bio, link, capa de destaques)</li>
            <li>☐ <strong>Impulso</strong>: configura WhatsApp Business da Aura (mensagem automática, catálogo, horário)</li>
            <li>☐ <strong>Impulso</strong>: cria Google Meu Negócio (endereço, horário, fotos, categoria)</li>
            <li>☐ <strong>Impulso</strong>: instala Pixel Meta + GA4 + Google Search Console nas 5 LPs</li>
            <li>☐ <strong>Impulso</strong>: submete sitemap.xml pro Google indexar</li>
            <li>☐ <strong>Aura</strong>: compra domínio <code>auraenergy.com.br</code> (~R$ 60-80/ano)</li>
          </ul>

          <h3 style={{ fontSize: 17, marginTop: 24 }}>Semana 3 — Lançamento de marca</h3>
          <ul>
            <li>☐ <strong>Impulso</strong>: aponta domínio <code>auraenergy.com.br</code> pra Vercel</li>
            <li>☐ <strong>Aura</strong>: posta Arte 1 (Nasce a Aura) — anúncio oficial</li>
            <li>☐ <strong>Aura</strong>: posta Arte 2 (Renato apresenta) + 1º reel do bloco gravado</li>
            <li>☐ <strong>Aura</strong>: posta Artes 3 e 4 (Lei 14.300 + Calculadora)</li>
            <li>☐ <strong>Impulso</strong>: pacote de stories pré-pronto pra Renato repostar</li>
          </ul>

          <h3 style={{ fontSize: 17, marginTop: 24 }}>Semana 4 — Aceleração + bloco de gravação</h3>
          <ul>
            <li>☐ <strong>Aura</strong>: bloco mensal de gravação (1 dia, 4 reels)</li>
            <li>☐ <strong>Impulso</strong>: edita reels do bloco</li>
            <li>☐ <strong>Aura</strong>: posta Artes 5 e 6 (Antes/depois + Janela Fio B)</li>
            <li>☐ <strong>Impulso</strong>: 1ª reunião mensal de revisão (45 min)</li>
            <li>☐ <strong>Impulso</strong>: ajusta o que precisar baseado no que veio de lead na semana 3-4</li>
          </ul>

          <h3 style={{ fontSize: 17, marginTop: 32 }}>Informações que ainda precisamos coletar com você</h3>

          <p>
            Pra finalizar a calibragem da LP e preparar tudo com precisão,
            essas informações entram em pauta na reunião:
          </p>

          <h3 style={{ fontSize: 17, marginTop: 24 }}>Sobre a operação</h3>
          <ul>
            <li>Anos exatos da operação Brasfrio em Palmas</li>
            <li>Número aproximado de instalações solar nos últimos 12 meses (residencial / comercial / industrial / rural)</li>
            <li>Maior projeto que você assinou como engenheiro responsável (kWp + cliente + cidade)</li>
            <li>Número CREA-TO + ART pública que possamos citar</li>
          </ul>

          <h3 style={{ fontSize: 17, marginTop: 24 }}>Sobre cases pra prova social</h3>
          <ul>
            <li>Lista de clientes Brasfrio que toparia pedir autorização LGPD pra usar nome + foto + antes/depois de conta</li>
            <li>Quem topa gravar depoimento em vídeo de 30-60s (mesmo no celular)</li>
          </ul>

          <h3 style={{ fontSize: 17, marginTop: 24 }}>Sobre ambição e investimento</h3>
          <ul>
            <li>Cenário de sucesso 12 meses na sua visão (em 1 frase)</li>
            <li>Tipos de crescimento que mais te interessam — comércio? indústria? rural? misto?</li>
            <li>Faixa de investimento mensal disponível pra mídia paga (quando ativarmos a Frente 2)</li>
          </ul>

          <h3 style={{ fontSize: 17, marginTop: 24 }}>Sobre operação digital atual</h3>
          <ul>
            <li>Quem responde WhatsApp da Brasfrio hoje e em quanto tempo</li>
            <li>Você usa CRM, planilha ou só WhatsApp pra acompanhar lead</li>
          </ul>

          <h3 style={{ fontSize: 17, marginTop: 24 }}>Sobre Programa Palmas Solar e Pronaf</h3>
          <ul>
            <li>Já protocolou desconto IPTU pra cliente? Quantas vezes?</li>
            <li>Já fez projeto financiado por Pronaf? Com qual banco?</li>
          </ul>

          <h3 style={{ fontSize: 17, marginTop: 24 }}>Sobre concorrência local</h3>
          <ul>
            <li>Pra quem você perde mais venda hoje (Unità? Soluthi? Palmas Energia? outra?)</li>
            <li>O que faz você fechar quando fecha (autoridade técnica? atendimento? preço? relacionamento?)</li>
          </ul>

          <h3 style={{ fontSize: 17, marginTop: 24 }}>Sobre info-produto FASE 2</h3>
          <ul>
            <li>Você topa gravar curso B2B em 12-18 meses? (não precisa decidir hoje, só pensar)</li>
            <li>Tem alguma ideia de tema/foco específico, ou tá em aberto?</li>
          </ul>

          <h3 style={{ fontSize: 17, marginTop: 24 }}>Sobre restrições</h3>
          <ul>
            <li>Algo que a Aura NÃO deve repetir da Brasfrio?</li>
            <li>Alguma regra inegociável (não trabalhar com X marca, não atender madrugada, não associação política, etc.)</li>
          </ul>
        </section>

        {/* ═══════════════════════ ASSINATURA FINAL ═══════════════════════ */}
        <section
          className="plano-section"
          style={{
            marginTop: 64,
            paddingTop: 32,
            borderTop: "2px solid var(--plano-yellow)",
            textAlign: "center",
            color: "var(--plano-text-muted)",
            fontSize: 13,
          }}
        >
          <p>
            <strong>Plano por:</strong> Eduardo Barros · Impulso Digital
            <br />
            <strong>Cliente:</strong> Renato Edson · Aura Energy · Palmas-TO
            <br />
            <strong>Data:</strong> 2026-05-06
          </p>
        </section>
      </main>
    </>
  );
}
