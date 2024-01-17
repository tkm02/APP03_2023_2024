import React, { useState } from "react";
import "../../../styles/COOPERATIVES/FormAddMembers.css";
import axios from "axios";
import {useNavigate} from "react-router-dom"
import { useParams } from "react-router-dom";

const FormAddMembers = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    dateNaissance: "",
    sexe: "",
    adresse: "",
    email: "",
    telephone: "",
    role: "",
    dateAdhesion: "",
    typeParticipation: "",
    username: "",
    password: "",
    avatar: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleFileChange = async(e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      avatar: file,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:5000/api/cooperative/dashboard/${id}/menbres/ajout-menbre`, { formData })
    .then(res => {
        console.log(res);
    })
    .catch(err=>{
      console.log(err);
    })
    // Ajoutez ici la logique pour envoyer les données au backend
    console.log("Données soumises :", formData);
    // Réinitialisez le formulaire après soumission
    // setFormData({
    //   nom: "",
    //   prenom: "",
    //   dateNaissance: "",
    //   sexe: "",
    //   adresse: "",
    //   email: "",
    //   telephone: "",
    //   role: "",
    //   dateAdhesion: "",
    //   typeParticipation: "",
    //   username: "",
    //   password: "",
    //   avatar: null,
    // });
  };
  

  return (
    <form onSubmit={handleSubmit} className="form-add-menbers">
      <div className="main-content-form-menbers">
        <div className="content-form-menbers">
          <h2>Informations personnelles du membre :</h2>
          <div>
            <label>Nom :</label>
            <input
              type="text"
              name="nom"
              value={formData.nom}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Prénom :</label>
            <input
              type="text"
              name="prenom"
              value={formData.prenom}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Date de naissance :</label>
            <input
              type="date"
              name="dateNaissance"
              value={formData.dateNaissance}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Sexe :</label>
            <select name="sexe" value={formData.sexe} onChange={handleChange}>
              <option value="Homme">Homme</option>
              <option value="Femme">Femme</option>
            </select>
          </div>
          <div>
            <label>Adresse :</label>
            <textarea
              name="adresse"
              value={formData.adresse}
              onChange={handleChange}
            ></textarea>
          </div>
        </div>

        <div className="content-form-menbers">
          <h2>Informations spécifiques à la coopérative :</h2>
          <div>
            <label>Rôle dans la coopérative :</label>
            <input
              type="text"
              name="role"
              value={formData.role}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Date adhésion :</label>
            <input
              type="date"
              name="dateAdhesion"
              value={formData.dateAdhesion}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Type de participation :</label>
            <input
              type="text"
              name="typeParticipation"
              value={formData.typeParticipation}
              onChange={handleChange}
            />
          </div>

          <h2>Coordonnées de contact :</h2>
          <div>
            <label>Adresse e-mail :</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Numéro de téléphone :</label>
            <input
              type="tel"
              name="telephone"
              value={formData.telephone}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="content-form-menbers">
          <h2>Informations de connexion :</h2>
          <div>
            <label>Nom utilisateur :</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Mot de passe :</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Avatar :</label>
            <input type="file" name="avatar" onChange={handleFileChange} />
          </div>
          <div>AFFICHE IMAGE (:</div>
        </div>
      </div>
      <button type="submit" className="btn-add-menbers">
        Ajouter Membre
      </button>
    </form>
  );
};

export default FormAddMembers;
