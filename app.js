'use strict';

slet helmet = require('koa-helmet');
let koa = require('koa');

let config = require('./src/config');
let pkg = require('./package.json');
let routes = require('./src/routes');

let app = koa();

app.use(helmet());
app.use(routes.middleware());

let serverPort = config.port;
app.listen(serverPort, function () {
  console.log('Server is listening on ' + serverPort, 'app', {
    name: pkg.name,
    version: pkg.version
  });
});

module.exports = app;
