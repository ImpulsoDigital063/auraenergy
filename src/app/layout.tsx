import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://auraenergy.vercel.app";
const GA4_ID = process.env.NEXT_PUBLIC_GA4_ID;
const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;
const GOOGLE_VERIFICATION = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
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
    url: SITE_URL,
    siteName: "Aura Energy",
    // OG image gerada dinamicamente via app/opengraph-image.tsx (1200x630)
  },
  twitter: {
    card: "summary_large_image",
    title: "Aura Energy — Energia solar em Palmas-TO",
    description:
      "Casa · Comércio · Indústria · Rural. CREA-TO, garantia 25 anos, financiamento Solfácil/BV/Pronaf.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // Verification do Google Search Console — pega no painel apos cadastrar
  // a propriedade e seta NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION no Vercel.
  verification: GOOGLE_VERIFICATION
    ? { google: GOOGLE_VERIFICATION }
    : undefined,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen flex flex-col">
        {children}

        {/* Google Analytics 4 — so renderiza se NEXT_PUBLIC_GA4_ID estiver no env */}
        {GA4_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA4_ID}', { page_path: window.location.pathname });
              `}
            </Script>
          </>
        )}

        {/* Meta Pixel — so renderiza se NEXT_PUBLIC_META_PIXEL_ID estiver no env */}
        {META_PIXEL_ID && (
          <Script id="meta-pixel" strategy="afterInteractive">
            {`
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${META_PIXEL_ID}');
              fbq('track', 'PageView');
            `}
          </Script>
        )}
      </body>
    </html>
  );
}
