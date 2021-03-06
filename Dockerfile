FROM node:slim

ADD ./ /opt/clipdis/
WORKDIR /opt/clipdis/
RUN rm -rf node_modules
RUN npm cache clean
RUN npm install
RUN npm test

ENV NODE_ENV production
ENV NODE_TEST test
ENV NODE_TEST2 test2
ENV NODE_TEST3 test3

EXPOSE 3000

CMD npm start
