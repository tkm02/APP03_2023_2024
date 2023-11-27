import React from "react";
import "../../../styles/ADMIN/Admin.css";
import { Route, Routes } from "react-router-dom";
import SideBar from "./SideBar";
import NavBar from "./NavBar";
import Statistique from "./Statistique";
import Notification from "./Notification";
import Cooperatives from "./Cooperatives";

const Dashboard = () => {
  const mainDashboard = (
    <>
      <div className="container-statistique">
        <Statistique />
        <Statistique />
        <Statistique />
      </div>
      <Notification />
    </>
  );
  return (
    <div className="container-admin">
      <SideBar />
      <NavBar />
      <div className="main-container">
        <Routes>
          <Route path="/" element={mainDashboard} />
          <Route path="/cooperatives/*" element=<Cooperatives/> />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
