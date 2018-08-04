var bookshelf = require('bookshelf');
var knex = require('./knex.js');

module.exports = bookshelf(knex);
