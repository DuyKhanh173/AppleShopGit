import express from "express"
import homeController from '../controllers/homeController'


let router = express.Router();

let initWebRoutes = (app) =>{
    router.get('/', homeController.getHomePage);
    router.get('/about', homeController.getAboutPage)
    router.get('/crud', homeController.getCRUD)
    router.get('/create-product', homeController.getProduct)
    
    router.post('/post-crud', homeController.postCRUD)
    router.post('/post-product', homeController.postProduct)
    router.get('/get-crud',homeController.displayGetCRUD)
    router.get('/get-product', homeController.displayGetProduct)
    
    return app.use("/", router);
}

module.exports = initWebRoutes;