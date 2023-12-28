import React from "react";
import CardStock from "./CardStock";
import "../../../styles/ADMIN/StockVirtuel.css";

const StockVirtuel = () => {
  const productList = [
    {
      id: 1,
      name: "Tomato",
      type: "Legume",
      image: "https://via.placeholder.com/150",
      stock: 50,
      price: 2.5,
    },
    {
      id: 2,
      name: "Apple",
      type: "Fruit",
      image: "https://via.placeholder.com/150",
      stock: 30,
      price: 1.8,
    },
    {
      id: 1,
      name: "Tomato",
      type: "Legume",
      image: "https://via.placeholder.com/150",
      stock: 50,
      price: 2.5,
    },
    {
      id: 2,
      name: "Apple",
      type: "Fruit",
      image: "https://via.placeholder.com/150",
      stock: 0,
      price: 1.8,
    },
    {
      id: 1,
      name: "Tomato",
      type: "Legume",
      image: "https://via.placeholder.com/150",
      stock: 50,
      price: 2.5,
    },
    {
      id: 2,
      name: "Apple",
      type: "Fruit",
      image: "https://via.placeholder.com/150",
      stock: 30,
      price: 1.8,
    },
    {
      id: 1,
      name: "Tomato",
      type: "Legume",
      image: "https://via.placeholder.com/150",
      stock: 50,
      price: 2.5,
    },
    {
      id: 2,
      name: "orange",
      type: "Fruit",
      image: "https://via.placeholder.com/150",
      stock: 30,
      price: 1.8,
    },
    {
      id: 1,
      name: "carrote",
      type: "Legume",
      image: "https://via.placeholder.com/150",
      stock: 50,
      price: 2.5,
    },
    {
      id: 2,
      name: "igname",
      type: "turbercule",
      image: "https://via.placeholder.com/150",
      stock: 30,
      price: 1.8,
    },
    // ... autres produits
  ];

  // Organiser les produits par type
  const productsByType = {};

  productList.forEach((product) => {
    // Si le type de produit n'existe pas encore dans productsByType, créez un tableau vide.
    if (!productsByType[product.type]) {
      productsByType[product.type] = [];
    }
    // Ajoutez le produit au tableau correspondant au type.
    productsByType[product.type].push(product);
  });
  return (
    <div className="stock-display">
      <h2>Stock disponible par type</h2>
      {Object.entries(productsByType).map(([type, products]) => (
        <div key={type}>
          <h3>{type}</h3>
          <div className="product-list">
            {products.map((product) => (
              <CardStock key={product.id} product={product} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default StockVirtuel;
