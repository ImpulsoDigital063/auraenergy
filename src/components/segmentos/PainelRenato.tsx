"use client";

import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import {
  IconArrowRight,
  IconCheck,
  IconFactory,
  IconHome,
  IconShield,
  IconStore,
  IconTractor,
  IconWhatsApp,
} from "../Icons";

// Chave secreta pra acessar o painel (server-side seria ideal, mas aqui é só
// proteção contra acesso casual — não é segurança real).
const PAINEL_KEY = "renato2026";
const BASE_URL = "https://auraenergy.vercel.app";

type Segmento = {
  slug: string;
  label: string;
  icon: React.ReactNode;
  cor: string;
  corSoft: string;
  url: string;
  whatsMsg: string;
  observacao: string;
};

const SEGMENTOS: Segmento[] = [
  {
    slug: "casa",
    label: "Sua casa",
    icon: <IconHome size={22} />,
    cor: "var(--aura-blue)",
    corSoft: "var(--aura-blue-tint)",
    url: `${BASE_URL}/casa`,
    whatsMsg: `Oi! Tô mandando aqui o link da Aura pra residencial — é a página feita pra quem quer solar pra casa em Palmas:

${BASE_URL}/casa

Tem simulador no topo pra ver quanto cai sua conta. Qualquer coisa, me chama.

— Renato Edson · Aura Energy`,
    observacao: "Manda pra: cliente residencial, prospect de Insta/indicação, ticket R$ 25-50k.",
  },
  {
    slug: "comercio",
    label: "Seu comércio",
    icon: <IconStore size={22} />,
    cor: "var(--aura-yellow-deep)",
    corSoft: "var(--aura-yellow-tint)",
    url: `${BASE_URL}/comercio`,
    whatsMsg: `Oi! Sobre solar pro seu negócio — montei essa página com o cálculo pra comércio em Palmas:

${BASE_URL}/comercio

Tem caso-tipo de loja com R$ 2.400/mês de luz, payback 3-4 anos e a conta liberando margem. Dá uma olhada e me fala se faz sentido.

— Renato Edson · Aura Energy`,
    observacao: "Manda pra: dono de loja, padaria, posto, restaurante, clínica. Ticket R$ 50-150k.",
  },
  {
    slug: "industria",
    label: "Sua indústria",
    icon: <IconFactory size={22} />,
    cor: "var(--aura-blue-deep)",
    corSoft: "rgba(14, 33, 82, 0.10)",
    url: `${BASE_URL}/industria`,
    whatsMsg: `Boa tarde. Conforme conversamos — segue a página da Aura com a análise pra indústria em Tocantins:

${BASE_URL}/industria

Tem caso-tipo de planta 200 kWp com TIR 22% a.a., payback 4,5 anos. Considera demanda contratada + ICMS subsidiado pelo Convênio 16/15. Disponho pra reunião pra apresentar a análise técnica completa.

— Renato Edson · Engenheiro responsável · Aura Energy`,
    observacao: "Manda pra: decisor industrial, frigorífico, cerâmica, metalúrgica. Ticket R$ 150-800k. Tom mais formal.",
  },
  {
    slug: "rural",
    label: "Sua propriedade rural",
    icon: <IconTractor size={22} />,
    cor: "#15803D",
    corSoft: "rgba(21, 128, 61, 0.10)",
    url: `${BASE_URL}/rural`,
    whatsMsg: `Oi! Sobre solar pra sua propriedade rural — montei essa página com fazenda, sítio, granja, pivô e Pronaf:

${BASE_URL}/rural

Tem caso-tipo com pivô + granja, payback 3,8 anos com Pronaf 0,5% a.m. Eu cuido do enquadramento e da documentação que o banco pede.

— Renato Edson · Aura Energy`,
    observacao: "Manda pra: produtor rural, fazenda, sítio, chácara, irrigação. Ticket R$ 80-300k.",
  },
];

export default function PainelRenato() {
  const searchParams = useSearchParams();
  const keyParam = searchParams.get("key");

  if (keyParam !== PAINEL_KEY) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-md text-center">
          <Image
            src="/logo-aura.png"
            alt="Aura Energy"
            width={72}
            height={72}
            className="mx-auto mb-6 object-contain"
          />
          <h1 className="text-2xl font-extrabold text-[var(--aura-text)] mb-3">
            Acesso privado
          </h1>
          <p className="text-[var(--aura-text-muted)] text-sm leading-relaxed">
            Esta página é interna da Aura Energy. Acesse com a chave correta na
            URL pra entrar.
          </p>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen pb-20">
      <header className="border-b border-[var(--aura-border)] bg-white sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Image
              src="/logo-aura.png"
              alt="Aura Energy"
              width={40}
              height={40}
              className="object-contain"
            />
            <div className="leading-tight">
              <div className="font-extrabold text-[var(--aura-blue)]">
                Painel Renato
              </div>
              <div className="text-[10px] uppercase tracking-widest text-[var(--aura-text-muted)] font-bold">
                Interno · Aura Energy
              </div>
            </div>
          </div>
          <a
            href="/"
            className="text-xs font-semibold text-[var(--aura-text-muted)] hover:text-[var(--aura-blue)] transition-colors"
          >
            Ver site público →
          </a>
        </div>
      </header>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 pt-10">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--aura-text)] mb-2">
          Copia, manda, fecha.
        </h2>
        <p className="text-[var(--aura-text-muted)] mb-8">
          Cada cenário tem o link da LP especializada e a mensagem-padrão pronta
          pra você mandar no WhatsApp do cliente. Bookmarke esta página com a
          URL completa (com a chave) e use pra todo lead.
        </p>

        <div className="space-y-5">
          {SEGMENTOS.map((seg) => (
            <SegmentoCard key={seg.slug} seg={seg} />
          ))}
        </div>

        <div className="mt-10 pt-6 border-t border-[var(--aura-border)] text-xs text-[var(--aura-text-muted)] leading-relaxed">
          <strong className="text-[var(--aura-text)]">Atalho útil:</strong>{" "}
          <code className="px-1.5 py-0.5 bg-[var(--aura-bg-soft)] rounded">
            auraenergy.vercel.app/links
          </code>{" "}
          é o linktree público pra colocar na bio do Instagram da Aura.
        </div>
      </section>
    </main>
  );
}

function SegmentoCard({ seg }: { seg: Segmento }) {
  const [copiouLink, setCopiouLink] = useState(false);
  const [copiouMsg, setCopiouMsg] = useState(false);

  const copiar = async (texto: string, qual: "link" | "msg") => {
    try {
      await navigator.clipboard.writeText(texto);
      if (qual === "link") {
        setCopiouLink(true);
        setTimeout(() => setCopiouLink(false), 2000);
      } else {
        setCopiouMsg(true);
        setTimeout(() => setCopiouMsg(false), 2000);
      }
    } catch {
      alert("Erro ao copiar. Selecione manualmente.");
    }
  };

  return (
    <div className="premium-card p-5 sm:p-6">
      {/* Header: ícone + label + abrir LP */}
      <div className="flex items-center justify-between gap-3 mb-4 pb-4 border-b border-[var(--aura-border)]">
        <div className="flex items-center gap-3">
          <span
            className="w-11 h-11 rounded-xl flex items-center justify-center"
            style={{ background: seg.corSoft, color: seg.cor }}
          >
            {seg.icon}
          </span>
          <div>
            <h3
              className="text-lg font-extrabold"
              style={{ color: seg.cor }}
            >
              {seg.label}
            </h3>
            <p className="text-xs text-[var(--aura-text-muted)]">{seg.observacao}</p>
          </div>
        </div>
        <a
          href={seg.url}
          target="_blank"
          rel="noopener"
          className="text-xs font-bold inline-flex items-center gap-1 px-3 py-2 rounded-lg transition-all hover:gap-2"
          style={{ background: seg.corSoft, color: seg.cor }}
        >
          Abrir LP
          <IconArrowRight size={14} />
        </a>
      </div>

      {/* Linha link */}
      <div className="mb-4">
        <label className="text-[11px] font-bold uppercase tracking-widest text-[var(--aura-text-muted)] mb-1.5 block">
          Link da LP
        </label>
        <div className="flex items-center gap-2">
          <code className="flex-1 px-3 py-2.5 bg-[var(--aura-bg-soft)] rounded-lg text-sm text-[var(--aura-text-soft)] truncate border border-[var(--aura-border)]">
            {seg.url}
          </code>
          <button
            type="button"
            onClick={() => copiar(seg.url, "link")}
            className="px-4 py-2.5 rounded-lg text-sm font-bold inline-flex items-center gap-1.5 transition-all hover:scale-[1.02]"
            style={{
              background: copiouLink ? "#15803D" : seg.cor,
              color: "white",
            }}
          >
            {copiouLink ? (
              <>
                <IconCheck size={14} strokeWidth={2.5} />
                Copiado
              </>
            ) : (
              "Copiar link"
            )}
          </button>
        </div>
      </div>

      {/* Linha mensagem WhatsApp */}
      <div>
        <label className="text-[11px] font-bold uppercase tracking-widest text-[var(--aura-text-muted)] mb-1.5 block">
          Mensagem WhatsApp pronta
        </label>
        <div className="rounded-lg border border-[var(--aura-border)] bg-[var(--aura-bg-soft)] p-3 text-sm text-[var(--aura-text-soft)] leading-relaxed whitespace-pre-line mb-2">
          {seg.whatsMsg}
        </div>
        <button
          type="button"
          onClick={() => copiar(seg.whatsMsg, "msg")}
          className="w-full px-4 py-3 rounded-lg text-sm font-bold inline-flex items-center justify-center gap-2 transition-all hover:scale-[1.01]"
          style={{
            background: copiouMsg ? "#15803D" : "#25D366",
            color: "white",
            boxShadow: copiouMsg
              ? "none"
              : "0 8px 24px -8px rgba(37, 211, 102, 0.45)",
          }}
        >
          {copiouMsg ? (
            <>
              <IconCheck size={16} strokeWidth={2.5} />
              Mensagem copiada · cole no WhatsApp
            </>
          ) : (
            <>
              <IconWhatsApp size={16} />
              Copiar mensagem WhatsApp
            </>
          )}
        </button>
      </div>
    </div>
  );
}
