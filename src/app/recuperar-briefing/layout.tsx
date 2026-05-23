import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Recuperar respostas · Aura Energy",
  description: "Recupera o rascunho do briefing salvo no seu navegador.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export default function RecuperarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
