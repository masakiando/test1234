process.env.NODE_ENV = 'test';

var chai = require('chai');
var should = chai.should();
var chaiHttp = require('chai-http');
var server = require('../tools/srcServer');

chai.use(chaiHttp);

describe('Get all shows', function() {
  it('should get all shows', function(done) {
    chai.request(server)
    .get('/api/startkit')
    .end(function(err, res) {
      res.should.have.status(200);
      res.should.be.json;
      res.body.should.be.a('object');
      console.log(res);
      done();
    });
  });
});
