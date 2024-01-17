import React from 'react';
import "../../../styles/Ecom/DetailCommande.css";
import Naviguation from '../Naviguation/Naviguation';
import DetailTableau from '../DetailTableau/DetailTableau';
import SuivieCommande from '../SuivieCommande/SuivieCommande';
import ProduitCommande from '../ProduitCommande/ProduitCommande';
import Footer from '../Footer/Footer';

const DetailCommande = () => {
    return (
        <>
      <Naviguation />
      <h2>Détails de la commande</h2>
      <div className="container-details-commande">
        <DetailTableau />
        <SuivieCommande />
        <ProduitCommande />
      </div>
      <div className="container-btn-retour">
        <button className="btn-retour">Retour à l'accueil'</button>
      </div>
      <Footer />                                            
    </>
    );
}

export default DetailCommande;
