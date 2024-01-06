import React from "react";
import ListeMembres from "./ListeMembres";
import { Link, Route, Routes } from "react-router-dom";
import FormAddMembers from "./FormAddMembers";
import "../../../styles/COOPERATIVES/Membres.css";

const Membres = () => {
  const LinkAdd = (
    <div className="container-menbre">
      <ListeMembres />
      <Link to="/cooperative/dashboard/menbres/ajout-menbre" className="add-menbers">
        Ajouter menbre
      </Link>
    </div>
  );
  return (
    <>
      <Routes>
        <Route path="/" element={LinkAdd} />
        <Route path="/ajout-menbre" element=<FormAddMembers /> />
      </Routes>
    </>
  );
};

export default Membres;
