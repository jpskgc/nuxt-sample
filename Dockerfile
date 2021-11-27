FROM node:14.16.0-stretch

# Create app directory
RUN mkdir -p /app
WORKDIR /app

COPY ./package.json ./yarn.lock /app/

RUN yarn --pure-lockfile

EXPOSE 3000