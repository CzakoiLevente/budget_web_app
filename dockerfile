FROM node:14-slim

WORKDIR /app

COPY . /app

RUN npm install

CMD ["node", "backend/server.js"]

#docker build -t phoenix .
#docker run -it -p 20000:20000 phoenix