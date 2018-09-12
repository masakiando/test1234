// process.env.NODE_ENV = 'test';
//
// var chai = require('chai');
// var chaiHttp = require('chai-http');
//
// var server = require('../tools/srcServer');
// var knex = require('../tools/knex');
//
// var should = chai.should();
//
// chai.use(chaiHttp);
//
// describe('API Routess startkit', function() {
//   this.timeout(14000)
//   beforeEach(function(done) {
//     knex.migrate.rollback()
//     .then(function() {
//       knex.migrate.latest()
//       .then(function() {
//         return knex.seed.run()
//         .then(function() {
//           done();
//         });
//       });
//     });
//   });
//   afterEach(function(done) {
//   knex.migrate.rollback()
//   .then(function() {
//     done();
//   });
// });
// describe('Method that does not exist', function() {
//   it('Responding to an error', function(done) {
//     chai.request(server)
//     .options('/api/startkit')//req.method not method:options
//     .end(function(err, res) {
//       res.should.have.status(404);
//       res.should.be.json;
//       done();
//     });
//   });
// });
//
// describe('Get all data', function() {
//   it('should get all data', function(done) {
//     chai.request(server)
//     .get('/api/startkit')
//     .end(function(err, res) {
//       res.should.have.status(200);
//       res.should.be.json;
//       res.body.should.be.a('object');
//       res.body.status.should.equal('success');
//       res.body.message.should.equal('Retrieved ALL data');
//       res.body.data.length.should.equal(4);
//       res.body.data[0].should.have.property('name');
//       res.body.data[0].name.should.equal('Suits');
//       res.body.data[0].should.have.property('channel');
//       res.body.data[0].channel.should.equal('USA Network');
//       res.body.data[0].should.have.property('genre');
//       res.body.data[0].genre.should.equal('Drama');
//       res.body.data[0].should.have.property('rating');
//       res.body.data[0].rating.should.equal(3);
//       res.body.data[0].should.have.property('explicit');
//       res.body.data[0].explicit.should.equal(false);
//       done();
//     });
//   });
// });
//   describe('Get all shows', function() {
//     it('should get all shows', function(done) {
//       chai.request(server)
//       .get('/api/startkit')
//       .end(function(err, res) {
//         res.should.have.status(200);
//         res.should.be.json;
//         res.body.should.be.a('object');
//         res.body.status.should.equal('success');
//         res.body.message.should.equal('Retrieved ALL data');
//         res.body.data.length.should.equal(4);
//         res.body.data[0].should.have.property('name');
//         res.body.data[0].name.should.equal('Suits');
//         res.body.data[0].should.have.property('channel');
//         res.body.data[0].channel.should.equal('USA Network');
//         res.body.data[0].should.have.property('genre');
//         res.body.data[0].genre.should.equal('Drama');
//         res.body.data[0].should.have.property('rating');
//         res.body.data[0].rating.should.equal(3);
//         res.body.data[0].should.have.property('explicit');
//         res.body.data[0].explicit.should.equal(false);
//         done();
//       });
//     });
//   });
//
//   // GET single show
//   describe('GET /api/startkit/:id', function () {
//     it('should return a single show', function (done) {
//       chai.request(server)
//       .get('/api/startkit/1')
//       .end(function (err, res) {
//         res.should.have.status(200);
//         res.should.be.json;
//         res.body.should.be.a('object');
//         res.body.status.should.equal('success');
//         res.body.message.should.equal('Retrieved ONE stertkit');
//         res.body.data.should.have.property('name');
//         res.body.data.name.should.equal('Suits');
//         res.body.data.should.have.property('channel');
//         res.body.data.channel.should.equal('USA Network');
//         res.body.data.should.have.property('genre');
//         res.body.data.genre.should.equal('Drama');
//         res.body.data.should.have.property('rating');
//         res.body.data.rating.should.equal(3);
//         res.body.data.should.have.property('explicit');
//         res.body.data.explicit.should.equal(false);
//         done();
//       });
//     });
//     it('We guarantee that the ID parameter exists from the query string',
//       function (done) {
//       chai.request(server)
//       .get('/api/startkit/2019')
//       .end(function (err, res) {
//         res.should.have.status(400);
//         res.should.be.json;
//         res.body.should.be.a('object');
//         res.body.status.should.equal('error');
//         res.body.message.should.equal(`ID '2019' does not exist.`);
//         res.body.error.should.equal(2019);
//         done();
//       });
//     });
//   });
//
//   //Post We now want to add an item to our database.
// describe('POST /api/startkit', function() {
//   it('should add a show', function(done) {
//     chai.request(server)
//     .post('/api/startkit')
//     .send({
//       name: 'Family Guy',
//       channel : 'Fox',
//       genre: 'Comedy',
//       rating: 4,
//       explicit: true
//     })
//     .end(function(err, res) {
//       res.should.have.status(200);
//       res.should.be.json; // jshint ignore:line
//       res.body.should.be.a('object');
//       res.body.status.should.equal('success');
//       res.body.message.should.equal('Inserted one startkit');
//       res.body.data.should.have.property('name');
//       res.body.data.name.should.equal('Family Guy');
//       res.body.data.should.have.property('channel');
//       res.body.data.channel.should.equal('Fox');
//       res.body.data.should.have.property('genre');
//       res.body.data.genre.should.equal('Comedy');
//       res.body.data.should.have.property('rating');
//       res.body.data.rating.should.equal(4);
//       res.body.data.should.have.property('explicit');
//       res.body.data.explicit.should.equal(true);
//       done();
//     });
//   });
//   });
//
//   describe('PUT /api/startkit/:id', function () {
//   it('should update a show', function (done) {
//     chai.request(server)
//     .put('/api/startkit/1')
//     .send({
//       rating: 4,
//       explicit: true
//     })
//     .end(function (err, res) {
//       res.should.have.status(200);
//       res.should.be.json;
//       res.body.should.be.a('object');
//       res.body.data.should.have.property('name');
//       res.body.data.name.should.equal('Suits');
//       res.body.data.should.have.property('channel');
//       res.body.data.channel.should.equal('USA Network');
//       res.body.data.should.have.property('genre');
//       res.body.data.genre.should.equal('Drama');
//       res.body.data.should.have.property('rating');
//       res.body.data.rating.should.equal(4);
//       res.body.data.should.have.property('explicit');
//       res.body.data.explicit.should.equal(true);
//       done();
//     });
//   });
//   it('should NOT update a show if the id field is part of the request', function(done) {
//     chai.request(server)
//     .put('/api/startkit/1')
//     .send({
//       id: 20000,
//       rating: 8,
//       explicit: true
//     })
//     .end(function(err, res) {
//       res.should.have.status(422);
//       res.should.be.json; // jshint ignore:line
//       done();
//     });
//   });
// });
// });
