FROM node:16-alpine AS development

RUN addgroup code && adduser -S -G code code
USER code

ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV

WORKDIR /code

ARG PORT=3001
ENV PORT $PORT
EXPOSE $PORT 9229 9230

COPY package.json /code/package.json
COPY yarn.lock /code/yarn.lock
RUN yarn install --frozen-lockfile

COPY . /code

CMD ["yarn", "dev"]
