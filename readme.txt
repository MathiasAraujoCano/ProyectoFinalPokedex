POKEDEX
App hecha en React que colecciona Pokemones

Instalación Server
Ejecute los siguientes comandos para la creación del server. Debe estar ubicado en la carpeta server

npm i                           => para instalar todas las dependencias del proyecto
Configurar config.js con los valores adecuados de acceso
{    development: {
    username: 'postgres',
    password: 'testing',
    database: 'dbPokemon',
    host: 'localhost',
    dialect: 'postgres'
}}
sequelize db:create             => para crear la base de datos 
npx sequelize-cli db:migrate    => para crear las tablas en base de datos
npx sequelize-cli db:seed:all   => para levantar nuestros datos demos de usuarios y pokemones 
nodemon app.js                  => levantamos nuestro server
Instalación Cliente
Ejecute los siguientes comandos para la creación del cliente. Debe estar ubicado en la carpeta cliente

npm i                                   => para instalar todas las dependencias del proyecto
npm install react-bootstrap bootstrap   => instala la libreria que usamos
npm start                               => levantamos nuestro cliente
Demo
Para acceder a la demo debe ingresar al http://localhost:3000
Para Iphone SE esta realizado

Usuario: admin@admin.com Password: 1234

Authors
Maria José Araujo
Yael Calcagno
Mathias Araujo