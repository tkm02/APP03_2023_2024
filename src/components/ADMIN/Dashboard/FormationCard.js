import React from "react";
import "../../../styles/ADMIN/FormationCard.css";

const FormationCard = ({ formation }) => {
  return (
    <div className="formation-card">
      <video width="300" height="220" muted autoPlay loop>
        <source src={formation.video} type="video/mp4" />
      </video>
      <h4>{formation.titre}</h4>
      <p>Date: {formation.date}</p>
      <p>
        Video:{" "}
        <a href={formation.videoUrl} target="_blank" rel="noopener noreferrer">
          Lien de la vidéo
        </a>
      </p>
     <button>Afficher</button>
    </div>
  );
};

export default FormationCard;
