FROM debian:bullseye-slim

WORKDIR /APP
COPY ./pipeline-test /pipeline-test

ENTRYPOINT [ "/pipeline-test" ]