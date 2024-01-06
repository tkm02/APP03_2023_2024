const express = require("express")
const routerEcom = express.Router()

const loginAcheteur = require("../controllers/controllers.ecom")

routerEcom.post('/login',loginAcheteur)

module.exports=routerEcom