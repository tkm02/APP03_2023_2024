import React from "react";
import "../../../styles/Ecom/EtatCommande.css";

const EtatCommande = () => {
  return (
    <div className="container-states-commandes">
      <div className="card-state-commande deux">
        <h4>commande:#453</h4>
        <div>
          <div className="number-state deux">2</div>
          <h4>Chargement des produits...</h4>
        </div>
        <div className="progress-bar-state-commande">
          <div className="bar-state-color"></div>
        </div>
      </div>

      <div className="card-state-commande trois">
        <h4>commande:#453</h4>
        <div>
          <div className="number-state trois">3</div>
          <h4>Chargement des produits...</h4>
        </div>
        <div className="progress-bar-state-commande">
          <div className="bar-state-color"></div>
        </div>
      </div>

      <div className="card-state-commande fin">
        <h4>commande:#453</h4>
        <div>
          <div className="number-state fin">Fin</div>
          <h4>Chargement des produits...</h4>
        </div>
        <div className="progress-bar-state-commande">
          <div className="bar-state-color"></div>
        </div>
      </div>
    </div>
  );
};

export default EtatCommande;
