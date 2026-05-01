import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MarcasMarquee from "@/components/MarcasMarquee";
import ComoFunciona from "@/components/ComoFunciona";
import Diferenciais from "@/components/Diferenciais";
import Galeria from "@/components/Galeria";
import Depoimentos from "@/components/Depoimentos";
import Recursos from "@/components/Recursos";
import FAQ from "@/components/FAQ";
import CTAFinal from "@/components/CTAFinal";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <MarcasMarquee />
        <ComoFunciona />
        <Diferenciais />
        <Galeria />
        <Depoimentos />
        <Recursos />
        <FAQ />
        <CTAFinal />
      </main>
      <Footer />
    </>
  );
}
