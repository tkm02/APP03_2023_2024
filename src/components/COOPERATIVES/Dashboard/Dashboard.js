import React from "react";
import SideBar from "./SideBar";
import "../../../styles/COOPERATIVES/Dashboard.css";
import { Route, Routes } from "react-router-dom";
import Statistique from "./Statistique";
import Membres from "./Membres";
import Stock from "./Stock";
import { useParams } from "react-router-dom";


const Dashboard = () => {
  const { id } = useParams();
  return (
    <div className="dashboard-cooperative">
      <SideBar id={id}/>
      <div className="container-cooperative-display">
        <div className="display-cooperative">
          <h2 className="bienvenue-coop">Bienvenue (Nom de la coopérative)</h2>
          <Routes>
            <Route path="/" element=<Statistique/> />
            <Route path="/menbres/*" element=<Membres id={id}/> />
            <Route path="/stock/*" element=<Stock id={id}/> />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
