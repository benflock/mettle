
exports.up = function(knex, Promise) {
  return knex.schema.createTable('event', function(event) {
    event.increments('id').primary();
    event.text('name').notNullable();
    event.enu('type', ['plot', 'random', 'triggered']).defaultTo('random').notNullable();
    event.text('description');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('event');
};
