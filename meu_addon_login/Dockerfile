FROM node:20-alpine

WORKDIR /app

COPY . ./

RUN npm install --prefix ./web

CMD [ "./run.sh" ]
