FROM node:20.9.0-alpine as server

ENV NPM_CONFIG_LOGLEVEL warn

WORKDIR /usr/src/app
COPY package.json .
COPY yarn.lock .

RUN yarn install --production

COPY src src
COPY api-db.json api-db.json

CMD ["yarn", "start"]
