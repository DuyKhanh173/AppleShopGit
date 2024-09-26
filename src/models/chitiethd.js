"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Chitiethd extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Chitiethd.init(
    {
      maHD: DataTypes.INTEGER,
      maSP: DataTypes.INTEGER,
      soLuong: DataTypes.INTEGER,
      giaSP: DataTypes.DOUBLE,
      thanhTien: DataTypes.DOUBLE

    },
    {
      sequelize,
      modelName: "Chitiethd",
    }
  );
  return Chitiethd;
};
