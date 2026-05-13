import type { Metadata } from "next";
import Image from "next/image";
import {
  IconArrowRight,
  IconChart,
  IconFactory,
  IconHome,
  IconMapPin,
  IconStore,
  IconTractor,
  IconWhatsApp,
} from "@/components/Icons";

export const metadata: Metadata = {
  title: "Aura Energy · Links",
  description: "Energia solar premium em Palmas-TO. Engenheiro responsável. Casa, comércio, indústria, fazenda.",
  openGraph: {
    title: "Aura Energy · Links",
    description: "Energia solar premium em Palmas-TO. Casa, comércio, indústria, fazenda.",
    type: "website",
  },
};

const RENATO_WHATSAPP = "5563992688852";
const linkWhats = `https://wa.me/${RENATO_WHATSAPP}?text=${encodeURIComponent(
  "Olá Renato, vim pelo Instagram da Aura. Quero saber mais sobre solar."
)}`;

type Link = {
  label: string;
  desc: string;
  href: string;
  icon: React.ReactNode;
  cor: string;
  corSoft: string;
  external?: boolean;
};

const LINKS: Link[] = [
  {
    label: "Solar pra sua casa",
    desc: "Conta cai 85-95% · paga em 4-5 anos",
    href: "/casa",
    icon: <IconHome size={22} />,
    cor: "var(--aura-blue)",
    corSoft: "var(--aura-blue-tint)",
  },
  {
    label: "Solar pro seu comércio",
    desc: "Loja, padaria, posto · payback 3-4 anos",
    href: "/comercio",
    icon: <IconStore size={22} />,
    cor: "var(--aura-yellow-deep)",
    corSoft: "var(--aura-yellow-tint)",
  },
  {
    label: "Solar pra sua indústria",
    desc: "TIR 18-25% a.a. · BNDES + ICMS subsidiado",
    href: "/industria",
    icon: <IconFactory size={22} />,
    cor: "var(--aura-blue-deep)",
    corSoft: "rgba(14, 33, 82, 0.10)",
  },
  {
    label: "Solar pra sua propriedade rural",
    desc: "Fazenda, sítio, pivô, granja · Pronaf 0,5% a.m.",
    href: "/rural",
    icon: <IconTractor size={22} />,
    cor: "#15803D",
    corSoft: "rgba(21, 128, 61, 0.10)",
  },
  {
    label: "Calculadora de economia",
    desc: "Simulação completa em 8 perguntas",
    href: "/orcamento",
    icon: <IconChart size={22} />,
    cor: "var(--aura-orange)",
    corSoft: "rgba(255, 139, 61, 0.10)",
  },
  {
    label: "Falar direto no WhatsApp",
    desc: "Renato Edson · resposta em até 1h",
    href: linkWhats,
    icon: <IconWhatsApp size={22} />,
    cor: "#25D366",
    corSoft: "rgba(37, 211, 102, 0.10)",
    external: true,
  },
];

export default function LinksPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-start py-10 px-4 sm:px-6 relative overflow-hidden">
      <div className="solar-mesh" aria-hidden style={{ opacity: 0.6 }} />

      <div className="relative w-full max-w-md mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="relative inline-block mb-4">
            <div
              className="absolute -inset-3 rounded-full blur-2xl opacity-50 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, rgba(245,188,44,0.50) 0%, transparent 70%)",
              }}
              aria-hidden
            />
            <Image
              src="/logo-aura.png"
              alt="Aura Energy"
              width={104}
              height={104}
              className="relative object-contain"
              priority
            />
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[var(--aura-blue)] mb-1">
            Aura Energy
          </h1>
          <p className="text-sm text-[var(--aura-text-muted)] mb-3">
            Energia Solar Premium · Engenheiro responsável
          </p>
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--aura-text-muted)]">
            <IconMapPin size={12} />
            Palmas-TO · atende todo Tocantins
          </div>
        </div>

        {/* Links */}
        <div className="space-y-3">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener" : undefined}
              className="group block premium-card p-4 sm:p-5"
            >
              <div className="flex items-center gap-4">
                <span
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110"
                  style={{ background: link.corSoft, color: link.cor }}
                >
                  {link.icon}
                </span>
                <div className="flex-1 min-w-0">
                  <div
                    className="font-bold text-[15px] leading-tight mb-0.5"
                    style={{ color: link.cor }}
                  >
                    {link.label}
                  </div>
                  <div className="text-xs text-[var(--aura-text-muted)] truncate">
                    {link.desc}
                  </div>
                </div>
                <IconArrowRight
                  size={18}
                  className="text-[var(--aura-text-muted)] group-hover:translate-x-1 transition-transform flex-shrink-0"
                />
              </div>
            </a>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center mt-10 pt-6 border-t border-[var(--aura-border)]">
          <p className="text-[11px] text-[var(--aura-text-faded)] leading-relaxed">
            Aura Energy · Engenheiro responsável Renato Edson · CREA-TO
            <br />
            Homologação Energisa · Garantia 25 anos · Programa Palmas Solar
          </p>
        </div>
      </div>
    </main>
  );
}
