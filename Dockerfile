FROM debian:bullseye-slim

WORKDIR /app
COPY ./pipeline-test pipeline-test

EXPOSE 3000

ENTRYPOINT [ "/app/pipeline-test" ]