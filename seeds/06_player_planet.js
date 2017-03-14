
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('player_planet').del()
    .then(function () {
      // Inserts seed entries

      //Not sure how to create this seed
      const player_planets = [{
        planet_id: 1,
        player_id: 1
      },{
        planet_id: 3,
        player_id: 1
      }];

      return knex('player_planet').insert(player_planets);

    });
};
