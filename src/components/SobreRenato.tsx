import Image from "next/image";
import Reveal from "./Reveal";
import {
  IconAward,
  IconBolt,
  IconCheck,
  IconMapPin,
  IconShield,
  IconSparkles,
  IconWhatsApp,
} from "./Icons";

const RENATO_WHATSAPP = "5563992688852";

const VALORES = [
  {
    titulo: "Atendimento direto comigo",
    desc: "Sem call center, sem terceirizado. Você fala comigo do orçamento ao pós-venda.",
    icon: <IconWhatsApp size={18} />,
  },
  {
    titulo: "Engenheiro responsável",
    desc: "ART em todo projeto. Responsabilidade técnica que segue você por 25 anos.",
    icon: <IconShield size={18} />,
  },
  {
    titulo: "Local de Palmas",
    desc: "Empresa daqui, técnicos daqui. Manutenção rápida, sem deslocamento de fora.",
    icon: <IconMapPin size={18} />,
  },
  {
    titulo: "Equipamentos Tier 1",
    desc: "Trabalho só com Trina, Canadian, Jinko, Growatt e Sungrow. Marca top, garantia real.",
    icon: <IconBolt size={18} />,
  },
];

export default function SobreRenato() {
  return (
    <section
      id="sobre-renato"
      className="relative py-20 sm:py-28 overflow-hidden"
    >
      {/* Background sutil + grid */}
      <div className="bg-grid-soft absolute inset-0 opacity-40" aria-hidden />
      <div
        className="absolute inset-0 opacity-50 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 60% at 80% 30%, rgba(245,188,44,0.10) 0%, transparent 70%)",
        }}
        aria-hidden
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-14 items-center">
          {/* Coluna foto — agora com foto REAL do Renato */}
          <Reveal className="lg:col-span-2">
            <div className="relative max-w-sm mx-auto lg:max-w-none">
              {/* Glow circular amarelo atrás (mais forte agora) */}
              <div
                className="absolute -inset-8 rounded-full blur-3xl opacity-70"
                style={{
                  background:
                    "radial-gradient(circle, rgba(245,188,44,0.40) 0%, rgba(255,139,61,0.20) 40%, transparent 75%)",
                }}
                aria-hidden
              />

              {/* Card com foto */}
              <div
                className="relative aspect-[4/5] rounded-3xl overflow-hidden"
                style={{
                  boxShadow:
                    "0 30px 80px -20px rgba(11,18,38,0.30), 0 0 0 1px rgba(245,188,44,0.20)",
                }}
              >
                <Image
                  src="/renato-edson.png"
                  alt="Renato Edson — Aura Energy"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 90vw, 40vw"
                  priority={false}
                />

                {/* Overlay sutil pra integrar com paleta brand + escurecer fundo da foto */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(11, 18, 38, 0) 0%, rgba(11, 18, 38, 0) 50%, rgba(11, 18, 38, 0.55) 100%)",
                  }}
                  aria-hidden
                />

                {/* Badge nome flutuante na parte inferior */}
                <div
                  className="absolute bottom-4 left-4 right-4 backdrop-blur-md rounded-2xl p-4"
                  style={{
                    background: "rgba(11, 18, 38, 0.85)",
                    border: "1px solid rgba(245, 188, 44, 0.40)",
                    boxShadow: "0 10px 30px -10px rgba(0,0,0,0.4)",
                  }}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-11 h-11 rounded-full bg-gradient-to-br from-[var(--aura-yellow)] to-[var(--aura-orange)] text-[var(--aura-blue-deep)] flex items-center justify-center flex-shrink-0">
                      <IconAward size={22} />
                    </span>
                    <div className="min-w-0">
                      <div className="font-bold text-white text-base sm:text-lg leading-tight">
                        Renato Edson
                      </div>
                      <div className="text-[11px] text-[var(--aura-yellow)] font-semibold flex items-center gap-1 mt-0.5">
                        <IconMapPin size={11} />
                        Especialista em energia solar · Palmas-TO
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card flutuante CREA — rotacionado, premium */}
              <Reveal delay={3}>
                <div
                  className="absolute -top-4 -right-4 sm:-top-5 sm:-right-5 hidden md:block premium-card p-3 rotate-3 hover:rotate-0 transition-transform"
                  style={{ background: "white" }}
                >
                  <div className="text-[9px] font-bold uppercase tracking-widest text-[var(--aura-text-muted)]">
                    Cadastrado em
                  </div>
                  <div className="text-base font-extrabold text-[var(--aura-blue)] flex items-center gap-1">
                    CREA-TO <IconCheck size={14} strokeWidth={3} className="text-[#10b981]" />
                  </div>
                </div>
              </Reveal>

              {/* Selo "fundador" no canto inferior esquerdo */}
              <Reveal delay={4}>
                <div
                  className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 hidden md:flex items-center gap-2 px-4 py-2 rounded-full -rotate-3 hover:rotate-0 transition-transform"
                  style={{
                    background:
                      "linear-gradient(135deg, var(--aura-blue) 0%, var(--aura-blue-deep) 100%)",
                    color: "white",
                    boxShadow: "0 10px 30px -8px rgba(27,58,135,0.40)",
                  }}
                >
                  <IconSparkles size={14} className="text-[var(--aura-yellow)]" />
                  <span className="text-xs font-bold uppercase tracking-widest">
                    Fundador
                  </span>
                </div>
              </Reveal>
            </div>
          </Reveal>

          {/* Coluna texto */}
          <div className="lg:col-span-3">
            <Reveal delay={1}>
              <span className="badge-blue mb-4 inline-flex">
                <IconShield size={14} />
                Conheça quem está por trás
              </span>
            </Reveal>

            <Reveal delay={2}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--aura-text)] mb-5 leading-tight">
                Solar é decisão de{" "}
                <span className="text-gradient-aura">25 anos</span>.
                <br />A confiança no instalador é{" "}
                <span className="text-[var(--aura-blue)]">metade da decisão</span>.
              </h2>
            </Reveal>

            <Reveal delay={3}>
              <div className="space-y-4 mb-7 text-[var(--aura-text-soft)] leading-relaxed">
                <p className="text-lg">
                  Eu sou <strong className="text-[var(--aura-blue)]">Renato Edson</strong>,
                  fundador da Aura Energy. Atuo com energia elétrica e solar
                  fotovoltaico em Palmas e região do Tocantins.
                </p>
                <p>
                  A Aura nasceu pra resolver um problema que vejo todo dia:
                  empresas vendem solar como produto, esquecem que é um serviço de
                  longo prazo. Cliente fica órfão depois da instalação. Comigo é
                  diferente — você tem meu WhatsApp pessoal e suporte direto pelos
                  próximos 25 anos.
                </p>
                <p
                  className="text-[15px] italic pl-4 border-l-2"
                  style={{
                    borderColor: "var(--aura-yellow)",
                    color: "var(--aura-text-soft)",
                  }}
                >
                  &ldquo;Quem instala solar tá tomando uma decisão que vale por
                  duas décadas. Meu trabalho é fazer essa decisão acontecer com
                  segurança técnica, sem letra miúda, e do meu lado.&rdquo;
                </p>
              </div>
            </Reveal>

            {/* Grid de valores */}
            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {VALORES.map((v, i) => (
                <Reveal
                  key={v.titulo}
                  delay={((i % 4) + 2) as 2 | 3 | 4 | 5}
                >
                  <div className="flex gap-3 p-4 rounded-2xl bg-[var(--aura-bg-soft)] border border-[var(--aura-border)] hover:border-[var(--aura-yellow)]/40 transition-colors">
                    <span className="w-9 h-9 rounded-lg bg-gradient-to-br from-[var(--aura-yellow)] to-[var(--aura-orange)] text-[var(--aura-blue-deep)] flex items-center justify-center flex-shrink-0">
                      {v.icon}
                    </span>
                    <div className="min-w-0">
                      <div className="font-bold text-[var(--aura-text)] mb-0.5 text-sm">
                        {v.titulo}
                      </div>
                      <div className="text-xs text-[var(--aura-text-muted)] leading-relaxed">
                        {v.desc}
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Stats rápidas */}
            <Reveal delay={5}>
              <div className="grid grid-cols-3 gap-3 mb-7 pt-6 border-t border-[var(--aura-border)]">
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-[var(--aura-blue)] counter-tabular leading-none mb-1">
                    25
                  </div>
                  <div className="text-[11px] text-[var(--aura-text-muted)] leading-tight">
                    anos de garantia
                    <br />em todo sistema
                  </div>
                </div>
                <div className="border-l border-r border-[var(--aura-border)] px-2">
                  <div className="text-2xl sm:text-3xl font-bold text-[var(--aura-yellow-deep)] counter-tabular leading-none mb-1">
                    48h
                  </div>
                  <div className="text-[11px] text-[var(--aura-text-muted)] leading-tight">
                    pra visita
                    <br />técnica gratuita
                  </div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-[#10b981] counter-tabular leading-none mb-1">
                    1
                  </div>
                  <div className="text-[11px] text-[var(--aura-text-muted)] leading-tight">
                    contato direto:
                    <br />o meu WhatsApp
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={6}>
              <a
                href={`https://wa.me/${RENATO_WHATSAPP}?text=${encodeURIComponent(
                  "Olá Renato! Vi sua LP da Aura Energy e quero conversar com você."
                )}`}
                target="_blank"
                rel="noopener"
                className="btn-yellow inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl text-base"
              >
                <IconWhatsApp size={20} />
                Conversar direto com o Renato
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
