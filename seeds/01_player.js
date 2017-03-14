
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('player').del()
    .then(function () {
      // Inserts seed entries

    const players = [{
      current_round: 12,
      current_credit: 12,
      high_score1: 12,
      high_score2: 12,
      high_score3: 12,
      debt: 12,
      weight_limit: 12
    }];

    return knex('player').insert(players);

    });
};
