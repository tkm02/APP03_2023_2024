import React, { useEffect, useState } from "react";
import "../../../styles/ADMIN/Commande.css";
import { Link, Route, Routes } from "react-router-dom";
import DetailsCommande from "./DetailsCommande";
import dataCommades from "../../../data/commande"
const Commande = () => {
  const [commandes, setCommandes] = useState([]);

  useEffect(() => {
    setCommandes(dataCommades)
  }, [commandes])
  //   setCommandes()
  const ListCommande = (
    <div className="commandes-container">
      <h2>Liste des Commandes</h2>
      <table className="commandes-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Date</th>
            <th>Client</th>
            <th>Produits Commandés</th>
            <th>Statut</th>
            <th>Montant</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {commandes.map((commande) => (
            <tr key={commande.idCommande}>
              <td>{commande.idCommande}</td>
              <td>{commande.dateCommande}</td>
              <td>{commande.client.nom}</td>
              <td>{commande.produitsCommandes[0].nomProduit}.........</td>
              <td>{commande.statutCommande}</td>
              <td>{commande.montantTotal}</td>
              <td>
                <Link
                  className="afficher-details-button"
                  to={`/admin/dashboard/commande/${commande.idCommande}`}
                >
                  Afficher
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
  return (
    <Routes>
      <Route path="/" element={ListCommande} />
      <Route path="/:id" element={<DetailsCommande allCommande={commandes} />} />
    </Routes>
  );
};

export default Commande;
