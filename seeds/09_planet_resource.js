
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('planet_resource').del()
    .then(function () {
      // Inserts seed entries
      //Check me too!
      const planet_resources = [{
        planet_id: ,
        resource_id: ,
        qty_mod: ,
        price_mod:
      }];

      return knex('planet_resource').insert(planet_resources);

    });
};
