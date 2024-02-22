FROM node:16-alpine AS development

RUN addgroup code && adduser -S -G code code
USER code

ENV CI=true
ENV PORT=3000

WORKDIR /code
COPY package.json /code/package.json
COPY yarn.lock /code/yarn.lock
RUN yarn install --frozen-lockfile
COPY . /code

CMD yarn start_watch
