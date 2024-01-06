const mongoose = require('mongoose');


const adminSchema = new mongoose.Schema({
    admin     : {type: String,required: true,unique:true},
    password  : {type: String,required: true,unique:true},
    
    producteur: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Producteur' }],
    commandes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Commande' }],
    cooperatives: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Cooperatives' }],
    produits: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Produits' }]
});

const admin = mongoose.model('Admin', adminSchema);
module.exports = admin; 
 