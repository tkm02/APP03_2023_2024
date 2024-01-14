import React, { useState } from "react";
import productNames from "../../../data/ProductsNames";
import "../../../styles/COOPERATIVES/FormSendProducts.css";

const FormSendProducts = () => {
  const [formData, setFormData] = useState({
    nomProduit: "",
    descriptionProduit: "",
    typeProduit: "",
    Quantite: "",
    nomCooperative: "",
    lieuProduction: "",
    methodesProduction: "",
    labelBio: false,
    certificationsQualite: "",
    prixUnitaire: "",
    uniteMesure: "",
    photosProduit: [],
    dateRecolte: "",
    quantiteDisponible: "",
    conditionsStockage: "",
    conditionsVente: "",
    nomContact: "",
    emailContact: "",
    telephoneContact: "",
    typesProduitsAgricoles: "",
    reduction: 0,
    nombreMembres: "",
    acceptationConditions: false,
    imageCooperative: null,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]:
        type === "checkbox" ? checked : type === "file" ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ajoutez ici la logique pour envoyer les données au backend
    console.log("Données soumises :", formData);
  };
  const handleFileChange = (e) => {
    const file = e.target.files[0];
  
    setFormData((prevData) => ({
      ...prevData,
      photosProduit: [...prevData.photosProduit, file],
    }));
  };
  return (
    <form onSubmit={handleSubmit} className="form-submit-product">
      <div className="container-form-submit-products">
        <div className="form-col-submit">
          <div className="form-submit-item">
            <label>Nom du Produit:</label>
            <select
              name="nomProduit"
              value={formData.nomProduit}
              onChange={handleChange}
            >
              <option value="" disabled>
                Sélectionnez un produit
              </option>
              {productNames.map((productName, index) => (
                <option key={index} value={productName}>
                  {productName}
                </option>
              ))}
            </select>
          </div>

          <div className="form-submit-item">
            <label>Type de Produit:</label>
            <div className="container-radio-form-submit">
              <div>
                <label>Légume</label>
                <input
                  type="radio"
                  name="typeProduit"
                  value="legume"
                  checked={formData.typeProduit === "legume"}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label>Fruit</label>

                <input
                  type="radio"
                  name="typeProduit"
                  value="fruit"
                  checked={formData.typeProduit === "fruit"}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label>Céréale</label>
                <input
                  type="radio"
                  name="typeProduit"
                  value="cereale"
                  checked={formData.typeProduit === "cereale"}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label>Tubercule</label>

                <input
                  type="radio"
                  name="typeProduit"
                  value="Tubercule"
                  checked={formData.typeProduit === "Tubercule"}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label>Légumineuses</label>
                <input
                  type="radio"
                  name="typeProduit"
                  value="Légumineuses"
                  checked={formData.typeProduit === "Légumineuses"}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div className="form-submit-item">
            <label>Description du Produit:</label>
            <textarea
              name="descriptionProduit"
              value={formData.descriptionProduit}
              onChange={handleChange}
            ></textarea>
          </div>
        </div>

        <div className="form-col-submit">
          <div className="form-submit-item">
            <label>Quantité en kg:</label>
            <input
              type="number"
              name="poidsQuantite"
              value={formData.Quantite}
              onChange={handleChange}
            />
          </div>
          <div className="form-submit-item">
            <label>Date de recolte:</label>

            <input
              type="date"
              name="dateRecolte"
              value={formData.dateRecolte}
              onChange={handleChange}
            />
          </div>

          <div className="form-submit-item">
            <label>conditions de Stockage:</label>
            <input
              type="text"
              name="conditionsStockage"
              value={formData.conditionsStockage}
              onChange={handleChange}
            />
          </div>
          < div className="form-submit-item">
            <label>Avatar :</label>
            <input type="file" name="avatar" onChange={handleFileChange} multiple />
          </div>
          
          <div className="form-submit-item">
            <label>
              Acceptation des Conditions utilisation de la plateforme:
            </label>

            <input
              type="checkbox"
              name="acceptationConditions"
              checked={formData.acceptationConditions}
              onChange={handleChange}
            />
          </div>

        </div>
      </div>

      <button type="submit" className="btn-submit-form-products">Envoyer le produit</button>
    </form>
  );
};

export default FormSendProducts;
