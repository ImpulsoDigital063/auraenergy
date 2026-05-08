import { serverSupabase } from "@/lib/supabase";
import BriefingViewer from "./BriefingViewer";
import Link from "next/link";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata = {
  title: "Briefing · Painel",
  robots: { index: false, follow: false, nocache: true },
};

export default async function PainelBriefingDetail({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ token?: string }>;
}) {
  const { slug } = await params;
  const { token } = await searchParams;
  const expected = process.env.BRIEFING_VIEWER_TOKEN;

  if (!expected || token !== expected) {
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
  const { data: initial } = await sb
    .from("briefings")
    .select("slug, name, data, status, progress, updated_at, created_at")
    .eq("slug", slug)
    .maybeSingle();

  return (
    <div className="min-h-screen bg-[#FFFEF2] p-4 sm:p-8">
      <div className="max-w-4xl mx-auto">
        <Link
          href={`/painel-briefing?token=${encodeURIComponent(token)}`}
          className="text-xs text-[#0F1B3D]/60 hover:text-[#0F1B3D] mb-4 inline-block"
        >
          ← Voltar pra lista
        </Link>

        <BriefingViewer slug={slug} initial={initial} />
      </div>
    </div>
  );
}
