import React from "react";
import video1 from "../../../videos/pexels_videos_2758322 (1080p) (1).mp4";
import video2 from "../../../videos/pexels_videos_2300433 (1080p).mp4";
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
