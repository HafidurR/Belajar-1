'use strict';
const bcrypt = require('bcrypt');

module.exports = {
  async up (queryInterface, Sequelize) {
      const hash = await bcrypt.hash('budi', 10);
      await queryInterface.bulkInsert('users', [{
        name: 'BUDI SATRIYA NAMAEWA',
        address: 'BHAYAM WURUK NO 5 KOTA PROBOLINGGO',
        number_phone: '089333529121',
        username: 'budi',
        password: hash,
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
