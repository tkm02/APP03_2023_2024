import React from "react";
import "../../../styles/Ecom/Facturations.css";
import Naviguation from "../Naviguation/Naviguation";
import FormFacturation from "../FormFacturation/FormFacturation";
import ResumeFacturation from "../ResumeFacturation/ResumeFacturation";
import Footer from "../Footer/Footer";

const Facturations = () => {
  return (
    <>
      <Naviguation />
      <h2>Information de facturation</h2>
      <div className="container-facturation">
        <FormFacturation />
        <ResumeFacturation />
      </div>
      <Footer />
    </>
  );
};

export default Facturations;
