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
import FAQ, { PERGUNTAS_DEFAULT } from "@/components/FAQ";
import Recursos from "@/components/Recursos";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

// HUB raiz da Aura Energy.
// Função: decisor de público (4 segmentos) + camada institucional comum.
// Conteúdo de nicho profundo vive nas LPs especializadas: /casa, /comercio, /industria, /fazenda.
export default function Home() {
  return (
    <>
      <SchemaOrgAura pagina="home" faqs={PERGUNTAS_DEFAULT} />
      <Header />
      <main className="flex-1">
        {/* ── ATENÇÃO ── */}
        {/* 1. Hero decisor — 4 cards segmentados (Casa / Comércio / Indústria / Rural) */}
        <HeroSegmentos />

        {/* ── INTERESSE ── */}
        {/* 2. Banner visual cinematográfico */}
        <BannerVisual />

        {/* 3. Como funciona — jornada institucional · plano em 4 etapas */}
        <ComoFunciona />

        {/* 4. Marcas Tier 1 — prova técnica antes dos motivos */}
        <MarcasMarquee />

        {/* ── AÇÃO/CONFIANÇA ── */}
        {/* 5. Diferenciais — 8 motivos pra escolher Aura */}
        <Diferenciais />

        {/* 6. Manifesto — voz do Renato como guia */}
        <Manifesto />

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

        {/* 15. Recursos · top 6 artigos mistos (1 por segmento + 2 high-leverage) */}
        <Recursos
          slugs={[
            "quanto-custa-energia-solar-palmas-2026",
            "lei-14300-vale-a-pena-solar-2026",
            "pronaf-bioeconomia-solar-rural-tocantins",
            "icms-convenio-16-15-industria-solar-tocantins",
            "bess-bateria-solar-pivo-central-tocantins-2026",
            "autoconsumo-remoto-energia-solar-tocantins",
          ]}
        />

        {/* 16. Footer-CTA gigante full-bleed */}
        <FinalCTA />
      </main>
      <Footer />

      <BotaoFlutuanteWhatsApp />
    </>
  );
}
