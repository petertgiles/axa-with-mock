FROM node:16.16.0-bullseye

# bump npm version
RUN npm install -g npm@8.7.0

WORKDIR /usr/src/app

#required files for node build
COPY --chown=node:node package.json package-lock.json ./

RUN npm install

COPY --chown=node:node . .
USER node

CMD ["bash"]
