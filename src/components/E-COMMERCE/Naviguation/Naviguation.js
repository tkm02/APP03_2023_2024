import React from "react";
import "../../../styles/Ecom/Naviguation.css";
import { Link } from "react-router-dom";
import logoAgroLeadTech from "../../../images/ALT_BG_BLANC.png";
const Naviguation = () => {
  return (
    <header className="header-ecom">
      <div className="logo-agroleadtech">
        <img src={logoAgroLeadTech} alt="logo" />
      </div>
      <div className="recherche-produit">
        <div className="container-input-recherche-produit">
          <input type="text" placeholder="vous cherchez un produit ?....." />
          <ifram className="fa-solid fa-magnifying-glass"></ifram>
        </div>
      </div>

      <div className="naviguation-links">
        <div className="container-link-naviguation-ecom">
          <Link className="favoris-link">
            <ifram className="fa-solid fa-heart"></ifram>
          </Link>
          <Link className="panier-link">
            <div className="nombre-panier">1</div>
            <ifram className="fa-solid fa-cart-shopping"></ifram>
          </Link>
          <Link className="compte-link">
            <ifram className="fa-solid fa-user"></ifram>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Naviguation;
