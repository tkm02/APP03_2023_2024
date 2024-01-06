const mongoose = require('mongoose');

const produitSchema = new mongoose.Schema({
  nomProduit: {
    type:String,
    require:true
  },
  descriptionProduit: {
    type:String,
    require:true,
  },
  typeProduit: {
    type:String,
    require:true,
  },
  poidsQuantite: {
    type:String,
    require:true,
  },
  cooperative: { type: mongoose.Schema.Types.ObjectId, ref: 'Cooperative' },
  photosProduit: [],
  dateRecolte: "",
  quantiteDisponible: "",
  conditionsStockage: "",
  typesProduitsAgricoles: "",
  reduction: 0,
  acceptationConditions: false,
  
  // Ajoutez d'autres champs en fonction de vos besoins
});

const Produits = mongoose.model('Formation', produitSchema);

module.exports = Produits;
