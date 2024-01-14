import React from "react";
import "../../../styles/Ecom/CardsCooperative.css";
import coop1 from "../../../images/NoPath - Copie (5).png";
import coop2 from "../../../images/coop.png";
import coop3 from "../../../images/NoPath - Copie (2).png";
import coop4 from "../../../images/NoPath - Copie.png";
import { Link } from "react-router-dom";

const CardsCooperative = () => {
  return (
    <div className="container-cards-cooperatives">
      <div className="card-cooperative-info">
        <img src={coop2} alt="img-coop" />
        <h3>Nom cooperative</h3>
        <div>
          <h4>Position géographie</h4>
          <div>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
          </div>
        </div>
        <div>
          <Link>Voir+</Link>
        </div>
      </div>
      <div className="card-cooperative-info">
        <img src={coop3} alt="img-coop" />
        <h3>Nom cooperative</h3>
        <div>
          <h4>Position géographie</h4>
          <div>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
          </div>
        </div>
        <div>
          <Link>Voir+</Link>
        </div>
      </div>
      <div className="card-cooperative-info">
        <img src={coop4} alt="img-coop" />
        <h3>Nom cooperative</h3>
        <div>
          <h4>Position géographie</h4>
          <div>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
          </div>
        </div>
        <div>
          <Link>Voir+</Link>
        </div>
      </div>
    </div>
  );
};

export default CardsCooperative;
