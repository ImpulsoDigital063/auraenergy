import type { Metadata } from "next";
import Header from "@/components/Header";
import BotaoFlutuanteWhatsApp from "@/components/BotaoFlutuanteWhatsApp";
import HeroIndustria from "@/components/segmentos/HeroIndustria";
import SimuladorIndustria from "@/components/segmentos/SimuladorIndustria";
import MarcasMarquee from "@/components/MarcasMarquee";
import Manifesto from "@/components/Manifesto";
import DoresGanhosIndustria from "@/components/segmentos/DoresGanhosIndustria";
import BlocoBessIndustrial from "@/components/segmentos/BlocoBessIndustrial";
import Reveal from "@/components/Reveal";
import { IconFactory } from "@/components/Icons";
import {
  FOTOS_INDUSTRIA,
  PASSOS_INDUSTRIA,
} from "@/components/segmentos/galerias-fotos";
import { FAQ_INDUSTRIA } from "@/components/segmentos/faq-perguntas";
import SchemaOrgAura from "@/components/segmentos/SchemaOrgAura";
import ComoFunciona from "@/components/ComoFunciona";
import Investimento from "@/components/Investimento";
import Diferenciais from "@/components/Diferenciais";
import JanelaFioB from "@/components/JanelaFioB";
import EquipeAcao from "@/components/EquipeAcao";
import SobreRenato from "@/components/SobreRenato";
import Compromisso from "@/components/Compromisso";
import Credenciais from "@/components/Credenciais";
import Galeria from "@/components/Galeria";
import MapaInstalacoes from "@/components/MapaInstalacoes";
import Depoimentos from "@/components/Depoimentos";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Energia solar industrial em Tocantins | Aura Energy",
  description:
    "Solar industrial pra plantas em Tocantins. TIR 18-25% a.a., payback 4-6 anos, 80% do custo de energia eliminado. BNDES Finame Solar, ICMS subsidiado pelo Convênio 16/15. ART, projeto executivo, monitoramento.",
  keywords: [
    "solar industrial Tocantins",
    "energia solar fábrica Palmas",
    "BNDES Finame Solar",
    "ICMS solar Tocantins",
    "TIR solar industrial",
    "solar frigorífico",
    "solar cerâmica Tocantins",
    "Aura Energy",
    "Renato Edson engenheiro",
  ],
  openGraph: {
    title: "Solar industrial em Tocantins | Aura Energy",
    description:
      "TIR 18-25% a.a. · payback 4-6 anos · BNDES Finame Solar · ICMS subsidiado TO. Engenheiro responsável.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function IndustriaPage() {
  return (
    <>
      <SchemaOrgAura pagina="industria" faqs={FAQ_INDUSTRIA} />
      <Header />
      <main className="flex-1">
        <HeroIndustria />

        {/* Simulador industrial dedicado · análise executiva */}
        <section
          className="relative py-16 sm:py-20 overflow-hidden"
          style={{
            background:
              "linear-gradient(180deg, var(--aura-bg-soft) 0%, var(--aura-bg) 100%)",
          }}
        >
          <div className="bg-grid-soft absolute inset-0 opacity-30" aria-hidden />
          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal>
              <div className="text-center mb-10">
                <span
                  className="mb-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold"
                  style={{
                    background: "rgba(14, 33, 82, 0.06)",
                    color: "var(--aura-blue-deep)",
                    border: "1px solid rgba(14, 33, 82, 0.18)",
                  }}
                >
                  <IconFactory size={14} />
                  Análise pra decisor industrial
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--aura-text)] mb-3">
                  Quanto sua planta{" "}
                  <span style={{ color: "var(--aura-blue-deep)" }}>
                    deixa na mesa todo mês?
                  </span>
                </h2>
                <p className="text-base sm:text-lg text-[var(--aura-text-muted)] max-w-2xl mx-auto">
                  Análise preliminar com payback, TIR projetada e comparativo
                  contra CDB. Tarifa A4 média tensão · Lei 14.300 com Fio B
                  60% · 25 anos de operação.
                </p>
              </div>
            </Reveal>
            <Reveal delay={1}>
              <SimuladorIndustria />
            </Reveal>
          </div>
        </section>

        {/* ── INTERESSE/DOR ── */}
        <DoresGanhosIndustria />

        {/* ── DESEJO/SOLUÇÃO ── */}
        <BlocoBessIndustrial />
        <ComoFunciona fotos={PASSOS_INDUSTRIA} />
        <Investimento />
        <MarcasMarquee />
        <JanelaFioB />

        {/* ── AÇÃO/CONFIANÇA ── */}
        <Diferenciais />
        <Credenciais />
        <Manifesto />
        <EquipeAcao />
        <SobreRenato />
        <Compromisso />
        <Galeria
          fotos={FOTOS_INDUSTRIA}
          badge="Instalações industriais"
          subtitulo="Plantas industriais e galpões em escala. Sistemas de 50 a 500 kWp com ART, projeto executivo e monitoramento."
        />
        <MapaInstalacoes />
        <Depoimentos />
        <FAQ
          perguntas={FAQ_INDUSTRIA}
          titulo={
            <>
              Perguntas do{" "}
              <span className="text-gradient-aura">decisor industrial</span>
              <br />
              sobre solar em Tocantins.
            </>
          }
          subtitulo="TIR, BNDES Finame, ICMS Convênio 16/15, ART, SLA de geração — tudo respondido sem rodeio."
        />
        <FinalCTA />
      </main>
      <Footer />

      <BotaoFlutuanteWhatsApp />
    </>
  );
}
