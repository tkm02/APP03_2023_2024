import React from "react";

const CardProduct = ({ product}) => {
  const { nomProduit,Quantite, prixUnitaire,isValide,quantiteDisponible,image } = product;
  const stockStatus =
  quantiteDisponible > 20 ? "Disponible" : quantiteDisponible > 0 ? "Stock faible" : "Rupture de stock";
 const etat = isValide ===true ? "vrai" : "faux"
  return (
    <div className="product-card" style={{ margin: "10px" }}>
      <img src={image} alt={nomProduit} className="stock-product-image" />
      <h4 className="stock-product-name">{nomProduit}</h4>
      <p className="product-stock">Stock disponible: {Quantite} kg</p>
      <p className="stock-product-price">Prix unitaire: xof {prixUnitaire} / kg</p>
      <p>Niveau du stock: {stockStatus}</p>
      <p>Valide : {etat}</p>
    </div>
  );
};

export default CardProduct;
