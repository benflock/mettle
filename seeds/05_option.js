
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('option').del()
    .then(function () {
      // Inserts seed entries

    const options = [{
      event_id: ,
      description: '',
      outcome: '',
      label: ''
    }];

    return knex('option').insert(options);

    });
};
