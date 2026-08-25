/**
 * Moldura visual dos e-mails do site institucional.
 *
 * Portado do layout dos e-mails do ConectaPet (apps/api, modulo notificacoes)
 * para que tudo que sai do dominio cvrbg.com.br pareca da mesma casa. Mesma
 * paleta, mesma tabela de 600px, mesmos helpers.
 *
 * Por que HTML de tabela com estilo inline e nao um framework: cliente de
 * e-mail nao e navegador. Gmail remove <style> em parte dos casos, Outlook
 * renderiza com o motor do Word e nenhum deles tem flexbox confiavel. Tabela
 * de 600px com `style` em cada celula e o que atravessa todos.
 */

const PALETA = {
  laranja: "#D76E00",
  laranjaEscuro: "#B55C00",
  laranjaLavado: "#FEF6EE",
  marrom: "#3E1407",
  marromMedio: "#8C6A57",
  marromClaro: "#EADBCF",
  areia: "#F8F6F4",
  branco: "#FFFFFF",
} as const;

// Fonte de e-mail e o que a maquina do destinatario ja tem: @font-face nao
// carrega na maioria dos clientes. O resto cai na pilha do sistema sem
// quebrar o layout.
const FONTE_TITULO =
  "'Comfortaa', 'Segoe UI', Roboto, Helvetica, Arial, sans-serif";
const FONTE_CORPO =
  "'Lato', -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif";

const LARGURA = 600;

/** URL publica do site, sem barra final. Base do logo no cabecalho. */
const BASE_URL = "https://www.cvrbg.com.br";

/** Escapa o que veio do formulario. Nome com `&` ou `<` nao pode virar markup. */
export function escapar(valor: string | number): string {
  return String(valor)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export interface MensagemEmail {
  assunto: string;
  html: string;
  /**
   * Versao texto. Nao e enfeite: cliente que bloqueia HTML mostra esta, e
   * provedor que recebe so HTML pontua pior em spam.
   */
  texto: string;
}

/** Par rotulo/valor — a ficha da demanda que chegou pelo formulario. */
export function campos(
  itens: ReadonlyArray<{ rotulo: string; valor: string }>,
): string {
  const linhas = itens
    .map(
      ({ rotulo, valor }) => `
        <tr>
          <td style="padding:8px 0;font-family:${FONTE_CORPO};font-size:14px;color:${PALETA.marromMedio};width:150px;vertical-align:top;">
            ${escapar(rotulo)}
          </td>
          <td style="padding:8px 0;font-family:${FONTE_CORPO};font-size:15px;color:${PALETA.marrom};font-weight:700;word-break:break-word;">
            ${escapar(valor).replace(/\n/g, "<br />")}
          </td>
        </tr>`,
    )
    .join("");

  return `
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background:${PALETA.areia};border-radius:12px;padding:16px 20px;margin:20px 0;">
      ${linhas}
    </table>`;
}

/**
 * Botao. `<a>` estilizado em vez de VML: no Outlook classico ele perde o
 * arredondamento mas continua clicavel e legivel, que e o que importa.
 */
export function botao(rotulo: string, href: string): string {
  return `
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin:24px 0;">
      <tr>
        <td align="center" style="background:${PALETA.laranja};border-radius:10px;">
          <a href="${escapar(href)}"
             style="display:inline-block;padding:14px 28px;font-family:${FONTE_CORPO};font-size:15px;font-weight:700;color:${PALETA.branco};text-decoration:none;">
            ${escapar(rotulo)}
          </a>
        </td>
      </tr>
    </table>`;
}

export function paragrafo(texto: string): string {
  return `<p style="margin:0 0 14px;font-family:${FONTE_CORPO};font-size:15px;line-height:1.6;color:${PALETA.marrom};">${texto}</p>`;
}

/** Aviso secundario, menor e em tom de apoio. */
export function nota(texto: string): string {
  return `<p style="margin:16px 0 0;font-family:${FONTE_CORPO};font-size:13px;line-height:1.6;color:${PALETA.marromMedio};">${texto}</p>`;
}

interface Moldura {
  titulo: string;
  /** Ja em HTML: use os helpers acima, e `escapar()` em qualquer dado. */
  conteudo: string;
  /** Subtitulo visivel, uma linha abaixo do titulo. Nao repita o corpo. */
  chamada?: string;
  /**
   * Previa na lista da caixa de entrada — o trecho que o cliente mostra ao
   * lado do assunto. Fica oculto na mensagem aberta. Sem ele, o cliente
   * inventa a previa a partir do comeco do HTML.
   */
  preheader?: string;
  /** Linha final do rodape, acima da assinatura. */
  rodape: string;
}

/**
 * Envelopa o conteudo no cabecalho e rodape da marca.
 *
 * O cabecalho usa o simbolo redondo sobre marrom — mesmo tratamento que o
 * rodape do site da ao logo. O lockup horizontal so existe em versao escura,
 * que sumiria neste fundo; por isso o nome vem como texto ao lado.
 *
 * O rodape NAO repete o "nao responda" dos e-mails do ConectaPet: aqui o
 * reply-to aponta para quem preencheu o formulario, e responder e exatamente
 * o que a equipe comercial deve fazer.
 */
export function moldar({
  titulo,
  chamada,
  preheader,
  conteudo,
  rodape,
}: Moldura): string {
  return `<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="color-scheme" content="light only" />
    <meta name="supported-color-schemes" content="light only" />
    <title>${escapar(titulo)}</title>
  </head>
  <body style="margin:0;padding:0;background:${PALETA.areia};">
    <!-- Previa da caixa de entrada: sem isto o cliente mostra o comeco do HTML. -->
    <div style="display:none;max-height:0;overflow:hidden;opacity:0;">${escapar(preheader ?? chamada ?? titulo)}</div>

    <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background:${PALETA.areia};padding:24px 12px;">
      <tr>
        <td align="center">
          <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="${LARGURA}" style="width:100%;max-width:${LARGURA}px;background:${PALETA.branco};border-radius:16px;overflow:hidden;border:1px solid ${PALETA.marromClaro};">

            <tr>
              <td style="background:${PALETA.marrom};padding:18px 28px;">
                <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                  <tr>
                    <td style="padding-right:12px;">
                      <img src="${BASE_URL}/logos/logo-u.png" alt="" width="44"
                           style="display:block;width:44px;height:auto;border:0;" />
                    </td>
                    <td style="font-family:${FONTE_TITULO};font-size:17px;font-weight:700;color:${PALETA.branco};letter-spacing:.02em;">
                      Grupo CVRBG
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <tr>
              <td style="padding:32px 28px 28px;">
                <h1 style="margin:0 0 6px;font-family:${FONTE_TITULO};font-size:22px;line-height:1.3;font-weight:700;color:${PALETA.marrom};">
                  ${escapar(titulo)}
                </h1>
                ${
                  chamada
                    ? `<p style="margin:0 0 20px;font-family:${FONTE_CORPO};font-size:14px;color:${PALETA.marromMedio};">${escapar(chamada)}</p>`
                    : '<div style="height:14px;"></div>'
                }
                ${conteudo}
              </td>
            </tr>

            <tr>
              <td style="background:${PALETA.laranjaLavado};border-top:1px solid ${PALETA.marromClaro};padding:20px 28px;">
                <p style="margin:0;font-family:${FONTE_CORPO};font-size:12px;line-height:1.6;color:${PALETA.marromMedio};">
                  ${rodape}
                </p>
                <p style="margin:12px 0 0;font-family:${FONTE_TITULO};font-size:12px;font-weight:700;color:${PALETA.laranjaEscuro};">
                  Grupo CVRBG · cvrbg.com.br
                </p>
              </td>
            </tr>

          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}
