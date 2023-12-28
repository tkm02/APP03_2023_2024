import React from "react";
import "../../../styles/ADMIN/ProduitCommande.css";

const ProduitCommande = ({currentProducts}) => {
  console.log(currentProducts);
    
      return (
        <table className="custom-table">
          <thead>
            <tr>
              <th>Produit</th>
              <th>Prix</th>
              <th>Quantité(En kg)</th>
              <th>Sous-total</th>
            </tr>
          </thead>
          <tbody>
            {currentProducts.map((product, index) => (
              <tr key={index}>
                <td className="product-cell-commande">
                  <div className="product-info-commande">
                    <img src={product.photoProduit} alt={`Product ${index + 1}`} />
                    <span>{product.nomProduit}</span>
                  </div>
                </td>
                <td>{product.prixProduit}</td>
                <td>{product.quantiteCommandee}</td>
                <td>{product.sousTotal}</td>
              </tr>
            ))}
          </tbody>
        </table>
  );
};

export default ProduitCommande;
