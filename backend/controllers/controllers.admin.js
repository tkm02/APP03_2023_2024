const Admin = require("../models/models.admin");
const Cooperative = require("../models/models.cooperative");
const Formation = require("../models/models.formations");
const bcrypt = require("bcrypt");

// ADMIN
const registrationAdmin = (req, res) => {
  const saltRounds = 10;
  bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
    if (err) {
      console.log(err);
      return;
    }
    req.body.password = hash;

    const admin = new Admin({
      admin: req.body.admin,
      password: req.body.password,
    });
    admin
      .save()
      .then(() => res.send("Admin Incription avec success"))
      .catch((error) => res.send({ error }));
  });
};
const loginAdmin = (req, res) => {
  const { admin, password } = req.body;
  Admin.findOne({ admin }).then((admin) => {
    const hash = admin.password;
    bcrypt.compare(password, hash, (err, result) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ message: "Une erreur est survenue" });
      }
      if (!result) {
        return res.status(401).json({ message: "Mot de passe incorrect" });
      }
      req.session.adminToken = admin._id + Date.now();

      res.json({ message: req.session });
    });
  });
};

//COOPERATIVES
const registrationCooperative = (req, res) => {
  const saltRounds = 10;
  bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
    if (err) {
      console.log(err);
      return res.status(500).send("Erreur lors du hachage du mot de passe");
    }
    req.body.password = hash;
    // const chemin = req.body.image;
    // const nomFichier = chemin.substring(chemin.lastIndexOf("\\") + 1);
    // const imagePath = path.resolve("public", "image", chemin);
    // const img = fs.readFileSync(imagePath);
    // const imageDataUrl = "data:image/jpeg;base64," + img.toString("base64");
    // console.log(imageDataUrl);
    // Créer un nouvel objet Cooperative
    const cooperative = new Cooperative({
      cooperativeName: req.body.cooperativeName,
      addressGeographique: req.body.addressGeographique,
      numeroTelephone: req.body.numeroTelephone,
      representantLegal: req.body.representantLegal,
      representativeRole: req.body.representativeRole,
      representantLegal: req.body.representantLegal,
      representativeEmail: req.body.representativeEmail,
      representativePhoneNumber: req.body.representativePhoneNumber,
      typesProduits: req.body.typesProduits,
      password: req.body.password,
      nombreMembres: req.body.nombreMembres,
      image: req.body.image,
      acceptationConditions: req.body.acceptationConditions,
    });

    // Sauvegarder la coopérative dans la base de données
    cooperative
      .save()
      .then(() => res.status(201).send("Coopérative inscrite avec succès"))
      .catch((error) => res.status(500).send({ error }));
  });
};

const getAllCooperative = (req, res) => {
  Cooperative.find()
    .then((cooperatives) => res.status(200).json({ cooperatives }))
    .catch((err) => res.status(500).json({ err }));
};

const getOneCooperative = (req, res) => {
  Cooperative.findById(req.params.id)
    .then((oneCooperative) => res.json({ oneCooperative }))
    .catch((err) => res.json({ err }));
};

//FORMATIONS
const addCourse = (req, res) => {
  // Extraire les données de la requête
  const { titre, description, date, duree, formateur, video } = req.body;

  // Créer une nouvelle instance du modèle Formation
  const nouvelleFormation = new Formation({
    titre,
    description,
    date,
    duree,
    video,
    formateur,
  });
  nouvelleFormation
    .save()
    .then(() => res.status(201).send("Formation ajouté avec succès"))
    .catch((error) => res.status(500).send({ error }));
};
const getAllCourse = (req, res) => {
  Formation.find()
    .then((formations) => res.status(200).json({ formations }))
    .catch((err) => res.status(500).json({ err }));
};
const getOneCourse = (req,res)=>{
  Formation.findById(req.params.id)
    .then((oneFormation) => res.json({ oneFormation }))
    .catch((err) => res.json({ err }));
}

module.exports = {
  loginAdmin,
  registrationAdmin,
  registrationCooperative,
  addCourse,
  getAllCooperative,
  getOneCooperative,
  getAllCourse,
  getOneCourse
};
