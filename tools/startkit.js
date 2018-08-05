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
  console.log('hai stertkitServer dayo'.blue);
  console.log(req.body);
  const data = req.body;
  // validateInput(req.body)
  // .then( ({ errors, isValid }) => {
  // });
  queries.saveStartkit(data)
    .then(data => res.json({success: true}))
    .catch(error => {
      res.status(500).json({error: error}),
      console.log('ue error dayo server log mitene'.red);
    });
});//end post

module.exports = router;
