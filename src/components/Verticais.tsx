"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import {
  IconBolt,
  IconCheck,
  IconHome,
  IconLeaf,
  IconShield,
  IconSparkles,
  IconWhatsApp,
} from "./Icons";

const RENATO_WHATSAPP = "5563992706284";

type Vertical = {
  key: string;
  label: string;
  icon: React.ReactNode;
  hero: string;
  subhero: string;
  bullets: { titulo: string; desc: string }[];
  ctaTexto: string;
  whatsMsg: string;
  accentColor: string;
};

const VERTICAIS: Vertical[] = [
  {
    key: "residencial",
    label: "Residencial",
    icon: <IconHome size={22} />,
    hero: "Sua casa pode pagar a conta dela mesma.",
    subhero:
      "Sistema sob medida pro telhado da sua casa. Em até 30 dias gerando, com app no celular pra acompanhar a economia em tempo real.",
    bullets: [
      {
        titulo: "Conta cai 80-90%",
        desc: "Em Palmas, com 5,9 horas de sol pleno, residência média economiza R$ 4-7 mil por ano.",
      },
      {
        titulo: "Valoriza o imóvel em 5-10%",
        desc: "Pesquisas do CRECI mostram que casas com solar vendem mais rápido e por mais.",
      },
      {
        titulo: "Financiamento que cabe no bolso",
        desc: "BV Financeira preferida + 5 bancos parceiros · até 120 meses. Em muitos casos a parcela fica menor que a conta atual.",
      },
    ],
    ctaTexto: "Quero solar na minha casa",
    whatsMsg: "Olá Renato, quero solar pra minha residência em Palmas.",
    accentColor: "var(--aura-blue)",
  },
  {
    key: "comercial",
    label: "Comercial",
    icon: <IconBolt size={22} />,
    hero: "Lojas, clínicas e escritórios pagando R$ 0 de luz.",
    subhero:
      "Energia elétrica come 12-25% da sua margem operacional. Solar comercial paga em 3-4 anos e te devolve 20+ anos de operação sem essa fatura.",
    bullets: [
      {
        titulo: "Payback em 3-4 anos",
        desc: "Comércio em Palmas com conta de R$ 1.500/mês recupera o investimento mais rápido que residencial.",
      },
      {
        titulo: "Capex que vira opex",
        desc: "Financia em 120 meses. Parcela entra como custo operacional, libera caixa pra giro.",
      },
      {
        titulo: "Marketing verde de verdade",
        desc: "Cliente final está comprando de marcas sustentáveis. Selo de empresa solar é diferencial real.",
      },
    ],
    ctaTexto: "Orçamento pro meu negócio",
    whatsMsg: "Olá Renato, quero solar comercial pra minha loja/escritório em Palmas.",
    accentColor: "var(--aura-yellow-deep)",
  },
  {
    key: "rural",
    label: "Rural",
    icon: <IconLeaf size={22} />,
    hero: "Bombeamento, irrigação e energia onde a Energisa não chega.",
    subhero:
      "Sítios, fazendas e propriedades rurais no Tocantins com solução solar dedicada. Bomba de poço, sistema de irrigação e geração off-grid pra quem não quer depender da rede.",
    bullets: [
      {
        titulo: "Bombeamento solar dedicado",
        desc: "Bomba submersa ou centrífuga ligada direto nos painéis. Sem inversor, sem gerador a diesel.",
      },
      {
        titulo: "Off-grid com baterias",
        desc: "Independência total pra quem está longe da rede. Sistema híbrido com lítio (BYD/Pylontech).",
      },
      {
        titulo: "Linhas de crédito rural",
        desc: "FCO Verde com taxa ~0,7% a.m. e prazo até 12 anos. Renato te ajuda no enquadramento.",
      },
    ],
    ctaTexto: "Quero solar rural",
    whatsMsg: "Olá Renato, tenho propriedade rural no Tocantins e quero solar.",
    accentColor: "#15803D",
  },
  {
    key: "bateria",
    label: "Sistema com bateria",
    icon: <IconShield size={22} />,
    hero: "Independência total da Energisa, mesmo no apagão.",
    subhero:
      "Sistema híbrido com bateria (BESS) é o futuro. A Lei 15.269/2025 incentiva. Você gera de dia, armazena, e usa de noite ou no apagão. Casa funcionando 100%.",
    bullets: [
      {
        titulo: "Energia mesmo na queda",
        desc: "Apagou a Energisa? Sua casa continua. Geladeira, internet, TV, ar condicionado — tudo de pé.",
      },
      {
        titulo: "Use à noite o que gerou de dia",
        desc: "Sem precisar 'devolver' pra rede e pagar Fio B. Bateria de lítio com 6.000 ciclos (~15 anos).",
      },
      {
        titulo: "Pronto pra carro elétrico",
        desc: "Sistema híbrido aceita Wallbox de carregamento. Quando trocar de carro, já tá preparado.",
      },
    ],
    ctaTexto: "Quero sistema com bateria",
    whatsMsg: "Olá Renato, quero sistema solar híbrido com bateria.",
    accentColor: "#7E22CE",
  },
];

export default function Verticais() {
  const [ativa, setAtiva] = useState<string>("residencial");
  const vertical = VERTICAIS.find((v) => v.key === ativa)!;

  const linkWhats = `https://wa.me/${RENATO_WHATSAPP}?text=${encodeURIComponent(
    vertical.whatsMsg
  )}`;

  return (
    <section
      id="para-quem"
      className="relative py-20 sm:py-28 overflow-hidden"
    >
      <div className="bg-grid-soft absolute inset-0 opacity-40" aria-hidden />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-12">
            <span className="badge-yellow mb-4 inline-flex">
              <IconSparkles size={14} />
              Energia elétrica especializada
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[var(--aura-text)] mb-4">
              Pra quem é o solar Aura?
            </h2>
            <p className="text-lg text-[var(--aura-text-muted)] max-w-2xl mx-auto">
              Cada perfil tem dor diferente. Veja qual é o seu.
            </p>
          </div>
        </Reveal>

        {/* Tabs */}
        <Reveal delay={1}>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
            {VERTICAIS.map((v) => (
              <button
                key={v.key}
                type="button"
                onClick={() => setAtiva(v.key)}
                className={`inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-2xl text-sm sm:text-[15px] font-semibold transition-all duration-300 ${
                  ativa === v.key
                    ? "bg-[var(--aura-blue)] text-white shadow-lg shadow-[var(--aura-blue)]/25 scale-105"
                    : "bg-white text-[var(--aura-text-soft)] border border-[var(--aura-border)] hover:border-[var(--aura-yellow)] hover:text-[var(--aura-blue)]"
                }`}
              >
                {v.icon}
                {v.label}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Conteúdo da vertical ativa */}
        <Reveal delay={2}>
          <div className="premium-card p-6 sm:p-10 lg:p-12 transition-all duration-500">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              {/* Coluna esquerda */}
              <div>
                <h3
                  className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight mb-4"
                  style={{ color: vertical.accentColor }}
                >
                  {vertical.hero}
                </h3>
                <p className="text-base sm:text-lg text-[var(--aura-text-soft)] leading-relaxed mb-6">
                  {vertical.subhero}
                </p>

                <a
                  href={linkWhats}
                  target="_blank"
                  rel="noopener"
                  className="btn-yellow inline-flex items-center gap-2.5 px-5 py-3.5 rounded-xl text-base"
                >
                  <IconWhatsApp size={18} />
                  {vertical.ctaTexto}
                </a>
              </div>

              {/* Coluna direita — bullets */}
              <div className="space-y-4">
                {vertical.bullets.map((b) => (
                  <div
                    key={b.titulo}
                    className="flex gap-4 p-4 sm:p-5 rounded-2xl bg-[var(--aura-bg-soft)] border border-[var(--aura-border)]"
                  >
                    <span
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{
                        background: `${vertical.accentColor}15`,
                        color: vertical.accentColor,
                      }}
                    >
                      <IconCheck size={20} strokeWidth={2.5} />
                    </span>
                    <div>
                      <h4 className="font-bold text-[var(--aura-text)] mb-1">
                        {b.titulo}
                      </h4>
                      <p className="text-sm text-[var(--aura-text-muted)] leading-relaxed">
                        {b.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
