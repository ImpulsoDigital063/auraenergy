import type { Metadata } from "next";
import Header from "@/components/Header";
import BotaoFlutuanteWhatsApp from "@/components/BotaoFlutuanteWhatsApp";
import HeroFazenda from "@/components/segmentos/HeroFazenda";
import MarcasMarquee from "@/components/MarcasMarquee";
import Manifesto from "@/components/Manifesto";
import DoresGanhosFazenda from "@/components/segmentos/DoresGanhosFazenda";
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
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Energia solar pra sua fazenda em Tocantins | Aura Energy",
  description:
    "Solar agro pra pivô, granja, aviário, irrigação em Tocantins. Pronaf 0,5% a.m., Moderagro, FCO Verde até 12 anos. Autoconsumo remoto entre matrizes, bombeamento solar dedicado, sem diesel.",
  keywords: [
    "solar rural Tocantins",
    "solar fazenda Palmas",
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
    title: "Solar pra fazenda em Tocantins | Aura Energy",
    description:
      "Pivô, granja, aviário rodando com sol. Pronaf 0,5% a.m. + autoconsumo remoto. Engenheiro responsável.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function FazendaPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <HeroFazenda />
        <MarcasMarquee />
        <Manifesto />
        <DoresGanhosFazenda />
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
