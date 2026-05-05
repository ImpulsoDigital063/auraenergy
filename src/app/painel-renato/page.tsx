import type { Metadata } from "next";
import { Suspense } from "react";
import PainelRenato from "@/components/segmentos/PainelRenato";

export const metadata: Metadata = {
  title: "Painel Renato — Aura Energy (interno)",
  description: "Dashboard interno de copy-paste pro Renato.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function PainelRenatoPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center text-[var(--aura-text-muted)]">
          Carregando…
        </div>
      }
    >
      <PainelRenato />
    </Suspense>
  );
}
