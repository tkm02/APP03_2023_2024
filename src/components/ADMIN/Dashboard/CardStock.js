import React from 'react';
import "../../../styles/ADMIN/CardStock.css";

const CardStock = ({ product }) => {
    const { name, image, stock, price } = product;
    const totalPrice = stock * price;
    const stockStatus = stock > 20 ? 'Disponible' : stock > 0 ? 'Stock faible' : 'Rupture de stock';
  
    return (
      <div className="product-card">
        <img src={image} alt={name} className='stock-product-image' />
        <h4 className='stock-product-name'>{name}</h4>
        <p className='product-stock'>Stock disponible: {stock} kg</p>
        <p className='stock-product-price'>Prix unitaire: xof {price} / kg</p>
        <p className='stock-product-status'>Prix total du stock: xof {totalPrice}</p>
        <p>Niveau du stock: {stockStatus}</p>
      </div>
    );
}

export default CardStock;
