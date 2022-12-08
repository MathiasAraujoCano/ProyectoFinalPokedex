'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
   up(queryInterface, Sequelize) {
    return queryInterface.createTable('Pokedex', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idPokemon: {
        type: Sequelize.INTEGER
      },
      Name: {
        type: Sequelize.STRING
      },
      Type: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      Weight: {
        type: Sequelize.DECIMAL
      },
      Height: {
        type: Sequelize.DECIMAL
      },
      Moves: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      Description: {
        type: Sequelize.STRING
      },
      Stats: {
        type: Sequelize.ARRAY(Sequelize.INTEGER)
      },
      Image: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
   down(queryInterface, Sequelize) {
    return queryInterface.dropTable('Pokedex');
  }
};