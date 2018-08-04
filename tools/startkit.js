var express =  require('express');
var colors =  require('colors');
var queries = require('./queries');
var router = express.Router();

console.log('starting stertkitServer...'.white);

// *** GET all shows *** //
router.get('/', function(req, res, next) {
  queries.getAll()
  .then(function(data) {
    res.status(200).json(data);
  });
});

// *** CRETAE *** //
router.post('/', (req, res) => {
  console.log(req.body);
  res.send("req OK");
});

module.exports = router;
