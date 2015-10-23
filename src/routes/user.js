/* jshint noyield: true */
'use strict';

let Users = require('../mocks/data.json').users;

function* get() {
  /* jshint validthis: true */
  let userId = this.params.userId;

  if (-1 < userId && userId < Users.length) {
    this.body = Users[userId];
  } else {
    this.status = 400;
    this.body = {
      message: 'The requested userId is invalid'
    };
  }
}

function* all() {
  /* jshint validthis: true */
  this.body = Users;
}

module.exports.get = get;
module.exports.all = all;
