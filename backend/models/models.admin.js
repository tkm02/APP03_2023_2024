const mongoose = require('mongoose');


const adminSchema = new mongoose.Schema({
    admin     : {type: String,required: true,unique:true},
    password  : {type: String,required: true,unique:true},
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
    producteur: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Producteur' }],
    commandes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Commande' }],
    cooperatives: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Cooperatives' }],
    produits: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Produits' }]
});

const admin = mongoose.model('Admin', adminSchema);
module.exports = admin; 
 