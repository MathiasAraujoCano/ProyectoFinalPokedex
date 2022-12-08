'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    up: (queryInterface, Sequelize) => {
     return queryInterface.bulkInsert('Pokedexes', [{
      idPokemon: 1,
      name: 'Bulbasaur',
      type: ['Grass', 'Poison'],
      weight: 6.9,
      height: 0.7,
      moves: ['Chiorophyll', 'Overgrow'],
      description: 'There is a plant seed on its back right from the day this Pokémon is born, The seed slowly grows larger.',
      stats: [50, 50, 50, 65, 65, 45],
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      idPokemon: 152,
      name: 'Mew',
      type: ['Psychic'],
      weight: 4.0,
      height: 0.4,
      moves: ['Synchronized'],
      description: 'When view through a microscope this Pokemon is short, fine, delicate hair can be seen.',
      stats: [100, 100, 100, 100, 100, 100],
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/151.png',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      idPokemon: 25,
      name: 'Pikachu',
      type: ['Electric'],
      weight: 6.0,
      height: 0.4,
      moves: ['Mega-Punch', 'Pay-Day'],
      description: 'Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy.',
      stats: [35, 55, 40, 50, 50, 90],
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      idPokemon: 4,
      name: 'Charmander',
      type: ['Fire'],
      weight: 8.5,
      height: 0.6,
      moves: ['Mega-Punch', 'Fire-Punch'],
      description: 'It has a preference for hot things. When it rains, steam is said to sput from the tip of it is tail.',
      stats: [40, 52, 43, 60, 50, 65],
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      idPokemon: 7,
      name: 'Squirtle',
      type: ['Water'],
      weight: 9.0,
      height: 0.5,
      moves: ['Torrent', 'Rain-Dish'],
      description: 'When it retracts it is long neck into it is shell, it squirts out water with vigorous force.',
      stats: [44, 50, 65, 50, 64, 43],
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      idPokemon: 92,
      name: 'Gastly',
      type: ['Ghost', 'Type'],
      weight: 0.1,
      height: 1.3,
      moves: ['Levitate'],
      description: 'Born from gases, anyone would faint if engulfed by it is gaseous body, which contains poison.',
      stats: [30, 35, 30, 100, 35, 80],
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/092.png',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      idPokemon: 132,
      name: 'Ditto',
      type: ['Normal'],
      weight: 4.0,
      height: 0.3,
      moves: ['Limber', 'Imposter'],
      description: 'It can reconstitute it is entire cellular structure to change into what it sees, but it returns to normal when it relaxes.',
      stats: [50, 50, 50, 50, 50, 50],
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/132.png',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      idPokemon: 12,
      name: 'Butterfree',
      type: ['Bug', 'Flying'],
      weight: 3.2,
      height: 1.1,
      moves: ['Compound-Eyes', 'Tinted-Lens'],
      description: 'In battle, it flaps it is wings at great speed to release highly toxic dust into the air.',
      stats: [60, 45, 50, 90, 80, 70],
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/012.png',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      idPokemon: 304,
      name: 'Aron',
      type: ['Steel', 'Rock'],
      weight: 6.0,
      height: 0.4,
      moves: ['Sturdy', 'Rock-Head'],
      description: 'It eats iron ore - and sometimes railroad tracks - to build up the steel armor that protects it is body.',
      stats: [50, 70, 100, 40, 40, 30],
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/304.png',
      createdAt: new Date(),
      updatedAt: new Date()
      }
    ]);
    
  },

    down: (queryInterface, Sequelize) => {
     return queryInterface.bulkDelete('Pokedexes', null, {});
     
  }
};
