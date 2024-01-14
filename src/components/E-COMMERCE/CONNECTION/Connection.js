import React from "react";
import "@lottiefiles/lottie-player";
import "../../../styles/Ecom/Connection.css";
import { Link } from "react-router-dom";

const url =
  "https://lottie.host/embed/a5217286-1524-4e24-891e-bebc0849ce5c/wFTRdttrwf.json";

const Connection = () => {
  return (
    <div className="ecom">
      <div className="container-login-ecom">
        <div className="container-image-ecom">
          <iframe src={url} title="ras" />
        </div>
        <form>
          <h1>Connectez-vous</h1>
          <>
            <input
              type="text"
              name="Email"
              placeholder="votre email"
              id="eamil"
            />
          </>
          <>
            <input
              type="password"
              name="password"
              placeholder="mot de passe"
              id="password"
            />
          </>
          
          <button>Envoyer</button>
          <span>Pas encore de compte ?</span>
          <Link to="/ecom/inscription/">Inscrivez-vous</Link>
        </form>
      </div>
    </div>
  );
};

export default Connection;
