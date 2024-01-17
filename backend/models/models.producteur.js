const mongoose = require("mongoose")

const producteurSchema = new mongoose.Schema({
    nom: {
        type: String,
        required: true,
      },
      prenom: {
        type: String,
        required: true,
      },
      dateNaissance: {
        type: Date,
      },
      sexe: {
        type: String, 
      },
      adresse: {
        type: String,
      },
      email: {
        type: String,
        unique: true,
        required: true,
      },
      telephone: {
        type: String,
      },
      role: {
        type: String, 
        required: true,
      },
      dateAdhesion: {
        type: Date,
        default: Date.now,
      },
      typeParticipation: {
        type: String,
      },
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
      username: {
        type: String,
        unique: true,
        required: true,
      },
      password: {
        type: String,
        required: true,
      },
      avatar: {
        type: String, // Pour stocker l'image en tant que flux d'octets (utilisez le type Buffer pour stocker les images)
        default:"https://www.google.com/url?sa=i&url=https%3A%2F%2Ffr.freepik.com%2Fphotos-vecteurs-libre%2Fuser-icon&psig=AOvVaw0_cETKiJlesOEzXoFlOCdD&ust=1705466621477000&source=images&cd=vfe&ved=0CBIQjRxqFwoTCJDXjrWM4YMDFQAAAAAdAAAAABAE"
      },
      cooperative: { type: mongoose.Schema.Types.ObjectId, ref: 'Cooperatives' }
    
})

const producteur = mongoose.model('Producteur',producteurSchema);
module.exports = producteur 