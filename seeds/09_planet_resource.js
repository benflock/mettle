
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('planet_resource').del()
    .then(function () {
      // Inserts seed entries
      //Check me too!
      const planet_resources = [{
        planet_id: 1,
        resource_id: 1,
        qty_mod: 2,
        price_mod: 0.8
      },{
        planet_id: 1,
        resource_id: 2,
        qty_mod: 1,
        price_mod: 0.5
      },{
        planet_id: 1,
        resource_id: 3,
        qty_mod: 0.2,
        price_mod: 0.5
      },{
        planet_id: 1,
        resource_id: 4,
        qty_mod: 0.5,
        price_mod: 0.8
      },{
        planet_id: 1,
        resource_id: 5,
        qty_mod: 0,
        price_mod: 0.5
      },{
        planet_id: 1,
        resource_id: 6,
        qty_mod: 0.5,
        price_mod: 1.5
      },{
        planet_id: 1,
        resource_id: 7,
        qty_mod: 0,
        price_mod: 1.5
      },{
        planet_id: 1,
        resource_id: 8,
        qty_mod: 0,
        price_mod: 1
      },{
        planet_id: 1,
        resource_id: 9,
        qty_mod: 0.2,
        price_mod: 2
      },{
        planet_id: 1,
        resource_id: 10,
        qty_mod: 0,
        price_mod: 2
      },{
        planet_id: 2,
        resource_id: 1,
        qty_mod: 0,
        price_mod: 1
      },{
        planet_id: 2,
        resource_id: 2,
        qty_mod: 0.2,
        price_mod: 1.5
      },{
        planet_id: 2,
        resource_id: 3,
        qty_mod: 1.2,
        price_mod: 1.5
      },{
        planet_id: 2,
        resource_id: 4,
        qty_mod: 0.2,
        price_mod: 1.5
      },{
        planet_id: 2,
        resource_id: 5,
        qty_mod: 0,
        price_mod: 1.5
      },{
        planet_id: 2,
        resource_id: 6,
        qty_mod: 0.8,
        price_mod: 0.8
      },{
        planet_id: 2,
        resource_id: 7,
        qty_mod: 1,
        price_mod: 1.2
      },{
        planet_id: 2,
        resource_id: 8,
        qty_mod: 0.5,
        price_mod: 0.8
      },{
        planet_id: 2,
        resource_id: 9,
        qty_mod: 0.5,
        price_mod: 1.5
      },{
        planet_id: 2,
        resource_id: 10,
        qty_mod: 0,
        price_mod: 2
      },{
        planet_id: 3,
        resource_id: 1,
        qty_mod: 0.5,
        price_mod: 1.5
      },{
        planet_id: 3,
        resource_id: 2,
        qty_mod: 0.8,
        price_mod: 1
      },{
        planet_id: 3,
        resource_id: 3,
        qty_mod: 1,
        price_mod: 1
      },{
        planet_id: 3,
        resource_id: 4,
        qty_mod: 1.5,
        price_mod: 1
      },{
        planet_id: 3,
        resource_id: 5,
        qty_mod: 2,
        price_mod: 1
      },{
        planet_id: 3,
        resource_id: 6,
        qty_mod: 0.2,
        price_mod: 0.5
      },{
        planet_id: 3,
        resource_id: 7,
        qty_mod: 0,
        price_mod: 2
      },{
        planet_id: 3,
        resource_id: 8,
        qty_mod: 0,
        price_mod: 1.2
      },{
        planet_id: 3,
        resource_id: 9,
        qty_mod: 0,
        price_mod: 1
      },{
        planet_id: 3,
        resource_id: 10,
        qty_mod: 0,
        price_mod: 1.2
      },{
        planet_id: 4,
        resource_id: 1,
        qty_mod: 0.2,
        price_mod: 1
      },{
        planet_id: 4,
        resource_id: 2,
        qty_mod: 0,
        price_mod: 1.2
      },{
        planet_id: 4,
        resource_id: 3,
        qty_mod: 1.5,
        price_mod: 1.5
      },{
        planet_id: 4,
        resource_id: 4,
        qty_mod: 0.8,
        price_mod: 1.5
      },{
        planet_id: 4,
        resource_id: 5,
        qty_mod: 0,
        price_mod: 0.8
      },{
        planet_id: 4,
        resource_id: 6,
        qty_mod: 0.5,
        price_mod: 1.5
      },{
        planet_id: 4,
        resource_id: 7,
        qty_mod: 0.8,
        price_mod: 0.8
      },{
        planet_id: 4,
        resource_id: 8,
        qty_mod: 0,
        price_mod: 1.5
      },{
        planet_id: 4,
        resource_id: 9,
        qty_mod: 0,
        price_mod: 0.8
      },{
        planet_id: 4,
        resource_id: 10,
        qty_mod: 0,
        price_mod: 0.5
      },{
        planet_id: 5,
        resource_id: 1,
        qty_mod: 0.8,
        price_mod: 0.5
      },{
        planet_id: 5,
        resource_id: 2,
        qty_mod: 0.8,
        price_mod: 1
      },{
        planet_id: 5,
        resource_id: 3,
        qty_mod: 0.8,
        price_mod: 1.2
      },{
        planet_id: 5,
        resource_id: 4,
        qty_mod: 1.5,
        price_mod: 0.8
      },{
        planet_id: 5,
        resource_id: 5,
        qty_mod:  0.8,
        price_mod: 1
      },{
        planet_id: 5,
        resource_id: 6,
        qty_mod: 0.2,
        price_mod: 0.5
      },{
        planet_id: 5,
        resource_id: 7,
        qty_mod: 1.5,
        price_mod: 0.5
      },{
        planet_id: 5,
        resource_id: 8,
        qty_mod:  0.5,
        price_mod: 1.2
      },{
        planet_id: 5,
        resource_id: 9,
        qty_mod: 0,
        price_mod: 0.8
      },{
        planet_id: 5,
        resource_id: 10,
        qty_mod: 0,
        price_mod: 1.2
      },{
        planet_id: 6,
        resource_id: 1,
        qty_mod: 1,
        price_mod: 1.2
      },{
        planet_id: 6,
        resource_id: 2,
        qty_mod: 2,
        price_mod: 0.8
      },{
        planet_id: 6,
        resource_id: 3,
        qty_mod: 1,
        price_mod: 0.8
      },{
        planet_id: 6,
        resource_id: 4,
        qty_mod: 0.8,
        price_mod: 1
      },{
        planet_id: 6,
        resource_id: 5,
        qty_mod: 0.2,
        price_mod: 1.2
      },{
        planet_id: 6,
        resource_id: 6,
        qty_mod: 0,
        price_mod: 1.2
      },{
        planet_id: 6,
        resource_id: 7,
        qty_mod: 0,
        price_mod: 2
      },{
        planet_id: 6,
        resource_id: 8,
        qty_mod: 0,
        price_mod: 2
      },{
        planet_id: 6,
        resource_id: 9,
        qty_mod: 1,
        price_mod: 0.8
      },{
        planet_id: 6,
        resource_id: 10,
        qty_mod: 1,
        price_mod: 0.8
      },{
        planet_id: 7,
        resource_id: 1,
        qty_mod: 0,
        price_mod: 0
      },{
        planet_id: 7,
        resource_id: 2,
        qty_mod: 0,
        price_mod: 2
      },{
        planet_id: 7,
        resource_id: 3,
        qty_mod: 1.5,
        price_mod: 1.2
      },{
        planet_id: 7,
        resource_id: 4,
        qty_mod: 0.2,
        price_mod: 2
      },{
        planet_id: 7,
        resource_id: 5,
        qty_mod: 0.5,
        price_mod: 1.5
      },{
        planet_id: 7,
        resource_id: 6,
        qty_mod: 1.5,
        price_mod: 1
      },{
        planet_id: 7,
        resource_id: 7,
        qty_mod: 0.8,
        price_mod: 0.8
      },{
        planet_id: 7,
        resource_id: 8,
        qty_mod: 1.5,
        price_mod: 0.5
      },{
        planet_id: 7,
        resource_id: 9,
        qty_mod: 1.2,
        price_mod: 1.2
      },{
        planet_id: 7,
        resource_id: 10,
        qty_mod: 0.5,
        price_mod: 1.2
      },{
        planet_id: 8,
        resource_id: 1,
        qty_mod: 0,
        price_mod: 1.5
      },{
        planet_id: 8,
        resource_id: 2,
        qty_mod: 0,
        price_mod: 1.5
      },{
        planet_id: 8,
        resource_id: 3,
        qty_mod: 0.5,
        price_mod: 1.5
      },{
        planet_id: 8,
        resource_id: 4,
        qty_mod: 2,
        price_mod: 1.2
      },{
        planet_id: 8,
        resource_id: 5,
        qty_mod: 0.8,
        price_mod: 2
      },{
        planet_id: 8,
        resource_id: 6,
        qty_mod: 1,
        price_mod: 1
      },{
        planet_id: 8,
        resource_id: 7,
        qty_mod: 0,
        price_mod: 2
      },{
        planet_id: 8,
        resource_id: 8,
        qty_mod: 0,
        price_mod: 1
      },{
        planet_id: 8,
        resource_id: 9,
        qty_mod: 1.5,
        price_mod: 1.5
      },{
        planet_id: 8,
        resource_id: 10,
        qty_mod: 0,
        price_mod: 1.2
      }];

      return knex('planet_resource').insert(planet_resources);

    });
};
