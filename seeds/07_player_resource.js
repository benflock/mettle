
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('player_resource').del()
    .then(function () {
      // Inserts seed entries
      //Not sure about this seed, please check me!
      const player_resources = [{
        player_id: ,
        resource_id: ,
        qty:
      }];

      return knex('player_resource').insert(player_resources);

    });
};
