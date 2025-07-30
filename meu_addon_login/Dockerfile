FROM node:20-alpine

# Cria pasta de trabalho
WORKDIR /app

# Copia arquivos
COPY server.js ./
COPY package.json ./
COPY run.sh ./

# Instala dependências
RUN npm install

# Executa script
CMD [ "./run.sh" ]
