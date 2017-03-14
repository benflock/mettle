
exports.up = function(knex, Promise) {
  return knex.schema.createTable('player_planet', function(player_planet) {
    player_planet.integer('planet_id').references('planet.id').notNullable();
    player_planet.integer('player_id').references('player.id').onDelete('cascade');
    player_planet.primary(['planet_id', 'player_id']);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('player_planet');
};
