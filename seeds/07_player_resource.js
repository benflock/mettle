
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('player_resource').del()
    .then(function () {
      // Inserts seed entries
      //Not sure about this seed, please check me!
      const player_resources = [{
        player_id: 1,
        resource_id: 2,
        qty: 2
      }];

      return knex('player_resource').insert(player_resources);

    });
};
