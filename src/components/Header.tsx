"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { IconWhatsApp } from "./Icons";

const RENATO_WHATSAPP = "5563992706284";
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

          {/* Nav desktop — 4 segmentos + institucional */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold text-[var(--aura-text-soft)]">
            <a href="/casa" className="hover:text-[var(--aura-blue)] transition-colors">
              Casa
            </a>
            <a href="/comercio" className="hover:text-[var(--aura-yellow-deep)] transition-colors">
              Comércio
            </a>
            <a href="/industria" className="hover:text-[var(--aura-blue-deep)] transition-colors">
              Indústria
            </a>
            <a href="/rural" className="hover:text-[#15803D] transition-colors">
              Rural
            </a>
            <span className="w-px h-5 bg-[var(--aura-border-strong)]" aria-hidden />
            <a href="/#sobre-renato" className="hover:text-[var(--aura-blue)] transition-colors">
              Sobre
            </a>
            <a href="/#faq" className="hover:text-[var(--aura-blue)] transition-colors">
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
