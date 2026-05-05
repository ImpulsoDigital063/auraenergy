import type { Metadata } from "next";
import Header from "@/components/Header";
import BotaoFlutuanteWhatsApp from "@/components/BotaoFlutuanteWhatsApp";
import HeroComercio from "@/components/segmentos/HeroComercio";
import MarcasMarquee from "@/components/MarcasMarquee";
import Manifesto from "@/components/Manifesto";
import DoresGanhosComercio from "@/components/segmentos/DoresGanhosComercio";
import CasesComercio from "@/components/segmentos/CasesComercio";
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
      <Header />
      <main className="flex-1">
        <HeroComercio />
        <MarcasMarquee />
        <Manifesto />
        <DoresGanhosComercio />
        <CasesComercio />
        <ComoFunciona />
        <Investimento />
        <Diferenciais />
        <JanelaFioB />
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
