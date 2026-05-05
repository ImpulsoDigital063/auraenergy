"use client";

import { useEffect, useState } from "react";
import { IconWhatsApp } from "./Icons";

const RENATO_WHATSAPP = "5563992688852";
const MENSAGEM =
  "Olá Renato! Quero falar com um especialista técnico da Aura Energy.";

const link = `https://wa.me/${RENATO_WHATSAPP}?text=${encodeURIComponent(MENSAGEM)}`;

export default function BotaoFlutuanteWhatsApp() {
  const [visivel, setVisivel] = useState(false);
  const [expandido, setExpandido] = useState(true);

  useEffect(() => {
    // Aparece depois que o usuário rola um pouco, pra não competir com o hero
    const onScroll = () => {
      setVisivel(window.scrollY > 400);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Recolhe automaticamente após 5 segundos pra não atrapalhar leitura
  useEffect(() => {
    if (!visivel) return;
    const timer = setTimeout(() => setExpandido(false), 5000);
    return () => clearTimeout(timer);
  }, [visivel]);

  return (
    <>
      <a
        href={link}
        target="_blank"
        rel="noopener"
        aria-label="Falar com especialista no WhatsApp"
        onMouseEnter={() => setExpandido(true)}
        onMouseLeave={() => setExpandido(false)}
        className={`fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-[60] flex items-center gap-3 rounded-full pl-4 pr-5 py-3.5 shadow-2xl transition-all duration-500 ${
          visivel
            ? "translate-y-0 opacity-100 scale-100"
            : "translate-y-12 opacity-0 scale-90 pointer-events-none"
        }`}
        style={{
          background:
            "linear-gradient(135deg, #25D366 0%, #1FAD52 100%)",
          color: "white",
          boxShadow:
            "0 10px 30px rgba(37, 211, 102, 0.40), 0 4px 12px rgba(0,0,0,0.15)",
        }}
      >
        {/* Halo de pulso */}
        <span
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{
            background: "rgba(37, 211, 102, 0.50)",
            animation: "wppPulse 2.4s ease-in-out infinite",
          }}
          aria-hidden
        />

        <IconWhatsApp size={26} className="relative z-10 flex-shrink-0" />

        <span
          className={`relative z-10 font-bold text-sm sm:text-[15px] whitespace-nowrap transition-all duration-400 overflow-hidden ${
            expandido ? "max-w-[260px] opacity-100" : "max-w-0 opacity-0"
          }`}
        >
          Falar com especialista
        </span>
      </a>

      <style>{`
        @keyframes wppPulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0;
          }
          30% {
            opacity: 0.6;
          }
          100% {
            transform: scale(1.6);
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
}
