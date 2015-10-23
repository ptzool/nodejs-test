/* jshint noyield: true */
'use strict';

let expect = require('chai').expect;
let supertest = require('co-supertest');

let server = require('../../app');
let Users = require('../mocks/data.json').users;

describe('/users endpoint', function () {
  describe('GET /users', function () {
    it('should return HTTP 200 w/ all the users', function* () {
      let res = yield supertest(server.listen())
        .get('/users')
        .expect(200)
        .end();

      expect(res.body).to.eql(Users);
    });
  });

  describe('GET /users/:userId', function () {
    it('should return HTTP 200 if userId is \'correct\'', function* () {
      let userId = 3;
      let res = yield supertest(server.listen())
        .get('/users/' + userId)
        .expect(200)
        .end();

      expect(res.body).to.eql(Users[userId]);
    });

    it('should return HTTP 400 if userId is \'incorrect\'', function* () {
      let res = yield supertest(server.listen())
        .get('/users/1000')
        .expect(400)
        .end();

      expect(res.body).to.eql({
        message: 'The requested userId is invalid'
      });
    });
  });
});
