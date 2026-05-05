import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ResultadoView from "@/components/ResultadoView";
import { IconSparkles, IconWhatsApp } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Seu projeto Aura · Calculadora de Economia Solar",
  description: "Cálculo personalizado de economia com solar — Aura Energy.",
  robots: {
    index: false,
    follow: false,
  },
};

type SearchParams = Promise<{
  conta?: string;
  nome?: string;
  tipo?: string;
  cidade?: string;
  objetivo?: string;
  pagamento?: string;
  urgencia?: string;
  proprietario?: string;
  whatsapp?: string;
  email?: string;
}>;

export default async function EconomiaResultadoPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const params = await searchParams;

  // Parse defensivo (params podem vir como strings vazias do Tally)
  const conta = parseFloat(params.conta || "0") || 0;
  const nome = (params.nome || "").trim();
  const tipo = (params.tipo || "").trim();
  const cidade = (params.cidade || "").trim();
  const objetivo = (params.objetivo || "").trim();
  const pagamento = (params.pagamento || "").trim();
  const urgencia = (params.urgencia || "").trim();
  const whatsapp = (params.whatsapp || "").replace(/\D/g, "");

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header simplificado (mesmo da /briefing) */}
      <header
        className="sticky top-0 z-50 backdrop-blur-xl"
        style={{
          background: "rgba(255, 254, 242, 0.92)",
          borderBottom: "1px solid var(--aura-border)",
        }}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/logo-aura.png"
              alt="Aura Energy"
              width={48}
              height={48}
              className="w-10 h-10 sm:w-12 sm:h-12 object-contain group-hover:scale-105 transition-transform"
              priority
            />
            <div className="leading-tight">
              <div className="font-extrabold text-base sm:text-lg text-[var(--aura-blue)]">
                Aura Energy
              </div>
              <div className="text-[9px] uppercase tracking-widest text-[var(--aura-text-muted)] font-bold hidden sm:block">
                Resultado da calculadora
              </div>
            </div>
          </Link>

          <span className="badge-yellow text-[10px] sm:text-xs">
            <IconSparkles size={12} />
            Cálculo personalizado
          </span>
        </div>
      </header>

      <main className="flex-1 max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12 w-full">
        <ResultadoView
          conta={conta}
          nome={nome}
          tipo={tipo}
          cidade={cidade}
          objetivo={objetivo}
          pagamento={pagamento}
          urgencia={urgencia}
          whatsapp={whatsapp}
        />
      </main>

      <footer
        className="py-6 text-center text-xs text-[var(--aura-text-muted)]"
        style={{ borderTop: "1px solid var(--aura-border)" }}
      >
        <div className="max-w-3xl mx-auto px-4">
          <p>
            Cálculo baseado em tarifa Energisa-TO (R$ 0,95/kWh com tributos),
            Lei 14.300 (Fio B 60% em 2026) e irradiação solar média de Palmas (5,9 kWh/m²/dia).
          </p>
          <p className="mt-2 text-[var(--aura-text-faded)]">
            O orçamento exato depende de visita técnica gratuita.
            <br className="sm:hidden" />
            <a
              href="https://wa.me/5563992688852"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-1 ml-2 text-[var(--aura-blue)] font-semibold hover:text-[var(--aura-yellow-deep)] transition-colors"
            >
              <IconWhatsApp size={12} />
              (63) 9 9268-8852
            </a>
          </p>
          <p className="mt-3 text-[var(--aura-text-faded)]">
            Aura Energy · Renato Edson · Palmas-TO
          </p>
        </div>
      </footer>
    </div>
  );
}
