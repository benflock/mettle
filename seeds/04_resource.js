
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('resource').del()
    .then(function () {
      // Inserts seed entries

    const resources = [{
      id: 1,
      name: 'Tacky Souveniers',
      cost_base: 15,
      cost_range: 10,
      qty_base: 20,
      qty_range: 20,
      weight: 0.5
    },{
      id: 2,
      name: 'Space Vegetables',
      cost_base: 30,
      cost_range: 20,
      qty_base: 15,
      qty_range: 20,
      weight: 1
    },{
      id: 3,
      name: 'Spare Droid Parts',
      cost_base: 100,
      cost_range: 75,
      qty_base: 10,
      qty_range: 25,
      weight: 8
    },{
      id: 4,
      name: 'Bio-Meds',
      cost_base: 200,
      cost_range: 150,
      qty_base: 30,
      qty_range: 20,
      weight: 1.5
    },{
      id: 5,
      name: 'Garbast Barblezargs',
      cost_base: 400,
      cost_range: 220,
      qty_base: 10,
      qty_range: 15,
      weight: 2
    },{
      id: 6,
      name: 'Ancient Artifacts',
      cost_base: 600,
      cost_range: 500,
      qty_base: 1,
      qty_range: 10,
      weight: 5
    },{
      id: 7,
      name: 'Hyper Crystals',
      cost_base: 900,
      cost_range: 700,
      qty_base: 2,
      qty_range: 4,
      weight: 6
    },{
      id: 8,
      name: 'Spice',
      cost_base: 1400,
      cost_range: 1000,
      qty_base: 15,
      qty_range: 25,
      weight: 0.2
    },{
      id: 9,
      name: 'Weaponized Quantonium',
      cost_base: 2200,
      cost_range: 1500,
      qty_base: 1,
      qty_range: 6,
      weight: 12
    },{
      id: 10,
      name: 'Tiny Universe',
      cost_base: 3000,
      cost_range: 1000,
      qty_base: 0,
      qty_range: 2,
      weight: 2
    }];

    return knex('resource').insert(resources);

    });
};
