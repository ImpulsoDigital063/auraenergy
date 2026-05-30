"use client";

import Image from "next/image";

// =====================================================================
// DIREÇÃO INFO-PRODUTO B2B AURA ENERGY
// Bônus estratégico entregue na Frente 1 · cliente-facing
// Otimizado pra impressão (Ctrl+P → Salvar como PDF)
// =====================================================================

export default function DirecaoCursoView() {
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
              content: "Aura Energy · Direção Info-Produto B2B · página "
                counter(page) " de " counter(pages);
              font-family: "Inter", sans-serif;
              font-size: 9pt;
              color: #2d52a8;
              padding-top: 8mm;
            }
            @top-right {
              content: "Bônus estratégico · Renato Edson";
              font-family: "Inter", sans-serif;
              font-size: 8pt;
              color: #5a7bb5;
              padding-bottom: 6mm;
            }
          }

          .plano-doc h1 { font-size: 28pt; page-break-after: avoid; }
          .plano-doc h2 { font-size: 18pt; page-break-after: avoid; }
          .plano-doc h3 { font-size: 13pt; page-break-after: avoid; }
          .plano-doc p, .plano-doc li { font-size: 11pt; }
          .plano-section { page-break-inside: avoid; }
          .plano-page { page-break-after: always; }

          * {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
        }
      `}</style>

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
            background: "linear-gradient(135deg, #F5BC2C 0%, #FF8B3D 100%)",
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
              "radial-gradient(ellipse at top, rgba(245, 188, 44, 0.10) 0%, rgba(255, 254, 242, 0) 60%)",
          }}
        >
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
            Bônus estratégico Frente 1
            <span style={{ width: 24, height: 1, background: "var(--plano-text-muted)", opacity: 0.4 }} />
          </div>

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
              style={{ width: 140, height: 140, objectFit: "contain" }}
            />
          </div>

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
            }}
          >
            Aura Energy · Mapa Estratégico
          </div>

          <h1
            style={{
              fontSize: 56,
              fontWeight: 900,
              lineHeight: 1.05,
              marginTop: 20,
              marginBottom: 12,
              color: "var(--plano-blue-deep)",
              letterSpacing: "-0.02em",
              maxWidth: 600,
              background: "linear-gradient(135deg, #0E2152 0%, #1B3A87 50%, #2D52A8 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Direção Info-Produto B2B
          </h1>

          <div
            style={{
              width: 80,
              height: 4,
              background: "linear-gradient(90deg, #F5BC2C 0%, #FF8B3D 100%)",
              borderRadius: 2,
              margin: "20px 0",
            }}
          />

          <h2
            style={{
              fontSize: 22,
              fontWeight: 600,
              color: "var(--plano-text-soft)",
              maxWidth: 580,
              marginBottom: 8,
            }}
          >
            Mapa estratégico pra você lançar curso próprio em 8-12 semanas
          </h2>

          <p
            style={{
              fontSize: 14,
              fontStyle: "italic",
              color: "var(--plano-text-muted)",
              maxWidth: 520,
              marginBottom: 36,
            }}
          >
            Conectado à captação da Aura · curso vira lead pago · CAC negativo
          </p>

          <div
            style={{
              background: "white",
              border: "1px solid var(--plano-border)",
              borderRadius: 16,
              padding: "24px 32px",
              maxWidth: 520,
              width: "100%",
              boxShadow: "0 12px 40px -16px rgba(27, 58, 135, 0.18)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                left: 0,
                top: 0,
                bottom: 0,
                width: 6,
                background: "linear-gradient(180deg, #F5BC2C 0%, #FF8B3D 100%)",
              }}
            />
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, textAlign: "left" }}>
              <div>
                <div style={{ fontSize: 9, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--plano-yellow-deep)", marginBottom: 4 }}>Pra</div>
                <div style={{ fontSize: 14, fontWeight: 700, color: "var(--plano-blue-deep)" }}>Renato Edson</div>
              </div>
              <div>
                <div style={{ fontSize: 9, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--plano-yellow-deep)", marginBottom: 4 }}>De</div>
                <div style={{ fontSize: 14, fontWeight: 700, color: "var(--plano-blue-deep)" }}>Eduardo Barros</div>
              </div>
              <div>
                <div style={{ fontSize: 9, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--plano-yellow-deep)", marginBottom: 4 }}>Empresa</div>
                <div style={{ fontSize: 14, fontWeight: 700, color: "var(--plano-blue-deep)" }}>Impulso Digital</div>
              </div>
              <div>
                <div style={{ fontSize: 9, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--plano-yellow-deep)", marginBottom: 4 }}>Data</div>
                <div style={{ fontSize: 14, fontWeight: 700, color: "var(--plano-blue-deep)" }}>06/05/2026</div>
              </div>
            </div>
          </div>

          <p
            style={{
              marginTop: 36,
              fontSize: 12,
              color: "var(--plano-text-muted)",
              fontStyle: "italic",
              maxWidth: 520,
            }}
          >
            Bônus incluso na Frente 1 — você executa quando quiser. Quando for executar, a gente conversa sobre escopo separado.
          </p>
        </section>

        {/* ═══════════════════════ 1. POSICIONAMENTO (Pág. 2) ═══════════════════════ */}
        <section className="plano-section">
          <div className="plano-page-marker">Página 2 · Seção 1</div>
          <h2 style={{ fontSize: 28 }}>1 · Posicionamento recomendado</h2>

          <div className="plano-callout" style={{ borderLeftColor: "var(--plano-yellow)", background: "#fff8e8" }}>
            <h3 style={{ fontSize: 22, marginTop: 0, color: "var(--plano-blue-deep)" }}>
              &quot;Renato — Engenheiro Solar de Palmas-TO&quot;
            </h3>
          </div>

          <h3 style={{ fontSize: 17, marginTop: 24 }}>Por que esse posicionamento</h3>
          <ul>
            <li>
              <strong>Autoridade local</strong> — Palmas tem 1-2 instrutores
              solar online ativos. SP/SC tem centenas. Você ocupa um espaço
              vazio sem precisar competir nacionalmente.
            </li>
            <li>
              <strong>Tocantins = irradiação top 3 no Brasil</strong> —
              ângulo único de venda. Sistema rende mais aqui do que em 80%
              do país. Isso vira aula só sua.
            </li>
            <li>
              <strong>Confiança local</strong> — cliente em Palmas confia
              em quem conhece os bairros, fornecedores, processos da
              Energisa. Você é desse círculo. Curso de SP não consegue
              entregar isso.
            </li>
            <li>
              <strong>Conexão direta com a Aura</strong> — você já tem a
              empresa. O curso vira lead magnet pago: aluno paga R$ 19 pra
              estudar, vira lead super-qualificado pra Aura.
            </li>
          </ul>
        </section>

        {/* ═══════════════════════ 2. FORMATO (Pág. 3) ═══════════════════════ */}
        <section className="plano-section">
          <div className="plano-page-marker">Página 3 · Seção 2</div>
          <h2 style={{ fontSize: 28 }}>2 · Formato recomendado (Fase 1)</h2>

          <p>
            <strong>Curso entry de R$ 19-29</strong> pra cliente final
            entender solar antes de comprar.
          </p>

          <h3 style={{ fontSize: 17, marginTop: 24 }}>Especificação técnica</h3>
          <ul>
            <li>8-12 aulas curtas (5-15 min cada)</li>
            <li>~2-3h totais</li>
            <li>Hospedagem: Hotmart Club (player nativo, legendas auto-geradas)</li>
            <li>Sem produção pesada — celular + tela compartilhada</li>
            <li>Investimento de produção: R$ 8-25k total</li>
          </ul>

          <h3 style={{ fontSize: 17, marginTop: 24 }}>
            Por que esse formato e não curso técnico de instalação
          </h3>

          <table>
            <thead>
              <tr>
                <th>Critério</th>
                <th>Curso técnico (eletricista)</th>
                <th>Curso cliente final (você)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Saturação de mercado</td>
                <td>Alta — dezenas de cursos</td>
                <td><strong>Zero player relevante</strong></td>
              </tr>
              <tr>
                <td>Concorrência local Palmas</td>
                <td>Existe</td>
                <td><strong>Você é único</strong></td>
              </tr>
              <tr>
                <td>Conexão com a Aura</td>
                <td>Indireta (aluno vira concorrente)</td>
                <td><strong>Direta</strong> — aluno vira projeto</td>
              </tr>
              <tr>
                <td>Ticket</td>
                <td>R$ 19-497</td>
                <td>R$ 19-29 (volume)</td>
              </tr>
              <tr>
                <td>LTV do cliente</td>
                <td>Acaba no curso</td>
                <td>Vira projeto R$ 15-50k</td>
              </tr>
            </tbody>
          </table>

          <div className="plano-callout plano-callout-blue">
            <strong>Insight crítico:</strong> quem paga R$ 19 pra entender
            solar antes de comprar é o cliente <strong>mais qualificado
            que existe</strong>. Não é curioso, é decisor com cartão na
            mão. Vale ouro.
          </div>
        </section>

        {/* ═══════════════════════ 3. ROADMAP (Pág. 4) ═══════════════════════ */}
        <section className="plano-section">
          <div className="plano-page-marker">Página 4 · Seção 3</div>
          <h2 style={{ fontSize: 28 }}>3 · Roadmap 8-12 semanas</h2>

          <div className="plano-callout">
            <h3 style={{ fontSize: 16, marginTop: 0 }}>Semanas 1-2 · Setup</h3>
            <ul>
              <li>Define posicionamento (engenheiro solar Palmas-TO)</li>
              <li>Cria iscas grátis: e-book &quot;5 erros ao contratar solar em Palmas-TO&quot;</li>
              <li>Lista de espera (Mailchimp ou Sendinblue grátis)</li>
            </ul>
          </div>

          <div className="plano-callout">
            <h3 style={{ fontSize: 16, marginTop: 0 }}>Semanas 3-4 · Aquecimento</h3>
            <ul>
              <li>5 vídeos curtos no Insta (TikTok-style, vertical, 30-90s)</li>
              <li>Hooks de chamada: &quot;Você tá sendo enganado pelo seu instalador&quot; · &quot;Por que seu vizinho economiza 90%&quot;</li>
              <li>CTA: &quot;Entra na lista pra receber o curso completo&quot;</li>
            </ul>
          </div>

          <div className="plano-callout">
            <h3 style={{ fontSize: 16, marginTop: 0 }}>Semanas 5-6 · Gravação</h3>
            <ul>
              <li>8-12 aulas, 2-3h totais, gravadas em 1-2 finais de semana</li>
              <li>Formato: tela + voz (sem produção complexa)</li>
              <li>Sobe na Hotmart (1 dia técnico)</li>
            </ul>
          </div>

          <div className="plano-callout">
            <h3 style={{ fontSize: 16, marginTop: 0 }}>Semanas 7-8 · Lançamento</h3>
            <ul>
              <li>Email marketing pra lista construída → preço pré-lançamento R$ 19</li>
              <li>Carrinho aberto 5-7 dias</li>
              <li>Insta diário com objeções respondidas</li>
            </ul>
          </div>

          <div className="plano-callout">
            <h3 style={{ fontSize: 16, marginTop: 0 }}>Semanas 9-12 · Escala</h3>
            <ul>
              <li>Tráfego pago Meta Ads (R$ 500-1.500/mês)</li>
              <li>Programa de afiliados (parceiros postam, ganham 30%)</li>
              <li>Avaliações + remarketing</li>
            </ul>
          </div>
        </section>

        {/* ═══════════════════════ 4. ESTRUTURA DAS 8 AULAS (Pág. 5-6) ═══════════════════════ */}
        <section className="plano-section">
          <div className="plano-page-marker">Página 5 · Seção 4</div>
          <h2 style={{ fontSize: 28 }}>4 · Estrutura sugerida — 8 aulas (60-80 min totais)</h2>

          <p>
            Estrutura adaptada ao <strong>decisor B2B</strong> (não eletricista),
            com base em pesquisa de mercado solar B2B brasileiro.
          </p>

          <div className="plano-callout plano-callout-blue">
            <strong>Premissa de produção:</strong> aulas curtas (6-10 min,
            teto 10), uma promessa por aula nos primeiros 15 segundos,
            fatura/planilha/gráfico na tela 80% do tempo, Renato em PIP
            pequeno (não tela cheia), <strong>zero teoria elétrica</strong> —
            decisor B2B compra resultado financeiro, não kWp.
          </div>

          <div className="plano-callout">
            <h3 style={{ fontSize: 15, marginTop: 0 }}>
              Aula 1 · &quot;Por que sua conta de energia industrial é o
              maior custo invisível&quot; (~7 min)
            </h3>
            <p style={{ margin: "6px 0 0", fontSize: 13 }}>
              Abertura com fatura real na tela. Demanda contratada vs consumida.
              TUSD/TE. Mostra como 18-35% do custo operacional some sem ninguém
              perceber.
              <br /><em>Fecha com:</em> &quot;Na próxima eu te mostro quanto disso volta para o caixa.&quot;
            </p>
          </div>

          <div className="plano-callout">
            <h3 style={{ fontSize: 15, marginTop: 0 }}>
              Aula 2 · &quot;Payback de usina solar em indústria: a conta
              que ninguém te mostra direito&quot; (~9 min)
            </h3>
            <p style={{ margin: "6px 0 0", fontSize: 13 }}>
              CAPEX → economia mensal → TIR. Compara com CDB e expansão de máquina.
              Caso real Aura (com números, sem nome).
              <br /><em>Fecha com:</em> &quot;Mas tem 3 modelos diferentes — qual serve pra você?&quot;
            </p>
          </div>

          <div className="plano-callout">
            <h3 style={{ fontSize: 15, marginTop: 0 }}>
              Aula 3 · &quot;Os 3 modelos de aquisição: à vista, financiado,
              locação (PPA)&quot; (~10 min)
            </h3>
            <p style={{ margin: "6px 0 0", fontSize: 13 }}>
              Quadro comparativo. Quem usa cada um (caixa forte = à vista,
              apertada = PPA, expansão = financiado BNDES/Pronaf).
              <br /><em>Fecha com:</em> &quot;Modelo escolhido. Agora — sua telha aguenta?&quot;
            </p>
          </div>

          <div className="plano-callout">
            <h3 style={{ fontSize: 15, marginTop: 0 }}>
              Aula 4 · &quot;Telhado, solo ou carport: como decidir em 5 minutos&quot; (~6 min)
            </h3>
            <p style={{ margin: "6px 0 0", fontSize: 13 }}>
              Critérios objetivos: área, sombreamento, estrutura, expansão futura.
              Sem jargão. Mostra que decisão de local muda 15-20% do retorno.
            </p>
          </div>

          <div className="plano-callout">
            <h3 style={{ fontSize: 15, marginTop: 0 }}>
              Aula 5 · &quot;Rural: Pronaf, Moderagro e o detalhe que dobra
              o retorno&quot; (~8 min)
            </h3>
            <p style={{ margin: "6px 0 0", fontSize: 13 }}>
              Específica agro (irrigação, resfriamento, secadores). Linhas
              de crédito. Compensação entre unidades (autoconsumo remoto).
              Case rural curto.
            </p>
          </div>

          <div className="plano-callout">
            <h3 style={{ fontSize: 15, marginTop: 0 }}>
              Aula 6 · &quot;Comércio e supermercado: por que horário de
              pico é seu inimigo&quot; (~7 min)
            </h3>
            <p style={{ margin: "6px 0 0", fontSize: 13 }}>
              Demanda de pico, geladeiras 24h, AC. Como solar + bateria começa
              a fazer sentido. Tarifa branca.
              <br /><em>Fecha com:</em> &quot;Mas o decisor manda a Lei 14.300 na sua cara — vamos resolver.&quot;
            </p>
          </div>

          <div className="plano-callout">
            <h3 style={{ fontSize: 15, marginTop: 0 }}>
              Aula 7 · &quot;Lei 14.300, Fio B e o que mudou: tradução pra
              dono de empresa&quot; (~9 min)
            </h3>
            <p style={{ margin: "6px 0 0", fontSize: 13 }}>
              Desmistifica a lei. O que de fato pesa no payback. Janela de
              transição. Por que 2026 ainda é janela boa.
              <br /><em>Fecha com:</em> &quot;Tudo decidido — agora como NÃO ser enganado por instalador ruim.&quot;
            </p>
          </div>

          <div className="plano-callout">
            <h3 style={{ fontSize: 15, marginTop: 0 }}>
              Aula 8 · &quot;Os 7 sinais de um projeto solar mal feito (e
              como blindar o seu)&quot; (~10 min)
            </h3>
            <p style={{ margin: "6px 0 0", fontSize: 13 }}>
              Checklist proposta: garantias separadas (módulo/inversor/instalação),
              dimensionamento honesto, monitoramento incluso, ART/homologação,
              seguro, cláusula de performance.
              <br /><em>Fecha com CTA:</em> orçamento Aura + próximo passo.
            </p>
          </div>
        </section>

        {/* ═══════════════════════ 5. PADRÕES DE PRODUÇÃO (Pág. 7) ═══════════════════════ */}
        <section className="plano-section">
          <div className="plano-page-marker">Página 7 · Seção 5</div>
          <h2 style={{ fontSize: 28 }}>5 · Padrões de produção enxuta</h2>

          <h3 style={{ fontSize: 17, marginTop: 24 }}>Setup técnico que funciona</h3>
          <ul>
            <li>1 câmera (DSLR ou iPhone)</li>
            <li>1 lapela (sem boom)</li>
            <li>Iluminação natural</li>
            <li>Zero greenscreen, zero overlay gráfico rebuscado</li>
            <li>Custo total estimado: <strong>R$ 8-25k</strong> pra produzir 8 aulas</li>
          </ul>

          <h3 style={{ fontSize: 17, marginTop: 24 }}>4 modos visuais a alternar (gangorra previne tédio)</h3>
          <ol>
            <li><strong>Studio premium</strong> — vinhetas de capítulo cinemáticas</li>
            <li><strong>Sala de reunião</strong> — Renato + cliente B2B real, formato podcast</li>
            <li><strong>Slide-livro com PIP</strong> — aulas analíticas (fatura/planilha)</li>
            <li><strong>Documental em campo</strong> — Renato dentro da indústria/fazenda do cliente</li>
          </ol>

          <h3 style={{ fontSize: 17, marginTop: 24 }}>Quebra de ritmo na metade do curso</h3>
          <ul>
            <li><strong>Aulas 1-3:</strong> slide + Renato em PIP (estilo livro técnico)</li>
            <li><strong>Aula 4-5:</strong> vai pra campo (dentro da indústria/fazenda)</li>
            <li><strong>Aula 6-7:</strong> volta pra slide</li>
            <li><strong>Aula 8 — money shot:</strong> close-up da fatura DEPOIS (R$ 87 onde era R$ 8.400)</li>
          </ul>

          <h3 style={{ fontSize: 17, marginTop: 24 }}>Cliente B2B real como personagem fixo</h3>
          <p>
            Dono de indústria já atendido pela Aura aparece em 2-3 aulas.
            Renato é o cérebro técnico, ele é a prova viva. Reduz custo de
            produção + cria narrativa peer-to-peer (decisor falando com decisor).
          </p>

          <h3 style={{ fontSize: 17, marginTop: 24 }}>Material complementar baixável</h3>
          <p>
            Esse é um dos maiores pontos fracos dos cursos solares concorrentes.
            A Aura preenche com:
          </p>
          <ul>
            <li>Planilha Google Sheets de simulador de payback B2B</li>
            <li>1 PDF &quot;checklist&quot; por aula</li>
            <li>Modelo de proposta comercial</li>
            <li>Checklist de telhado industrial</li>
          </ul>
        </section>

        {/* ═══════════════════════ 6. CONEXÃO + PRICING (Pág. 8) ═══════════════════════ */}
        <section className="plano-section">
          <div className="plano-page-marker">Página 8 · Seção 6</div>
          <h2 style={{ fontSize: 28 }}>6 · Conexão crítica com a Aura</h2>

          <div className="plano-callout plano-callout-green">
            <p style={{ margin: 0, fontSize: 15, fontWeight: 600 }}>
              Curso (R$ 19) → Lead super-qualificado → Orçamento Aura → Projeto R$ 15-50k
            </p>
          </div>

          <h3 style={{ fontSize: 17, marginTop: 24 }}>Conta de mercado conservadora</h3>
          <ul>
            <li>100 cursos/mês × R$ 19 = <strong>R$ 1.900 receita curso</strong></li>
            <li>Desses, 5-10% viram lead Aura</li>
            <li>1-2 fecham projeto R$ 15-30k = <strong>+R$ 15-30k receita Aura</strong></li>
          </ul>

          <div className="plano-callout plano-callout-blue">
            <strong>Resultado:</strong> CAC efetivamente <strong>negativo</strong>{" "}
            — o curso paga o tráfego e ainda lucra. Você acumula autoridade
            enquanto vende.
          </div>

          <h2 style={{ fontSize: 22, marginTop: 40, paddingTop: 24, borderTop: "2px solid var(--plano-border)" }}>
            Tiers de pricing de mercado (referência)
          </h2>

          <table>
            <thead>
              <tr>
                <th>Tier</th>
                <th>Preço</th>
                <th>Formato</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Iscas grátis</td>
                <td>R$ 0</td>
                <td>E-book / mini-curso 3 vídeos (lead magnet)</td>
              </tr>
              <tr style={{ background: "rgba(245, 188, 44, 0.15)" }}>
                <td><strong>Entry (você começa aqui)</strong></td>
                <td><strong>R$ 19-47</strong></td>
                <td>Curso curto 2-4h · volume + funil</td>
              </tr>
              <tr>
                <td>Core</td>
                <td>R$ 197-497</td>
                <td>Curso completo 10-20h · sustento</td>
              </tr>
              <tr>
                <td>Premium</td>
                <td>R$ 1.497-3.997</td>
                <td>Mentoria + grupo · lucro</td>
              </tr>
              <tr>
                <td>Recurring</td>
                <td>R$ 47-97/mês</td>
                <td>Assinatura comunidade · modelo emergente</td>
              </tr>
            </tbody>
          </table>

          <p style={{ marginTop: 12 }}>
            <strong>Sua trilha sugerida:</strong> começa entry, escala pra
            core em 6 meses, premium em 12-18 meses.
          </p>
        </section>

        {/* ═══════════════════════ 7. PRÓXIMO PASSO (Pág. 9) ═══════════════════════ */}
        <section className="plano-section">
          <div className="plano-page-marker">Página 9 · Seção 7</div>
          <h2 style={{ fontSize: 28 }}>7 · Próximo passo imediato</h2>

          <h3 style={{ fontSize: 17, marginTop: 24 }}>O que VOCÊ faz</h3>
          <ol>
            <li>Decide se quer seguir esse formato (curso entry pra cliente final)</li>
            <li>Quando estiver pronto pra executar, fala comigo</li>
          </ol>

          <h3 style={{ fontSize: 17, marginTop: 24 }}>O que a Impulso pode fazer (futuro plano)</h3>
          <ul>
            <li>Estrutura de email marketing (lista + sequência)</li>
            <li>Setup Hotmart + páginas de venda</li>
            <li>Tráfego pago Meta Ads</li>
            <li>Estratégia de lançamento</li>
            <li>Comunidade pós-venda</li>
          </ul>

          <div className="plano-callout plano-callout-green">
            <strong>Importante:</strong> nada disso está sendo cobrado agora.
            Esta direção estratégica é parte do bônus da Frente 1. Quando
            você quiser executar, conversamos sobre escopo e valor separado,
            sem pressão.
          </div>

          <h2 style={{ fontSize: 22, marginTop: 40, paddingTop: 24, borderTop: "2px solid var(--plano-border)" }}>
            Por que esse caminho funciona
          </h2>

          <ol>
            <li><strong>Mercado solar BR cresce 25-80% ao ano</strong> — não tá inventando demanda</li>
            <li><strong>Posicionamento local + cliente final = zero saturação</strong> — espaço aberto</li>
            <li><strong>Curso conecta direto com a Aura</strong> — lead pago é lead premium</li>
            <li><strong>Receita do curso paga o tráfego, Aura fecha o ROI</strong></li>
            <li><strong>Você acumula autoridade enquanto vende</strong> — vira referência em Palmas-TO em 12-18 meses</li>
          </ol>

          <div className="plano-quote">
            Renato, isso aqui é o mapa que eu queria ter quando você me
            falou que sonhava com info-produto. Estudei mais de 10 instrutores,
            plataformas e modelos. A direção mais próxima do que faz sentido
            pra você está nessas páginas. Você executa quando quiser. Quando
            for executar, a gente conversa.
            <br /><br />— Eduardo
          </div>
        </section>

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
            <strong>Direção por:</strong> Eduardo Barros · Impulso Digital
            <br />
            <strong>Cliente:</strong> Renato Edson · Aura Energy · Palmas-TO
            <br />
            <strong>Data:</strong> 06/05/2026
            <br />
            <em>Bônus estratégico incluso na Frente 1</em>
          </p>
        </section>
      </main>
    </>
  );
}
