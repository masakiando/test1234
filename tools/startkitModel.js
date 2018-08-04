const bookshelf = require('./bookshelf');

var startkit = bookshelf.Model.extend({
  tableName: 'startkit'
});

module.exports = startkit;
