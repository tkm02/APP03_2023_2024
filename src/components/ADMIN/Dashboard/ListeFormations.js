import React from 'react';
import FormationCard from './FormationCard';
import video1 from "../../../videos/pexels_videos_2758322 (1080p) (1).mp4";
import video2 from "../../../videos/pexels_videos_2300433 (1080p).mp4";
import "../../../styles/ADMIN/ListeFormations.css";

const ListeFormations = () => {
    // Simulation de données
  const formations = [
    { id: 1, titre: 'Formation 1', date: '2023-11-15', videoUrl: 'lien_de_la_video_1',video:video1 },
    { id: 1, titre: 'Formation 1', date: '2023-11-15', videoUrl: 'lien_de_la_video_1', video:video2},
    { id: 1, titre: 'Formation 1', date: '2023-11-15', videoUrl: 'lien_de_la_video_1', video:video1 },
    { id: 1, titre: 'Formation 1', date: '2023-11-15', videoUrl: 'lien_de_la_video_1', video:video2 },
    { id: 1, titre: 'Formation 1', date: '2023-11-15', videoUrl: 'lien_de_la_video_1', video:video1 },
    // Ajoutez d'autres formations
  ];

  return (
    <div className='container-formation-card'>
      <div className="formations-list">
        {formations.map((formation) => (
          <FormationCard key={formation.id} formation={formation} />
        ))}
      </div>
    </div>
  );
}

export default ListeFormations;
