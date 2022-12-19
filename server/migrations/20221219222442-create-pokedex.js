'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Pokedexes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idPokemon: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      weight: {
        type: Sequelize.DECIMAL
      },
      height: {
        type: Sequelize.DECIMAL
      },
      moves: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      description: {
        type: Sequelize.STRING
      },
      HP: {
        type: Sequelize.INTEGER
      },
      Atk: {
        type: Sequelize.INTEGER
      },
      Def: {
        type: Sequelize.INTEGER
      },
      Spa: {
        type: Sequelize.INTEGER
      },
      Spd: {
        type: Sequelize.INTEGER
      },
      Speed: {
        type: Sequelize.INTEGER
      },
      image: {
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Pokedexes');
  }
};