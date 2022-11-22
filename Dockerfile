FROM debian:bullseye-slim

WORKDIR /app
COPY ./pipeline-test /pipeline-test

ENTRYPOINT [ "/app/pipeline-test" ]