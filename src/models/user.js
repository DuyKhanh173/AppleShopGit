'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    email: DataTypes.STRING,
    matKhau: DataTypes.STRING,
    ho: DataTypes.STRING,
    ten: DataTypes.STRING,
    diaChi: DataTypes.STRING,
    soDT: DataTypes.INTEGER,
    gioiTinh: DataTypes.BOOLEAN,
    maQuyen: DataTypes.STRING
    
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};