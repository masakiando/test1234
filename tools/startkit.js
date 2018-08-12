var express =  require('express');
var colors =  require('colors');
var queries = require('./queries');
var Startkit = require('./startkitModel');

var router = express.Router();

console.log('starting stertkitServer...'.white);


// return ALL stertkit
router.get('/', function(req, res, next) {
  queries.getAll()
  .then(function(data) {
    res.status(200).
    json({
      status: 'success',
      data: data,
      message: 'Retrieved ALL stertkit'
    });
  })
  .catch(function(err) {
    return next(err);
  });
});

// *** GET Single *** //
router.get('/:id',function (req, res, next) {
  var stertkitID = req.params.id;
  queries.getSingle(stertkitID)
  .then(function (data) {
    res.status(200)
    .json({
      status: 'success',
      data: data,
      message: 'Retrieved ONE stertkit'
    });
  })
  .catch(function (error) {
    throw(error);
  });
});

// insert startkit
router.post('/', function (req, res, next) {
  queries.add(req.body)
    .then(function(data) {
      res.status(200).json({
        status: 'success',
        data: data,
        message: 'Inserted one startkit'
      });
    })
    .catch(function(err) {
      res.status(500).json({
        error: err
      });
    });
});
// *** put show *** //
router.put('/:id', function(req, res, next) {
  Startkit.query({
    where: { id: req.params.id }
  })
  .fetch()
  .then(function (data) {
    console.log(data);
    data.save({
      id: req.params.id,
      channel: req.body.channel,
      explicit: req.body.explicit,
      genre: req.body.genre,
      name: req.body.name,
      rating: req.body.rating
    })
  .then(function(a) {
    console.log(a);
    res.status(200).json({
      status: 'success',
      result: a,
      message: 'put ONE stertkit'
    });
  })
  .catch(function(err) {
    res.status(500).json({
      error: err
    });
  });
});
});

router.delete('/:id', function (req, res, next) {
  Startkit.query({
    where: { id: req.params.id }
  })
  .fetch()
  .then(function (data) {
    console.log(data);
    if(data) {
      data.destroy()
      .then(function (a) {
        res.status(200).json({
          status: 'success',
          result: a,
          message: 'delete ONE stertkit'
        });
      });
    } else {
        res.status(400).json({
          status: 'fail',
          message: 'ID'+req.params.id+' '+'does not exist.'
        });
    }
  })
  .catch(function (err) {
    res.status(500).json({error: err});
  });
});


//req.method
router.use((req, res) => {
  res.status(404).json({
    errors: {
      global: `Still working on it. Please try again later when we implement it`
    }
  });
});


module.exports = router;
