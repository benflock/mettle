
exports.up = function(knex, Promise) {
  return knex.schema.createTable('option', function(option) {
    option.increments();
    option.integer('event_id').notNullable();
    option.text('description').notNullable();//Need to set a PK
    option.text('outcome').notNullable();
    option.text('label').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('option');
};
