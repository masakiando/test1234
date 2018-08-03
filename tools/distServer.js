var cors = require('cors');
var express = require('express');
var path = require('path');
var open = require('open');
var compression = require('compression');
/*eslint-disable no-console */

const app = express();
app.use(cors());

app.set('port', (process.env.PORT || 5000));

app.use(compression());
app.use(express.static('dist'));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});
