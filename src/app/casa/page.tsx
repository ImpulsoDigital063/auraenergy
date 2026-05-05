import type { Metadata } from "next";
import Header from "@/components/Header";
import BotaoFlutuanteWhatsApp from "@/components/BotaoFlutuanteWhatsApp";
import HeroCasa from "@/components/segmentos/HeroCasa";
import MarcasMarquee from "@/components/MarcasMarquee";
import Manifesto from "@/components/Manifesto";
import DoresGanhosCasa from "@/components/segmentos/DoresGanhosCasa";
import CasesCasa from "@/components/segmentos/CasesCasa";
import ComoFunciona from "@/components/ComoFunciona";
import CatalogoKits from "@/components/CatalogoKits";
import Diferenciais from "@/components/Diferenciais";
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
  title: "Energia solar pra sua casa em Palmas-TO | Aura Energy",
  description:
    "Sua conta de luz cai 85-95% e o sistema paga em 4-5 anos. Engenheiro responsável, instalação rápida, financiamento Solfácil até 120x. Programa Palmas Solar (60% IPTU). Aura Energy.",
  keywords: [
    "energia solar residencial Palmas",
    "solar casa Tocantins",
    "Programa Palmas Solar",
    "financiamento Solfácil",
    "Aura Energy",
    "Renato Edson",
    "redução conta de luz residencial",
  ],
  openGraph: {
    title: "Energia solar pra sua casa em Palmas-TO | Aura Energy",
    description:
      "Sua conta cai 85-95%. Sistema paga em 4-5 anos. Engenheiro responsável pelo seu projeto.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function CasaPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* 1. Hero residencial específico */}
        <HeroCasa />

        {/* 2. Marcas Tier 1 — autoridade técnica */}
        <MarcasMarquee />

        {/* 3. Manifesto */}
        <Manifesto />

        {/* 4. Dores e ganhos residenciais */}
        <DoresGanhosCasa />

        {/* 5. Cases residenciais reais — Palmas, Dianópolis, Colinas */}
        <CasesCasa />

        {/* 6. Como funciona */}
        <ComoFunciona />

        {/* 6. Catálogo de kits residenciais */}
        <CatalogoKits />

        {/* 7. Diferenciais */}
        <Diferenciais />

        {/* 8. Equipe Aura em ação */}
        <EquipeAcao />

        {/* 9. Conheça o Renato */}
        <SobreRenato />

        {/* 10. Compromisso 25 anos */}
        <Compromisso />

        {/* 11. Galeria de instalações */}
        <Galeria />

        {/* 12. Mapa de bairros atendidos */}
        <MapaInstalacoes />

        {/* 13. Depoimentos */}
        <Depoimentos />

        {/* 14. FAQ */}
        <FAQ />

        {/* 15. Footer-CTA full-bleed */}
        <FinalCTA />
      </main>
      <Footer />

      <BotaoFlutuanteWhatsApp />
    </>
  );
}
