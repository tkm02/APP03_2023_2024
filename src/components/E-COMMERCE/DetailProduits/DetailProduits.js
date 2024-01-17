import React, { useEffect, useState } from "react";
import "../../../styles/Ecom/DetailProduits.css";
import AfficheImages from "../AfficheImages/AfficheImages";
import image from "../../../images/aubergine.png";
import image2 from "../../../images/maïs.png";
import ProductInfo from "../ProductInfo/ProductInfo";
import Naviguation from "../Naviguation/Naviguation";
import { Link, Route, Routes } from "react-router-dom";
import Description from "../Description/Description";
import PlusInfo from "../PlusInfo/PlusInfo";
import AvisClient from "../AvisClient/AvisClient";
import { useParams } from "react-router-dom";
import axios from "axios"

const DetailProduits = () => {
  // const { id } = useParams();
  const { idClient } = useParams();
  // console.log(id);
  console.log(idClient);
  const [oneProduct, setOneProduct] = useState([])
  const [image, setImage] = useState("")


  useEffect(() => {
    axios
      .get(
        `http://localhost:5000/api/cooperative/dashboard/stock/oneProduct/${idClient}`
      ).then((res) => {
        const prod = res.data.product;
        console.log(prod);
        setImage(prod.image)
        setOneProduct(prod);
      })
      .catch((err) => console.log(err));
  }, [idClient]);

  return (
    <>
      <Naviguation />
      <div
        className="container-one-product"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <div style={{ display: "flex", flexDirection: "row" }}>
          <AfficheImages imageList={image} selectedImage={image} />
          <ProductInfo oneProduct={oneProduct}/>
        </div>

        <div className="tab-naviguation">
          <Link to={`/ecom/detailProduits/description/${idClient}`} className="D">
            Description
          </Link>
          <Link to={`/ecom/detailProduits/plus-info/${idClient}`} className="I">
            Plus info
          </Link>
          <Link to={`/ecom/detailProduits/avis-client/${idClient}`} className="A">
            Avis client
          </Link>
        </div>
        <Routes>
          <Route path="/description/:idClient" element= {<Description />} />
          <Route path="/plus-info/:idClient" element= {<PlusInfo />} />
          <Route path="/avis-client/:idClient" element= {<AvisClient />} />
        </Routes>
      </div>
    </>
  );
};

export default DetailProduits;
