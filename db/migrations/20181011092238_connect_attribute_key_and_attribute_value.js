
exports.up = function(knex, Promise) {
return knex.schema.createTable('connect_attribute_key_and_attribute_value', function(table){
table.increments('id').index().unsigned().primary();
table.integer('attribute_key_id').index().unsigned().notNullable().references('id').inTable('attribute_keys').onDelete('CASCADE');
table.integer('attribute_values_id').index().unsigned().notNullable().references('id').inTable('attribute_values').onDelete('CASCADE');
});
};

exports.down = function(knex, Promise) {
return knex.schema.dropTable('connect_attribute_key_and_attribute_value');
