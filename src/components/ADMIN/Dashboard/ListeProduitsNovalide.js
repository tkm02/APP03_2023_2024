import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios"
const ListeProduitsNovalide = () => {
  const [produits, setProduits] = useState([]);

    // useEffect(() => {
    //     setCommandes(dataCommades)
    //   }, [commandes])
    const invalidProducts = [];

    useEffect(() => {
        axios
          .get(`http://localhost:5000/api/admin/dashboard/validations`)
          .then((res) => {
            const prod = res.data.products;
            for (const product of prod) {
                // Ajoute le produit au tableau `invalidProducts` si sa valeur de `isValide` est `false`
                if (!product.isValide) {
                  invalidProducts.push(product);
                }
              }
            setProduits(invalidProducts)
            console.log(prod);
          })
          .catch((err) => console.log(err));
      }, []);
    return (
        <div className="commandes-container">
      <h2>Nouvelle receptions</h2>
      <table className="commandes-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nom du produit</th>
            <th>prix</th>
            <th>Quantité</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {produits.map((commande) => (
            <tr key={commande._id}>
              <td>{commande._id}</td>
              <td>{commande.nomProduit}</td>
              <td>{commande.prixUnitaire}</td>
              <td>{commande.Quantite}</td>
              <td>
                <Link
                  className="afficher-details-button"
                  to={`/admin/dashboard/validations/${commande._id}`}
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
}

export default ListeProduitsNovalide;
