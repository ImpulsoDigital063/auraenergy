import type { Metadata } from "next";
import LegalShell from "@/components/LegalShell";

export const metadata: Metadata = {
  title: "Termos de Uso · Aura Energy",
  description:
    "Termos e condições de uso do site da Aura Energy. Simulações são estimativas, não proposta comercial vinculante.",
};

const WHATSAPP = "https://wa.me/5563992706284";

export default function TermosPage() {
  return (
    <LegalShell titulo="Termos de Uso" atualizado="Junho de 2026">
      <p>
        Estes Termos regem o uso do site <strong>auraenergypalmas.com</strong> e
        seus subdomínios, mantido pela <strong>Aura Energy</strong> (operada por
        Renato Edson, em Palmas-TO). Ao navegar ou usar o site, você concorda com
        estes Termos. Se não concordar, não utilize o site.
      </p>

      <h2>1. O que o site oferece</h2>
      <p>
        O site apresenta informações sobre energia solar fotovoltaica, conteúdo
        educativo, uma calculadora de economia e canais para solicitar orçamento
        e visita técnica. O objetivo é informar e conectar você ao atendimento da
        Aura Energy.
      </p>

      <h2>2. Simulações são estimativas — não são proposta</h2>
      <p>
        Os valores de economia, geração, payback e investimento exibidos na
        calculadora e nas páginas são <strong>estimativas ilustrativas</strong>,
        calculadas com base em tarifa média da Energisa-TO, irradiação solar de
        Palmas e premissas técnicas gerais. <strong>Não constituem proposta
        comercial, contrato ou garantia de resultado.</strong> O orçamento real,
        o dimensionamento e os valores definitivos dependem de visita técnica e
        análise do seu caso específico.
      </p>

      <h2>3. Casos e imagens ilustrativos</h2>
      <p>
        Salvo indicação expressa de caso real, os depoimentos, perfis e imagens
        de instalações exibidos são <strong>ilustrativos</strong> e não retratam
        clientes específicos. Servem para demonstrar o tipo de projeto e
        resultado típico, não um compromisso de desempenho.
      </p>

      <h2>4. Contato e dados que você envia</h2>
      <p>
        Ao enviar seus dados em formulários, você declara que as informações são
        verdadeiras e autoriza o contato da Aura Energy. O tratamento dos seus
        dados segue a nossa{" "}
        <a href="/privacidade">Política de Privacidade</a>.
      </p>

      <h2>5. Propriedade intelectual</h2>
      <p>
        Marca, logotipo, textos, layout, imagens e demais conteúdos do site são
        protegidos e pertencem à Aura Energy ou a seus licenciadores. É proibido
        copiar, reproduzir ou usar comercialmente sem autorização prévia por
        escrito.
      </p>

      <h2>6. Uso permitido</h2>
      <p>Você concorda em não:</p>
      <ul>
        <li>Usar o site para fins ilícitos ou que prejudiquem terceiros;</li>
        <li>Tentar acessar áreas restritas, sistemas ou dados sem autorização;</li>
        <li>Inserir vírus, scripts ou sobrecarregar a infraestrutura do site;</li>
        <li>Reproduzir o conteúdo sem crédito ou autorização.</li>
      </ul>

      <h2>7. Links de terceiros</h2>
      <p>
        O site pode conter links para serviços de terceiros (como WhatsApp,
        formulários e parceiros financeiros). Não nos responsabilizamos pelo
        conteúdo, práticas ou políticas desses serviços.
      </p>

      <h2>8. Limitação de responsabilidade</h2>
      <p>
        O site é fornecido &ldquo;no estado em que se encontra&rdquo;. A Aura
        Energy se empenha em manter as informações corretas e atualizadas, mas
        não garante disponibilidade ininterrupta nem se responsabiliza por
        decisões tomadas exclusivamente com base nas estimativas do site, sem a
        devida análise técnica.
      </p>

      <h2>9. Alterações</h2>
      <p>
        Podemos atualizar estes Termos e o conteúdo do site a qualquer momento. A
        versão vigente é sempre a publicada nesta página, com a data de revisão no
        topo.
      </p>

      <h2>10. Lei aplicável e foro</h2>
      <p>
        Estes Termos são regidos pelas leis brasileiras. Fica eleito o foro da
        comarca de <strong>Palmas-TO</strong> para dirimir eventuais questões,
        com renúncia a qualquer outro, por mais privilegiado que seja.
      </p>

      <h2>11. Contato</h2>
      <p>
        Dúvidas sobre estes Termos? Fale com a gente pelo WhatsApp{" "}
        <a href={WHATSAPP}>(63) 9 9270-6284</a>.
      </p>
    </LegalShell>
  );
}
