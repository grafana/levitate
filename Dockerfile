FROM node

# Copies your code file from your action repository to the filesystem path `/` of the container
COPY ./src/is-compatible.sh /is-compatible.sh

# Code file to execute when the docker container starts up (`entrypoint.sh`)
ENTRYPOINT ["/is-compatible.sh"]
