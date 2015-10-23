'use strict';

let Router = require('koa-router');

let healthCheck = require('./main');
let user = require('./user');

let routes = new Router();

routes.get('/', healthCheck);
routes.get('/users', user.all);
routes.get('/users/:userId', user.get);

module.exports = routes;
