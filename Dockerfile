FROM node:8.15.1-alpine

MAINTAINER Taichi Uchihara <hoge.uchihara@gmail.com>

RUN apk update && \
    apk add --no-cache git && \
    git clone https://github.com/nitoc-ict/daizu-online-judge-client /daizu-online-judge-client && \
    cd /daizu-online-judge-client && \
    git checkout develop && \
    chmod +x run.sh && \
    chmod +x docker-entrypoint.sh

WORKDIR /daizu-online-judge-client

EXPOSE 8080

CMD ["/docker-entrypoint.sh"]
