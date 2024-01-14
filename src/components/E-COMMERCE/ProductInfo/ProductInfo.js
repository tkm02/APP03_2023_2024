import React from "react";
import "../../../styles/Ecom/ProductInfo.css";
import { Link, NavLink } from "react-router-dom";

const ProductInfo = () => {
  const rating = 4.5;
  return (
    <div className="droite">
      <div className="ligne1">
        <h2>Nom du produit</h2>
        <div className="stock">En stock</div>
      </div>
      <div className="étoile">
        {Array.from({ length: rating }).map((_, index) => (
          <span key={index} className="star">
            ★
          </span>
        ))}
        15 avis
      </div>
      <div className="prix">
        <del>XOF 5000/kg</del>
        <p>XOF 2500/kg</p>
        <div className="reduction">50% reduction</div>
      </div>
      <div className="bar1"> </div>
      <div className="ligne2">
        <h3>Partager avec:</h3>
        <div className="social-container">
          <ifram className="fa-brands fa-facebook-f"></ifram>
        </div>
        <div className="social-container">
          <ifram className="fa-brands fa-linkedin-in"></ifram>
        </div>
        <div className="social-container">
          <ifram className="fa-brands fa-instagram"></ifram>
        </div>
      </div>
      <p className="txt1">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam sit
        voluptates assumenda soluta porro unde rem modi! Voluptatibus dolorum
        ratione quo iusto laboriosam deserunt dolorem at quae sit.
      </p>
      <div className="bar2"> </div>
      <div className="ligne3">
        <div className="ajouter">
          <ifram className="fa-solid fa-circle-plus"></ifram>
          <p>2</p>
          <ifram className="fa-solid fa-circle-minus"></ifram>
        </div>
        <NavLink className="panier">
          <p>Ajouter dans le panier</p>
          <ifram className="fa-solid fa-cart-shopping"></ifram>
        </NavLink>
        <div className="social-container">
            <ifram className="fa-solid fa-heart"></ifram>
        </div>
      </div>
      <div className="bar3"> </div>
      <div className="ligne4">
        <h4>Catégories:</h4>
        <p>Légumes</p>
      </div>
    </div>
  );
};

export default ProductInfo;
