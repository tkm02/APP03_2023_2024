import React from "react";
import "../../../styles/ADMIN/Statiques.css"
const Statistique = () => {
  return (
    <div className="bloc-stat">
      <div className="analytics-info">
        <h3 className="box-title">Total Visit</h3>
        <ul className="list-inline">
          <li className="ms-auto">
            <span className="counter text-success">659</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Statistique;
