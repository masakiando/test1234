const bookshelf = require('../bookshelf');

const ShopModel = require('./ShopModel');

var user = bookshelf.Model.extend({
  tableName: 'users',
  shop: function() {
   return this.hasOne(ShopModel);
  }
});

module.exports = user;
