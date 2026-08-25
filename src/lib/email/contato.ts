/**
 * E-mail disparado pelo formulario de contato do site (/api/contact).
 *
 * Destinatario e a equipe comercial, nao o visitante: o texto e escrito para
 * quem vai atender a demanda, e o reply-to aponta para quem preencheu.
 */
import {
  campos,
  escapar,
  moldar,
  nota,
  paragrafo,
  type MensagemEmail,
} from "./layout";

export interface DemandaDoSite {
  nome: string;
  orgao: string;
  contato: string;
  demanda: string;
  detalhes: string;
  /** true quando `contato` e um e-mail — nesse caso o reply-to foi preenchido. */
  contatoEhEmail: boolean;
}

export function emailDeContato({
  nome,
  orgao,
  contato,
  demanda,
  detalhes,
  contatoEhEmail,
}: DemandaDoSite): MensagemEmail {
  const ficha = [
    { rotulo: "Responsável", valor: nome },
    { rotulo: "Órgão/cidade", valor: orgao },
    { rotulo: "Contato", valor: contato },
    { rotulo: "Tipo de demanda", valor: demanda },
    ...(detalhes ? [{ rotulo: "Detalhes", valor: detalhes }] : []),
  ];

  // Quem deixou telefone nao entra no reply-to: prometer que "e so responder"
  // faria a resposta cair no vazio.
  const comoResponder = contatoEhEmail
    ? `Basta responder este e-mail — a resposta vai direto para ${escapar(contato)}.`
    : `O contato informado não é um e-mail: retorne por ${escapar(contato)}.`;

  return {
    assunto: `[Site] ${demanda} — ${orgao}`,
    html: moldar({
      titulo: "Nova demanda pelo site",
      chamada: `${nome} — ${orgao}`,
      preheader: `${demanda} · ${orgao}. ${nome} aguarda retorno.`,
      conteudo:
        paragrafo(
          "Uma demanda foi enviada pelo formulário de contato do site institucional.",
        ) +
        campos(ficha) +
        nota(comoResponder),
      rodape:
        "Enviado automaticamente pelo formulário de contato de www.cvrbg.com.br.",
    }),
    texto:
      "Nova demanda pelo site\n\n" +
      ficha.map(({ rotulo, valor }) => `${rotulo}: ${valor}`).join("\n") +
      `\n\n${contatoEhEmail ? `Basta responder este e-mail — a resposta vai direto para ${contato}.` : `O contato informado não é um e-mail: retorne por ${contato}.`}` +
      "\n\n—\nEnviado automaticamente pelo formulário de contato de www.cvrbg.com.br.\nGrupo CVRBG · cvrbg.com.br",
  };
}
