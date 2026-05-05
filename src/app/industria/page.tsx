import type { Metadata } from "next";
import Header from "@/components/Header";
import BotaoFlutuanteWhatsApp from "@/components/BotaoFlutuanteWhatsApp";
import HeroIndustria from "@/components/segmentos/HeroIndustria";
import MarcasMarquee from "@/components/MarcasMarquee";
import Manifesto from "@/components/Manifesto";
import DoresGanhosIndustria from "@/components/segmentos/DoresGanhosIndustria";
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
      <Header />
      <main className="flex-1">
        <HeroIndustria />
        <MarcasMarquee />
        <Manifesto />
        <DoresGanhosIndustria />
        <Investimento />
        <ComoFunciona />
        <Diferenciais />
        <JanelaFioB />
        <Credenciais />
        <EquipeAcao />
        <SobreRenato />
        <Compromisso />
        <Galeria />
        <MapaInstalacoes />
        <Depoimentos />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />

      <BotaoFlutuanteWhatsApp />
    </>
  );
}
