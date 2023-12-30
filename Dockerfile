FROM node:20.5.1 as BUILD
WORKDIR /webapp
COPY package.json ./
RUN npm install
COPY . ./
RUN npm run build

FROM node:20.5.1 as PROD
WORKDIR /webapp
COPY package.json ./
COPY --from=BUILD /webapp/build ./build
RUN npm pkg delete scripts.prepare && npm install --only=production
EXPOSE 8080
CMD ["npm", "run", "start:prod"]