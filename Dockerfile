FROM node:slim

ADD ./ /opt/clipdis/
WORKDIR /opt/clipdis/
RUN rm -rf node_modules
RUN npm cache clean
RUN npm install
RUN npm test

ENV NODE_ENV production
ENV NODE_TEST test

EXPOSE 3000

CMD npm start
