# ---------------------------------------------------------------------------
# Site institucional CVRBG — imagem de producao.
#
# O droplet nao tem Node instalado: o build inteiro acontece aqui dentro, do
# mesmo jeito que a API e o painel. O resultado e o output `standalone` do
# Next, que carrega so as dependencias que o servidor realmente usa — a imagem
# final nao tem node_modules completo nem codigo-fonte.
# ---------------------------------------------------------------------------
FROM node:22-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./
# `npm ci` exige o lockfile em dia; e proposital — build reprodutivel.
RUN npm ci

FROM node:22-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build

FROM node:22-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

# Sem root: se algum dia o processo for comprometido, ele nao e root no container.
RUN addgroup -g 1001 -S nodejs && adduser -S nextjs -u 1001

COPY --from=builder /app/public ./public
# O standalone ja traz o server.js e o minimo de node_modules.
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
CMD ["node", "server.js"]
