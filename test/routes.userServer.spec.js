process.env.NODE_ENV = 'test';

var chai = require('chai');
var chaiHttp = require('chai-http');

var server = require('../tools/srcServer');
var knex = require('../tools/knex');

var should = chai.should();

chai.use(chaiHttp);

describe('API Routess User', function() {
  this.timeout(14000)
  beforeEach(function(done) {
    knex.migrate.rollback()
    .then(function() {
      knex.migrate.latest()
      .then(function() {
        return knex.seed.run()
        .then(function() {
          done();
        });
      });
    });
  });
  afterEach(function(done) {
  knex.migrate.rollback()
  .then(function() {
    done();
  });
});
  //
  describe('Method that does not exist', function() {
    it('Responding to an error', function(done) {
      chai.request(server)
      .options('/api/users')//req.method not method:options
      .end(function(err, res) {
        res.should.have.status(404);
        res.should.be.json;
        done();
      });
    });
  });
  //
  describe('post /api/users', function () {
  it('users database errors NOT TABLE', function (done) {
    chai.request(server)
    .post('/api/users')
    .send({
      username: '',
      timezone: '',
      email: '',
      password: ''
    })
    .end(function(err, res) {
      res.should.have.status(400);
      res.should.be.json;
      done();
    });
  });
});
});
