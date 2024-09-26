'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'ynguyenit907@gmail.com',
        matKhau: '123456',
        ho: 'Nguyen Thi Nhu',
        ten: 'Y',
        diaChi: 'TPHCM',
        gioiTinh: 0,
        loaiQuyen:'QUYEN',
        maQuyen:'Q1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
