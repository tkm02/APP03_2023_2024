const mongoose = require('mongoose');

const panierSchema = new mongoose.Schema({
  utilisateur: { type: mongoose.Schema.Types.ObjectId, ref: 'Client', required: true },
  produits: [
    {
      produit: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
      quantity: { type: Number, required: true, default: 1 }, 
    },
  ],
  total: { type: Number, default: 0 },
});  

const Panier = mongoose.model('Panier', panierSchema);

module.exports = Panier;
