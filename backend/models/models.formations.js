const mongoose = require('mongoose');

const formationSchema = new mongoose.Schema({
  titre: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  video:{
    type:String,
    require:true
  },
  date: {
    type: Date,
    required: true, 
  },
  duree: {
    type: Number,
    required: true,
  },
  formateur: {
    type: String,
    required: true,
    default:"AgroLeadTech" 
  }, 
  // Ajoutez d'autres champs en fonction de vos besoins
});

const Formation = mongoose.model('Formation', formationSchema);

module.exports = Formation;
