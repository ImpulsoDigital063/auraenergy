import Header from "@/components/Header";
import BotaoFlutuanteWhatsApp from "@/components/BotaoFlutuanteWhatsApp";
import Hero from "@/components/Hero";
import BannerVisual from "@/components/BannerVisual";
import MarcasMarquee from "@/components/MarcasMarquee";
import Manifesto from "@/components/Manifesto";
import Verticais from "@/components/Verticais";
import ComoFunciona from "@/components/ComoFunciona";
import CatalogoKits from "@/components/CatalogoKits";
import Diferenciais from "@/components/Diferenciais";
import EquipeAcao from "@/components/EquipeAcao";
import SobreRenato from "@/components/SobreRenato";
import Compromisso from "@/components/Compromisso";
import Credenciais from "@/components/Credenciais";
import Investimento from "@/components/Investimento";
import JanelaFioB from "@/components/JanelaFioB";
import Galeria from "@/components/Galeria";
import MapaInstalacoes from "@/components/MapaInstalacoes";
import Depoimentos from "@/components/Depoimentos";
import Recursos from "@/components/Recursos";
import FAQ from "@/components/FAQ";
import CTAFinal from "@/components/CTAFinal";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* 1. Hook + simulador */}
        <Hero />

        {/* 2. Banner cinematográfico */}
        <BannerVisual />

        {/* 3. Marcas Tier 1 */}
        <MarcasMarquee />

        {/* 4. MANIFESTO da marca — fixa identidade Aura logo cedo */}
        <Manifesto />

        {/* 5. Pra quem é (segmenta persona) */}
        <Verticais />

        {/* 6. Como funciona — fotos por passo */}
        <ComoFunciona />

        {/* 7. Catálogo de kits */}
        <CatalogoKits />

        {/* 8. Diferenciais */}
        <Diferenciais />

        {/* 9. Equipe Aura em ação */}
        <EquipeAcao />

        {/* 10. Conheça o Renato */}
        <SobreRenato />

        {/* 11. Compromisso 25 anos (antes/durante/depois) */}
        <Compromisso />

        {/* 12. Credenciais técnicas */}
        <Credenciais />

        {/* 13. Solar como investimento */}
        <Investimento />

        {/* 14. Janela do Fio B */}
        <JanelaFioB />

        {/* 15. Galeria de instalações */}
        <Galeria />

        {/* 16. Mapa de bairros atendidos */}
        <MapaInstalacoes />

        {/* 17. Depoimentos */}
        <Depoimentos />

        {/* 18. Recursos / blog educativo */}
        <Recursos />

        {/* 19. FAQ */}
        <FAQ />

        {/* 20. CTA final formulário */}
        <CTAFinal />

        {/* 21. ⚡ Footer-CTA gigante full-bleed (padrão Tesla/Whoop/Allurium) */}
        <FinalCTA />
      </main>
      <Footer />

      {/* Botão flutuante WhatsApp */}
      <BotaoFlutuanteWhatsApp />
    </>
  );
}
