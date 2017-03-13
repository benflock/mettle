
exports.up = function(knex, Promise) {
  return knex.schema.createTable('planet_resource', function(planet_resource) {
    planet_resource.integer('id').notNullable().primary();
    planet_resource.integer('planet_id').notNullable().references('planet.id');
    planet_resource.integer('resource_id').notNullable().references('resource.id');
    planet_resource.integer('qty_mod');
    planet_resource.integer('price_mod');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('planet_resource');
};
