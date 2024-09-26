'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Danhgia extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Danhgia.init({
    ho: DataTypes.STRING,
    ten: DataTypes.STRING,
    email: DataTypes.STRING,
    tenSP: DataTypes.STRING,
    yKien: DataTypes.STRING,
    daDoc: DataTypes.STRING
    
  }, {
    sequelize,
    modelName: 'Danhgia',
  });
  return Danhgia;
};