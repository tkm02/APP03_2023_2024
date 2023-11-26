import React from "react";
import "../../../styles/ADMIN/SideBar.css";
import { Link } from "react-router-dom";
import Logo from "../../../images/ALT.png"
const SideBar = () => {
  return (
    <div>
      <aside className="left-sidebar" data-sidebarbg="skin6">
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
                  to="/admin/dashboard"
                >
                  <i className="fa fa-user" aria-hidden="true"></i>
                  <span className="hide-menu">Profile</span>
                </Link>
              </li>
              <li className="sidebar-item">
                <Link
                  className="sidebar-link waves-effect waves-dark sidebar-link"
                  to="/admin/dashboard"
                >
                  <i className="fa fa-table" aria-hidden="true"></i>
                  <span className="hide-menu">Basic Table</span>
                </Link>
              </li>
              <li className="sidebar-item">
                <Link
                  className="sidebar-link waves-effect waves-dark sidebar-link"
                  to="/admin/dashboard"
                >
                  <i className="fa fa-font" aria-hidden="true"></i>
                  <span className="hide-menu">Icon</span>
                </Link>
              </li>
              <li className="sidebar-item">
                <Link
                  className="sidebar-link waves-effect waves-dark sidebar-link"
                  to="/admin/dashboard"
                >
                  <i className="fa fa-globe" aria-hidden="true"></i>
                  <span className="hide-menu">Google Map</span>
                </Link>
              </li>
              <li className="sidebar-item">
                <Link
                  className="sidebar-link waves-effect waves-dark sidebar-link"
                  to="/admin/dashboard"
                >
                  <i className="fa fa-columns" aria-hidden="true"></i>
                  <span className="hide-menu">Blank Page</span>
                </Link>
              </li>
              <li className="sidebar-item">
                <Link
                  className="sidebar-link waves-effect waves-dark sidebar-link"
                  to="/admin/dashboard"
                >
                  <i className="fa fa-info-circle" aria-hidden="true"></i>
                  <span className="hide-menu">Error 404</span>
                </Link>
              </li>
            </ul>
          </nav>
        
      </aside>
    </div>
  );
};

export default SideBar;
