import React from "react";

import { Route, Routes } from "react-router-dom";
import Connection from "./CONNECTION/Connection";
import DetailCommande from "./DetailCommande/DetailCommande";
import DetailProduits from "./DetailProduits/DetailProduits";
import Favoris from "./Favoris/Favoris";
import Home from "./Home/Home";
import Inscription from "./INSCRIPTION/Inscription";
import Paiement from "./Paiement/Paiement";
import Panier from "./Panier/Panier";
import TableauDeBord from "./TableauDeBord/TableauDeBord";
import ProductPage from "./ProductPage/ProductPage";
import Facturations from "./Facturations/Facturations";

const Ecom = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Connection />} />
        <Route path="/detailCommande" element={<DetailCommande />} />
        <Route path="/detailProduits/description/:idClient" element={<DetailProduits />} />
        <Route path="/favoris" element={<Favoris />} />
        <Route path="/:id/home" element={<Home />} />
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/paiement" element={<Paiement />} />
        <Route path="/panier" element={<Panier />} />
        <Route path="/tableaudebord" element={<TableauDeBord />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/facturations" element={<Facturations />} />
      </Routes>
    </div>
  );
};

export default Ecom;
