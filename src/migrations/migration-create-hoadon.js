"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("hoadon", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      maKH: {
        type: Sequelize.STRING,
      },
      ho: {
        type: Sequelize.STRING,
      },
      ten: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      diachi: {
        type: Sequelize.STRING,
      },
      tongTien: {
        type: Sequelize.DOUBLE,
      },
      trangThai: {
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
    await queryInterface.dropTable("hoadon");
  },
};
