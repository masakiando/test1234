const bookshelf = require('../bookshelf');

var user = bookshelf.Model.extend({
  tableName: 'user'
});

module.exports = user;
