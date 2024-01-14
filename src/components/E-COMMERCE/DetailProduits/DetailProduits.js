import React from "react";
import "../../../styles/Ecom/DetailProduits.css";
import AfficheImages from "../AfficheImages/AfficheImages";
import image from "../../../images/aubergine.png";
import image2 from "../../../images/maïs.png";
import ProductInfo from "../ProductInfo/ProductInfo";
import Naviguation from "../Naviguation/Naviguation";
const DetailProduits = () => {
  const images = [image, image, image2, image];
  return (
    <>
      <Naviguation />
      <div className="container-one-product">
        <AfficheImages imageList={images} selectedImage={image} />
        <ProductInfo />
      </div>
    </>
  );
};

export default DetailProduits;
