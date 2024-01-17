import React, { useEffect, useState } from "react";
import "../../../styles/ADMIN/OneCooperative.css";
import { useParams } from "react-router-dom";
// import { Link } from "react-router-dom";
import axios from "axios";

const OneCooperative = (props, params) => {
  // const dataCooperative = props.data.cooperatives;
  const [dataCooperative, setDataCooperative] = useState([])
  const [OnecooperativeData, setOnecooperativeData] = useState([])
  const { idcooperative } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/admin/dashboard/cooperatives`)
      .then((res) => {
        const coop = res.data.cooperatives;
        setDataCooperative(coop);
        // const cooperativeId = parseInt(idcooperative, 10);
        axios.get(`http://localhost:5000/api/admin/dashboard/cooperatives/${idcooperative}`)
          .then(res=>{
          const oneCoop = res.data.oneCooperative;
          console.log('====================================');
          console.log(oneCoop);
          console.log('====================================');
          setOnecooperativeData(oneCoop)

          })
      })
      .catch((err) => console.log(err));
  }, [idcooperative]);

  // console.log(ListeProduct);

  

  const ListeProduct = OnecooperativeData.products;


  // const newReceptions = 
    

  if (!OnecooperativeData) {
    return <div>Coopérative non trouvée</div>;
  }

  const exampleReceptions = [
    { id: 1, productName: "Produit 1", validationColor: "#146907" },
    { id: 2, productName: "Produit 2", validationColor: "red" },
    { id: 3, productName: "Produit 3", validationColor: "#FFCC00" },
  ];

  return (
    <div className="container-one-cooperative">
    <h2>{OnecooperativeData.cooperativeName}</h2>
    <div className="container-statistique-cooperative">
      <div className="statistique">
        <span className="titre-stat">Nombre de menbre</span>
        <div className="stat-datas">
          <i className="fa-solid fa-users"></i>
          <span id="stat-data">{OnecooperativeData.nombreMembres}</span>
        </div>
      </div>
      <div className="statistique">
        <span className="titre-stat">Stokc en kg (en ligne)</span>
        <div className="stat-datas">
          <i className="fa-solid fa-store"></i>
          <span id="stat-data">10000 kg</span>
        </div>
      </div>
      <div className="statistique">
        <span className="titre-stat">Revenue</span>
        <div className="stat-datas">
          <i className="fa-solid fa-sack-dollar"></i>
          <span id="stat-data">{OnecooperativeData.revenue} FCFA</span>
        </div>
      </div>
      <div className="statistique">
        <span className="titre-stat">Stock ecoulé</span>
        <div className="stat-datas">
          <i className="fa-solid fa-hourglass-end"></i>
          <span id="stat-data">400 kg</span>
        </div>
      </div>
      <div className="statistique">
        <span className="titre-stat">Impayé</span>
        <div className="stat-datas">
          <i className="fa-solid fa-xmark"></i>
          <span id="stat-data">{OnecooperativeData.impaye} FCFA</span>
        </div>
      </div>
    </div>

    <div className="other-data-cooperative">
      <div className="infos-cooperative">
        <h2>Informations cooperative</h2>
        <div className="information-cooperative">
          <div className="info-coop">
            <span>Nom de la cooperative :{OnecooperativeData.cooperativeName} </span>
            <span>Lieu :{OnecooperativeData.addressGeographique} </span>
            <span>
              Numéro de téléphone:{OnecooperativeData.numeroTelephone}{" "}
            </span>
            <span>
              Nom du representant :{OnecooperativeData.representantLegal}{" "}
            </span>
            <span>
              Role du representant :{OnecooperativeData.representativeRole}{" "}
            </span>
            <span>
              Email du representant :{OnecooperativeData.representativeEmail}{" "}
            </span>
            <span>
              Numéro du representant :{OnecooperativeData.representativePhoneNumber}{" "}
            </span>
            <span>Nombre de menbre :{OnecooperativeData.nombreMembres} </span>
          </div>
        </div>
      </div>

      
      <div className="nouveau-stock">
        <h2>Nouvelle reception</h2>

        <table className="container-table-nouveau">
          <thead>
            <tr>
              <th>ID</th>
              <th>Produit</th>
              <th>statut back</th>
              <th>Verifier</th>
            </tr>
          </thead>
          <tbody>
            {exampleReceptions.map((reception) => (
              <tr key={reception.id}>
                <td>{reception.id}</td>
                <td>{reception.productName}</td>
                <td>
                  <div
                    style={{
                      width: "20px",
                      height: "20px",
                      backgroundColor: reception.validationColor,
                      display: "inline-block",
                    }}
                  ></div>
                </td>
                <td>
                  <button>verifier</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
};

export default OneCooperative;
