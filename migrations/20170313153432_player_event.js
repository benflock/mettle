
exports.up = function(knex, Promise) {
  return knex.schema.createTable('player_event', function(player_event) {
    player_event.integer('player_id').notNullable();//needs a key setting
    player_event.integer('event_id').notNullable();//needs a key setting
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('player_event');
};
