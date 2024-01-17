import React, { useEffect, useState } from 'react';
import "../../../styles/Ecom/ResumeCard.css";

const ResumeCard = ({ subTotal }) => {
  const priceLivraison = 0;
  const [total, setTotal] = useState(0)

  useEffect(() => {
    setTotal(priceLivraison + subTotal)
  }, [subTotal])

  return (
    <div className="resume-card">
      <h2>Total Panier</h2>
      <div className="summary-item">
        <span>Sous-total :</span>
        <span>XOF {subTotal}</span>
      </div>
      <div className="summary-item">
        <span>Frais de livraison :</span>
        <span>XOF {priceLivraison}</span>
      </div>
      <div className="summary-item total">
        <span>Total :</span>
        <span>XOF {total}</span>
      </div>
      <button className="payment-button">Passer au paiement</button>
    </div>
  );
};

export default ResumeCard;
