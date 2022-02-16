FROM node:current-alpine

USER node
RUN mkdir -p /home/node/app
WORKDIR /home/node/app

ENV NODE_ENV development

COPY --chown=node:node package.json package-lock.json* npm-shrinkwrap.json* ./

COPY --chown=node:node . .

EXPOSE 3000
EXPOSE 24678

CMD [ "npm", "run", "cidev" ]
