import React from "react";
import "../../../styles/Ecom/Naviguation.css";
import { Link, NavLink } from "react-router-dom";
import logoAgroLeadTech from "../../../images/ALT_BG_BLANC.png";

const Naviguation = () => {
  return (
    <header className="header-ecom">
      <div className="logo-agroleadtech">
        <img src={logoAgroLeadTech} alt="logo" />
      </div>
      <div className="recherche-produit">
        <NavLink>Cooperative</NavLink>
        <NavLink>Produits</NavLink>
        <NavLink>Panier</NavLink>
        <NavLink>Favoris</NavLink>
        <NavLink to="/ecom/detailCommande">Commande</NavLink>
      </div>
      <div className="naviguation-links">
        <div className="container-link-naviguation-ecom">
          <Link className="favoris-link" to="/ecom/favoris">
            <ifram className="fa-solid fa-heart"></ifram>
          </Link>
          <Link className="panier-link" to="/ecom/panier">
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
