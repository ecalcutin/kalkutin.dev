FROM node:22.15.0 AS installer
WORKDIR /webapp
COPY package.json ./
RUN npm install

FROM installer AS builder
WORKDIR /webapp
COPY . ./
RUN npm run build
EXPOSE 8080
CMD ["npm", "run", "start:prod"]