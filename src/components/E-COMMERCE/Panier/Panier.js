import React, { useEffect, useState } from "react";
import "../../../styles/Ecom/Panier.css";
import ResumeCard from "../ResumeCard/ResumeCard";
import img from "../../../images/chou.png";
import Naviguation from "../Naviguation/Naviguation";
const Panier = () => {
  const initialProductData = [
    {
      name: "Poivron vert",
      price: 1400,
      quantity: 5,
      imageSrc: img,
    },
    {
      name: "Produit 2",
      price: 1400,
      quantity: 5,
      imageSrc: img,
    },
  ];
  const [products, setProducts] = useState(initialProductData);
  const [subTotal, setSubTotal] = useState(0);

  useEffect(() => {
    let total = 0;
    products.forEach((product) => {
      total += product.price * product.quantity;
    });
    setSubTotal(total);
  }, [products]);

  const handleQuantityChange = (index, newQuantity) => {
    const newProducts = [...products];
    newProducts[index].quantity = newQuantity;
    setProducts(newProducts);
  };

  const handleRemoveItem = (index) => {
    const newProducts = [...products];
    newProducts.splice(index, 1);
    setProducts(newProducts);
  };

  return (
    <>
      <Naviguation />
      <h2>Mon panier</h2>
      <div className="section-panier">
        <div className="table-container">
          <table className="styled-table">
            <thead>
              <tr>
                <th>PRODUITS</th>
                <th>PRIX</th>
                <th>QUANTITE</th>
                <th>TOTAL</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={index}>
                  <td className="product-cell">
                    <div className="product-info">
                      <img src={product.imageSrc} alt={product.name} />
                      <span>{product.name}</span>
                    </div>
                  </td>
                  <td>XOF {product.price}/kg</td>
                  <td className="quantity-btn">
                    <button
                      className="btn-add"
                      onClick={() =>
                        handleQuantityChange(index, product.quantity - 1)
                      }
                    >
                      -
                    </button>
                    <span>{product.quantity}</span>
                    <button
                      className="btn-add"
                      onClick={() =>
                        handleQuantityChange(index, product.quantity + 1)
                      }
                    >
                      +
                    </button>
                  </td>
                  <td>XOF {product.price * product.quantity}</td>
                  <td>
                    <button
                      onClick={() => handleRemoveItem(index)}
                      className="btn-remove"
                    >
                      <i className="fa fa-xmark"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="div-update-btn">
            <button className="update-button">Mise à jour du panier</button>
          </div>
        </div>
        <ResumeCard subTotal={subTotal} />
      </div>
    </>
  );
};

export default Panier;
