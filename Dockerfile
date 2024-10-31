# ========================================
# BASE NODEJS IMAGE
# ========================================

FROM node:23 AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
WORKDIR "/ldsa"
COPY package.json .
RUN corepack install

# ========================================
# BUILD ASSETS
# ========================================

FROM base AS build
COPY . "/ldsa"

ENV GIT_COMMIT_HASH=
ENV NX_DAEMON=true
# ENV NX_VERBOSE_LOGGING=true

RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile 
RUN pnpm exec nx daemon --start
RUN pnpm exec nx daemon status
RUN cat /ldsa/.nx/workspace-data/d/daemon.log
RUN pnpm run -w build

FROM build AS build-api-service

RUN pnpm exec nx run @ladesa-ro/api.service:build

RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm deploy --prod --filter=@ladesa-ro/api.service  "/ldsa/.builds/api-service"

FROM build AS build-npm-api-client-fetch-docs

RUN pnpm exec nx run @ladesa-ro/api-client-fetch.docs:build

RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm deploy --prod --filter=@ladesa-ro/api-client-fetch.docs "/ldsa/.builds/npm-api-client-fetch.docs"

# ========================================
# RUNTIME / API-SERVICE
# ========================================

FROM base AS api-service
COPY --from=build-api-service \
  "/ldsa/.builds/api-service" \
  "/ldsa/api-service"
WORKDIR "/ldsa/api-service"
CMD pnpm run migration:run && pnpm run start:prod

# ========================================
# RUNTIME / NPM / API-CLIENT-FETCH / DOCS
# ========================================

FROM nginx:alpine AS npm-api-client-fetch-docs
COPY \
  ./integrations/npm/api-client-fetch-docs/nginx.conf \
  /etc/nginx/nginx.conf

COPY --from=build-npm-api-client-fetch-docs  "/ldsa/.builds/npm-api-client-fetch.docs"  "/ldsa/npm-api-client-fetch-docs"
EXPOSE 80
