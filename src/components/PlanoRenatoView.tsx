"use client";

import Image from "next/image";

// =====================================================================
// PLANO DE NEGÓCIO & MARKETING AURA ENERGY — v4.0
// Refundido B2B-first · 2026-05-06 · pré-reunião 06/05
// Otimizado pra impressão (Ctrl+P → Salvar como PDF)
//
// Decisões cromáticas (Eduardo: SEM preto, impressora não imprime):
// - Texto principal: #1B3A87 (azul Aura)
// - Headlines: #1B3A87 (azul Aura)
// - Destaques: #F5BC2C (amarelo) + #FF8B3D (laranja)
// - Background: #fffef2 (cream warm Aesop)
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
              content: "Aura Energy · Plano de Negócio v4.0 · página "
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

      {/* Botões fixos no topo (oculto no print) */}
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
        {/* ═══════════════════════ CAPA ═══════════════════════ */}
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
            Consultoria Estratégica · Plano de Negócio & Marketing
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
              maxWidth: 580,
              marginBottom: 40,
            }}
          >
            Plano consultivo entregue ao engenheiro responsável <strong>Renato
            Edson</strong> pra orientar os próximos 90 dias da operação Aura
            Energy em Tocantins — pivot B2B, posicionamento premium, vácuos
            de mercado mapeados, ações operacionais cravadas.
          </p>

          <div
            style={{
              background: "var(--plano-cream-card)",
              border: "1px solid var(--plano-border)",
              borderRadius: 16,
              padding: "20px 32px",
              maxWidth: 480,
            }}
          >
            <div
              style={{
                fontSize: 11,
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                color: "var(--plano-yellow-deep)",
                marginBottom: 8,
              }}
            >
              Versão · Data · Autoria
            </div>
            <div style={{ fontSize: 14, color: "var(--plano-text)" }}>
              <strong>v4.0</strong> · refundido B2B-first · 2026-05-06
              <br />
              Por <strong>Impulso Digital</strong> — Eduardo Barros + Verbo
              (Claude Opus 4.7) + CIC
            </div>
          </div>

          <div
            style={{
              marginTop: 48,
              fontSize: 13,
              color: "var(--plano-text-muted)",
              maxWidth: 480,
            }}
          >
            Documento estratégico confidencial. Uso restrito da Aura Energy
            e da Impulso Digital.
          </div>
        </section>

        {/* ═══════════════════════ SUMÁRIO ═══════════════════════ */}
        <section className="plano-page plano-section">
          <h2 style={{ fontSize: 28, marginBottom: 24 }}>Sumário</h2>
          <ol style={{ fontSize: 15, lineHeight: 2, paddingLeft: 20 }}>
            <li><strong>Onde estamos</strong> — resumo executivo</li>
            <li><strong>O mercado que a Aura vai atacar</strong> — TO, concorrência, vantagens fiscais, 7 gaps</li>
            <li><strong>Posicionamento estratégico</strong> — Aura ↔ Brasfrio, mercado-alvo B2B-first, 3 pilares</li>
            <li><strong>Arquitetura digital</strong> — LPs segmentadas, painel Renato, diagnóstico, 6 artes</li>
            <li><strong>Funil dual</strong> — B2B prioridade + B2C base</li>
            <li><strong>Conteúdo</strong> — lançamento 14 dias + cadência ongoing</li>
            <li><strong>Cronograma 90 dias</strong></li>
            <li><strong>Projeções financeiras</strong> — mix B2C + B2B nos 3 cenários</li>
            <li><strong>Pricing</strong> — 3 frentes + plano B</li>
            <li><strong>KPIs e dashboard</strong></li>
            <li><strong>Info-produto B2B FASE 2</strong> — M+12 em diante</li>
            <li><strong>Garantias, riscos e LGPD</strong></li>
            <li><strong>Próximos passos imediatos</strong></li>
            <li><strong>Ideias de agregação à operação Aura</strong></li>
            <li><strong>Documentos relacionados</strong></li>
          </ol>
        </section>

        {/* ═══════════════════════ 1. ONDE ESTAMOS ═══════════════════════ */}
        <section className="plano-section">
          <h2 style={{ fontSize: 28 }}>1 · Onde estamos</h2>

          <p>
            A Aura Energy é a frente solar especialista do Renato Edson,
            sustentada pela infraestrutura técnica da <strong>Brasfrio</strong>
            {" "}(refrigeração + energia, anos de operação em Palmas — Renato
            é sócio fundador). A Brasfrio gera o caixa hoje, mas a operação
            roda por <strong>network social esgotando</strong>: o
            @brasfrio_engsolar parou de postar há 3 meses, o lead orgânico
            secou, e a sociedade limita a ambição.
          </p>

          <h3 style={{ fontSize: 18, marginTop: 24 }}>
            Aura nasce pra resolver duas coisas ao mesmo tempo
          </h3>
          <ol>
            <li><strong>Aquisição digital</strong> — canal de mídia que não depende de network físico</li>
            <li><strong>Pivot estratégico do Renato</strong> — sair do volume residencial pequeno e atacar contratos vantajosos B2B (indústria, comércio, rural)</li>
          </ol>

          <h3 style={{ fontSize: 18, marginTop: 24 }}>O que já existe</h3>
          <ul>
            <li>LP v6 em produção · <code>auraenergy.vercel.app</code> · auditoria CIC factual aplicada</li>
            <li>Análise competitiva CIC dos 6 concorrentes Palmas + diagnóstico Brasfrio (3 meses parado, 92% dos buracos estratégicos abertos)</li>
            <li>Pesquisa de mercado verificada (469 MW TO · 44k+ conexões · Lei 14.300 · Programa Palmas Solar · tarifa Energisa · agronegócio TO)</li>
            <li>Estrutura comercial 3 frentes definida (R$ 1.200 setup + mensalidade + comissão)</li>
            <li>6 artes Instagram prontas (copy + briefing visual) pra primeiros 30 dias</li>
            <li>Direção info-produto B2B FASE 2 (estruturada via CIC depurando curso Tenda Solar)</li>
          </ul>

          <div className="plano-callout plano-callout-blue">
            <strong>Reunião 06/05 — objetivo único:</strong> fechar Frente 1
            R$ 1.200. Frentes 2 e 3 entram como semente pro futuro, sem
            cravar formal.
          </div>
        </section>

        {/* ═══════════════════════ 2. O MERCADO ═══════════════════════ */}
        <section className="plano-section">
          <h2 style={{ fontSize: 28 }}>2 · O mercado que a Aura vai atacar</h2>

          <h3 style={{ fontSize: 18, marginTop: 24 }}>2.1 Tocantins solar em números</h3>
          <table>
            <thead>
              <tr><th>Métrica</th><th>Valor</th><th>Fonte</th></tr>
            </thead>
            <tbody>
              <tr><td>Potência solar instalada TO</td><td>469 MW</td><td>Sicredi / ANEEL 2025</td></tr>
              <tr><td>Conexões GD ativas</td><td>44.000+</td><td>ANEEL 2025</td></tr>
              <tr><td>Novas conexões em 2025</td><td>3.888</td><td>ANEEL 2025</td></tr>
              <tr><td>% residencial (TO vs 79% BR)</td><td>85%</td><td>Canal Solar</td></tr>
              <tr><td>Crescimento BR/ano</td><td>+25%</td><td>Origo Energia 2025</td></tr>
              <tr><td>Posição BR busca &quot;solar empresas&quot;</td><td>2° lugar</td><td>Google Trends</td></tr>
              <tr><td>Estimativa Palmas-TO</td><td>~8.500 conexões (~7,7%)</td><td>derivado ANEEL</td></tr>
            </tbody>
          </table>

          <div className="plano-callout">
            <strong>Tradução pro Renato:</strong> mercado <strong>não está
            saturado</strong>, cresce 25%/ano, e Tocantins é o 2º estado
            mais buscado em solar pra empresas no Brasil. Janela aberta pra
            quem ocupar primeiro.
          </div>

          <h3 style={{ fontSize: 18, marginTop: 32 }}>2.2 Concorrência local mapeada</h3>
          <table>
            <thead>
              <tr><th>Empresa</th><th>Capacidade</th><th>Insta</th><th>Comunicação</th></tr>
            </thead>
            <tbody>
              <tr><td>ARASOL</td><td>2.500+ kWp · 100+ projetos</td><td>1.540 followers</td><td>Menciona Programa Palmas Solar mas não destaca</td></tr>
              <tr><td>Palmas Energia Solar</td><td>6.000+ kWp (líder em volume)</td><td>@palmasenergiasolar_to</td><td>Loja física + financiamento — comunicação fraca</td></tr>
              <tr><td>Unità Soluções</td><td>atende 5 estados</td><td>a confirmar</td><td>Escala regional, sem pegada Palmas</td></tr>
              <tr><td>Ferpam Energia Solar</td><td>sede como case</td><td>a confirmar</td><td>Selo Solar Prefeitura</td></tr>
              <tr><td>UNISOL</td><td>a confirmar</td><td>menor</td><td>—</td></tr>
              <tr><td>Brasfrio (Renato hoje)</td><td>—</td><td>1.887, parado 3 meses</td><td>—</td></tr>
            </tbody>
          </table>

          <h3 style={{ fontSize: 16, marginTop: 24 }}>Insights da análise competitiva</h3>
          <ol>
            <li><strong>Nenhum concorrente passa de 2.000 seguidores</strong> — mercado digital Palmas vazio. Quem fizer marketing direito vira líder em 6-12 meses.</li>
            <li><strong>Ninguém tem calculadora pública</strong> — todos forçam orçamento. Aura já tem <code>/economia-resultado</code> rodando (vantagem ativa).</li>
            <li><strong>Programa Palmas Solar mal comunicado</strong> — Aura pode dominar a narrativa &quot;consultor full-service do benefício IPTU&quot;.</li>
            <li><strong>Palmas Energia Solar tem volume mas comunicação fraca</strong> — janela pra Aura assumir autoridade digital sem brigar por preço.</li>
            <li><strong>Brasfrio parou há 3 meses</strong> — reset de marca pra Aura é decisão certa: leva legado técnico, deixa inércia digital.</li>
          </ol>

          <h3 style={{ fontSize: 18, marginTop: 32 }}>2.3 Vantagens fiscais e regulatórias</h3>

          <div className="plano-callout plano-callout-green">
            <strong>Programa Palmas Solar (Lei 327/2015):</strong> desconto
            IPTU até <strong>60% no período 2026-2030</strong>. Termina em
            2035. ITBI e ISSQN também têm desconto. Quase nenhum concorrente
            comunica ativamente — Aura pode ser <em>&quot;a empresa que
            cuida da documentação no Resolve Palmas pra você&quot;</em>.
          </div>

          <div className="plano-callout">
            <strong>Lei 14.300 — Fio B:</strong> cobrança escalonada da TUSD
            sobre energia injetada. Em 2026 já está em <strong>60%</strong>,
            sobe pra 75% em 2027 e 100% em 2029. Sistemas instalados antes
            de 06/01/2023 ficam isentos até 2045.
            <br /><br />
            <em>Argumento de venda real:</em> &quot;cada ano que adia = mais
            economia perdida ao longo de 25 anos.&quot;
          </div>

          <p>
            <strong>Tarifa Energisa-TO:</strong> R$ 0,92-0,98/kWh com
            tributos (REH ANEEL 3.479/2025). Reajuste de jul/25 foi +12,31%.
            Bandeira amarela em maio/2026. Próximo reajuste: julho/2026.
          </p>

          <p>
            <strong>HSP Palmas-TO:</strong> 5,9 kWh/m²/dia — entre os
            maiores do Brasil. Sistema produz mais aqui do que em 80% do
            país.
          </p>

          <h3 style={{ fontSize: 18, marginTop: 32 }}>2.4 Os 7 gaps competitivos que a Aura vai ocupar</h3>
          <ol>
            <li><strong>Presença digital fraca</strong> — liderança digital em 12 meses é alcançável.</li>
            <li><strong>Programa Palmas Solar mal comunicado</strong> — Aura vira &quot;consultor full-service&quot;.</li>
            <li><strong>Educação cliente final inexistente</strong> — diagnóstico pré-reunião + info-produto B2B atacam isso.</li>
            <li><strong>Transparência de preços ausente</strong> — Aura publica faixa por kit + calculadora aberta.</li>
            <li><strong>Garantia + assistência pós-venda só na palavra</strong> — Plano de Acompanhamento Anual (R$ 200-400/cliente).</li>
            <li><strong>Sem nicho vertical</strong> — Aura pode dominar rural/agronegócio primeiro.</li>
            <li><strong>B2B com modelo assinatura ausente</strong> — &quot;fazenda solar compartilhada&quot; (geração distribuída remota).</li>
          </ol>
        </section>

        {/* ═══════════════════════ 3. POSICIONAMENTO ═══════════════════════ */}
        <section className="plano-section">
          <h2 style={{ fontSize: 28 }}>3 · Posicionamento estratégico</h2>

          <h3 style={{ fontSize: 18, marginTop: 24 }}>3.1 Aura ↔ Brasfrio</h3>
          <p>
            <strong>Cenário cravado:</strong> Aura é a frente solar
            especialista, sustentada pela infra técnica da Brasfrio.
            Brasfrio é mencionada como &quot;estrutura técnica de X anos em
            Palmas&quot;. Aura tem identidade própria, 100% solar, sem o
            ruído da refrigeração/EV/serviços que diluem foco no Insta da
            Brasfrio.
          </p>

          <table>
            <thead><tr><th>O que Aura LEVA da Brasfrio</th><th>O que Aura DEIXA da Brasfrio</th></tr></thead>
            <tbody>
              <tr>
                <td>Legado técnico (anos de instalações), credenciais (CREA, ART), portfólio físico (cases pra fotografar), equipe operacional</td>
                <td>Inércia digital, comunicação corporativa-popular, posicionamento &quot;tudo um pouco&quot;</td>
              </tr>
            </tbody>
          </table>

          <h3 style={{ fontSize: 18, marginTop: 32 }}>3.2 Diferenciação cravada</h3>
          <table>
            <thead><tr><th>Eixo</th><th>Concorrência Palmas</th><th>Aura Energy</th></tr></thead>
            <tbody>
              <tr><td>Postura</td><td>Corporativa-popular</td><td>Especialista/consultiva</td></tr>
              <tr><td>Vocabulário</td><td>Genérico (economia, sustentabilidade)</td><td>Técnico-acessível (Lei 14.300, Fio B, kWp, payback, TUSD)</td></tr>
              <tr><td>Hero figure</td><td>Logo + produto</td><td>Renato em câmera, prancheta na mão</td></tr>
              <tr><td>Densidade</td><td>Templates sintéticos com emojis</td><td>Dados duros + storytelling humano</td></tr>
              <tr><td>Urgência</td><td>Genérica</td><td>Regulatória factual (Fio B 60% em 2026, sobe 2027)</td></tr>
              <tr><td>Cadência</td><td>Bursts + sumir 3 meses</td><td>3 posts/sem + 1 reel/sem + stories diários</td></tr>
              <tr><td>Prova social</td><td>&quot;Cliente em Palmas&quot; anônimo</td><td>&quot;Marcus Vinícius, Plano Diretor Sul, R$ 720→R$ 92&quot; + foto</td></tr>
            </tbody>
          </table>

          <h3 style={{ fontSize: 18, marginTop: 32 }}>3.3 Mercado-alvo em ordem de prioridade B2B-first</h3>
          <table>
            <thead><tr><th>#</th><th>Perfil</th><th>Ticket-alvo</th><th>LP destino</th></tr></thead>
            <tbody>
              <tr><td><strong>1</strong></td><td>Comércio mid (supermercado, padaria, posto, clínica)</td><td>R$ 50-150k</td><td><code>/comercio</code></td></tr>
              <tr><td><strong>2</strong></td><td>Indústria pequena/média (frigorífico, cerâmica, marcenaria)</td><td>R$ 150-800k</td><td><code>/industria</code></td></tr>
              <tr><td><strong>3</strong></td><td>Produtor rural (irrigação, pivô, aviário, granja)</td><td>R$ 80-300k</td><td><code>/fazenda</code></td></tr>
              <tr><td>4</td><td>Residencial mid-high (conta R$ 600+/mês)</td><td>R$ 25-50k</td><td><code>/casa</code></td></tr>
            </tbody>
          </table>

          <div className="plano-callout plano-callout-blue">
            <strong>Decisão estratégica:</strong> B2B (perfis #1-3) recebe
            prioridade #1 de prospecção e investimento estratégico.
            Residencial (#4) roda como base de volume com Meta Ads
            geofence Palmas.
          </div>

          <h3 style={{ fontSize: 18, marginTop: 32 }}>3.4 3 pilares de copy</h3>
          <p>Todo conteúdo bate em pelo menos 1:</p>

          <div className="plano-callout">
            <strong>Pilar 1 — Especialista solar (vs generalista Palmas)</strong>
            <ul>
              <li>&quot;Brasfrio refrigera + faz solar. Aura é só solar.&quot;</li>
              <li>&quot;Engenheiro CREA-TO em todo projeto&quot;</li>
              <li>&quot;Equipe 100% dedicada a fotovoltaico&quot;</li>
            </ul>
          </div>

          <div className="plano-callout">
            <strong>Pilar 2 — Tecnologia transparente</strong>
            <ul>
              <li>&quot;Calculadora ao vivo no site&quot;</li>
              <li>&quot;Trabalho com Tier 1: Trina, Canadian, Jinko + Growatt e Sungrow&quot;</li>
              <li>&quot;Garantia 25 anos painel · 10 anos inversor · ART em todo projeto&quot;</li>
            </ul>
          </div>

          <div className="plano-callout">
            <strong>Pilar 3 — Atendimento direto comigo</strong>
            <ul>
              <li>&quot;Você fala diretamente comigo, Renato — sem call center, sem terceirizado&quot;</li>
              <li>&quot;Visita técnica gratuita em até 48h&quot;</li>
              <li>&quot;Cliente da Aura é meu cliente pessoal&quot;</li>
            </ul>
          </div>
        </section>

        {/* ═══════════════════════ 4. ARQUITETURA DIGITAL ═══════════════════════ */}
        <section className="plano-section">
          <h2 style={{ fontSize: 28 }}>4 · Arquitetura digital — LPs segmentadas</h2>

          <h3 style={{ fontSize: 18, marginTop: 24 }}>4.1 Por que segmentar (não fazer LP única)</h3>
          <p>
            Mensagem única vira morna pra todos os públicos. Decisor
            industrial não se reconhece numa LP que mostra fatura de R$ 800.
            Produtor rural não se reconhece numa LP que fala &quot;telhado
            da sua casa&quot;. <strong>Solução:</strong> 4 LPs especializadas
            por nicho + 2 utilitários internos.
          </p>

          <h3 style={{ fontSize: 18, marginTop: 24 }}>4.2 Estrutura completa</h3>
          <table>
            <thead><tr><th>Rota</th><th>Público</th><th>Foco</th></tr></thead>
            <tbody>
              <tr><td><code>/</code></td><td>HUB raiz</td><td>4 cards &quot;Você é dono de…&quot;</td></tr>
              <tr><td><code>/casa</code></td><td>Residencial mid-high</td><td>&quot;Conta nunca para de subir&quot;</td></tr>
              <tr><td><code>/comercio</code></td><td>Comércio, supermercado, posto, clínica</td><td>&quot;Geladeira/AC 24h estoura conta&quot;</td></tr>
              <tr><td><code>/industria</code></td><td>Pequena/média indústria</td><td>&quot;Demanda contratada + consumo = custo invisível&quot;</td></tr>
              <tr><td><code>/fazenda</code></td><td>Produtor rural</td><td>&quot;Pivô consome 60% da receita do mês de pico&quot;</td></tr>
              <tr><td><code>/painel-renato</code></td><td>Dashboard interno (Renato)</td><td>Copia link + texto pronto pra cada nicho</td></tr>
              <tr><td><code>/links</code></td><td>Linktree pública</td><td>Bio do Insta</td></tr>
            </tbody>
          </table>

          <h3 style={{ fontSize: 18, marginTop: 24 }}>4.3 Anatomia de cada LP segmentada</h3>
          <ul>
            <li><strong>Hero específico</strong> — foto do nicho + headline da dor real</li>
            <li><strong>3 dores + 3 ganhos</strong> numerados pra aquele público</li>
            <li><strong>Calculadora adaptada</strong> — residencial fala R$/mês, indústria fala TIR + payback meses, rural fala custo por hectare/safra</li>
            <li><strong>2-3 cases nominados</strong> do nicho (com autorização LGPD)</li>
            <li><strong>CTA único:</strong> &quot;Receber proposta personalizada&quot; → WhatsApp Renato com mensagem preenchida</li>
          </ul>

          <h3 style={{ fontSize: 18, marginTop: 24 }}>4.4 Como o Renato usa o /painel-renato</h3>
          <div className="plano-callout">
            Renato fecha lead via Insta → entra em <code>/painel-renato</code>{" "}
            → copia mensagem pronta de &quot;indústria&quot; + link{" "}
            <code>/industria</code> → cola no WhatsApp do lead → pronto.
            <br /><br />
            <strong>Renato bookmarka 1 URL.</strong> Tudo se origina dali.
            Não decora 4 links, não lembra 4 textos. Organização vira
            muscle memory.
          </div>

          <h3 style={{ fontSize: 18, marginTop: 24 }}>4.5 Diagnóstico pré-reunião — qualificador B2B</h3>
          <p>
            Funcionalidade já em código (<code>/diagnostico</code>). Como
            peça do funil B2B:
          </p>
          <div className="plano-callout plano-callout-blue">
            Lead B2B chega → Renato manda diagnóstico personalizado (10 min)
            → respostas chegam pro Renato/Eduardo → reunião só com lead
            qualificado → ciclo de venda mais curto + ticket mais alto.
          </div>

          <p><strong>3 valores do diagnóstico no funil:</strong></p>
          <ol>
            <li><strong>Qualifica</strong> — quem preenche está no jogo, quem não preenche não está comprando</li>
            <li><strong>Prepara a conversa</strong> — Renato entra na call sabendo dor, ambição, restrição, orçamento</li>
            <li><strong>Compromisso psicológico</strong> — lead que investiu 10 min responde, entra na reunião com sunk cost emocional</li>
          </ol>

          <div className="plano-callout">
            ⚠ <strong>Pré-condição técnica:</strong> o submit precisa salvar
            resposta em DB primário (não só email) e ter alerta secundário
            pra Eduardo. Bug detectado em 06/05 será corrigido antes do
            diagnóstico voltar a ser usado externamente.
          </div>

          <h3 style={{ fontSize: 18, marginTop: 24 }}>4.6 6 artes Instagram primeiros 30 dias (já entregues)</h3>
          <ol>
            <li>Anúncio &quot;Nasce a Aura&quot;</li>
            <li>Renato apresenta — quem é, o que faz, por que solar</li>
            <li>Lei 14.300 explicada (carrossel educativo Fio B)</li>
            <li>Calculadora ao vivo — print + headline</li>
            <li>Antes/depois conta de luz (case real)</li>
            <li>Janela do Fio B + last call (urgência regulatória)</li>
          </ol>
          <p>
            Eduardo produz os visuais pós-fechamento (Canva 3-5h ou
            HTML/CSS render). Renato posta no ritmo dele.
          </p>
        </section>

        {/* ═══════════════════════ 5. FUNIL DUAL ═══════════════════════ */}
        <section className="plano-section">
          <h2 style={{ fontSize: 28 }}>5 · Funil dual — B2B prioridade + B2C base</h2>

          <p>A Aura roda 2 funis em paralelo com mesma marca, abordagens diferentes.</p>

          <h3 style={{ fontSize: 18, marginTop: 24 }}>5.1 Funil B2B (prioridade #1 — contratos vantajosos)</h3>
          <p>
            <strong>Lógica:</strong> 5-15 fechamentos B2B/ano substituem 60+
            residenciais em receita, com menos atendimento operacional.
          </p>

          <div className="plano-callout">
            <strong>Caminho:</strong>
            <ol>
              <li>Prospecção ativa (RadarPRO + LinkedIn outreach + indicações)</li>
              <li>Contato qualificado por segmento</li>
              <li>Diagnóstico pré-reunião (link <code>/diagnostico</code> personalizado)</li>
              <li>LP <code>/comercio</code> | <code>/industria</code> | <code>/fazenda</code> enviada</li>
              <li>Reunião presencial/Zoom (Renato + decisor)</li>
              <li>Análise técnica do site (telhado/galpão/pivô)</li>
              <li>Proposta executiva (PDF + planilha de payback)</li>
              <li>Negociação (3-6 reuniões em ciclos de 30-90 dias)</li>
              <li>Fechamento R$ 50-800k</li>
            </ol>
          </div>

          <h4 style={{ fontSize: 14, marginTop: 16 }}>Métricas-alvo B2B</h4>
          <ul>
            <li>Pipeline ativo: 8-15 contas em negociação simultânea</li>
            <li>Conversão prospect → reunião: 15-25%</li>
            <li>Conversão reunião → proposta: 60-80%</li>
            <li>Conversão proposta → fechamento: 25-40%</li>
            <li>Ciclo médio: 60-120 dias</li>
            <li>1-2 fechamentos/mês = R$ 100-500k bruto</li>
          </ul>

          <h3 style={{ fontSize: 18, marginTop: 32 }}>5.2 Funil B2C (base de volume — sustenta caixa)</h3>
          <p>
            <strong>Lógica:</strong> mantém faturamento rodando enquanto
            pipeline B2B amadurece (B2B tem ciclo longo, B2C tem ciclo curto).
          </p>

          <div className="plano-callout">
            <strong>Caminho:</strong>
            <ol>
              <li>Meta Ads geofence Palmas (R$ 800-1.500/mês)</li>
              <li>LP <code>/casa</code></li>
              <li>Calculadora de payback residencial (lead capture WhatsApp)</li>
              <li>Resposta &lt; 15 min · Renato direto</li>
              <li>Visita técnica grátis</li>
              <li>Proposta enviada</li>
              <li>Fechamento R$ 25-50k</li>
            </ol>
          </div>

          <h4 style={{ fontSize: 14, marginTop: 16 }}>Métricas-alvo B2C</h4>
          <ul>
            <li>CPL: R$ 35-65 (Meta Ads geo Palmas)</li>
            <li>Conversão lead → proposta: 35-45%</li>
            <li>Conversão proposta → fechamento: 20-30%</li>
            <li>Ciclo médio: 7-21 dias</li>
            <li>4-8 fechamentos/mês = R$ 100-300k bruto</li>
          </ul>

          <h3 style={{ fontSize: 18, marginTop: 32 }}>5.3 Investimento mensal em mídia (cenário misto)</h3>
          <table>
            <thead><tr><th>Canal</th><th>Investimento</th><th>Função</th><th>Funil</th></tr></thead>
            <tbody>
              <tr><td>Meta Ads <code>/casa</code></td><td>R$ 800-1.500</td><td>Volume residencial Palmas</td><td>B2C</td></tr>
              <tr><td>LinkedIn Ads <code>/industria</code> <code>/fazenda</code></td><td>R$ 600-1.200</td><td>Top of funnel decisor B2B</td><td>B2B</td></tr>
              <tr><td>Google Ads palavras-chave</td><td>R$ 500-1.000</td><td>Captura demanda ativa</td><td>misto</td></tr>
              <tr><td>RadarPRO Impulso (comissão)</td><td>5-7%</td><td>Performance pura</td><td>B2B</td></tr>
              <tr><td><strong>Total mensal</strong></td><td colSpan={3}><strong>R$ 1.900-3.700 + comissão</strong></td></tr>
            </tbody>
          </table>

          <div className="plano-callout plano-callout-blue">
            <strong>Trigger pra escalar tráfego:</strong> entre 20-30 leads
            B2C/mês e 8-10 prospects B2B no pipeline. Antes disso, focar em
            conteúdo orgânico (Insta) e prospecção 1-1 (Renato + RadarPRO).
          </div>
        </section>

        {/* ═══════════════════════ 6. CONTEÚDO ═══════════════════════ */}
        <section className="plano-section">
          <h2 style={{ fontSize: 28 }}>6 · Conteúdo — lançamento 14 dias + cadência ongoing</h2>

          <h3 style={{ fontSize: 18, marginTop: 24 }}>6.1 Cronograma de lançamento (semanas 1-2)</h3>
          <p>Modelo híbrido GB Nutrition + Whoop, adaptado pra solar dual B2C/B2B.</p>

          <table>
            <thead><tr><th>Dia</th><th>Tema</th><th>Formato</th><th>Público</th></tr></thead>
            <tbody>
              <tr><td>D1</td><td>&quot;Nasce a Aura&quot;</td><td>Carrossel + stories</td><td>Todos</td></tr>
              <tr><td>D2</td><td>Renato apresenta</td><td>Reel (em câmera)</td><td>Todos</td></tr>
              <tr><td>D3</td><td>Lei 14.300 explicada</td><td>Reel educativo</td><td>B2B + B2C</td></tr>
              <tr><td>D4</td><td>Antes/depois conta luz</td><td>Stories cliente real</td><td>B2C</td></tr>
              <tr><td>D5</td><td>Calculadora ao vivo</td><td>Stories + reel</td><td>Todos</td></tr>
              <tr><td>D6</td><td>Bastidores instalação</td><td>Reel equipe + drone</td><td>Todos</td></tr>
              <tr><td>D7</td><td>Janela Fio B + last call</td><td>Carrossel objeções</td><td>Todos</td></tr>
              <tr><td>D8</td><td>Marcas Tier 1 educacional</td><td>Stories</td><td>B2C + comércio</td></tr>
              <tr><td>D9</td><td><strong>Comércio: pico de consumo</strong></td><td>Carrossel B2B</td><td>B2B comércio</td></tr>
              <tr><td>D10</td><td>Financiamento Solfácil + Pronaf</td><td>Stories cálculo</td><td>Misto</td></tr>
              <tr><td>D11</td><td>Mapa Palmas (cobertura)</td><td>Stories bairros</td><td>B2C</td></tr>
              <tr><td>D12</td><td><strong>Indústria: demanda invisível</strong></td><td>Carrossel B2B</td><td>B2B indústria</td></tr>
              <tr><td>D13</td><td>Cliente entrevistado</td><td>Stories vídeo real</td><td>Todos</td></tr>
              <tr><td>D14</td><td>Recap + balanço</td><td>Stories métricas</td><td>Todos</td></tr>
            </tbody>
          </table>

          <p>
            <strong>Stories pack completo:</strong> 70 stories detalhados em{" "}
            <code>roteiros/stories-pack-14-dias.md</code>.
          </p>

          <h3 style={{ fontSize: 18, marginTop: 24 }}>6.2 Cadência ongoing (semana 3 em diante)</h3>
          <ul>
            <li><strong>3 posts/semana</strong> no feed (carrossel educativo + case real + institucional)</li>
            <li><strong>1 reel/semana</strong> — Renato grava bloco mensal de 4 reels em 1 dia</li>
            <li><strong>5 stories/semana</strong> mínimo</li>
            <li><strong>1 carrossel objeção quinzenal</strong></li>
            <li><strong>1 LinkedIn post/semana</strong> — só B2B, posicionamento Renato como autoridade técnica regional</li>
          </ul>

          <h3 style={{ fontSize: 18, marginTop: 24 }}>6.3 Bloco mensal de gravação Renato</h3>
          <div className="plano-callout">
            Estratégia anti-procrastinação: Renato grava <strong>1 dia por mês</strong>,
            4-6 reels de uma vez. Impulso edita ao longo do mês. Renato não
            pensa em câmera no resto do tempo.
          </div>
        </section>

        {/* ═══════════════════════ 7. CRONOGRAMA 90 DIAS ═══════════════════════ */}
        <section className="plano-section">
          <h2 style={{ fontSize: 28 }}>7 · Cronograma 90 dias</h2>

          <h3 style={{ fontSize: 18, marginTop: 24, color: "var(--plano-orange)" }}>Mês 1 — Lançamento de marca + entrega Frente 1</h3>
          <ul>
            <li><strong>Semana 1:</strong> setup técnico (Insta @auraenergy, WhatsApp Business, Google Meu Negócio, Pixel Meta, GA4)</li>
            <li><strong>Semana 2:</strong> lançamento de marca 14 dias começa (D1-D7)</li>
            <li><strong>Semana 3:</strong> lançamento continua (D8-D14)</li>
            <li><strong>Semana 4:</strong> ajustes de criativos + 1ª gravação reel Renato + Meta Ads geofence Palmas ligado</li>
          </ul>
          <p><em>Métricas esperadas mês 1:</em> 200-300 followers Insta, 5-10 leads B2C, 0-1 prospect B2B.</p>

          <h3 style={{ fontSize: 18, marginTop: 24, color: "var(--plano-orange)" }}>Mês 2 — Tração + pipeline B2B inicia</h3>
          <ul>
            <li>Cadência ongoing rodando (3 posts + 1 reel + stories)</li>
            <li>1ª venda B2C fechada via funil digital (meta)</li>
            <li>LinkedIn outreach Renato começa (1-2h/dia segmentado)</li>
            <li>RadarPRO Solar Palmas em setup (Impulso): critérios + scrapers + planilha</li>
            <li>1ª reunião B2B agendada — começa o ciclo de 60-120d</li>
          </ul>
          <p><em>Métricas esperadas mês 2:</em> 500-700 followers, 15-25 leads B2C, 2-4 prospects B2B em conversa, 1-3 vendas B2C fechadas.</p>

          <h3 style={{ fontSize: 18, marginTop: 24, color: "var(--plano-orange)" }}>Mês 3 — Escala B2C + RadarPRO ativo</h3>
          <ul>
            <li>3-5 vendas B2C fechadas/mês via funil</li>
            <li>RadarPRO entregando 10-20 leads B2B/mês com playbook</li>
            <li>2-3 reuniões B2B em estágio avançado (proposta enviada)</li>
            <li>Depoimentos formais Renato + clientes B2C (também viram anúncio Impulso)</li>
            <li>Compra do domínio <code>auraenergy.com.br</code> + apontamento Vercel</li>
          </ul>
          <p><em>Métricas esperadas mês 3:</em> 1.000+ followers (passa Brasfrio antiga, mira ARASOL), 30-50 leads B2C, 8-12 prospects B2B no pipeline, 3-5 vendas B2C fechadas.</p>

          <div className="plano-callout">
            <strong>Realismo B2B:</strong> primeiro fechamento B2B esperado{" "}
            <strong>mês 4-6</strong>, não mês 3. O ciclo é 60-120d, e o
            pipeline só começa a esquentar no mês 2.
          </div>
        </section>

        {/* ═══════════════════════ 8. PROJEÇÕES ═══════════════════════ */}
        <section className="plano-section">
          <h2 style={{ fontSize: 28 }}>8 · Projeções financeiras — mix B2C + B2B</h2>

          <div className="plano-callout plano-callout-blue">
            <strong>Premissas:</strong>
            <ul>
              <li>Ticket B2C residencial Palmas-TO: R$ 22k médio (5 kWp típico)</li>
              <li>Ticket B2B comércio: R$ 80k médio</li>
              <li>Ticket B2B indústria: R$ 250k médio</li>
              <li>Ticket B2B rural: R$ 150k médio</li>
              <li>Margem operacional Aura: 15-20%</li>
              <li>Comissão captação RadarPRO: 5-7%</li>
            </ul>
          </div>

          <h3 style={{ fontSize: 18, marginTop: 24 }}>Cenário CONSERVADOR (12 meses)</h3>
          <p>Renato executa Frente 1 + posta no ritmo dele, sem Frente 2 nem RadarPRO.</p>
          <table>
            <thead><tr><th>Linha</th><th>Quantidade</th><th>Receita</th></tr></thead>
            <tbody>
              <tr><td>B2C residencial</td><td>25 (~2/mês)</td><td>R$ 550k</td></tr>
              <tr><td>B2B comércio</td><td>1</td><td>R$ 80k</td></tr>
              <tr><td>B2B rural</td><td>1</td><td>R$ 150k</td></tr>
              <tr><td><strong>Faturamento bruto</strong></td><td></td><td><strong>R$ 780k</strong></td></tr>
              <tr><td>Margem 15%</td><td></td><td><strong>R$ 117k lucro</strong></td></tr>
            </tbody>
          </table>

          <h3 style={{ fontSize: 18, marginTop: 24 }}>Cenário REALISTA (12 meses)</h3>
          <p>Renato executa Frente 1 + Frente 2 ativa + tráfego pago básico.</p>
          <table>
            <thead><tr><th>Linha</th><th>Quantidade</th><th>Receita</th></tr></thead>
            <tbody>
              <tr><td>B2C residencial</td><td>40 (~3-4/mês)</td><td>R$ 880k</td></tr>
              <tr><td>B2B comércio</td><td>3</td><td>R$ 240k</td></tr>
              <tr><td>B2B rural</td><td>2</td><td>R$ 300k</td></tr>
              <tr><td>B2B indústria</td><td>1</td><td>R$ 250k</td></tr>
              <tr><td><strong>Faturamento bruto</strong></td><td></td><td><strong>R$ 1.670k</strong></td></tr>
              <tr><td>Margem 17%</td><td></td><td><strong>R$ 284k lucro</strong></td></tr>
            </tbody>
          </table>

          <h3 style={{ fontSize: 18, marginTop: 24 }}>Cenário OTIMISTA (24 meses)</h3>
          <p>Frente 1 + 2 + 3 ativos + RadarPRO entregando + info-produto FASE 2 lançado no mês 18.</p>
          <table>
            <thead><tr><th>Linha</th><th>Quantidade (24m)</th><th>Receita</th></tr></thead>
            <tbody>
              <tr><td>B2C residencial</td><td>80</td><td>R$ 1.760k</td></tr>
              <tr><td>B2B comércio</td><td>8</td><td>R$ 640k</td></tr>
              <tr><td>B2B rural</td><td>6</td><td>R$ 900k</td></tr>
              <tr><td>B2B indústria</td><td>4</td><td>R$ 1.000k</td></tr>
              <tr><td>Info-produto B2B (M18-24)</td><td>200 cursos × R$ 497</td><td>R$ 99k</td></tr>
              <tr><td><strong>Faturamento bruto 24m</strong></td><td></td><td><strong>R$ 4.399k</strong></td></tr>
              <tr><td>Margem média</td><td></td><td><strong>R$ 838k lucro</strong></td></tr>
            </tbody>
          </table>

          <h3 style={{ fontSize: 18, marginTop: 32 }}>Comparativo: Aura sem Impulso vs com Impulso (24 meses)</h3>
          <table>
            <thead><tr><th></th><th>Sem Impulso (orgânico)</th><th>Com Impulso</th></tr></thead>
            <tbody>
              <tr><td>Faturamento total 24m</td><td>R$ 800k</td><td><strong>R$ 4.400k</strong></td></tr>
              <tr><td>Lucro estimado</td><td>R$ 120k</td><td><strong>R$ 838k</strong></td></tr>
              <tr><td>Lead/mês</td><td>15-25</td><td>80-120</td></tr>
              <tr><td>Tempo Renato em marketing</td><td>15h/sem</td><td>3h/sem (só gravação)</td></tr>
            </tbody>
          </table>

          <div className="plano-callout plano-callout-green">
            <strong>Conclusão:</strong> investimento Frente 2
            (R$ 1.497-1.997/mês = R$ 18-24k/ano) gera retorno{" "}
            <strong>20-40× maior</strong> em fluxo de caixa novo no
            horizonte 24m.
          </div>
        </section>

        {/* ═══════════════════════ 9. PRICING ═══════════════════════ */}
        <section className="plano-section">
          <h2 style={{ fontSize: 28 }}>9 · Pricing — 3 frentes</h2>

          <div
            className="plano-callout"
            style={{ borderLeftColor: "var(--plano-yellow)", background: "#fff8e8" }}
          >
            <h3 style={{ fontSize: 20, marginTop: 0 }}>
              Frente 1 · Setup completo Aura — <span style={{ color: "var(--plano-orange)" }}>R$ 1.200</span>
            </h3>
            <p><strong>Status:</strong> entregue tecnicamente, aguarda fechamento financeiro 06/05.</p>
            <p><strong>Entrega:</strong></p>
            <ul>
              <li>LP profissional segmentada em 4 nichos + HUB raiz (em produção)</li>
              <li>6 artes Instagram primeiros 30 dias (copy + briefing visual finalizado)</li>
              <li><strong>Bônus:</strong> Direção info-produto B2B (1 página A4)</li>
              <li>Ajustes pós-pagamento (1 mês de calibragem com fotos/dados reais)</li>
              <li>7 dias de garantia incondicional pós-pagamento</li>
            </ul>
            <p><strong>Forma de pagamento:</strong> R$ 1.200 à vista PIX ou 3× cartão (sem juros).</p>
          </div>

          <div className="plano-callout">
            <h3 style={{ fontSize: 20, marginTop: 0 }}>
              Frente 2 · Operação digital mensal — <span style={{ color: "var(--plano-orange)" }}>R$ 1.497/mês</span>{" "}
              <span style={{ fontSize: 14, color: "var(--plano-text-muted)" }}>(preço fundador)</span>
            </h3>
            <p><strong>Status:</strong> apresentar SE Renato pedir continuidade após começar a postar (não cravar 06/05).</p>
            <p><strong>Entrega:</strong></p>
            <ul>
              <li>Gestão tráfego Meta Ads + LinkedIn Ads (não inclui investimento Meta/LinkedIn)</li>
              <li>12 posts/mês Instagram (3/semana feed)</li>
              <li>4 reels/mês (Renato grava em bloco, Impulso edita)</li>
              <li>8 stories/semana</li>
              <li>Manutenção LP (1 atualização/mês)</li>
              <li>1 reunião mensal de revisão (45 min)</li>
              <li>Dashboard semanal por WhatsApp</li>
            </ul>
            <p><strong>Investimento Meta separado:</strong> R$ 1.500-3.000/mês (vai direto pra conta Meta do Renato)</p>
            <p>
              <strong>Recomendação:</strong> começar com R$ 1.497 fundador,
              upsell pra R$ 1.997 quando tiver 3+ depoimentos rodando.
            </p>
            <p>
              <strong>Compromisso:</strong> mínimo 6 meses · pode pausar
              com 30 dias de aviso após mês 3 · sem multa.
            </p>
          </div>

          <div className="plano-callout">
            <h3 style={{ fontSize: 20, marginTop: 0 }}>
              Frente 3 · RadarPRO Solar Palmas — <span style={{ color: "var(--plano-orange)" }}>comissão 5-7%</span>
            </h3>
            <p><strong>Status:</strong> propor depois Frente 2 estar rodando (mês 2-3+).</p>
            <p><strong>Modelo:</strong></p>
            <ul>
              <li>Comissão <strong>5-7%</strong> sobre venda fechada via lead RadarPRO (5% pra ticket &gt; R$ 200k, 7% pra ticket &lt; R$ 200k)</li>
              <li><strong>Sem mensalidade · sem fixo · sem fricção pra Renato</strong></li>
              <li>Operado 100% pela Impulso nos bastidores</li>
              <li>Cliente NÃO compra o RadarPRO — só recebe leads B2B (10-20/mês meta) com playbook</li>
              <li>Tracking via planilha compartilhada + reunião quinzenal</li>
            </ul>
          </div>

          <div className="plano-callout plano-callout-blue">
            <h3 style={{ fontSize: 18, marginTop: 0 }}>Plano B — se Renato fechar SÓ Frente 1</h3>
            <p><strong>O que continua:</strong></p>
            <ul>
              <li>LP no ar (hospedagem Vercel grátis até escala)</li>
              <li>Bônus direção info-produto na mão dele</li>
              <li>Eduardo disponível pra suporte WhatsApp eventual (sem SLA)</li>
            </ul>
            <p><strong>O que para:</strong></p>
            <ul>
              <li>Sem produção de conteúdo, sem tráfego pago, sem RadarPRO</li>
              <li>Sem reunião mensal, sem dashboard</li>
            </ul>
            <p>
              <strong>Upsell natural:</strong> Frente 2 ainda disponível em
              R$ 1.497 fundador por 60 dias após Frente 1. Depois disso, R$ 1.997.
            </p>
          </div>
        </section>

        {/* ═══════════════════════ 10. KPIs ═══════════════════════ */}
        <section className="plano-section">
          <h2 style={{ fontSize: 28 }}>10 · KPIs e dashboard</h2>

          <h3 style={{ fontSize: 18, marginTop: 24 }}>B2C residencial</h3>
          <table>
            <thead><tr><th>Métrica</th><th>30d</th><th>60d</th><th>90d</th></tr></thead>
            <tbody>
              <tr><td>Leads B2C/mês</td><td>10-15</td><td>20-30</td><td>30-50</td></tr>
              <tr><td>CPL Meta Ads</td><td>R$ 60-100</td><td>R$ 50-80</td><td>R$ 35-65</td></tr>
              <tr><td>Conversão lead → proposta</td><td>30%</td><td>35%</td><td>40%</td></tr>
              <tr><td>Vendas B2C/mês</td><td>1-2</td><td>2-4</td><td>3-5</td></tr>
              <tr><td>Receita B2C/mês</td><td>R$ 22-44k</td><td>R$ 44-88k</td><td>R$ 66-110k</td></tr>
            </tbody>
          </table>

          <h3 style={{ fontSize: 18, marginTop: 24 }}>B2B (comércio + indústria + rural)</h3>
          <table>
            <thead><tr><th>Métrica</th><th>30d</th><th>60d</th><th>90d</th></tr></thead>
            <tbody>
              <tr><td>Prospects B2B em conversa</td><td>0-2</td><td>2-5</td><td>8-12</td></tr>
              <tr><td>Reuniões B2B realizadas</td><td>0-1</td><td>2-4</td><td>5-8</td></tr>
              <tr><td>Propostas B2B enviadas</td><td>0</td><td>1-2</td><td>3-5</td></tr>
              <tr><td>Vendas B2B fechadas</td><td>0</td><td>0-1</td><td>0-1 (1ª esperada mês 4-6)</td></tr>
              <tr><td>Pipeline B2B em valor</td><td>R$ 0-100k</td><td>R$ 200-500k</td><td>R$ 500k-1.5M</td></tr>
            </tbody>
          </table>

          <h3 style={{ fontSize: 18, marginTop: 24 }}>Marca / Insta</h3>
          <table>
            <thead><tr><th>Métrica</th><th>30d</th><th>60d</th><th>90d</th></tr></thead>
            <tbody>
              <tr><td>Posts Insta/semana</td><td>5</td><td>5</td><td>5</td></tr>
              <tr><td>Engagement Aura</td><td>1,5%</td><td>2%</td><td>2,5%+</td></tr>
              <tr><td>Followers @auraenergy</td><td>300</td><td>600</td><td>1.000+ (passa ARASOL)</td></tr>
            </tbody>
          </table>

          <h3 style={{ fontSize: 18, marginTop: 24 }}>Comissão Impulso (Frentes 2 + 3)</h3>
          <table>
            <thead><tr><th>Mês</th><th>Mensalidade Frente 2</th><th>Comissão Frente 3</th><th>Total</th></tr></thead>
            <tbody>
              <tr><td>30d</td><td>R$ 1.497</td><td>R$ 0</td><td>R$ 1.497</td></tr>
              <tr><td>60d</td><td>R$ 1.497</td><td>R$ 0-2k</td><td>R$ 1.497-3.497</td></tr>
              <tr><td>90d</td><td>R$ 1.497</td><td>R$ 2-7k</td><td>R$ 3.497-8.497</td></tr>
            </tbody>
          </table>

          <h3 style={{ fontSize: 18, marginTop: 24 }}>Cadência de revisão</h3>
          <ul>
            <li><strong>Diário</strong> (quando tem lead novo): atualização rápida em <code>CASE-AURA-LOG.md</code></li>
            <li><strong>Semanal</strong> (sextas): atualização <code>METRICAS-AURA.md</code> + dashboard pro Renato</li>
            <li><strong>Quinzenal:</strong> revisão estratégica (45 min)</li>
            <li><strong>Mensal:</strong> relatório formal + reunião 1h</li>
            <li><strong>Trimestral:</strong> depoimento Renato em vídeo</li>
          </ul>
        </section>

        {/* ═══════════════════════ 11. INFO-PRODUTO ═══════════════════════ */}
        <section className="plano-section">
          <h2 style={{ fontSize: 28 }}>11 · Info-produto B2B FASE 2 (M+12 em diante)</h2>

          <h3 style={{ fontSize: 18, marginTop: 24 }}>11.1 Por que info-produto B2B (não eletricista)</h3>
          <p>
            Decisão estratégica: info-produto é <strong>FASE 2</strong> — depois Aura crescer no B2B (12-18 meses). Não é entregável imediato, é mapa pro futuro.
          </p>

          <table>
            <thead><tr><th>Critério</th><th>Curso técnico (eletricista — saturado)</th><th>Info-produto B2B Aura (vazio)</th></tr></thead>
            <tbody>
              <tr><td>Concorrência BR</td><td>Dezenas (Tenda, Eletricista 360, Solar Cursos)</td><td><strong>Zero player relevante</strong></td></tr>
              <tr><td>Público-alvo</td><td>Pessoa física querendo profissão</td><td>Decisor B2B (dono ind/com/rural)</td></tr>
              <tr><td>Ticket</td><td>R$ 19-497</td><td>R$ 297-1.997 (+ FASE 3 mentoria R$ 5-15k)</td></tr>
              <tr><td>Conexão com Aura</td><td>Indireta (aluno vira concorrente)</td><td><strong>Direta</strong> — aluno B2B vira lead Aura</td></tr>
              <tr><td>LTV cliente</td><td>Acaba no curso</td><td>Vira projeto R$ 80-500k</td></tr>
            </tbody>
          </table>

          <div className="plano-callout plano-callout-blue">
            <strong>Pergunta-chave:</strong> quem paga R$ 497 pra entender
            solar B2B antes de comprar? <strong>O decisor que vai investir R$ 80-500k.</strong>{" "}
            É o lead mais qualificado que existe em solar BR.
          </div>

          <h3 style={{ fontSize: 18, marginTop: 24 }}>11.2 Estrutura final — 8 aulas (60-80 min totais)</h3>
          <p>Refinada via CIC depurando 24 conteúdos do curso Tenda Solar.</p>

          <table>
            <thead><tr><th>#</th><th>Aula</th><th>Tempo</th></tr></thead>
            <tbody>
              <tr><td>1</td><td>Por que sua conta de energia industrial é o maior custo invisível</td><td>7 min</td></tr>
              <tr><td>2</td><td>Payback de usina solar em indústria: a conta que ninguém te mostra direito</td><td>9 min</td></tr>
              <tr><td>3</td><td>Os 3 modelos de aquisição: à vista, financiado, locação (PPA)</td><td>10 min</td></tr>
              <tr><td>4</td><td>Telhado, solo ou carport: como decidir em 5 minutos</td><td>6 min</td></tr>
              <tr><td>5</td><td>Rural: Pronaf, Moderagro e o detalhe que dobra o retorno</td><td>8 min</td></tr>
              <tr><td>6</td><td>Comércio e supermercado: por que horário de pico é seu inimigo</td><td>7 min</td></tr>
              <tr><td>7</td><td>Lei 14.300, Fio B e o que mudou: tradução pra dono de empresa</td><td>9 min</td></tr>
              <tr><td>8</td><td>Os 7 sinais de um projeto solar mal feito (e como blindar o seu)</td><td>10 min</td></tr>
            </tbody>
          </table>

          <h3 style={{ fontSize: 18, marginTop: 24 }}>11.3 Produção enxuta + cronograma</h3>
          <ul>
            <li><strong>Setup:</strong> 1 câmera + 1 lapela + iluminação natural</li>
            <li><strong>Custo estimado:</strong> R$ 8-25k pra produzir 8 aulas</li>
            <li><strong>Gravação:</strong> 5-7 dias corridos + 2-3 semanas de edição</li>
          </ul>

          <p><strong>4 modos visuais alternados (gangorra previne tédio):</strong></p>
          <ol>
            <li>Studio premium (vinhetas cinemáticas)</li>
            <li>Sala reunião (Renato + cliente B2B real)</li>
            <li>Slide-livro com PIP (aulas analíticas)</li>
            <li>Documental em campo (dentro da indústria/fazenda)</li>
          </ol>

          <h3 style={{ fontSize: 18, marginTop: 24 }}>11.4 Cronograma indicativo FASE 2</h3>
          <table>
            <thead><tr><th>Mês</th><th>Marco</th></tr></thead>
            <tbody>
              <tr><td>M+12</td><td>Decisão de lançar — pipeline B2B sustentável + 5+ cases nominados</td></tr>
              <tr><td>M+13</td><td>Roteiro detalhado + Hotmart setup</td></tr>
              <tr><td>M+14</td><td>Gravação</td></tr>
              <tr><td>M+15</td><td>Edição + lançamento beta</td></tr>
              <tr><td>M+16</td><td>Lançamento público (Hotmart + LinkedIn Ads)</td></tr>
              <tr><td>M+18</td><td>Validar entry pra subir mentoria FASE 3 (R$ 5-15k)</td></tr>
            </tbody>
          </table>

          <h3 style={{ fontSize: 18, marginTop: 24 }}>11.5 Conta de mercado conservadora</h3>
          <ul>
            <li>30 cursos/mês × R$ 497 = <strong>R$ 14.910 receita curso/mês</strong></li>
            <li>20-30% viram lead Aura</li>
            <li>1-2 fecham projeto B2B R$ 100-300k = <strong>+R$ 100-600k receita Aura/mês</strong></li>
          </ul>

          <div className="plano-callout plano-callout-green">
            <strong>Resultado:</strong> info-produto vira canal de aquisição
            mais barato e mais qualificado que tráfego pago.
          </div>
        </section>

        {/* ═══════════════════════ 12. GARANTIAS, RISCOS, LGPD ═══════════════════════ */}
        <section className="plano-section">
          <h2 style={{ fontSize: 28 }}>12 · Garantias, riscos e LGPD</h2>

          <h3 style={{ fontSize: 18, marginTop: 24 }}>12.1 Compromissos Impulso → Renato</h3>
          <ul>
            <li>7 dias de garantia incondicional pós-pagamento Frente 1</li>
            <li>Suporte WhatsApp direto comigo (Eduardo)</li>
            <li>Mensalidade Frente 2 pode pausar com 30d de aviso após mês 3</li>
            <li>Sem multa de cancelamento após mês 3</li>
            <li>Briefing privado pra calibrar expectativa antes de fechar Frente 2</li>
          </ul>

          <h3 style={{ fontSize: 18, marginTop: 24 }}>12.2 Compromissos Renato → Impulso (em troca)</h3>
          <ul>
            <li>Autorização de uso da Aura como case Impulso Digital</li>
            <li>Depoimento em vídeo após 3º mês</li>
            <li>Indicação pra rede Brasfrio/Palmas</li>
            <li>Acesso ao histórico de instalações Brasfrio (com fluxo LGPD adequado)</li>
          </ul>

          <h3 style={{ fontSize: 18, marginTop: 24 }}>12.3 Riscos e mitigação</h3>
          <table>
            <thead><tr><th>Risco</th><th>Mitigação</th></tr></thead>
            <tbody>
              <tr><td>Renato não grava reels</td><td>Bloco mensal de gravação (1 dia, 4-6 reels) — Impulso facilita o set</td></tr>
              <tr><td>@auraenergy não cresce orgânica</td><td>Cadência consistente + tráfego pago + RadarPRO B2B alimentando paralelo</td></tr>
              <tr><td>Lead vem mas não fecha</td><td>Calibrar copy + qualificação via diagnóstico + treinamento Renato em pitch</td></tr>
              <tr><td>Investimento Meta mal alocado</td><td>Otimização semanal + dashboard + reunião quinzenal</td></tr>
              <tr><td>Renato cancela mensalidade após mês 3</td><td>RadarPRO B2B vira gancho de continuidade</td></tr>
              <tr><td>Brasfrio &quot;engole&quot; Aura digitalmente</td><td>Posicionamento cravado: Aura especialista, Brasfrio estrutura técnica</td></tr>
              <tr><td>Diagnóstico/briefing falha em produção</td><td>Persistência DB primária + alerta secundário pra Eduardo</td></tr>
            </tbody>
          </table>

          <h3 style={{ fontSize: 18, marginTop: 24 }}>12.4 LGPD — uso de dados clientes Brasfrio</h3>
          <div className="plano-callout">
            <strong>Risco real:</strong> usar nome/foto/conta de luz de
            cliente Brasfrio sem autorização explícita = infração LGPD
            (multa até 2% do faturamento, máx R$ 50M).
          </div>

          <p><strong>Fluxo correto (Aura precisa rodar antes de qualquer case nominado):</strong></p>
          <ol>
            <li>Renato lista clientes Brasfrio que toparia ligar e pedir autorização</li>
            <li>Renato liga, explica: &quot;Estamos lançando a Aura, queria usar seu nome + foto da instalação + seu antes/depois de conta. Topa? Mando termo de autorização por WhatsApp.&quot;</li>
            <li>Cliente assina termo (PDF ou WhatsApp com print do &quot;concordo&quot;)</li>
            <li>Aura arquiva termo em pasta dedicada (<code>/cases-com-autorizacao/</code>)</li>
            <li>Só então usar em LP/Insta/anúncio</li>
          </ol>

          <div className="plano-callout plano-callout-blue">
            <strong>Sem termo = sem case nominado.</strong> Pode usar dados
            anônimos (&quot;família em Plano Diretor Sul, conta R$ 720→R$ 92&quot;)
            até autorização chegar.
          </div>
        </section>

        {/* ═══════════════════════ 13. PRÓXIMOS PASSOS ═══════════════════════ */}
        <section className="plano-section">
          <h2 style={{ fontSize: 28 }}>13 · Próximos passos imediatos</h2>

          <h3 style={{ fontSize: 18, marginTop: 24 }}>13.1 Reunião 06/05 — agenda da call</h3>
          <p>Perguntas pra calibrar com Renato ao vivo:</p>

          <h4 style={{ fontSize: 14, marginTop: 16 }}>Sobre operação atual</h4>
          <ul>
            <li>Anos exatos de Brasfrio em Palmas</li>
            <li>Número real de instalações solar entregues (resi/com/ind/rural últimos 12m)</li>
            <li>Maior projeto que assinou como engenheiro responsável (kWp + cliente + cidade)</li>
            <li>CREA-TO + ART pública pra citar</li>
          </ul>

          <h4 style={{ fontSize: 14, marginTop: 16 }}>Sobre cases</h4>
          <ul>
            <li>Quais clientes Brasfrio toparia pedir autorização LGPD</li>
            <li>Quem topa gravar depoimento em vídeo de 30-60s</li>
          </ul>

          <h4 style={{ fontSize: 14, marginTop: 16 }}>Sobre ambição</h4>
          <ul>
            <li>Cenário de sucesso 12 meses (em 1 frase)</li>
            <li>Tipos de crescimento que mais interessam (B2B comércio? indústria? rural?)</li>
            <li>Investimento mensal disponível pra mídia paga</li>
          </ul>

          <h4 style={{ fontSize: 14, marginTop: 16 }}>Sobre operação digital</h4>
          <ul>
            <li>Quem responde WhatsApp Brasfrio hoje</li>
            <li>CRM, planilha ou só WhatsApp</li>
          </ul>

          <h4 style={{ fontSize: 14, marginTop: 16 }}>Sobre Programa Palmas Solar + Pronaf</h4>
          <ul>
            <li>Já protocolou IPTU verde? Quantas vezes?</li>
            <li>Já fez projeto Pronaf? Com qual banco?</li>
          </ul>

          <h4 style={{ fontSize: 14, marginTop: 16 }}>Sobre concorrência</h4>
          <ul>
            <li>Pra quem perde mais (Unità? Soluthi? Palmas Energia? Capital?)</li>
            <li>O que faz fechar a venda quando fecha</li>
          </ul>

          <h4 style={{ fontSize: 14, marginTop: 16 }}>Sobre info-produto FASE 2</h4>
          <ul>
            <li>Topa gravar curso B2B em 12-18 meses?</li>
            <li>Tem ideia de tema/foco?</li>
          </ul>

          <h4 style={{ fontSize: 14, marginTop: 16 }}>Sobre restrições</h4>
          <ul>
            <li>Algo que a Aura NÃO deve repetir da Brasfrio?</li>
            <li>Regra inegociável?</li>
          </ul>

          <h3 style={{ fontSize: 18, marginTop: 24 }}>13.2 Pós-fechamento Frente 1 (Eduardo executa)</h3>
          <ol>
            <li>Produzir 6 visuais Instagram (Canva ou HTML/CSS render — 3-5h)</li>
            <li>Entregar PDF da Direção info-produto (1 página A4)</li>
            <li>Trocar placeholders da LP por dados reais que Renato passou na call</li>
            <li>Criar Insta @auraenergy + Google Meu Negócio + WhatsApp Business</li>
            <li>Configurar Pixel Meta + GA4</li>
            <li>Comprar <code>auraenergy.com.br</code> (~R$ 60-80/ano)</li>
            <li>Marcar 1ª reunião de execução (semana seguinte)</li>
          </ol>

          <h3 style={{ fontSize: 18, marginTop: 24 }}>13.3 Pós-fechamento Frente 2 (quando Renato pedir continuidade)</h3>
          <ol>
            <li>Setup Meta Ads (Business Manager + Pixel + API Conversões)</li>
            <li>6-8 criativos iniciais (4× 9:16 + 2× 4:5 + 2× 1:1)</li>
            <li>Lançamento de marca 14 dias começa</li>
            <li>Configurar RadarPRO Solar Palmas (módulo + critérios + envio)</li>
            <li>Dashboard semanal ativo</li>
            <li>LinkedIn outreach Renato começa (1-2h/dia)</li>
          </ol>

          <h3 style={{ fontSize: 18, marginTop: 24 }}>13.4 Pós-fechamento Frente 3 (mês 2-3+)</h3>
          <ol>
            <li>RadarPRO Solar Palmas roda em background (Impulso)</li>
            <li>Leads B2B chegam via planilha compartilhada + WhatsApp Renato</li>
            <li>Reunião quinzenal Eduardo + Renato pra calibrar critérios</li>
            <li>Comissão 5-7% paga 7 dias após pagamento confirmado do cliente final</li>
          </ol>
        </section>

        {/* ═══════════════════════ 14. IDEIAS DE AGREGAÇÃO ═══════════════════════ */}
        <section className="plano-section">
          <h2 style={{ fontSize: 28 }}>14 · Ideias de agregação à operação Aura</h2>

          <h3 style={{ fontSize: 18, marginTop: 24, color: "var(--plano-green)" }}>Curto prazo (já entregue ou Frente 1)</h3>
          <ol>
            <li>✅ Calculadora de economia pública na LP</li>
            <li>✅ Mapa de instalações Palmas</li>
            <li>✅ Banner Janela Fio B</li>
            <li>✅ Catálogo de 5 kits com preço de mercado</li>
            <li>✅ 6 artes Instagram primeiros 30 dias</li>
            <li>✅ Direção info-produto B2B (bônus Frente 1)</li>
            <li>✅ Diagnóstico pré-reunião como qualificador B2B</li>
          </ol>

          <h3 style={{ fontSize: 18, marginTop: 24, color: "var(--plano-yellow-deep)" }}>Médio prazo (Frente 2)</h3>
          <ol start={8}>
            <li>Conteúdo recorrente (3 posts + 1 reel/semana)</li>
            <li>Tráfego pago Meta + LinkedIn + Google Ads</li>
            <li>SEO local — dominar &quot;energia solar Palmas&quot;</li>
            <li>Email marketing — sequência educativa de 7 emails</li>
            <li>Relatório mensal — leads, conversão, ROI</li>
            <li>Lista de espera + lançamento estilo Hormozi pro info-produto FASE 2</li>
          </ol>

          <h3 style={{ fontSize: 18, marginTop: 24, color: "var(--plano-orange)" }}>Longo prazo (Frente 3 + escala)</h3>
          <ol start={14}>
            <li>RadarPRO Solar Palmas — Aura paga só comissão</li>
            <li>Mentoria premium R$ 1.497-3.997 (após validar entry)</li>
            <li>Expansão Araguaína + Gurupi (escalar TO)</li>
            <li>Parceria Sicredi/BV/Santander Solar — Aura vira &quot;indicada por banco&quot;</li>
          </ol>

          <h3 style={{ fontSize: 18, marginTop: 24 }}>Ideias EXTRAS pra operação Aura (independente da Impulso)</h3>
          <ol start={18}>
            <li><strong>Sede como showroom</strong> — instala sistema visível na sede Aura/Brasfrio (modelo Ferpam)</li>
            <li><strong>Programa &quot;Indique amigo&quot;</strong> — cliente que indica ganha R$ 300 cashback ao fechar</li>
            <li><strong>Plano de Acompanhamento Anual</strong> — R$ 200-400/ano por cliente</li>
            <li><strong>Pacote &quot;Palmas Solar full-service&quot;</strong> — Aura cuida de toda documentação do desconto IPTU</li>
            <li><strong>B2B agronegócio Tocantins</strong> — irrigação solar, sistemas 50-200 kWp</li>
            <li><strong>Estação solar comunitária</strong> — modelo assinatura (residencial não-elegível adere)</li>
          </ol>
        </section>

        {/* ═══════════════════════ 15. DOCS RELACIONADOS ═══════════════════════ */}
        <section className="plano-section">
          <h2 style={{ fontSize: 28 }}>15 · Documentos relacionados</h2>
          <table>
            <thead><tr><th>Doc</th><th>Conteúdo</th></tr></thead>
            <tbody>
              <tr><td><code>STATUS-AURA-ENERGY.md</code></td><td>Status canônico do projeto</td></tr>
              <tr><td><code>ROTEIRO-VENDA-RENATO-06MAIO.md</code></td><td>Script reunião 06/05 (abertura → fechamento)</td></tr>
              <tr><td><code>DIRECAO-INFO-PRODUTO-RENATO.md</code></td><td>1 página A4 — bônus Frente 1</td></tr>
              <tr><td><code>RELATORIO-CURSO-TENDA-COMPLETO.md</code></td><td>Análise estrutural CIC do curso Tenda</td></tr>
              <tr><td><code>PESQUISA-NICHO-INFO-PRODUTO-SOLAR.md</code></td><td>Research nicho info-produto</td></tr>
              <tr><td><code>6-ARTES-INSTAGRAM-AURA.md</code></td><td>Copy + briefing visual das 6 artes</td></tr>
              <tr><td><code>ESTRATEGIA-LP-SEGMENTADA-AURA.md</code></td><td>Detalhamento das 4 LPs + 2 utilitários</td></tr>
              <tr><td><code>ANALISE-PROPOSTA-COMERCIAL-RENATO.md</code></td><td>Análise CIC da proposta da Vidraçaria Conexão</td></tr>
              <tr><td><code>RELATORIO-AUDITORIA-LIDERES-PALMAS-CIC.md</code></td><td>Auditoria líderes mercado Palmas</td></tr>
              <tr><td><code>RELATORIO-MERCADO-PALMAS-CIC.md</code></td><td>Mercado Palmas</td></tr>
              <tr><td><code>RELATORIO-SEO-PALMAS-CIC.md</code></td><td>SEO competitivo</td></tr>
              <tr><td><code>RELATORIO-PROGRAMA-PALMAS-SOLAR-CIC.md</code></td><td>Programa Palmas Solar</td></tr>
              <tr><td><code>RELATORIO-INSTAGRAM-BRASFRIO.md</code></td><td>@brasfrio_engsolar atualizado</td></tr>
              <tr><td><code>DIAGNOSTICO-BRASFRIO-SOLAR.md</code></td><td>Diagnóstico CIC competitivo Brasfrio</td></tr>
              <tr><td><code>PESQUISA-MERCADO-SOLAR-PALMAS.md</code></td><td>Pesquisa mercado solar Palmas</td></tr>
              <tr><td><code>CASE-AURA-LOG.md</code></td><td>Log diário de leads/atividades</td></tr>
              <tr><td><code>METRICAS-AURA.md</code></td><td>Métricas semanais</td></tr>
            </tbody>
          </table>
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
            <strong>Plano por:</strong> Verbo (Claude Opus 4.7) + Eduardo Barros · Impulso Digital
            <br />
            <strong>Análise estrutural curso Tenda:</strong> CIC (Claude in Chrome)
            <br />
            <strong>Cliente:</strong> Renato Edson · Aura Energy · Palmas-TO
            <br />
            <strong>Data:</strong> 2026-05-06 · pré-reunião
            <br />
            <strong>Versão:</strong> v4.0 — refundido B2B-first
          </p>
          <p style={{ marginTop: 24, fontStyle: "italic" }}>
            — λ.deep-research · λ.dor (B2B vende ROI, não kWp) · λ.uso-em-massa · λ.densidade
          </p>
        </section>
      </main>
    </>
  );
}
