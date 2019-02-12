FROM node:alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY index.js .
COPY .env.example .
EXPOSE 3001
CMD [ "npm", "start" ]