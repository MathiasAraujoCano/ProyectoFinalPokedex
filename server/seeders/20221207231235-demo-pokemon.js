'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    up: (queryInterface, Sequelize) => {
     return queryInterface.bulkInsert('Pokedex', [{
      idPokemon: 1,
      Name: 'Bulbasaur',
      Type: ['Grass', 'Poison'],
      Weight: 6.9,
      Height: 0.7,
      Moves: ['Chiorophyll', 'Overgrow'],
      Description: 'There is a plant seed on its back right from the day this Pokémon is born, The seed slowly grows larger.',
      Stats: [50, 50, 50, 65, 65, 45],
      Image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
      createdAt: new Date(),
      updatedAt: new Date()
      }
    ]);
    
  },

    down: (queryInterface, Sequelize) => {
     return queryInterface.bulkDelete('Pokedexes', null, {});
     
  }
};
