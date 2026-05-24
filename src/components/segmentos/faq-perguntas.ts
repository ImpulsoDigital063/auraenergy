// Perguntas frequentes segmentadas por nicho.
// Cada array tem 7-9 perguntas específicas do decisor do segmento.

export type Pergunta = {
  q: string;
  a: string;
};

// =====================================================================
// CASA — residencial · linguagem direta família/dono de imóvel
// =====================================================================
export const FAQ_CASA: Pergunta[] = [
  {
    q: "Quanto custa instalar energia solar em Palmas?",
    a: "Em Palmas, sistemas residenciais Tier 1 (Trina/Canadian + Growatt/Sungrow) custam: 3 kWp a partir de R$ 13.000, 5 kWp por volta de R$ 19-25.000, 8 kWp entre R$ 30-38.000. O valor inclui painéis, inversor, estrutura, projeto, ART, homologação na Energisa e instalação. A visita técnica é gratuita e te dá o orçamento exato.",
  },
  {
    q: "Quanto tempo leva pra instalar e legalizar?",
    a: "Sistema residencial pequeno (microgeração até 75 kW) é homologado pela Energisa Tocantins em até 15 dias úteis. Instalação leva 1 a 3 dias. Total da assinatura ao sistema gerando: tipicamente 25 a 40 dias.",
  },
  {
    q: "Como funciona o desconto do Programa Palmas Solar no IPTU?",
    a: "O Programa Palmas Solar (Lei Complementar Municipal nº 327/2015, regulamentada pelo Decreto nº 1.506/2017) concede desconto progressivo no IPTU. Pra adesões protocoladas em 2026, o benefício é 40% de desconto no IPTU por 5 anos consecutivos (vigência 2027-2031). O percentual cai de 5 em 5 anos até 2035. Aura cuida de toda a documentação técnica (memorial descritivo, ART, projeto homologado) e do protocolo no Resolve Palmas (presencial ou Portal do Cidadão), com acompanhamento até a emissão do Selo Solar pela Secretaria Municipal da Habitação. Em 02/2026 já existem 1.037 contribuintes ativos no programa em Palmas (fonte: Prefeitura).",
  },
  {
    q: "A Lei 14.300 (Marco Legal da GD) ainda permite economizar?",
    a: "Sim. Em 2026 o Fio B subiu pra 60%, mas a economia ainda fica entre 78% e 88% pra sistemas novos em Palmas. Por causa da alta irradiação solar (5,9 kWh/m²/dia) e da tarifa cara da Energisa, o payback continua entre 4 e 6 anos. Quem instalou ANTES de 7/jan/2023 tem direito adquirido até 2045 e não paga Fio B.",
  },
  {
    q: "O sistema funciona em dias nublados ou de chuva?",
    a: "Funciona, mas com geração reduzida. Em dia totalmente nublado a geração cai 60-90%. A boa notícia é que o sistema é conectado à rede da Energisa: nos dias bons você gera SOBRA e \"empresta\" pra rede, nos dias ruins você \"resgata\" essa sobra. No fim do mês as contas batem.",
  },
  {
    q: "Como funciona o financiamento?",
    a: "Trabalhamos com 6 bancos parceiros: BV Financeira (preferido), Solfácil, Sicredi, Sicoob, Santander e BB Programa Agro Energia. Prazo até 120 meses · análise rápida. Em muitos casos a parcela do financiamento fica menor que a conta atual de luz · simulação sob medida na visita técnica.",
  },
  {
    q: "Qual a manutenção do sistema?",
    a: "Mínima. Limpeza dos painéis 1x por ano (em Palmas é menos crítico — vento ajuda). Verificação do inversor de tempos em tempos. Painéis têm vida útil de 25-30 anos · garantia Aura de 12 anos painel + 10 anos inversor. Inversor geralmente troca uma vez (R$ 3-5 mil em 12-15 anos). Tudo monitorado pelo app no celular.",
  },
  {
    q: "Como sei que o sistema é legalizado?",
    a: "Todo projeto Aura Energy tem ART do engenheiro eletricista (Renato Edson · CREA-TO), parecer de acesso aprovado pela Energisa Tocantins, certificados INMETRO dos painéis e inversor, e troca formal do medidor por bidirecional. Documentação completa entregue ao cliente.",
  },
  {
    q: "E se eu vender o imóvel?",
    a: "O sistema vai junto com o imóvel (é equipamento fixado). Imóvel com solar tende a valorizar na revenda · ativo de 25 anos no telhado pesa positivamente na negociação.",
  },
];

// =====================================================================
// COMÉRCIO — decisor PJ · linguagem técnico-financeira
// =====================================================================
export const FAQ_COMERCIO: Pergunta[] = [
  {
    q: "Por que solar comercial paga mais rápido que residencial em Palmas?",
    a: "Comércio em Palmas geralmente tem perfil de consumo concentrado entre 8h-22h — exatamente quando o sol cobre. Refrigeração, ar-condicionado, iluminação e equipamentos rodam 12-16h por dia. Como a tarifa B3 chega a R$ 0,90-1,30/kWh em horário de pico (tarifa branca), o payback fica entre 3-4 anos. Residencial fica 4-6 anos.",
  },
  {
    q: "Como funciona contabilmente — capex ou opex?",
    a: "Você decide. À vista vira ativo imobilizado depreciável em 25 anos (Lei 11.638/07, NBC TG 27). Financiado em 120x via BV Financeira (preferido) + 5 bancos parceiros PJ entra como despesa financeira no DRE · vira opex. Aura entrega memorial descritivo + nota fiscal segmentada (equipamento + instalação) pra facilitar contabilização.",
  },
  {
    q: "Como eu pago o IPTU comercial menor com solar?",
    a: "O Programa Palmas Solar (LC 327/2015 + Decreto 1.506/2017) concede desconto no IPTU comercial pra estabelecimentos com sistema fotovoltaico homologado. Pra adesões em 2026, são 40% de desconto por 5 anos (vigência 2027-2031). Pra empresas instaladoras/projetistas/fabricantes em Palmas, o programa concede ainda 80% de desconto no ISSQN por até 10 anos. Aura cuida da documentação técnica e do protocolo no Resolve Palmas — único diferencial Aura no mercado de Palmas, nenhum dos 18 concorrentes mapeados comunica esse benefício com clareza legal. Em 02/2026 são 1.037 contribuintes beneficiados (fonte: Prefeitura).",
  },
  {
    q: "Eu posso financiar pela PJ ou só pessoa física?",
    a: "BV Solar Empresa (preferido), Solfácil PJ e Santander Solar PJ financiam direto pra empresa (CNPJ) em 60-120 meses. Análise de crédito é PJ · usa faturamento + tempo de mercado. Aura monta a documentação que cada banco pede.",
  },
  {
    q: "E se meu negócio crescer? Posso aumentar o sistema?",
    a: "Sim — é chamado expansão de microgeração. A Lei 14.300 permite até 75 kW em B3. Aura dimensiona o projeto inicial considerando 10-15% de margem de crescimento e prevê pontos de ampliação no quadro elétrico. Quando precisar, é só adicionar painéis e fazer aditivo na Energisa.",
  },
  {
    q: "Tem garantia contratual de geração?",
    a: "Aura entrega garantia técnica do equipamento: 12 anos painel · 10 anos inversor · 1 ano serviço de instalação. Painéis Tier 1 têm vida útil de 25 anos (curva de degradação lineal de fábrica). Garantia de performance contratada (% mínimo geração) não está incluída no escopo padrão · pode ser conversada caso a caso.",
  },
  {
    q: "Quanto tempo leva pra instalar num comércio em operação?",
    a: "Sistema comercial mid (10-30 kWp) é instalado em 2-5 dias úteis sem parar a operação. Trabalho é feito no telhado/estrutura, fora do horário de pico de movimento. Energisa homologa em 15-25 dias úteis (B3 pode levar um pouco mais que residencial). Total: 30-45 dias da assinatura à ativação.",
  },
  {
    q: "Como fica meu monitoramento? Posso acompanhar pelo celular?",
    a: "Sim. Inversores Growatt, Sungrow e Solis incluem app gratuito com geração ao vivo, gráfico mensal/anual, alertas de falha e exportação CSV. Aura também recebe alertas em paralelo — se algo desviar do esperado, identificamos antes de você perceber na conta.",
  },
];

// =====================================================================
// INDÚSTRIA — decisor industrial · linguagem técnico-executiva
// =====================================================================
export const FAQ_INDUSTRIA: Pergunta[] = [
  {
    q: "Como solar reduz demanda contratada e TUSD/TE em A4 média tensão?",
    a: "Solar industrial em A4 não elimina demanda contratada (você continua pagando pela disponibilidade), mas reduz consumo de energia (TE) em 70-80% e parcela TUSD em 50-65% após Fio B 60% (Lei 14.300 em 2026). Net da operação: redução de 70-78% da fatura mensal. Sistemas dimensionados acima de 75 kWp entram em minigeração distribuída — homologação A4 com Energisa demora 30-45 dias úteis.",
  },
  {
    q: "Qual o ICMS Convênio 16/15 do Tocantins e como Aura aplica?",
    a: "O Convênio ICMS 16/15 (CONFAZ) reduz a base de cálculo do ICMS sobre a energia injetada na rede pelo sistema solar — efeito prático: você não paga ICMS duas vezes (na geração + no consumo compensado). Tocantins é signatário. Aura inclui o enquadramento do projeto na proposta executiva e na nota fiscal — você recebe o benefício automaticamente.",
  },
  {
    q: "Qual a TIR projetada típica pra solar industrial em TO?",
    a: "Pra plantas de 50-500 kWp em TO: TIR projetada 18-22% a.a. (faixa típica 2026). Comparativo com CDB conservador a 9% a.a.: solar entrega ~2x mais retorno em 25 anos com risco operacional baixo. Cálculo varia conforme tarifa atual (A4 fora ponta vs ponta), demanda contratada, fator de potência e horário de operação. Proposta executiva traz TIR específica do seu caso.",
  },
  {
    q: "Como acessar BNDES Finame Solar pra indústria?",
    a: "BNDES Finame Solar financia até 80% do CAPEX em 10-12 anos com taxa 7-9% a.a. (TLP + spread). Aura monta o pacote: projeto executivo, ART, memorial técnico, parecer de acesso Energisa, plano de negócio do investimento. Banco operador (BB, Santander, Itaú PJ) faz análise de crédito. Aprovação típica em 30-60 dias úteis.",
  },
  {
    q: "Qual a documentação técnica entregue?",
    a: "ART (Anotação de Responsabilidade Técnica) do engenheiro eletricista CREA-TO, memorial descritivo, projeto executivo as-built, parecer de acesso Energisa aprovado, certificados INMETRO de painéis e inversores, contrato com cláusula de SLA de geração, manual de O&M e procedimentos de emergência. Tudo digitalizado em pasta cliente.",
  },
  {
    q: "Tem garantia contratual de performance (PPA-like)?",
    a: "Sim. Contrato Aura industrial inclui SLA de geração (kWh/mês mínimo dimensionado em projeto). Se a geração ficar abaixo do projetado por falha do sistema (excluindo sombreamento posterior, alteração de demanda do cliente ou força maior), Aura faz ajuste técnico sem custo até atingir o SLA. Painéis Tier 1 têm garantia linear de fábrica 25 anos. Inversores 10-12 anos.",
  },
  {
    q: "Como funciona O&M (operação e manutenção) industrial?",
    a: "Aura oferece contrato de O&M anual: limpeza dos painéis 2x/ano, inspeção termográfica 1x/ano, monitoramento remoto 24/7 com SLA de resposta, relatório mensal de performance vs projetado. Custo típico: 1,5-2% a.a. sobre CAPEX. Inclui troca preventiva de fusíveis, conectores MC4 e contatores. Não inclui troca de inversor (vida útil 10-15 anos — programada à parte).",
  },
  {
    q: "Quanto tempo da assinatura à energia ligada?",
    a: "Pra sistemas industriais 50-500 kWp em A4: 60-90 dias úteis. Inclui projeto executivo (5-10 dias), homologação Energisa (30-45 dias), instalação (15-25 dias dependendo da complexidade do telhado/galpão), comissionamento e ativação (5 dias). Em paralelo: financiamento BNDES Finame, se aplicável.",
  },
  {
    q: "Posso parar a planta durante a instalação?",
    a: "Não precisa. Instalação é feita no telhado/galpão sem interromper operação. Trabalho elétrico crítico (conexão ao quadro principal) é programado em janela de manutenção preventiva da indústria — tipicamente 4-8h de uma madrugada de domingo. Aura coordena com sua equipe de manutenção.",
  },
];

// =====================================================================
// RURAL — produtor rural · linguagem técnico-agrícola
// =====================================================================
export const FAQ_RURAL: Pergunta[] = [
  {
    q: "Como o Pronaf Mais Alimentos financia solar?",
    a: "O Pronaf Mais Alimentos (linha BNDES via Banco do Brasil, Bradesco, Sicredi, etc) financia sistemas de energia solar em propriedades rurais com taxa a partir de 0,5% a.m. e prazo até 12 anos. Limite de R$ 250 mil por DAP/CAF. Carência típica de 1-2 anos. Aura monta a documentação técnica (projeto, ART, parecer de acesso) e o produtor leva ao banco — aprovação típica em 30-45 dias.",
  },
  {
    q: "Preciso ter DAP/CAF pra acessar Pronaf?",
    a: "Sim. DAP (Declaração de Aptidão ao Pronaf) ou CAF (Cadastro Nacional da Agricultura Familiar — substituto unificado a partir de 2024) é requisito básico. Se você não tem, sindicato rural ou EMATER local emitem em 1-2 semanas. Aura indica os contatos locais de Tocantins.",
  },
  {
    q: "Pra grande produtor (acima de R$ 250 mil), qual linha?",
    a: "Moderagro (BNDES) financia até R$ 1,3 milhão por safra · taxa 8-10% a.a. · prazo 8 anos. FCO Verde (Banco do Brasil) financia até R$ 20 milhões com taxa subsidiada e prazo 12 anos. Pronafe BNDES Finame Solar pra agroindústria (frigorífico, beneficiamento) acima de R$ 250 mil. Aura faz o enquadramento.",
  },
  {
    q: "Como funciona o autoconsumo remoto entre matrizes da fazenda?",
    a: "A Lei 14.300 permite expressamente que produtor rural gere energia em uma unidade consumidora (telhado de galpão, por exemplo) e compense em outra(s) unidade(s) da mesma propriedade — pivô a 4 km, granja, sede. Tudo dentro da mesma área de concessão Energisa. Aura faz o cadastro de geração compartilhada na Energisa e divide os créditos entre as matrizes conforme você definir.",
  },
  {
    q: "Bombeamento solar dedicado funciona sem rede?",
    a: "Sim. Bomba submersa ou centrífuga ligada DIRETO nos painéis (com controlador de bomba — sem inversor de rede, sem bateria). Funciona enquanto o sol estiver. Pra 100% de autonomia, painéis + bateria + inversor híbrido. Custo do bombeamento direto fica 30-40% menor que sistema completo. Ideal pra poço artesiano, captação em rio, irrigação de pequena escala.",
  },
  {
    q: "Quanto tempo leva pra Energisa homologar sistema rural?",
    a: "Sistema rural até 75 kW (microgeração B2 Rural): 15-25 dias úteis. Sistemas 75-1.000 kW (minigeração A4 ou B2 Rural): 30-45 dias úteis. Pra autoconsumo remoto entre matrizes da fazenda, prazo é igual mas exige cadastro adicional de geração compartilhada — Aura faz o protocolo.",
  },
  {
    q: "Painéis em solo (estrutura) ou no telhado da granja/galpão?",
    a: "Telhado é sempre mais barato (custo/kWp ~10-12% menor) — aproveita estrutura existente. Solo só vale a pena quando você tem área disponível e telhado é insuficiente. Estrutura de solo precisa de terra firme + ART de fundação + cerca de proteção. Aura faz visita técnica e indica a melhor opção pra sua propriedade.",
  },
  {
    q: "Tenho gerador a diesel — vale trocar?",
    a: "Quase sempre vale. Gerador a diesel custa R$ 2,50-3,80 por kWh gerado (combustível + manutenção + depreciação). Solar fotovoltaico custa R$ 0,15-0,30 por kWh ao longo de 25 anos. Em propriedade rural com gerador rodando 4-8h/dia, o payback do solar fotovoltaico fica em 2-3 anos comparado ao diesel.",
  },
  {
    q: "Como protejo os painéis contra animais (gado, aves) e ventos?",
    a: "Em telhado: estrutura padrão funciona normalmente. Em solo: estrutura de aço galvanizado a 1,5-2 m do chão (acima da altura de gado, abaixo de pastagem) + cerca de proteção. Pra ventos fortes (sertão TO), Aura usa estrutura reforçada com fundação de concreto. Painéis Tier 1 são certificados pra IEC 61215 — resistem granizo de até 25 mm e ventos de 140 km/h.",
  },
];
