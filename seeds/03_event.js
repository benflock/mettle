
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('event').del()
    .then(function () {
      // Inserts seed entries

      const events = [{
        name: '',
        type: 'plot',
        description: ''
      }];

      return knex('event').insert(events);

    });
};
