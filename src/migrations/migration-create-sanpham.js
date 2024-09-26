"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("sanphams", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      tenSP: {
        type: Sequelize.STRING,
      },
      loaiSP: {
        type: Sequelize.STRING,
      },
      giaSP: {
        type: Sequelize.DOUBLE,
      },
      moTaSP: {
        type: Sequelize.STRING,
      },
      image: {
        type: Sequelize.STRING,
      },
      tinhTrang: {
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
    await queryInterface.dropTable("sanphams");
  },
};
