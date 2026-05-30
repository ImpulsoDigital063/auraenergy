import type { Metadata } from "next";
import Header from "@/components/Header";
import BotaoFlutuanteWhatsApp from "@/components/BotaoFlutuanteWhatsApp";
import HeroCasa from "@/components/segmentos/HeroCasa";
import MarcasMarquee from "@/components/MarcasMarquee";
import Manifesto from "@/components/Manifesto";
import DoresGanhosCasa from "@/components/segmentos/DoresGanhosCasa";
import CasesCasa from "@/components/segmentos/CasesCasa";
import ComoFunciona from "@/components/ComoFunciona";
import { FOTOS_CASA, PASSOS_CASA } from "@/components/segmentos/galerias-fotos";
import { FAQ_CASA } from "@/components/segmentos/faq-perguntas";
import SchemaOrgAura from "@/components/segmentos/SchemaOrgAura";
import CatalogoKits from "@/components/CatalogoKits";
import BlocoPalmasSolar from "@/components/segmentos/BlocoPalmasSolar";
import BlocoBessCasa from "@/components/segmentos/BlocoBessCasa";
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
  title: "Energia solar pra sua casa em Palmas-TO | Aura Energy",
  description:
    "Sua conta de luz pode cair significativamente · sistema com vida útil de 25 anos · garantia 12 anos painel. Engenheiro responsável (CREA-TO), instalação rápida, financiamento BV Financeira + 5 bancos parceiros até 120x. Programa Palmas Solar (40% desconto IPTU · 5 anos · LC 327/2015). Aura Energy.",
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
      <SchemaOrgAura pagina="casa" faqs={FAQ_CASA} />
      <Header />
      <main className="flex-1">
        {/* ── ATENÇÃO ── */}
        {/* 1. Hero residencial específico */}
        <HeroCasa />

        {/* ── INTERESSE/DOR ── */}
        {/* 2. Dores e ganhos residenciais — cliente reconhece o problema */}
        <DoresGanhosCasa />

        {/* 3. Cases reais — prova social inicial */}
        <CasesCasa />

        {/* ── DESEJO/SOLUÇÃO ── */}
        {/* 4. BESS residencial — eixo central Aura · briefing V3.1 Renato */}
        <BlocoBessCasa />

        {/* 5. Programa Palmas Solar — benefício específico */}
        <BlocoPalmasSolar variante="residencial" />

        {/* 6. Como funciona — plano em 4 etapas */}
        <ComoFunciona fotos={PASSOS_CASA} />

        {/* 7. Catálogo de kits residenciais — preço */}
        <CatalogoKits />

        {/* 8. Marcas Tier 1 — prova técnica perto do preço */}
        <MarcasMarquee />

        {/* 9. Janela Fio B — urgência regulatória · cada ano sobe Fio B */}
        <JanelaFioB />

        {/* ── AÇÃO/CONFIANÇA ── */}
        {/* 10. Diferenciais — 8 motivos pra escolher Aura */}
        <Diferenciais />

        {/* 10. Manifesto — voz do Renato como guia */}
        <Manifesto />

        {/* 11. Equipe Aura em ação */}
        <EquipeAcao />

        {/* 12. Conheça o Renato */}
        <SobreRenato />

        {/* 13. Compromisso 25 anos */}
        <Compromisso />

        {/* 14. Galeria de instalações residenciais */}
        <Galeria
          fotos={FOTOS_CASA}
          badge="Instalações residenciais"
          subtitulo="Casas em Palmas e interior já economizando. Cada projeto começa com visita técnica e termina com cliente economizando."
        />

        {/* 15. Mapa de bairros atendidos */}
        <MapaInstalacoes />

        {/* 16. Depoimentos */}
        <Depoimentos />

        {/* 17. FAQ residencial */}
        <FAQ
          perguntas={FAQ_CASA}
          titulo={
            <>
              Perguntas que <span className="text-gradient-aura">todo mundo faz</span>
              <br />
              antes de fechar.
            </>
          }
          subtitulo="Programa Palmas Solar, Lei 14.300, financiamento BV Financeira + 5 bancos — sem enrolação."
        />

        {/* 18. Recursos · artigos relevantes pra residência */}
        <Recursos
          slugs={[
            "quanto-custa-energia-solar-palmas-2026",
            "lei-14300-vale-a-pena-solar-2026",
            "payback-solar-palmas-tocantins",
            "painel-550w-vs-600w-residencial",
            "solar-financiado-ou-a-vista-2026",
            "autoconsumo-remoto-energia-solar-tocantins",
          ]}
          titulo={
            <>
              Guias técnicos pra <span className="text-gradient-aura">casa em Palmas.</span>
            </>
          }
          subtitulo="Preços cravados, Lei 14.300, payback real e financiamento. Com sumário, dados quantitativos e fontes oficiais."
        />

        {/* 19. Footer-CTA full-bleed */}
        <FinalCTA />
      </main>
      <Footer />

      <BotaoFlutuanteWhatsApp />
    </>
  );
}
