import bcrypt from "bcryptjs";
import db from "../models/index";
import { raw } from "body-parser";

const salt = bcrypt.genSaltSync(10);

let createNewUser = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      let hashPasswordFromBrcypt = await hashUserPassword(data.password);
      await db.User.create({
        email: data.email,
        matKhau: hashPasswordFromBrcypt,
        ho: data.firstname,
        ten: data.lastname,
        diaChi: data.address,
        soDT: data.SDT,
        gioiTinh: data.gioitinh === "1" ? true : false,
        maQuyen: data.maquyen,
      });

      resolve("ok creat a new user");
    } catch (e) {
      reject(e);
    }
  });
};

let hashUserPassword = (password) => {
  return new Promise(async (resolve, reject) => {
    try {
      let hashPassword = await bcrypt.hashSync("B4c0//", salt);
      resolve(hashPassword);
    } catch (e) {
      reject(e);
    }
  });
};

let createNewProduct = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      await db.Sanpham.create({
        tenSP: data.tenSP,
        loaiSP: data.loaiSP,
        giaSP: data.giaSP,
        moTaSP: data.moTa,
        image: data.imageFile,
      });

      resolve("ok creat a new product");
    } catch (e) {
      reject(e);
    }
  });
};

let getAllUser = () => {
  return new Promise(async (resolve, reject) => {
    try {
      let users = db.User.findAll({
        raw: true,
      });
      resolve(users);
    } catch (e) {
      reject(e)
    }
  });
};

let getAllProduct = () =>{
  return new Promise(async(resolve, reject)=>{
    try{
      let sanpham = db.Sanpham.findAll({
        raw: true,
      });
      resolve(sanpham)
    }catch(e){
      reject(e)
    }
  })
}

module.exports = {
  createNewUser: createNewUser,
  hashUserPassword: hashUserPassword,
  createNewProduct: createNewProduct,
  getAllUser: getAllUser,
  getAllProduct: getAllProduct,
};
