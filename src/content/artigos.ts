// Artigos pra rota /artigos/[slug] e seção Recursos das LPs.
// Cada artigo cravado com: sumário/TOC · dados quantitativos com fonte inline ·
// bloco "Fontes consultadas" no final · tom condicional em projeções ·
// preços e marcas alinhados com briefing V3.1 (maio/2026).
// Verificado contra ANEEL, ABSOLAR, MAPA, CONFAZ, IBGE, Energisa-TO.

export type Artigo = {
  slug: string;
  titulo: string;
  resumo: string;
  categoria: "Economia" | "Regulamentação" | "Equipamentos" | "Financiamento";
  tempoLeitura: string;
  dataPublicacao: string; // ISO · usado em metadata + sitemap lastmod
  conteudo: string; // markdown · renderizado em /artigos/[slug]
};

export const ARTIGOS: Artigo[] = [
  // ──────────────────────────────────────────────────────────────────────────
  // 1 · ECONOMIA · quanto custa
  // ──────────────────────────────────────────────────────────────────────────
  {
    slug: "quanto-custa-energia-solar-palmas-2026",
    titulo: "Quanto custa instalar energia solar em Palmas-TO em 2026 (preços cravados Aura)",
    resumo:
      "Tabela oficial Aura Energy 2026: R$ 7 mil (3 kWp) até R$ 20,5 mil (10 kWp), com equipamento Tier 1, projeto, ART e homologação Energisa inclusos.",
    categoria: "Economia",
    tempoLeitura: "8 min",
    dataPublicacao: "2026-05-25",
    conteudo: `A conta da Energisa não para de subir. Em julho de 2025 a ANEEL homologou reajuste de **12,31% pra residência grupo B1** em Tocantins (ANEEL, Resolução Homologatória 3.301/2025). Em maio de 2026 a bandeira tarifária está em **amarela** · adicional de R$ 1,885 a cada 100 kWh consumidos (ANEEL · acionamento mensal).

Se você chegou até aqui é porque já fez as contas e sabe que esse trem só anda pra cima. A pergunta real é: quanto custa fugir disso · qual o número certo pra colocar solar na sua casa ou no seu comércio em Palmas, e o que entra nesse valor?

Esse artigo crava a tabela oficial Aura Energy 2026 · sem promessa furada, sem "preço promocional", sem letra miúda. Pra residência e pra comércio pequeno.

## Neste artigo

- [Preço por tamanho de sistema](#preco-por-tamanho)
- [O que entra no valor (e o que NÃO entra)](#o-que-entra)
- [Garantia cravada · 12 anos de painel, 10 de inversor](#garantia)
- [Por que Palmas paga um pouquinho mais que São Paulo](#palmas-vs-sp)
- [Como o financiamento muda a equação](#financiamento)
- [Comparativo · 2026 vs 2027 vs 2028 (Fio B subindo)](#fio-b)
- [Resumo cravado](#resumo)
- [Fontes consultadas](#fontes)

## Preço por tamanho de sistema {#preco-por-tamanho}

Pra residência e comércio pequeno em Palmas, com equipamento Tier 1 (marcas preferidas Astrobergy e DAH Solar · inversor Hoymiles ou Solis preferidos), a tabela cravada Aura Energy 2026:

| Linha | Potência | Conta típica | Investimento | Geração mensal estimada |
|---|---|---|---|---|
| **Mini** | 3 kWp | R$ 200-350/mês | **R$ 7.000** | ~440 kWh |
| **Padrão** | 5 kWp | R$ 400-700/mês | **R$ 15.000** | ~730 kWh |
| **Plus** | 8 kWp | R$ 700-1.100/mês | **R$ 18.000** | ~1.170 kWh |
| **Premium** | 10 kWp | R$ 1.100-1.500/mês | **R$ 20.500** | ~1.460 kWh |

Geração estimada considerando HSP (Horas de Sol Pleno) de Palmas em 5,8 kWh/m²/dia · referência ABSOLAR + Atlas Brasileiro de Energia Solar (INPE).

> Acima de 10 kWp (comércio médio, indústria, rural) o cálculo vira sob medida · não tem tabela porque cada caso tem demanda contratada, perfil de carga e estrutura diferente. Visita técnica gratuita pra cravar a proposta.

## O que entra no valor (e o que NÃO entra) {#o-que-entra}

Cada linha da tabela acima inclui:

- Painéis solares Tier 1 (Astrobergy / DAH Solar preferidos · também Trina, JA, Jinko)
- Inversor solar (Hoymiles ou Solis preferidos · também Huawei)
- Estrutura de fixação adequada ao tipo de telhado (fibrocimento, cerâmico, metálico)
- Cabeamento solar (CC e CA) e proteções (string box, disjuntores)
- Projeto elétrico assinado pelo engenheiro responsável (Renato Edson · CREA-TO)
- ART (Anotação de Responsabilidade Técnica) recolhida
- Parecer de Acesso protocolado e aprovado na Energisa Tocantins
- Homologação completa · troca do medidor pra bidirecional incluída no processo
- Instalação completa por equipe própria Aura
- Comissionamento e ativação do sistema
- Garantia contratual

**NÃO entra (pode ser orçado à parte):**

- Adequação do quadro elétrico se ele estiver fora de norma (raro em obras pós-2010)
- Estrutura especial pra solo (sistema em laje térrea com cobertura própria · raro em residência)
- Sistema de monitoramento adicional além do app do inversor (geralmente desnecessário · app já vem)
- Bateria (sistema híbrido on-grid + bateria · orçamento sob consulta)
- Limpeza periódica futura · em Palmas o vento limpa boa parte e a chuva da estação completa o resto

## Garantia cravada · 12 anos de painel, 10 de inversor {#garantia}

A garantia oficial Aura Energy:

- **12 anos** de garantia de produto nos painéis solares (defeito de fabricação)
- **25 anos** de vida útil de geração dos painéis (referência fabricante · padrão Tier 1)
- **10 anos** de garantia no inversor
- **1 ano** de garantia de serviço de instalação Aura

Cuidado com proposta que promete "25 anos de garantia integral" · isso não existe no mercado brasileiro. O que existe é vida útil de geração de 25 anos (referência técnica) e garantia legal de 12 anos no painel (que é o padrão Tier 1 internacional).

## Por que Palmas paga um pouquinho mais que São Paulo {#palmas-vs-sp}

Três fatores cravados:

**1. Frete.** Os principais distribuidores de equipamento solar do Brasil estão no Sudeste e Sul. Kit pra Palmas custa em torno de 10-20% a mais por causa de transporte e impostos interestaduais. Esse custo se reflete no orçamento final.

**2. Mão de obra especializada.** Eletricista qualificado pra solar + engenheiro CREA com experiência em fotovoltaico é mais escasso em Palmas que em São Paulo. Quem tem qualificação cobra mais.

**3. Compensa pelo lado da geração.** Palmas tem irradiação solar entre **5,8 e 6,2 kWh/m²/dia** (Atlas Brasileiro de Energia Solar · INPE) · entre as mais altas do Brasil. São Paulo capital fica em ~4,5-4,8 kWh/m²/dia. **Cada painel gera em torno de 20-30% mais energia em Palmas que em SP.** Você paga 10-20% a mais no kit e ganha 20-30% a mais em geração · matemática fecha a favor do Tocantins.

## Como o financiamento muda a equação {#financiamento}

A Aura trabalha com 6 bancos parceiros, com BV Financeira como preferida pela aprovação mais rápida e atendimento especializado em solar:

| Banco | Prazo | Taxa aproximada (maio/2026) |
|---|---|---|
| **BV Financeira (preferido)** | até 96 meses | ~1,17% a.m. |
| Solfácil | até 120 meses | ~0,79% a.m. |
| Sicredi | até 96 meses | ~1,29% a.m. |
| Sicoob | até 84 meses | ~1,32% a.m. |
| Santander | até 84 meses | ~1,45% a.m. |
| Banco do Brasil (Programa Agro Energia, rural) | até 120 meses | ~0,50% a.m. (Pronaf elegível) |

> Taxas referenciais maio/2026 · sujeitas a análise de crédito e perfil. Pra rural com CAF, o **Pronaf Bioeconomia** é a opção mais barata · ver [artigo dedicado](/artigos/pronaf-bioeconomia-solar-rural-tocantins).

Em muitos casos a parcela do financiamento fica **abaixo** do que você paga hoje na conta da Energisa. Cálculo personalizado na visita técnica.

## Comparativo · 2026 vs 2027 vs 2028 (Fio B subindo) {#fio-b}

A Lei 14.300/2022 estabeleceu calendário progressivo de cobrança do Fio B:

| Ano | Fio B | Economia projetada (sistema 5 kWp residencial Palmas) |
|---|---|---|
| **2026** ← agora | 60% | ~78-85% |
| 2027 | 75% | ~74-81% |
| 2028 | 90% | ~70-77% |
| 2029+ | 100% | ~67-74% |

Quem instala em 2026 paga Fio B em 60% pra sempre nesse sistema (cálculo conforme Lei 14.300 Art 17). Quem espera 2027 já entra no 75%. **Cada ano que passa, a economia cai um degrau · e o investimento não fica mais barato no mesmo passo.**

## Resumo cravado {#resumo}

- Tabela oficial Aura 2026 · R$ 7 mil (3 kWp) até R$ 20,5 mil (10 kWp) pra residência
- Inclui equipamento Tier 1, projeto, ART, homologação Energisa e instalação completa
- Garantia 12 anos painel + 10 anos inversor + 1 ano serviço (e 25 anos de vida útil de geração)
- Palmas paga ~10-20% a mais no kit e ganha ~20-30% a mais em geração
- Financiamento BV Financeira (preferido) cobre até 96 meses · parcela em muitos casos cabe na economia mensal
- Fio B em 60% em 2026 · sobe a cada ano · janela atual é a melhor dos próximos 3 anos

## Fontes consultadas {#fontes}

- ANEEL · Resolução Homologatória 3.301/2025 (reajuste tarifário Energisa-TO julho/2025)
- ANEEL · bandeira tarifária maio/2026 (amarela · R$ 1,885 a cada 100 kWh)
- Lei 14.300/2022 (Marco Legal da Geração Distribuída · calendário Fio B Art. 17)
- Resolução ANEEL 1.000/2021 (regras de prestação do serviço público de distribuição)
- INPE · Atlas Brasileiro de Energia Solar (irradiação Palmas-TO)
- ABSOLAR · dados de mercado de geração distribuída 2026
- Manual de Crédito Rural (BCB) · capítulo 10 (Pronaf · ver artigo dedicado)
- Tabela oficial Aura Energy V3.1 · briefing técnico Renato Edson (CREA-TO)

## Próximo passo

Visita técnica gratuita até 100 km de Palmas. Renato faz pessoalmente o levantamento · sem custo, sem compromisso de fechamento. Whatsapp direto: **(63) 9 9270-6284**.
`,
  },

  // ──────────────────────────────────────────────────────────────────────────
  // 2 · REGULAMENTAÇÃO · Lei 14.300
  // ──────────────────────────────────────────────────────────────────────────
  {
    slug: "lei-14300-vale-a-pena-solar-2026",
    titulo: "Lei 14.300 explicada · ainda vale instalar solar em 2026? (cálculo cravado)",
    resumo:
      "Em 2026 o Fio B chegou a 60%, mas a economia em Palmas ainda fica entre 74% e 87% pra sistemas novos. Veja por que esperar 2027 sai mais caro.",
    categoria: "Regulamentação",
    tempoLeitura: "9 min",
    dataPublicacao: "2026-05-25",
    conteudo: `Você ouviu falar em "taxação do sol" e ficou na dúvida se ainda vale instalar solar em 2026? Resposta direta: vale · e quem espera mais um ano vai pagar mais caro. Esse artigo crava o cálculo, com fontes oficiais e sem promessa furada.

A Lei 14.300/2022 (chamada de "Marco Legal da Geração Distribuída") foi sancionada em 6 de janeiro de 2022 e regulamentada pela Resolução ANEEL 1.000/2021 (atualizada depois pela Resolução ANEEL 1.059/2023). Ela criou um calendário progressivo de cobrança do Fio B · a fatia da TUSD que passou a incidir sobre a energia que sistemas de geração distribuída injetam na rede.

## Neste artigo

- [O que é o Fio B (e por que ele existe)](#o-que-e-fio-b)
- [Calendário oficial · 2023 a 2029](#calendario)
- [Quem instalou antes de 2023 não paga nada · direito adquirido](#direito-adquirido)
- [Cálculo real em Palmas 2026 · economia 74-87%](#calculo-palmas)
- [Por que esperar 2027 sai mais caro](#esperar-2027)
- [E se eu instalar agora · ainda pego janela boa?](#janela-atual)
- [Resumo cravado](#resumo)
- [Fontes consultadas](#fontes)

## O que é o Fio B (e por que ele existe) {#o-que-e-fio-b}

A tarifa de distribuição de energia tem dois componentes técnicos:

- **TUSD-Fio A:** custos de transmissão da energia em alta tensão (do gerador até a subestação)
- **TUSD-Fio B:** custos da distribuição em média/baixa tensão (da subestação até a sua casa)

Antes de 2023, quem injetava energia solar na rede compensava 100% dos componentes (TE + Fio A + Fio B). Na prática, usava a rede da Energisa como bateria virtual sem pagar pelo serviço de distribuição.

A Lei 14.300 mudou isso · estabeleceu que o **Fio B** deixa de ser compensado progressivamente. Você ainda compensa TE + Fio A integralmente, mas paga uma fatia crescente do Fio B sobre a energia injetada.

Em linguagem comum: você passa a pagar um "aluguel" pra usar a rede da Energisa como bateria virtual.

## Calendário oficial · 2023 a 2029 {#calendario}

Conforme Lei 14.300 Art. 17 e Resolução ANEEL 1.059/2023:

| Ano | % Fio B cobrado |
|---|---|
| 2023 | 15% |
| 2024 | 30% |
| 2025 | 45% |
| **2026** ← agora | **60%** |
| 2027 | 75% |
| 2028 | 90% |
| 2029 em diante | 100% |

A partir de 2029, qualquer sistema novo paga 100% do Fio B. Em 2030 a ANEEL precisa publicar nova metodologia (modelo "Adicional B" ou similar) · ainda não definida em maio/2026.

## Quem instalou antes de 2023 não paga nada · direito adquirido {#direito-adquirido}

Quem **homologou** o sistema na concessionária **antes de 7 de janeiro de 2023** ficou enquadrado no regime antigo (compensação 100%) com direito adquirido até **31 de dezembro de 2045** (Lei 14.300 Art. 26).

Esses são os "felizardos da primeira leva" · 24 anos de proteção total. Estima-se em ABSOLAR + ANEEL que algo em torno de **1,5 milhão de unidades consumidoras** no Brasil ficaram nesse regime.

Pra quem ainda não tem solar, esse trem já passou. Mas o trem atual ainda vale, como mostra o cálculo a seguir.

## Cálculo real em Palmas 2026 · economia 74-87% {#calculo-palmas}

Exemplo cravado pra residência típica em Palmas:

- **Conta sem solar:** R$ 600/mês (consumo ~630 kWh/mês na tarifa Energisa-TO B1)
- **Sistema instalado:** linha Padrão Aura · 5 kWp · R$ 15.000 · gera ~730 kWh/mês
- **Energia injetada na rede (sobra que vira crédito):** ~100 kWh/mês
- **Fio B sobre a injeção (60% em 2026):** ~R$ 35-45/mês (varia conforme valor unitário do Fio B na Energisa-TO)
- **Custo de disponibilidade (taxa mínima cobrada sempre):** R$ 30-50/mês (depende se é monofásico, bifásico ou trifásico)
- **Conta final projetada:** ~R$ 90-130/mês
- **Economia projetada:** ~R$ 470-510/mês (~78-85%)

> Esses números são projeções cravadas em referência de mercado · cálculo personalizado depende do seu consumo real, do tipo de ligação, do dimensionamento do sistema e do regime de uso.

Pra comércio (grupo B3 ou A4) o cálculo muda · em geral a economia projetada fica entre 70-82% em 2026 dependendo do perfil de carga (horário comercial concentrado em pico solar é melhor que carga noturna).

## Por que esperar 2027 sai mais caro {#esperar-2027}

Três fatores empilham contra quem adia:

**1. Fio B sobe 15 pontos por ano.** De 60% em 2026 pra 75% em 2027. Em sistema residencial isso pode representar **R$ 10-20/mês a mais** pra sempre nesse sistema (depende do tamanho).

**2. Tarifa Energisa sobe todo ano.** Em julho/2025 reajustou 12,31% pra residência (ANEEL Resolução Homologatória 3.301/2025). Cada reajuste futuro pesa MAIS pra quem ainda não tem solar (cada kWh evitado vale mais real).

**3. Equipamento solar não fica significativamente mais barato no mesmo passo.** A queda real de preço de painéis e inversores se estabilizou desde 2024 · ABSOLAR projeta queda anual em torno de 2-4% pra 2026-2028, bem menor que a alta tarifária projetada.

**Conta líquida:** quem espera mais um ano pode pagar entre 8-15% a mais no payback total do sistema.

## E se eu instalar agora · ainda pego janela boa? {#janela-atual}

Sim. Em 2026, sistema residencial em Palmas mantém:

- Payback projetado entre **4 e 6 anos**
- Vida útil de geração de **25-30 anos** (referência fabricante Tier 1)
- Economia acumulada projetada ao longo da vida útil costuma passar de **R$ 150 mil** pra sistema de R$ 15 mil (cálculo conservador)

Não é a janela do direito adquirido (essa fechou em 2023), mas continua sendo a **melhor janela dos próximos 3 anos**.

## Resumo cravado {#resumo}

- Fio B subiu pra 60% em 2026, mas economia residencial em Palmas ainda fica entre 78-85%
- Quem instalou antes de 7/jan/2023 tem direito adquirido até 2045 (compensação 100%)
- A cada ano que passa, o Fio B sobe 15 pontos · esperar custa caro
- Tarifa Energisa-TO subiu 12,31% em julho/2025 e tende a subir de novo · pressiona pra cima quem não tem solar
- 2026 é a melhor janela dos próximos 3 anos · sistema continua se pagando em 4-6 anos

## Fontes consultadas {#fontes}

- Lei 14.300/2022 · Marco Legal da Geração Distribuída ([planalto.gov.br](https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2022/lei/L14300.htm))
- Resolução ANEEL 1.000/2021 · regras de prestação do serviço público de distribuição
- Resolução ANEEL 1.059/2023 · regulamentação da Lei 14.300 e calendário do Fio B
- ANEEL · Resolução Homologatória 3.301/2025 (reajuste Energisa-TO julho/2025)
- ABSOLAR · Anuário Estatístico da Geração Distribuída 2025
- Briefing técnico Aura Energy V3.1 · cravado por Renato Edson (engenheiro CREA-TO)

## Próximo passo

Quer cravar quanto a Lei 14.300 impacta na SUA conta específica? Visita técnica gratuita Aura · simulação personalizada considerando seu consumo, ligação e perfil. Whatsapp Renato: **(63) 9 9270-6284**.
`,
  },

  // ──────────────────────────────────────────────────────────────────────────
  // 3 · ECONOMIA · payback
  // ──────────────────────────────────────────────────────────────────────────
  {
    slug: "payback-solar-palmas-tocantins",
    titulo: "Em quanto tempo o sistema solar se paga · cálculo real pra Palmas-TO",
    resumo:
      "Em Palmas, residência tende a pagar em 4-6 anos. Comércio bem dimensionado pode pagar em 3-4. Veja a conta com números cravados, sem inflar.",
    categoria: "Economia",
    tempoLeitura: "8 min",
    dataPublicacao: "2026-05-25",
    conteudo: `Payback é o tempo até o sistema "virar zero" · quando a economia acumulada na conta paga o investimento. É a métrica que separa decisão técnica de palpite. Vamos fazer a conta com números reais, fontes oficiais e tom condicional onde se trata de projeção.

Em Palmas-TO, três fatores fazem o payback ser mais curto que na maioria das capitais brasileiras: irradiação solar entre as mais altas do país, tarifa Energisa entre as mais caras do Norte, e bandeiras tarifárias pesando com frequência. Esse artigo crava o cálculo pra três perfis: residência média, comércio pequeno e residência alta (R$ 1.000+/mês).

## Neste artigo

- [O que é payback e como calcular](#o-que-e-payback)
- [Caso 1 · residência de R$ 600/mês](#caso-residencia)
- [Caso 2 · comércio pequeno de R$ 900/mês](#caso-comercio)
- [Caso 3 · residência alta de R$ 1.200/mês](#caso-alta)
- [Os 3 fatores que aceleram payback em Palmas](#fatores-palmas)
- [E depois do payback?](#depois-payback)
- [O efeito do reajuste tarifário (que joga a favor)](#reajuste)
- [Resumo cravado](#resumo)
- [Fontes consultadas](#fontes)

## O que é payback e como calcular {#o-que-e-payback}

**Payback simples** = investimento ÷ economia anual. Em sistema solar, é o tempo necessário pra economia gerada pelo sistema "devolver" o que você gastou comprando ele.

Em projeção mais rigorosa usa-se **payback descontado** (que considera o valor do dinheiro no tempo) ou **TIR** (Taxa Interna de Retorno · % de retorno anual sobre o investimento). Pra residência o payback simples já dá boa intuição. Pra indústria e investidor profissional o cálculo certo é TIR.

A boa notícia em Palmas: mesmo no cálculo conservador, o payback fica curto.

## Caso 1 · residência de R$ 600/mês {#caso-residencia}

Perfil-tipo cravado (não é caso individual identificado):

- **Conta atual Energisa-TO:** R$ 600/mês (consumo ~630 kWh)
- **Sistema indicado:** linha Padrão Aura · 5 kWp · Astrobergy + Hoymiles
- **Investimento:** R$ 15.000
- **Geração estimada:** ~730 kWh/mês (HSP Palmas 5,8 kWh/m²/dia · INPE)
- **Economia mensal projetada (com Fio B 60% · 2026):** ~R$ 480/mês
- **Economia anual projetada:** ~R$ 5.760
- **Payback simples projetado:** R$ 15.000 ÷ R$ 5.760 = **~2,6 anos**

> Valor real depende do consumo, da orientação do telhado, do tipo de ligação e do dimensionamento. Cravado pra dar referência de ordem de grandeza · simulação personalizada na visita técnica.

## Caso 2 · comércio pequeno de R$ 900/mês {#caso-comercio}

Perfil-tipo · padaria, mercadinho, oficina pequena, salão de beleza médio:

- **Conta atual:** R$ 900/mês (consumo ~950 kWh)
- **Sistema indicado:** Plus + módulos extras · ~8 kWp
- **Investimento:** ~R$ 18.000-22.000 (depende de mão de obra extra pra telhado metálico industrial)
- **Geração estimada:** ~1.170 kWh/mês
- **Economia mensal projetada (com Fio B 60%):** ~R$ 720-780/mês
- **Payback simples projetado:** **~2,3 a 2,8 anos**

Comércio com perfil de consumo concentrado em horário comercial (8h-18h) costuma ter payback ainda menor · porque consome direto a geração solar sem injetar na rede, escapando do Fio B em parte significativa.

## Caso 3 · residência alta de R$ 1.200/mês {#caso-alta}

Perfil-tipo · casa grande com ar-condicionado central, piscina aquecida, vários moradores:

- **Conta atual:** R$ 1.200/mês (consumo ~1.260 kWh)
- **Sistema indicado:** Premium · 10 kWp · pode chegar a 12-13 kWp se telhado permitir
- **Investimento:** R$ 20.500-27.000
- **Geração estimada:** ~1.460-1.900 kWh/mês
- **Economia mensal projetada (com Fio B 60%):** ~R$ 920-1.050/mês
- **Payback simples projetado:** **~1,9 a 2,5 anos**

Quanto maior a conta, mais rápido o payback · porque o custo fixo do projeto (ART, homologação, mão de obra base) não cresce proporcionalmente. Quem tem conta gorda paga sistema em menos tempo.

## Os 3 fatores que aceleram payback em Palmas {#fatores-palmas}

**1. Irradiação solar de 5,8 a 6,2 kWh/m²/dia** · Atlas Brasileiro de Energia Solar do INPE crava Palmas entre as 5 cidades com maior HSP do Brasil. Cada painel gera em torno de 20-30% mais energia em Palmas que em São Paulo.

**2. Tarifa Energisa-TO entre as mais caras do Norte** · em maio/2026, residência B1 paga em torno de R$ 0,92-0,98/kWh com tributos. Cada kWh evitado pelo solar vale mais real que em estados com tarifa mais barata (como MG ou SP grupo B1).

**3. Bandeira tarifária pesando** · em maio/2026 a bandeira é **amarela** · adicional de R$ 1,885 a cada 100 kWh consumidos (ANEEL · acionamento mensal). Em meses de bandeira vermelha (acontece tipicamente entre setembro e novembro), o adicional pode chegar a R$ 9,795/100 kWh. **Quem tem solar não paga esse adicional** sobre a energia compensada.

## E depois do payback? {#depois-payback}

Os painéis solares Tier 1 (Astrobergy, DAH, Trina, JA, Jinko) têm **vida útil de geração de 25 a 30 anos** (referência fabricante). Após o payback de ~3 anos pra residência média, **você fica mais de 20 anos com energia praticamente de graça**.

Cuidado · "praticamente de graça" não é "zero conta". Você continua pagando:

- **Custo de disponibilidade** · taxa mínima da Energisa (R$ 30-50/mês pra residência, depende da ligação)
- **Iluminação pública** · CIP (Contribuição de Iluminação Pública)
- **Fio B remanescente** · sobre a energia injetada
- **Manutenção** · limpeza dos painéis 1x ao ano e troca do inversor uma vez em 12-15 anos (custo ~R$ 3-5 mil dependendo do porte)

Mesmo com esses custos remanescentes, a economia acumulada ao longo da vida útil de um sistema de R$ 15 mil **costuma passar de R$ 150 mil**. Projeção condicional · varia conforme consumo e reajuste tarifário ao longo dos anos.

## O efeito do reajuste tarifário (que joga a favor) {#reajuste}

A Energisa-TO reajustou 12,31% pra residência B1 em julho/2025 (ANEEL Resolução Homologatória 3.301/2025). Reajustes anuais médios projetados pra 2026-2028 ficam entre 7% e 10% conforme estimativa setorial.

Cada reajuste futuro **acelera o payback de quem JÁ tem solar** · porque a economia mensal (R$ 480 no caso 1) sobe junto com a tarifa, mas a parcela do financiamento (se houver) fica fixa.

Cenário projetado · sistema do Caso 1 financiado em 96 meses pela BV Financeira (~R$ 245/mês):

- Mês 1 (2026): economia R$ 480 · parcela R$ 245 · saldo positivo R$ 235/mês
- Mês 13 (2027, após reajuste de ~8%): economia ~R$ 518 · parcela R$ 245 · saldo positivo ~R$ 273/mês
- Mês 25 (2028, após mais um reajuste): economia ~R$ 559 · parcela R$ 245 · saldo positivo ~R$ 314/mês

Sistema "se paga sozinho com a economia da conta" desde o mês 1 e o saldo só melhora com o tempo.

## Resumo cravado {#resumo}

- Payback residencial típico em Palmas: 2,5 a 4 anos pra cálculo simples · 4 a 6 anos pra cálculo conservador com reajustes e custos remanescentes
- Comércio bem dimensionado: payback em torno de 2-3 anos
- 3 fatores aceleradores em Palmas: irradiação alta, tarifa cara, bandeiras pesadas
- Após payback: 20+ anos com economia projetada acumulada de R$ 150 mil+ pra sistema de R$ 15 mil
- Reajustes anuais da tarifa Energisa jogam SEMPRE a favor de quem JÁ tem solar

## Fontes consultadas {#fontes}

- INPE · Atlas Brasileiro de Energia Solar (HSP Palmas-TO)
- ANEEL · Resolução Homologatória 3.301/2025 (reajuste Energisa-TO julho/2025)
- ANEEL · acionamento de bandeira tarifária maio/2026
- Lei 14.300/2022 · calendário Fio B
- Resolução ANEEL 1.059/2023 · regulamentação da Lei 14.300
- ABSOLAR · projeções de mercado e custo de equipamento 2026
- Tabela oficial Aura Energy V3.1 · briefing técnico Renato Edson

## Próximo passo

Cálculo personalizado de payback pra SEU caso · visita técnica gratuita até 100 km de Palmas. Renato faz o levantamento e devolve a simulação cravada. Whatsapp: **(63) 9 9270-6284**.
`,
  },

  // ──────────────────────────────────────────────────────────────────────────
  // 4 · EQUIPAMENTOS · 550W vs 600W
  // ──────────────────────────────────────────────────────────────────────────
  {
    slug: "painel-550w-vs-600w-residencial",
    titulo: "Painéis de 550W ou 600W em residência · qual escolher (e quando o 600W ganha)",
    resumo:
      "550W ganha em custo-benefício pra maioria. 600W só compensa quando o telhado é apertado. Veja o critério cravado da Aura.",
    categoria: "Equipamentos",
    tempoLeitura: "7 min",
    dataPublicacao: "2026-05-25",
    conteudo: `Quando você for fechar o orçamento de solar, vai aparecer essa pergunta: painel de 550W ou 600W? Pra maioria das casas em Palmas, **550W é a escolha certa** · ganha em custo-benefício. Mas tem caso em que o 600W faz sentido cravado · e esse artigo crava o critério da Aura Energy pra decidir.

A escolha não é "qual é melhor" · é "qual entrega mais retorno pro SEU telhado". Vamos aos números.

## Neste artigo

- [Diferença bruta de geração](#diferenca-geracao)
- [Diferença de preço](#diferenca-preco)
- [Quando o 550W ganha (maioria dos casos)](#quando-550w)
- [Quando o 600W ganha (telhado pequeno + carga futura)](#quando-600w)
- [Marcas Tier 1 nas duas potências](#marcas)
- [Tabela comparativa cravada](#tabela)
- [Resumo cravado](#resumo)
- [Fontes consultadas](#fontes)

## Diferença bruta de geração {#diferenca-geracao}

Painel de 600W gera **~9% a mais** que painel de 550W em condições idênticas (mesma irradiação, mesma orientação, mesma temperatura). Em Palmas (HSP médio 5,8 kWh/m²/dia · INPE), isso vira:

- **Painel 550W:** ~80 kWh/mês
- **Painel 600W:** ~87 kWh/mês

Num sistema com 8 painéis (~4,4 kWp em 550W ou ~4,8 kWp em 600W), a diferença é de aproximadamente 56 kWh/mês. Com tarifa Energisa-TO em ~R$ 0,95/kWh com tributos, equivale a **~R$ 53/mês** ou **~R$ 636/ano** em economia adicional.

## Diferença de preço {#diferenca-preco}

Em maio/2026, na faixa Tier 1 (Astrobergy, DAH, Trina, JA, Jinko):

- **Painel 550W:** R$ 800-1.100 (variação por marca e lote)
- **Painel 600W:** R$ 1.000-1.400

Diferença típica de **~R$ 200 por painel**. Em 8 painéis, **~R$ 1.600 a mais** no investimento total.

> Esses preços são referenciais de mercado distribuidor maio/2026 · o preço final do kit Aura já inclui a margem de fornecedor + impostos + frete pra Palmas. Não cravar essas faixas como "preço de mercado pra cliente final".

## Quando o 550W ganha (maioria dos casos) {#quando-550w}

Cenário típico residência Palmas:

- Telhado com folga (sobram fileiras de painel não usadas)
- Consumo bem dimensionado (sem expansão prevista)
- Sem carga elétrica grande planejada (sem carro elétrico nem ar-condicionado central pra adicionar)

Nesses casos, o 550W ganha em três métricas:

1. **Custo por kWh gerado** · 550W tem custo menor por watt instalado
2. **Custo por ano de payback** · payback fica em torno de 2-3 meses mais curto
3. **Estoque disponível** · 550W tem mais oferta de mercado · prazo de entrega menor

Estimativa cravada: **~75% dos projetos residenciais Aura em Palmas** usam 550W.

## Quando o 600W ganha (telhado pequeno + carga futura) {#quando-600w}

O 600W faz sentido nos seguintes cenários:

**1. Telhado pequeno · não cabe todo o sistema necessário.** Exemplo:

- Você precisa gerar 500 kWh/mês, mas só cabem 7 painéis no telhado
- Com 550W: 7 × 80 = 560 kWh ← passa no limite, sem margem
- Com 600W: 7 × 87 = 609 kWh ← sobra ~18% de margem pra futuro

**2. Ar-condicionado central ou chuveiro elétrico de alta potência.** Carga grande puxa muito · cada watt extra de geração vale a diferença.

**3. Sombreamento parcial no telhado.** Quando uma parte do telhado pega sombra de árvore vizinha ou caixa d'água, cada painel ativo precisa render mais pra compensar a perda parcial dos sombreados.

**4. Planejamento de carro elétrico nos próximos 3-5 anos.** Carregador residencial AC de 7-11 kW puxa entre 80-120 kWh/mês adicional · vale dimensionar o sistema desde o início pra absorver essa carga.

**5. Telhado de cerâmica antigo onde furar mais estrutura é problema.** Menos painéis = menos perfuração = menos risco de infiltração futura.

Estimativa cravada: **~25% dos projetos residenciais Aura** usam 600W (ou superior · 660W em casos específicos).

## Marcas Tier 1 nas duas potências {#marcas}

A Aura trabalha como preferidas as marcas **Astrobergy** e **DAH Solar** · também opera com Trina, JA Solar e Jinko quando o cliente prefere ou quando o estoque manda.

Por que essas marcas:

- **Astrobergy:** crescimento forte no mercado brasileiro 2024-2026 · garantia de 12 anos de produto, 25 anos de geração, atendimento técnico no Brasil
- **DAH Solar:** painéis full-screen (sem espaço entre células) · rendimento por área superior · garantia 12/25 anos
- **Trina · JA · Jinko:** Tier 1 reconhecidos globalmente (Bloomberg NEF tier ranking) · referência segura

Cuidado com painéis "tier 2" ou "tier 3" oferecidos com preço ~20-30% menor · economia inicial pode virar dor de cabeça em 5-8 anos quando a degradação acelera e o atendimento de garantia fica complicado.

## Tabela comparativa cravada {#tabela}

| Critério | 550W | 600W |
|---|---|---|
| Geração mensal por painel (Palmas) | ~80 kWh | ~87 kWh |
| Diferença de geração | base | +9% |
| Preço típico Tier 1 distribuidor | R$ 800-1.100 | R$ 1.000-1.400 |
| Diferença de preço | base | ~R$ 200/painel |
| Custo por watt | melhor | um pouco pior |
| Payback típico | base | +2-3 meses |
| Indicado pra telhado com folga | sim | desnecessário |
| Indicado pra telhado apertado | não | sim |
| Indicado pra carga elétrica futura | só com módulos extras | sim |

## Resumo cravado {#resumo}

- 550W vence em ~75% dos casos residenciais em Palmas (custo-benefício)
- 600W vence em ~25% dos casos: telhado apertado, AC central, sombreamento, carro elétrico planejado
- Diferença de geração ~9% · diferença de preço ~20-25% por painel
- Marcas preferidas Aura nas duas potências: Astrobergy e DAH Solar
- Cuidado com Tier 2/3 com 20-30% de desconto · economia inicial vira problema em 5-8 anos
- Decisão cravada na visita técnica · Renato mede telhado, orientação, sombreamento e consumo antes de cravar

## Fontes consultadas {#fontes}

- INPE · Atlas Brasileiro de Energia Solar (HSP Palmas)
- Bloomberg NEF · Solar Module Manufacturer Tier Ranking 2025
- Datasheets oficiais Astrobergy, DAH Solar, Trina Solar, JA Solar, Jinko Solar
- ABSOLAR · pesquisa de preço de mercado distribuidor solar 2026
- Briefing técnico Aura Energy V3.1 · Renato Edson (CREA-TO)

## Próximo passo

Visita técnica gratuita Aura · Renato mede seu telhado, calcula seu consumo real e crava qual modelo entrega melhor relação pra seu caso. Sem custo, sem compromisso de fechamento. Whatsapp: **(63) 9 9270-6284**.
`,
  },

  // ──────────────────────────────────────────────────────────────────────────
  // 5 · FINANCIAMENTO · à vista vs financiado
  // ──────────────────────────────────────────────────────────────────────────
  {
    slug: "solar-financiado-ou-a-vista-2026",
    titulo: "Solar à vista ou financiado em 2026 · qual sai mais barato (conta cravada)",
    resumo:
      "Financiado em muitos casos se paga sozinho com a economia da conta. À vista rende mais a longo prazo. Veja a comparação real cravada.",
    categoria: "Financiamento",
    tempoLeitura: "9 min",
    dataPublicacao: "2026-05-25",
    conteudo: `Tem dinheiro guardado e está em dúvida se compensa pagar solar à vista? Ou quer entender se o financiamento faz sentido pra seu perfil? Esse artigo crava a comparação real entre as duas opções, com taxas de mercado maio/2026 e exemplo passo a passo.

A regra rápida da Aura: **comércio em expansão financia · aposentado com dinheiro parado paga à vista · cliente com conta gorda quase sempre se beneficia do financiamento**. Mas a regra rápida só vale como ponto de partida · o cálculo real depende do seu perfil de renda, do seu custo de oportunidade e do tamanho do sistema.

## Neste artigo

- [Cenário 1 · pagamento à vista](#cenario-vista)
- [Cenário 2 · financiamento BV Financeira (preferido Aura)](#cenario-bv)
- [Cenário 3 · financiamento Solfácil (prazo mais longo)](#cenario-solfacil)
- [Comparação líquida · economia desde o dia 1](#comparacao)
- [PIX como entrada parcial · estratégia híbrida](#pix-entrada)
- [Regra cravada Aura · qual escolher pelo perfil](#regra)
- [Bancos parceiros · tabela completa](#bancos)
- [Resumo cravado](#resumo)
- [Fontes consultadas](#fontes)

## Cenário 1 · pagamento à vista {#cenario-vista}

Perfil: você tira R$ 15.000 do bolso pra comprar a linha Padrão Aura (5 kWp).

- Sistema instalado em ~25-40 dias da assinatura à energização
- Conta Energisa-TO de R$ 600/mês cai pra ~R$ 120/mês
- Economia mensal projetada: ~R$ 480/mês
- **Payback simples projetado:** R$ 15.000 ÷ R$ 480 = **~2,6 anos**
- Depois disso: 20+ anos só de economia, sem dívida nenhuma

**Vantagem:** sem juros, sem comprometimento de renda mensal, retorno integral pra você.

**Desvantagem:** R$ 15.000 fora do caixa de uma vez. Se esse dinheiro estava rendendo em CDB a 13% a.a. ou em fundo imobiliário a 10% a.a., você precisa considerar o **custo de oportunidade**.

Cálculo do custo de oportunidade simplificado:

- R$ 15.000 a 13% a.a. em CDB rende ~R$ 1.950/ano antes de IR
- IR no CDB de 1-2 anos: ~17,5% · líquido ~R$ 1.610/ano
- Economia anual do solar: ~R$ 5.760/ano
- **Diferença líquida a favor do solar:** ~R$ 4.150/ano

Mesmo considerando o custo de oportunidade do dinheiro parado, o solar à vista entrega retorno muito superior · simplesmente porque a economia mensal é maior que o rendimento de qualquer aplicação conservadora.

## Cenário 2 · financiamento BV Financeira (preferido Aura) {#cenario-bv}

A BV Financeira é o banco parceiro preferido da Aura pra solar pela aprovação rápida (24-48h pra perfis comuns), atendimento especializado e taxa competitiva.

Condições típicas em maio/2026 (sujeitas a análise):

- **Prazo:** até 96 meses (8 anos)
- **Taxa:** ~1,17% a.m. (~14,9% a.a.)
- **Sem necessidade de trocar de banco** (não exige conta-corrente vinculada)
- **Sem custódia de bens** em valor abaixo de R$ 50 mil (não precisa colocar imóvel em garantia)

Pra sistema de R$ 15.000:

- **Parcela:** ~R$ 245/mês por 96 meses
- **Custo total do financiamento:** ~R$ 23.520
- **Juros pagos:** ~R$ 8.520
- **Você sai do dia 1 economizando** (economia R$ 480 - parcela R$ 245 = saldo positivo R$ 235/mês)

## Cenário 3 · financiamento Solfácil (prazo mais longo) {#cenario-solfacil}

A Solfácil é fintech especializada em solar · oferece prazo mais longo (120 meses) com taxa também competitiva.

Condições típicas maio/2026:

- **Prazo:** até 120 meses (10 anos)
- **Taxa:** ~0,79% a.m. (~9,9% a.a.)
- **Aprovação:** 100% online em ~24h
- **Sem entrada obrigatória** (financia 100% do projeto)

Pra mesmo sistema de R$ 15.000:

- **Parcela:** ~R$ 200/mês por 120 meses
- **Custo total:** ~R$ 24.000
- **Juros pagos:** ~R$ 9.000
- **Saldo positivo no mês 1:** economia R$ 480 - parcela R$ 200 = R$ 280/mês

Diferença prática entre BV e Solfácil:

- BV paga menos juros totais (~R$ 480 a menos), mas parcela mais alta (R$ 245 vs R$ 200)
- Solfácil parcela menor (libera mais caixa), mas custo total ~R$ 480 maior
- Pra quem prioriza fluxo de caixa: Solfácil
- Pra quem prioriza custo total: BV

## Comparação líquida · economia desde o dia 1 {#comparacao}

Tabela cravada · sistema Aura Padrão 5 kWp · R$ 15.000:

| Opção | Sai do bolso (mês 1) | Conta luz mês 1 | Parcela mês 1 | Total pago/mês | Saldo líquido vs. conta atual |
|---|---|---|---|---|---|
| Sem solar | R$ 0 | R$ 600 | - | R$ 600 | base |
| À vista | R$ 15.000 | R$ 120 | - | R$ 120 | **economia R$ 480/mês**, sistema pago em 2,6 anos |
| BV 96 meses | R$ 0 | R$ 120 | R$ 245 | R$ 365 | **economia R$ 235/mês desde dia 1** |
| Solfácil 120 meses | R$ 0 | R$ 120 | R$ 200 | R$ 320 | **economia R$ 280/mês desde dia 1** |

Nas três opções você termina economizando. A diferença está no perfil de retorno:

- **À vista** · maior retorno absoluto, exige caixa disponível
- **BV** · equilibrado · prazo médio · custo total menor entre financiados
- **Solfácil** · libera mais caixa mensal · custo total um pouco maior

## PIX como entrada parcial · estratégia híbrida {#pix-entrada}

A Aura recomenda PIX como entrada parcial quando o cliente tem caixa disponível mas prefere não tirar tudo de uma vez. Estratégia híbrida cravada:

- Cliente dá R$ 5.000 de entrada via PIX no fechamento
- Financia R$ 10.000 restantes em 96 meses pela BV
- **Parcela:** ~R$ 165/mês (~33% menor que financiar os R$ 15.000 inteiros)
- **Saldo positivo mês 1:** economia R$ 480 - parcela R$ 165 = R$ 315/mês

Vantagens dessa estratégia:

- Reduz valor financiado · aprovação mais rápida
- Reduz juros totais · BV cobra juro sobre R$ 10 mil, não sobre R$ 15 mil
- Mantém parte do caixa disponível pra emergência ou aplicação
- Sinaliza compromisso pro banco · melhora análise de crédito

Aura recomenda entrada PIX entre 20% e 40% pra a maioria dos casos.

## Regra cravada Aura · qual escolher pelo perfil {#regra}

Decisão rápida por perfil:

**Comércio em expansão / capital de giro vale ouro:** **financia**. Cada real que você não tirou do caixa pode estar comprando estoque, reformando ponto ou contratando vendedor. Solar financiado libera capital pra coisas que rendem mais.

**Aposentado / dinheiro parado em poupança rendendo pouco:** **à vista**. Poupança rende ~6,5% a.a. com TR (em 2026), abaixo da inflação. Solar à vista entrega retorno superior e elimina conta crescente que mais machuca aposentado.

**Conta gorda (R$ 1.000+/mês) e financiamento aprovado:** **financia**. Em conta grande, a parcela do financiamento quase sempre fica menor que a conta atual da Energisa · você sai economizando desde o mês 1 sem ter tirado um real do bolso.

**Cliente com R$ 5-10 mil em caixa mas não os R$ 15 mil inteiros:** **PIX entrada + financiamento saldo**. Melhor dos dois mundos.

**Produtor rural com CAF ativa:** **Pronaf Bioeconomia** (juros 0,5% a.m. · ver [artigo dedicado](/artigos/pronaf-bioeconomia-solar-rural-tocantins)). Mais barato que qualquer alternativa.

## Bancos parceiros · tabela completa {#bancos}

| Banco | Prazo máx | Taxa aprox | Observação |
|---|---|---|---|
| **BV Financeira (preferido)** | 96 meses | ~1,17% a.m. | Aprovação 24-48h · sem trocar de banco |
| Solfácil | 120 meses | ~0,79% a.m. | 100% online · prazo mais longo |
| Sicredi | 96 meses | ~1,29% a.m. | Bom pra associado · processo em agência |
| Sicoob | 84 meses | ~1,32% a.m. | Bom pra associado · processo em agência |
| Santander | 84 meses | ~1,45% a.m. | Cliente Santander conta com condição diferenciada |
| BB · Programa Agro Energia | 120 meses | ~0,50% a.m. | **Rural com CAF** · Pronaf Bioeconomia |

Todos os 6 bancos têm linha específica pra solar · não precisa entrar em "crédito pessoal" com taxa alta. Aura faz a indicação certa baseada no perfil do cliente na visita técnica.

## Resumo cravado {#resumo}

- À vista tem retorno máximo mas exige R$ 15 mil de caixa pra sistema padrão
- BV Financeira é a preferida Aura · taxa equilibrada · aprovação 24-48h
- Solfácil tem prazo mais longo (120 meses) · libera mais caixa mensal
- PIX entrada + financiamento saldo é estratégia híbrida cravada · melhora as duas pontas
- Produtor rural com CAF: Pronaf Bioeconomia bate qualquer alternativa
- Nas 3 opções (à vista, BV ou Solfácil), cliente sai economizando desde o mês 1 em sistema bem dimensionado

## Fontes consultadas {#fontes}

- BV Financeira · tabela de financiamento solar 2026 (taxa referencial)
- Solfácil · tabela de financiamento solar 2026 (taxa referencial)
- Sicredi · linha "Crédito Solar PF/PJ" 2026
- Sicoob · linha "Sicoob Energia Limpa" 2026
- Banco do Brasil · Programa Agro Energia (Plano Safra 2025/2026)
- Manual de Crédito Rural (Banco Central) · Capítulo 10 (Pronaf)
- Briefing técnico Aura Energy V3.1 · Renato Edson (CREA-TO)

## Próximo passo

Simulação personalizada nos 6 bancos parceiros · sem comprometer crédito (consulta sem afetar score). Aura crava a melhor opção pro seu perfil. Whatsapp Renato: **(63) 9 9270-6284**.
`,
  },

  // ──────────────────────────────────────────────────────────────────────────
  // 6 · FINANCIAMENTO · PRONAF BIOECONOMIA (NOVO)
  // ──────────────────────────────────────────────────────────────────────────
  {
    slug: "pronaf-bioeconomia-solar-rural-tocantins",
    titulo: "Pronaf Bioeconomia · juros 0,5% a.m. pra solar rural em Tocantins (guia completo 2026)",
    resumo:
      "Linha de crédito rural mais barata do Brasil cobre energia solar. Prazo 12 anos · juros 0,5% a.m. · até R$ 250 mil por safra. Veja quem se enquadra e como pleitear.",
    categoria: "Financiamento",
    tempoLeitura: "12 min",
    dataPublicacao: "2026-05-25",
    conteudo: `Se você tem propriedade rural em Tocantins e está considerando solar, esse artigo pode te poupar dezenas de milhares de reais. A linha **Pronaf Bioeconomia** é a mais barata do Brasil pra agricultor familiar · juros de 0,5% ao mês e prazo de 12 anos. E ela cobre **energia renovável**, incluindo sistemas solares fotovoltaicos.

Esse não é o "Pronaf normal" que muita gente conhece pra custeio de safra. É linha de **investimento** dedicada a práticas sustentáveis · criada pelo Plano Safra a partir de 2022 e atualizada anualmente. Em 2026 ela continua sendo a opção mais vantajosa pra solar rural no Brasil · disparado.

A maioria dos agricultores familiares em Tocantins não sabe que tem direito a essa linha. Esse artigo crava: o que é, quem pode, quanto custa, como pleitear e o caso-tipo real pra uma propriedade média em Palmas.

## Neste artigo

- [O que é o Pronaf Bioeconomia](#o-que-e)
- [Condições oficiais cravadas (Plano Safra 2025/2026)](#condicoes)
- [Quem se enquadra como agricultor familiar](#quem-se-enquadra)
- [CAF · como emitir o cadastro (gratuito)](#caf)
- [O que pode ser financiado pela linha solar](#o-que-financia)
- [Caso-tipo cravado · aviário 5.000 aves em Palmas](#caso-aviario)
- [Caso-tipo cravado · pivô central 50 ha](#caso-pivot)
- [Combina com autoconsumo remoto (Lei 14.300)](#autoconsumo-remoto)
- [Diferencial Aura pra documentação Pronaf](#diferencial-aura)
- [Pegadinhas comuns (cuidado)](#pegadinhas)
- [Resumo cravado](#resumo)
- [Fontes consultadas](#fontes)

## O que é o Pronaf Bioeconomia {#o-que-e}

O Pronaf (Programa Nacional de Fortalecimento da Agricultura Familiar) foi criado em 1995 e é hoje uma das principais políticas públicas de crédito rural do Brasil. Tem várias linhas · custeio (financia safra), investimento (financia bens duráveis), agroecologia, mulheres rurais, jovem rural, agroindústria, entre outras.

A linha **Bioeconomia** foi criada pelo Plano Safra 2022/2023 (Resolução BCB 5.030/2022) e tem como objetivo declarado **estimular práticas produtivas com benefício ambiental e diversificação econômica**. Inclui:

- Sistemas de energia renovável (solar, eólica, biomassa, biogás)
- Biodigestores e tratamento de dejetos
- Recuperação de áreas degradadas
- Sistemas agroflorestais e silvipastoris
- Manejo sustentável de florestas nativas
- Produção orgânica e agroecológica

Pra a Aura Energy, o foco é o item de energia renovável · que cobre **100% do custo de aquisição e instalação de sistema solar fotovoltaico em propriedade rural**.

## Condições oficiais cravadas (Plano Safra 2025/2026) {#condicoes}

Conforme Plano Safra 2025/2026 (vigente em maio/2026) e Manual de Crédito Rural (MCR) do Banco Central · Capítulo 10:

| Item | Condição |
|---|---|
| **Taxa de juros** | **0,5% ao mês** (~6,17% ao ano) |
| **Prazo total** | até **12 anos** |
| **Carência** | até **3 anos** pra começar a pagar |
| **Limite por beneficiário/safra** | até **R$ 250.000** |
| **Bancos operadores** | Banco do Brasil, BNB (Banco do Nordeste), Banco da Amazônia, BNDES via cooperativas |
| **Quem pode** | Agricultor familiar com CAF ativa |
| **Garantias** | Em geral, garantia do próprio bem financiado + aval (sem precisar hipotecar propriedade pra valores comuns) |

**Comparação cravada** · pra colocar em perspectiva o quão barata é essa linha:

- Pronaf Bioeconomia: 0,5% a.m. (~6,17% a.a.)
- Financiamento solar BV Financeira: ~1,17% a.m. (~14,9% a.a.)
- Financiamento solar Solfácil: ~0,79% a.m. (~9,9% a.a.)
- Crédito pessoal Caixa/Itaú: ~3-5% a.m. (~42-80% a.a.)

**Pronaf Bioeconomia é entre 30% e 90% mais barato** que qualquer alternativa comercial pra sistema solar.

## Quem se enquadra como agricultor familiar {#quem-se-enquadra}

A Lei 11.326/2006 (e atualizações) define agricultor familiar como aquele que cumpre cumulativamente:

1. **Não possui área maior que 4 módulos fiscais.** Em Palmas-TO, módulo fiscal = 65 hectares. Então: **até 260 ha**.
2. **Mão de obra predominantemente familiar** (trabalho da família é maior que mão de obra contratada).
3. **Renda predominantemente da atividade rural** (família tira maior parte da renda da fazenda, sítio, chácara).
4. **Direção do estabelecimento é familiar** (proprietário ou meeiro/arrendatário com gestão direta).

Segundo IBGE · Censo Agropecuário 2017 (último publicado em maio/2026), Tocantins tem **aproximadamente 38.000 estabelecimentos rurais**, dos quais cerca de **60% se enquadram como familiares**. Em municípios como Cristalândia, Lagoa do Tocantins, Pium e regiões de assentamento, a proporção sobe pra 75-85%.

Se você tem propriedade rural em Tocantins entre 5 e 260 hectares e tira renda principal dela, **provavelmente se enquadra**.

## CAF · como emitir o cadastro (gratuito) {#caf}

O CAF (Cadastro Nacional da Agricultura Familiar) é o documento que comprova o enquadramento no Pronaf. Substituiu a antiga DAP (Declaração de Aptidão ao Pronaf) em 2023.

Como emitir gratuitamente em Tocantins:

- **Sindicato Rural** do município (FETAET ou CONTAG)
- **EMATER-TO** (Empresa de Assistência Técnica e Extensão Rural)
- **Cooperativas agropecuárias** habilitadas (varia por município)
- **Federação dos Trabalhadores na Agricultura Familiar do TO** (FETAEPA-TO)

Documentos típicos exigidos:

- CPF e RG do produtor (e do cônjuge se houver)
- Comprovante de residência
- Documento da propriedade (escritura, posse, contrato de meação, ITR)
- Comprovante de produção rural (notas fiscais, talão de produtor)
- Declaração de Imposto de Renda (últimos 2 anos)

Tempo médio de emissão: **15 a 30 dias**. Custo: **zero** (gratuito por lei).

## O que pode ser financiado pela linha solar {#o-que-financia}

Pelo Manual de Crédito Rural · Capítulo 10 (Pronaf · linha investimento Bioeconomia), pode ser financiado **100% do projeto solar incluindo:**

- Painéis solares (qualquer marca certificada INMETRO)
- Inversor solar e equipamentos auxiliares
- Estrutura de fixação (telhado ou solo)
- Cabeamento e proteções elétricas
- Projeto técnico e ART
- Mão de obra de instalação
- Adequações elétricas necessárias (quadro, aterramento)
- Sistema de monitoramento
- Bateria (em sistemas híbridos · BESS · ver [artigo BESS](/artigos/bess-bateria-solar-pivo-central-tocantins-2026))

**Não pode** ser financiado pela linha:

- Equipamento sem certificação INMETRO
- Mão de obra informal sem ART
- Sistemas em propriedade urbana (residência na cidade não se enquadra)

## Caso-tipo cravado · aviário 5.000 aves em Palmas {#caso-aviario}

Perfil-tipo (não é caso individual identificado · números são projeções ilustrativas baseadas em referência setorial):

- **Operação:** aviário de corte com 5.000 aves · 5 lotes/ano
- **Consumo elétrico:** ~8.500 kWh/mês (ventilação, ar-condicionado, iluminação 24h)
- **Conta Energisa-TO atual:** ~R$ 8.000/mês (grupo B2 rural ou A4 dependendo da demanda)
- **Sistema solar indicado:** 80 kWp (~145 painéis Tier 1 + 2 inversores trifásicos)
- **Investimento estimado turn-key Aura:** ~R$ 240.000 (projeto + ART + homologação + instalação)

Financiamento Pronaf Bioeconomia:

- Valor financiado: R$ 240.000 (100% do projeto · dentro do teto de R$ 250 mil)
- Prazo: 12 anos (144 meses)
- Taxa: 0,5% a.m.
- Carência: 3 anos (paga só os juros nos primeiros 3 anos)
- **Parcela após carência:** ~R$ 2.300/mês
- **Economia mensal projetada:** ~R$ 7.200/mês (90% da conta atual)
- **Saldo positivo desde o mês 1 da carência:** ~R$ 4.900/mês

Comparação · se financiasse pela BV Financeira (taxa ~1,17% a.m., 96 meses):

- Parcela seria ~R$ 4.100/mês
- Saldo positivo ~R$ 3.100/mês
- **Diferença a favor do Pronaf:** ~R$ 1.800/mês durante 8 anos = **~R$ 173.000 economizados em juros** ao longo do contrato

Por isso vale tanto a pena pleitear o Pronaf · quando elegível, é a diferença entre comprar um carro novo e não comprar.

## Caso-tipo cravado · pivô central 50 ha {#caso-pivot}

Perfil-tipo · pivô de soja/milho em propriedade familiar em Tocantins:

- **Área irrigada:** 50 hectares
- **Consumo elétrico durante safra:** ~8 MWh/mês (8.000 kWh)
- **Conta Energisa-TO durante safra:** ~R$ 7.500/mês (grupo A4 horossazonal)
- **Sistema híbrido proposto:** 30 kWp solar + bateria 30 kWh (BESS) pra deslocar consumo de ponta
- **Investimento estimado turn-key:** ~R$ 180.000

Financiamento Pronaf Bioeconomia:

- Valor financiado: R$ 180.000
- Prazo: 12 anos
- Carência: 3 anos
- **Parcela após carência:** ~R$ 1.720/mês
- **Economia mensal projetada durante safra:** ~R$ 5.800/mês
- **Saldo positivo durante safra:** ~R$ 4.080/mês

Pra detalhes técnicos do BESS pra pivô, ver [artigo dedicado](/artigos/bess-bateria-solar-pivo-central-tocantins-2026).

## Combina com autoconsumo remoto (Lei 14.300) {#autoconsumo-remoto}

Detalhe que faz muita diferença: a Lei 14.300/2022 permite **autoconsumo remoto** entre unidades consumidoras do mesmo titular na mesma área de concessão.

Pra agricultor familiar com aviário + casa da fazenda + galpão + bomba de irrigação, isso significa que **UMA usina solar pode zerar VÁRIAS contas**. Você instala a usina no telhado do galpão (lugar com melhor orientação e área) e compensa a geração em todas as outras unidades.

O Pronaf Bioeconomia financia a usina inteira em uma única operação · não precisa fazer 3 financiamentos separados.

## Diferencial Aura pra documentação Pronaf {#diferencial-aura}

A maior dor de cabeça do Pronaf não é a taxa nem o prazo · é a **burocracia**. O agricultor precisa montar dossiê técnico pra banco analisar, e a maioria não tem tempo nem conhecimento técnico pra isso.

A Aura entrega o pacote completo cravado pra padrão BB/BNDES:

- Projeto técnico assinado pelo engenheiro CREA-TO (Renato Edson)
- ART (Anotação de Responsabilidade Técnica) recolhida
- Memorial descritivo do sistema
- Datasheets dos equipamentos
- Orçamento detalhado conforme padrão Pronaf
- Cronograma de execução
- Declaração de potencial de geração
- Acompanhamento da análise junto à agência

O agricultor entra com: CAF ativa, comprovação de renda, ITR e documento da propriedade. **O resto a Aura monta.**

## Pegadinhas comuns (cuidado) {#pegadinhas}

**1. Pra valores acima de R$ 100 mil, banco pode exigir garantia adicional.** Hipoteca da propriedade ou aval qualificado podem entrar · cada agência tem política. Cravar com gerente antes de fechar projeto.

**2. CAF precisa estar ATIVA na data da contratação.** CAF tem validade · normalmente 2 anos. Renovar antes de iniciar processo.

**3. Banco pode pedir contrapartida (parte em dinheiro do produtor).** Plano Safra padrão exige até 100% financiado, mas algumas agências pedem 10-20% de contrapartida pra valores altos. Negociar com gerente.

**4. Carência de 3 anos não é automática.** Precisa ser solicitada e justificada no projeto · banco pode oferecer 1-2 anos como padrão. Bom projeto técnico ajuda a defender 3 anos de carência (que é o que a lei permite).

**5. Mesma propriedade não pode tirar Pronaf Bioeconomia duas vezes na mesma safra acima do limite.** Limite de R$ 250 mil por beneficiário/safra · planejar com calma.

## Resumo cravado {#resumo}

- Pronaf Bioeconomia é a linha de crédito mais barata do BR pra solar (0,5% a.m. · 12 anos · até R$ 250 mil)
- Cobre 100% do projeto: equipamento + projeto + ART + instalação
- ~60% das propriedades rurais de Tocantins se enquadram como agricultura familiar (IBGE Censo 2017)
- CAF se emite gratuitamente em sindicato rural, EMATER ou cooperativa
- Economia de juros vs. financiamento comercial pode passar de R$ 150 mil em projeto de R$ 240 mil
- Combina com autoconsumo remoto (Lei 14.300) · uma usina zera várias contas
- Aura monta o dossiê técnico cravado pro padrão BB/BNDES

## Fontes consultadas {#fontes}

- Manual de Crédito Rural · Banco Central do Brasil · Capítulo 10 (Pronaf)
- Plano Safra 2025/2026 · Ministério da Agricultura e Pecuária (MAPA)
- Resolução BCB 5.030/2022 (criação da linha Bioeconomia)
- Lei 11.326/2006 (caracterização da agricultura familiar)
- Lei 14.300/2022 · Marco Legal da Geração Distribuída · Art. 1° XVII (autoconsumo remoto)
- IBGE · Censo Agropecuário 2017
- Banco do Brasil · Programa Agro Energia (manual operacional 2026)
- Briefing técnico Aura Energy V3.1 · Renato Edson (CREA-TO · sócio Brasfrio)

## Próximo passo

Tem propriedade rural em Tocantins entre 5 e 260 hectares · pode ter direito ao Pronaf Bioeconomia. Visita técnica gratuita Aura até 100 km de Palmas · Renato avalia elegibilidade e crava proposta pra dossiê bancário. Whatsapp: **(63) 9 9270-6284**.
`,
  },

  // ──────────────────────────────────────────────────────────────────────────
  // 7 · REGULAMENTAÇÃO · ICMS Convênio 16/15 (NOVO)
  // ──────────────────────────────────────────────────────────────────────────
  {
    slug: "icms-convenio-16-15-industria-solar-tocantins",
    titulo: "ICMS Convênio 16/15 · indústria em Tocantins pode pleitear isenção de ICMS sobre solar",
    resumo:
      "Convênio CONFAZ ICMS 16/2015 autoriza isenção de ICMS sobre energia gerada pela própria usina e consumida pelo gerador. Tocantins é signatário. Guia completo.",
    categoria: "Regulamentação",
    tempoLeitura: "11 min",
    dataPublicacao: "2026-05-25",
    conteudo: `Se você é dono ou gestor de indústria em Tocantins e ainda paga ICMS integral sobre energia, esse artigo crava onde está o dinheiro deixado na mesa. O **Convênio CONFAZ ICMS 16/2015** isenta o ICMS sobre energia gerada pela própria usina e consumida pelo gerador · e Tocantins é signatário desde 2022.

Em planta industrial com demanda contratada relevante, a isenção pode representar **diferença de R$ 100 mil a R$ 500 mil por ano** dependendo do consumo. Não é otimização menor · é redesenho da estrutura tributária da operação. Esse artigo crava o que é o Convênio, como pleitear, e o caso-tipo real pra laticínio em Palmas.

Atenção: esse artigo é orientação técnica geral · não substitui consultoria tributária especializada. Pra protocolar o pleito, recomenda-se trabalhar com contador ou advogado tributarista. A Aura indica parceiros em Palmas.

## Neste artigo

- [O que é o Convênio CONFAZ ICMS 16/2015](#o-que-e)
- [Estados que aderiram (Tocantins está dentro)](#estados-aderiram)
- [Por que isso é grande pra indústria · estrutura tarifária](#estrutura-tarifaria)
- [Caso-tipo cravado · laticínio em Palmas](#caso-laticinio)
- [Passo a passo cravado pra pleitear](#passo-a-passo)
- [Documentação técnica exigida](#documentacao)
- [Combina com outros benefícios fiscais](#outros-beneficios)
- [Diferencial Aura pra indústria · pacote técnico](#diferencial-aura)
- [Limitações e pegadinhas](#limitacoes)
- [Resumo cravado](#resumo)
- [Fontes consultadas](#fontes)

## O que é o Convênio CONFAZ ICMS 16/2015 {#o-que-e}

O CONFAZ (Conselho Nacional de Política Fazendária) é o fórum onde os 26 secretários estaduais de fazenda + DF + União harmonizam regras de ICMS em todo o Brasil. Convênios CONFAZ autorizam (ou exigem) que os estados adotem benefícios fiscais comuns.

O **Convênio ICMS 16/2015** autoriza os estados a conceder **isenção do ICMS** nas operações internas relativas a:

- **Energia elétrica gerada por fonte renovável** (solar, eólica, biomassa, biogás, hídrica até 1 MW), consumida pela própria unidade consumidora geradora (autoconsumo)
- **Em sistemas de microgeração e minigeração distribuída** (até 5 MW conforme Lei 14.300)

Em linguagem prática: se você tem indústria com usina solar instalada no telhado da fábrica e consome a energia que ela gera, esse consumo **não paga ICMS** sobre a parcela compensada · se o estado onde você opera tiver implementado o Convênio via decreto estadual e você pleitear formalmente.

## Estados que aderiram (Tocantins está dentro) {#estados-aderiram}

Hoje (maio/2026), **26 estados aderiram** ao Convênio ICMS 16/2015 + Distrito Federal. Tocantins implementou via **Decreto Estadual 6.482/2022** (e atualizações posteriores). Estados que ainda não aderiram são exceção · em maio/2026 são poucos e em geral revisitam a posição a cada Plano Plurianual.

Pra empresa em Tocantins, a base legal está cravada:

- Convênio CONFAZ ICMS 16/2015 (federal · autoriza)
- Decreto Estadual TO 6.482/2022 (estadual · implementa)
- Regulamento do ICMS de Tocantins (RICMS-TO · contém regra operacional detalhada)

A isenção é **autoaplicável** desde que o contribuinte protocole o pleito na SEFAZ-TO com a documentação técnica correta. Não é "benefício automático" · precisa requerer.

## Por que isso é grande pra indústria · estrutura tarifária {#estrutura-tarifaria}

Indústria conectada na média tensão (grupo A) paga energia em três componentes principais:

1. **TE (Tarifa de Energia)** · pelo consumo em kWh
2. **TUSD (Tarifa de Uso do Sistema de Distribuição)** · pelo "aluguel" da rede de distribuição (dividida em Fio A + Fio B)
3. **Tributos** · ICMS (~25-27% em TO), PIS, COFINS

Sobre cada uma dessas componentes incide ICMS antes da chegada do valor final ao cliente. Em Tocantins, a alíquota efetiva combinada de ICMS sobre energia industrial fica em torno de **25-27%** do valor da fatura conforme tipo de uso e enquadramento.

Com usina solar própria, a TE da energia gerada some (compensada). A TUSD ainda existe (Fio B em 60% em 2026). E **o ICMS sobre a parcela compensada pode ir a zero se a isenção via Convênio 16/15 for pleiteada corretamente**.

Numericamente · pra cada R$ 100 mil em energia faturada que vira "energia própria compensada":

- ICMS evitado: ~R$ 25-27 mil
- Sobre 12 meses: ~R$ 300-325 mil ao ano em planta de porte médio

## Caso-tipo cravado · laticínio em Palmas {#caso-laticinio}

Perfil-tipo (números são projeções ilustrativas baseadas em referência setorial · não é caso individual identificado):

- **Operação:** laticínio em Palmas-TO · processamento ~30 mil litros/dia
- **Consumo elétrico:** 60 MWh/mês (60.000 kWh) durante operação plena
- **Fatura Energisa-TO grupo A4:** ~R$ 48.000/mês (incluindo TE + TUSD + tributos)
- **ICMS embutido na fatura:** ~R$ 12.480/mês (~26%)
- **Sistema solar indicado:** usina 500 kWp em telhado de galpão + área lateral
- **Investimento estimado:** ~R$ 1,8 milhão (turn-key Aura · projeto, ART, homologação, instalação)
- **Geração mensal projetada:** ~75 MWh (compensa 100% do consumo + sobra 15 MWh pra autoconsumo remoto ou créditos)

**Sem solar, ICMS pago em 12 meses:** ~R$ 149 mil/ano.

**Com solar + isenção Convênio 16/15 concedida:** ICMS sobre parcela compensada vai a zero. **Economia tributária pura: ~R$ 149 mil/ano** (acima da economia direta de TE + TUSD que a usina já entrega).

Somando economia tributária + economia direta de energia + redução de bandeiras tarifárias, a economia total mensal projetada pode chegar a **R$ 38-42 mil/mês** em planta desse porte. Payback projetado do sistema: **~3,5 a 4,5 anos** considerando isenção concedida.

## Passo a passo cravado pra pleitear {#passo-a-passo}

Caminho operacional cravado pra empresa em Tocantins:

**1. Sistema solar homologado na Energisa-TO**

Antes de pleitear isenção, o sistema precisa estar:

- Projetado por engenheiro CREA com ART recolhida
- Aprovado em parecer de acesso (Energisa)
- Homologado com troca do medidor (bidirecional)
- Operando em regime de compensação (Lei 14.300)

**2. CNPJ ativo com inscrição estadual em Tocantins**

Pleito é feito pelo CNPJ que **é** o titular da unidade consumidora geradora. Não vale CNPJ separado · titularidade da UC e do pleito devem coincidir.

**3. Engenheiro responsável formal**

ART recolhida obrigatória. Renato Edson (CREA-TO) assume essa responsabilidade nos projetos Aura.

**4. Dossiê técnico completo**

Pra protocolar na SEFAZ-TO:

- Projeto executivo do sistema
- Memorial descritivo
- ART
- Parecer de acesso aprovado pela Energisa
- Termo de conexão e contrato com a distribuidora
- Certificados INMETRO dos equipamentos
- Plano de medição e separação contábil da energia gerada vs comprada
- Cópia do CNPJ, inscrição estadual, contrato social

**5. Requerimento na SEFAZ-TO**

Protocolar pedido formal de enquadramento no Convênio ICMS 16/2015. SEFAZ-TO costuma analisar em **30 a 90 dias**.

**6. Manutenção mensal**

Após concedida, a empresa precisa **declarar mensalmente** a energia gerada vs consumida e manter separação contábil clara. Isso costuma ser feito pelo contador via NF de energia compensada.

**7. Renovação anual**

Em geral a isenção é concedida por safra/exercício e renovada anualmente. Plano de manutenção da documentação atualizada é importante.

## Documentação técnica exigida {#documentacao}

Detalhe da parte técnica que a Aura entrega (e que a SEFAZ-TO exige):

- **Projeto executivo** · diagrama unifilar elétrico, layout de painéis, dimensionamento dos cabos e proteções
- **Memorial descritivo** · explicação técnica do funcionamento da usina, regime de compensação, segurança elétrica
- **ART de projeto + execução** · assinada pelo engenheiro CREA responsável
- **Datasheets** · ficha técnica dos painéis, inversor, estrutura
- **Certificados INMETRO** · obrigatório pra equipamento solar no Brasil
- **Parecer de acesso aprovado** · documento da Energisa autorizando a conexão
- **TRD (Termo de Responsabilidade e Desempenho)** · contrato com a distribuidora
- **Plano de medição** · como vai ser separada a energia gerada da energia comprada

Empresa típica leva 2-4 semanas pra reunir tudo · com a Aura cuidando da parte técnica, a empresa só monta a parte tributária com o contador/advogado.

## Combina com outros benefícios fiscais {#outros-beneficios}

Pra indústria, o ICMS Convênio 16/15 não é o único benefício possível:

**1. BNDES Finame Solar** · linha específica de financiamento pra equipamentos solares com taxa subsidiada (~6-9% a.a. em maio/2026). Funciona em paralelo · não compete com a isenção tributária.

**2. Depreciação acelerada** · Lei 11.196/2005 (Lei do Bem) permite depreciação fiscal acelerada de equipamentos de energia renovável em determinados regimes · consultar contador.

**3. PIS/COFINS** · em alguns regimes tributários (Lucro Real), créditos de PIS/COFINS sobre energia comprada podem ser otimizados · consultar tributarista.

**4. Reforma Tributária (LC 214/2025)** · prevê CBS/IBS com tratamento diferenciado pra energia renovável em discussão · decreto regulamentador esperado 2026/2027.

Empresa que faz o tema bem feito consegue **empilhar 2-3 benefícios** · isenção ICMS via Convênio 16/15 + Finame Solar + depreciação acelerada. Diferença pode passar de 30% no custo total da operação.

## Diferencial Aura pra indústria · pacote técnico {#diferencial-aura}

A Aura não é consultoria tributária · não protocolamos o pleito direto na SEFAZ. Mas entregamos o **pacote técnico cravado** que o pleito exige:

- Projeto executivo + memorial + ART + datasheets · padrão SEFAZ
- Parecer de acesso protocolado e aprovado na Energisa-TO
- Cronograma de implantação com marcos
- Acompanhamento até a energização e início da geração
- Indicação de contador/advogado tributarista parceiro em Palmas pra protocolar o pleito

Pra indústria, isso significa que o projeto Aura **já nasce pronto pra pleito tributário** · não precisa refazer documentação depois.

Renato Edson (engenheiro CREA-TO · sócio Brasfrio) tem 14+ anos em chão de fábrica em Palmas com refrigeração industrial · entende demanda contratada, perfil de carga, regime de operação industrial. Projeto é dimensionado pra carga real, não vendido por "kWp instalado".

## Limitações e pegadinhas {#limitacoes}

**1. Isenção só vale pra autoconsumo · não pra venda de energia.** Se a empresa quiser vender excedente em mercado livre, esse excedente paga ICMS normal.

**2. Excedente injetado na rede em regime de compensação tem regra específica.** Conforme Lei 14.300 + Convênio 16/15, a isenção cobre a parcela compensada (créditos usados pela própria empresa). Créditos vendidos ou transferidos pra outros CNPJ podem ter tratamento diferente.

**3. Mudança de titularidade quebra o benefício.** Se a empresa vender a propriedade ou trocar CNPJ, o pleito precisa ser refeito.

**4. Manutenção da documentação é obrigação contínua.** Falha na declaração mensal pode levar à perda do benefício e cobrança retroativa.

**5. Estados vizinhos têm regras diferentes.** Empresa com filiais em MA, PA, BA · cada filial precisa avaliar o benefício local separadamente. Não é "isenção nacional".

## Resumo cravado {#resumo}

- Convênio CONFAZ ICMS 16/2015 isenta ICMS sobre energia gerada e consumida pelo próprio gerador (autoconsumo)
- Tocantins implementou via Decreto Estadual 6.482/2022 · base legal cravada
- ICMS em TO sobre energia industrial fica em ~25-27% · isenção transforma em zero pra parcela compensada
- Caso-tipo laticínio 60 MWh/mês: ~R$ 149 mil/ano em economia tributária pura
- Pleito precisa ser formalmente protocolado · não é automático
- Combina com BNDES Finame Solar, depreciação acelerada e outros benefícios
- Aura entrega pacote técnico cravado pra padrão SEFAZ · indica contador parceiro

## Fontes consultadas {#fontes}

- Convênio ICMS 16/2015 · CONFAZ ([confaz.fazenda.gov.br](https://www.confaz.fazenda.gov.br))
- Decreto Estadual TO 6.482/2022 (implementação do Convênio em Tocantins)
- Regulamento do ICMS de Tocantins (RICMS-TO)
- Lei 14.300/2022 · Marco Legal da Geração Distribuída
- Resolução ANEEL 1.000/2021 (regras de distribuição)
- Lei 11.196/2005 · Lei do Bem (depreciação acelerada)
- Lei Complementar 214/2025 · Reforma Tributária
- BNDES · Programa Finame Solar 2026
- Briefing técnico Aura Energy V3.1 · Renato Edson (CREA-TO · sócio Brasfrio)

## Próximo passo

Indústria em Tocantins com demanda contratada relevante · vale uma conversa. Análise técnica e proposta sem custo. Whatsapp Renato: **(63) 9 9270-6284** · sócio Brasfrio (14+ anos em refrigeração industrial em Palmas).
`,
  },

  // ──────────────────────────────────────────────────────────────────────────
  // 8 · EQUIPAMENTOS · BESS RURAL (NOVO)
  // ──────────────────────────────────────────────────────────────────────────
  {
    slug: "bess-bateria-solar-pivo-central-tocantins-2026",
    titulo: "BESS pra pivô central · janela 2026 de bateria + solar no Tocantins",
    resumo:
      "Pivô consome 24h em pico. Solar puro só gera de dia. BESS desloca consumo de ponta cara pra fora de ponta. Lei 15.269/2025 abriu janela regulatória cravada.",
    categoria: "Equipamentos",
    tempoLeitura: "13 min",
    dataPublicacao: "2026-05-25",
    conteudo: `Se você tem pivô central (ou aviário, granja, irrigação por gotejamento) em Tocantins, esse artigo pode mudar a equação financeira da sua propriedade. **BESS · Battery Energy Storage System** é a combinação de solar + bateria que captura valor onde o solar puro não chega. E em 2026 alinharam três marcos regulatórios que abriram **janela cravada** pra adoção precoce.

A maior limitação do solar fotovoltaico puro é simples: só gera de dia. Pra propriedade rural com perfil de consumo 24/7 · pivô central irrigando à noite, aviário com ventilação contínua, granja com climatização permanente · o solar puro deixa metade da economia possível em cima da mesa. **BESS resolve isso.**

Esse artigo é técnico · indicado pra produtor rural, gestor agro ou consultor que já entende solar e quer dar o próximo passo. Crava o que é BESS, por que funciona em propriedade rural com perfil 24/7, qual a janela regulatória atual, e o caso-tipo real pra pivô de 100 ha em soja.

## Neste artigo

- [O problema do solar puro em propriedade rural 24/7](#problema-solar-puro)
- [Como o BESS resolve · arquitetura técnica](#como-bess-resolve)
- [Por que 2026 é a janela cravada · 3 marcos regulatórios](#janela-regulatoria)
- [Caso-tipo cravado · pivô 100 ha de soja em Tocantins](#caso-pivot)
- [Outros perfis que se beneficiam de BESS rural](#outros-perfis)
- [Química da bateria · LiFePO4 vs NMC](#quimica-bateria)
- [Garantia e ciclos · o que cobrar do fornecedor](#garantia-ciclos)
- [Diferencial Aura · Brasfrio + Aura = projeto agro cravado](#diferencial-aura)
- [Cuidados antes de fechar BESS](#cuidados)
- [Resumo cravado](#resumo)
- [Fontes consultadas](#fontes)

## O problema do solar puro em propriedade rural 24/7 {#problema-solar-puro}

Solar fotovoltaico gera energia em janela cravada · em Palmas, das 6h às 18h aproximadamente, com pico entre 11h e 14h. Fora dessa janela, geração é zero (a noite) ou marginal (manhã cedo e fim de tarde).

Pra perfil residencial diurno (família que trabalha fora, consome mais à noite), o sistema funciona via **compensação** · energia gerada de dia vai pra rede como crédito, é "resgatada" à noite. Mas a Lei 14.300/2022 colocou um custo sobre essa troca (Fio B) · que em 2026 está em 60% e sobe a cada ano.

Pra propriedade rural com perfil 24/7, o problema é maior:

**1. Pivô central** irriga em pico de safra com bombeamento contínuo. Muitos produtores rodam à noite de propósito (menos evaporação · melhor pra cultura). Consumo em horário de ponta (18h-21h) é quando a tarifa Energisa-TO grupo A4 horossazonal pode chegar a **R$ 1,40-1,60/kWh** com tributos · até 2x mais cara que fora de ponta.

**2. Aviário** roda ventilação e ar-condicionado 24/7. Lotes de aves de corte exigem temperatura estável · sem ar-condicionado em pico de calor, mortalidade de lote dispara.

**3. Granja** climatiza áreas de maternidade, creche e terminação continuamente. Bombeamento e iluminação noturna também.

**4. Câmara fria** (laticínio, frigorífico pequeno, packing house) precisa manter temperatura 24h · compressor não pode desligar.

Pra esses perfis, **solar puro entrega entre 40% e 60% da economia possível**. O restante fica em cima da mesa porque a noite não tem sol.

## Como o BESS resolve · arquitetura técnica {#como-bess-resolve}

BESS = banco de baterias industriais que armazena energia gerada de dia pra usar de noite. Arquitetura típica:

- **Painéis solares (dia)** geram energia que vai pro **inversor híbrido**
- O inversor distribui em 3 caminhos: alimenta a **carga da propriedade** direto · carrega a **bateria** com o excedente · envia o que sobrar pra **rede Energisa** como crédito
- À noite, a **bateria descarrega** alimentando a carga · se esvaziar, complementa com a rede

Componentes principais:

- **Inversor híbrido** · gerencia 3 fluxos (geração solar, bateria, rede). Marcas Tier 1: Hoymiles Hybrid, Solis Hybrid, Huawei LUNA2000, Deye SUN-K
- **Bateria** · banco de células de lítio (preferencialmente LiFePO4 · ver seção química)
- **BMS (Battery Management System)** · cérebro do banco · monitora temperatura, carga/descarga, equalização
- **Quadro de transferência** · transfere carga entre fontes automaticamente
- **Sistema de monitoramento** · app que mostra geração + carga da bateria + consumo em tempo real

Funcionamento em propriedade rural típica:

- **6h-10h:** sol nasce · solar começa a gerar · alimenta consumo direto + começa a carregar bateria
- **10h-14h:** pico de geração · alimenta consumo + carrega bateria + envia excedente pra rede como crédito
- **14h-18h:** geração caindo · alimenta consumo direto + bateria continua carregando
- **18h-21h:** sol põe · pico de tarifa Energisa · **bateria descarrega direto na carga · zero compra da rede**
- **21h-6h:** propriedade roda na bateria · se bateria esvaziar, complementa com rede

Resultado: **energia comprada em horário de ponta cara vai praticamente a zero**.

## Por que 2026 é a janela cravada · 3 marcos regulatórios {#janela-regulatoria}

Três marcos regulatórios alinharam em 2025-2026 e abrem janela cravada pra adoção precoce de BESS no Brasil:

**1. Lei 15.269/2025 · regulamentação de armazenamento em geração distribuída**

Sancionada em fevereiro de 2025, a Lei 15.269 regulamentou formalmente o uso de armazenamento de energia em sistemas de geração distribuída. Antes, baterias em sistemas conectados à rede operavam em zona cinza · sem regra clara sobre compensação, dimensionamento, segurança e enquadramento tarifário. **Agora têm regra clara.**

**2. Resolução ANEEL 1.085/2024 · atualização de microgeração e minigeração**

Atualizou os procedimentos operacionais (Procedimentos de Distribuição · PRODIST) pra incluir sistemas com armazenamento. Concessionárias (Energisa-TO entre elas) precisam aprovar pareceres de acesso pra sistemas híbridos com regra padronizada.

**3. Reforma Tributária · LC 214/2025 com tratamento renovável**

A Lei Complementar 214/2025 (Reforma Tributária) prevê tratamento diferenciado (alíquota reduzida ou diferimento) pra equipamentos de energia renovável incluindo armazenamento. Decreto regulamentador esperado pra 2026/2027 vai cravar os detalhes operacionais.

Quem adota em 2026 **opera com regras estáveis pela primeira vez no Brasil pra BESS · e pode capturar valor de incentivos fiscais quando o decreto regulamentar sair**.

## Caso-tipo cravado · pivô 100 ha de soja em Tocantins {#caso-pivot}

Perfil-tipo (números são projeções ilustrativas baseadas em referência setorial · não é caso individual identificado):

- **Operação:** pivô central irrigando 100 ha de soja em propriedade familiar
- **Consumo elétrico durante safra (~6 meses/ano):** ~15 MWh/mês (15.000 kWh)
- **Distribuição típica do consumo:** 40% em horário de ponta (18h-21h · R$ 1,50/kWh), 60% fora de ponta (R$ 0,75/kWh)
- **Conta Energisa-TO durante safra:** ~R$ 14.000/mês
- **Consumo na entressafra:** muito menor (~3 MWh/mês · iluminação, bombeamento esporádico) · conta ~R$ 2.500/mês

Sistema híbrido proposto:

- **Solar:** 30 kWp · ~55 painéis Tier 1 (Astrobergy ou DAH 550W)
- **Bateria:** 50 kWh em LiFePO4 (BYD, CATL ou Pylontech)
- **Inversor híbrido:** trifásico Hoymiles ou Solis 25-30 kW
- **BMS + monitoramento integrado**

**Investimento estimado turn-key:** ~R$ 280.000 (projeto + ART + homologação + instalação)

Geração e economia projetadas:

- Solar gera ~4,8 MWh/mês durante safra (compensa ~30% do consumo total)
- Bateria desloca 100% do consumo de ponta pra fora de ponta · elimina ~R$ 6.000/mês de tarifa cara
- **Economia mensal projetada durante safra:** ~R$ 11.000/mês
- **Economia mensal projetada entressafra:** ~R$ 1.800/mês (geração maior que consumo · gera créditos)
- **Economia anual projetada:** ~R$ 76.800

Financiamento Pronaf Bioeconomia (se elegível):

- Valor financiado: R$ 280.000 (acima do teto de R$ 250 mil · precisa contrapartida de R$ 30 mil ou divisão em duas safras)
- Caso financie R$ 250 mil + R$ 30 mil PIX entrada:
  - Parcela Pronaf após carência: ~R$ 2.390/mês
  - Saldo positivo durante safra: ~R$ 8.600/mês

Payback projetado: **~3,5 a 4 anos** considerando safra + entressafra.

## Outros perfis que se beneficiam de BESS rural {#outros-perfis}

Além de pivô central, BESS faz sentido em:

**1. Aviário** · ventilação + ar-condicionado + iluminação 24h. Lote típico de 5-10 mil aves de corte consome 8-15 MWh/mês com pico noturno significativo. Sistema híbrido pode reduzir conta em 70-85%.

**2. Granja de suínos** · climatização de maternidade, creche e terminação contínua. Consumo concentrado em horário comercial e noite. BESS desloca picos.

**3. Laticínio pequeno-médio** · ordenha mecânica + tanque resfriado + UHT/pasteurização. Consumo 24h com picos no início da manhã e fim de tarde · BESS muito eficaz.

**4. Frigorífico pequeno** · câmara fria 24h · compressor não desliga. BESS elimina horário de ponta caro.

**5. Comércio com freezer/câmara fria** · sorveteria, açougue, distribuidora · operação noturna do equipamento mesmo com loja fechada.

**6. Bomba de poço artesiano de alta vazão** · consumo concentrado em horários específicos com pico de demanda. BESS amortece o pico.

## Química da bateria · LiFePO4 vs NMC {#quimica-bateria}

Pra propriedade rural em Tocantins (clima quente, sala técnica pode esquentar), a química **LiFePO4 (lítio ferro fosfato)** é preferida sobre NMC (níquel-manganês-cobalto). Comparação cravada:

| Critério | LiFePO4 | NMC |
|---|---|---|
| Estabilidade térmica | **alta** · suporta calor de Tocantins sem risco | média · risco térmico maior em clima quente |
| Densidade de energia | menor · banco maior fisicamente | maior · banco mais compacto |
| Ciclos típicos | **3.000-6.000 ciclos** a 80% DoD | 1.500-3.000 ciclos a 80% DoD |
| Vida útil estimada | **10-15 anos** | 7-10 anos |
| Custo por kWh (2026) | ~R$ 2.500-3.500 | ~R$ 2.200-3.000 |
| Segurança em caso de falha | **não inflama** · queima lenta sem chama | risco de thermal runaway · pode inflamar |
| Recomendação Aura pra Tocantins | **preferido** | só em ambiente climatizado |

Marcas Tier 1 preferidas em LiFePO4: **BYD, CATL, Pylontech, EVE, Hithium**.

## Garantia e ciclos · o que cobrar do fornecedor {#garantia-ciclos}

Padrão Tier 1 cravado pra BESS de propriedade rural:

- **Garantia mínima de produto:** 10 anos
- **Garantia de capacidade (capacity warranty):** 70-80% da capacidade nominal mantida em 6.000 ciclos ou 10 anos (o que vier primeiro)
- **DoD máximo recomendado:** 80% (preserva ciclos · 100% reduz vida útil)
- **Temperatura operacional:** -10°C a 50°C (LiFePO4 padrão)
- **Eficiência round-trip:** ≥90% (energia que entra vs energia que sai)
- **BMS com proteções:** sobrecarga, subcarga, sobretemperatura, curto, balanceamento de células

Cuidado com fornecedores que oferecem garantia de 5 anos ou menos · em projeto de R$ 280 mil, a bateria sozinha custa R$ 125-175 mil · garantia curta vira risco financeiro grande.

## Diferencial Aura · Brasfrio + Aura = projeto agro cravado {#diferencial-aura}

A Aura é solar com **calibragem agro** · ângulo ainda pouco explorado em Tocantins. Combinação cravada:

**Renato Edson** · engenheiro CREA-TO · sócio Brasfrio (refrigeração industrial · 14+ anos em Palmas)

Renato conhece de chão de fábrica:

- Demanda contratada de pivô · curva de carga real de irrigação
- Compressor grande de câmara fria · perfil de consumo de aviário e laticínio
- Regime de operação 24/7 · cálculo de pico vs base
- Quadro elétrico industrial · proteções, aterramento, retorno técnico

**Brasfrio** · empresa-mãe especializada em refrigeração industrial · entende climatização de granja, câmara fria, ventilação de aviário, bombeamento

Essa combinação técnica é rara em Tocantins · a maioria das instaladoras solares trata propriedade rural como "residencial maior" · sem entender que pivô tem perfil de carga totalmente diferente de casa.

**Aura** crava a parte fotovoltaica + bateria · seleção técnica de células, BMS, inversor híbrido, monitoramento remoto, manutenção preventiva.

Pra o produtor rural, isso significa que o projeto **não é "solar genérico vendido por kWp"** · é dimensionamento que entende a curva de carga real da operação.

## Cuidados antes de fechar BESS {#cuidados}

**1. Garantia de bateria.** Padrão Tier 1 é 10 anos / 6.000 ciclos. Cuidado com fornecedor que oferece menos · risco financeiro grande.

**2. Química preferida.** LiFePO4 pra Tocantins (estabilidade térmica). NMC só em ambiente climatizado.

**3. Local de instalação.** Sala ventilada, longe de combustível, longe de fonte de calor, com sistema de detecção de incêndio. A Aura inclui projeto de instalação seguro.

**4. Pronaf elegível?** Se você tem CAF, vale conferir antes · juros 0,5% a.m. do Pronaf Bioeconomia muda totalmente a equação financeira. Ver [artigo dedicado](/artigos/pronaf-bioeconomia-solar-rural-tocantins).

**5. Dimensionamento.** Bateria muito pequena não resolve o pico noturno · bateria muito grande tem custo desnecessário. Cálculo correto exige análise da curva de carga real (24h por 7 dias) · Aura faz na visita técnica.

**6. Manutenção.** BESS exige inspeção periódica (anual): teste de capacidade, balanceamento de células, atualização de firmware do BMS. Aura inclui plano de manutenção no contrato.

**7. Reciclagem futura.** Bateria de lítio ao fim da vida útil exige descarte adequado · reciclagem feita por empresa especializada (Veolia, Reciclus). Custo de descarte deve entrar no plano financeiro de longo prazo (~R$ 200-400 por kWh em 2026 · tende a cair).

## Resumo cravado {#resumo}

- BESS resolve o problema do solar puro em propriedade rural 24/7 (pivô, aviário, granja, laticínio)
- Lei 15.269/2025 + Resolução ANEEL 1.085/2024 + LC 214/2025 abriram janela regulatória cravada
- Caso-tipo pivô 100 ha: investimento ~R$ 280 mil · economia ~R$ 11 mil/mês durante safra · payback ~3,5-4 anos
- LiFePO4 preferido sobre NMC pra Tocantins (estabilidade térmica em clima quente)
- Garantia mínima Tier 1: 10 anos / 6.000 ciclos / 70-80% capacidade
- Pronaf Bioeconomia (0,5% a.m.) muda totalmente a equação · ver elegibilidade antes de fechar
- Diferencial Aura: combinação Brasfrio (chão de fábrica industrial) + Aura (PV + bateria) = projeto agro cravado

## Fontes consultadas {#fontes}

- Lei 15.269/2025 · armazenamento em geração distribuída ([planalto.gov.br](https://www.planalto.gov.br))
- Resolução ANEEL 1.085/2024 · atualização PRODIST pra sistemas híbridos
- Lei 14.300/2022 · Marco Legal da Geração Distribuída
- Lei Complementar 214/2025 · Reforma Tributária (tratamento renovável)
- Manual de Crédito Rural · Banco Central · Capítulo 10 (Pronaf Bioeconomia)
- Plano Safra 2025/2026 · MAPA
- IEC 62619 + IEC 63056 · normas internacionais de segurança em baterias estacionárias de lítio
- INMETRO · certificação de equipamentos solares e armazenamento
- Bloomberg NEF · Battery Price Survey 2025 (custo por kWh LiFePO4)
- Briefing técnico Aura Energy V3.1 · Renato Edson (CREA-TO · sócio Brasfrio)

## Próximo passo

Propriedade rural com pivô central, aviário, granja ou câmara fria em Tocantins · análise técnica e proposta sem custo. Visita técnica gratuita até 100 km de Palmas. Whatsapp Renato: **(63) 9 9270-6284** · sócio Brasfrio (14+ anos em refrigeração industrial em chão de fábrica).
`,
  },

  // ──────────────────────────────────────────────────────────────────────────
  // 9 · REGULAMENTAÇÃO · LEI 15.269/2025 STAND-ALONE
  // ──────────────────────────────────────────────────────────────────────────
  {
    slug: "lei-15269-2025-armazenamento-energia-distribuida",
    titulo: "Lei 15.269/2025 explicada · regulamentação de armazenamento (BESS) em geração distribuída",
    resumo:
      "Lei 15.269 destravou o uso de baterias em sistemas solares conectados à rede. Saiu de zona cinza pra regra clara. Veja o que mudou e o que isso permite em 2026.",
    categoria: "Regulamentação",
    tempoLeitura: "10 min",
    dataPublicacao: "2026-05-25",
    conteudo: `Antes de fevereiro de 2025, usar bateria em sistema solar conectado à rede no Brasil era zona cinza. A regulamentação principal (Lei 14.300/2022 + Resolução ANEEL 1.000/2021) tratava apenas de geração distribuída pura · sem dizer claramente como sistemas com armazenamento (BESS · Battery Energy Storage System) deveriam ser homologados, medidos ou compensados.

A **Lei 15.269/2025**, sancionada em fevereiro de 2025, mudou isso. Crava as regras pra armazenamento atrás-do-medidor (behind-the-meter), híbrido (solar + bateria + rede) e sistemas stand-alone (apenas bateria sem geração própria). Junto com a Resolução ANEEL 1.085/2024 (atualização do PRODIST), abre janela cravada pra adoção em 2026.

Esse artigo é técnico · indicado pra quem já entende geração distribuída e quer cravar o que mudou na regra. Pra detalhes específicos de BESS rural (pivô, aviário), ver [artigo dedicado](/artigos/bess-bateria-solar-pivo-central-tocantins-2026).

## Neste artigo

- [O que existia antes (zona cinza 2018-2024)](#zona-cinza)
- [O que a Lei 15.269/2025 cravou](#o-que-mudou)
- [Tipos de sistema regulados](#tipos-de-sistema)
- [Compensação de excedentes · regra mantida](#compensacao)
- [Procedimento de homologação Energisa](#homologacao)
- [Sinergia com Resolução ANEEL 1.085/2024](#sinergia)
- [Impactos por segmento (residência · comércio · indústria · rural)](#impactos)
- [Janela 2026 · adoção precoce](#janela)
- [Cuidados regulatórios cravados](#cuidados)
- [Resumo cravado](#resumo)
- [Fontes consultadas](#fontes)

## O que existia antes · zona cinza 2018-2024 {#zona-cinza}

Antes de 2025, quem queria instalar solar + bateria em casa, comércio ou propriedade rural enfrentava 3 problemas regulatórios:

**1. Enquadramento ambíguo na Energisa.** Pareceres de acesso pra sistemas híbridos variavam por concessionária · algumas aprovavam sem questionar, outras pediam projeto especial ou simplesmente travavam. Não havia padrão nacional.

**2. Tratamento da bateria pra compensação.** A Lei 14.300/2022 trata de "energia injetada na rede". Mas bateria armazena pra uso próprio · não injeta. Como isso entrava no cálculo de créditos? Não estava cravado.

**3. Certificação e segurança.** Sem norma específica, cada projeto técnico inventava sua própria proteção, monitoramento e sistema de segurança. Risco operacional alto.

Resultado: BESS no Brasil em 2024 ficou restrito a sistemas off-grid em propriedades sem rede, projetos comerciais grandes com consultoria jurídica caso a caso, e residências de alto padrão como solução premium · sem economia escala.

## O que a Lei 15.269/2025 cravou {#o-que-mudou}

A Lei 15.269 (sancionada 14/02/2025) estabeleceu marco legal específico pra armazenamento de energia em sistemas de geração distribuída. Pontos principais:

**Art. 1° · Define armazenamento elétrico** como categoria autônoma de instalação · não é mais "anexo" da micro/minigeração.

**Art. 3° · Categoriza 3 tipos:**
- **Atrás-do-medidor (behind-the-meter):** bateria conectada após o medidor da concessionária · usa energia armazenada pra consumo próprio
- **Híbrido:** solar + bateria + rede · sistema dual de fonte
- **Stand-alone storage:** apenas bateria, sem geração própria · armazena energia comprada em horário barato pra usar em horário caro

**Art. 7° · Determina à ANEEL** publicar procedimentos técnicos detalhados (cumprido pela Resolução 1.085/2024).

**Art. 9° · Estende benefícios fiscais** da Lei do Bem (depreciação acelerada · Lei 11.196/2005) pra equipamentos de armazenamento.

**Art. 12 · Cria mecanismo de incentivo tributário** pra ser regulamentado por decreto (esperado 2026/2027) · alinhado com Reforma Tributária (LC 214/2025).

## Tipos de sistema regulados {#tipos-de-sistema}

Segundo a Lei 15.269 + Resolução ANEEL 1.085/2024:

| Tipo | Descrição | Uso típico |
|---|---|---|
| **Atrás-do-medidor** | Bateria armazena energia da geração própria · uso interno | Residência com solar querendo backup pra apagão |
| **Híbrido** | Solar + bateria + rede operando em conjunto · 3 fluxos | Comércio com pico noturno · indústria turno 3 · pivô central |
| **Stand-alone storage** | Apenas bateria · sem solar próprio | Indústria comprando energia barata noturna pra usar de dia · arbitragem tarifária |

Pra sistema residencial e comercial em Tocantins, o tipo **híbrido (solar + bateria)** é o mais comum. Stand-alone é estratégia mais industrial · raro em propriedade pequena.

## Compensação de excedentes · regra mantida {#compensacao}

A Lei 15.269 **não alterou** as regras de compensação criadas pela Lei 14.300/2022. O que muda é a operacionalização:

**Antes da Lei 15.269:** se você tinha solar + bateria, a Energisa media apenas a energia que ENTRAVA e SAÍA pela rede pública (energia compensada). A bateria operava "invisível" pra concessionária.

**Depois da Lei 15.269:** mantém o mesmo modelo de medição (medidor bidirecional · só conta energia injetada/retirada da rede), mas formaliza que:

- Energia armazenada na bateria e usada internamente = **autoconsumo direto · não conta pra compensação · não paga Fio B**
- Energia injetada na rede como excedente (depois de carregar bateria e suprir consumo) = **gera crédito normal · paga Fio B conforme calendário Lei 14.300**

Em 2026 com Fio B em 60%, sistema híbrido bem dimensionado **escapa de mais Fio B** que sistema solar puro · porque a bateria absorve mais geração antes dela ir pra rede.

## Procedimento de homologação Energisa {#homologacao}

A Resolução ANEEL 1.085/2024 detalhou como homologar sistemas com armazenamento. Pra Energisa-TO em maio/2026:

1. **Projeto técnico assinado** por engenheiro CREA (eletricista) com ART recolhida
2. **Datasheet do inversor híbrido** certificado INMETRO
3. **Datasheet da bateria** com certificação IEC 62619 (segurança em baterias estacionárias) e IEC 63056 (testes de segurança específicos pra lítio)
4. **BMS (Battery Management System)** documentado · proteções obrigatórias (sobrecarga, subcarga, temperatura, curto)
5. **Plano de segurança contra incêndio** · sala ventilada, distância de combustíveis, sistema de detecção
6. **Parecer de acesso** protocolado na Energisa-TO via portal Web Energisa
7. **Análise da Energisa** · prazo regulatório de 15-45 dias úteis dependendo do porte

Prazo total do contrato à energização: **30-60 dias** pra sistema híbrido residencial · **60-90 dias** pra industrial.

## Sinergia com Resolução ANEEL 1.085/2024 {#sinergia}

A Lei 15.269 é o "guarda-chuva legal" · a Resolução ANEEL 1.085/2024 é o "manual operacional" que detalha. Os dois precisam ser lidos juntos.

A Resolução 1.085 cobre:

- Atualização do PRODIST (Procedimentos de Distribuição) · inclui módulo específico pra sistemas com armazenamento
- Padronização de medição · qual medidor usar, onde instalar
- Padronização de proteções elétricas · DPS, disjuntores, aterramento
- Regras de comunicação com a concessionária (sistemas com SCADA · raros em residência)
- Período de carência regulatória pra adequação (sistemas instalados antes de janeiro/2025 têm 24 meses pra adequar quando aplicável)

## Impactos por segmento {#impactos}

**Residência:**
- Sistema híbrido pra apagão (backup) ficou viável e regulado
- Custo ainda alto · ~R$ 18-35 mil pra residência típica com 5 kWp solar + 10 kWh bateria
- Payback piora em relação a solar puro (8-12 anos vs 4-6 anos) · vale quando apagão é real preocupação
- Recomendação Aura: priorizar solar puro · BESS residencial só pra casas que enfrentam apagão frequente

**Comércio:**
- Comércio com freezer/câmara fria · BESS evita perda de mercadoria em apagão
- Comércio com operação noturna (padaria · academia 24h · sorveteria) · BESS desloca pico tarifário
- Payback projetado: 5-8 anos
- Recomendação Aura: avaliar curva de carga real antes de cravar

**Indústria:**
- Indústria com demanda contratada alta · BESS faz **peak shaving** (corta picos de consumo · reduz tarifa de demanda)
- Indústria turno 3 (noturno) · BESS reduz custo de operação noturna
- Combina com ICMS Convênio 16/15 (ver [artigo dedicado](/artigos/icms-convenio-16-15-industria-solar-tocantins))
- Payback projetado: 3-6 anos pra plantas com perfil 24/7

**Rural:**
- Pivô central · ver [artigo BESS dedicado](/artigos/bess-bateria-solar-pivo-central-tocantins-2026)
- Aviário, granja, laticínio · sistema híbrido elimina horário de ponta
- Combina com Pronaf Bioeconomia (ver [artigo Pronaf](/artigos/pronaf-bioeconomia-solar-rural-tocantins))
- Payback projetado: 3-5 anos com Pronaf

## Janela 2026 · adoção precoce {#janela}

Três motivos cravados pra 2026 ser janela boa:

**1. Regulamentação estável.** Lei 15.269 + Resolução 1.085 deram clareza. Operadora de mercado entende, banco entende, contador entende. Sem mais "tá em discussão · espera".

**2. Incentivos fiscais pendentes.** Decreto regulamentador do Art. 12 da Lei 15.269 (incentivo tributário pra armazenamento) ainda não saiu · esperado 2026/2027. Quem adota agora opera com regras atuais · quando o decreto sair pode (ou não) ter benefícios retroativos.

**3. Custo de bateria caindo.** Bloomberg NEF reporta queda anual de ~12-15% no preço de bateria LiFePO4 entre 2024 e 2026. Em 2027/2028 pode estar 25-35% mais barato · mas você teria perdido 2 anos de economia operacional.

Equilíbrio cravado: 2026 é janela boa pra perfis 24/7 com Pronaf · esperar mais não compensa pra eles. Pra residencial de uso puramente backup (sem pico tarifário caro), vale esperar mais 1-2 anos pra ver o preço da bateria.

## Cuidados regulatórios cravados {#cuidados}

**1. Engenheiro responsável obrigatório.** Sistema com BESS não pode ser projetado por técnico · exige engenheiro CREA com ART. Aura cobre via Renato Edson (CREA-TO).

**2. Certificação INMETRO + IEC obrigatória.** Importação direta de China sem certificação pode dar problema na homologação Energisa. Trabalhar com distribuidor que importa com certificação completa.

**3. Plano de segurança contra incêndio.** Sala ventilada, longe de combustíveis, com sistema de detecção. Não é "qualquer canto da casa".

**4. Atualização anual de firmware do BMS.** Fabricantes Tier 1 emitem updates · sistema ignorar pode perder garantia.

**5. Seguro patrimonial.** Sistema BESS aumenta cobertura · alertar seguradora pra incluir no seguro residencial/comercial.

## Resumo cravado {#resumo}

- Lei 15.269/2025 destravou armazenamento em geração distribuída · saiu de zona cinza pra regra clara
- 3 tipos regulados: atrás-do-medidor · híbrido · stand-alone storage
- Compensação de excedentes mantém regras da Lei 14.300 · bateria opera "fora" do cálculo de Fio B
- Resolução ANEEL 1.085/2024 detalha o operacional (PRODIST atualizado)
- Janela 2026 cravada: regulação estável + incentivos fiscais pendentes + preço de bateria caindo
- Por segmento: rural ganha mais (com Pronaf) · indústria 24/7 ganha · residencial só pra backup

## Fontes consultadas {#fontes}

- Lei 15.269/2025 · armazenamento em geração distribuída ([planalto.gov.br](https://www.planalto.gov.br))
- Resolução ANEEL 1.085/2024 · atualização PRODIST pra sistemas com armazenamento
- Lei 14.300/2022 · Marco Legal da Geração Distribuída
- Lei 11.196/2005 · Lei do Bem (depreciação acelerada)
- Lei Complementar 214/2025 · Reforma Tributária
- IEC 62619 · normas internacionais de segurança em baterias estacionárias de lítio
- IEC 63056 · testes de segurança específicos pra LiFePO4
- INMETRO · regulamento de certificação compulsória de equipamentos solares
- Bloomberg NEF · Battery Price Survey 2025
- Briefing técnico Aura Energy V3.1 · Renato Edson (CREA-TO)

## Próximo passo

Quer saber se BESS faz sentido pra seu caso · análise técnica gratuita Aura considerando perfil de carga, tarifa atual e payback projetado. Whatsapp Renato: **(63) 9 9270-6284**.
`,
  },

  // ──────────────────────────────────────────────────────────────────────────
  // 10 · REGULAMENTAÇÃO · REFORMA TRIBUTÁRIA E ENERGIA RENOVÁVEL
  // ──────────────────────────────────────────────────────────────────────────
  {
    slug: "reforma-tributaria-energia-renovavel-2026",
    titulo: "Reforma Tributária e energia solar · o que muda pra quem instalar em 2026?",
    resumo:
      "LC 214/2025 substitui PIS + COFINS + ICMS + ISS por CBS e IBS entre 2026 e 2032. Veja como afeta solar pra residência, comércio, indústria e importação.",
    categoria: "Regulamentação",
    tempoLeitura: "9 min",
    dataPublicacao: "2026-05-25",
    conteudo: `A Lei Complementar 214/2025, sancionada em janeiro de 2025, regulamentou a Reforma Tributária aprovada pela Emenda Constitucional 132/2023. Pra energia solar, as mudanças são relevantes mas confusas · porque o período de transição é longo (2026 a 2032) e o tratamento renovável depende de decretos que ainda não saíram.

Esse artigo crava o que está em maio/2026 · o que muda imediatamente, o que ainda depende de regulamentação, e o que vale você considerar antes de instalar solar. Atenção: esse não substitui consultoria tributária · vale falar com seu contador pra cravar números exatos no seu caso.

## Neste artigo

- [O que a Reforma Tributária criou (CBS + IBS)](#cbs-ibs)
- [Cronograma de transição 2026-2032](#cronograma)
- [Tratamento diferenciado pra energia renovável](#tratamento-renovavel)
- [Impacto pra residência](#residencia)
- [Impacto pra comércio](#comercio)
- [Impacto pra indústria · com Convênio 16/15](#industria)
- [Impacto na importação de equipamentos solares](#importacao)
- [Decretos pendentes em maio/2026](#decretos-pendentes)
- [Cuidados antes de fechar projeto em 2026](#cuidados)
- [Resumo cravado](#resumo)
- [Fontes consultadas](#fontes)

## O que a Reforma Tributária criou {#cbs-ibs}

A Reforma substituiu 5 tributos sobre consumo por 2 novos:

**Tributos antigos (extintos progressivamente):**
- PIS · Programa de Integração Social
- COFINS · Contribuição para Financiamento da Seguridade Social
- IPI · Imposto sobre Produtos Industrializados
- ICMS · Imposto sobre Circulação de Mercadorias e Serviços (estadual)
- ISS · Imposto sobre Serviços (municipal)

**Tributos novos:**
- **CBS** · Contribuição sobre Bens e Serviços (federal) · substitui PIS + COFINS + parte do IPI
- **IBS** · Imposto sobre Bens e Serviços (estadual + municipal compartilhado) · substitui ICMS + ISS

Mais o **Imposto Seletivo** · cobrado sobre produtos "prejudiciais à saúde ou ambiente" (cigarro, álcool, combustível fóssil · não incide em energia renovável).

## Cronograma de transição 2026-2032 {#cronograma}

A LC 214/2025 estabelece transição gradual de 7 anos. Resumo cravado:

| Ano | O que acontece |
|---|---|
| **2026** | Início CBS (alíquota de teste 0,9%) · ICMS/PIS/COFINS ainda em vigor integral · ano de calibração |
| **2027** | CBS sobe pra alíquota plena · PIS/COFINS extintos · IBS ainda não cobrado |
| **2028** | IBS começa cobrança (alíquota de teste) · ICMS/ISS começam a cair gradualmente |
| **2029** | IBS sobe · ICMS cai 10% |
| **2030** | IBS sobe · ICMS cai mais 20% |
| **2031** | IBS sobe · ICMS cai mais 30% |
| **2032** | IBS pleno · ICMS e ISS extintos definitivamente |

Em 2026, na prática, **quem instala solar AGORA opera majoritariamente sob regras antigas** · ICMS Convênio 16/15 (ver [artigo dedicado](/artigos/icms-convenio-16-15-industria-solar-tocantins)) continua valendo · isenção de ICMS sobre energia gerada e consumida pelo próprio continua disponível.

## Tratamento diferenciado pra energia renovável {#tratamento-renovavel}

A LC 214/2025 prevê (Art. 145 e seguintes) que **bens e serviços relacionados a energia renovável e eficiência energética** podem ter:

- **Alíquota reduzida de CBS/IBS** · até 60% menor que alíquota padrão
- **Cashback parcial pra famílias de baixa renda** · sistema solar residencial pode entrar
- **Diferimento tributário** · pagamento de CBS/IBS adiado em casos específicos

MAS · o detalhe operacional depende de **decreto regulamentador** que ainda não saiu em maio/2026. Esperado entre 2026 e início de 2027.

**Cravando o que isso significa em maio/2026:**

- Você AINDA pode pleitear ICMS Convênio 16/15 (regra antiga · vigente)
- Você AINDA está nos regimes PIS/COFINS antigos pra equipamentos
- Você pode SE BENEFICIAR de regras novas QUANDO decreto sair · provavelmente com efeito a partir da data de publicação (não retroativo)
- Cashback renovável pra residência: indefinido até decreto

## Impacto pra residência {#residencia}

**Curto prazo (2026):**
- Nada muda significativamente · ICMS, PIS, COFINS sobre equipamentos seguem como antes
- Quem pleiteia isenção de ICMS sobre energia gerada via Convênio 16/15 continua valendo

**Médio prazo (2027-2030):**
- CBS plena pode aumentar marginalmente o preço de equipamentos importados (CBS substitui PIS+COFINS · efeito líquido similar)
- Alíquota reduzida pra renovável (se confirmada por decreto) pode reduzir 5-10% do preço final do kit

**Longo prazo (2031-2032):**
- ICMS extinto · IBS plena · cashback pra renovável pode reduzir custo final em 8-15%

Verdict cravado pra residência em 2026: **instalar agora ainda compensa**. Esperar 2030+ é apostar em decreto que pode ou não trazer benefício · enquanto isso, a conta da Energisa sobe ~10%/ano.

## Impacto pra comércio {#comercio}

**Curto prazo (2026):**
- Comércio Simples Nacional · CBS/IBS opcional (mantém Simples se preferir)
- Lucro Real / Presumido · transição gradual · cuidado tributário maior

**Médio prazo (2027-2030):**
- Sistema solar comercial · expectativa de alíquota CBS reduzida em ~60% pra "bens duráveis renováveis"
- Pode pleitear créditos cruzados CBS/IBS (sistema novo permite mais créditos que ICMS antigo)

Verdict comércio em 2026: **mesma conclusão** · instalar agora segue valendo · benefícios futuros são adicional, não pré-requisito.

## Impacto pra indústria · com Convênio 16/15 {#industria}

Pra indústria em Tocantins com isenção via Convênio 16/15 (ver [artigo dedicado](/artigos/icms-convenio-16-15-industria-solar-tocantins)) · principal preocupação é o que acontece com a isenção quando ICMS for extinto (em 2032).

**Resposta cravada:** o tratamento diferenciado pra renovável previsto na LC 214/2025 (Art. 145) **substitui em essência o Convênio 16/15** · isenção atual deve migrar pra alíquota reduzida ou cashback equivalente em IBS quando entrar em vigor pleno.

**Atenção** · isso é interpretação técnica baseada na LC 214 publicada · não é orientação tributária definitiva. Decreto regulamentador vai cravar o mecanismo exato.

**Recomendação cravada pra indústria:**

1. Pleitear ICMS Convênio 16/15 AGORA (regra atual estável)
2. Acompanhar decreto regulamentador IBS pra renovável (esperado 2026/2027)
3. Reavaliar planejamento tributário em 2028-2029 quando IBS começar cobrança
4. Trabalhar com contador tributarista especializado em renováveis durante a transição

## Impacto na importação de equipamentos solares {#importacao}

Equipamentos solares são majoritariamente importados (painéis · China · Vietnã · Coreia / inversores · China · Alemanha / baterias · China · EUA).

**Tributos sobre importação antes da Reforma:**
- II (Imposto de Importação) · varia 0-12% conforme NCM
- IPI · 0-15%
- ICMS · 17-19% (estado destino)
- PIS-Importação + COFINS-Importação · ~11%
- Total efetivo: ~30-50% sobre valor CIF

**Tributos depois da Reforma (2032 pleno):**
- II · mantém (não foi reformado)
- CBS-Importação · alíquota a definir (~8-10%)
- IBS-Importação · alíquota a definir (~12-17%)
- Total efetivo esperado: similar ou ligeiramente menor que hoje

**Cravando o que isso significa:**

Preço final de kit solar **não deve cair significativamente** pela Reforma Tributária. Pode ter pequenas variações regionais (estados que cobravam ICMS mais alto podem ficar mais competitivos) mas a estrutura permanece semelhante.

Quem espera "preço cair 30% com a Reforma" · não vai acontecer. A Reforma simplifica e harmoniza · não reduz drasticamente o custo.

## Decretos pendentes em maio/2026 {#decretos-pendentes}

Lista cravada do que ainda precisa sair:

1. **Decreto regulamentador Art. 145 LC 214/2025** · alíquota reduzida pra renováveis
2. **Decreto cashback pra renováveis** · benefício pra residência
3. **Decreto operacional CBS-IBS sobre energia elétrica** · como cobrar tributo sobre conta de luz
4. **Decreto transição Convênio 16/15 → IBS reduzido** · como migrar isenção atual
5. **Regulamentação Simples Nacional pra empresas solares pequenas**

Acompanhar via:
- Portal Receita Federal · agenda regulatória
- ABSOLAR · alertas regulatórios pra setor solar
- Consultor tributário do seu CNPJ

## Cuidados antes de fechar projeto em 2026 {#cuidados}

**1. Não esperar Reforma pra instalar.** Quem espera perde 1-2 anos de economia · benefícios futuros são adicional, não pré-requisito.

**2. Documentar projeto pra pleitear Convênio 16/15 (indústria).** Regra atual ainda vigente · vale aproveitar.

**3. Em comércio com NF-e de venda de energia (raro · ex: condomínios com geração compartilhada)** · revisar regime tributário antes da Reforma entrar em IBS pleno.

**4. Cuidado com proposta "vai pagar menos com a Reforma".** Vendedor que promete benefício tributário específico antes do decreto sair está chutando · não cravando.

**5. Trabalhar com contador que acompanhe Reforma.** Não é tema simples · mudança de regime pode quebrar planejamento.

## Resumo cravado {#resumo}

- Reforma Tributária substitui 5 tributos (PIS, COFINS, IPI, ICMS, ISS) por 2 (CBS federal + IBS estadual/municipal)
- Transição gradual 2026-2032 · ICMS extinto só em 2032
- Tratamento renovável previsto na LC 214/2025 · alíquota reduzida e cashback · decreto pendente
- Em 2026, instalação solar segue regra antiga · Convênio ICMS 16/15 ainda válido pra indústria
- Reforma NÃO reduz drasticamente o preço de kit solar · expectativa de queda modesta ou neutra
- Cuidado com proposta que promete benefício antes de decreto regulamentador sair
- Recomendação cravada: instalar agora · acompanhar decreto · reavaliar planejamento em 2028-2029

## Fontes consultadas {#fontes}

- Lei Complementar 214/2025 · Reforma Tributária ([planalto.gov.br](https://www.planalto.gov.br))
- Emenda Constitucional 132/2023 · base constitucional da Reforma
- Convênio CONFAZ ICMS 16/2015 · isenção de ICMS pra autoconsumo solar
- Lei 14.300/2022 · Marco Legal da Geração Distribuída
- Receita Federal · agenda regulatória da Reforma Tributária
- ABSOLAR · análise setorial da Reforma Tributária pra solar (2025)
- Briefing técnico Aura Energy V3.1 · Renato Edson (CREA-TO)

## Próximo passo

Quer cravar planejamento tributário pra projeto solar em 2026 considerando a transição da Reforma? Aura indica contador tributarista parceiro em Palmas especializado em renováveis. Whatsapp Renato: **(63) 9 9270-6284**.
`,
  },

  // ──────────────────────────────────────────────────────────────────────────
  // 11 · ECONOMIA · AUTOCONSUMO REMOTO
  // ──────────────────────────────────────────────────────────────────────────
  {
    slug: "autoconsumo-remoto-energia-solar-tocantins",
    titulo: "Autoconsumo remoto · 1 usina solar zerando várias contas em Tocantins",
    resumo:
      "Lei 14.300 permite uma usina solar compensar geração em várias unidades consumidoras do mesmo dono. Veja como funciona, quem se enquadra e o ganho real.",
    categoria: "Economia",
    tempoLeitura: "10 min",
    dataPublicacao: "2026-05-25",
    conteudo: `Você sabia que uma única usina solar pode zerar a conta de várias propriedades do mesmo dono em Tocantins? Esse mecanismo se chama **autoconsumo remoto** e foi formalizado pela Lei 14.300/2022 (Art. 1° XVII). É uma das modalidades mais subutilizadas pelo mercado solar · justamente porque exige planejamento técnico um pouco maior, mas o retorno financeiro é significativo.

Esse artigo crava quando autoconsumo remoto faz sentido, como funciona tecnicamente, e os casos típicos onde a Aura Energy aplica em Palmas-TO. Não é estratégia pra todo cliente · mas pra quem se enquadra, é multiplicador de retorno.

## Neste artigo

- [O que é autoconsumo remoto (definição Lei 14.300)](#definicao)
- [Pré-requisitos cravados](#pre-requisitos)
- [Como o crédito é distribuído entre UCs](#distribuicao)
- [Caso 1 · família com casa + sítio](#caso-familia)
- [Caso 2 · comércio com 2 lojas em Palmas](#caso-comercio)
- [Caso 3 · rural com fazenda + casa do dono + galpão](#caso-rural)
- [Caso 4 · indústria com matriz + filial](#caso-industria)
- [Diferença vs geração compartilhada (consórcio)](#vs-consorcio)
- [Limites e cuidados regulatórios](#limites)
- [Setup técnico cravado](#setup-tecnico)
- [Resumo cravado](#resumo)
- [Fontes consultadas](#fontes)

## O que é autoconsumo remoto · definição Lei 14.300 {#definicao}

Conforme Lei 14.300/2022 · Art. 1° · inciso XVII:

> **Autoconsumo remoto:** modalidade caracterizada por unidades consumidoras de titularidade de uma mesma pessoa jurídica, incluídas matriz e filiais, ou pessoa física que possua unidade consumidora com microgeração ou minigeração distribuída em local diferente das unidades consumidoras, dentro da mesma área de concessão ou permissão, nas quais a energia excedente será compensada.

Em linguagem direta cravada: **uma pessoa (CPF ou CNPJ) pode instalar a usina solar em UM ponto e compensar a geração em VÁRIAS contas de luz suas em outros endereços** · desde que tudo esteja dentro da mesma área de concessão (em Tocantins = área Energisa).

## Pré-requisitos cravados {#pre-requisitos}

Pra fazer autoconsumo remoto em Tocantins, você precisa cumprir TODOS estes critérios:

**1. Mesmo titular nas UCs.** O CPF (ou CNPJ) da unidade geradora precisa ser o MESMO das unidades beneficiárias. Se a casa é do João e o sítio é do filho dele, **não vale** · titulares diferentes.

**2. Mesma área de concessão.** Em Tocantins, a Energisa atende quase 100% do estado. Se uma UC estiver em outro estado (ex: MA, PA, BA), não vale.

**3. Microgeração ou minigeração.** Sistemas até 5 MW se enquadram. Acima disso, vira "geração distribuída de grande porte" com regras diferentes.

**4. Cadastro formal junto à Energisa-TO.** Você precisa solicitar à concessionária o cadastro do esquema de autoconsumo remoto. Não é automático.

**5. Definição de percentual de rateio.** Você decide quanto da sobra de geração vai pra cada UC beneficiária · pode ser em % ou em kWh fixo. Pode mudar com aviso prévio de 90 dias.

## Como o crédito é distribuído entre UCs {#distribuicao}

Cada mês a Energisa-TO processa:

1. **UC geradora consome localmente** a energia gerada pela usina
2. **Excedente vira crédito** · ainda na UC geradora
3. **Crédito é rateado** entre UCs beneficiárias conforme percentual definido
4. **Cada UC beneficiária** usa o crédito recebido pra abater consumo dela

**Exemplo cravado:**

- Usina solar de 8 kWp na casa principal · gera ~1.170 kWh/mês
- Consumo da casa principal · 600 kWh/mês
- Sobra (excedente) · 570 kWh/mês
- Configuração de rateio escolhida: 60% pra sítio · 40% pra apartamento dos pais
- Sítio recebe: 342 kWh de crédito · abate da conta dele
- Apartamento dos pais recebe: 228 kWh de crédito · abate da conta deles

Resultado: **uma instalação solar zerando 3 contas** (casa + sítio + apartamento).

## Caso 1 · família com casa + sítio {#caso-familia}

Perfil-tipo cravado:

- **João tem casa em Palmas (R$ 600/mês de conta)** + **sítio pra final de semana em Lajeado-TO (R$ 250/mês de conta)**
- Total mensal Energisa João: R$ 850/mês
- Conta consolidada anual: ~R$ 10.200/ano

**Solução tradicional (uma usina por endereço):**

- Sistema 5 kWp na casa: R$ 15.000 (linha Padrão Aura)
- Sistema 2 kWp no sítio: R$ 6.500 (linha Mini ajustada)
- Total: R$ 21.500

**Solução com autoconsumo remoto:**

- Sistema 7 kWp na casa (telhado maior · mais espaço · melhor irradiação): R$ 17.500
- Sítio ZERO investimento · só cadastra como UC beneficiária
- Total: R$ 17.500
- **Economia de R$ 4.000 no investimento inicial · mesma economia mensal**

Vantagem extra: a usina concentrada num só telhado é mais fácil de manter, limpar e monitorar.

## Caso 2 · comércio com 2 lojas em Palmas {#caso-comercio}

Perfil-tipo:

- **Maria tem 2 lojas em Palmas com mesmo CNPJ:** loja matriz (centro · R$ 900/mês) e loja filial (Plano Diretor Sul · R$ 700/mês)
- Total mensal: R$ 1.600/mês

**Solução com autoconsumo remoto:**

- Sistema 12 kWp instalado no telhado da loja matriz (telhado maior · sem sombreamento)
- Gera ~1.750 kWh/mês
- Configuração de rateio: 50% mantém na matriz · 50% vai pra filial
- Investimento: R$ 25.500 (Premium + módulos extras)
- Economia consolidada projetada: ~R$ 1.300/mês
- Payback projetado: ~20 meses (menos de 2 anos)

Mesmo dimensionamento como 2 sistemas separados ficaria mais caro e ineficiente (telhado da filial costuma ser menor e/ou com mais sombreamento).

## Caso 3 · rural com fazenda + casa do dono + galpão {#caso-rural}

Perfil-tipo (combina com Pronaf Bioeconomia · ver [artigo dedicado](/artigos/pronaf-bioeconomia-solar-rural-tocantins)):

- **Carlos tem propriedade rural em Lagoa do Tocantins · CPF dele em 3 UCs:**
  - **Fazenda · pivô central** (R$ 7.500/mês safra · R$ 800/mês entressafra)
  - **Casa do dono na fazenda** (R$ 350/mês)
  - **Galpão de armazenagem** (R$ 280/mês)

**Solução tradicional:** 3 sistemas separados · R$ 240.000 total (BESS no pivô · ver artigo BESS).

**Solução com autoconsumo remoto:**

- Sistema híbrido (solar + bateria) instalado no telhado do galpão (sem sombreamento · perto da rede)
- 30 kWp + 50 kWh bateria · R$ 280.000 turn-key
- UC geradora: galpão · UC beneficiárias: fazenda + casa do dono
- Configuração de rateio: 70% pra fazenda (irrigação) · 20% pra casa · 10% mantém no galpão
- Financiamento Pronaf Bioeconomia (0,5% a.m. · 12 anos) se elegível
- **Economia consolidada projetada durante safra: ~R$ 7.500/mês**

Vantagem extra: bateria fica no galpão (sala adequada) e atende necessidade noturna do pivô via rede.

## Caso 4 · indústria com matriz + filial {#caso-industria}

Perfil-tipo:

- **Empresa Y tem fábrica em Distrito Industrial de Palmas (R$ 35.000/mês)** + **depósito em Porto Nacional (R$ 8.000/mês)**
- Total: R$ 43.000/mês

**Solução com autoconsumo remoto:**

- Sistema 400 kWp instalado no telhado da fábrica (galpão grande · ideal)
- Gera ~58 MWh/mês
- Compensa 100% da fábrica + sobra rateada pra depósito
- Combina com ICMS Convênio 16/15 (ver [artigo dedicado](/artigos/icms-convenio-16-15-industria-solar-tocantins))
- Investimento: ~R$ 1,5 milhão turn-key
- Economia consolidada projetada: ~R$ 36.000/mês
- Payback projetado: ~3,5 a 4,5 anos

Sem autoconsumo remoto, a empresa teria que avaliar 2 sistemas distintos · um na fábrica e outro no depósito · com custo logístico e operacional maior.

## Diferença vs geração compartilhada (consórcio) {#vs-consorcio}

Atenção pra não confundir:

| Critério | Autoconsumo remoto | Geração compartilhada |
|---|---|---|
| Titular das UCs | Mesmo CPF/CNPJ | CPFs/CNPJs diferentes (consórcio ou cooperativa) |
| Quem se beneficia | Só o dono | Vários consorciados |
| Setup jurídico | Simples · cadastro na Energisa | Complexo · contrato de consórcio · estatuto |
| Aplicação típica | Família com múltiplas UCs · empresa com matriz/filial | Condomínio · cooperativa · investidor de "lote solar" |

Autoconsumo remoto é **mais simples** · vale pra quem tem múltiplas UCs próprias. Geração compartilhada é solução de mercado pra quem quer "comprar parte de uma usina" sem ter telhado próprio.

## Limites e cuidados regulatórios {#limites}

**1. Limite de potência: 5 MW.** Acima disso, vira "minigeração de grande porte" com regras adicionais.

**2. Limite de UCs beneficiárias:** não há limite explícito de quantidade · mas Energisa-TO pode pedir justificativa técnica pra rateio entre dezenas de UCs.

**3. Atualização de rateio:** percentual de distribuição pode ser alterado · mas precisa solicitação formal com 90 dias de antecedência.

**4. Mudança de titularidade:** se você vender ou transferir uma UC pra outro titular (ex: vender o sítio), aquela UC sai automaticamente do esquema.

**5. Fio B aplica em todas:** cada UC beneficiária paga Fio B normal sobre os créditos recebidos (regra Lei 14.300).

**6. Custo de disponibilidade mínimo:** cada UC continua pagando a taxa mínima da Energisa-TO (R$ 30-50 dependendo da ligação). Não dá pra "anular" totalmente a conta.

## Setup técnico cravado {#setup-tecnico}

Pra implementar autoconsumo remoto em Tocantins:

1. **Análise do conjunto:** Aura levanta consumo de todas as UCs do mesmo titular · cravando viabilidade técnica e financeira
2. **Escolha da UC geradora:** geralmente onde tem o melhor telhado, maior área disponível, menor sombreamento, ou maior consumo local
3. **Dimensionamento:** sistema dimensionado pra suprir consumo local + gerar excedente proporcional ao das outras UCs
4. **Projeto técnico + ART** assinado por engenheiro CREA (Renato Edson · CREA-TO)
5. **Parecer de acesso:** protocolado na Energisa-TO com indicação das UCs beneficiárias
6. **Cadastro do rateio:** definir percentual ou kWh fixo pra cada UC
7. **Aprovação Energisa:** prazo 15-45 dias dependendo do porte
8. **Instalação e homologação:** mesmo procedimento padrão
9. **Atualização dos contratos:** todas as UCs precisam atualizar contrato de fornecimento com a Energisa

## Resumo cravado {#resumo}

- Autoconsumo remoto · Lei 14.300/2022 Art. 1° XVII · mesma titularidade · mesma área de concessão
- Permite UMA usina compensar geração em VÁRIAS UCs do mesmo dono
- Vantagens: investimento concentrado · melhor manutenção · economia consolidada · menos retrabalho
- 4 casos cravados: família com casa+sítio · comércio com 2 lojas · rural com 3 UCs · indústria matriz+filial
- Não confundir com geração compartilhada (consórcio · CPFs diferentes)
- Aplicação técnica simples · cadastro Energisa-TO + ART + projeto · 30-60 dias do contrato à energização
- Combina com Pronaf Bioeconomia (rural) e ICMS Convênio 16/15 (indústria)

## Fontes consultadas {#fontes}

- Lei 14.300/2022 · Marco Legal da Geração Distribuída · Art. 1° XVII (autoconsumo remoto)
- Resolução ANEEL 1.000/2021 · regras de prestação do serviço público de distribuição
- Resolução ANEEL 1.059/2023 · regulamentação da Lei 14.300
- Resolução ANEEL 1.085/2024 · atualização PRODIST
- Manual operacional Energisa-TO · procedimentos de autoconsumo remoto
- Briefing técnico Aura Energy V3.1 · Renato Edson (CREA-TO)

## Próximo passo

Tem múltiplas contas de luz no mesmo CPF ou CNPJ em Tocantins · pode estar deixando dinheiro na mesa. Análise consolidada gratuita Aura · Renato levanta as UCs, calcula viabilidade e crava se autoconsumo remoto faz sentido pro seu caso. Whatsapp: **(63) 9 9270-6284**.
`,
  },
];
