FROM node:14

RUN mkdir /app
WORKDIR /app
COPY package.json /app/package.json
COPY yarn.lock /app/yarn.lock
COPY . /app
RUN yarn install

CMD ["yarn", "start-mainnet"]