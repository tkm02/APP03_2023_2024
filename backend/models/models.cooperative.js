const mongoose = require("mongoose");

const cooperativeSchema = new mongoose.Schema({
  cooperativeName: {
    type: String,
    required: true,
    unique:true
  },
  password:{
    type:String,
    require:String,
  },
  addressGeographique: {
    type: String,
    required: true,
  },
  numeroTelephone: {
    type: String,
    required: true,
  },
  representantLegal: {
    type: String,
    required: true,
  },
  representativeRole: {
    type: String,
    required: true,
  },
  representativeEmail: {
    type: String,
    required: true,
    unique:true
  },
  representativePhoneNumber: {
    type: String,
    required: true,
  },

  typesProduits: {
    legume: {
      type: Boolean,
      default: false,
    },
    fruit: {
      type: Boolean,
      default: false,
    },
    cereale: {
      type: Boolean,
      default: false,
    },
    tubercule: {
      type: Boolean,
      default: false,
    },
    legumineuses: {
      type: Boolean,
      default: false,
    },
    autre: {
      type: Boolean,
      default: false,
    },
  },
  nombreMembres: {
    type: Number,
    required: true,
  },
  acceptationConditions: {
    type: Boolean,
    required: true,
  },
  image: {
    type: Buffer, // ou utilisez le type Buffer pour stocker l'image directement dans la base de données
  },
  methodesProduction: {
    type: String,
  },
  labelBio: {
    type: Boolean,
    default: false,
  },
  stok: {
    type:Boolean,
    default:0
  },
  revenue:{
    type:Number,
    default:0  
  },
  impaye:{
    type:Number,
    default:0
  },
  certificationsQualite: {
    type:Boolean,
  },
  members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Producteur' }],
  commandes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Commande' }],
  // ... autres champs que vous pourriez avoir
});

const cooperative = mongoose.model("Cooperative", cooperativeSchema);
module.exports = cooperative;
