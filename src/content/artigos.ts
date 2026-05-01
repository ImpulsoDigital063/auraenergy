// Artigos pra seção Recursos da LP. Dados verificados via pesquisa de mercado
// (ABSOLAR, ANEEL, Canal Solar, pv magazine BR, Solfácil) — maio/2026.

export type Artigo = {
  slug: string;
  titulo: string;
  resumo: string;
  categoria: "Economia" | "Regulamentação" | "Equipamentos" | "Financiamento";
  tempoLeitura: string;
  conteudo: string;
};

export const ARTIGOS: Artigo[] = [
  {
    slug: "quanto-custa-energia-solar-palmas-2026",
    titulo: "Quanto custa instalar energia solar em Palmas-TO em 2026?",
    resumo:
      "O preço de um sistema solar em Palmas vai de R$ 12 mil a R$ 38 mil. Veja o número certo pro tamanho da sua conta.",
    categoria: "Economia",
    tempoLeitura: "4 min",
    conteudo: `Se você chegou aqui é porque está cansado da conta da Energisa subir todo ano. Em julho de 2025 ela subiu 12,31% pra residência. Em maio de 2026 a bandeira virou amarela. E o reajuste de 2026 ainda vem.

Vamos direto ao ponto: quanto custa colocar solar na sua casa em Palmas?

## Preço por tamanho de sistema (instalado, com tudo)

A faixa real em Palmas, com equipamento Tier 1 (Trina, Canadian, Jinko + inversor Growatt ou Sungrow) e instalação completa:

- **Conta de R$ 200 a R$ 350/mês** → sistema de 3 kWp → **R$ 12.000 a R$ 16.000**
- **Conta de R$ 400 a R$ 700/mês** → sistema de 5 kWp → **R$ 18.000 a R$ 25.000**
- **Conta de R$ 800 a R$ 1.500/mês** → sistema de 8 kWp → **R$ 28.000 a R$ 38.000**

Os valores incluem: painéis, inversor, estrutura, cabeamento, projeto, ART do engenheiro, homologação na Energisa Tocantins e instalação.

## Por que Palmas paga um pouquinho mais que São Paulo

Frete do Sudeste pro Tocantins encarece kit em até 20%. Mão de obra especializada também. A boa notícia é que **Palmas tem irradiação solar de 5,8 a 6,2 kWh/m²/dia** — entre as mais altas do Brasil. Cada painel gera mais aqui que em SP. Você compensa o preço com geração maior.

## E o financiamento?

Solfácil financia em até 120 meses, com taxa a partir de 0,79% a.m. Pra um sistema de R$ 22 mil, parcela fica em torno de R$ 280-320/mês — quase sempre **abaixo** da economia que o sistema gera. Você troca a conta da Energisa pela parcela do financiamento e já economiza.`,
  },
  {
    slug: "lei-14300-vale-a-pena-solar-2026",
    titulo: "Lei 14.300 explicada: ainda vale a pena instalar solar em 2026?",
    resumo:
      "Em 2026 o Fio B chegou em 60%. A economia caiu — mas continua entre 74% e 87%. Veja o cálculo real.",
    categoria: "Regulamentação",
    tempoLeitura: "5 min",
    conteudo: `Você já ouviu falar em "taxação do sol"? É a Lei 14.300/2022. Em 2026 ela apertou — e muita gente está em dúvida se ainda vale instalar. Resposta curta: vale.

## O que mudou (e o que NÃO mudou)

A Lei 14.300 criou o **Fio B** — uma cobrança que pega uma fatia da TUSD sobre a energia que você joga na rede. É como pagar "aluguel" da rede da Energisa pra usar ela como bateria virtual.

A cobrança sobe ano a ano:

- 2023: 15%
- 2024: 30%
- 2025: 45%
- **2026: 60%** ← você está aqui
- 2027: 75%
- 2028: 90%
- 2029 em diante: 100%

## Quem instalou antes de 2023 não paga nada

Direito adquirido. Quem homologou o sistema **antes de 7 de janeiro de 2023** está blindado até 2045 — não paga Fio B. São os "felizardos da primeira leva".

## Mesmo pagando 60%, ainda vale?

Sim. Cálculo real pra Palmas em 2026:

- Conta sem solar: R$ 600/mês
- Conta depois do solar (com Fio B em 60%): R$ 90 a R$ 130/mês
- **Economia: 78% a 85%**
- Payback: 4 a 6 anos
- Sistema dura 25-30 anos

Quem espera 2027 vai pagar 75% do Fio B. Quem espera 2028, 90%. **2026 é a última "janela boa"** antes do bicho pegar.`,
  },
  {
    slug: "payback-solar-palmas-tocantins",
    titulo: "Em quanto tempo o sistema solar se paga? Cálculo real pra Palmas",
    resumo:
      "Em Palmas o sistema se paga em 4 a 6 anos. Depois, são 20+ anos de energia praticamente de graça.",
    categoria: "Economia",
    tempoLeitura: "4 min",
    conteudo: `Payback é o tempo até o sistema "virar zero" — quando a economia acumulada na conta paga o investimento. Vamos fazer a conta com números de Palmas, sem inventar.

## Caso real: comércio em Palmas com conta de R$ 800/mês

- **Investimento:** R$ 25.000 (sistema 5,5 kWp, equipamento Tier 1, instalado e homologado)
- **Economia mensal (com Fio B em 60%):** ~R$ 640/mês
- **Economia anual:** R$ 7.680
- **Payback:** R$ 25.000 ÷ R$ 7.680 = **3,25 anos**

Mas espera — a tarifa da Energisa sobe todo ano. Em julho/2025 subiu 12,31%. Esse aumento conta a favor de quem tem solar. Considerando reajuste médio de 7-10% ao ano, o payback real cai pra **menos de 3 anos**.

## Por que Palmas paga mais rápido que outras capitais

Três fatores: irradiação solar de 5,8-6,2 kWh/m²/dia (entre as mais altas do Brasil), tarifa em torno de R$ 0,92-0,98/kWh com tributos (uma das mais caras do Norte), e bandeira tarifária pesando — só em maio/2026 o adicional é R$ 1,885 a cada 100 kWh, e quem tem solar não paga.

## E depois do payback?

Os painéis duram 25-30 anos. O inversor uma vez vai trocar (típico em 12-15 anos, custa R$ 3-5 mil). Tirando isso, depois do payback você fica **mais de 20 anos com energia praticamente de graça**.

Em números: economia total de um sistema de R$ 25 mil ao longo da vida útil passa de **R$ 200 mil**.`,
  },
  {
    slug: "painel-550w-vs-600w-residencial",
    titulo: "Painéis de 550W ou 600W? Qual escolher pra residência",
    resumo:
      "O 550W ganha em custo-benefício. O 600W só vale quando o telhado é apertado. Veja como decidir.",
    categoria: "Equipamentos",
    tempoLeitura: "4 min",
    conteudo: `Quando você for fechar o orçamento, vai aparecer essa pergunta: 550W ou 600W? Pra maioria das casas de Palmas, **550W é a escolha certa** — mas tem caso em que o 600W faz sentido. Vamos lá.

## Diferença bruta de geração

O painel de 600W gera **9% a mais** que o de 550W. Em Palmas (HSP ~5,8), isso vira:

- 550W: ~80 kWh/mês por painel
- 600W: ~87 kWh/mês por painel

Num sistema com 8 painéis, dá 56 kWh/mês a mais. Com tarifa de R$ 0,95/kWh, equivale a **R$ 53/mês** ou **R$ 636/ano**.

## Diferença de preço

Em maio/2026, na faixa Tier 1: 550W custa R$ 800-1.100, 600W custa R$ 1.000-1.400. Diferença de ~R$ 200 por painel. Em 8 painéis, **R$ 1.600 a mais no investimento**.

## Quando o 600W ganha de verdade

**Telhado pequeno.** Se você precisa gerar 500 kWh/mês mas só cabem 7 painéis no telhado:

- 550W: 7 × 80 = 560 kWh ✓ (no limite)
- 600W: 7 × 87 = 609 kWh ✓ (sobra margem)

## A regra prática que a gente usa

1. Mediu o telhado e cabe folgado → **550W**
2. Telhado apertado, sobrou pouco espaço → **600W**
3. Quer deixar margem pra carro elétrico no futuro → **600W**`,
  },
  {
    slug: "solar-financiado-ou-a-vista-2026",
    titulo: "Solar à vista ou financiado: qual sai mais barato em 2026?",
    resumo:
      "Financiado quase sempre se paga sozinho com a economia da conta. À vista rende mais a longo prazo. Veja a conta.",
    categoria: "Financiamento",
    tempoLeitura: "5 min",
    conteudo: `Tem dinheiro guardado mas não sabe se compensa pagar à vista? Tem ou não tem dinheiro mas quer entender se o financiamento faz sentido? Esse artigo é pra você.

## Cenário 1: à vista

Você tira R$ 22.000 do bolso. Sistema instalado, conta da Energisa cai de R$ 600 pra R$ 90/mês — economia de R$ 510/mês. **Payback:** R$ 22.000 ÷ R$ 510 = **3,6 anos**.

Depois disso, são 20+ anos só de economia. Vantagem: você fica devendo zero, sem juro nenhum.

## Cenário 2: financiado em 96 meses (BV) ou 120 meses (Solfácil)

Mesmo sistema de R$ 22.000:

- **Solfácil — 120 meses, 0,79% a.m.:** parcela ~R$ 290/mês
- **BV — 96 meses, 1,17% a.m.:** parcela ~R$ 360/mês

Sua conta de luz era R$ 600. Com solar, vira R$ 90. Você economiza R$ 510/mês.

- Solfácil: paga R$ 290 de financiamento + R$ 90 de luz = R$ 380. **Economia líquida: R$ 220/mês desde o mês 1.**
- BV: paga R$ 360 + R$ 90 = R$ 450. **Economia líquida: R$ 150/mês desde o mês 1.**

Em ambos: você sai do dia 1 economizando, sem ter tirado um real do bolso.

## Regra prática que a Aura Energy aplica

- **Comércio em expansão / capital de giro vale ouro:** financia.
- **Aposentado / dinheiro parado em poupança:** à vista.
- **Conta gorda (R$ 1.000+) e financiamento aprovado:** financia. Parcela quase sempre é a metade da conta atual.`,
  },
];
