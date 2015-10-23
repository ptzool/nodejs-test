'use strict';

let pkg = require('../../package.json');

function* defaultRoute() {
  /* jshint noyield: true */
  /* jshint validthis: true */
  this.body = {
    name: pkg.name,
    version: pkg.version
  };
}

module.exports = defaultRoute;
