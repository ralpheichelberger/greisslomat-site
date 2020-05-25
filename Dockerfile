FROM node:12-alpine

WORKDIR /opt/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD ["npm", "start"]