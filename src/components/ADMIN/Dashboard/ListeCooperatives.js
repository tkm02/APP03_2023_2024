import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../../styles/ADMIN/ListeCooperative.css";
const ListeCooperatives = (props) => {

    const data = props.infoListeCooperative.cooperatives ;
    const [cooperative, setCooperative] = useState([]);
    useEffect(() => {
      setCooperative(data)
    }, [data])

  
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
            <tr key={coop.id}>
              <td>{coop.nom}</td>
              <td>{coop.lieu}</td>
              <td>{coop.nombreMembres}</td>
              <td>
                <Link to={`/admin/dashboard/cooperatives/${coop.id}`}>Savoir plus</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListeCooperatives;
