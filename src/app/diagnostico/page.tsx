import type { Metadata } from "next";
import DiagnosticoForm from "@/components/segmentos/DiagnosticoForm";

export const metadata: Metadata = {
  title: "Diagnóstico pré-reunião · Aura Energy",
  description:
    "Renato, responde aqui antes da nossa reunião pra acelerar a conversa. 10-15 min.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
};

export default function DiagnosticoPage() {
  return <DiagnosticoForm />;
}
