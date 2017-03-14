
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('event').del()
    .then(function () {
      // Inserts seed entries

      const events = [{
        id: 1,
        name: 'Plot Event 1',
        type: 'plot',
        description: `You're ten thousand credits in debt to the space Mafia. If you haven't paid it off within 21 rounds, they're going to take your space ship and break your legs!`
      }];

      return knex('event').insert(events);

    });
};
