import Image from "next/image";
import Reveal from "./Reveal";
import { IconShield, IconUsers } from "./Icons";

// Galeria de fotos da equipe trabalhando.
// Fotos reais Unsplash (licença comercial · técnicos com EPI), validadas via CDN.
// Trocadas das antigas geradas por IA (Flux) — pessoa nunca via IA. Provisórias
// até o registro fotográfico das obras reais do Renato.
const EQUIPE = [
  {
    url: "https://images.unsplash.com/photo-1660330589243-4c640d878052?w=900&q=80&auto=format&fit=crop",
    legenda: "Equipe própria no telhado",
    sub: "Dois técnicos · EPI completo",
    aspect: "aspect-[3/4]", // vertical
  },
  {
    url: "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=900&q=80&auto=format&fit=crop",
    legenda: "Conexão dos painéis",
    sub: "Cabeamento certificado",
    aspect: "aspect-square", // quadrada
  },
  {
    url: "https://images.unsplash.com/photo-1660330589505-9a433a742a7b?w=900&q=80&auto=format&fit=crop",
    legenda: "Instalação em andamento",
    sub: "Treinados em NR-35",
    aspect: "aspect-[3/4]", // vertical
  },
  {
    url: "https://images.unsplash.com/photo-1726221062299-88f27b653c59?w=900&q=80&auto=format&fit=crop",
    legenda: "Técnico em campo",
    sub: "Sem terceirização barata",
    aspect: "aspect-square", // quadrada
  },
  {
    url: "https://images.unsplash.com/photo-1719848576338-9516ba7ccd8b?w=900&q=80&auto=format&fit=crop",
    legenda: "Fixação dos módulos",
    sub: "Mão de obra própria",
    aspect: "aspect-[3/4]", // vertical
  },
];

export default function EquipeAcao() {
  return (
    <section className="py-20 sm:py-28 overflow-hidden section-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-12">
            <span className="badge-yellow mb-4 inline-flex">
              <IconUsers size={14} />
              Equipe Aura em ação
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[var(--aura-text)] mb-4">
              Quem realmente <span className="text-gradient-aura">sobe no telhado</span>
              <br />
              com você.
            </h2>
            <p className="text-lg text-[var(--aura-text-muted)] max-w-2xl mx-auto leading-relaxed">
              Equipe própria, treinada, com EPI e seguro. Nada de terceirização
              barata que some depois do pagamento.
            </p>
          </div>
        </Reveal>

        {/* Grid asymmetric — 5 fotos em layout magazine */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4">
          {EQUIPE.map((foto, i) => (
            <Reveal
              key={foto.url}
              delay={(((i + 1) % 5) || 5) as 1 | 2 | 3 | 4 | 5}
              className={i === 0 ? "col-span-2 lg:col-span-2 lg:row-span-2" : ""}
            >
              <div
                className={`parallax-card ${
                  i === 0 ? "h-full min-h-[300px] sm:min-h-[400px]" : foto.aspect
                }`}
              >
                <Image
                  src={foto.url}
                  alt={foto.legenda}
                  fill
                  className="object-cover"
                  sizes={
                    i === 0
                      ? "(max-width: 1024px) 100vw, 40vw"
                      : "(max-width: 1024px) 50vw, 20vw"
                  }
                />
                <div className="caption flex flex-col items-start gap-0.5">
                  <span className="text-sm sm:text-base font-bold leading-tight">
                    {foto.legenda}
                  </span>
                  <span className="text-xs text-white/75 font-medium">
                    {foto.sub}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Faixa rodapé com selos de segurança */}
        <Reveal delay={5}>
          <div className="mt-10 flex flex-wrap justify-center gap-3 sm:gap-4">
            {[
              { label: "EPI completo em todas as obras", icon: <IconShield size={16} /> },
              { label: "Seguro de responsabilidade civil", icon: <IconShield size={16} /> },
              { label: "Treinamento NR-10 e NR-35", icon: <IconShield size={16} /> },
            ].map((s) => (
              <span
                key={s.label}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[var(--aura-border)] text-sm font-semibold text-[var(--aura-text-soft)] shadow-sm"
              >
                <span className="text-[var(--aura-yellow-deep)]">{s.icon}</span>
                {s.label}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={6}>
          <p className="text-center text-xs text-[var(--aura-text-faded)] mt-6 italic max-w-2xl mx-auto">
            * Imagens ilustrativas durante fase de lançamento. Galeria real da
            equipe Aura Energy será publicada conforme registro fotográfico das
            próximas obras.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
