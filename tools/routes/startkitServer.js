var express =  require('express');
var colors =  require('colors');
var isEmpty =  require('lodash/isEmpty');

var Startkit = require('../model/startkitModel');

var commonControllers = require('../controller/commonControllers');
var startkitServerControllers = require('../controller/startkitServerControllers');

var router = express.Router();
console.log('starting stertkitServer...'.white);

router.get('/',//API ROOT
  get,//REQ.METHOD TO FUNCTION
  commonControllers.errorsHandling//TO DE.HANDLING
);

router.get('/:id',//API ROOT,
  commonControllers.checkIDisInteger,//HELPER FUNCTION
  startkitServerControllers.checkId,//HELPER FUNCTION
  getSingle,//REQ.METHOD TO FUNCTION
  commonControllers.errorsHandling//TO DE.HANDLING
);

router.post('/',//API ROOT
  startkitServerControllers.validPostObjectKey,//Validator(3)
  startkitServerControllers.validPostObjectType,//Validator(2)
  post,//REQ.METHOD TO FUNCTION (0)
  commonControllers.errorsHandling//TO DE.HANDLING(1)
);

router.put('/:id',//API ROOT
  commonControllers.checkIDisInteger,//HELPER FUNCTION
  startkitServerControllers.checkId,//HELPER FUNCTION
  startkitServerControllers.validPutObjectKey,//Validator
  startkitServerControllers.validPutObjectType,//Validator
  put,//REQ.METHOD TO FUNCTION
  commonControllers.errorsHandling//TO DE.HANDLING
);

router.delete('/:id', //API ROOT
  commonControllers.checkIDisInteger,//HELPER FUNCTION
  startkitServerControllers.checkId,//HELPER FUNCTION
  deletE,//REQ.METHOD TO FUNCTION
  commonControllers.errorsHandling//TO DE.HANDLING
);

// get METHOD FUNCTION
function get(req, res, next) {
  Startkit.collection()
  .fetch()
  .then(function(data) {
    res.status(200).
    json({
      data: data,
      status: 'success',
      message: 'Retrieved ALL data'
    });
  })
  .catch(function(err) {
    return next(err);
  });
}

// get single METHOD FUNCTION
function getSingle(req, res, next) {
  var stertkitID = req.params.id;
  Startkit.query({
    where: { id: req.params.id }
  })
  .fetch()
  .then(function (data) {
    res.status(200)
    .json({
      status: 'success',
      data: data,
      message: 'Retrieved ONE stertkit'
    });
  })
  .catch(function (err) {
    if (err.code === "22P02") {
      res.status(400).json({
        status: 'error',
        message: req.params.id+' '+'does not exist.',
        error: err
      });
    } else {
      return next(err);//errorsHandling
    }
  });
}

// post METHOD FUNCTION
function post(req, res, next) {
    // var { channel, explicit, genre, name, rating } = req.body;
      Startkit.forge(
        {
          channel: req.body.channel,
          explicit: req.body.explicit,
          genre: req.body.genre,
          name: req.body.name,
          rating: req.body.rating
        })
      .save()
        .then(function(data) {
          res.status(200).json({
            status: 'success',
            data: data,
            message: 'Inserted one startkit'
          });
        })
        .catch(function(err) {
          if (err.code === "23505") {//unique error
            res.status(400).json({
              status: 'error',
              message: req.body.name+' '+'not_unique.',
              error: err
            });
          } else if(err.code === "23502"){//column null error
            res.status(400).json({
              status: 'error',
              message: err.column+'_column does not exist.'+'(非NULL違反)',
              error: err
            });
          } else {
            return next(err);//errorsHandling
          }
        });
}

// put METHOD FUNCTION
function put(req, res, next) {
  Startkit.query({
    where: { id: req.params.id }
  })
  .fetch()
  .then(function (data) {
    data.save(req.body)
    .then(function (a) {
      res.status(200).json({
        status: 'success',
        data: a,
        message: 'put one data'
      });
    })
    .catch(function (err) {
      return next(err);//errorsHandling
    });
  });
}

// delete METHOD FUNCTION
function deletE(req, res, next) {

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
            data: a,
            message: 'delete ONE stertkit'
          });
        });
      } else {
          res.status(400).json({
            status: 'error',
            message: 'ID:'+req.params.id+' '+'does not exist.'
          });
      }
    })
    .catch(function (err) {
        return next(err);//errorsHandling
    });
}

// req.method get post put delete not
router.use((req, res) => {
  res.status(404).json({
    errors: {
      global: `Still working on it. Please try again later when we implement it`
    }
  });
});


module.exports = router;
