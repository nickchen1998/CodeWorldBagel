# Build 階段
FROM node:22-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

# Production 階段
FROM node:22-alpine
WORKDIR /app
COPY --from=build /app/.output ./
ENV HOST=0.0.0.0
EXPOSE 3000
CMD ["node", "/app/server/index.mjs"]
