
exports.up = function(knex, Promise) {
return knex.schema.createTable('attribute_values', function(table){
table.increments('id').index().unsigned().primary();
table.string('attribute_value_name');
});
};

exports.down = function(knex, Promise) {
return knex.schema.dropTable('attribute_values');
};
