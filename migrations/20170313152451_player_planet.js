
exports.up = function(knex, Promise) {
  return knex.schema.createTable('player_planet', function(player_planet) {
    player_planet.integer();//Needs to be set as a key
    player_planet.integer();//Needs to be set as a key
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('player_planet');
};
