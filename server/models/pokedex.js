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
    name: DataTypes.STRING,
    type: DataTypes.ARRAY(DataTypes.STRING),
    weight: DataTypes.DECIMAL,
    height: DataTypes.DECIMAL,
    moves: DataTypes.ARRAY(DataTypes.STRING),
    description: DataTypes.STRING,
    stats: DataTypes.ARRAY(DataTypes.INTEGER),
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pokedex',
  });
  return Pokedex;
};