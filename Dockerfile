FROM debian:bullseye-slim

WORKDIR /APP
COPY ./pipeline-test .

CMD [ "/pipeline-test" ]