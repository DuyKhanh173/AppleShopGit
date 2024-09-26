import db from "../models/index";
import CRUDService from "../services/CRUDService";

let getHomePage = async (req, res) => {
  try {
    let data = await db.User.findAll();

    console.log("-------------");
    console.log(data);
    console.log("-------------");

    return res.render("homepage.ejs", {
      data: JSON.stringify(data),
    });
  } catch (e) {
    console.log(e);
  }
};

let getAboutPage = async (req, res) => {
  return res.render("test/about.ejs");
};

let getCRUD = (req, res) => {
  return res.render("crud.ejs");
};

let postCRUD = async (req, res) => {
  let message = await CRUDService.createNewUser(req.body);
  console.log(message);
  return res.send("post crud from server");
};

let getProduct = async (req, res) => {
  return res.render("admin/createProduct.ejs");
};

let postProduct = async (req, res) => {
  let message = await CRUDService.createNewProduct(req.body);
  console.log(message);
  return res.send("post product from server");
};

let displayGetCRUD = async (req, res) => {
  let data = await CRUDService.getAllUser();
  console.log("-------------------");
  console.log(data);
  console.log("--------------------");

  return res.render("displayCRUD.ejs", {
    dataTable: data
  });
};

let displayGetProduct = async(req, res) =>{
  let data = await CRUDService.getAllProduct();
  console.log("--------------------------")
  console.log(data)
  console.log("--------------------------")
  return res.render("displayProduct.ejs",{
    dataTable: data
  })
}

module.exports = {
  getHomePage: getHomePage,
  getAboutPage: getAboutPage,
  getCRUD: getCRUD,
  postCRUD: postCRUD,
  getProduct: getProduct,
  postProduct: postProduct,
  displayGetCRUD: displayGetCRUD,
  displayGetProduct: displayGetProduct,
};
