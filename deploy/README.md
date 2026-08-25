# Deploy do site institucional

O site roda no mesmo droplet do painel e da API (`cvrbg-server`,
`143.198.117.146`), em container Docker atrás do Nginx do host.

```
Cloudflare ──HTTPS──> Nginx (host) ──proxy──> 127.0.0.1:3001 ──> container cvrbg-site
                        │                                          (Next.js standalone)
                        ├── app.cvrbg.com.br  -> /var/www/cvrbg/web (painel, estático)
                        └── api.cvrbg.com.br  -> 127.0.0.1:3000     (API NestJS)
```

## Onde fica o quê

| Caminho no droplet | O que é |
| --- | --- |
| `/opt/cvrbg-site/app` | Este repositório (clone) |
| `/opt/cvrbg-site/.env` | `RESEND_API_KEY` e `CONTACT_FROM_EMAIL` — modo 600 |
| `/etc/nginx/sites-available/www.cvrbg.com.br` | Cópia de `deploy/nginx/www.cvrbg.com.br.conf` |
| `/var/log/cvrbg-site-deploy.log` | Histórico dos deploys |

O `.env` é separado do `/opt/cvrbg/.env` da API de propósito: o site só precisa
da chave do Resend e não deve alcançar Postgres, JWT ou a chave da Apple.

## Publicar uma versão nova

Não há deploy automático no push. Depois de mergear na `main`:

```bash
ssh root@143.198.117.146 /opt/cvrbg-site/app/deploy/deploy.sh
```

O script faz `git pull --ff-only`, builda a imagem e só troca o container
depois que o build termina. Se qualquer etapa falhar, ele aborta e a versão
anterior continua no ar. Use `--no-pull` para publicar o código que já está no
servidor.

## Mudanças no Nginx

O `deploy.sh` não mexe em Nginx de propósito — config de borda se muda com
`nginx -t` na frente:

```bash
cp /opt/cvrbg-site/app/deploy/nginx/www.cvrbg.com.br.conf \
   /etc/nginx/sites-available/www.cvrbg.com.br
nginx -t && systemctl reload nginx
```

## TLS

Certificado de origem da Cloudflare (`/etc/nginx/ssl/cvrbg-origin.pem`), o
mesmo que serve `app.` e `api.`. Cobre `cvrbg.com.br` e `*.cvrbg.com.br` e
**vence em 26/jul/2041** — não renova sozinho. O certificado que o visitante vê
é o da borda da Cloudflare, emitido e renovado por ela.

## Formulário de contato

`POST /api/contact` envia via Resend para `comercial@cvrbg.com.br`. Sem
`RESEND_API_KEY` no `.env`, a rota responde 503 e o formulário orienta a
escrever direto para o comercial — falha visível, não silenciosa.

Para conferir se está de pé sem disparar e-mail:

```bash
# 400 = validação viva; 200 no honeypot = anti-spam vivo (não envia nada)
curl -s -X POST http://127.0.0.1:3001/api/contact \
  -H 'Content-Type: application/json' -d '{}'
```

## Diagnóstico

```bash
docker ps --filter name=cvrbg-site                      # container de pé?
docker logs --tail 50 cvrbg-site                        # erros da aplicação
curl -sI http://127.0.0.1:3001/                         # site respondendo?
tail -50 /var/log/nginx/www.cvrbg.error.log             # erro na borda
```
