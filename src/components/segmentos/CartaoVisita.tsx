"use client";

import Image from "next/image";

// =====================================================================
// CARTÃO DE VISITA AURA ENERGY · Renato Edson
// Tamanho padrão BR: 90 × 50 mm (3.54 × 1.97 in)
// Imprimível em gráfica · Ctrl+P pra preview ou export PDF
// QR code aponta pra auraenergy.vercel.app/links (linktree público)
// =====================================================================

const URL_LINKTREE = "https://auraenergy.vercel.app/links";
// QR code SVG via QuickChart (gratuito, sem API key, escalável pra print)
const QR_URL = `https://quickchart.io/qr?text=${encodeURIComponent(
  URL_LINKTREE
)}&size=400&margin=0&ecLevel=H&dark=0E2152&light=ffffff`;

export default function CartaoVisita() {
  return (
    <>
      <style jsx global>{`
        body {
          background: #e8e9eb;
          margin: 0;
          padding: 0;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }

        /* Toolbar (oculta na impressão) */
        .cartao-toolbar {
          position: fixed;
          top: 16px;
          right: 16px;
          z-index: 50;
          display: flex;
          gap: 8px;
        }

        .cartao-btn {
          background: linear-gradient(135deg, #F5BC2C 0%, #FF8B3D 100%);
          color: #0e2152;
          border: none;
          padding: 12px 22px;
          border-radius: 12px;
          font-size: 14px;
          font-weight: 800;
          cursor: pointer;
          box-shadow: 0 10px 30px -10px rgba(245, 188, 44, 0.50);
          font-family: inherit;
        }

        .cartao-btn-outline {
          background: white;
          border: 1px solid rgba(0,0,0,0.1);
          color: #1B3A87;
          padding: 12px 22px;
          border-radius: 12px;
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
          font-family: inherit;
          display: inline-block;
        }

        .cartao-stage {
          padding: 60px 20px 80px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 32px;
        }

        .cartao-label {
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: #5A7BB5;
          margin-bottom: 8px;
        }

        /* Cartão padrão BR: 90 × 50 mm (340 × 189 px @96dpi) */
        .cartao {
          width: 340px;
          height: 189px;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 16px 40px -16px rgba(14, 33, 82, 0.30);
          position: relative;
        }

        /* FRENTE — gradient azul + identidade Aura */
        .cartao-frente {
          background: linear-gradient(135deg, #0E2152 0%, #1B3A87 60%, #2D52A8 100%);
          color: white;
          padding: 18px 20px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          position: relative;
          overflow: hidden;
        }

        .cartao-frente::before {
          content: '';
          position: absolute;
          top: -40px;
          right: -40px;
          width: 180px;
          height: 180px;
          background: radial-gradient(
            circle,
            rgba(245, 188, 44, 0.35) 0%,
            rgba(245, 188, 44, 0.10) 30%,
            transparent 60%
          );
          border-radius: 50%;
          pointer-events: none;
        }

        .cartao-frente-top {
          display: flex;
          align-items: center;
          gap: 10px;
          position: relative;
          z-index: 1;
        }

        .cartao-frente-logo {
          width: 38px;
          height: 38px;
          background: white;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 4px;
        }

        .cartao-frente-marca {
          font-size: 17px;
          font-weight: 800;
          letter-spacing: -0.01em;
          line-height: 1;
        }

        .cartao-frente-marca-sub {
          font-size: 8px;
          font-weight: 700;
          letter-spacing: 0.18em;
          color: #FFD668;
          text-transform: uppercase;
          margin-top: 3px;
        }

        .cartao-frente-nome {
          font-size: 18px;
          font-weight: 800;
          letter-spacing: -0.01em;
          line-height: 1.05;
          position: relative;
          z-index: 1;
        }

        .cartao-frente-cargo {
          font-size: 10px;
          font-weight: 600;
          color: #FFD668;
          letter-spacing: 0.04em;
          margin-top: 4px;
        }

        .cartao-frente-info {
          font-size: 11px;
          font-weight: 500;
          line-height: 1.5;
          color: rgba(255, 255, 255, 0.92);
          position: relative;
          z-index: 1;
        }

        .cartao-frente-info-row {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .cartao-frente-info-label {
          font-size: 9px;
          font-weight: 700;
          color: #FFD668;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          width: 60px;
          flex-shrink: 0;
        }

        /* VERSO — branco com QR code grande */
        .cartao-verso {
          background: #fffef2;
          padding: 14px 16px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          align-items: center;
          position: relative;
        }

        .cartao-verso::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 6px;
          background: linear-gradient(90deg, #1B3A87 0%, #F5BC2C 50%, #FF8B3D 100%);
        }

        .cartao-verso-qr {
          width: 140px;
          height: 140px;
          background: white;
          border-radius: 6px;
          padding: 6px;
          box-shadow: 0 4px 12px -4px rgba(14, 33, 82, 0.15);
          justify-self: center;
        }

        .cartao-verso-qr img {
          width: 100%;
          height: 100%;
          display: block;
        }

        .cartao-verso-text {
          display: flex;
          flex-direction: column;
          gap: 6px;
          padding-right: 6px;
        }

        .cartao-verso-titulo {
          font-size: 13px;
          font-weight: 800;
          color: #1B3A87;
          line-height: 1.15;
          letter-spacing: -0.01em;
        }

        .cartao-verso-sub {
          font-size: 10px;
          color: #5A7BB5;
          line-height: 1.4;
          font-weight: 500;
        }

        .cartao-verso-url {
          font-size: 10px;
          font-weight: 700;
          color: #B88A1E;
          letter-spacing: -0.01em;
          margin-top: 4px;
          word-break: break-all;
        }

        .cartao-verso-cta {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-size: 9px;
          font-weight: 700;
          color: #1B3A87;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-top: 4px;
        }

        /* Notas pro Eduardo (oculta na impressão) */
        .cartao-notas {
          background: white;
          border-radius: 12px;
          padding: 24px;
          max-width: 580px;
          font-size: 13px;
          color: #1B3A87;
          line-height: 1.6;
          box-shadow: 0 4px 16px -4px rgba(14, 33, 82, 0.10);
        }

        .cartao-notas h3 {
          margin: 0 0 12px;
          font-size: 15px;
          color: #1B3A87;
          padding-bottom: 6px;
          border-bottom: 2px solid #F5BC2C;
        }

        .cartao-notas ul {
          margin: 8px 0;
          padding-left: 20px;
        }

        .cartao-notas li {
          margin: 5px 0;
        }

        /* PRINT — cartão isolado em página de tamanho exato */
        @media print {
          .no-print { display: none !important; }
          body { background: white; }
          .cartao-stage {
            padding: 0;
            gap: 0;
          }
          .cartao-label { display: none; }
          .cartao-notas { display: none; }
          .cartao {
            box-shadow: none;
            border: 1px solid #ccc;
            page-break-after: always;
          }
          @page {
            size: 90mm 50mm;
            margin: 0;
          }
          * {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
        }
      `}</style>

      {/* Toolbar */}
      <div className="cartao-toolbar no-print">
        <a href="/" className="cartao-btn-outline">
          ← Site
        </a>
        <button
          type="button"
          className="cartao-btn"
          onClick={() => window.print()}
        >
          🖨 Imprimir / PDF
        </button>
      </div>

      <main className="cartao-stage">
        {/* FRENTE */}
        <div>
          <div className="cartao-label no-print">Frente · 90 × 50 mm</div>
          <div className="cartao cartao-frente">
            <div className="cartao-frente-top">
              <div className="cartao-frente-logo">
                <Image
                  src="/logo-aura.png"
                  alt="Aura Energy"
                  width={32}
                  height={32}
                  style={{ width: "100%", height: "100%", objectFit: "contain" }}
                  unoptimized
                />
              </div>
              <div>
                <div className="cartao-frente-marca">Aura Energy</div>
                <div className="cartao-frente-marca-sub">
                  Engenharia Solar · Tocantins
                </div>
              </div>
            </div>

            <div>
              <div className="cartao-frente-nome">Renato Edson</div>
              <div className="cartao-frente-cargo">
                Engenheiro Responsável Técnico · CREA-TO
              </div>
            </div>

            <div className="cartao-frente-info">
              <div className="cartao-frente-info-row">
                <span className="cartao-frente-info-label">WhatsApp</span>
                <span>(63) 9 9268-8852</span>
              </div>
              <div className="cartao-frente-info-row">
                <span className="cartao-frente-info-label">Atende</span>
                <span>Palmas-TO · todo Tocantins</span>
              </div>
            </div>
          </div>
        </div>

        {/* VERSO */}
        <div>
          <div className="cartao-label no-print">Verso · 90 × 50 mm</div>
          <div className="cartao cartao-verso">
            <div className="cartao-verso-qr">
              {/* QR code SVG via QuickChart — gratuito, sem API key */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={QR_URL}
                alt={`QR code apontando pra ${URL_LINKTREE}`}
              />
            </div>
            <div className="cartao-verso-text">
              <div className="cartao-verso-titulo">
                Aponte a câmera
              </div>
              <div className="cartao-verso-sub">
                Solar premium em Tocantins. Casa, comércio, indústria, rural —
                cada um com cálculo próprio.
              </div>
              <div className="cartao-verso-cta">→ auraenergy.vercel.app</div>
            </div>
          </div>
        </div>

        {/* Notas pro Eduardo */}
        <div className="cartao-notas no-print">
          <h3>📋 Especificações pra gráfica</h3>
          <ul>
            <li>
              <strong>Tamanho:</strong> 90 × 50 mm (padrão BR cartão de visita)
            </li>
            <li>
              <strong>Papel sugerido:</strong> couché fosco 350g · laminação fosca
              + verniz localizado no logo Aura (premium)
            </li>
            <li>
              <strong>Acabamento:</strong> cantos arredondados 4mm OU retos
              clássico
            </li>
            <li>
              <strong>Tiragem inicial:</strong> 100-500 unidades · revenda
              Renato R$ 0,80-1,40/un dependendo da gráfica
            </li>
            <li>
              <strong>QR code aponta pra:</strong>{" "}
              <code>auraenergy.vercel.app/links</code> (linktree com 4 LPs +
              calculadora + WhatsApp)
            </li>
            <li>
              <strong>Pra exportar PDF:</strong> Ctrl+P → "Salvar como PDF" →
              tamanho papel "Personalizado: 90mm × 50mm" → margens "Nenhuma"
            </li>
          </ul>
          <h3 style={{ marginTop: 20 }}>🎯 Pra mandar pra gráfica</h3>
          <ul>
            <li>
              Imprimir 1 página (Ctrl+P) e validar visualmente
            </li>
            <li>
              Salvar como PDF de alta resolução
            </li>
            <li>
              Mandar pra gráfica especificando que CADA cartão tem frente e
              verso (gráficas brasileiras chamam de "4×4 cores" = colorido
              dos dois lados)
            </li>
            <li>
              Pedir prova de impressão antes da tiragem completa
            </li>
          </ul>
        </div>
      </main>
    </>
  );
}
