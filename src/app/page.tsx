import Header from "@/components/Header";
import BotaoFlutuanteWhatsApp from "@/components/BotaoFlutuanteWhatsApp";
import HeroSegmentos from "@/components/HeroSegmentos";
import SchemaOrgAura from "@/components/segmentos/SchemaOrgAura";
import BannerVisual from "@/components/BannerVisual";
import MarcasMarquee from "@/components/MarcasMarquee";
import Manifesto from "@/components/Manifesto";
import ComoFunciona from "@/components/ComoFunciona";
import Diferenciais from "@/components/Diferenciais";
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

// HUB raiz da Aura Energy.
// Função: decisor de público (4 segmentos) + camada institucional comum.
// Conteúdo de nicho profundo vive nas LPs especializadas: /casa, /comercio, /industria, /fazenda.
export default function Home() {
  return (
    <>
      <SchemaOrgAura pagina="home" />
      <Header />
      <main className="flex-1">
        {/* 1. Hero decisor — 4 cards segmentados (Casa / Comércio / Indústria / Rural) */}
        <HeroSegmentos />

        {/* 2. Banner visual cinematográfico */}
        <BannerVisual />

        {/* 3. Marcas Tier 1 — autoridade técnica */}
        <MarcasMarquee />

        {/* 4. Manifesto — identidade Aura na voz do Renato */}
        <Manifesto />

        {/* 5. Como funciona — jornada institucional */}
        <ComoFunciona />

        {/* 6. Diferenciais — 6 marcadores institucionais */}
        <Diferenciais />

        {/* 7. Equipe Aura em ação */}
        <EquipeAcao />

        {/* 8. Conheça o Renato */}
        <SobreRenato />

        {/* 9. Compromisso 25 anos (antes/durante/depois) */}
        <Compromisso />

        {/* 10. Credenciais técnicas */}
        <Credenciais />

        {/* 11. Galeria de instalações */}
        <Galeria />

        {/* 12. Mapa de bairros atendidos */}
        <MapaInstalacoes />

        {/* 13. Depoimentos */}
        <Depoimentos />

        {/* 14. FAQ */}
        <FAQ />

        {/* 15. Footer-CTA gigante full-bleed */}
        <FinalCTA />
      </main>
      <Footer />

      <BotaoFlutuanteWhatsApp />
    </>
  );
}
