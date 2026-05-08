import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Recebido · Aura Energy",
  description: "Briefing recebido. Eduardo já está calibrando as LPs.",
  robots: { index: false, follow: false, nocache: true },
};

export default function BriefingObrigadoPage() {
  return (
    <main
      className="min-h-screen flex items-center justify-center px-4 py-12"
      style={{
        background:
          "radial-gradient(ellipse 80% 60% at 50% 30%, rgba(245,188,44,0.15) 0%, transparent 60%), var(--aura-bg)",
      }}
    >
      <div className="max-w-xl w-full text-center">
        <Link href="/" className="inline-block mb-8">
          <Image
            src="/logo-aura.png"
            alt="Aura Energy"
            width={72}
            height={72}
            className="mx-auto"
            priority
          />
        </Link>

        <div
          className="rounded-3xl p-8 sm:p-10"
          style={{
            background: "rgba(255,255,255,0.96)",
            border: "1px solid var(--aura-border)",
            boxShadow: "0 8px 30px -10px rgba(15,27,61,0.20)",
          }}
        >
          <div
            className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6"
            style={{
              background:
                "linear-gradient(135deg, var(--aura-blue) 0%, var(--aura-yellow-deep) 100%)",
            }}
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#fff"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 6L9 17l-5-5" />
            </svg>
          </div>

          <h1 className="text-2xl sm:text-3xl font-bold text-[var(--aura-text)] mb-3">
            Recebi tudo, Renato 🌞
          </h1>

          <p className="text-base text-[var(--aura-text-soft)] leading-relaxed mb-6">
            Já tô lendo cada resposta pra começar a calibrar as LPs com a sua
            cara.
          </p>

          <div
            className="text-left rounded-2xl p-5 mb-6"
            style={{
              background: "var(--aura-bg-soft)",
              border: "1px solid var(--aura-border)",
            }}
          >
            <p className="text-xs font-bold uppercase tracking-wider text-[var(--aura-text-muted)] mb-3">
              Próximos passos
            </p>
            <ol className="space-y-3 text-sm text-[var(--aura-text)] leading-relaxed">
              <li className="flex gap-3">
                <span
                  className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-bold"
                  style={{ background: "var(--aura-yellow)", color: "var(--aura-blue)" }}
                >
                  1
                </span>
                <span>
                  Você manda no <strong>grupo WhatsApp</strong> as fotos e dados
                  reais (8 pacotes — institucional, casos por nicho, áudios).
                </span>
              </li>
              <li className="flex gap-3">
                <span
                  className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-bold"
                  style={{ background: "var(--aura-yellow)", color: "var(--aura-blue)" }}
                >
                  2
                </span>
                <span>
                  Eu calibro as 5 LPs com seus dados (cases, preços, marcas,
                  bancos parceiros).
                </span>
              </li>
              <li className="flex gap-3">
                <span
                  className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-bold"
                  style={{ background: "var(--aura-yellow)", color: "var(--aura-blue)" }}
                >
                  3
                </span>
                <span>
                  <strong>Você revisa antes de qualquer coisa subir ao público.</strong>{" "}
                  Nada vira ar sem seu OK.
                </span>
              </li>
            </ol>
          </div>

          <Link
            href="https://wa.me/5563992688852"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-transform hover:scale-[1.02]"
            style={{
              background:
                "linear-gradient(135deg, var(--aura-blue) 0%, var(--aura-blue-deep) 100%)",
              color: "#fff",
              boxShadow: "0 8px 20px -6px rgba(15,27,61,0.40)",
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Voltar pro grupo no WhatsApp
          </Link>
        </div>

        <p className="text-xs text-[var(--aura-text-muted)] mt-6">
          Aura Energy · Impulso Digital · Eduardo Barros
        </p>
      </div>
    </main>
  );
}
