
exports.up = function(knex, Promise) {
  return knex.schema.createTable('player_event', function(player_event) {
    player_event.integer('player_id').notNullable().references('player.id');
    player_event.integer('event_id').notNullable().references('event.id');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('player_event');
};
