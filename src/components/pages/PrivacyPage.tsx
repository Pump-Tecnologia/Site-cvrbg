import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

/**
 * Política de Privacidade do ConectaPet.
 *
 * O texto-fonte mora no monorepo da plataforma, em `docs/PRIVACIDADE.md`.
 * Esta página é a cópia pública que a App Store e o app apontam — quando o
 * texto mudar lá, mudar aqui e atualizar a data.
 */

const ATUALIZADO_EM = "15 de agosto de 2026";
const VERSAO = "1.0";
const EMAIL_DPO = "privacidade@grupocvrbg.com.br";
const RAZAO_SOCIAL = "Clínica Veterinária Ricardo LTDA";
const CNPJ = "06.276.996/0001-49";

type Linha = readonly [string, string];

function H2({ children }: { children: ReactNode }) {
  return (
    <h2 className="mt-14 scroll-mt-28 font-display text-2xl font-semibold leading-tight tracking-[-0.01em] text-brand-brown first:mt-0">
      {children}
    </h2>
  );
}

function P({ children }: { children: ReactNode }) {
  return <p className="mt-4 font-sans text-[15.5px] font-light leading-7 text-brand-muted">{children}</p>;
}

function Strong({ children }: { children: ReactNode }) {
  return <strong className="font-medium text-brand-brown">{children}</strong>;
}

function Tabela({ cabecalho, linhas }: { cabecalho: Linha; linhas: readonly Linha[] }) {
  return (
    <div className="mt-6 overflow-x-auto rounded-2xl border border-brand-brown/10">
      <table className="w-full min-w-[520px] border-collapse text-left font-sans text-[14.5px] leading-6">
        <thead className="bg-brand-cream-deep/70">
          <tr>
            {cabecalho.map((c) => (
              <th key={c} className="px-4 py-3 font-medium text-brand-brown">
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {linhas.map(([a, b]) => (
            <tr key={a} className="border-t border-brand-brown/10 align-top">
              <td className="px-4 py-3 font-medium text-brand-brown">{a}</td>
              <td className="px-4 py-3 font-light text-brand-muted">{b}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Lista({ itens }: { itens: readonly ReactNode[] }) {
  return (
    <ul className="mt-4 space-y-2.5 font-sans text-[15.5px] font-light leading-7 text-brand-muted">
      {itens.map((item, i) => (
        <li key={i} className="flex gap-3">
          <span className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-brand-orange" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

const DADOS_CADASTRO: readonly Linha[] = [
  ["Nome completo", "Identificar o tutor no atendimento e nos documentos"],
  [
    "CPF",
    "Chave única do cadastro; limita o número de pets por pessoa em cada evento; consta na Ficha de Controle exigida pelo CRMV e no registro do animal junto ao ente público",
  ],
  ["E-mail", "Login, recuperação de senha e comunicação sobre suas inscrições"],
  ["Celular", "Contato no dia do evento"],
  ["Data de nascimento", "Confirmar que você tem 18 anos ou mais — condição para inscrever um pet"],
  ["Gênero", "Campo do Termo de Autorização de procedimento cirúrgico"],
  ["Endereço (CEP, cidade, bairro, rua, número, complemento)", "Os eventos atendem apenas moradores da cidade onde acontecem"],
  [
    "NIS (Cadastro Único)",
    "Somente quando o contrato daquele evento exige comprovação de baixa renda. Você declara; a conferência é presencial",
  ],
  ["Senha", "Guardada apenas em forma de hash — não é possível recuperá-la, nem nós conseguimos ler"],
];

const FINALIDADES: readonly Linha[] = [
  ["Criar sua conta, autenticar você e manter a sessão", "Execução de contrato / procedimentos preliminares (inc. V)"],
  [
    "Inscrever seus pets em eventos e aplicar as regras de elegibilidade (idade, peso, cota por CPF, residência, Cadastro Único)",
    "Execução de contrato (inc. V) e cumprimento das regras do programa público (inc. II)",
  ],
  ["Emitir o Termo de Autorização, a Ficha de Controle do CRMV e o registro de microchip", "Cumprimento de obrigação legal/regulatória (inc. II)"],
  ["Prestar contas ao estado ou município contratante", "Cumprimento de obrigação legal e execução de políticas públicas (inc. II e III)"],
  ["Avisar você sobre inscrição, triagem, resultado e lembretes de evento (no app e por e-mail)", "Execução de contrato (inc. V)"],
  ["Segurança: limitar tentativas de login, detectar uso indevido", "Legítimo interesse (inc. IX), restrito ao mínimo necessário"],
];

const DIREITOS: readonly Linha[] = [
  ["Ver e corrigir seus dados", "Perfil → Meus dados"],
  ["Baixar uma cópia de tudo que temos sobre você e seus pets (portabilidade)", "Perfil → Baixar meus dados — gera um arquivo JSON na hora"],
  ["Excluir a conta", "Perfil → Excluir minha conta — efeito imediato; se você entrou pela Apple, o vínculo é revogado junto"],
  ["Desvincular Google ou Apple", "Perfil"],
  ["Demais pedidos (informação sobre compartilhamentos específicos, oposição, dúvidas)", `E-mail ao encarregado: ${EMAIL_DPO}`],
];

export function PrivacyPage() {
  return (
    <section className="bg-mesh-cream pt-32 pb-24 sm:pt-40 sm:pb-32">
      <Container>
        <div className="mx-auto max-w-3xl">
          <Eyebrow>ConectaPet</Eyebrow>
          <h1 className="mt-5 font-display text-[clamp(2.1rem,1.4rem+3vw,3.4rem)] font-semibold leading-[1.05] tracking-[-0.015em] text-brand-brown">
            Política de Privacidade<span className="text-brand-orange">.</span>
          </h1>
          <p className="mt-4 font-sans text-sm text-brand-muted">
            Última atualização: {ATUALIZADO_EM} · Versão {VERSAO}
          </p>

          <P>
            O <Strong>ConectaPet</Strong> é o aplicativo pelo qual tutores de cães e gatos se inscrevem em eventos de
            castração gratuita realizados pelo <Strong>Grupo CVRBG</Strong> sob contrato com estados e prefeituras. Esta
            política explica, em linguagem direta, quais dados pessoais coletamos, para quê, com quem compartilhamos, por
            quanto tempo guardamos e como você exerce seus direitos, conforme a{" "}
            <Strong>Lei Geral de Proteção de Dados (Lei nº 13.709/2018 — LGPD)</Strong>.
          </P>

          <H2>1. Quem é responsável pelos seus dados</H2>
          <P>
            <Strong>Controlador:</Strong> {RAZAO_SOCIAL} (Grupo CVRBG), CNPJ {CNPJ}.
            <br />
            <Strong>Encarregado pelo tratamento de dados (DPO):</Strong>{" "}
            <a className="text-brand-orange underline-offset-4 hover:underline" href={`mailto:${EMAIL_DPO}`}>
              {EMAIL_DPO}
            </a>
            .
          </P>
          <P>
            O ente público que contrata o programa de castração (o <Strong>estado ou município</Strong> onde o evento
            acontece) recebe parte dos dados para fins de prestação de contas e registro animal, conforme a seção 5.
          </P>

          <H2>2. Quais dados coletamos</H2>
          <P>Coletamos apenas o que o serviço precisa. Nada é coletado em segundo plano.</P>
          <P>
            <Strong>Dados que você informa no cadastro e nas telas do app</Strong>
          </P>
          <Tabela cabecalho={["Dado", "Por que precisamos"]} linhas={DADOS_CADASTRO} />
          <P>
            <Strong>Dados dos seus pets:</Strong> nome, espécie, sexo, data de nascimento, peso, raça, porte, cor, tipo de
            moradia, observações de saúde que você informar e, após a castração, o <Strong>número do microchip</Strong>{" "}
            implantado.
          </P>
          <P>
            <Strong>Dados gerados no atendimento presencial:</Strong> número de senha do dia, resultado da triagem (apto/inapto
            e o motivo), status do atendimento (castrado, recusado, ausente, óbito), horário de alta, e a{" "}
            <Strong>sua assinatura</Strong>, coletada no tablet da recepção para o Termo de Autorização e para a Ficha de
            Controle do CRMV. Anotações clínicas internas da equipe veterinária ficam restritas aos profissionais.
          </P>
          <P>
            <Strong>Login com Google ou Apple (opcional):</Strong> recebemos do provedor um identificador da sua conta, seu
            e-mail (a Apple pode entregar um endereço de repasse anônimo, se você escolher) e, no primeiro acesso, o nome. Se
            você entrar pela Apple, guardamos também um token que serve exclusivamente para revogar o vínculo quando você
            excluir a conta, como a Apple exige. <Strong>Não</Strong> temos acesso à sua senha do Google ou da Apple.
          </P>
          <P>
            <Strong>Face ID / Touch ID / biometria (opcional):</Strong> é uma trava local do aparelho para abrir o app. A
            verificação é feita pelo próprio sistema operacional; <Strong>nenhum dado biométrico chega até nós</Strong> e o
            app não consegue lê-lo.
          </P>
          <P>
            <Strong>Notificações:</Strong> guardamos as notificações que enviamos a você dentro do app (título, texto, se foi
            lida) para você poder consultá-las.
          </P>
          <P>
            <Strong>O que NÃO coletamos:</Strong> localização, contatos, fotos, dados de outros aplicativos, dados de uso ou
            navegação para fins de análise ou publicidade. O app não contém SDKs de rastreamento nem de anúncios.
          </P>

          <H2>3. Para que usamos (finalidades e bases legais)</H2>
          <Tabela cabecalho={["Finalidade", "Base legal (LGPD, art. 7º)"]} linhas={FINALIDADES} />
          <P>
            <Strong>Não</Strong> usamos seus dados para publicidade, perfilamento comercial nem venda a terceiros.
          </P>

          <H2>4. Menores de idade</H2>
          <P>
            O ConectaPet é destinado a pessoas com <Strong>18 anos ou mais</Strong>. O cadastro exige data de nascimento e
            recusa quem não atinge essa idade. Não coletamos dados de crianças ou adolescentes de forma consciente; se
            identificarmos um cadastro nessa situação, ele será removido.
          </P>

          <H2>5. Com quem compartilhamos</H2>
          <P>Compartilhamos apenas o necessário e apenas com quem participa da operação:</P>
          <Lista
            itens={[
              <>
                <Strong>Estado ou município contratante do evento:</Strong> recebe relatórios de prestação de contas (com
                espécie, sexo, status do atendimento e, quando solicitado, a base de tutores atendidos: nome, endereço, CPF,
                telefone, animal e data), além dos Termos de Autorização assinados. Esse compartilhamento é obrigação
                contratual e legal do programa público.
              </>,
              <>
                <Strong>Equipe veterinária e de recepção do CVRBG:</Strong> acessa seu cadastro e o do pet no dia do
                atendimento, no fluxo por senha.
              </>,
              <>
                <Strong>Operadores de tecnologia</Strong>, que tratam dados em nosso nome e sob contrato:{" "}
                <Strong>DigitalOcean</Strong> (hospedagem dos servidores e do banco de dados); <Strong>Cloudflare</Strong>{" "}
                (proteção e distribuição do tráfego); <Strong>Resend</Strong> (envio dos e-mails transacionais);{" "}
                <Strong>Google</Strong> e <Strong>Apple</Strong> (apenas se você optar pelo login social, nos termos das
                políticas deles); <Strong>Pump Tecnologia</Strong> (desenvolvimento e manutenção do sistema, com acesso
                técnico restrito).
              </>,
              <>
                <Strong>Autoridades públicas</Strong>, quando houver obrigação legal ou ordem judicial.
              </>,
            ]}
          />
          <P>
            Alguns desses operadores podem processar dados <Strong>fora do Brasil</Strong>. Nesses casos exigimos garantias
            contratuais de proteção compatíveis com a LGPD (art. 33).
          </P>

          <H2>6. Por quanto tempo guardamos</H2>
          <Lista
            itens={[
              <>
                <Strong>Enquanto sua conta existir</Strong>, mantemos o cadastro completo.
              </>,
              <>
                <Strong>Quando você exclui a conta</Strong> (seção 8), removemos imediatamente tudo que identifica você:
                nome, CPF, e-mail, celular, endereço, gênero, NIS, data de nascimento, senha, contas Google/Apple vinculadas
                e notificações.
              </>,
              <>
                <Strong>Registros do atendimento</Strong> — inscrições, status, termos assinados e ficha do CRMV — precisam
                ser guardados pelo prazo legal de prestação de contas ao ente público e de guarda de documentos
                veterinários, porque a castração foi custeada com recurso público e o termo é documento com valor jurídico.
                Isso é permitido pelo art. 16, I, da LGPD. Esses registros ficam <Strong>anonimizados</Strong>: deixam de
                apontar para você. Se você nunca teve nenhuma inscrição, o cadastro é apagado por completo.
              </>,
              <>
                <Strong>Códigos de recuperação de senha</Strong> expiram em minutos e são descartados.
              </>,
            ]}
          />

          <H2>7. Como protegemos</H2>
          <P>
            Comunicação sempre por HTTPS; senha armazenada apenas como hash com sal; acesso interno segregado por perfil
            (tutor, veterinário, recepção, gestor) — cada função vê só o que precisa; limite de tentativas em todas as rotas
            que aceitam senha ou código; documentos assinados em armazenamento privado, não indexado; sessão protegida por
            token com validade limitada; e, no seu aparelho, a opção de trava biométrica.
          </P>
          <P>
            Nenhum sistema é infalível. Se ocorrer um incidente de segurança com risco relevante para você, comunicaremos
            você e a Autoridade Nacional de Proteção de Dados (ANPD) conforme a lei.
          </P>

          <H2>8. Seus direitos e como exercê-los</H2>
          <P>
            A LGPD (art. 18) garante a você acesso, correção, portabilidade, anonimização, eliminação, informação sobre
            compartilhamento e revogação de consentimento. No ConectaPet, a maior parte se resolve dentro do próprio app,
            sem precisar falar com ninguém:
          </P>
          <Tabela cabecalho={["Direito", "Onde"]} linhas={DIREITOS} />
          <P>
            Respondemos aos pedidos por e-mail em até <Strong>15 dias</Strong>. Você também pode apresentar reclamação à
            ANPD.
          </P>

          <H2>9. Cookies e rastreamento</H2>
          <P>
            O aplicativo não usa cookies nem tecnologias de rastreamento entre apps ou sites. Não há publicidade.
          </P>

          <H2>10. Alterações desta política</H2>
          <P>
            Quando alterarmos esta política de forma relevante, avisaremos pelo app ou por e-mail antes de a mudança valer.
            A data no topo indica a versão vigente; as versões anteriores ficam disponíveis mediante pedido.
          </P>

          <H2>11. Contato</H2>
          <P>
            Encarregado (DPO):{" "}
            <a className="text-brand-orange underline-offset-4 hover:underline" href={`mailto:${EMAIL_DPO}`}>
              {EMAIL_DPO}
            </a>
            <br />
            Grupo CVRBG — {RAZAO_SOCIAL}, CNPJ {CNPJ}
            <br />
            Site: https://grupocvrbg.com.br
          </P>
        </div>
      </Container>
    </section>
  );
}
