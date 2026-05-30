"use client";

import { useEffect, useState } from "react";
import type { TocItem } from "@/lib/markdown";

type Props = {
  items: TocItem[];
};

// TOC sticky lateral · só renderiza em desktop (lg:block). Usa IntersectionObserver
// pra destacar a seção atual conforme o usuário rola. Click no item rola
// suavemente até o anchor.
export default function ArtigoToc({ items }: Props) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    if (items.length === 0) return;

    const headings = items
      .map((it) => document.getElementById(it.id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Pega a primeira heading visível no topo (rootMargin negativo joga
        // o "ponto de gatilho" pra 30% do topo da viewport)
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: "-80px 0px -65% 0px",
        threshold: 0,
      }
    );

    headings.forEach((h) => observer.observe(h));

    return () => observer.disconnect();
  }, [items]);

  if (items.length === 0) return null;

  return (
    <nav aria-label="Sumário do artigo" className="text-sm">
      <div className="text-xs font-bold uppercase tracking-widest text-[var(--aura-text-muted)] mb-4">
        Neste artigo
      </div>
      <ul className="space-y-1.5 border-l border-[var(--aura-border)]">
        {items.map((item) => {
          const isActive = activeId === item.id;
          return (
            <li key={item.id} className={item.level === 3 ? "ml-3" : ""}>
              <a
                href={`#${item.id}`}
                className={`block py-1 pl-4 -ml-px border-l-2 leading-snug transition-colors ${
                  isActive
                    ? "border-[var(--aura-blue)] text-[var(--aura-blue)] font-semibold"
                    : "border-transparent text-[var(--aura-text-muted)] hover:text-[var(--aura-text)] hover:border-[var(--aura-border-strong)]"
                } ${item.level === 3 ? "text-[13px]" : ""}`}
              >
                {item.text}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
