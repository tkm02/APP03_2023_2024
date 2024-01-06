const Cooperatives = require('../models/models.cooperative')
const bcrypt = require("bcrypt");

const loginCooperartive = (req,res) =>{
    const { cooperativeName, password } = req.body;
    Cooperatives.findOne({ cooperativeName }).then((cooperative) => {
    const hash = cooperative.password;
    bcrypt.compare(password, hash, (err, result) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ message: "Une erreur est survenue" });
      }
      if (!result) {
        return res.status(401).json({ message: "Mot de passe incorrect" });
      }
      req.session.adminToken = cooperative._id + Date.now();

      res.json({ message: req.session });
    });
  });
}






module.exports = loginCooperartive
