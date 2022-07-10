FROM node:16-alpine AS builder

WORKDIR '/'

COPY . .

RUN npm install --frozen-lockfile --legacy-peer-deps

RUN npm run prod

FROM nginx:1.19-alpine AS server
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]