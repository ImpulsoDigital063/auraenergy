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
          ? "backdrop-blur-xl bg-white/85 border-b border-[var(--aura-border)] shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex items-center justify-between transition-all duration-300 ${
            scrolled ? "h-14 sm:h-18 lg:h-20" : "h-16 sm:h-20 lg:h-24"
          }`}
        >
          {/* Logo MARCANTE */}
          <a href="#top" className="flex items-center gap-3 sm:gap-4 group">
            <div className="relative">
              {/* Glow sutil atrás da logo no estado inicial */}
              {!scrolled && (
                <div
                  className="absolute -inset-2 rounded-full blur-xl opacity-50 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(245,188,44,0.40) 0%, transparent 70%)",
                  }}
                  aria-hidden
                />
              )}
              <Image
                src="/logo-aura.png"
                alt="Aura Energy"
                width={84}
                height={84}
                className={`relative object-contain group-hover:scale-105 transition-all duration-300 ${
                  scrolled ? "w-10 h-10 sm:w-14 sm:h-14 lg:w-16 lg:h-16" : "w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20"
                }`}
                priority
              />
            </div>

            <div className="leading-tight">
              <div
                className={`font-extrabold tracking-tight transition-all duration-300 ${
                  scrolled ? "text-lg sm:text-xl" : "text-xl sm:text-2xl"
                } text-[var(--aura-blue)]`}
              >
                Aura Energy
              </div>
              <div className="text-[9px] sm:text-[10px] uppercase tracking-[0.18em] text-[var(--aura-text-muted)] font-bold hidden sm:block">
                Energia Elétrica Especializada
              </div>
            </div>
          </a>

          {/* Nav desktop */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-[var(--aura-text-soft)]">
            <a href="#simulador" className="hover:text-[var(--aura-blue)] transition-colors">
              Simulador
            </a>
            <a href="#para-quem" className="hover:text-[var(--aura-blue)] transition-colors">
              Para quem
            </a>
            <a href="#kits" className="hover:text-[var(--aura-blue)] transition-colors">
              Kits
            </a>
            <a href="#sobre-renato" className="hover:text-[var(--aura-blue)] transition-colors">
              Sobre nós
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
            className="btn-yellow inline-flex items-center gap-2 px-4 py-2.5 sm:px-5 sm:py-3 rounded-xl text-sm sm:text-base font-bold"
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
