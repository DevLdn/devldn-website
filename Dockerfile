# ------- Client -------
# Build the client dependencies first
FROM node:latest AS client 

WORKDIR /client

COPY ./client/package.json .
RUN npm set progress=false && npm config set depth 0
RUN npm install --production

COPY ./client ./

RUN npm run build

# ------- Server -------
# Install the server dependencies
FROM node:latest AS server 

WORKDIR /server

COPY ./server/package.json .
RUN npm set progress=false && npm config set depth 0
RUN npm install --production

COPY ./server/ ./

# ------- Release -------
# Finally, copy server and client to the release container
FROM node:alpine as release
WORKDIR /app

COPY --from=server /server ./
COPY --from=client /client/build ./client

EXPOSE 80

CMD ["npm", "start"]
