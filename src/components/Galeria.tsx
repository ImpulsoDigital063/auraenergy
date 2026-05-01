import Image from "next/image";
import Reveal from "./Reveal";

// Imagens do Unsplash — fotos REAIS de sistemas solares.
// Eduardo: trocar por fotos reais das instalações do Renato quando ele fornecer.
// Cada URL inclui ?w=1200&q=80&auto=format&fit=crop pra otimização.
const FOTOS = [
  {
    url: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&q=80&auto=format&fit=crop",
    legenda: "Residência em Palmas — sistema 5,5 kWp",
    alt: "Casa moderna com painéis solares no telhado",
  },
  {
    url: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1200&q=80&auto=format&fit=crop",
    legenda: "Fazenda — sistema 12 kWp comercial",
    alt: "Painéis solares em close-up tecnológico",
  },
  {
    url: "https://images.unsplash.com/photo-1545208067-fcc1c6f49d40?w=1200&q=80&auto=format&fit=crop",
    legenda: "Comércio — sistema 8 kWp",
    alt: "Painéis solares vistos contra céu azul",
  },
  {
    url: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=1200&q=80&auto=format&fit=crop",
    legenda: "Equipe Aura instalando — Plano Diretor",
    alt: "Técnicos instalando painéis solares",
  },
  {
    url: "https://images.unsplash.com/photo-1611365892117-bce8ea1ddd47?w=1200&q=80&auto=format&fit=crop",
    legenda: "Residência — sistema 3 kWp",
    alt: "Painéis solares modernos em telhado",
  },
  {
    url: "https://images.unsplash.com/photo-1566093097221-ac2335b09e70?w=1200&q=80&auto=format&fit=crop",
    legenda: "Vista superior — projeto comercial",
    alt: "Painéis solares vista aérea",
  },
];

export default function Galeria() {
  return (
    <section id="galeria" className="py-20 sm:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-14">
            <span className="badge-blue mb-4 inline-flex">Instalações Aura</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[var(--aura-text)] mb-4">
              Veja o trabalho <span className="text-gradient-aura">real</span>{" "}
              que entregamos.
            </h2>
            <p className="text-lg text-[var(--aura-text-muted)] max-w-2xl mx-auto">
              Cada projeto começa com visita técnica e termina com cliente
              economizando. Confira algumas instalações recentes.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5">
          {FOTOS.map((f, i) => (
            <Reveal key={f.url} delay={((i % 3) + 1) as 1 | 2 | 3}>
              <div className="parallax-card aspect-[4/3] sm:aspect-[3/2]">
                <Image
                  src={f.url}
                  alt={f.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 33vw"
                  unoptimized
                />
                <div className="caption">
                  <span className="text-sm sm:text-base">{f.legenda}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={4}>
          <p className="text-center text-xs text-[var(--aura-text-faded)] mt-8 italic">
            * Imagens ilustrativas. Galeria real será publicada conforme projetos
            entregues — solicite portfolio completo no atendimento.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
