FROM node:14

RUN mkdir /app
WORKDIR /app
COPY package.json /app/package.json
COPY yarn.lock /app/yarn.lock
RUN yarn install --network-concurrency 1
COPY . /app

CMD ["yarn", "start-mainnet"]