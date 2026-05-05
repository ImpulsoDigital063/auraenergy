import type { Metadata } from "next";
import PlanoRenatoView from "@/components/PlanoRenatoView";

export const metadata: Metadata = {
  title: "Plano de Negócio & Marketing · Aura Energy",
  description: "Plano de negócio Aura Energy preparado para Renato Edson.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
};

export default function PlanoRenatoPage() {
  return <PlanoRenatoView />;
}
