'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pokedexes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Pokedexes.init({
    idPokemon: DataTypes.BIGINT,
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    weight: DataTypes.DECIMAL,
    height: DataTypes.DECIMAL,
    moves: DataTypes.STRING,
    description: DataTypes.STRING,
    HP: DataTypes.INTEGER,
    Atk: DataTypes.INTEGER,
    Def: DataTypes.INTEGER,
    Spa: DataTypes.INTEGER,
    Spd: DataTypes.INTEGER,
    Speed: DataTypes.INTEGER,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pokedexes',
  });
  return Pokedexes;
};