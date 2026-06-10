import Image from "next/image";
import Link from "next/link";
import { IconArrowRight } from "./Icons";

// Wrapper visual pras páginas legais (privacidade, termos).
// Standalone: header simples + conteúdo em prose + rodapé de volta pra home.
export default function LegalShell({
  titulo,
  atualizado,
  children,
}: {
  titulo: string;
  atualizado: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: "var(--aura-bg)" }}>
      <header
        className="sticky top-0 z-50 backdrop-blur-xl"
        style={{
          background: "rgba(255, 254, 242, 0.92)",
          borderBottom: "1px solid var(--aura-border)",
        }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
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
                Energia Elétrica Especializada
              </div>
            </div>
          </Link>
          <Link
            href="/"
            className="text-xs sm:text-sm font-semibold text-[var(--aura-text-muted)] hover:text-[var(--aura-blue)] transition-colors inline-flex items-center gap-1.5"
          >
            Voltar ao site
            <IconArrowRight size={14} />
          </Link>
        </div>
      </header>

      <main className="flex-1 max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-14 w-full">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--aura-text)] mb-2">
          {titulo}
        </h1>
        <p className="text-sm text-[var(--aura-text-muted)] mb-8">
          Última atualização: {atualizado}
        </p>

        <article
          className="text-[var(--aura-text-soft)] leading-relaxed text-[15px] sm:text-base
            [&_h2]:text-[var(--aura-text)] [&_h2]:font-bold [&_h2]:text-xl [&_h2]:mt-9 [&_h2]:mb-3
            [&_p]:mb-4 [&_ul]:mb-4 [&_ul]:pl-5 [&_ul]:list-disc [&_li]:mb-1.5
            [&_strong]:text-[var(--aura-text)] [&_a]:text-[var(--aura-blue)] [&_a]:underline"
        >
          {children}
        </article>
      </main>

      <footer
        className="py-6 text-center text-xs text-[var(--aura-text-muted)]"
        style={{ borderTop: "1px solid var(--aura-border)" }}
      >
        <div className="max-w-3xl mx-auto px-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
          <Link href="/privacidade" className="hover:text-[var(--aura-blue)] transition-colors">
            Política de Privacidade
          </Link>
          <span className="text-[var(--aura-text-faded)]">·</span>
          <Link href="/termos" className="hover:text-[var(--aura-blue)] transition-colors">
            Termos de Uso
          </Link>
          <span className="text-[var(--aura-text-faded)]">·</span>
          <span>© {new Date().getFullYear()} Aura Energy</span>
        </div>
      </footer>
    </div>
  );
}
