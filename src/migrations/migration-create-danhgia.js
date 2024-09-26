"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("danhgia", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
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
      tenSP: {
        type: Sequelize.STRING,
      },
      yKien: {
        type: Sequelize.STRING,
      },
      daDoc: {
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
    await queryInterface.dropTable("danhgia");
  },
};
