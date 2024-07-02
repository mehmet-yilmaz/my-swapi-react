FROM node:alpine as BUILDER

WORKDIR /app

COPY package*.json /app/

RUN npm install

COPY . .

RUN npm run build

FROM nginx

COPY --from=BUILDER /app/build /usr/share/nginx/html

COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 8080

ENTRYPOINT [ "nginx" "-g" "deamon off;" ]