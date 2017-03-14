
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('planet').del()
    .then(function () {
      // Inserts seed entries

    const planets = [{
      id: 1,
      name: 'Terra Epsilon',
      description: 'A comfortable terrestrial homeworld. Rich in low-end staples, but lacking high-end products.',
      img: './art_assets/planets/planet04.gif',
      style: '#4E993C',
      neighbor1: 3,
      neighbor2: 2
    },{
      id: 2,
      name: 'Desodrox Outpost',
      description: 'The lone surviving outpost on a post-apocalyptic desert world.',
      img: './art_assets/planets/planet06.gif',
      style: '#B28D7E',
      neighbor1: 1,
      neighbor2: 4
    },{
      id: 3,
      name: 'Gar',
      description: 'A green gas giant with a breathable nitrogen rich atmosphere.',
      img: './art_assets/planets/planet02.gif',
      style: '#B5E597',
      neighbor1: 5,
      neighbor2: 6
    },{
      id: 4,
      name: 'Niflhogg',
      description: 'A frozen frontier world where scavengers and explorers make up the bulk of the population.',
      img: './art_assets/planets/planet05.gif',
      style: '#56CFE5',
      neighbor1: 6,
      neighbor2: 7
    },{
      id: 5,
      name: 'Retheon',
      description: 'A yellow gas giant with gated communities and a reputation for stuck-up nobility.',
      img: './art_assets/planets/planet01.gif',
      style: '#E5D46C',
      neighbor1: 3,
      neighbor2: 6
    },{
      id: 6,
      name: 'Station Corbino',
      description: 'A terrestial dome secured to a floating patch of earth. Science and Technology reign here.',
      img: './art_assets/planets/station.gif',
      style: '#B487DE',
      neighbor1: 5,
      neighbor2: 8
    },{
      id: 7,
      name: 'Azaz',
      description: 'A blasted hellscape laden with rivers of fire and filled with bizarre and deadly creatures.',
      img: './art_assets/planets/planet03.gif',
      style: '#DE6438',
      neighbor1: 4,
      neighbor2: 8
    },{
      id: 8,
      name: 'Zorvos',
      description: `Homeworld of the mysterious Zorvogo people. Beautiful sunsets, but don't forget your ventilator or you will choke to death.`,
      img: './art_assets/planets/planet08.gif',
      style: '#FF65DD',
      neighbor1: 6,
      neighbor2: 7
    }];

    return knex('planet').insert(planets);

    });
};
