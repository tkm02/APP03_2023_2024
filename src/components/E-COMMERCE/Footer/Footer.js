import React from "react";
import "../../../styles/Ecom/Footer.css";
import { NavLink } from "react-router-dom";


const Footer = () => {
  return (
    <footer>
      <div className="footer-links">
        <div className="col-1 col">
          <div className="footer-logo"></div>
          <span>
            Meilleur entreprise de ecommercialisation de produits vivriers avec
            ces agriculteurs et ses vendeurs qui ont impacté le domaine par leur
            savoir-faire.
          </span>
          <div className="number">
            <span>(225) 07 05 228 0114 & (33) 01 01 233 412</span>
          </div>
        </div>

        <div className="col-2 col">
          <h3>Mon Compte</h3>
          <ul>
            <li>
              <NavLink>Mon compte</NavLink>
            </li>
            <li>
              <NavLink>Historique des achats</NavLink>
            </li>
          </ul>
          <h3>Carte de Crédit</h3>
          <ul>
            <li>
              <NavLink>Mon Panier</NavLink>
            </li>
          </ul>
        </div>

        <div className="col-3 col">
          <h3>Aides</h3>
          <ul>
            <li>
              <NavLink>Contact</NavLink>
            </li>
            <li>
              <NavLink>FAQ</NavLink>
            </li>
            <li>
              <NavLink>Termes et conditions</NavLink>
            </li>
            <li>
              <NavLink>Politique de confidentialité</NavLink>
            </li>
          </ul>
        </div>

        <div className="col-3 col">
          <h3>Proxy</h3>
          <ul>
            <li>
              <NavLink>Notre Team</NavLink>
            </li>
            <li>
              <NavLink>Boutiques</NavLink>
            </li>
            <li>
              <NavLink>Produits</NavLink>
            </li>
            <li>
              <NavLink>Suivi de commande</NavLink>
            </li>
          </ul>
        </div>

        <div className="col-3 col">
          <h3>Categories</h3>
          <ul>
            <li>
              <NavLink>fruits</NavLink>
            </li>
            <li>
              <NavLink>Légumes</NavLink>
            </li>
            <li>
              <NavLink>Céréales & Féculents</NavLink>
            </li>
            <li>
              <NavLink>Tubercules</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="mahoufarm">
        <span>AgroLeadTech eCommerce @2024 All Rights Reserved</span>
        <div className="means-payement">
          <div className="methode-apple methode"></div>
          <div className="methode-visa methode"></div>
          <div className="methode-discover methode"></div>
          <div className="methode-mastercard methode"></div>
          <div className="methode-cart methode"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
