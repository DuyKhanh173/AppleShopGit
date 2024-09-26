"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      email: {
        type: Sequelize.STRING,
      },
      matKhau: {
        type: Sequelize.STRING,
      },
      ho: {
        type: Sequelize.STRING,
      },
      ten: {
        type: Sequelize.STRING,
      },
      diaChi: {
        type: Sequelize.STRING,
      },
      soDT: {
        type: Sequelize.INTEGER,
      },
      gioiTinh: {
        type: Sequelize.BOOLEAN,
      },
      maQuyen: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Users");
  },
};
