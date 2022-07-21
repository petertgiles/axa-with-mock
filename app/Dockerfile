FROM node:16.16.0-bullseye

# bump npm version
RUN npm install -g npm@8.7.0

WORKDIR /usr/src/app

#required files for node build
COPY --chown=node:node \
    package.json \
    package-lock.json \
    tsconfig.json \
    ./

COPY --chown=node:node src/oidc/ src/oidc/

RUN npm install

COPY --chown=node:node . .
USER node

CMD ["bash"]
