
exports.up = function(knex, Promise) {
  return knex.schema.createTable('planet_resource', function(planet_resource) {
    // planet_resource.integer('id').notNullable().primary();
    planet_resource.integer('planet_id').notNullable().references('planet.id');
    planet_resource.integer('resource_id').notNullable().references('resource.id');
    planet_resource.primary(['planet_id', 'resource_id']);
    planet_resource.decimal('qty_mod', 3, 2);
    planet_resource.decimal('price_mod', 3, 2);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('planet_resource');
};
