const express = require("express")
const routerCooperative = express.Router()

const loginCooperartive = require('../controllers/controllers.cooperative')

routerCooperative.post('/',loginCooperartive)


module.exports = routerCooperative

