import Image from "next/image";
import Reveal from "./Reveal";
import type { FotoSegmento } from "./segmentos/galerias-fotos";
import { FOTOS_CASA } from "./segmentos/galerias-fotos";

// Galeria de instalações — aceita prop `fotos` específica do nicho.
// Default: fotos residenciais (uso original na HUB).

type GaleriaProps = {
  fotos?: FotoSegmento[];
  badge?: string;
  titulo?: React.ReactNode;
  subtitulo?: string;
};

export default function Galeria({
  fotos = FOTOS_CASA,
  badge = "Instalações Aura",
  titulo,
  subtitulo = "Cada projeto começa com visita técnica e termina com cliente economizando. Confira algumas instalações recentes.",
}: GaleriaProps) {
  const FOTOS = fotos;
  return (
    <section id="galeria" className="py-20 sm:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-14">
            <span className="badge-blue mb-4 inline-flex">{badge}</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[var(--aura-text)] mb-4">
              {titulo ?? (
                <>
                  Veja o trabalho <span className="text-gradient-aura">real</span>{" "}
                  que entregamos.
                </>
              )}
            </h2>
            <p className="text-lg text-[var(--aura-text-muted)] max-w-2xl mx-auto">
              {subtitulo}
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
