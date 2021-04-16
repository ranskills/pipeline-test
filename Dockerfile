FROM debian:bullseye-slim

WORKDIR /APP
COPY ./src/pipeline-test .

CMD [ "/pipeline-test" ]