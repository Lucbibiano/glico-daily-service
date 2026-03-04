FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --production
COPY . .
RUN npm run build
EXPOSE 3002
CMD ["node", "dist/main.js"]
# habilitar o debug
ENV NODE_OPTIONS=--inspect=0.0.0.0:9229
EXPOSE 9229
