import { React} from "react";
import "../../../styles/ADMIN/Admin.css";
import { Route, Routes } from "react-router-dom";
import SideBar from "./SideBar";
import NavBar from "./NavBar";
import Statistique from "./Statistique";
import Notification from "./Notification";
import Cooperatives from "./Cooperatives";
import Commande from "./Commande";
// import data from "../../../data/data"
import StockVirtuel from "./StockVirtuel";
import Formations from "./Formations";
import Validations from "./validations";
// import DetailsCommande from "./DetailsCommande";


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
          <Route path="/cooperatives/*" element=<Cooperatives /> />
          <Route path="/commande/*" element=<Commande /> />
          <Route path="/stock/*" element=<StockVirtuel /> />
          <Route path="/formation/*" element=<Formations /> />
          <Route path="/validations/*" element=<Validations /> />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
