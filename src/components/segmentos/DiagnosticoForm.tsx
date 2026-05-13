"use client";

import { useState } from "react";
import Image from "next/image";
import {
  diagnosticoDefaults,
  diagnosticoSchema,
  type DiagnosticoData,
  AMBICAO_OPCOES,
} from "@/lib/diagnostico-schema";
import {
  IconArrowRight,
  IconCheck,
  IconMapPin,
  IconSparkles,
} from "../Icons";

// =====================================================================
// DIAGNÓSTICO PRÉ-REUNIÃO RENATO — form mobile-first
// Renato responde no celular, envia, Eduardo recebe email Resend.
// =====================================================================

export default function DiagnosticoForm() {
  const [data, setData] = useState<DiagnosticoData>(diagnosticoDefaults);
  const [enviando, setEnviando] = useState(false);
  const [enviado, setEnviado] = useState(false);
  const [erro, setErro] = useState<string | null>(null);

  const update = <K extends keyof DiagnosticoData>(
    key: K,
    value: DiagnosticoData[K]
  ) => {
    setData((d) => ({ ...d, [key]: value }));
  };

  const toggleAmbicao = (opt: string) => {
    const atual = data.ambicaoTipo ?? [];
    update(
      "ambicaoTipo",
      atual.includes(opt) ? atual.filter((x) => x !== opt) : [...atual, opt]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErro(null);

    const parsed = diagnosticoSchema.safeParse(data);
    if (!parsed.success) {
      const firstError = parsed.error.issues[0];
      setErro(firstError?.message ?? "Confere os campos obrigatórios");
      return;
    }

    setEnviando(true);
    try {
      const res = await fetch("/api/diagnostico/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      if (!res.ok) {
        const json = await res.json().catch(() => ({}));
        throw new Error(json.error ?? "Erro ao enviar");
      }
      setEnviado(true);
    } catch (e) {
      setErro(e instanceof Error ? e.message : "Erro ao enviar");
    } finally {
      setEnviando(false);
    }
  };

  if (enviado) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 py-12">
        <div className="max-w-md text-center">
          <Image
            src="/logo-aura.png"
            alt="Aura Energy"
            width={88}
            height={88}
            className="mx-auto mb-6 object-contain"
          />
          <div
            className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center"
            style={{ background: "var(--aura-yellow-tint)" }}
          >
            <IconCheck
              size={32}
              strokeWidth={2.5}
              className="text-[var(--aura-yellow-deep)]"
            />
          </div>
          <h1 className="text-3xl font-extrabold text-[var(--aura-blue)] mb-3">
            Recebido!
          </h1>
          <p className="text-[var(--aura-text-soft)] leading-relaxed mb-8">
            Suas respostas chegaram pro Eduardo. Ele já vai ler tudo antes da
            reunião pra gente sair direto pra decisão. Obrigado!
          </p>
          <a
            href="/"
            className="inline-flex items-center gap-2 text-sm font-bold text-[var(--aura-blue)] hover:gap-3 transition-all"
          >
            Voltar pro site Aura
            <IconArrowRight size={16} />
          </a>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen pb-20 pt-6">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <header className="text-center mb-10">
          <Image
            src="/logo-aura.png"
            alt="Aura Energy"
            width={72}
            height={72}
            className="mx-auto mb-4 object-contain"
            priority
          />
          <span className="badge-blue mb-3 inline-flex">
            <IconSparkles size={14} />
            Diagnóstico pré-reunião
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[var(--aura-text)] leading-tight mb-3">
            Renato, antes da nossa{" "}
            <span className="text-gradient-aura">conversa</span>
          </h1>
          <p className="text-[var(--aura-text-soft)] leading-relaxed max-w-lg mx-auto">
            Responde aqui no celular o que conseguir. <strong>10-15 minutos.</strong>
            Pode pular pergunta que não souber/não quiser responder agora — a
            gente conversa na reunião. <br />
            <span className="text-[var(--aura-text-muted)] text-sm">
              Suas respostas vão direto pro Eduardo.
            </span>
          </p>
        </header>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Identificação */}
          <Card titulo="Quem está respondendo">
            <Field
              label="Seu nome"
              required
              value={data.nome}
              onChange={(v) => update("nome", v)}
              placeholder="Renato Edson"
            />
            <Field
              label="WhatsApp"
              required
              value={data.whatsapp}
              onChange={(v) => update("whatsapp", v)}
              placeholder="(63) 9 9268-8852"
            />
          </Card>

          {/* Operação real */}
          <Card
            titulo="🔧 Sua operação real"
            subtitulo="Pode ser número aproximado. Se não souber, deixa em branco."
          >
            <div className="grid grid-cols-2 gap-3">
              <Field
                label="Sistemas residenciais entregues nos últimos 12 meses"
                value={data.sistemasUltimo12mResidencial ?? ""}
                onChange={(v) => update("sistemasUltimo12mResidencial", v)}
                placeholder="Ex: 30, ~50, n/d"
                small
              />
              <Field
                label="Comerciais nos últimos 12 meses"
                value={data.sistemasUltimo12mComercial ?? ""}
                onChange={(v) => update("sistemasUltimo12mComercial", v)}
                placeholder="Ex: 5, alguns"
                small
              />
              <Field
                label="Industriais (>30 kWp)"
                value={data.sistemasUltimo12mIndustrial ?? ""}
                onChange={(v) => update("sistemasUltimo12mIndustrial", v)}
                placeholder="Ex: 1, nenhum, 2"
                small
              />
              <Field
                label="Rurais / fazendas"
                value={data.sistemasUltimo12mRural ?? ""}
                onChange={(v) => update("sistemasUltimo12mRural", v)}
                placeholder="Ex: 0, 1 pivô, 2"
                small
              />
            </div>

            <Field
              label="Qual o MAIOR projeto que você assinou como engenheiro responsável?"
              required
              textarea
              value={data.maiorProjeto}
              onChange={(v) => update("maiorProjeto", v)}
              placeholder="kWp + cliente + cidade. Ex: 'Sistema 45 kWp · Frigorífico XYZ · Paraíso do Tocantins · 2024'"
            />

            <Field
              label="Você tem AGORA algum projeto industrial/comercial >50 kWp ou rural com pivô/granja em andamento?"
              textarea
              value={data.carteiraB2BAtual ?? ""}
              onChange={(v) => update("carteiraB2BAtual", v)}
              placeholder="Quem, onde, em que estágio (visita técnica, proposta, fechado, em obra, entregue)"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Field
                label="Seu CREA-TO (número)"
                value={data.creaNumero ?? ""}
                onChange={(v) => update("creaNumero", v)}
                placeholder="Ex: 12345-D/TO"
                small
              />
              <Field
                label="Tem ART pública que a gente possa citar?"
                value={data.artPublica ?? ""}
                onChange={(v) => update("artPublica", v)}
                placeholder="Sim / não / depende do cliente"
                small
              />
            </div>
          </Card>

          {/* Cases e prova social */}
          <Card
            titulo="📸 Cases e prova social"
            subtitulo="Cliente nominado vale ouro pra LP."
          >
            <Field
              label="Quais clientes Brasfrio (residencial e comercial) toparia ligar e pedir autorização LGPD pra usar nome + foto + números?"
              textarea
              value={data.clientesAutorizam ?? ""}
              onChange={(v) => update("clientesAutorizam", v)}
              placeholder="Ex: BAKA Lanches, Triedro, Bom Sabor, 906 Bar, família Ferreira..."
            />
            <Field
              label="Algum cliente toparia gravar depoimento em vídeo de 30-60s? Mesmo no celular, sentado na fachada do negócio?"
              textarea
              value={data.depoimentoVideo ?? ""}
              onChange={(v) => update("depoimentoVideo", v)}
              placeholder="Quem topa? Você acha que conseguiria 1-3 vídeos em 30 dias?"
            />
          </Card>

          {/* Ambição e investimento */}
          <Card
            titulo="🎯 Onde você quer chegar"
            subtitulo="Define o foco do plano — volume residencial, B2B mid-high ou misto."
          >
            <Field
              label="Em 12 meses, qual é o cenário de sucesso pra você?"
              required
              textarea
              value={data.cenarioSucesso12m}
              onChange={(v) => update("cenarioSucesso12m", v)}
              placeholder="Ex: 'Volume residencial dobrado + 2 indústrias grandes fechadas' ou 'Operação rural decolando com Pronaf'"
            />

            <div>
              <label className="block text-sm font-semibold text-[var(--aura-text-soft)] mb-2">
                Que tipos de crescimento te interessam? (marca quantas quiser)
              </label>
              <div className="space-y-2">
                {AMBICAO_OPCOES.map((opt) => (
                  <label
                    key={opt}
                    className="flex items-center gap-3 p-3 rounded-xl border-2 cursor-pointer transition-all"
                    style={{
                      borderColor: (data.ambicaoTipo ?? []).includes(opt)
                        ? "var(--aura-yellow-deep)"
                        : "var(--aura-border)",
                      background: (data.ambicaoTipo ?? []).includes(opt)
                        ? "var(--aura-yellow-tint)"
                        : "white",
                    }}
                  >
                    <input
                      type="checkbox"
                      checked={(data.ambicaoTipo ?? []).includes(opt)}
                      onChange={() => toggleAmbicao(opt)}
                      className="w-5 h-5 accent-[var(--aura-yellow-deep)]"
                    />
                    <span className="text-sm font-semibold text-[var(--aura-text)]">
                      {opt}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            <Field
              label="Quanto você tá disposto a investir por mês em mídia (Meta + LinkedIn + Google Ads)?"
              value={data.investimentoMidiaMensal ?? ""}
              onChange={(v) => update("investimentoMidiaMensal", v)}
              placeholder="Ex: R$ 1.500-3.000/mês · ou 'depende do retorno'"
            />
          </Card>

          {/* Equipe */}
          <Card titulo="👷 Equipe e estrutura">
            <Field
              label="Equipe técnica é sua ou terceirizada? Quantas pessoas fixas?"
              textarea
              value={data.equipeTecnica ?? ""}
              onChange={(v) => update("equipeTecnica", v)}
              placeholder="Ex: '3 instaladores fixos + auxiliar de obra freelance'"
            />
            <Field
              label="Tem drone? Quem fotografa as obras?"
              value={data.drone ?? ""}
              onChange={(v) => update("drone", v)}
              placeholder="Ex: 'Drone próprio Mavic Mini · eu mesmo gravo'"
            />
            <Field
              label="Quais marcas você trabalha hoje?"
              textarea
              value={data.marcasTrabalha ?? ""}
              onChange={(v) => update("marcasTrabalha", v)}
              placeholder="Painel: Trina, Canadian, Jinko... · Inversor: Solis, Huawei, Growatt..."
            />
          </Card>

          {/* Operacional digital */}
          <Card titulo="📱 Operacional digital">
            <Field
              label="Quando chega lead no WhatsApp Brasfrio, quem responde? Em quanto tempo?"
              value={data.whatsappResponde ?? ""}
              onChange={(v) => update("whatsappResponde", v)}
              placeholder="Ex: 'Eu mesmo, em 30min-1h' · ou 'Meu sócio, depende do dia'"
            />
            <Field
              label="Você usa CRM, planilha ou só WhatsApp?"
              value={data.crmOuPlanilha ?? ""}
              onChange={(v) => update("crmOuPlanilha", v)}
              placeholder="Ex: 'Planilha Excel + WhatsApp' · 'Pipefy' · 'Tudo no chat'"
            />
          </Card>

          {/* Programa Palmas Solar + Pronaf */}
          <Card titulo="🏛 IPTU verde + Pronaf">
            <Field
              label="Já protocolou desconto IPTU pra cliente Brasfrio? Conhece o processo na Secretaria de Finanças?"
              textarea
              value={data.iptuExperiencia ?? ""}
              onChange={(v) => update("iptuExperiencia", v)}
              placeholder="Sim/não · se sim, quantas vezes? Tem contato lá?"
            />
            <Field
              label="Já fez projeto financiado por Pronaf? Tem parceria com Sicredi/BB/cooperativa rural?"
              textarea
              value={data.pronafExperiencia ?? ""}
              onChange={(v) => update("pronafExperiencia", v)}
              placeholder="Sim/não · com qual banco? Quantos projetos?"
            />
          </Card>

          {/* Concorrência */}
          <Card titulo="⚔️ Concorrência local">
            <Field
              label="Você já perdeu cliente pra Unità, Soluthi, Palmas Energia Solar ou Capital? Pra qual perde mais?"
              textarea
              value={data.perdeMaisPra ?? ""}
              onChange={(v) => update("perdeMaisPra", v)}
              placeholder="Conta só o que sentir vontade — quem perde mais e por quê (preço? prazo? marketing?)"
            />
            <Field
              label="O que faz VOCÊ fechar a venda quando você fecha?"
              textarea
              value={data.diferencialQueFecha ?? ""}
              onChange={(v) => update("diferencialQueFecha", v)}
              placeholder="Autoridade técnica? Atendimento? Preço? Relacionamento? Outra coisa?"
            />
          </Card>

          {/* Info-produto */}
          <Card
            titulo="🎬 Info-produto FASE 2 (12-18 meses)"
            subtitulo="Decisão estratégica — só pensa, não precisa cravar agora."
          >
            <Field
              label="Em 12-18 meses, faz sentido pra você gravar um curso B2B no estilo do que a Tenda fez (mas focado em decisor industrial/rural)? Você topa ser o rosto?"
              textarea
              value={data.infoProdutoTopa ?? ""}
              onChange={(v) => update("infoProdutoTopa", v)}
              placeholder="Sim, com calma · Não, não me vejo · Talvez · Outra ideia que tenho..."
            />
            <Field
              label="Pensou em algum tema/foco específico pra info-produto, ou tá em aberto?"
              textarea
              value={data.infoProdutoIdeia ?? ""}
              onChange={(v) => update("infoProdutoIdeia", v)}
              placeholder="Pode ser ideia solta. Ex: 'curso pra empresários sobre solar B2B' · 'mentoria pra produtor rural'"
            />
          </Card>

          {/* Restrições */}
          <Card titulo="🚫 Algo que a Aura NÃO deve fazer?">
            <Field
              label="Tem alguma frustração com a Brasfrio que a Aura precisa NÃO repetir? Regra inegociável?"
              textarea
              value={data.restricoes ?? ""}
              onChange={(v) => update("restricoes", v)}
              placeholder="Ex: 'Não quero atender madrugada' · 'Nunca trabalhar com [marca X]' · 'Sem associação política'"
            />
          </Card>

          {erro && (
            <div
              className="rounded-xl p-4 text-sm"
              style={{
                background: "rgba(255, 107, 71, 0.1)",
                color: "var(--aura-urgent)",
                border: "1px solid rgba(255, 107, 71, 0.3)",
              }}
            >
              ⚠️ {erro}
            </div>
          )}

          <button
            type="submit"
            disabled={enviando}
            className="btn-yellow btn-pulse w-full inline-flex items-center justify-center gap-3 px-6 py-4 rounded-2xl text-base sm:text-lg disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {enviando ? (
              "Enviando..."
            ) : (
              <>
                <IconCheck size={22} strokeWidth={2.5} />
                Enviar pro Eduardo
              </>
            )}
          </button>

          <p className="text-center text-xs text-[var(--aura-text-faded)] mt-2 leading-relaxed">
            Suas respostas vão direto pro email do Eduardo · não compartilhamos com ninguém
          </p>
        </form>
      </div>
    </main>
  );
}

// =====================================================================

function Card({
  titulo,
  subtitulo,
  children,
}: {
  titulo: string;
  subtitulo?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className="rounded-2xl p-5 sm:p-6 space-y-4"
      style={{
        background: "var(--aura-bg-card)",
        border: "1px solid var(--aura-border)",
        boxShadow: "var(--shadow-sm)",
      }}
    >
      <div>
        <h2 className="text-lg sm:text-xl font-extrabold text-[var(--aura-blue)] leading-tight">
          {titulo}
        </h2>
        {subtitulo && (
          <p className="text-xs sm:text-sm text-[var(--aura-text-muted)] mt-1">
            {subtitulo}
          </p>
        )}
      </div>
      {children}
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  textarea,
  required,
  small,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  textarea?: boolean;
  required?: boolean;
  small?: boolean;
}) {
  const Component = textarea ? "textarea" : "input";
  return (
    <label className="block">
      <span
        className={`block font-semibold text-[var(--aura-text-soft)] mb-1.5 ${
          small ? "text-xs" : "text-sm"
        }`}
      >
        {label}
        {required && <span className="text-[var(--aura-orange)] ml-1">*</span>}
      </span>
      <Component
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={textarea ? 3 : undefined}
        className="w-full px-3.5 py-3 rounded-xl text-[15px] text-[var(--aura-text)] placeholder:text-[var(--aura-text-faded)] focus:outline-none transition-all"
        style={{
          background: "var(--aura-bg-soft)",
          border: "1px solid var(--aura-border)",
          fontFamily: "inherit",
          resize: textarea ? "vertical" : undefined,
        }}
      />
    </label>
  );
}
