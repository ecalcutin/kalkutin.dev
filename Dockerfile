FROM node:14.15.1 as BUILD
WORKDIR /webapp
COPY package.json ./
RUN npm install
COPY . ./
RUN npm run build

FROM nginx:alpine
COPY --from=BUILD /webapp/dist /var/www/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 8080