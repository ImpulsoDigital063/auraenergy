import type { Metadata } from "next";
import SelecaoGaleria from "./SelecaoGaleria";

// Página interna de curadoria — Renato escolhe as fotos provisórias da galeria.
// noindex: não é pra aparecer no Google nem ser tratada como página do site.
export const metadata: Metadata = {
  title: "Aura Energy · Escolha as fotos da galeria",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <SelecaoGaleria />;
}
