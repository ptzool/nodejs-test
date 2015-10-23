/* jshint noyield: true */
'use strict';

let expect = require('chai').expect;
let supertest = require('co-supertest');

let pkg = require('../../package.json');
let server = require('../../app');

describe('/ endpoint', function () {
  describe('GET /', function () {
    it('should return with status code and body', function* () {
      let res = yield supertest(server.listen())
        .get('/')
        .expect(200)
        .end();

      expect(res.body).to.eql({
        name: pkg.name,
        version: pkg.version
      });
    });
  });
});
