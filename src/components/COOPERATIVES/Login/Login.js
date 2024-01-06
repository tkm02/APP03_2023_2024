import React from "react";
import "../../../styles/COOPERATIVES/Login.css";
const Login = () => {
  return (
    <div className="cooperative">
      <div className="container-login-cooperative">
        <div className="container-image-cooperative"></div>
        <form>
          <h1>Connexion</h1>
          <>
            <input
              type="text"
              name="cooperativeName"
              placeholder="nom de la coopérative "
              id="username"
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
        </form>
      </div>
    </div>
  );
};

export default Login;
