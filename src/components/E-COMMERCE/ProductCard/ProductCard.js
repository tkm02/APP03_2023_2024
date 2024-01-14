import React from "react";
import "../../../styles/Ecom/ProductCard.css";
import img from "../../../images/aubergine.png";
import { Link } from "react-router-dom";

const ProductCard = ({ image, name, price, oldPrice, rating, classStyle }) => {
  const conditionOldPrice =
    oldPrice === 0 ? "" : <span className="old-price">XOF {oldPrice}/Kg </span>;

  return (
    <div className={`product-card-ecom ${classStyle}`}>
      <img src={img} alt={name} className="product-image" />

      <div className="product-details">
        <h3 className="product-name">{name}</h3>
        <div className="product-price">
          <span className="current-price">XOF {price}/Kg</span>
          {conditionOldPrice}
        </div>
        <div className="product-rating">
          {Array.from({ length: rating }).map((_, index) => (
            <span key={index} className="star">
              ★
            </span>
          ))}
        </div>
        <div className="add-to-cart">
          <Link className="cart-icon">
            <ifram className="fa-solid fa-cart-shopping"></ifram>
          </Link>
        </div>
      </div>

      <div className="product-actions">
        <div className="hover-buttons">
          <Link className="see-more cart-icon" to="/ecom/detailProduits">
            <ifram className="fa-regular fa-eye"></ifram>
          </Link>
          <button className="add-to-favorites cart-icon">
            <ifram className="fa-regular fa-heart"></ifram>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
