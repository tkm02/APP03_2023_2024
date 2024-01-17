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
  Quantite: {
    type:Number,
    require:true,
  },
  prixUnitaire:{type:Number,default:2500},
  cooperative: { type: mongoose.Schema.Types.ObjectId, ref: 'Cooperative' },
  photosProduit: [{type:Buffer,require:true,contentType: String,}],
  image:{type:String,default:"https://images.pexels.com/photos/51958/oranges-fruit-vitamins-healthy-eating-51958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
  dateRecolte: {type:String,require:true},
  quantiteDisponible: {type:Number,require:false,default:0},
  conditionsStockage: {type:String,require:true},
  reduction: {type:Number,default:0},
  like:{type:Boolean,default:false},
  rating:{type:Number,default:3},
  prixReduction:{type:Number,default:0},
  isValide:{type:Boolean,default:false},
  isPanier:{type:Boolean,default:false}, 
  acceptationConditions: {type:Boolean,require:true},
  oldPrice:{type:Number,default:0},

});

const Produits = mongoose.model('Product', produitSchema);

module.exports = Produits;
