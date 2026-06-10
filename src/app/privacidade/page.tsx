import type { Metadata } from "next";
import LegalShell from "@/components/LegalShell";

export const metadata: Metadata = {
  title: "Política de Privacidade · Aura Energy",
  description:
    "Como a Aura Energy coleta, usa e protege seus dados pessoais, em conformidade com a LGPD (Lei 13.709/2018).",
};

const WHATSAPP = "https://wa.me/5563992706284";

export default function PrivacidadePage() {
  return (
    <LegalShell titulo="Política de Privacidade" atualizado="Junho de 2026">
      <p>
        Esta Política descreve como a <strong>Aura Energy</strong> (operada por
        Renato Edson, engenheiro responsável, em Palmas-TO) coleta, usa,
        armazena e protege os dados pessoais de quem acessa o site{" "}
        <strong>auraenergypalmas.com</strong> e seus subdomínios, em conformidade
        com a Lei Geral de Proteção de Dados — <strong>LGPD (Lei nº 13.709/2018)</strong>.
        Ao usar o site ou enviar seus dados, você concorda com as práticas aqui
        descritas.
      </p>

      <h2>1. Quem é o controlador dos dados</h2>
      <p>
        A Aura Energy é a controladora dos dados coletados neste site. Para
        qualquer assunto relacionado a privacidade ou aos seus dados, fale com a
        gente pelo WhatsApp <a href={WHATSAPP}>(63) 9 9270-6284</a>.
      </p>

      <h2>2. Quais dados coletamos</h2>
      <ul>
        <li>
          <strong>Dados que você informa:</strong> nome, telefone/WhatsApp,
          e-mail (quando preenchido), bairro/cidade, valor da conta de luz e
          informações sobre o imóvel ou negócio que você fornece nos formulários
          e na calculadora de economia.
        </li>
        <li>
          <strong>Dados de navegação:</strong> coletados automaticamente por
          cookies e ferramentas de análise — páginas visitadas, tempo de
          permanência, origem do acesso, tipo de dispositivo e dados aproximados
          de localização (cidade/região).
        </li>
      </ul>
      <p>
        Não coletamos dados sensíveis (como saúde, biometria ou convicções) e
        não solicitamos dados de pagamento pelo site.
      </p>

      <h2>3. Para que usamos seus dados</h2>
      <ul>
        <li>Calcular sua estimativa de economia e dimensionar o sistema solar;</li>
        <li>Entrar em contato para orçamento, visita técnica e atendimento;</li>
        <li>Responder dúvidas e dar suporte;</li>
        <li>Melhorar o site, os conteúdos e a experiência de navegação;</li>
        <li>
          Mensurar e otimizar campanhas de marketing (inclusive remarketing),
          quando aplicável.
        </li>
      </ul>

      <h2>4. Base legal</h2>
      <p>
        Tratamos seus dados com base no seu <strong>consentimento</strong> (ao
        enviar um formulário ou aceitar cookies), no{" "}
        <strong>legítimo interesse</strong> (para melhorar o site e mensurar
        campanhas) e nos <strong>procedimentos preliminares de contrato</strong>{" "}
        (quando você pede um orçamento), conforme o art. 7º da LGPD.
      </p>

      <h2>5. Com quem compartilhamos</h2>
      <p>
        A Aura Energy <strong>não vende</strong> seus dados. Compartilhamos
        apenas com prestadores de serviço que operam o site e o atendimento,
        atuando como operadores de dados:
      </p>
      <ul>
        <li><strong>Tally</strong> — formulários de orçamento;</li>
        <li><strong>Google (Analytics)</strong> — análise de tráfego;</li>
        <li><strong>Meta (Pixel)</strong> — mensuração de anúncios, quando ativo;</li>
        <li><strong>Vercel</strong> — hospedagem do site;</li>
        <li>
          Eventuais parceiros financeiros, somente quando você solicita uma
          simulação de financiamento.
        </li>
      </ul>
      <p>
        Também podemos divulgar dados se exigido por lei ou ordem judicial.
      </p>

      <h2>6. Cookies e rastreamento</h2>
      <p>
        Usamos cookies próprios e de terceiros (Google Analytics e Meta Pixel)
        para entender como o site é usado e melhorar nossas campanhas. Você pode
        bloquear ou apagar cookies nas configurações do seu navegador — algumas
        funções do site podem ficar limitadas.
      </p>

      <h2>7. Por quanto tempo guardamos</h2>
      <p>
        Mantemos seus dados pelo tempo necessário para o atendimento e enquanto
        houver relação comercial, ou pelo prazo exigido por obrigações legais.
        Depois disso, os dados são eliminados ou anonimizados.
      </p>

      <h2>8. Segurança</h2>
      <p>
        Adotamos medidas técnicas e organizacionais razoáveis para proteger seus
        dados contra acesso não autorizado, perda ou uso indevido. Nenhum sistema
        é 100% infalível, mas tratamos seus dados com responsabilidade.
      </p>

      <h2>9. Seus direitos (LGPD)</h2>
      <p>Você pode, a qualquer momento, solicitar:</p>
      <ul>
        <li>Confirmação de que tratamos seus dados e acesso a eles;</li>
        <li>Correção de dados incompletos ou desatualizados;</li>
        <li>Anonimização, bloqueio ou eliminação de dados desnecessários;</li>
        <li>Portabilidade dos dados;</li>
        <li>Informação sobre com quem compartilhamos;</li>
        <li>Revogação do consentimento.</li>
      </ul>

      <h2>10. Como exercer seus direitos</h2>
      <p>
        É só falar com a gente pelo WhatsApp{" "}
        <a href={WHATSAPP}>(63) 9 9270-6284</a>. Respondemos sua solicitação no
        menor prazo possível, conforme a LGPD.
      </p>

      <h2>11. Alterações nesta Política</h2>
      <p>
        Podemos atualizar esta Política periodicamente. A data da última revisão
        fica sempre indicada no topo desta página.
      </p>
    </LegalShell>
  );
}
