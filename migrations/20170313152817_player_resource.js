
exports.up = function(knex, Promise) {
  return knex.schema.createTable('player_resource', function(player_resource) {
    player_resource.integer('player_id').notNullable().references('player.id');
    player_resource.integer('resource_id').notNullable().references('resource.id');
    player_resource.integer('qty').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('player_resource');
};
