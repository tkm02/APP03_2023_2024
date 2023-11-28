import React, { useEffect, useState } from "react";
import "../../../styles/ADMIN/OneCooperative.css";
import { Link } from "react-router-dom";

const OneCooperative = () => {
  const [receptions, setReceptions] = useState([]);

  const exampleReceptions = [
    { id: 1, productName: "Produit 1", validationColor: "#146907" },
    { id: 2, productName: "Produit 2", validationColor: "red" },
    { id: 3, productName: "Produit 3", validationColor: "#FFCC00" },
  ];

  useEffect(() => {
    setReceptions(exampleReceptions);
  }, []);

  return (
    <div className="container-one-cooperative">
      <h2>nom de la cooperative</h2>
      <div className="container-statistique-cooperative">
        <div className="statistique">
          <span className="titre-stat">Nombre de menbre</span>
          <div className="stat-datas">
            <i className="fa-solid fa-users"></i>
            <span id="stat-data">50</span>
          </div>
        </div>
        <div className="statistique">
          <span className="titre-stat">Stokc en kg (en ligne)</span>
          <div className="stat-datas">
            <i className="fa-solid fa-store"></i>
            <span id="stat-data">1000 kg</span>
          </div>
        </div>
        <div className="statistique">
          <span className="titre-stat">Revenue</span>
          <div className="stat-datas">
            <i className="fa-solid fa-sack-dollar"></i>
            <span id="stat-data">800.000 FCFA</span>
          </div>
        </div>
        <div className="statistique">
          <span className="titre-stat">Stock ecoulé</span>
          <div className="stat-datas">
            <i className="fa-solid fa-hourglass-end"></i>
            <span id="stat-data">400 kg</span>
          </div>
        </div>
        <div className="statistique">
          <span className="titre-stat">Impayé</span>
          <div className="stat-datas">
            <i className="fa-solid fa-xmark"></i>
            <span id="stat-data">0 FCFA</span>
          </div>
        </div>
      </div>

      <div className="other-data-cooperative">
        <div className="infos-cooperative">
        <h2>Informations cooperative</h2>
          <div className="information-cooperative">
            <div className="info-coop">
              <span>Nom de la cooperative : </span>
              <span>Lieu : </span>
              <span>Numéro de téléphone: </span>
              <span>Nom du representant : </span>
              <span>Role du representant : </span>
              <span>Email du representant : </span>
              <span>Numéro du representant : </span>
              <span>Nombre de menbre : </span>
              <span>Type de produit : </span>
            </div>
          </div>
        </div>

        <div className="container-table-stock">
          <h2 className="liste-titre">Stock en ligne</h2>
          <table className="table-stock-cooperatives">
            <thead>
              <tr>
                <th>Type</th>
                <th>Produit</th>
                <th>Quantité(Kg)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Légume</td>
                <td>carotte</td>
                <td>100</td>
              </tr>
              <tr>
                <td>Légume</td>
                <td>Tomate</td>
                <td>150</td>
              </tr>
              <tr>
                <td>Fruit</td>
                <td>Banane</td>
                <td>120</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="nouveau-stock">
          <h2>Nouvelle reception</h2>

          <table className="container-table-nouveau">
            <thead>
              <tr>
                <th>ID</th>
                <th>Produit</th>
                <th>statut back</th>
                <th>Verifier</th>
              </tr>
            </thead>
            <tbody>
              {receptions.map((reception) => (
                <tr key={reception.id}>
                  <td>{reception.id}</td>
                  <td>{reception.productName}</td>
                  <td>
                    <div
                      style={{
                        width: "20px",
                        height: "20px",
                        backgroundColor: reception.validationColor,
                        display: "inline-block",
                      }}
                    ></div>
                  </td>
                  <td>
                    <button>verifier</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OneCooperative;
