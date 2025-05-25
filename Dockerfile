FROM node:22.15.1 AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

FROM node:22.15.1 AS builder
WORKDIR /app
COPY ./ ./
COPY --from=deps /app/node_modules ./node_modules
RUN npm run build

FROM node:22.15.1-slim
WORKDIR /app
COPY ./ ./
COPY --from=builder /app/build ./build
RUN npm ci --only=production --ignore-scripts
RUN npm cache clean --force
ENV NODE_ENV=production

EXPOSE 3000

CMD ["node", "build/server/server.js"]