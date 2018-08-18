var express =  require('express');
var colors =  require('colors');
var isEmpty =  require('lodash/isEmpty');
var Startkit = require('./startkitModel');

var router = express.Router();

console.log('starting stertkitServer...'.white);


// return ALL stertkit
router.get('/', function(req, res, next) {
  // res.send('send shows back');//red test用
  Startkit.collection()
  .fetch()
  .then(function(data) {
    res.status(200).
    json({
      data: data,
      status: 'success',
      message: 'Retrieved ALL stertkit'
    });
  })
  .catch(function(err) {
    return next(err);
  });
});

// *** GET Single *** //
//masakiando$ http -v get localhost:3000/api/startkit/dfd
router.get('/:id',function (req, res, next) {
  var stertkitID = req.params.id;
  Startkit.query({
    where: { id: req.params.id }
  })
  .fetch()
  .then(function (data) {
    if(data) {
      res.status(200)
      .json({
        status: 'success',
        data: data,
        message: 'Retrieved ONE stertkit'
      });
    } else {
        res.status(400).json({
          status: 'error',
          message: 'ID:'+req.params.id+' '+'does not exist.'
        });
    }
  })
  .catch(function (err) {
    if (err.code === "22P02") {
      res.status(400).json({
        status: 'error',
        message: req.params.id+' '+'does not exist.',
        error: err
      });
    } else {
      res.status(500).json({
        error: err
      });
    }
  });
});

// insert startkit
router.post('/', function (req, res, next) {
  Startkit.forge({//カラムの値が空でも保存されちゃう
    id: req.params.id,
    channel: req.body.channel,
    explicit: req.body.explicit,
    genre: req.body.genre,
    name: req.body.name,
    rating: req.body.rating
  }).save()
    .then(function(data) {
      res.status(200).json({
        status: 'success',
        data: data,
        message: 'Inserted one startkit'
      });
    })
    .catch(function(err) {//get database error res fun 作る全部で利用
      if (err.code === "23505") {//unique error
        res.status(400).json({
          status: 'error',
          message: req.body.name+' '+'not_unique.',//再利用できるメッセーッジに変える
          error: err
        });
      } else if(err.code === "23502"){//column null error
        res.status(400).json({
          status: 'error',
          message: err.column+'_column does not exist.'+'(非NULL違反)',
          error: err
        });
      } else {
        res.status(500).json({
          error: err
        });
      }
    });
});

function validPutObject(req, res, next) {
    var obj = req.body;
    var array = [];
    Object.keys(obj).forEach((key)=> {
        if (/id|channel|explicit|genre|name|rating/.test(key)) {
        } else {
         array.push(key);
        }
    });
    if( !(isEmpty(array)) ){
      res.status(400).json({
        status: 'error',
        message: array+' '+'key は　何???',
        error: array
      });
    } else {
      return next();
    }
}
// *** put show *** //
router.put('/:id', validPutObject, function(req, res, next) {
  Startkit.query({
    where: { id: req.params.id }
  })
  .fetch()
  .then(function (data) {
    data.save(req.body)
  .then(function(a) {
    res.status(200).json({
      status: 'success',
      data: a,
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
    res.status(500).json({error: err});
  });
});


//req.method get post put delete not
router.use((req, res) => {
  res.status(404).json({
    errors: {
      global: `Still working on it. Please try again later when we implement it`
    }
  });
});


module.exports = router;
