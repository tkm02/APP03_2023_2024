import React from "react";
import "../../../styles/ADMIN/Admin.css";
import SideBar from "./SideBar";
import NavBar from "./NavBar";
import Statistique from "./Statistique";
import Notification from "./Notification";

const Dashboard = () => {
  return (
    <div className="container-admin">
      <SideBar />
      <NavBar />
      <div className="main-container">
        <div className="container-statistique">
          <Statistique />
          <Statistique />
          <Statistique />
        </div>
        <Notification />
      </div>
    </div>
  );
};

export default Dashboard;
