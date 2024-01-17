const Cooperatives = require("../models/models.cooperative");
const Producteur = require("../models/models.producteur");
const Product = require("../models/models.produits");
const bcrypt = require("bcrypt");
const multer = require("multer");
const upload = multer();

const loginCooperartive = (req, res) => {
  const { cooperativeName, password } = req.body;
  Cooperatives.findOne({ cooperativeName }).then((cooperative) => {
    if (!cooperative) return;
    const hash = cooperative.password;
    bcrypt.compare(password, hash, (err, result) => {
      if (err) {
        console.log(err);
        return res.sendStatus(500).json({ message: "Une erreur est survenue" });
      }
      if (!result) {
        return res.sendStatus(401).json({ message: "Mot de passe incorrect" });
      }
      req.session.adminToken = cooperative._id;

      res.json({ message: req.session });
    });
  });
};

const registrationMembers = (req, res) => {
  const saltRounds = 10;
  bcrypt.hash(req.body.formData.password, saltRounds, (err, hash) => {
    if (err) {
      console.log(err);
      return res.sendStatus(500).json({ error: "Internal Server Error" });
    }

    req.body.formData.password = hash;
    const idCooperative = req.params.id;

    console.log(idCooperative);
    console.log(req.body.formData);

    const newMember = new Producteur({
      nom: req.body.formData.nom,
      prenom: req.body.formData.prenom,
      dateNaissance: req.body.formData.dateNaissance,
      sexe: req.body.formData.sexe,
      adresse: req.body.formData.adresse,
      email: req.body.formData.email,
      telephone: req.body.formData.telephone,
      role: req.body.formData.role,
      dateAdhesion: req.body.formData.dateAdhesion,
      typeParticipation: req.body.formData.typeParticipation,
      username: req.body.formData.username,
      password: req.body.formData.password, // Stocker le mot de passe haché
      avatar: req.body.formData.avatar.name,
      cooperative: idCooperative,
    });

    newMember
      .save()
      .then((membre) => {
        Cooperatives.findOne(membre.cooperative)
          .then((coop) => {
            coop.members.push(membre._id);
            coop
              .save()
              .then(() => {
                res.json({ coop });
              })
              .catch((err) => {
                console.error(err);
                res.sendStatus(500).json({ error: "Internal Server Error" });
              });
          })
          .catch((err) => {
            console.error(err);
            res.sendStatus(500).json({ error: "Internal Server Error" });
          });
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500).json({ error: "Internal Server Error" });
      });
  });
};

const getAllMembers = (req, res) => {
  const cooperativeId = req.params.cooperativeId;
  Cooperatives.findById(cooperativeId)
    .populate("members")
    .exec()
    .then((coop) => res.send(coop.members))
    .catch((err) => res.sendStatus(500).json({ err }));
};

const getOneMember = (req, res) => {
  const menberId = req.params.menberId;
  Producteur.findById(menberId)
    .then((menber) => res.json({ menber }))
    .catch((err) => res.json({ err }));
};

const addProduct = async (req, res) => {
  const cooperative = req.params.cooperativeId;
  const {
    nomProduit,
    descriptionProduit,
    typeProduit,
    Quantite,
    dateRecolte,
    conditionsStockage,
    reduction,
    acceptationConditions,
    photosProduit,
  } = req.body.formData;

  // const photoBuffers = req.files.map((file) => file.buffer);
  // console.log(photosProduit);

  try {
    // Créer un nouveau produit
    const newProduct = new Product({
      nomProduit,
      descriptionProduit,
      typeProduit,
      Quantite,
      cooperative,
      photosProduit,
      dateRecolte,
      conditionsStockage,
      reduction,
      acceptationConditions,
    });

    // Sauvegarder le produit dans la base de données MongoDB
    const product = await newProduct.save();
    // Mettre à jour la coopérative avec l'ID du nouveau produit
    await Cooperatives.findByIdAndUpdate(cooperative, {
      $push: { products: product._id },
    });

    // Répondre avec le produit créé
    res.status(201).json({ product });
  } catch (error) {
    console.error("Erreur lors de l'ajout du produit :", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getAllProducts = (req, res) => {
  const cooperativeId = req.params.cooperativeId;
  Cooperatives.findById(cooperativeId)
    .populate("products")
    .exec()
    .then((coop) => res.send(coop.products))
    .catch((err) => res.sendStatus(500).json({ err }));
};

const getOneProduct = (req, res) => {
  const productId = req.params.productId;
  Product.findById(productId)
    .then((product) => res.json({ product }))
    .catch((err) => res.json({ err }));
};

module.exports = {
  loginCooperartive,
  registrationMembers,
  getAllMembers,
  getOneMember,
  addProduct,
  getAllProducts,
  getOneProduct,
};
