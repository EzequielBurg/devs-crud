FROM node:12.4.0-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json /app/package.json

RUN npm cache clean --force

RUN npm install

RUN npm install react-scripts@3.3.1 -g

CMD ["npm", "start"]
