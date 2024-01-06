import React from "react";
import SideBar from "./SideBar";
import "../../../styles/COOPERATIVES/Dashboard.css";
import { Route, Routes } from "react-router-dom";
import Statistique from "./Statistique";
import Membres from "./Membres";
import Stock from "./Stock";

const Dashboard = () => {
  return (
    <div className="dashboard-cooperative">
      <SideBar />
      <div className="container-cooperative-display">
        <div className="display-cooperative">
          <h2 className="bienvenue-coop">Bienvenue (Nom de la coopérative)</h2>
          <Routes>
            <Route path="/" element=<Statistique/> />
            <Route path="/menbres/*" element=<Membres/> />
            <Route path="/stock/*" element=<Stock/> />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
