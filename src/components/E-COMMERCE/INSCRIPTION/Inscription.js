import React from "react";
import { Link } from "react-router-dom";
import "../../../styles/Ecom/Inscription.css";

const Inscription = () => {
  return (
    <div>
      <div className="ecom-inscription">
        <div className="container-registration-ecom">
          <form>
            <h1>Inscrivez-vous</h1>
            <div className="inputs-inscription">
              <div>
                <>
                  <input placeholder="Entrer votre nom" type="text" />
                </>
                <>
                  <input placeholder="Entrer votre Prénoms" type="text" />
                </>
                <>
                  <input
                    placeholder="Entrer votre Numéro de téléphone"
                    type="text"
                  />
                </>
              </div>

              <div>
                <>
                  <input placeholder="Entrer votre Ville" type="text" />
                </>
                <>
                  <input
                    placeholder="Entrer votre Nom de l'entreprise"
                    type="text"
                  />
                </>
                <>
                  <input
                    placeholder="Entrer votre Adresse de l'entreprise"
                    type="text"
                  />
                </>
              </div>

              <div>
                <>
                  <input placeholder="Entrer votre Email" type="email" />
                </>
                <>
                  <input
                    placeholder="Entrer votre Mot de passe"
                    type="password"
                  />
                </>
                <>
                  <input
                    placeholder="Confirmer le mot de passe"
                    type="password"
                  />
                </>
              </div>

            </div>
            <button>Inscrivez-vous</button>
            <span>Déjà inscrit ?</span>
            <Link to="/ecom">Connectez-vous</Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Inscription;
