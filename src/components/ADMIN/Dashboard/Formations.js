import React from "react";
import ListeFormations from "./ListeFormations";
import AjoutFormation from "./AjoutFormation";

const Formations = () => {
  return (
    <div>
      <h2>Formations</h2>
      <AjoutFormation />
      <ListeFormations />
    </div>
  );
};

export default Formations;
