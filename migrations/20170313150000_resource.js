
exports.up = function(knex, Promise) {
  return knex.schema.createTable('resource', function(resource) {
    resource.increments();
    resource.text('name').notNullable();
    resource.integer('cost_base').notNullable();
    resource.integer('cost_range').notNullable();
    resource.integer('qty_base');
    resource.integer('qty_range');
    resource.integer('weight').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('resource');
};
