import type { Metadata } from "next";
import Header from "@/components/Header";
import BotaoFlutuanteWhatsApp from "@/components/BotaoFlutuanteWhatsApp";
import HeroComercio from "@/components/segmentos/HeroComercio";
import SimuladorComercio from "@/components/segmentos/SimuladorComercio";
import MarcasMarquee from "@/components/MarcasMarquee";
import Manifesto from "@/components/Manifesto";
import DoresGanhosComercio from "@/components/segmentos/DoresGanhosComercio";
import CasesComercio from "@/components/segmentos/CasesComercio";
import BlocoPalmasSolar from "@/components/segmentos/BlocoPalmasSolar";
import BlocoBessComercial from "@/components/segmentos/BlocoBessComercial";
import Reveal from "@/components/Reveal";
import { IconStore } from "@/components/Icons";
import {
  FOTOS_COMERCIO,
  PASSOS_COMERCIO,
} from "@/components/segmentos/galerias-fotos";
import { FAQ_COMERCIO } from "@/components/segmentos/faq-perguntas";
import SchemaOrgAura from "@/components/segmentos/SchemaOrgAura";
import ComoFunciona from "@/components/ComoFunciona";
import Diferenciais from "@/components/Diferenciais";
import EquipeAcao from "@/components/EquipeAcao";
import SobreRenato from "@/components/SobreRenato";
import Compromisso from "@/components/Compromisso";
import Investimento from "@/components/Investimento";
import JanelaFioB from "@/components/JanelaFioB";
import Galeria from "@/components/Galeria";
import MapaInstalacoes from "@/components/MapaInstalacoes";
import Depoimentos from "@/components/Depoimentos";
import FAQ from "@/components/FAQ";
import Recursos from "@/components/Recursos";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Energia solar pro seu comércio em Palmas-TO | Aura Energy",
  description:
    "Loja, padaria, supermercado, posto, clínica em Palmas. Solar comercial paga em 3-4 anos, libera 12-25% da margem operacional. Engenheiro responsável, financiamento Solfácil/BV/Santander até 120x.",
  keywords: [
    "energia solar comercial Palmas",
    "solar para comércio Tocantins",
    "solar supermercado Palmas",
    "solar padaria Palmas",
    "solar posto de gasolina",
    "solar clínica Palmas",
    "Aura Energy",
  ],
  openGraph: {
    title: "Solar pro seu comércio em Palmas-TO | Aura Energy",
    description:
      "Payback 3-4 anos. 12-25% da margem liberada. Engenheiro responsável, financiamento até 120x.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function ComercioPage() {
  return (
    <>
      <SchemaOrgAura pagina="comercio" faqs={FAQ_COMERCIO} />
      <Header />
      <main className="flex-1">
        <HeroComercio />

        {/* Simulador comercial dedicado */}
        <section className="relative py-16 sm:py-20 section-soft border-t border-[var(--aura-border)] overflow-hidden">
          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal>
              <div className="text-center mb-10">
                <span
                  className="mb-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold"
                  style={{
                    background: "var(--aura-yellow-tint)",
                    color: "var(--aura-yellow-deep)",
                    border: "1px solid rgba(245, 188, 44, 0.30)",
                  }}
                >
                  <IconStore size={14} />
                  Simule pro seu negócio
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--aura-text)] mb-3">
                  Quanto seu comércio{" "}
                  <span className="text-gradient-aura">pode estar economizando?</span>
                </h2>
                <p className="text-base sm:text-lg text-[var(--aura-text-muted)] max-w-2xl mx-auto">
                  Escolha o perfil do seu negócio + informe sua conta atual.
                  O cálculo considera tarifa B3, perfil de consumo e Lei
                  14.300 já com Fio B 60%.
                </p>
              </div>
            </Reveal>
            <Reveal delay={1}>
              <SimuladorComercio />
            </Reveal>
          </div>
        </section>

        {/* ── INTERESSE/DOR ── */}
        <DoresGanhosComercio />
        <CasesComercio />

        {/* ── DESEJO/SOLUÇÃO ── */}
        <BlocoBessComercial />
        <BlocoPalmasSolar variante="comercial" />
        <ComoFunciona fotos={PASSOS_COMERCIO} />
        <Investimento />
        <MarcasMarquee />
        <JanelaFioB />

        {/* ── AÇÃO/CONFIANÇA ── */}
        <Diferenciais />
        <Manifesto />
        <EquipeAcao />
        <SobreRenato />
        <Compromisso />
        <Galeria
          fotos={FOTOS_COMERCIO}
          badge="Instalações comerciais"
          subtitulo="Comércios em Palmas e região rodando com solar. Cada perfil de negócio com dimensionamento próprio."
        />
        <MapaInstalacoes />
        <Depoimentos />
        <FAQ
          perguntas={FAQ_COMERCIO}
          titulo={
            <>
              Perguntas que{" "}
              <span className="text-gradient-aura">todo dono de comércio faz</span>
              <br />
              antes de fechar.
            </>
          }
          subtitulo="Capex vs opex, IPTU verde, financiamento PJ, SLA de geração — direto ao ponto."
        />

        <Recursos
          slugs={[
            "quanto-custa-energia-solar-palmas-2026",
            "payback-solar-palmas-tocantins",
            "solar-financiado-ou-a-vista-2026",
            "lei-14300-vale-a-pena-solar-2026",
            "icms-convenio-16-15-industria-solar-tocantins",
            "autoconsumo-remoto-energia-solar-tocantins",
          ]}
          titulo={
            <>
              Guias técnicos pra <span className="text-gradient-aura">comércio em Palmas.</span>
            </>
          }
          subtitulo="Payback, financiamento PJ, ICMS Convênio 16/15 e autoconsumo remoto entre filiais. Com sumário, dados e fontes oficiais."
        />

        <FinalCTA />
      </main>
      <Footer />

      <BotaoFlutuanteWhatsApp />
    </>
  );
}
