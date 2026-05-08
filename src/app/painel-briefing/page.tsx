import { redirect } from "next/navigation";
import Link from "next/link";
import { serverSupabase } from "@/lib/supabase";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata = {
  title: "Painel Briefings · Impulso",
  robots: { index: false, follow: false, nocache: true },
};

export default async function PainelBriefingsIndex({
  searchParams,
}: {
  searchParams: Promise<{ token?: string }>;
}) {
  const { token } = await searchParams;
  const expected = process.env.BRIEFING_VIEWER_TOKEN?.trim();
  if (!expected || token?.trim() !== expected) {
    return (
      <div className="min-h-screen flex items-center justify-center p-8 bg-[#0F1B3D] text-white">
        <div className="max-w-md text-center">
          <h1 className="text-2xl font-bold mb-3">Acesso restrito</h1>
          <p className="text-sm text-white/70">Token inválido ou ausente.</p>
        </div>
      </div>
    );
  }

  const sb = serverSupabase();
  const { data: briefings } = await sb
    .from("briefings")
    .select("slug, name, status, progress, updated_at, created_at")
    .order("updated_at", { ascending: false });

  return (
    <div className="min-h-screen bg-[#FFFEF2] p-6 sm:p-10">
      <div className="max-w-4xl mx-auto">
        <header className="mb-10">
          <p className="text-xs font-bold uppercase tracking-widest text-[#F5BC2C]">
            Impulso Digital · Painel
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#0F1B3D] mt-1">
            Briefings de cliente
          </h1>
          <p className="text-sm text-[#0F1B3D]/60 mt-2">
            Lista em tempo real de todos briefings preenchidos por clientes Impulso.
          </p>
        </header>

        {!briefings || briefings.length === 0 ? (
          <div className="bg-white border border-[#0F1B3D]/10 rounded-2xl p-8 text-center">
            <p className="text-sm text-[#0F1B3D]/70">
              Nenhum briefing iniciado ainda. Quando o cliente abrir o link e responder a
              primeira pergunta, ele aparece aqui.
            </p>
          </div>
        ) : (
          <ul className="space-y-3">
            {briefings.map((b) => (
              <li key={b.slug}>
                <Link
                  href={`/painel-briefing/${b.slug}?token=${encodeURIComponent(token)}`}
                  className="block bg-white rounded-2xl p-5 border border-[#0F1B3D]/10 hover:border-[#F5BC2C] transition-colors"
                >
                  <div className="flex items-center justify-between gap-3 flex-wrap">
                    <div>
                      <p className="text-base font-bold text-[#0F1B3D]">
                        {b.name || b.slug}{" "}
                        <span className="text-xs font-mono text-[#0F1B3D]/40 ml-2">
                          /{b.slug}
                        </span>
                      </p>
                      <p className="text-xs text-[#0F1B3D]/60 mt-0.5">
                        Atualizado {new Date(b.updated_at).toLocaleString("pt-BR")}
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span
                        className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded"
                        style={{
                          background:
                            b.status === "completed"
                              ? "rgba(34,197,94,0.15)"
                              : "rgba(245,188,44,0.20)",
                          color: b.status === "completed" ? "#16A34A" : "#92400E",
                        }}
                      >
                        {b.status === "completed" ? "✅ enviado" : "📝 rascunho"}
                      </span>
                      <span className="text-xs font-mono text-[#0F1B3D]/60">
                        bloco {(b.progress ?? 0) + 1}/11
                      </span>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        )}

        <footer className="mt-12 pt-6 border-t border-[#0F1B3D]/10 text-xs text-[#0F1B3D]/50">
          Impulso Digital · Painel privado · Não compartilhe esse link
        </footer>
      </div>
    </div>
  );
}
