import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const AfficheProductNoValide = () => {
  const { idProduct } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get(
        `http://localhost:5000/api/cooperative/dashboard/stock/oneProduct/${idProduct}`
      )
      .then((res) => {
        const prod = res.data.product;
        console.log(prod);
        setProduct(prod);
      })
      .catch((err) => console.log(err));
  }, [idProduct]);

  const handleClickValide = (val)=>{
    axios
      .put(
        `http://localhost:5000/api/admin/dashboard/validations/${idProduct}`,
        {val}
      )
      .then((res) => {
        const prod = res.data;
        console.log(prod);
      })
      .catch((err) => console.log(err));
  
  }

  return (
    <div className="product-card" style={{width:"20%",height:"50%",margin:"40px"}}>
      <img
        src={product.image}
        alt={product.nomProduit}
        className="stock-product-image"
      />
      <h4 className="stock-product-name">{product.nomProduit}</h4>
      <p className="product-stock">Stock disponible: {product.Quantite} kg</p>
      <p className="stock-product-price">
        Prix unitaire: xof {product.prixUnitaire} / kg
      </p>
      <p>Niveau du stock: {product.Quantite}</p>
      <button style={{background:"green",padding:"10px 15px",margin:"5px",cursor:"pointer",width:"50%",color:"#fff"}} onClick={()=>handleClickValide(true)}>Valider</button>
      <button style={{background:"brown",padding:"10px 15px",margin:"5px",cursor:"pointer",width:"50%",color:"#fff"}} onClick={()=>handleClickValide(false)}>Refuser</button>
    </div>
  );
};

export default AfficheProductNoValide;
