import express from 'express';
import webpack from 'webpack';
import path from 'path';
import config from '../webpack.config.dev';
import open from 'open';
import bodyParser from 'body-parser';
//
var startkit = require('./startkit');

/* eslint-disable no-console */

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(bodyParser.json());
app.use('/api/startkit', startkit);

//指定されたマウントミドルウェア指定されたパスに関数や機能を：要求されたパスのベースが一致したときに、ミドルウェア機能が実行されますpath。
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));
//
app.use(require('webpack-hot-middleware')(compiler));

//ファイルをオクテットストリームとして送信します。
app.get('/', function(req, res) {
  res.sendFile(path.join( __dirname, '../src/index.html'));
});

// development error handler
// will print stacktrace


app.use(function(req, res, next) {
  var err = new Error('Not Found');
  console.log(err);
  err.status = 404;
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: err,
    status: 'error'
  });
});



app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    // open(`http://localhost:${port}`);
  }
});
