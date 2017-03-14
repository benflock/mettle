
exports.up = function(knex, Promise) {
  return knex.schema.createTable('option', function(option) {
    option.increments('id').primary();
    option.integer('event_id').notNullable().references('event.id').onDelete('cascade');
    option.text('description').notNullable();
    option.text('outcome').notNullable();
    option.text('label').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('option');
};
