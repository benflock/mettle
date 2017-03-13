
exports.up = function(knex, Promise) {
  return knex.schema.createTable('planet', function(planet) {
    planet.increments('id').primary();
    planet.text('name').notNullable();
    planet.text('description').notNullable();
    planet.text('img').notNullable();
    planet.text('style').notNullable();
    planet.integer('neighbor1').notNullable();
    planet.integer('neighbor2').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('planet');
};
