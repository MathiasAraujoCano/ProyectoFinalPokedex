/////*** USUARIOS ***\\\\\

*** ADMIN **
email: admin@admin.com
password: 1234

*** MATHIAS ***
email: mathias.araujo2310@gmail.com
password: 1234

*** MAJO ***
email: majoaraujopiedra@gmail.com
password: 1234

*** YAEL ***
email: yaelcalcagno@gmail.com
password: 1234

--------------------------------------------------

/////*** COMANDOS ***\\\\\

Crear en el pgAdmin la base de datos llamada "dbPokemon"
Configurar config.js con los valores adecuados de acceso a su base de datos
{    development: {
    username: 'postgres',
    password: 'testing',
    database: 'dbPokemon',
    host: 'localhost',
    dialect: 'postgres'
}}
npx sequelize-cli db:migrate    => para crear en el pgAdmin las tablas
npx sequelize-cli db:seed:all   => para levantar nuestros datos demos de usuarios y pokemones 
nodemon app.js                  => levantamos nuestro server
npm start                       => levantamos nuestro react

--------------------------------------------------

/////*** ROUTES ***\\\\\

*** CONSEGUIR POKEMONES ***
GET
http://localhost8001/pkmn

*** CONSEGUIR USUARIOS ***
GET
http://localhost8001/user

*** AGREGAR POKEMONES ***
POST
http://localhost8001/pkmn

*** CONSEGUIR UN POKEMON POR ID DEL POKEMON ***
GET
http://localhost8001/pkmn/id

*** BORRAR UN POKEMON POR ID DEL POKEMON ***
DELETE
http://localhost8001/pkmn/id

---------------------------------------------------

instalar libreria de boostrap
npm install react-bootstrap bootstrap
