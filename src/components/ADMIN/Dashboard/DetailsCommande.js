import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../../../styles/ADMIN/DetailsCommande.css";
import DetailsCommandeTableau from "./DetailsCommandeTableau";
import SuivieProduit from "./SuivieProduit";
import ProduitCommande from "./ProduitCommande";
// import dataCommades from "../../../data/commande"

const DetailsCommande = ({allCommande}) => {
  const { id } = useParams();
  const commandeId = parseInt(id, 10);

  const OneDataCommades = allCommande.find(
    (coop) => coop.idCommande === commandeId
  );
  const [detailsCommande, setDetailsCommande] = useState({});

  useEffect(() => {
    setDetailsCommande(OneDataCommades)
  }, [OneDataCommades])
  
  const changeStatus = (newStatus) => {
    setDetailsCommande((prevDetails) => ({
      ...prevDetails,
      statutCommande: newStatus,
    }));
  };
  return (
    <div className="details-container">
      <DetailsCommandeTableau currentCommande={OneDataCommades}/>
      <SuivieProduit  currentStep={detailsCommande.statutCommande}/>
      <ProduitCommande currentProducts={OneDataCommades.produitsCommandes}/>
      <div className="details-footer">
        <div>
          <button onClick={() => changeStatus(0)}>
            Marquer comme commande réçu
          </button>
          <button onClick={() => changeStatus(1)}>
            Marquer comme En cours
          </button>
          <button onClick={() => changeStatus(2)}>
            Marquer comme En route
          </button>
          <button onClick={() => changeStatus(3)}>
            Marquer comme Livré
          </button>
        </div>

        <div className="retour">
          <Link to="/admin/dashboard/commande" className="back-btn">
            Retour
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DetailsCommande;
