import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "../../../styles/COOPERATIVES/ListeMembres.css";
import axios from "axios";

const ListeMembres = ({id}) => {
    // const producteurs  = {
    //     "producteurs": [
    //       {
    //         "id": 1,
    //         "nom": "Producteur 1",
    //         "prenom": "Prénom 1",
    //         "email": "producteur1@email.com",
    //         "telephone": "123456789",
    //         "cooperative": "Coopérative A",
    //         "produits": [
    //           {
    //             "idProduit": 101,
    //             "nomProduit": "Tomates",
    //             "typeProduit": "Légume",
    //             "stockDisponible": 500,
    //             "prixUnitaire": 2.5
    //           },
    //           {
    //             "idProduit": 102,
    //             "nomProduit": "Pommes",
    //             "typeProduit": "Fruit",
    //             "stockDisponible": 300,
    //             "prixUnitaire": 3.0
    //           }
    //         ]
    //       },
    //       {
    //         "id": 2,
    //         "nom": "Producteur 2",
    //         "prenom": "Prénom 2",
    //         "email": "producteur2@email.com",
    //         "telephone": "987654321",
    //         "cooperative": "Coopérative B",
    //         "produits": [
    //           {
    //             "idProduit": 201,
    //             "nomProduit": "Carottes",
    //             "typeProduit": "Légume",
    //             "stockDisponible": 700,
    //             "prixUnitaire": 1.8
    //           },
    //           {
    //             "idProduit": 202,
    //             "nomProduit": "Bananes",
    //             "typeProduit": "Fruit",
    //             "stockDisponible": 400,
    //             "prixUnitaire": 2.0
    //           }
    //         ]
    //       }
    //       // ... Ajoutez d'autres producteurs au besoin
    //     ]
    //   }
      const [producteurs, setproducteurs] = useState([])

      useEffect(() => {
        axios
          .get(`http://localhost:5000/api/cooperative/dashboard/${id}/menbres`)
          .then((res) => {
            const prod = res.data;
            console.log(prod)
            setproducteurs(prod);
          })
          .catch((err) => console.log(err));
      }, [id]);
      
    return (
        <div className="listes-menbre-container">
        <h2>Liste des menbres de (nom de la cooperative)</h2>
        <table className="commandes-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nom</th>
              <th>prenom</th>
              <th>email</th>
              <th>telephone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {producteurs.map((producteur) => (
              <tr key={producteur.id}>
                <td>{producteur.id}</td>
                <td>{producteur.nom}</td>
                <td>{producteur.prenom}</td>
                <td>{producteur.email}</td>
                <td>{producteur.telephone}</td>
                <td>
                  <Link
                    className="afficher-details-button"
                    to={`/admin/dashboard/commande/${producteur.idCommande}`}
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

export default ListeMembres;
