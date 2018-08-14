process.env.NODE_ENV = 'test';

var chai = require('chai');
var should = chai.should();
var chaiHttp = require('chai-http');
var server = require('../tools/srcServer');

var should = chai.should();

chai.use(chaiHttp);

describe('Get all shows', function() {
  it('should get all shows', function(done) {
    chai.request(server)
    .get('/api/startkit')
    .end(function(err, res) {
      // console.log(res.body);
      res.should.have.status(200);
      res.should.be.json;
      res.body.should.be.a('object');
      res.body.status.should.equal('success');
      res.body.message.should.equal('Retrieved ALL stertkit');
      res.body.data.length.should.equal(4);
      res.body.data[0].should.have.property('name');
      res.body.data[0].name.should.equal('Suits');
      res.body.data[0].should.have.property('channel');
      res.body.data[0].channel.should.equal('USA Network');
      res.body.data[0].should.have.property('genre');
      res.body.data[0].genre.should.equal('Drama');
      res.body.data[0].should.have.property('rating');
      res.body.data[0].rating.should.equal(3);
      res.body.data[0].should.have.property('explicit');
      res.body.data[0].explicit.should.equal(false);
      done();
    });
  });
});
