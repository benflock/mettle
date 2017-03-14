
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('player').del()
    .then(function () {
      // Inserts seed entries

    const players = [{
      id: 1,
      current_round: 1,
      current_credit: 200,
      high_score1: 0,
      high_score2: 0,
      high_score3: 0,
      debt: 10000,
      weight_limit: 125
    }];

    return knex('player').insert(players);

    });
};
