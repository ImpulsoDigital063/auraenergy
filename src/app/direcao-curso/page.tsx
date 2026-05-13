import type { Metadata } from "next";
import DirecaoCursoView from "@/components/DirecaoCursoView";

export const metadata: Metadata = {
  title: "Direção Info-Produto B2B · Aura Energy",
  description:
    "Mapa estratégico pra Renato Edson lançar info-produto solar próprio em 8-12 semanas, conectado à captação da Aura.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
};

export default function DirecaoCursoPage() {
  return <DirecaoCursoView />;
}
