'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
   up (queryInterface, Sequelize) {

     return queryInterface.bulkInsert('Users', [{
        Name: 'Yael Calcagno',
        Email: 'yaelcalcagno@gmail.com',
        Password: '1234',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Name: 'Majo Araujo',
        Email: 'majoaraujopiedra@gmail.com',
        Password: '1234',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Name: 'Mathias Araujo',
        Email: 'mathias.araujo2310@gmail.com',
        Password: '1234',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Name: 'Admin',
        Email: 'admin@admin.com',
        Password: '1234',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
    
  },

   down (queryInterface, Sequelize) {
  return queryInterface.bulkDelete('Users', null, {});
     
  }
};
