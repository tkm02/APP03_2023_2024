const express = require("express")
const routerAdmin = express.Router()

const { 
    loginAdmin,
    registrationAdmin,
    registrationCooperative ,
    addCourse,
    getAllCooperative,
    getOneCooperative,
    getOneCourse,
    getAllCourse,
    getAllProducts,
    isValide,
} = require("../controllers/controllers.admin") ;
const { getOneProduct } = require("../controllers/controllers.cooperative");


routerAdmin.post('/',loginAdmin)
routerAdmin.post('/registration',registrationAdmin)  
routerAdmin.post('/dashboard/cooperatives/form',registrationCooperative)
routerAdmin.post('/dashboard/formation/add',addCourse)
routerAdmin.get('/dashboard/formation',getAllCourse)
routerAdmin.get('/dashboard/formation/:id',getOneCourse)
routerAdmin.get("/dashboard/cooperatives",getAllCooperative)
routerAdmin.get("/dashboard/cooperatives/:id",getOneCooperative)
routerAdmin.get("/dashboard/validations",getAllProducts)
routerAdmin.get("/dashboard/validations/:productId",getOneProduct)

routerAdmin.put("/dashboard/validations/:productId",isValide)
// routerAdmin.put("/dashboard/validations/:productId",noValide)




module.exports=routerAdmin 