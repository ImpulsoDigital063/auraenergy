"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { IconWhatsApp } from "./Icons";

const RENATO_WHATSAPP = "5563992688852";
const linkSimples = `https://wa.me/${RENATO_WHATSAPP}?text=${encodeURIComponent(
  "Olá Renato, vim pela LP da Aura Energy. Quero falar com um especialista."
)}`;

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-white/80 border-b border-[var(--aura-border)] shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a href="#top" className="flex items-center gap-3 group">
            <Image
              src="/logo-aura.png"
              alt="Aura Energy"
              width={48}
              height={48}
              className="w-10 h-10 sm:w-12 sm:h-12 object-contain group-hover:scale-105 transition-transform"
              priority
            />
            <div className="hidden sm:block">
              <div className="font-bold text-[var(--aura-blue)] leading-tight">
                Aura Energy
              </div>
              <div className="text-[10px] uppercase tracking-widest text-[var(--aura-text-muted)] font-semibold">
                Energia Solar Especializada
              </div>
            </div>
          </a>

          {/* Nav desktop */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-[var(--aura-text-soft)]">
            <a href="#simulador" className="hover:text-[var(--aura-blue)] transition-colors">
              Simulador
            </a>
            <a href="#como-funciona" className="hover:text-[var(--aura-blue)] transition-colors">
              Como funciona
            </a>
            <a href="#diferenciais" className="hover:text-[var(--aura-blue)] transition-colors">
              Diferenciais
            </a>
            <a href="#galeria" className="hover:text-[var(--aura-blue)] transition-colors">
              Instalações
            </a>
            <a href="#recursos" className="hover:text-[var(--aura-blue)] transition-colors">
              Recursos
            </a>
            <a href="#faq" className="hover:text-[var(--aura-blue)] transition-colors">
              FAQ
            </a>
          </nav>

          {/* CTA */}
          <a
            href={linkSimples}
            target="_blank"
            rel="noopener"
            className="btn-yellow inline-flex items-center gap-2 px-4 py-2.5 sm:px-5 sm:py-3 rounded-xl text-sm sm:text-base"
          >
            <IconWhatsApp size={18} />
            <span className="hidden sm:inline">Falar com especialista</span>
            <span className="sm:hidden">WhatsApp</span>
          </a>
        </div>
      </div>
    </header>
  );
}
