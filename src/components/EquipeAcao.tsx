import Image from "next/image";
import Reveal from "./Reveal";
import { IconShield, IconUsers } from "./Icons";

// Galeria de fotos da equipe trabalhando.
// Fotos cravadas via Replicate Flux Dev (2026-05-23) · técnico solar real
// com EPI completo, sem rosto identificável. Substituiu stock Unsplash genérico
// (homem turtleneck preto que não tinha relação com solar).
const EQUIPE = [
  {
    url: "/img/equipe/tecnico-instalando.png",
    legenda: "Instalação no telhado",
    sub: "Equipe técnica em ação",
    aspect: "aspect-[3/4]", // vertical
  },
  {
    url: "/img/equipe/conexao-mc4.png",
    legenda: "Conexão dos painéis",
    sub: "Cabeamento certificado MC4",
    aspect: "aspect-square", // quadrada
  },
  {
    url: "/img/equipe/paineis-telhado.png",
    legenda: "Painéis em telhado residencial",
    sub: "Palmas-TO · terracota típica",
    aspect: "aspect-[3/4]", // vertical
  },
  {
    url: "/img/equipe/alinhamento-tecnico.png",
    legenda: "Alinhamento técnico",
    sub: "Otimização de geração",
    aspect: "aspect-square", // quadrada
  },
  {
    url: "/img/equipe/sistema-entregue.png",
    legenda: "Sistema entregue",
    sub: "Pronto pra ativação",
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
