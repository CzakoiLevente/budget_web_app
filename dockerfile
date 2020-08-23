FROM mhart/alpine-node:14

WORKDIR /usr/bin/budget-app/

COPY . .

RUN apk update \ 
    && apk add git \
    && apk add nodejs \
    && git init https://github.com/CzakoiLevente/budget_web_app \
    && npm install -y \
    && sh docker-setup.sh

EXPOSE 3306:20000

VOLUME /var/budget-app-vol/

CMD ["node", "backend/server.js"]
