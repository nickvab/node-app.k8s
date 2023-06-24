#Stage 1
FROM node:20-alpine as base

WORKDIR /src

COPY package*.json ./

RUN npm install


#Stage 2
FROM node:20-alpine 

WORKDIR /test-task

COPY --from=base /src ./

COPY *.js ./

EXPOSE 8080

CMD [ "npm", "start" ]

