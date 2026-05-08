"use client";

import { useEffect, useRef, useState } from "react";
import { browserSupabase, type BriefingRow } from "@/lib/supabase";

const TOTAL_STEPS = 12;

const BLOCOS: Array<{ titulo: string; emoji: string; campos: Array<[string, string]> }> = [
  {
    titulo: "Identificação",
    emoji: "👤",
    campos: [
      ["nome", "Nome"],
      ["whatsapp", "WhatsApp"],
    ],
  },
  {
    titulo: "Operação Brasfrio→Aura",
    emoji: "🏗",
    campos: [
      ["anosBrasfrio", "Anos da Brasfrio"],
      ["anoInicioFotovoltaico", "Início fotovoltaico"],
      ["instalacoes12m", "Instalações últimos 12m"],
      ["kwpTotal12m", "kWp instalados (12m)"],
      ["maiorProjeto", "Maior projeto entregue"],
      ["numTecnicos", "Técnicos"],
      ["numVendas", "Vendas"],
      ["numAdmin", "Admin"],
      ["creaTO", "CREA-TO"],
      ["artPublica", "ART pública"],
      ["prazoEntregaResidencial", "Prazo residencial (dias)"],
      ["prazoEntregaComercial", "Prazo comercial"],
      ["prazoEntregaIndustrial", "Prazo industrial"],
      ["prazoEntregaRural", "Prazo rural"],
      ["frotaPropria", "Frota própria"],
      ["ferramentaCompleta", "Ferramental completo"],
      ["projetoInterno", "Projeto técnico"],
      ["distanciaMaxKm", "Distância máxima (km)"],
    ],
  },
  {
    titulo: "Cliente ideal",
    emoji: "🎯",
    campos: [
      ["mixResidencial", "Mix residencial (%)"],
      ["mixComercial", "Mix comercial (%)"],
      ["mixIndustrial", "Mix industrial (%)"],
      ["mixRural", "Mix rural (%)"],
      ["origemLead", "Origem dos leads"],
      ["nichoMaisLucro", "Nicho mais lucrativo"],
      ["objecaoFechamento", "Maior objeção"],
      ["objecaoOutra", "Objeção outra"],
      ["dorInicial", "Dor inicial"],
      ["dorOutra", "Dor outra"],
      ["ticketResidencial", "Ticket residencial"],
      ["ticketComercial", "Ticket comercial"],
      ["ticketIndustrial", "Ticket industrial"],
      ["ticketRural", "Ticket rural"],
      ["ticketMinimo", "Ticket mínimo aceitável"],
    ],
  },
  {
    titulo: "Posicionamento",
    emoji: "🎨",
    campos: [
      ["auraEhOQue", "Aura é"],
      ["posicionamento12m", "Onde quer estar em 12m"],
      ["vibeMarca", "Vibe da marca"],
      ["concorrentePalmas", "Concorrente que ameaça"],
      ["marcasAdmiradas", "Marcas admiradas (não-solar)"],
    ],
  },
  {
    titulo: "Catálogo",
    emoji: "⚡",
    campos: [
      ["modulosUsa", "Módulos usados"],
      ["moduloPreferido", "Módulo preferido"],
      ["inversoresUsa", "Inversores usados"],
      ["inversorPreferido", "Inversor preferido"],
      ["bateriaFrequencia", "Frequência bateria"],
      ["bateriasUsa", "Marcas bateria"],
      ["precoKitMini3kwp", "Mini 3 kWp"],
      ["precoKitPadrao5kwp", "Padrão 5 kWp"],
      ["precoKitPlus8kwp", "Plus 8 kWp"],
      ["precoKitPremium10kwp", "Premium 10 kWp"],
      ["garantiaModulo", "Garantia módulo (anos)"],
      ["garantiaInversor", "Garantia inversor (anos)"],
      ["garantiaServico", "Garantia serviço (anos)"],
      ["ofereceGarantiaPerformance", "Performance contratada?"],
      ["garantiaPerformancePct", "% mínimo geração"],
      ["garantiaPerformanceAnos", "Por X anos"],
    ],
  },
  {
    titulo: "Financiamento",
    emoji: "🏦",
    campos: [
      ["bancosConvenio", "Bancos com convênio"],
      ["bancoPreferido", "Banco preferido"],
      ["taxaAprovacao", "Taxa aprovação (%)"],
      ["aceitaPixEntrada", "PIX como entrada parcial"],
      ["experienciaPronaf", "Pronaf Bioeconomia"],
    ],
  },
  {
    titulo: "BESS · Baterias",
    emoji: "🔋",
    campos: [
      ["bessExperiencia", "Experiência com baterias"],
      ["bessAplicacoes", "Onde Aura aplica BESS"],
      ["bessMaiorProjeto", "Maior projeto bateria"],
      ["bessMarcas", "Marcas bateria"],
      ["bessInversorHibrido", "Inversor híbrido preferido"],
      ["bessPrecoBackup5kwh", "Backup 5 kWh (R$)"],
      ["bessPrecoComercial15kwh", "Comercial 15 kWh (R$)"],
      ["bessPrecoIndustrial50kwh", "Industrial 50 kWh+ (R$)"],
      ["bessClienteEntendeFioB", "Cliente já pede bateria?"],
      ["bessModeloComercial", "Modelo comercial"],
      ["bessConheceLei15269", "Conhece Lei 15.269/2025"],
      ["bessArgumentoVenda", "Argumento de venda BESS"],
      ["bessFocoCentral", "Foco BESS na Aura"],
      ["bessGarantiaAnos", "Garantia bateria (anos)"],
      ["bessRetrofit", "Retrofit em sistemas antigos"],
    ],
  },
  {
    titulo: "Heros das LPs",
    emoji: "🚀",
    campos: [
      ["heroCasaHeadline", "🏠 LP /casa · Sugestão headline (vazio = curtiu atual)"],
      ["casoCasaBairro", "Caso · Bairro"],
      ["casoCasaKwp", "Caso · kWp"],
      ["casoCasaContaAntes", "Conta antes (R$)"],
      ["casoCasaContaDepois", "Conta depois (R$)"],
      ["heroComercioHeadline", "🏬 LP /comercio · Sugestão headline"],
      ["casoComercioTipo", "Caso · Tipo"],
      ["casoComercioKwp", "Caso · kWp"],
      ["casoComercioContaAntes", "Conta antes"],
      ["casoComercioContaDepois", "Conta depois"],
      ["argumentoComercial", "Argumento comercial"],
      ["heroIndustriaHeadline", "🏭 LP /industria · Sugestão headline"],
      ["casoIndustriaSetor", "Setor"],
      ["casoIndustriaKwp", "kWp"],
      ["casoIndustriaInvest", "Investimento (R$)"],
      ["casoIndustriaEconomia", "Economia mensal"],
      ["casoIndustriaRoi", "ROI (anos)"],
      ["argumentoIndustrial", "Argumento industrial"],
      ["heroRuralHeadline", "🌾 LP /rural · Sugestão headline"],
      ["casoRuralTipo", "Tipo de propriedade"],
      ["casoRuralCidade", "Cidade"],
      ["casoRuralKwp", "kWp"],
      ["casoRuralUso", "Uso"],
      ["bloqueioRural", "Bloqueio rural"],
      ["heroMaeFraseImpacto", "🏠🏬🏭🌾 LP mãe · Sugestão frase impacto"],
    ],
  },
  {
    titulo: "Estratégia 90 dias",
    emoji: "📅",
    campos: [
      ["tempoDiaAura", "Tempo/dia Aura"],
      ["quemRespondeWpp", "Quem responde WhatsApp"],
      ["investimentoMensalAds", "Investimento ads (R$)"],
      ["canalCaptacaoPrimario", "Canal de captação"],
      ["metaMes1", "Meta mês 1 (instalações)"],
      ["metaMes2", "Meta mês 2"],
      ["metaMes3", "Meta mês 3"],
    ],
  },
  {
    titulo: "Diferenciais",
    emoji: "🛡",
    campos: [
      ["garantiasOferece", "O que JÁ oferece"],
      ["certificacoes", "Selos/certificações"],
      ["certificacoesOutras", "Outras certificações"],
      ["brigadaProtecao", "Brigada de proteção"],
    ],
  },
  {
    titulo: "Co-criação · ideias do Renato",
    emoji: "💡",
    campos: [
      ["cocriacaoFerramentaNova", "Ferramenta nova proposta"],
      ["cocriacaoSecaoFalta", "Seção/conteúdo que falta"],
      ["cocriacaoMudaria", "O que mudaria/tiraria"],
      ["cocriacaoIdeaOriginal", "💎 Ideia ORIGINAL"],
    ],
  },
  {
    titulo: "Decisões estratégicas",
    emoji: "✨",
    campos: [
      ["precoLpStrategy", "Estratégia de preço LPs"],
      ["marcaModuloDominante", "Marca módulo dominante"],
      ["pronafEspecialista", "Pronaf como diferencial rural"],
      ["bonusPalmasSolar", "Bônus Palmas Solar"],
      ["bonusPalmasSolarValor", "Bônus · valor R$"],
      ["bateriaPosicionamento", "Bateria · posicionamento"],
      ["garantiaPerformanceDecisao", "Garantia performance"],
      ["visitaTecnicaPolitica", "Visita técnica pré-orçamento"],
      ["visitaTecnicaKm", "Visita · km"],
      ["visitaTecnicaValor", "Visita · valor"],
      ["pacoteAssinaturaInteresse", "Pacote assinatura mensal"],
      ["motivacao12m", "Motivação 12m"],
    ],
  },
];

const ENUM_LABELS: Record<string, string> = {
  interno: "Interno (Aura)",
  terceiro: "Terceirizado",
  frequente: "Frequente (>20%)",
  ocasional: "Ocasional (5-20%)",
  raro: "Raro (<5%)",
  nunca: "Nunca",
  sim_recomendo: "Sim, recomendo",
  sim_nao_incentivo: "Sim, mas não incentivo",
  nao: "Não",
  sim_varias: "Sim, várias vendas",
  sim_alguma: "Sim, alguma",
  nao_quero_aprender: "Não, mas quero aprender",
  nao_conhecia: "Não conhecia",
  preco_fixo: "Preço fixo público",
  faixa: "Faixa (a partir de R$X)",
  pedir_orcamento: "Apenas pedir orçamento",
  uma_marca: "1 marca dominante",
  varias_marcas: "Várias marcas",
  depende_nicho: "Depende do nicho",
  sim_dominar: "Sim, vou dominar",
  sim_so_indicar: "Sim, só indico",
  nao_agora: "Não agora",
  sim_gratis: "Sim, grátis",
  sim_cobrando: "Sim, cobrando R$X",
  nao_oferece: "Não ofereço",
  sim_foco: "Sim, foco principal",
  sim_upsell: "Sim, como upsell",
  sim_oferecer: "Sim, oferecer",
  sim_com_condicoes: "Sim, com condições",
  nao_oferecer: "Não oferecer",
  sim: "Sim",
  sim_sempre_gratis: "Sempre grátis",
  sim_dentro_km: "Grátis até X km",
  cobro_visita: "Cobro visita",
  nao_faco: "Não faço",
  sim_top_gama: "Sim, top de gama",
  talvez_futuro: "Talvez no futuro",
  nao_faz_sentido: "Não faz sentido",
  sim_ajuda: "Sim, ajuda cliente",
  ja_vendi_varios: "Já vendi vários",
  instalei_uma_vez: "Instalei 1-2 vezes",
  so_cotei: "Só cotei",
  nao_mexi_ainda: "Não mexi ainda",
  sim_perguntam: "Sim, perguntam direto",
  as_vezes: "Às vezes",
  venda_capex: "Venda CAPEX",
  leasing: "Leasing/aluguel",
  energy_as_service: "Energy-as-a-Service",
  multiplos: "Múltiplos modelos",
  nao_decidi: "Não decidi",
  sim_estudei: "Sim, estudei",
  sim_superficial: "Vi superficialmente",
  sim_central_aura: "BESS é eixo CENTRAL",
  sim_secundario: "BESS upsell premium",
  sim_ofereco: "Sim, ofereço",
  nao_so_novos: "Só sistemas novos",
};

function formatValue(v: unknown): string {
  if (v === null || v === undefined || v === "") return "—";
  if (typeof v === "boolean") return v ? "Sim" : "Não";
  if (typeof v === "number") return v === 0 ? "—" : v.toLocaleString("pt-BR");
  if (Array.isArray(v)) {
    if (v.length === 0) return "—";
    return v.join(" · ");
  }
  if (typeof v === "string") {
    return ENUM_LABELS[v] ?? v;
  }
  return String(v);
}

export default function BriefingViewer({
  slug,
  initial,
}: {
  slug: string;
  initial: BriefingRow | null;
}) {
  const [briefing, setBriefing] = useState<BriefingRow | null>(initial);
  const [pulse, setPulse] = useState(false);
  const pulseTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const sb = browserSupabase();
    const channel = sb
      .channel(`briefing-${slug}`)
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "briefings",
          filter: `slug=eq.${slug}`,
        },
        (payload) => {
          if (payload.new && typeof payload.new === "object") {
            setBriefing(payload.new as BriefingRow);
            setPulse(true);
            if (pulseTimeout.current) clearTimeout(pulseTimeout.current);
            pulseTimeout.current = setTimeout(() => setPulse(false), 1500);
          }
        }
      )
      .subscribe();
    return () => {
      sb.removeChannel(channel);
      if (pulseTimeout.current) clearTimeout(pulseTimeout.current);
    };
  }, [slug]);

  if (!briefing) {
    return (
      <div className="bg-white rounded-2xl p-8 text-center border border-[#0F1B3D]/10">
        <p className="text-base font-bold text-[#0F1B3D] mb-2">
          Briefing &quot;{slug}&quot; ainda não iniciado
        </p>
        <p className="text-sm text-[#0F1B3D]/60">
          Quando o cliente abrir o link e responder a primeira pergunta, ele aparece aqui em tempo
          real.
        </p>
      </div>
    );
  }

  const data = (briefing.data ?? {}) as Record<string, unknown>;
  const progressPct = Math.min(100, Math.round(((briefing.progress + 1) / TOTAL_STEPS) * 100));
  const updated = new Date(briefing.updated_at).toLocaleString("pt-BR");

  return (
    <div className="space-y-6">
      <header className="bg-white rounded-2xl p-6 border border-[#0F1B3D]/10">
        <div className="flex items-start justify-between gap-3 flex-wrap mb-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#F5BC2C]">
              {briefing.slug}
            </p>
            <h1 className="text-2xl font-bold text-[#0F1B3D] mt-1">
              {briefing.name || "Cliente sem nome"}
            </h1>
          </div>
          <div className="flex items-center gap-2">
            {pulse && (
              <span className="text-xs font-bold px-2 py-1 rounded bg-green-100 text-green-700 animate-pulse">
                ⚡ atualizado agora
              </span>
            )}
            <span
              className="text-xs font-bold uppercase tracking-wider px-2 py-1 rounded"
              style={{
                background:
                  briefing.status === "completed"
                    ? "rgba(34,197,94,0.15)"
                    : "rgba(245,188,44,0.20)",
                color: briefing.status === "completed" ? "#16A34A" : "#92400E",
              }}
            >
              {briefing.status === "completed" ? "✅ enviado" : "📝 rascunho"}
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between text-xs text-[#0F1B3D]/60 mb-2">
          <span>
            Bloco {briefing.progress + 1} de {TOTAL_STEPS}
          </span>
          <span>Atualizado {updated}</span>
        </div>
        <div className="h-2 rounded-full bg-[#0F1B3D]/10 overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-700"
            style={{
              width: `${progressPct}%`,
              background: "linear-gradient(90deg, #0F1B3D 0%, #F5BC2C 100%)",
            }}
          />
        </div>
      </header>

      {BLOCOS.map((bloco, idx) => {
        const filled = bloco.campos.filter(([key]) => {
          const v = data[key];
          return v !== undefined && v !== null && v !== "" && v !== 0 && !(Array.isArray(v) && v.length === 0);
        }).length;
        const hasAny = filled > 0;

        return (
          <section
            key={bloco.titulo}
            className="bg-white rounded-2xl p-5 sm:p-6 border border-[#0F1B3D]/10"
            style={{ opacity: hasAny ? 1 : 0.5 }}
          >
            <header className="flex items-center justify-between mb-4">
              <h2 className="text-base font-bold text-[#0F1B3D]">
                {bloco.emoji} Bloco {idx} · {bloco.titulo}
              </h2>
              <span className="text-xs font-mono text-[#0F1B3D]/50">
                {filled}/{bloco.campos.length}
              </span>
            </header>
            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
              {bloco.campos.map(([key, label]) => (
                <div key={key} className="border-b border-[#0F1B3D]/5 pb-2">
                  <dt className="text-[10px] font-bold uppercase tracking-widest text-[#0F1B3D]/50">
                    {label}
                  </dt>
                  <dd className="text-sm text-[#0F1B3D] mt-0.5 break-words">
                    {formatValue(data[key])}
                  </dd>
                </div>
              ))}
            </dl>
          </section>
        );
      })}

      <p className="text-xs text-center text-[#0F1B3D]/50 pt-4">
        Esse painel atualiza em tempo real via Supabase Realtime. Se o cliente clicar &quot;Salvar
        progresso&quot; ou &quot;Salvar e próximo&quot;, você vê aqui em segundos.
      </p>
    </div>
  );
}
