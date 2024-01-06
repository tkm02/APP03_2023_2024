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
    getAllCourse
} = require("../controllers/controllers.admin") ;


routerAdmin.post('/',loginAdmin)
routerAdmin.post('/registration',registrationAdmin)  
routerAdmin.post('/dashboard/cooperatives/form',registrationCooperative)
routerAdmin.post('/dashboard/formation/add',addCourse)
routerAdmin.get('/dashboard/formation',getAllCourse)
routerAdmin.get('/dashboard/formation/:id',getOneCourse)
routerAdmin.get("/dashboard/cooperatives",getAllCooperative)
routerAdmin.get("/dashboard/cooperatives/:id",getOneCooperative)



module.exports=routerAdmin 