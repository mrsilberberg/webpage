FROM node:20-alpine

WORKDIR /app

COPY web /app
COPY run.sh /run.sh
RUN chmod +x /run.sh

EXPOSE 8080

CMD ["/run.sh"]
