const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema({
  isEnterprise: {
    type: Boolean,
    default: false,
  },
  firstName: { type: String, require: true },
  lastName: { type: String, require: true },
  address: { type: String, require: true },
  email: { type: String, unique: true, require: true },
  phoneNumber: { type: String, require: true },
  companyName: { type: String, require: false },
  address: { type: String, require: false },
  password: { type: String, require: true },
  compteMoney: { 
    Mtn: {
      type: Number,
      default: 0,
    },
    Moov: {
      type: Number,
      default: 0,
    },
    Orange: {
      type: Number,
      default: 0,
    },
    Wave: {
      type: Number,
      default: 0,
    },
    CarteBancaire: {
      type: Number,
      default: 0,
    },
  },
  commandes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Commande' }],
});

const Client = mongoose.model("Client", clientSchema);

module.exports = Client;
