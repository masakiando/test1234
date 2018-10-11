
exports.up = function(knex, Promise) {
return knex.schema.createTable('attribute_keys', function(table){
table.increments('id').index().unsigned().primary();
table.string('attribute_key_name');
});
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('attribute_keys');
};
