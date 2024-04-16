FROM node:20.5.1 as installer
WORKDIR /webapp
COPY package.json ./
RUN npm install

FROM installer as builder
WORKDIR /webapp
COPY . ./
RUN npm run build
EXPOSE 8080
EXPOSE 9090
CMD ["npm", "run", "start:prod"]