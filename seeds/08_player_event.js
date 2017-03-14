
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('player_event').del()
    .then(function () {
      // Inserts seed entries
      //Check me too!
      const player_events = [{
        player_id: 1,
        event_id: 1
      }];

      return knex('player_event').insert(player_events);

    });
};
