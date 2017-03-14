
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('resource').del()
    .then(function () {
      // Inserts seed entries

    const resources = [{
      name: '',
      cost_base: ,
      cost_range: ,
      qty_base: ,
      qty_range ,
      weight:
    }];

    return knex('resource').insert(resources);

    });
};
