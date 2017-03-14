
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('player_planet').del()
    .then(function () {
      // Inserts seed entries

      //Not sure how to create this seed
      const player_planets = [{

      }];

      return knex('player_planet').insert(player_planets);

    });
};
