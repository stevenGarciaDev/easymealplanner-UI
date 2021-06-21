FROM node:14.16.1-alpine3.13

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install

COPY . ./

ENV NODE_ENV=development
ENV API_URL=http://localhost:8080/api/v1

EXPOSE 3000

CMD ["yarn", "inspect"]