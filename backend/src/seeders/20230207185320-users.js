'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('users', [{
      name: 'John Doe',
      cpf: '35276975145',
      phoneNumber: '2466244434',
      email: 'lucasdacunha1@gmail.com'
    },
    {
      name: 'John Doe2',
      cpf: '35276975345',
      phoneNumber: '2466245434',
      email: 'lucasdacunha2@gmail.com'
    },
    {
      name: 'John Doe3',
      cpf: '35276975345',
      phoneNumber: '2466245434',
      email: 'lucasdacunha3@gmail.com'
    }
  ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});  
  }
};
