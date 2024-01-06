// LES IMPORTS
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const session = require("express-session")
// ROUTES
const routerAdmin = require('./routes/routes.admin');
const routerCooperative = require("./routes/routes.cooperative");
const routerEcom = require("./routes/routes.ecom");

// ACTIVER CORS
app.use(cors());

//VARIABLE D'ENVIRONNEMENT
dotenv.config({ path: "process.env" });
const port = process.env.PORT;
const database = process.env.DATA_BASE;

mongoose
  .connect(`${database}`, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("====================================");
    console.log("connexion a mongodb réussie!");
    console.log("====================================");
  })
  .catch((err) =>
    console.log(err, "impossible de se connecter vérifie et réessaie")
  );

app.use(
  session({
    name:process.env.SESSION_NAME,
    resave: false,
    saveUninitialized:false,
    secret: process.env.SESSION_KEY,  
    cookie:{
      maxAge: 1000 * 60 * 60 * 24 *7,
      secure:false
    }
  })
)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

// LES POINTS D'ENTREE DES APPLICATIONS
app.use('/api/admin',routerAdmin)
app.use('/api/cooperative',routerCooperative)
app.use('/api/ecom',routerEcom)







module.exports = app;
