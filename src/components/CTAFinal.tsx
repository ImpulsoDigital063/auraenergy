"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import { IconArrowRight, IconCheck, IconWhatsApp } from "./Icons";

const RENATO_WHATSAPP = "5563992688852";

export default function CTAFinal() {
  const [nome, setNome] = useState("");
  const [whats, setWhats] = useState("");
  const [conta, setConta] = useState("");
  const [bairro, setBairro] = useState("");

  const podeEnviar = nome.trim().length >= 2 && whats.trim().length >= 8;

  const enviar = () => {
    if (!podeEnviar) return;

    const texto =
      `Olá Renato! Quero agendar visita técnica gratuita.\n\n` +
      `*Nome:* ${nome}\n` +
      `*WhatsApp:* ${whats}\n` +
      `*Bairro:* ${bairro || "—"}\n` +
      `*Valor da conta de luz:* ${conta || "—"}\n\n` +
      `Vim pela LP da Aura Energy.`;

    const url = `https://wa.me/${RENATO_WHATSAPP}?text=${encodeURIComponent(texto)}`;
    window.open(url, "_blank", "noopener");
  };

  return (
    <section className="py-20 sm:py-28 overflow-hidden relative">
      {/* Glow background */}
      <div
        className="absolute inset-0 opacity-60 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(245,188,44,0.18) 0%, transparent 70%)",
        }}
        aria-hidden
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-10">
            <span className="badge-yellow mb-4 inline-flex">Próximo passo</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[var(--aura-text)] mb-4">
              Agende sua visita
              <br />
              <span className="text-gradient-aura">técnica gratuita.</span>
            </h2>
            <p className="text-lg text-[var(--aura-text-muted)]">
              Sem compromisso. Sem custo. Você recebe o orçamento exato em até 48h.
            </p>
          </div>
        </Reveal>

        <Reveal delay={1}>
          <div className="glow-border">
            <div className="glow-border-inner p-6 sm:p-10">
              <div className="grid sm:grid-cols-2 gap-4 mb-5">
                <Field label="Seu nome">
                  <input
                    type="text"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    placeholder="Como podemos te chamar?"
                    className="form-input"
                  />
                </Field>

                <Field label="WhatsApp">
                  <input
                    type="tel"
                    value={whats}
                    onChange={(e) => setWhats(e.target.value)}
                    placeholder="(63) 9 0000-0000"
                    className="form-input"
                  />
                </Field>

                <Field label="Bairro / Cidade">
                  <input
                    type="text"
                    value={bairro}
                    onChange={(e) => setBairro(e.target.value)}
                    placeholder="Ex: Plano Diretor Sul, Palmas"
                    className="form-input"
                  />
                </Field>

                <Field label="Conta de luz aproximada">
                  <input
                    type="text"
                    value={conta}
                    onChange={(e) => setConta(e.target.value)}
                    placeholder="Ex: R$ 600/mês"
                    className="form-input"
                  />
                </Field>
              </div>

              <button
                type="button"
                onClick={enviar}
                disabled={!podeEnviar}
                className={`btn-yellow ${
                  podeEnviar ? "btn-pulse" : "opacity-60 cursor-not-allowed"
                } w-full inline-flex items-center justify-center gap-3 px-6 py-4 rounded-2xl text-base sm:text-lg`}
              >
                <IconWhatsApp size={22} />
                Enviar pelo WhatsApp
                <IconArrowRight size={20} />
              </button>

              <p className="text-xs text-[var(--aura-text-muted)] mt-4 text-center leading-relaxed">
                Ao enviar, você abre uma conversa com o Renato no WhatsApp com
                seus dados preenchidos. Atendimento de seg-sex 8h-18h, sáb 8h-12h.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={2}>
          <div className="grid sm:grid-cols-3 gap-4 mt-10">
            {[
              "Visita técnica gratuita",
              "Orçamento sem compromisso",
              "Atendimento direto com o Renato",
            ].map((t) => (
              <div
                key={t}
                className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white/60 border border-[var(--aura-border)]"
              >
                <span className="w-7 h-7 rounded-full bg-gradient-to-br from-[#22c55e] to-[#10b981] text-white flex items-center justify-center flex-shrink-0">
                  <IconCheck size={14} />
                </span>
                <span className="text-sm font-semibold text-[var(--aura-text)]">{t}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      {/* Estilos do form input */}
      <style>{`
        .form-input {
          width: 100%;
          padding: 0.85rem 1rem;
          background: var(--aura-bg-soft);
          border: 1px solid var(--aura-border);
          border-radius: 12px;
          font-size: 16px;
          color: var(--aura-text);
          transition: all 0.2s ease;
          outline: none;
        }
        .form-input::placeholder {
          color: var(--aura-text-faded);
        }
        .form-input:focus {
          background: white;
          border-color: var(--aura-yellow);
          box-shadow: 0 0 0 4px rgba(245, 188, 44, 0.12);
        }
      `}</style>
    </section>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="block text-xs font-semibold uppercase tracking-wider text-[var(--aura-text-muted)] mb-2">
        {label}
      </span>
      {children}
    </label>
  );
}
