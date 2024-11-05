ARG GIT_COMMIT_HASH
ARG PATH_SOURCE=/tmp/ldsa/.source
ARG PATH_LOCAL_BUILDS=/tmp/ldsa/.builds
ARG NX_CACHE_DIRECTORY=/tmp/ldsa/.cache/nx
ARG PATH_FINAL_BUILDS=/usr/local/ladesa-ro/services/

# ========================================
# BASE NODEJS IMAGE
# ========================================

FROM node:23 AS base
ARG PATH_SOURCE

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

RUN corepack enable

WORKDIR "${PATH_SOURCE}"
COPY package.json .
RUN corepack install

# ========================================
# BUILD ASSETS
# ========================================

FROM base AS build
ARG PATH_LOCAL_BUILDS
ARG GIT_COMMIT_HASH
ARG NX_CACHE_DIRECTORY

ENV NX_DAEMON=true
# ENV NX_VERBOSE_LOGGING=true
ENV GIT_COMMIT_HASH=${GIT_COMMIT_HASH}
ENV NX_CACHE_DIRECTORY=${NX_CACHE_DIRECTORY}

COPY . "${PATH_SOURCE}"

RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile 

RUN --mount=type=cache,id=nx,target=${NX_CACHE_DIRECTORY},sharing=locked pnpm run -w build

# ========================================
# BUILD / API-SERVICE
# ========================================

FROM build AS build-api-service
ARG NX_CACHE_DIRECTORY

RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm deploy --prod --filter=@ladesa-ro/api.service "${PATH_LOCAL_BUILDS}/api-service"

# ========================================
# BUILD / NPM / API-CLIENT-FETCH / DOCS
# ========================================

FROM build AS build-npm-api-client-fetch-docs

RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm deploy --prod --filter=@ladesa-ro/api-client-fetch.docs "${PATH_LOCAL_BUILDS}/npm-api-client-fetch.docs"

# ========================================
# RUNTIME / API-SERVICE
# ========================================

FROM base AS api-service
ARG PATH_LOCAL_BUILDS
ARG PATH_FINAL_BUILDS

COPY --from=build-api-service \
  "${PATH_LOCAL_BUILDS}/api-service" \
  "${PATH_FINAL_BUILDS}/api-service"
WORKDIR "${PATH_FINAL_BUILDS}/api-service"

CMD pnpm run migration:run && pnpm run start:prod

# ========================================
# RUNTIME / NPM / API-CLIENT-FETCH / DOCS
# ========================================

FROM nginx:alpine AS npm-api-client-fetch-docs
ARG PATH_LOCAL_BUILDS
ARG PATH_FINAL_BUILDS

COPY \
  ./integrations/npm/api-client-fetch-docs/nginx.conf \
  /etc/nginx/nginx.conf

COPY --from=build-npm-api-client-fetch-docs  "${PATH_LOCAL_BUILDS}/npm-api-client-fetch.docs"  "${PATH_FINAL_BUILDS}/npm-api-client-fetch-docs"
EXPOSE 80
