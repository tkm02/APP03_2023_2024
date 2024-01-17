const express = require("express")
const routerCooperative = express.Router()
const multer = require('multer');
const upload = multer({ limits: { fileSize: 50 * 1024 * 1024 } });

const {loginCooperartive,registrationMembers,getAllMembers, getOneMember, addProduct, getAllProducts, getOneProduct} = require('../controllers/controllers.cooperative')
const { getAllCourse, getOneCourse } = require("../controllers/controllers.admin")
  
routerCooperative.post('/',loginCooperartive)
routerCooperative.post('/dashboard/:id/menbres/ajout-menbre',registrationMembers)
routerCooperative.get('/dashboard/:cooperativeId/menbres',getAllMembers)
routerCooperative.get('/dashboard/menbres/oneMember/:menberId',getOneMember)
routerCooperative.post('/dashboard/:cooperativeId/stock/add-products', upload.array('avatar'), addProduct);
routerCooperative.get('/dashboard/:cooperativeId/stock/',getAllProducts)
routerCooperative.get('/dashboard/stock/oneProduct/:productId',getOneProduct)
routerCooperative.get('/dashboard/formation',getAllCourse)
routerCooperative.get('/dashboard/formation/:id',getOneCourse)



module.exports = routerCooperative
     
