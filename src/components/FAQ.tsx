import Reveal from "./Reveal";
import { IconChevronDown } from "./Icons";
import type { Pergunta } from "./segmentos/faq-perguntas";

export const PERGUNTAS_DEFAULT = [
  {
    q: "Quanto custa instalar energia solar em Palmas?",
    a: "Em Palmas, sistemas residenciais Tier 1 (Astrobergy/DAH Solar preferidos · também Trina/JA/Jinko + Hoymiles/Solis/Huawei) saem a partir de: 3 kWp R$ 7 mil, 5 kWp R$ 15 mil, 8 kWp R$ 18 mil, 10 kWp R$ 20,5 mil. O valor inclui painéis, inversor, estrutura, projeto, ART e homologação na Energisa. Valor final calculado sob medida na visita técnica gratuita.",
  },
  {
    q: "Quanto tempo leva pra instalar e legalizar?",
    a: "Sistema residencial pequeno (microgeração até 75 kW) é homologado pela Energisa Tocantins em até 15 dias úteis. Instalação leva 1 a 3 dias. Total da assinatura ao sistema gerando: tipicamente 25 a 40 dias.",
  },
  {
    q: "A Lei 14.300 (Marco Legal da GD) ainda permite economizar?",
    a: "Sim. Em 2026 o Fio B subiu pra 60%, mas a economia ainda fica entre 74% e 87% pra sistemas novos. Em Palmas, o payback continua entre 4 e 6 anos por causa da alta irradiação solar (5,9 kWh/m²/dia) e da tarifa cara da Energisa (~R$ 0,95/kWh). Quem instalou ANTES de 7/jan/2023 tem direito adquirido até 2045 e não paga Fio B.",
  },
  {
    q: "O sistema funciona em dias nublados ou de chuva?",
    a: "Funciona, mas com geração reduzida. Em dia totalmente nublado a geração cai 60-90%. A boa notícia é que o sistema é conectado à rede da Energisa: nos dias bons você gera SOBRA e \"empresta\" pra rede, nos dias ruins você \"resgata\" essa sobra. No fim do mês as contas batem.",
  },
  {
    q: "E se faltar energia da concessionária?",
    a: "Sistema on-grid (mais comum) desliga junto com a rede por segurança (norma da Energisa). Se você quer ter energia mesmo no apagão, precisa adicionar baterias (sistema híbrido) — orçamento sob consulta.",
  },
  {
    q: "Como funciona o financiamento?",
    a: "Trabalhamos com 6 bancos parceiros: BV Financeira (preferido), Solfácil, Sicredi, Sicoob, Santander e BB Programa Agro Energia. Prazo até 120 meses · análise rápida. Em muitos casos a parcela do financiamento fica menor que a conta atual de luz · simulação sob medida na visita técnica.",
  },
  {
    q: "Posso dar entrada via PIX?",
    a: "Sim. Aura recomenda PIX como entrada parcial · reduz o valor financiado e ajuda a aprovação. Você combina o valor da entrada com o Renato antes da homologação, paga via PIX, e o financiamento processa o restante via banco parceiro.",
  },
  {
    q: "Qual a manutenção do sistema?",
    a: "Mínima. Limpeza dos painéis 1x por ano (em Palmas é menos crítico — vento ajuda). Verificação do inversor de tempos em tempos. Painéis duram 25-30 anos. Inversor uma vez vai trocar (custa R$ 3-5 mil em 12-15 anos). Tudo monitorado pelo app no celular.",
  },
  {
    q: "Como sei que o sistema é legalizado?",
    a: "Todo projeto Aura Energy tem ART do engenheiro eletricista, parecer de acesso aprovado pela Energisa Tocantins, certificados INMETRO dos painéis e inversor, e troca formal do medidor por bidirecional. Documentação completa entregue ao cliente.",
  },
  {
    q: "E se eu vender o imóvel?",
    a: "O sistema vai junto com o imóvel (é equipamento fixado). Estudos do Mercado Imobiliário (CRECI) mostram valorização de 5-10% em residências com energia solar. Você recupera todo o investimento — e mais.",
  },
];

type FAQProps = {
  perguntas?: Pergunta[];
  titulo?: React.ReactNode;
  subtitulo?: string;
};

export default function FAQ({
  perguntas = PERGUNTAS_DEFAULT,
  titulo,
  subtitulo = "Respostas diretas, sem enrolação técnica.",
}: FAQProps) {
  const PERGUNTAS = perguntas;

  // NÃO injeta JSON-LD FAQPage aqui · SchemaOrgAura já cuida disso pra
  // cada LP (recebe faqs como prop). Injeção dupla causaria warning em
  // Rich Results Test do Google.

  return (
    <section
      id="faq"
      className="py-20 sm:py-28 section-soft border-t border-[var(--aura-border)] overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-12">
            <span className="badge-blue mb-4 inline-flex">Dúvidas frequentes</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[var(--aura-text)] mb-4">
              {titulo ?? (
                <>
                  Perguntas que <span className="text-gradient-aura">todo mundo faz</span>
                  <br />
                  antes de fechar.
                </>
              )}
            </h2>
            <p className="text-lg text-[var(--aura-text-muted)]">
              {subtitulo}
            </p>
          </div>
        </Reveal>

        <div className="space-y-3">
          {PERGUNTAS.map((p, i) => (
            <Reveal key={p.q} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
              <details className="faq-item">
                <summary>
                  <span>{p.q}</span>
                  <span className="chevron">
                    <IconChevronDown size={20} />
                  </span>
                </summary>
                <div className="faq-body">{p.a}</div>
              </details>
            </Reveal>
          ))}
        </div>

        <Reveal delay={4}>
          <p className="text-center text-sm text-[var(--aura-text-muted)] mt-10">
            Sua dúvida não está aqui?{" "}
            <a
              href="https://wa.me/5563992706284?text=Ol%C3%A1%20Renato%2C%20tenho%20uma%20d%C3%BAvida%20sobre%20energia%20solar."
              target="_blank"
              rel="noopener"
              className="font-semibold text-[var(--aura-blue)] hover:text-[var(--aura-yellow-deep)] transition-colors underline underline-offset-4"
            >
              Pergunte no WhatsApp →
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
