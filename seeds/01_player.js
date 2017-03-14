
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('player').del()
    .then(function () {
      // Inserts seed entries

    const players = [{
      current_round: ,
      current_credit: ,
      high_score1: ,
      high_score2: ,
      high_score3: ,
      debt: ,
      weight_limit:
    }];

    return knex('player').insert(players);

    });
};
