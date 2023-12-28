import React from "react";
import "../../../styles/ADMIN/SideBar.css";
import { Link } from "react-router-dom";
import Logo from "../../../images/ALT.png"

const SideBar = () => {
  return (
    <div className="TATETELA">
      <aside className="left-sidebar">
        <ul className="logo">
        <img src={Logo} alt="" />
        </ul>
          <nav className="sidebar-nav">
            <ul id="sidebarnav">
              <li className="sidebar-item active">
                <Link
                  className="sidebar-link waves-effect waves-dark sidebar-link"
                  to="/admin/dashboard"
                >
                  <i className="far fa-clock" aria-hidden="true"></i>
                  <span className="hide-menu">Dashboard</span>
                </Link>
              </li>
              <li className="sidebar-item">
                <Link
                  className="sidebar-link waves-effect waves-dark sidebar-link"
                  to="/admin/dashboard/cooperatives"
                >
                <i className="fa-solid fa-people-line" aria-hidden="true"></i>
                  <span className="hide-menu">Cooperatives</span>
                </Link>
              </li>
              <li className="sidebar-item">
                <Link
                  className="sidebar-link waves-effect waves-dark sidebar-link"
                  to="/admin/dashboard/commande"
                >
                <i className="fa-solid fa-arrows-rotate"></i>
                  <span className="hide-menu">Commandes</span>
                </Link>
              </li>
              <li className="sidebar-item">
                <Link
                  className="sidebar-link waves-effect waves-dark sidebar-link"
                  to="/admin/dashboard"
                >
                  <i className="fa-solid fa-microchip"></i>
                  <span className="hide-menu">Hardware</span>
                </Link>
              </li>
              <li className="sidebar-item">
                <Link
                  className="sidebar-link waves-effect waves-dark sidebar-link"
                  to="/admin/dashboard/stock"
                >
                  <i className="fa-solid fa-cloud"></i>
                  <span className="hide-menu">Stock virtuel</span>
                </Link>
              </li>
              <li className="sidebar-item">
                <Link
                  className="sidebar-link waves-effect waves-dark sidebar-link"
                  to="/admin/dashboard/formation"
                >
                <i className="fa-solid fa-chalkboard-user"></i>
                  <span className="hide-menu">Formations</span>
                </Link>
              </li>
              <li className="sidebar-item">
                <Link
                  className="sidebar-link waves-effect waves-dark sidebar-link"
                  to="/admin/dashboard"
                >
                  <i className="fa-solid fa-code-pull-request"></i>
                  <span className="hide-menu">validations</span>
                </Link>
              </li>
            </ul>
          </nav>
        
      </aside>
    </div>
  );
};

export default SideBar;
