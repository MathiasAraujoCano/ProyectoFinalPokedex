'use strict';
const bcrypt = require("bcrypt");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [{
      "name": "majo",
      "email": "majoaraujopiedra@gmail.com",
      "password": bcrypt.hashSync('1234', bcrypt.genSaltSync(8)),
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      "name": "yael",
      "email": "yaelcalcagno@gmail.com",
      "password": bcrypt.hashSync('1234', bcrypt.genSaltSync(8)),
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
        "name": "mathi",
        "email": "mathiaraujo@gmail.com",
        "password": bcrypt.hashSync('1234', bcrypt.genSaltSync(8)),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "name": "admin",
        "email": "admin@admin.com",
        "password": bcrypt.hashSync('1234', bcrypt.genSaltSync(8)),
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Users', null, {});
  }
};
