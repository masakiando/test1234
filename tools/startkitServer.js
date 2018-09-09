var express =  require('express');
var colors =  require('colors');
var isEmpty =  require('lodash/isEmpty');

var Startkit = require('./startkitModel');

var router = express.Router();
console.log('starting stertkitServer...'.white);

function validPostObjectKey(req, res, next) {
  var payload = req.body;
  var keys = ['name', 'channel', 'genre', 'rating', 'explicit'];
  var errors = [];
  keys.forEach(function(key){
    if(!(key in payload)) {
      errors.push(key);
    }
  });
  if( !(isEmpty(errors)) ){
    res.status(400).json({
      status: 'error',
      message: `Invalid JSON. '${errors}' does not exist.`,
      error: errors
    });
  } else {
    return next();
  }
}

function validPostObjectType(req, res, next) {
  // var { name, channel, genre, rating, explicit } = req.body;
  var errors = {};
  var message = '入力が必須です。';
  if (!req.body.name) errors.name = message;
  if (!req.body.channel) errors.channel = message;
  if (!req.body.genre) errors.genre = message;
  if (!req.body.rating) errors.rating = message;
  if (!req.body.explicit) errors.explicit = message;
  if( !isEmpty(errors) ) {
    res.status(400).json(errors);
  } else {
    return next();
  }
}

function checkIDisInteger(req, res, next) {
  var pupID = req.params.id;
  if (isNaN(pupID)) {
    res.status(400).json({
      status: 'error',
      message: req.params.id+':'+'It can not contain anything other than an integer'
    });
  } else {
    return next();
  }
}
// We guarantee that the ID parameter exists from the query string
function checkID(req, res, next) {
  var pupID = parseInt(req.params.id);
    Startkit.query({
      where: { id: req.params.id }
    })
    .fetch()
    .then(function(data) {
      if(!data) {
        /* jshint ignore:start */
        res.status(400)
          .json({
            status: 'error',
            message: `ID '${pupID}' does not exist.`,
            error: pupID
          });
        /* jshint ignore:end */
      } else {
        return next();
      }
    })
    .catch(function(err) {
      return next(err);
    });
}

//Ensure that JSON objects are valid for PUT requests
function validPutObjectKey(req, res, next) {
    var obj = req.body;
    var array = [];
    Object.keys(obj).forEach((key)=> {
       if (!(/id|channel|explicit|genre|name|rating/.test(key))) {
         array.push(key);
       }
       if(key ==='id') {
         return res.status(422).json({
           status: 'error',
           message: 'key No Rows Updated.',
           error: key
         });
       }
    });
    if( !(isEmpty(array)) ){
      res.status(400).json({
        status: 'error',
        message: array+' '+'key Unknown KEY',
        error: array
      });
    } else {
      return next();
    }
}
function validPutObjectType(req, res, next) {
  var obj = req.body;
  var errors = {};
  var message = '入力が必須です。';
  for (var key in obj) {
    if(key==="name"){
      if (!obj[key]) {
        errors.name = message;
      }
    }
    if(key==="channel"){
      if (!obj[key]) {
        errors.channel = message;
      }
    }
    if(key==="genre"){
      if (!obj[key]) {
        errors.genre = message;
      }
    }
    if(key==="rating"){
      if ( isNaN(obj[key]) ) {
        errors.rating = '数字のみを入力してください';
      }
    }
    if(key==="explicit"){
      if ( !( /false|true/.test(obj[key]) ) ) {
      console.log('hihihihihihihi');
        errors.explicit = 'The :attr field must be true or false.';
      }
    }
  }
  if( !isEmpty(errors) ) {
    res.status(400).json(errors);
  } else {
    return next();
  }
}
// API ROOT
//  Get flow
router.get(
  '/',//API ROOT
  get,//REQ.METHOD TO FUNCTION
  errorsHandling//TO DE.HANDLING
);
// Get Single flow
router.get(
  '/:id',//API ROOT,
  checkIDisInteger,//HELPER FUNCTION
  checkID,//HELPER FUNCTION
  getSingle,//REQ.METHOD TO FUNCTION
  errorsHandling//TO DE.HANDLING
);
// Post flow
router.post(
  '/',//API ROOT
  validPostObjectKey,//Validator
  validPostObjectType,//Validator
  post,//REQ.METHOD TO FUNCTION
  errorsHandling//TO DE.HANDLING
);
// Post flow
router.put(
  '/:id',//API ROOT
  checkIDisInteger,//HELPER FUNCTION
  checkID,//HELPER FUNCTION
  validPutObjectKey,//Validator
  validPutObjectType,//Validator
  put,//REQ.METHOD TO FUNCTION
  errorsHandling//TO DE.HANDLING
);
// Delete flow
router.delete(
  '/:id', //API ROOT
  checkIDisInteger,//HELPER FUNCTION
  checkID,//HELPER FUNCTION
  deletE,//REQ.METHOD TO FUNCTION
  errorsHandling//TO DE.HANDLING
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

// helper functions//
//Handling common database errors
function errorsHandling(err, req, res, next) {
 if(err.code === "42P01"){//not Table
  res.status(400).json({
    status: 'error',
    message: 'parserOpenTable',
    error: err
  });
  } else {
    res.status(500).json({
      error: err
    });
  }
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
