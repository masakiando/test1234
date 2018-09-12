const bookshelf = require('../bookshelf');

const UserModel = require('./userModel');

var shop = bookshelf.Model.extend({
  tableName: 'shops',
  user: function() {
    return this.belongsTo(UserModel);
  }
});

module.exports = shop;
