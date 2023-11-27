import React from "react";
import { Link } from "react-router-dom";
import "../../../styles/ADMIN/ListeCooperative.css";
const ListeCooperatives = () => {
  return (
    <div>
      <h2 className="liste-titre">Liste cooperatives</h2>
      <table className="table-liste-cooperatives">
        <thead>
          <tr>
            <th>Nom de cooperative</th>
            <th>Lieu</th>
            <th>Nombre de menbre</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Daiman</td>
            <td>Napié</td>
            <td>50</td>
            <td>
              <Link className="en-savoir-plus" to="/admin/dashboard/cooperatives/1">En savoir plus</Link>
            </td>
          </tr>
          <tr>
                <td>Daiman</td>
                <td>Napié</td>
                <td>50</td>
                <td>
                    <Link className="en-savoir-plus" to="/admin/dashboard/cooperatives/2">En savoir plus</Link>
                </td>
          </tr>
          <tr>
            <td>Daiman</td>
            <td>Napié</td>
            <td>50</td>
            <td>
              <Link className="en-savoir-plus" to="/admin/dashboard/cooperatives/3">En savoir plus</Link>
            </td>
          </tr>
            
        </tbody>
      </table>
    </div>
  );
};

export default ListeCooperatives;
