import type { Metadata } from "next";
import Header from "@/components/Header";
import BotaoFlutuanteWhatsApp from "@/components/BotaoFlutuanteWhatsApp";
import HeroFazenda from "@/components/segmentos/HeroFazenda";
import SimuladorFazenda from "@/components/segmentos/SimuladorFazenda";
import MarcasMarquee from "@/components/MarcasMarquee";
import Manifesto from "@/components/Manifesto";
import DoresGanhosFazenda from "@/components/segmentos/DoresGanhosFazenda";
import CasesRural from "@/components/segmentos/CasesRural";
import BlocoPronaf from "@/components/segmentos/BlocoPronaf";
import BlocoBessRural from "@/components/segmentos/BlocoBessRural";
import Reveal from "@/components/Reveal";
import { IconTractor } from "@/components/Icons";
import {
  FOTOS_RURAL,
  PASSOS_RURAL,
} from "@/components/segmentos/galerias-fotos";
import { FAQ_RURAL } from "@/components/segmentos/faq-perguntas";
import SchemaOrgAura from "@/components/segmentos/SchemaOrgAura";
import ComoFunciona from "@/components/ComoFunciona";
import Investimento from "@/components/Investimento";
import Diferenciais from "@/components/Diferenciais";
import JanelaFioB from "@/components/JanelaFioB";
import EquipeAcao from "@/components/EquipeAcao";
import SobreRenato from "@/components/SobreRenato";
import Compromisso from "@/components/Compromisso";
import Galeria from "@/components/Galeria";
import MapaInstalacoes from "@/components/MapaInstalacoes";
import Depoimentos from "@/components/Depoimentos";
import FAQ from "@/components/FAQ";
import Recursos from "@/components/Recursos";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Energia solar rural em Tocantins | Aura Energy",
  description:
    "Solar pra produtor rural em Tocantins: fazenda, sítio, chácara, pivô, granja, aviário, irrigação. Pronaf 0,5% a.m., Moderagro, FCO Verde até 12 anos. Autoconsumo remoto, bombeamento solar dedicado.",
  keywords: [
    "solar rural Tocantins",
    "solar produtor rural Palmas",
    "solar sítio chácara Tocantins",
    "Pronaf solar agro",
    "Moderagro solar",
    "FCO Verde solar",
    "solar pivô central",
    "solar granja",
    "solar aviário",
    "bombeamento solar",
    "Aura Energy",
  ],
  openGraph: {
    title: "Solar rural em Tocantins | Aura Energy",
    description:
      "Fazenda, sítio, granja, pivô rodando com sol. Pronaf 0,5% a.m. + autoconsumo remoto. Engenheiro responsável.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RuralPage() {
  return (
    <>
      <SchemaOrgAura pagina="rural" faqs={FAQ_RURAL} />
      <Header />
      <main className="flex-1">
        <HeroFazenda />

        {/* Simulador rural dedicado · Pronaf integrado */}
        <section className="relative py-16 sm:py-20 section-soft border-t border-[var(--aura-border)] overflow-hidden">
          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal>
              <div className="text-center mb-10">
                <span
                  className="mb-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold"
                  style={{
                    background: "rgba(21, 128, 61, 0.08)",
                    color: "#15803D",
                    border: "1px solid rgba(21, 128, 61, 0.30)",
                  }}
                >
                  <IconTractor size={14} />
                  Simule pra sua propriedade
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--aura-text)] mb-3">
                  Quanto sua propriedade rural{" "}
                  <span style={{ color: "#15803D" }}>
                    deixa de gastar com Pronaf?
                  </span>
                </h2>
                <p className="text-base sm:text-lg text-[var(--aura-text-muted)] max-w-2xl mx-auto">
                  Tarifa B2 Rural · economia + parcela Pronaf 0,5% a.m. ·
                  cálculo de caixa líquido mensal já incluso. Telhado de galpão
                  ou estrutura em solo.
                </p>
              </div>
            </Reveal>
            <Reveal delay={1}>
              <SimuladorFazenda />
            </Reveal>
          </div>
        </section>

        {/* ── INTERESSE/DOR ── */}
        <DoresGanhosFazenda />
        <CasesRural />

        {/* ── DESEJO/SOLUÇÃO ── */}
        <BlocoPronaf />
        <BlocoBessRural />
        <ComoFunciona fotos={PASSOS_RURAL} />
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
          fotos={FOTOS_RURAL}
          badge="Instalações rurais"
          subtitulo="Fazendas, sítios e granjas em Tocantins economizando com solar. Pivô, granja e propriedade mista — sistemas adaptados ao agronegócio."
        />
        <MapaInstalacoes />
        <Depoimentos />
        <FAQ
          perguntas={FAQ_RURAL}
          titulo={
            <>
              Perguntas que{" "}
              <span className="text-gradient-aura">todo produtor rural faz</span>
              <br />
              antes de financiar solar.
            </>
          }
          subtitulo="Pronaf, Moderagro, FCO Verde, autoconsumo remoto, bombeamento — direto do engenheiro responsável."
        />

        <Recursos
          slugs={[
            "pronaf-bioeconomia-solar-rural-tocantins",
            "bess-bateria-solar-pivo-central-tocantins-2026",
            "autoconsumo-remoto-energia-solar-tocantins",
            "lei-15269-2025-armazenamento-energia-distribuida",
            "lei-14300-vale-a-pena-solar-2026",
            "payback-solar-palmas-tocantins",
          ]}
          titulo={
            <>
              Guias técnicos pra <span className="text-gradient-aura">propriedade rural em Tocantins.</span>
            </>
          }
          subtitulo="Pronaf Bioeconomia 0,5% a.m., BESS pra pivô central, autoconsumo remoto entre matrizes da fazenda. Com fontes oficiais (MAPA, ANEEL, BCB)."
        />

        <FinalCTA />
      </main>
      <Footer />

      <BotaoFlutuanteWhatsApp />
    </>
  );
}
