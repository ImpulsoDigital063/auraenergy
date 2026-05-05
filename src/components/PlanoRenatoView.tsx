"use client";

import Image from "next/image";
import { IconBolt, IconCheck, IconShield, IconSparkles } from "./Icons";

// =====================================================================
// PLANO DE NEGÓCIO & MARKETING AURA ENERGY
// Página otimizada pra impressão (Ctrl+P → Salvar como PDF)
//
// Decisões cromáticas (Eduardo: SEM preto, impressora não imprime):
// - Texto principal: #333333 (cinza chumbo)
// - Headlines: #1B3A87 (azul Aura)
// - Destaques: #F5BC2C (amarelo) + #FF8B3D (laranja)
// - Background: #fffef2 (cream warm Aesop)
// =====================================================================

export default function PlanoRenatoView() {
  return (
    <>
      {/* CSS de impressão dedicado */}
      <style jsx global>{`
        :root {
          --plano-bg: #fffef2;
          --plano-text: #333333;
          --plano-text-soft: #555555;
          --plano-text-muted: #777777;
          --plano-blue: #1B3A87;
          --plano-blue-soft: #2D52A8;
          --plano-yellow: #F5BC2C;
          --plano-yellow-deep: #B88A1E;
          --plano-orange: #FF8B3D;
          --plano-green: #10b981;
          --plano-cream-card: #fbf8ec;
          --plano-warm-accent: #f7ecdd;
          --plano-border: rgba(51, 51, 51, 0.12);
        }

        body {
          background: var(--plano-bg) !important;
          color: var(--plano-text) !important;
        }

        .plano-doc {
          font-family: 'Inter', -apple-system, sans-serif;
          line-height: 1.6;
          color: var(--plano-text);
          background: var(--plano-bg);
        }

        .plano-doc h1, .plano-doc h2, .plano-doc h3 {
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

        .plano-doc ul {
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

        .plano-page {
          page-break-after: always;
        }

        .plano-section {
          page-break-inside: avoid;
          margin-bottom: 32px;
        }

        @media print {
          /* Esconde header/footer screen-only */
          .no-print {
            display: none !important;
          }

          body, .plano-doc {
            background: #fffef2 !important;
            color: #333 !important;
            font-size: 11pt;
          }

          @page {
            size: A4;
            margin: 18mm 14mm;
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

          .plano-doc p, .plano-doc li {
            font-size: 11pt;
          }

          .plano-section {
            page-break-inside: avoid;
          }

          .plano-page {
            page-break-after: always;
          }

          /* Garante que cores de fundo sejam impressas */
          * {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
        }
      `}</style>

      {/* Botão de impressão (oculto no print) */}
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
        {/* ═══════════════════════════════════════════════ */}
        {/* CAPA */}
        {/* ═══════════════════════════════════════════════ */}
        <section
          className="plano-page"
          style={{
            minHeight: "calc(100vh - 120px)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            padding: "60px 20px",
          }}
        >
          <Image
            src="/logo-aura.png"
            alt="Aura Energy"
            width={140}
            height={140}
            style={{ width: 120, height: 120, objectFit: "contain" }}
            unoptimized
          />

          <div
            style={{
              fontSize: 11,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.18em",
              color: "var(--plano-yellow-deep)",
              marginTop: 32,
              marginBottom: 16,
            }}
          >
            Plano de Negócio & Marketing
          </div>

          <h1
            style={{
              fontSize: 56,
              fontWeight: 800,
              lineHeight: 1.05,
              marginBottom: 16,
              color: "var(--plano-blue)",
              letterSpacing: "-0.02em",
            }}
          >
            Aura Energy
          </h1>

          <p
            style={{
              fontSize: 18,
              color: "var(--plano-text-soft)",
              maxWidth: 560,
              marginBottom: 60,
            }}
          >
            Estratégia digital completa para captar leads qualificados em Palmas
            e região, posicionar Aura como especialista solar e escalar a
            operação técnica da Brasfrio através de canais de mídia.
          </p>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 8,
              fontSize: 14,
              color: "var(--plano-text-soft)",
            }}
          >
            <div>
              <strong style={{ color: "var(--plano-blue)" }}>Para:</strong>{" "}
              Renato Edson · Aura Energy / Brasfrio
            </div>
            <div>
              <strong style={{ color: "var(--plano-blue)" }}>De:</strong>{" "}
              Eduardo Barros · Impulso Digital
            </div>
            <div>
              <strong style={{ color: "var(--plano-blue)" }}>Versão:</strong>{" "}
              1.0 · Maio de 2026
            </div>
          </div>

          <div
            style={{
              marginTop: 80,
              padding: 16,
              background: "var(--plano-cream-card)",
              borderRadius: 8,
              fontSize: 12,
              color: "var(--plano-text-muted)",
              maxWidth: 460,
            }}
          >
            Documento confidencial preparado especificamente para Renato Edson.
            Contém estratégia, pricing e plano de execução.
          </div>
        </section>

        {/* ═══════════════════════════════════════════════ */}
        {/* SUMÁRIO */}
        {/* ═══════════════════════════════════════════════ */}
        <section className="plano-section">
          <h2 style={{ fontSize: 32, marginBottom: 24 }}>Sumário</h2>
          <ol
            style={{
              fontSize: 14,
              lineHeight: 1.9,
              paddingLeft: 24,
              color: "var(--plano-text-soft)",
            }}
          >
            <li>Diagnóstico — onde a Aura está hoje</li>
            <li>Posicionamento estratégico</li>
            <li>3 pilares de copy (lei do conteúdo Aura)</li>
            <li>Plano de lançamento 14 dias</li>
            <li>Plano de tráfego pago Meta Ads</li>
            <li>Estratégia LP dual-domain</li>
            <li>Cronograma 90 dias</li>
            <li>KPIs e dashboard</li>
            <li>Investimento e pricing — 3 frentes</li>
            <li>Garantias e compromissos</li>
            <li>Riscos e mitigação</li>
            <li>Próximos passos imediatos</li>
          </ol>
        </section>

        <PageBreak />

        {/* ═══════════════════════════════════════════════ */}
        {/* 1 · DIAGNÓSTICO */}
        {/* ═══════════════════════════════════════════════ */}
        <section className="plano-section">
          <SectionNumber>1</SectionNumber>
          <h2>Diagnóstico</h2>

          <h3 style={{ marginTop: 24 }}>O que existe hoje</h3>
          <p>
            <strong>Brasfrio Engenharia Solar</strong> é a operação solar atual,
            via sociedade Brasfrio (refrigeração + energia, atende Palmas há
            anos). Renato é sócio fundador da Brasfrio e fundador da Aura Energy
            — esta nova frente foi criada para dedicar 100% ao solar
            fotovoltaico com identidade própria e canal digital próprio.
          </p>

          <ul>
            <li>
              <strong>Cobertura geográfica:</strong> Palmas + Paraíso +
              Luzimangues + Dianópolis + Colinas
            </li>
            <li>
              <strong>Faixa de instalação documentada:</strong> 6,84 a 14,64 kWp
              residencial + casos comerciais até 3.000 kWh/mês (B7KA Brahma)
            </li>
            <li>
              <strong>Marcas atuais:</strong> Solis e Huawei (inversores),
              fornecedor Belenergy (Goiânia)
            </li>
            <li>
              <strong>Highlight Carregadores EV:</strong> presente no perfil
              atual — abre cross-sell potencial pra Aura
            </li>
          </ul>

          <h3 style={{ marginTop: 24 }}>
            Análise digital (Brasfrio Solar Instagram — auditoria CIC 02/05/2026)
          </h3>
          <table>
            <thead>
              <tr>
                <th>Métrica</th>
                <th>Valor</th>
                <th>Observação</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Posts totais</td>
                <td>15</td>
                <td>Anos de operação · volume baixo</td>
              </tr>
              <tr>
                <td>Seguidores</td>
                <td>1.887</td>
                <td>Local Palmas — razoável</td>
              </tr>
              <tr>
                <td>Engagement médio</td>
                <td>0,48%</td>
                <td>Saudável seria 2-3%</td>
              </tr>
              <tr>
                <td>Última publicação</td>
                <td>03/02/2026</td>
                <td><strong>3 meses sem postar</strong></td>
              </tr>
              <tr>
                <td>Reel de maior engajamento</td>
                <td>50 likes (5,4× a média)</td>
                <td>Renato em câmera — formato testado e nunca repetido</td>
              </tr>
              <tr>
                <td>Buracos estratégicos</td>
                <td>92% não atendido</td>
                <td>Lei 14.300 / financiamento / cases / rural / educação</td>
              </tr>
            </tbody>
          </table>

          <div className="plano-callout plano-callout-blue">
            <strong>Conclusão:</strong> Brasfrio Solar funciona pelo network do
            Renato — quando network esgota, operação solar diminui. O perfil
            digital está semi-abandonado. O mercado de Palmas tem o palco vazio
            para uma marca solar especialista digital-first.
          </div>

          <h3 style={{ marginTop: 24 }}>A dor real (palavras do Renato)</h3>
          <div className="plano-quote">
            "Não consigo captar lead novo. A operação Brasfrio funciona por
            network social — quando o network esgota, a operação morre. Solar
            precisa de canal de mídia."
          </div>
          <p>
            <strong>
              A Aura nasce para resolver aquisição, não para criar marca por
              estética.
            </strong>{" "}
            É a camada digital, comercial e educativa por cima da operação
            física Brasfrio.
          </p>
        </section>

        <PageBreak />

        {/* ═══════════════════════════════════════════════ */}
        {/* 2 · POSICIONAMENTO */}
        {/* ═══════════════════════════════════════════════ */}
        <section className="plano-section">
          <SectionNumber>2</SectionNumber>
          <h2>Posicionamento estratégico</h2>

          <h3>Aura ↔ Brasfrio</h3>
          <p>
            A Aura é apresentada como a <strong>frente solar especialista</strong>,
            sustentada pela infraestrutura técnica da Brasfrio (mencionada como
            "estrutura técnica de anos em Palmas"). Aura tem identidade própria,
            foco 100% solar fotovoltaico, presença digital ativa e canal de
            aquisição dedicado.
          </p>

          <h3 style={{ marginTop: 24 }}>
            Diferenciação cravada (Aura vs concorrência Palmas)
          </h3>
          <table>
            <thead>
              <tr>
                <th style={{ width: "20%" }}>Eixo</th>
                <th style={{ width: "40%" }}>Concorrência Palmas</th>
                <th style={{ width: "40%" }}>Aura Energy</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Postura</td>
                <td>Corporativa-popular</td>
                <td>Especialista, consultiva</td>
              </tr>
              <tr>
                <td>Vocabulário</td>
                <td>Genérico (economia, sustentabilidade)</td>
                <td>
                  Técnico-acessível (Lei 14.300, Fio B, kWp, payback, TUSD,
                  Energisa)
                </td>
              </tr>
              <tr>
                <td>Hero figure</td>
                <td>Logo + produto</td>
                <td>Renato em câmera, prancheta na mão</td>
              </tr>
              <tr>
                <td>Densidade</td>
                <td>Templates sintéticos com emojis</td>
                <td>Dados duros + storytelling humano</td>
              </tr>
              <tr>
                <td>Urgência</td>
                <td>Genérica</td>
                <td>Regulatória factual (Fio B 60% em 2026)</td>
              </tr>
              <tr>
                <td>Cadência</td>
                <td>Bursts e desaparecer 3 meses</td>
                <td>Consistente (3 posts/sem + 1 reel/sem + stories diários)</td>
              </tr>
              <tr>
                <td>Prova social</td>
                <td>"Cliente em Palmas-TO" anônimo</td>
                <td>
                  "Marcus Vinícius, Plano Diretor Sul, R$ 720 → R$ 92" + foto
                </td>
              </tr>
            </tbody>
          </table>

          <h3 style={{ marginTop: 24 }}>Mercado-alvo (4 perfis)</h3>
          <ol>
            <li>
              <strong>Residencial classe média</strong> (conta R$ 300-700) —
              base de volume
            </li>
            <li>
              <strong>Comercial pequeno-médio</strong> (conta R$ 500-5.000) —
              ticket alto, cross-sell direto Brasfrio refrigeração
            </li>
            <li>
              <strong>Profissional liberal</strong> (médico, advogado,
              engenheiro) — R$ 2.500+ conta, busca investimento mais que
              economia
            </li>
            <li>
              <strong>Produtor rural</strong> — bombeamento + off-grid,
              segmento inexplorado pela Brasfrio
            </li>
          </ol>
        </section>

        <PageBreak />

        {/* ═══════════════════════════════════════════════ */}
        {/* 3 · PILARES DE COPY */}
        {/* ═══════════════════════════════════════════════ */}
        <section className="plano-section">
          <SectionNumber>3</SectionNumber>
          <h2>3 pilares de copy</h2>
          <p style={{ color: "var(--plano-text-soft)" }}>
            Lei do conteúdo Aura: todo post, reel, story e anúncio bate em pelo
            menos um destes pilares.
          </p>

          <PilarCard
            num="1"
            titulo="Especialista solar (vs generalista Palmas)"
            bullets={[
              "Brasfrio refrigera e faz solar. Aura é só solar.",
              "Mais de [X] instalações solar em Palmas e região",
              "Equipe 100% dedicada a fotovoltaico",
              "Engenheiro CREA-TO em todo projeto",
            ]}
            cor="var(--plano-blue)"
          />

          <PilarCard
            num="2"
            titulo="Tecnologia transparente"
            bullets={[
              "Calculadora ao vivo no site — você vê seu sistema antes de falar comigo",
              "Trabalho com Tier 1: Trina, Canadian, Jinko + inversores Growatt e Sungrow",
              "Garantia 25 anos no painel · 10 anos no inversor · ART em todo projeto",
              "App de monitoramento incluso no celular",
            ]}
            cor="var(--plano-yellow-deep)"
          />

          <PilarCard
            num="3"
            titulo="Atendimento direto comigo"
            bullets={[
              "Você fala diretamente com o Renato — sem call center, sem terceirizado",
              "Visita técnica gratuita em até 48h",
              "Suporte direto pelos próximos 25 anos",
              "Cliente da Aura é cliente pessoal do Renato",
            ]}
            cor="var(--plano-orange)"
          />
        </section>

        <PageBreak />

        {/* ═══════════════════════════════════════════════ */}
        {/* 4 · PLANO 14 DIAS */}
        {/* ═══════════════════════════════════════════════ */}
        <section className="plano-section">
          <SectionNumber>4</SectionNumber>
          <h2>Plano de lançamento — 14 dias</h2>
          <p style={{ color: "var(--plano-text-soft)" }}>
            Modelo validado em GB Nutrition (1ª venda Impulso, 15/04/2026)
            adaptado para o nicho solar.
          </p>

          <table style={{ marginTop: 16 }}>
            <thead>
              <tr>
                <th>Dia</th>
                <th>Tema central</th>
                <th>Formato</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><strong>D1 seg</strong></td><td>Nasce a Aura</td><td>Carrossel anúncio + stories</td></tr>
              <tr><td><strong>D2 ter</strong></td><td>Renato apresenta</td><td>Reel 1 (Renato em câmera)</td></tr>
              <tr><td><strong>D3 qua</strong></td><td>Lei 14.300 explicada</td><td>Reel 2 (educativo Fio B)</td></tr>
              <tr><td><strong>D4 qui</strong></td><td>Antes/depois conta luz</td><td>Stories cliente real</td></tr>
              <tr><td><strong>D5 sex</strong></td><td>Calculadora ao vivo</td><td>Story sequence + reel curto</td></tr>
              <tr><td><strong>D6 sáb</strong></td><td>Bastidores instalação</td><td>Reel 3 (equipe + drone)</td></tr>
              <tr><td><strong>D7 dom</strong></td><td>Janela Fio B + last call</td><td>Carrossel objeções</td></tr>
              <tr><td><strong>D8 seg</strong></td><td>Marcas Tier 1 educacional</td><td>Stories Trina/Canadian/Jinko</td></tr>
              <tr><td><strong>D9 ter</strong></td><td>Comercial vs Residencial</td><td>Stories 2 perfis</td></tr>
              <tr><td><strong>D10 qua</strong></td><td>Financiamento Solfácil</td><td>Stories cálculo parcela</td></tr>
              <tr><td><strong>D11 qui</strong></td><td>Mapa Palmas (cobertura)</td><td>Stories bairros atendidos</td></tr>
              <tr><td><strong>D12 sex</strong></td><td>Bastidores reciclo</td><td>Reel 3 reaproveitado + stories EPI</td></tr>
              <tr><td><strong>D13 sáb</strong></td><td>Cliente entrevistado</td><td>Stories vídeo cliente real</td></tr>
              <tr><td><strong>D14 dom</strong></td><td>Recap + balanço</td><td>Stories métricas + agradecimento</td></tr>
            </tbody>
          </table>

          <h3 style={{ marginTop: 24 }}>Cadência ongoing (após D14)</h3>
          <ul>
            <li>3 posts/semana (feed): 1 carrossel educativo + 1 case real + 1 institucional</li>
            <li>1 reel/semana (Renato grava bloco mensal de 4 reels em 1 dia)</li>
            <li>5 stories/semana (mínimo)</li>
            <li>1 carrossel objeção a cada 2 semanas</li>
          </ul>

          <div className="plano-callout">
            <strong>Roteiros completos prontos para produção:</strong> 3 reels +
            2 carrosseis + 70 stories detalhados (5/dia × 14 dias). Cada
            roteiro inclui hook, desenvolvimento, CTA, especificações técnicas,
            capa, copy do post e direção para gravação.
          </div>
        </section>

        <PageBreak />

        {/* ═══════════════════════════════════════════════ */}
        {/* 5 · TRÁFEGO PAGO */}
        {/* ═══════════════════════════════════════════════ */}
        <section className="plano-section">
          <SectionNumber>5</SectionNumber>
          <h2>Plano de tráfego pago — Meta Ads</h2>

          <h3>Setup inicial</h3>
          <ul>
            <li>Business Manager + Pixel + API Conversões</li>
            <li>
              Audiências:
              <ul>
                <li>Tráfego frio: Palmas-TO + região, 25-65 anos, interesses solares</li>
                <li>Lookalike: clientes Brasfrio (cross-sell — necessária autorização Renato)</li>
                <li>Retargeting: visitantes da LP nos últimos 30 dias</li>
              </ul>
            </li>
          </ul>

          <h3 style={{ marginTop: 24 }}>Estrutura de campanhas</h3>
          <table>
            <thead>
              <tr>
                <th>Campanha</th>
                <th>Objetivo</th>
                <th>% do budget</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Conversão</td>
                <td>Lead via formulário Tally /orcamento</td>
                <td>50%</td>
              </tr>
              <tr>
                <td>Tráfego LP</td>
                <td>Visitantes para simulador</td>
                <td>25%</td>
              </tr>
              <tr>
                <td>Retargeting</td>
                <td>Reabordar visitantes LP (90d)</td>
                <td>25%</td>
              </tr>
            </tbody>
          </table>

          <h3 style={{ marginTop: 24 }}>Investimento Meta sugerido</h3>
          <table>
            <thead>
              <tr>
                <th>Cenário</th>
                <th>Investimento mensal</th>
                <th>Leads esperados</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Mínimo</td>
                <td>R$ 1.500</td>
                <td>~10-30 leads</td>
              </tr>
              <tr>
                <td>Recomendado</td>
                <td>R$ 2.500</td>
                <td>~25-50 leads</td>
              </tr>
              <tr>
                <td>Agressivo</td>
                <td>R$ 4.000</td>
                <td>~40-80 leads</td>
              </tr>
            </tbody>
          </table>

          <h3 style={{ marginTop: 24 }}>Métrica-alvo</h3>
          <ul>
            <li><strong>Custo por lead:</strong> R$ 30-150 (varia conforme criativo)</li>
            <li><strong>Conversão lead → visita técnica:</strong> 30%</li>
            <li><strong>Conversão visita → fechamento:</strong> 30-40%</li>
          </ul>
        </section>

        <PageBreak />

        {/* ═══════════════════════════════════════════════ */}
        {/* 6 · DUAL DOMAIN */}
        {/* ═══════════════════════════════════════════════ */}
        <section className="plano-section">
          <SectionNumber>6</SectionNumber>
          <h2>Estratégia LP dual-domain</h2>

          <p>
            Modelo extraído da operação Allurium/Rennora (D2C de sucesso): manter
            site institucional (orgânico, SEO, retenção) separado da LP funnel
            (paid ads, single CTA, urgência).
          </p>

          <table style={{ marginTop: 16 }}>
            <thead>
              <tr>
                <th>Domínio</th>
                <th>Função</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>auraenergy.com.br</strong></td>
                <td>Site institucional · SEO · catálogo · destino orgânico</td>
              </tr>
              <tr>
                <td>
                  <strong>try.auraenergy.com.br/economize</strong>
                </td>
                <td>LP funnel single CTA · destino paid ads · urgência</td>
              </tr>
            </tbody>
          </table>

          <p style={{ marginTop: 16, color: "var(--plano-text-soft)" }}>
            Os dois domínios usam o mesmo Pixel Meta + GA4 + Hotjar. Cliente
            que veio de orgânico não polui dados de paid e vice-versa. Quando o
            cliente clica em anúncio, vai direto pra LP funnel otimizada para
            conversão.
          </p>
        </section>

        {/* ═══════════════════════════════════════════════ */}
        {/* 7 · CRONOGRAMA 90 DIAS */}
        {/* ═══════════════════════════════════════════════ */}
        <section className="plano-section">
          <SectionNumber>7</SectionNumber>
          <h2>Cronograma 90 dias</h2>

          <h3>Mês 1 — Lançamento</h3>
          <ul>
            <li>Semana 1: configurações (Insta @auraenergy, WhatsApp Business, Google Meu Negócio, Pixel Meta, GA4, Hotjar)</li>
            <li>Semana 2: lançamento de marca (14 dias)</li>
            <li>Semana 3-4: tráfego pago ativo + ajustes criativos</li>
          </ul>

          <h3>Mês 2 — Tração</h3>
          <ul>
            <li>Otimização contínua dos criativos</li>
            <li>1 reel/semana com Renato em câmera</li>
            <li>Primeiros leads qualificados via Meta Ads</li>
            <li>Primeira venda fechada via funil digital (meta)</li>
          </ul>

          <h3>Mês 3 — Escala</h3>
          <ul>
            <li>3-5 vendas fechadas/mês via funil</li>
            <li>Início RadarPRO B2B (10-20 leads B2B/mês)</li>
            <li>Depoimentos formais Renato + clientes</li>
            <li>LP funnel separada (try.auraenergy.com.br) se já tiver domínio</li>
          </ul>
        </section>

        <PageBreak />

        {/* ═══════════════════════════════════════════════ */}
        {/* 8 · KPIs */}
        {/* ═══════════════════════════════════════════════ */}
        <section className="plano-section">
          <SectionNumber>8</SectionNumber>
          <h2>KPIs e dashboard</h2>

          <table>
            <thead>
              <tr>
                <th>Métrica</th>
                <th>Hoje</th>
                <th>Meta 30d</th>
                <th>Meta 60d</th>
                <th>Meta 90d</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Posts Insta/sem</td><td>0</td><td>5</td><td>5</td><td>5</td></tr>
              <tr><td>Engagement médio</td><td>0,48%</td><td>1,5%</td><td>2%</td><td>2,5%+</td></tr>
              <tr><td>Followers @auraenergy</td><td>0</td><td>300</td><td>600</td><td>1.000+</td></tr>
              <tr><td>Leads Meta Ads/mês</td><td>0</td><td>20-40</td><td>40-60</td><td>60-100</td></tr>
              <tr><td>Custo por lead</td><td>—</td><td>R$ 50-150</td><td>R$ 40-100</td><td>R$ 30-80</td></tr>
              <tr><td>Visitas técnicas/mês</td><td>—</td><td>8-15</td><td>15-25</td><td>20-30</td></tr>
              <tr><td><strong>Vendas fechadas/mês</strong></td><td>—</td><td><strong>1-2</strong></td><td><strong>2-4</strong></td><td><strong>3-5</strong></td></tr>
              <tr><td>Receita Aura/mês</td><td>—</td><td>R$ 20-40k</td><td>R$ 40-80k</td><td>R$ 60-100k</td></tr>
            </tbody>
          </table>

          <h3 style={{ marginTop: 24 }}>Cadência de revisão</h3>
          <ul>
            <li><strong>Diária:</strong> atualização rápida de cases/leads</li>
            <li><strong>Semanal (sextas):</strong> revisão de KPIs + ajustes criativos</li>
            <li><strong>Quinzenal:</strong> revisão estratégica conjunta (45 min)</li>
            <li><strong>Mensal:</strong> relatório formal + reunião 1h</li>
            <li><strong>Trimestral:</strong> depoimento Renato em vídeo</li>
          </ul>
        </section>

        <PageBreak />

        {/* ═══════════════════════════════════════════════ */}
        {/* 9 · INVESTIMENTO E PRICING */}
        {/* ═══════════════════════════════════════════════ */}
        <section className="plano-section">
          <SectionNumber>9</SectionNumber>
          <h2>Investimento e pricing — 3 frentes</h2>

          <FrenteBox
            num="1"
            titulo="LP institucional (já entregue)"
            valor="R$ 1.200"
            tipo="Setup pontual · à vista PIX ou 3x cartão"
            inclui={[
              "Landing page em produção (auraenergy.vercel.app)",
              "Calculadora de economia interativa",
              "20 seções com dados técnicos reais (Lei 14.300, Energisa-TO, Solfácil)",
              "5 artigos no blog com fontes (ABSOLAR, ANEEL, Canal Solar)",
              "Botão WhatsApp flutuante",
              "Calculadora completa /orcamento via Tally",
              "1 mês de ajustes pós-pagamento",
              "Bônus: domínio auraenergy.com.br comprado e apontado",
            ]}
            cor="var(--plano-blue)"
          />

          <FrenteBox
            num="2"
            titulo="Instagram + Tráfego (mensalidade)"
            valor="R$ 1.497 a R$ 1.997 / mês"
            tipo="Mensalidade · mínimo 6 meses · pode pausar com 30d aviso após mês 3"
            inclui={[
              "Gestão de tráfego Meta Ads (não inclui investimento Meta)",
              "12 posts/mês Instagram (3/semana feed)",
              "4 reels/mês (1/semana — Renato grava, Impulso edita)",
              "8 stories/semana (Impulso fornece pauta, Renato executa)",
              "Manutenção LP (1 atualização/mês)",
              "Reunião mensal de revisão (45 min)",
              "Dashboard semanal por WhatsApp",
            ]}
            extra="Investimento Meta separado: R$ 1.500-3.000/mês (vai direto pra conta Meta do Renato)"
            cor="var(--plano-orange)"
          />

          <FrenteBox
            num="3"
            titulo="RadarPRO Solar Palmas (performance)"
            valor="3% a 7% sobre venda"
            tipo="Comissão sobre venda fechada via lead RadarPRO · sem mensalidade · sem fixo"
            inclui={[
              "Sistema operado 100% pela Impulso nos bastidores",
              "Cliente NÃO compra o RadarPRO — só recebe leads B2B qualificados",
              "10-20 leads B2B/mês (comércios, clínicas, restaurantes, indústrias) com playbook de abordagem",
              "Tracking via planilha compartilhada + reunião quinzenal de pipeline",
              "Pago somente após Renato confirmar fechamento da venda",
            ]}
            cor="var(--plano-yellow-deep)"
          />

          <div
            className="plano-callout plano-callout-green"
            style={{ marginTop: 24 }}
          >
            <strong>Resumo financeiro:</strong> Frente 1 paga uma vez · Frente 2
            é mensalidade previsível · Frente 3 é incentivo atrelado a
            resultado. Total mensal típico (após mês 1): R$ 1.497/mês fixo +
            comissão variável sobre vendas fechadas. Cada venda solar de R$
            20.000 gera R$ 600-1.400 de comissão Impulso.
          </div>
        </section>

        <PageBreak />

        {/* ═══════════════════════════════════════════════ */}
        {/* 10 · GARANTIAS */}
        {/* ═══════════════════════════════════════════════ */}
        <section className="plano-section">
          <SectionNumber>10</SectionNumber>
          <h2>Garantias e compromissos</h2>

          <h3>Para você (Renato)</h3>
          <ul>
            <li>7 dias de garantia incondicional pós-setup Frente 1</li>
            <li>Suporte WhatsApp direto comigo (Eduardo Barros)</li>
            <li>Mensalidade Frente 2 pode pausar com 30 dias de aviso após mês 3</li>
            <li>Sem multa de cancelamento após mês 3</li>
            <li>Briefing privado para calibrar expectativa antes de fechar Frente 2</li>
          </ul>

          <h3 style={{ marginTop: 24 }}>Em troca, da Aura para a Impulso</h3>
          <ul>
            <li>Autorização de uso como case Impulso Digital</li>
            <li>Depoimento em vídeo após 3º mês (vira anúncio Impulso)</li>
            <li>Indicação para sua rede em Palmas (academias, comércio)</li>
            <li>Acesso ao histórico de instalações Brasfrio para cravar provas reais</li>
          </ul>
        </section>

        {/* ═══════════════════════════════════════════════ */}
        {/* 11 · RISCOS */}
        {/* ═══════════════════════════════════════════════ */}
        <section className="plano-section">
          <SectionNumber>11</SectionNumber>
          <h2>Riscos e mitigação</h2>

          <table>
            <thead>
              <tr>
                <th>Risco</th>
                <th>Mitigação</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Renato não grava reels</td>
                <td>Bloco mensal de gravação (1 dia, 4 reels) — Impulso facilita</td>
              </tr>
              <tr>
                <td>Conta Insta @auraenergy não cresce</td>
                <td>Cadência consistente + tráfego pago + RadarPRO B2B alimentando</td>
              </tr>
              <tr>
                <td>Lead vem mas não fecha</td>
                <td>Calibrar copy + qualificação Tally + treinamento em pitch</td>
              </tr>
              <tr>
                <td>Investimento Meta mal alocado</td>
                <td>Otimização semanal + dashboard + reunião quinzenal</td>
              </tr>
              <tr>
                <td>Cancelamento de mensalidade após mês 3</td>
                <td>RadarPRO B2B é gancho de continuidade — sem nós, sem leads</td>
              </tr>
              <tr>
                <td>Brasfrio "engole" Aura digitalmente</td>
                <td>Posicionamento cravado: Aura é especialista, Brasfrio é estrutura</td>
              </tr>
            </tbody>
          </table>
        </section>

        <PageBreak />

        {/* ═══════════════════════════════════════════════ */}
        {/* 12 · PRÓXIMOS PASSOS */}
        {/* ═══════════════════════════════════════════════ */}
        <section className="plano-section">
          <SectionNumber>12</SectionNumber>
          <h2>Próximos passos</h2>

          <h3>Para você (Renato), após validar este plano</h3>
          <ol>
            <li>
              Validar pricing Frente 2 (R$ 1.497 ou R$ 1.997/mês — recomendamos
              R$ 1.497 fundador)
            </li>
            <li>Confirmar investimento Meta inicial (R$ 1.500-3.000/mês)</li>
            <li>
              Agendar 1ª reunião para alinhar fluxo de gravação dos reels (você
              em câmera é core da estratégia)
            </li>
            <li>
              Decidir cenário Aura ↔ Brasfrio (recomendado: B — sustentação
              técnica)
            </li>
            <li>
              Liberar dados para Aura usar (n° instalações, anos Brasfrio,
              CREA, base clientes para Lookalike Meta)
            </li>
          </ol>

          <h3 style={{ marginTop: 24 }}>Para a Impulso, após Renato fechar Frente 1</h3>
          <ol>
            <li>Trocar placeholders da LP por dados reais</li>
            <li>Criar Insta @auraenergy + Google Meu Negócio + WhatsApp Business</li>
            <li>Configurar Pixel Meta + GA4 + Hotjar</li>
            <li>Comprar auraenergy.com.br (~R$ 60/ano)</li>
            <li>Marcar 1ª reunião de execução</li>
          </ol>

          <h3 style={{ marginTop: 24 }}>Para a Impulso, após Renato fechar Frente 2</h3>
          <ol>
            <li>Setup Meta Ads (Business Manager + Pixel + API)</li>
            <li>6-8 criativos iniciais (5 dos atuais + 3 novos)</li>
            <li>Lançamento de marca 14 dias</li>
            <li>Configurar RadarPRO Solar Palmas (módulo + critérios + envio)</li>
            <li>Dashboard semanal ativo</li>
          </ol>

          <div
            className="plano-callout"
            style={{ marginTop: 32 }}
          >
            <strong>Resumo executivo:</strong> A Aura Energy começa hoje com o
            site institucional + briefing entregues. Cada frente comercial é
            um upgrade lógico da anterior. Em 90 dias, a Aura terá presença
            digital ativa, fluxo de leads qualificados via Meta Ads e RadarPRO
            B2B alimentando vendas comerciais. ROI esperado: cada venda solar
            fechada paga 4-6 meses de operação digital. Depois disso, todo lead
            novo é margem.
          </div>
        </section>

        {/* ═══════════════════════════════════════════════ */}
        {/* RODAPÉ FINAL */}
        {/* ═══════════════════════════════════════════════ */}
        <section
          style={{
            marginTop: 48,
            paddingTop: 32,
            borderTop: "2px solid var(--plano-yellow)",
            textAlign: "center",
            color: "var(--plano-text-muted)",
            fontSize: 13,
          }}
        >
          <Image
            src="/logo-aura.png"
            alt=""
            width={64}
            height={64}
            style={{ width: 50, height: 50, objectFit: "contain", margin: "0 auto 16px" }}
            unoptimized
          />
          <div style={{ marginBottom: 8 }}>
            <strong style={{ color: "var(--plano-blue)" }}>
              Plano apresentado por:
            </strong>
            <br />
            Eduardo Barros · Impulso Digital · {new Date().getFullYear()}
          </div>
          <div style={{ fontSize: 11, marginTop: 16 }}>
            impulsodigital063.com · WhatsApp (63) 99292-0080
          </div>
        </section>
      </main>
    </>
  );
}

// =====================================================================

function SectionNumber({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: 44,
        height: 44,
        borderRadius: 12,
        background:
          "linear-gradient(135deg, #F5BC2C 0%, #FF8B3D 100%)",
        color: "#0e2152",
        fontWeight: 800,
        fontSize: 18,
        marginBottom: 12,
        boxShadow: "0 6px 16px -6px rgba(245, 188, 44, 0.40)",
      }}
    >
      {children}
    </div>
  );
}

function PageBreak() {
  return <div className="plano-page" style={{ height: 0 }} />;
}

function PilarCard({
  num,
  titulo,
  bullets,
  cor,
}: {
  num: string;
  titulo: string;
  bullets: string[];
  cor: string;
}) {
  return (
    <div
      style={{
        marginTop: 16,
        padding: "20px 24px",
        background: "var(--plano-cream-card)",
        borderLeft: `4px solid ${cor}`,
        borderRadius: 8,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          marginBottom: 10,
        }}
      >
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: 28,
            height: 28,
            borderRadius: "50%",
            background: cor,
            color: "white",
            fontWeight: 800,
            fontSize: 13,
          }}
        >
          {num}
        </span>
        <h3 style={{ margin: 0, color: cor, fontSize: 17 }}>{titulo}</h3>
      </div>
      <ul style={{ marginTop: 8 }}>
        {bullets.map((b) => (
          <li key={b} style={{ color: "var(--plano-text-soft)" }}>
            {b}
          </li>
        ))}
      </ul>
    </div>
  );
}

function FrenteBox({
  num,
  titulo,
  valor,
  tipo,
  inclui,
  extra,
  cor,
}: {
  num: string;
  titulo: string;
  valor: string;
  tipo: string;
  inclui: string[];
  extra?: string;
  cor: string;
}) {
  return (
    <div
      style={{
        marginTop: 20,
        border: `2px solid ${cor}`,
        borderRadius: 12,
        padding: 24,
        background: "white",
        pageBreakInside: "avoid",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          marginBottom: 4,
        }}
      >
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: 36,
            height: 36,
            borderRadius: 10,
            background: cor,
            color: "white",
            fontWeight: 800,
            fontSize: 16,
          }}
        >
          {num}
        </span>
        <h3 style={{ margin: 0, color: cor }}>{titulo}</h3>
      </div>

      <div
        style={{
          fontSize: 28,
          fontWeight: 800,
          color: cor,
          margin: "12px 0 4px",
          letterSpacing: "-0.01em",
        }}
      >
        {valor}
      </div>
      <p style={{ fontSize: 12, color: "var(--plano-text-muted)", marginBottom: 14 }}>
        {tipo}
      </p>

      <div style={{ fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--plano-text-muted)", marginBottom: 6 }}>
        Inclui:
      </div>
      <ul style={{ marginTop: 4 }}>
        {inclui.map((i) => (
          <li key={i} style={{ color: "var(--plano-text-soft)" }}>{i}</li>
        ))}
      </ul>

      {extra && (
        <div
          style={{
            marginTop: 12,
            padding: 12,
            background: "var(--plano-warm-accent)",
            borderRadius: 6,
            fontSize: 12,
            color: "var(--plano-text-soft)",
          }}
        >
          {extra}
        </div>
      )}
    </div>
  );
}
