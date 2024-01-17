const bcrypt = require("bcrypt");
const Client = require("../models/models.client");
const Product = require("../models/models.produits")
const Panier = require("../models/models.panier")
function generateRandomNumber() {
  const min = 300000;
  const max = 5000000;

  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  return randomNumber;
}

const loginClient = (req, res) => {

  const { email, password } = req.body.formData;
  console.log(req.body.formData);
  
  Client.findOne({ email })
    .then((client) => { 
    const hash = client.password;
    bcrypt.compare(password, hash, (err, result) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ message: "Une erreur est survenue" });
      }
      if (!result) {
        return res.status(401).json({ message: "Mot de passe incorrect" });
      }
      req.session.clientToken = client._id; 

      res.json({ message: client });
    });
  });
};

const registrationClient = (req, res) => {
  const {
    isEnterprise,
    firstName,
    lastName,
    address,
    email,
    phoneNumber,
    companyName,
    password,
  } = req.body;

  const saltRounds = 10;
  bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) {
      console.log(err);
      return res
        .status(500)
        .json({ error: "Erreur lors du hachage du mot de passe" });
    }
    const newClient = new Client({
      isEnterprise,
      firstName,
      lastName,
      address,
      email,
      phoneNumber,
      companyName: isEnterprise ? companyName : undefined, // Utiliser la valeur uniquement si c'est une entreprise
      password: hash,
      compteMoney: {
        Mtn: generateRandomNumber(),
        Moov: generateRandomNumber(),
        Orange: generateRandomNumber(),
        Wave: generateRandomNumber(),
        CarteBancaire: generateRandomNumber(),
      },
    });

    newClient
      .save()
      .then((client) => res.json({ client }))
      .catch((error) => res.status(500).json({ error }));
  });
};

const addToPanier = async (req, res) => {
    try {
      const userId = req.params.userId;
      const productId = req.params.productId;
      const quantity = req.body.quantity || 1; // Par défaut, ajoute une unité si la quantité n'est pas spécifiée
  
      // Recherche l'utilisateur
      const user = await Client.findById(userId);
      if (!user) {
        return res.status(404).json({ message: 'Utilisateur non trouvé' });
      }
  
      // Recherche le produit
      const product = await Product.findById(productId);
      if (!product) {
        return res.status(404).json({ message: 'Produit non trouvé' });
      }
  
      // Crée ou met à jour le panier de l'utilisateur
      let panier = await Panier.findOne({ utilisateur: userId });
  
      if (!panier) {
        panier = new Panier({
          utilisateur: userId,
          produits: [{ produit: productId, quantity: quantity }],
        });
      } else {
        // Vérifie si le produit est déjà dans le panier
        const existingProductIndex = panier.produits.findIndex(
          (item) => item.produit.toString() === productId
        );
  
        if (existingProductIndex !== -1) {
          // Si le produit est déjà dans le panier, met à jour la quantité
          panier.produits[existingProductIndex].quantity += quantity;
        } else {
          // Si le produit n'est pas dans le panier, l'ajoute
          panier.produits.push({ produit: productId, quantity: quantity });
        }
      }
  
      //Calcule le nouveau total du panier
    //   panier.total = panier.produits.reduce(
    //     (total, item) => total + item.produit.prix * item.quantity ,
    //     0
    //   );
       panier.produits.reduce( 
        (totals, item) => {
            Product.findOne(item.produit)
                .then(prod=>{
                    panier.total = totals + prod.prixUnitaire * item.quantity
                   panier.save();
                   res.json(panier) 
                })
                .catch(err=>res.send(err))
        } ,
        0
      );
      console.log('====================================');
      console.log(panier.total);
      console.log('====================================');
  
      // Sauvegarde le panier
    
  
    //   return res.res.sendStatus(200).json(panier);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  };
  

module.exports = { loginClient, registrationClient,addToPanier };
