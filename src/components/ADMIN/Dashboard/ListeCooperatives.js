import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../../styles/ADMIN/ListeCooperative.css";
import axios from "axios";


const ListeCooperatives = () => {
  
 
  const [cooperative, setCooperative] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/admin/dashboard/cooperatives`)
      .then((res) => {
        const coop = res.data.cooperatives;
        setCooperative(coop);
      })
      .catch((err) => console.log(err));
  }, []);

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
          {cooperative.map((coop) => (
            <tr key={coop._id}>
              <td>{coop.cooperativeName}</td>
              <td>{coop.addressGeographique}</td>
              <td>{coop.nombreMembres}</td>
              <td>
                <Link to={`/admin/dashboard/cooperatives/${coop._id}`}>
                  Savoir plus
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListeCooperatives;
