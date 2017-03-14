
exports.up = function(knex, Promise) {
  return knex.schema.createTable('resource', function(resource) {
    resource.increments('id').primary();
    resource.text('name').notNullable();
    resource.integer('cost_base').notNullable();
    resource.integer('cost_range').notNullable();
    resource.integer('qty_base').notNullable();
    resource.integer('qty_range').notNullable();
    resource.decimal('weight', 6, 2).notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('resource');
};
