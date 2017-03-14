
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('option').del()
    .then(function () {
      // Inserts seed entries

    const options = [{
      id: 1,
      event_id: 1,
      description: 'Better get trading...',
      outcome: 'This is the outcome',
      label: 'OK'
    }];

    return knex('option').insert(options);

    });
};
