#!/usr/bin/env bash
# ---------------------------------------------------------------------------
# Site institucional CVRBG — deploy no droplet.
#
#   /opt/cvrbg-site/app/deploy/deploy.sh            # deploy completo
#   /opt/cvrbg-site/app/deploy/deploy.sh --no-pull  # usa o codigo que ja esta la
#
# Aborta em qualquer erro: e melhor parar no meio com a versao antiga de pe do
# que seguir e publicar algo quebrado. O container antigo so e substituido
# depois que a imagem nova termina de buildar.
# ---------------------------------------------------------------------------
set -euo pipefail

REPO_DIR=/opt/cvrbg-site/app
ENV_FILE=/opt/cvrbg-site/.env
COMPOSE_FILE="$REPO_DIR/deploy/docker-compose.yml"
SITE_URL=http://127.0.0.1:3001
LOG=/var/log/cvrbg-site-deploy.log

DO_PULL=true
for arg in "$@"; do
  case "$arg" in
    --no-pull) DO_PULL=false ;;
    *) echo "argumento desconhecido: $arg" >&2; exit 2 ;;
  esac
done

log() { echo "[$(date -Iseconds)] $*" | tee -a "$LOG"; }
compose() { docker compose -f "$COMPOSE_FILE" --env-file "$ENV_FILE" "$@"; }

[ -f "$ENV_FILE" ]     || { log "ERRO: $ENV_FILE nao existe"; exit 1; }
[ -f "$COMPOSE_FILE" ] || { log "ERRO: $COMPOSE_FILE nao existe"; exit 1; }

cd "$REPO_DIR"

if [ "$DO_PULL" = true ]; then
  # Mudanca local no servidor e sempre acidente — some no proximo pull e o
  # deploy fica mentindo sobre qual commit esta no ar. Melhor abortar.
  if [ -n "$(git status --porcelain)" ]; then
    log "ERRO: ha mudancas nao commitadas em $REPO_DIR:"
    git status --short | tee -a "$LOG"
    exit 1
  fi
  log "git pull..."
  git pull --ff-only
fi

log "commit: $(git rev-parse --short HEAD) — $(git log -1 --pretty=%s)"

log "build da imagem do site..."
compose build site

log "subindo o site..."
compose up -d site

log "aguardando o site responder..."
pronto=false
for _ in $(seq 1 30); do
  if curl -fsS -m 5 -o /dev/null "$SITE_URL/"; then
    pronto=true; break
  fi
  sleep 2
done

if [ "$pronto" != true ]; then
  log "ERRO: site nao respondeu em $SITE_URL apos 60s. Ultimas linhas:"
  compose logs --tail 40 site | tee -a "$LOG"
  exit 1
fi

log "site respondendo em $SITE_URL"

# Imagens orfas da build anterior. Sem isto o disco so cresce a cada deploy.
docker image prune -f >/dev/null 2>&1 || true

log "deploy concluido."
