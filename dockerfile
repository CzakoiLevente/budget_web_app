FROM alpine:latest

WORKDIR /usr/bin/budget-app/

COPY . .

RUN apk update \ 
    && apk add git \
    && git init https://github.com/CzakoiLevente/budget_web_app \
    && apk add npm \
    && npm install -y \
    && sh docker-setup.sh



VOLUME /var/budget-app-vol/

RUN node backend/server.js
