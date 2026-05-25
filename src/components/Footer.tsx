import Image from "next/image";
import { IconMapPin, IconWhatsApp } from "./Icons";

export default function Footer() {
  return (
    <footer className="bg-[var(--aura-blue-deep)] text-white pt-16 pb-8 mt-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Coluna marca */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logo-aura-perfil.png"
                alt="Aura Energy"
                width={56}
                height={56}
                className="w-14 h-14 object-contain rounded-xl bg-white/5 p-1"
              />
              <div>
                <div className="font-bold text-xl leading-tight">Aura Energy</div>
                <div className="text-[11px] uppercase tracking-widest text-white/60 font-semibold">
                  Energia Elétrica Especializada
                </div>
              </div>
            </div>
            <p className="text-sm text-white/70 leading-relaxed mb-5 max-w-xs">
              Sistemas solares fotovoltaicos com homologação Energisa,
              equipamentos Tier 1 e atendimento direto com o Renato Edson.
            </p>
            <a
              href="https://wa.me/5563992706284?text=Ol%C3%A1%20Renato%2C%20vim%20pela%20LP%20da%20Aura%20Energy."
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--aura-yellow)] hover:text-[var(--aura-yellow-bright)] transition-colors"
            >
              <IconWhatsApp size={18} />
              (63) 9 9270-6284
            </a>
          </div>

          {/* Coluna navegação */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white/50 mb-4">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                ["#simulador", "Simulador de economia"],
                ["#como-funciona", "Como funciona"],
                ["#diferenciais", "Diferenciais"],
                ["#galeria", "Instalações"],
                ["#recursos", "Recursos / Blog"],
                ["#faq", "Dúvidas frequentes"],
              ].map(([href, label]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-white/75 hover:text-[var(--aura-yellow)] transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna contato */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white/50 mb-4">
              Contato
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3 text-white/75">
                <IconWhatsApp size={18} className="text-[var(--aura-yellow)] mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-white">WhatsApp</div>
                  <a
                    href="https://wa.me/5563992706284"
                    target="_blank"
                    rel="noopener"
                    className="hover:text-[var(--aura-yellow)] transition-colors"
                  >
                    (63) 9 9270-6284
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 text-white/75">
                <IconMapPin size={18} className="text-[var(--aura-yellow)] mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-white">Atendemos</div>
                  <span>Palmas-TO e região</span>
                </div>
              </li>
              <li className="text-white/60 text-xs leading-relaxed mt-4">
                <strong className="text-white">Renato Edson</strong>
                <br />
                Especialista em energia solar
              </li>
            </ul>
          </div>
        </div>

        <div className="divider-glow opacity-40 mb-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <div>
            © {new Date().getFullYear()} Aura Energy · Todos os direitos reservados
          </div>
          <div className="flex items-center gap-2">
            Desenvolvido por{" "}
            <a
              href="https://impulsodigital063.com"
              target="_blank"
              rel="noopener"
              className="font-semibold text-white/80 hover:text-[var(--aura-yellow)] transition-colors"
            >
              Impulso Digital
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
