FROM oven/bun:1.3.2 AS build

WORKDIR /app

# Cache packages
COPY package.json package.json
COPY bun.lock bun.lock

COPY apps/api/package.json apps/api/package.json
COPY packages/config/package.json packages/config/package.json

RUN bun install

COPY apps/api apps/api
COPY packages/config packages/config

ENV NODE_ENV=production

WORKDIR /app/apps/api
RUN bun run build

RUN bun install --production

ENV NODE_ENV=production
ENV PORT=3001

# CMD ["./server"]

# EXPOSE 3001

# -----------
FROM gcr.io/distroless/base

WORKDIR /app

COPY --from=build /app/apps/api/server server
COPY --from=build /app/apps/api/dist dist
COPY --from=build /app/node_modules node_modules

ENV NODE_ENV=production
ENV PORT=3001

CMD ["./server"]

EXPOSE 3001
