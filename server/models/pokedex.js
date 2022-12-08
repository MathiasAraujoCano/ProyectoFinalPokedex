'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pokedex extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Pokedex.init({
    idPokemon: DataTypes.INTEGER,
    Name: DataTypes.STRING,
    Type: DataTypes.ARRAY(DataTypes.STRING),
    Weight: DataTypes.DECIMAL,
    Height: DataTypes.DECIMAL,
    Moves: DataTypes.ARRAY(DataTypes.STRING),
    Description: DataTypes.STRING,
    Stats: DataTypes.ARRAY(DataTypes.INTEGER),
    Image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pokedex',
  });
  return Pokedex;
};