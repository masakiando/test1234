process.env.NODE_ENV = 'test';

var chai = require('chai');
var chaiHttp = require('chai-http');

var server = require('../tools/srcServer');
var knex = require('../tools/knex');

var should = chai.should();

chai.use(chaiHttp);

// describe('Main Route', function() {
//   this.timeout(14000)
//   describe('Route that does not exist', function() {
//     it('Responding to an error', function(done) {
//       chai.request(server)
//       .get('/abc/def/ghi')//req.method not method:options
//       .end(function(err, res) {
//         res.should.have.status(404);
//         res.should.be.json;
//         done();
//       });
//     });
//   });
// });
