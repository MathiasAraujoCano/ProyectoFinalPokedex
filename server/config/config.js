require('dotenv').config()

module.exports = {
    development: {
    username: 'postgres',
    password: 'testing',
    database: 'dbPokemon',
    host: 'localhost',
    dialect: 'postgres'
  }
}
