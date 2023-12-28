import React    from "react";
import "../../../styles/ADMIN/DetailsCommandeTableau.css";
const DetailsCommandeTableau = ({currentCommande}) => {
console.log(currentCommande);
  return (
    <div className="container-tables-commande">
      <table className="table-details">
        <thead>
          <tr>
            <th>Information sup</th>
          </tr>
        </thead>
        <tbody>
           <tr key={currentCommande.idCommande}>
              <td>
                <div>Date de reception</div>
                <div>{currentCommande.dateCommande}</div>
                <div>--------------------------</div>
                <div>{currentCommande.client.nom}</div>
                <p>{currentCommande.lieuLivraison}</p>
                <div>--------------------------</div>

                <div>Email</div>
                <p>{currentCommande.client.email}</p>
                <div>Téléphone</div>
                <p> {currentCommande.client.numeroTelephone}</p>
              </td>
            </tr>
        </tbody>
      </table>

      <div className="order-details">
        <div className="header">
          <div className="header-element">
            <div className="label">Order ID</div>
            <div className="value">#{currentCommande.idCommande}</div>
          </div>
          <div className="trait-separation"></div>
          <div className="header-element">
            <div className="label">Methode de paiement</div>
            <div className="value">{currentCommande.methodePaiement}</div>
          </div>
        </div>

        <div>
          <div className="label">Sous-total</div>
          <div className="value">XOF {currentCommande.montantTotalProduits}</div>
        </div>
        <div>
          <div className="label">Livraison</div>
          <div className="value">XOF {currentCommande.montantLivraison}</div>
        </div>
        <div>
          <div className="label">Total</div>
          <div className="value">XOF {currentCommande.montantTotal}</div>
        </div>
      </div>
    </div>
  );
};

export default DetailsCommandeTableau;
