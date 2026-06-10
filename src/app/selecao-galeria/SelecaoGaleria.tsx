"use client";

import { useMemo, useState } from "react";

// =====================================================================
// Curadoria de fotos da galeria · Renato escolhe as provisórias.
// Fotos Unsplash (licença comercial livre), validadas via CDN (HTTP 200).
// Substituídas pelas fotos REAIS das instalações do Renato quando chegarem.
// =====================================================================

type Foto = { id: string; cod: string; desc: string; indico?: boolean };
type Grupo = { titulo: string; hint: string; fotos: Foto[] };

const img = (id: string) =>
  `https://images.unsplash.com/${id}?w=640&h=440&fit=crop&q=80`;

const GRUPOS: Grupo[] = [
  {
    titulo: "Casa · telhado residencial com painel",
    hint: "O carro-chefe da galeria. Escolha 2 ou 3.",
    fotos: [
      { cod: "A1", id: "photo-1655300256335-beef51a914fe", desc: "Casa com sistema solar no telhado" },
      { cod: "A2", id: "photo-1637417494521-78b4d1d33029", desc: "Residência com painéis · enquadramento limpo", indico: true },
      { cod: "A3", id: "photo-1745187946672-2c1d8cf26a2b", desc: "Painéis em telhado residencial · luz natural", indico: true },
      { cod: "A4", id: "photo-1694327671725-e2a81cda3436", desc: "Fileiras de painéis cobrindo o telhado" },
      { cod: "A5", id: "photo-1707247111552-aaf74241058b", desc: "Telhado com grande área de painéis" },
      { cod: "A6", id: "photo-1771479755134-9c1e3143c110", desc: "Telhados de casas com sistema solar" },
      { cod: "A7", id: "photo-1763401929055-43fd29000be3", desc: "Imóvel alto padrão com painéis no telhado" },
      { cod: "A8", id: "photo-1761158495585-eac721decf1b", desc: "Casa de telha cerâmica com painéis · clima brasileiro" },
    ],
  },
  {
    titulo: "Equipe · técnico em ação na instalação",
    hint: "Mostra que tem gente de verdade na obra. Escolha 1 ou 2.",
    fotos: [
      { cod: "T1", id: "photo-1726221062299-88f27b653c59", desc: "Profissional com colete e capacete de segurança", indico: true },
      { cod: "T2", id: "photo-1726221062287-fda475b85493", desc: "Técnico de colete sob a estrutura de painéis" },
      { cod: "T3", id: "photo-1719848576338-9516ba7ccd8b", desc: "Profissional de capacete trabalhando no painel", indico: true },
      { cod: "T4", id: "photo-1668097613572-40b7c11c8727", desc: "Instalação de painel solar em andamento" },
      { cod: "T5", id: "photo-1559302504-64aae6ca6b6d", desc: "Dupla carregando módulo na obra" },
      { cod: "T6", id: "photo-1660330589243-4c640d878052", desc: "Equipe trabalhando no telhado" },
      { cod: "T7", id: "photo-1660330589505-9a433a742a7b", desc: "Equipe montando a estrutura no telhado" },
    ],
  },
  {
    titulo: "Detalhe · close do painel",
    hint: "Dá respiro entre as fotos amplas e reforça qualidade. Escolha 1.",
    fotos: [
      { cod: "C1", id: "photo-1724041875334-0a6397111c7e", desc: "Close do painel montado na edificação", indico: true },
      { cod: "C2", id: "photo-1625301840055-7c1b7198cfc0", desc: "Detalhe de painel azul e branco" },
      { cod: "C3", id: "photo-1552197892-f2ad2f75e7c8", desc: "Painéis azuis em close" },
      { cod: "C4", id: "photo-1574360773950-133867861ae9", desc: "Superfície dos painéis · luz do dia" },
      { cod: "C5", id: "photo-1663321508309-4ceb96a3c791", desc: "Painel sobre telha · detalhe" },
    ],
  },
  {
    titulo: "Vista aérea · porte comercial / industrial",
    hint: "Pra mostrar projeto grande (loja, galpão). Escolha 1.",
    fotos: [
      { cod: "V1", id: "photo-1726776230760-ae81dc9d4e55", desc: "Aérea de prédio com painéis instalados", indico: true },
      { cod: "V2", id: "photo-1503495731986-41d521ecbb32", desc: "Vista aérea de usina solar" },
      { cod: "V3", id: "photo-1726866492047-7f9516558c6e", desc: "Aérea de cobertura solar ampla" },
      { cod: "V4", id: "photo-1651379560002-7fe2278df5a7", desc: "Telhados de telha cobertos de painéis (aéreo)" },
      { cod: "V5", id: "photo-1768224123432-729e0a6fed58", desc: "Prédio comercial de tijolo com painéis no telhado" },
      { cod: "V6", id: "photo-1769697672933-0f599f913f4d", desc: "Edifício comercial revestido de painéis" },
      { cod: "V7", id: "photo-1775317628391-a0429fe3be1b", desc: "Galpão industrial com painéis · telhado dente-de-serra" },
      { cod: "V8", id: "photo-1726795867801-63c0a37b80c6", desc: "Aérea de grande usina em telhado" },
    ],
  },
  {
    titulo: "Rural · painel no solo / fazenda",
    hint: "Pro segmento agro/rural. Escolha 1 se quiser.",
    fotos: [
      { cod: "R1", id: "photo-1776918570415-52e7f702802a", desc: "Painéis no solo em área rural (aérea)", indico: true },
      { cod: "R2", id: "photo-1776918570485-e1e2ea91709c", desc: "Painéis em campo agrícola" },
      { cod: "R3", id: "photo-1776918570438-886f538edd93", desc: "Usina solar em solo · fileiras no campo (aéreo)" },
    ],
  },
];

const C = {
  bg: "#fffef2",
  blue: "#0E2152",
  yellow: "#F5BC2C",
  orange: "#FF8B3D",
  soft: "rgba(14,33,82,.62)",
  line: "rgba(14,33,82,.14)",
};

export default function SelecaoGaleria() {
  const [sel, setSel] = useState<Set<string>>(new Set());
  const [copiado, setCopiado] = useState(false);

  const toggle = (cod: string) =>
    setSel((prev) => {
      const next = new Set(prev);
      if (next.has(cod)) next.delete(cod);
      else next.add(cod);
      return next;
    });

  const ordenada = useMemo(() => {
    const ordem = GRUPOS.flatMap((g) => g.fotos.map((f) => f.cod));
    return ordem.filter((c) => sel.has(c));
  }, [sel]);

  const texto = `Renato — minha seleção de fotos pra galeria do site Aura: ${ordenada.join(", ")}.`;
  const waHref = `https://wa.me/?text=${encodeURIComponent(texto)}`;

  const copiar = async () => {
    try {
      await navigator.clipboard.writeText(texto);
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2200);
    } catch {
      /* clipboard bloqueado — usa o botão do WhatsApp */
    }
  };

  return (
    <main style={{ background: C.bg, color: C.blue, minHeight: "100vh", fontFamily: "var(--font-inter), -apple-system, Segoe UI, Roboto, sans-serif", paddingBottom: 120 }}>
      <header style={{ maxWidth: 1000, margin: "0 auto", padding: "44px 20px 8px" }}>
        <div style={{ fontSize: 12, fontWeight: 800, letterSpacing: ".18em", textTransform: "uppercase", color: C.orange, marginBottom: 10 }}>
          Aura Energy · curadoria de imagens
        </div>
        <h1 style={{ fontSize: 27, fontWeight: 800, letterSpacing: "-.02em", margin: "0 0 10px", lineHeight: 1.15 }}>
          Renato, escolha as fotos da galeria do site
        </h1>
        <p style={{ fontSize: 15, color: C.soft, maxWidth: 720, margin: 0, lineHeight: 1.55 }}>
          Separei opções de imagens pra seção <i>&ldquo;Veja o trabalho real que entregamos&rdquo;</i> enquanto suas fotos
          reais das instalações não chegam. <b>Toque nas que você curtir</b> — pode escolher quantas quiser. No fim,
          é só apertar <b>Enviar seleção no WhatsApp</b> e me mandar.
        </p>
        <p style={{ fontSize: 13.5, color: C.soft, maxWidth: 720, marginTop: 12, background: "#fff", border: `1px solid ${C.line}`, borderLeft: `4px solid ${C.yellow}`, borderRadius: 8, padding: "12px 16px", lineHeight: 1.5 }}>
          A etiqueta amarela <b style={{ color: C.blue }}>INDICO</b> é a minha sugestão em cada grupo. Quando você mandar
          suas fotos reais, a gente troca por elas — essas são só pra galeria não ficar vazia.
        </p>
      </header>

      {GRUPOS.map((g) => (
        <section key={g.titulo} style={{ maxWidth: 1000, margin: "0 auto", padding: "0 20px" }}>
          <h2 style={{ fontSize: 13, fontWeight: 800, letterSpacing: ".1em", textTransform: "uppercase", color: C.blue, margin: "38px 0 2px", borderTop: `1px solid ${C.line}`, paddingTop: 22 }}>
            {g.titulo}
          </h2>
          <p style={{ fontSize: 13, color: C.orange, fontWeight: 600, margin: "0 0 14px" }}>{g.hint}</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 10 }}>
            {g.fotos.map((f) => {
              const on = sel.has(f.cod);
              return (
                <button
                  key={f.cod}
                  type="button"
                  onClick={() => toggle(f.cod)}
                  style={{
                    position: "relative",
                    padding: 0,
                    margin: 0,
                    border: on ? `3px solid ${C.yellow}` : `1px solid ${C.line}`,
                    borderRadius: 10,
                    overflow: "hidden",
                    background: "#fff",
                    cursor: "pointer",
                    textAlign: "left",
                    boxShadow: on ? "0 10px 24px -10px rgba(245,188,44,.6)" : "0 2px 8px -4px rgba(14,33,82,.18)",
                    transition: "transform .12s, box-shadow .12s",
                    transform: on ? "translateY(-2px)" : "none",
                  }}
                >
                  <span style={{ position: "absolute", top: 9, left: 9, zIndex: 2, background: C.blue, color: "#fff", fontWeight: 800, fontSize: 13, padding: "4px 10px", borderRadius: 5 }}>
                    {f.cod}
                  </span>
                  {f.indico && !on && (
                    <span style={{ position: "absolute", top: 9, right: 9, zIndex: 2, background: C.yellow, color: C.blue, fontWeight: 800, fontSize: 10.5, padding: "4px 8px", borderRadius: 5, letterSpacing: ".06em" }}>
                      INDICO
                    </span>
                  )}
                  {on && (
                    <span style={{ position: "absolute", top: 9, right: 9, zIndex: 2, width: 28, height: 28, background: C.yellow, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={C.blue} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </span>
                  )}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={img(f.id)} alt={f.desc} loading="lazy" style={{ width: "100%", height: 200, objectFit: "cover", display: "block", filter: on ? "none" : "saturate(.98)" }} />
                  <span style={{ display: "block", padding: "9px 11px", fontSize: 12.5, color: C.soft, lineHeight: 1.4 }}>{f.desc}</span>
                </button>
              );
            })}
          </div>
        </section>
      ))}

      {/* Barra fixa de seleção */}
      <div style={{ position: "fixed", left: 0, right: 0, bottom: 0, background: C.blue, color: "#fff", padding: "12px 20px", display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap", justifyContent: "center", boxShadow: "0 -8px 24px -10px rgba(0,0,0,.4)", zIndex: 50 }}>
        <span style={{ fontSize: 14, fontWeight: 700 }}>
          {ordenada.length === 0 ? "Nenhuma foto selecionada ainda" : `${ordenada.length} selecionada${ordenada.length > 1 ? "s" : ""}: ${ordenada.join(", ")}`}
        </span>
        <div style={{ display: "flex", gap: 10 }}>
          <button
            type="button"
            onClick={copiar}
            disabled={ordenada.length === 0}
            style={{ background: "rgba(255,255,255,.14)", color: "#fff", border: "1px solid rgba(255,255,255,.3)", borderRadius: 9, padding: "10px 16px", fontSize: 13.5, fontWeight: 700, cursor: ordenada.length ? "pointer" : "not-allowed", opacity: ordenada.length ? 1 : 0.5 }}
          >
            {copiado ? "Copiado!" : "Copiar"}
          </button>
          <a
            href={ordenada.length ? waHref : undefined}
            target="_blank"
            rel="noopener"
            style={{ background: ordenada.length ? `linear-gradient(135deg, ${C.yellow}, ${C.orange})` : "rgba(255,255,255,.2)", color: C.blue, borderRadius: 9, padding: "10px 18px", fontSize: 13.5, fontWeight: 800, textDecoration: "none", pointerEvents: ordenada.length ? "auto" : "none", opacity: ordenada.length ? 1 : 0.5, display: "inline-flex", alignItems: "center", gap: 8 }}
          >
            <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 0 1 8.413 3.488 11.82 11.82 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.51 5.26l-.999 3.648 3.477-.607z"/></svg>
            Enviar seleção no WhatsApp
          </a>
        </div>
      </div>
    </main>
  );
}
