const express = require("express")
const routerEcom = express.Router()

const {loginClient, registrationClient, addToPanier} = require("../controllers/controllers.ecom")

routerEcom.post('/',loginClient)  
routerEcom.post('/registration',registrationClient)
routerEcom.post('/oneProduct/:userId/:productId',addToPanier)

 
module.exports=routerEcom