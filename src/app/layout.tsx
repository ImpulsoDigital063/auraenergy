import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aura Energy — Energia Solar em Palmas-TO | Reduza sua conta em até 90%",
  description:
    "Energia solar fotovoltaica residencial e comercial em Palmas-TO. Simulação grátis em 1 minuto. Sistema homologado, financiamento próprio, instalação rápida. Renato Edson — Aura Energy.",
  keywords: [
    "energia solar Palmas",
    "placas solares Tocantins",
    "Aura Energy",
    "Renato Edson",
    "fotovoltaico Palmas",
    "Energisa Tocantins solar",
    "redução conta de luz",
  ],
  openGraph: {
    title: "Aura Energy — Reduza sua conta de luz em até 90%",
    description:
      "Sistemas solares residenciais e comerciais em Palmas-TO. Simulação grátis, instalação rápida, retorno em até 4 anos.",
    locale: "pt_BR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
