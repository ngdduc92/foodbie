FROM node:18-alpine as builder

WORKDIR /app

RUN apk add --update nodejs npm

COPY package.json ./

COPY . .

RUN node -v

RUN npm -v

RUN npm install

RUN npm run build

# Expose the listening port
EXPOSE 3000

CMD [ "npm", "next", "start" ]
