require('dotenv').config();
const cors = require('cors');
import express from 'express';
import webpack from 'webpack';
import path from 'path';
import config from '../webpack.config.dev';
import open from 'open';
import bodyParser from 'body-parser';
const formData = require('express-form-data');
const { CLIENT_ORIGIN } = require('./routes/config');

//
var startkit = require('./routes/startkitServer');
var users = require('./routes/usersServer');
var acth = require('./routes/acthServer');
var buy = require('./routes/buyServer');
var imageUpload = require('./routes/imageUploadServer');
var categories= require('./routes/categoriesServer');
var attribute= require('./routes/attributeServer');

/* eslint-disable no-console */

const port = 3000;
const app = express();
const compiler = webpack(config);
app.use(cors({
  origin: CLIENT_ORIGIN
}));
app.use(formData.parse());
app.use(bodyParser.json());
app.use('/api/startkit', startkit);
app.use('/api/users', users);
app.use('/api/acth', acth);
app.use('/api/buy', buy);
app.use('/api/imageUpload', imageUpload);
app.use('/categories', categories);
app.use('/api/attribute', attribute);

//指定されたマウントミドルウェア指定されたパスに関数や機能を：要求されたパスのベースが一致したときに、ミドルウェア機能が実行されますpath。
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));
//
app.use(require('webpack-hot-middleware')(compiler));

//ファイルをオクテットストリームとして送信します。
app.get('*', function(req, res) {
  res.sendFile(path.join( __dirname, '../src/index.html'));
});

// development error handler
// will print stacktrace


app.use(function(req, res, next) {
  var err = new Error('Not Found Req Routes');
  err.status = 404;
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: err,
    status: 'error'
  });
});

if(!module.parent) {
  app.listen(port, function(err) {
    if (err) {
      console.log(err);
    } else {
      // open(`http://localhost:${port}`);
    }
  });
}

module.exports = app;
