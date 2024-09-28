FROM node:18.17-alpine
# Installing libvips-dev for sharp Compatibility
RUN apk update && apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev nasm bash vips-dev git
ENV NODE_ENV=${NODE_ENV:-development}
WORKDIR /opt/
# COPY workspaces/cms/.env workspaces/cms/package.json yarn.lock ./
# This version is when the build is run from the workspace
COPY package.json ./
# RUN yarn add --platform=linuxmusl --arch=x64 sharp
RUN yarn global add node-gyp
RUN yarn config set network-timeout 1200000 -g && yarn install
ENV PATH /opt/node_modules/.bin:$PATH

WORKDIR /opt/app
# This version is when the build is run from root
# COPY workspaces/cms/. .
# This version is when the build is run from the workspace
COPY ./ .
RUN chown -R node:node /opt/app
USER node
RUN NODE_ENV=$NODE_ENV yarn build
EXPOSE 8080
CMD ["yarn", "start"]