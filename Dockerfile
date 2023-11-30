FROM node:18.18.2-slim
RUN corepack enable
RUN corepack prepare pnpm@latest --activate
