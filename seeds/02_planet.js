
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('planet').del()
    .then(function () {
      // Inserts seed entries

    const planets = [{
      name: '',
      description: '',
      img: '',
      style: '',
      neighbor1: ,
      neighbor2: 
    }];

    return knex('planet').insert(planets);

    });
};
