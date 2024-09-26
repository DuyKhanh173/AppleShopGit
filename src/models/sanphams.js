"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Sanpham extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Sanpham.init(
    {
      tenSP: DataTypes.STRING,
      loaiSP: DataTypes.STRING,
      giaSP: DataTypes.DOUBLE,
      moTaSP: DataTypes.STRING,
      image: DataTypes.STRING,
      tinhTrang: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Sanpham",
    }
  );
  return Sanpham;
};
