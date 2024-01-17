import React from 'react';
import coop2 from '../../../images/coop.png'
import { Link } from 'react-router-dom';
const CoopProduits = () => {
    return (
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
    );
}

export default CoopProduits;
