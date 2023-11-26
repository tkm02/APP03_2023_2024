import React from "react";
import "@lottiefiles/lottie-player";
import "../../../styles/ADMIN/Login.css";

const url =
  "https://lottie.host/embed/165a1862-ed54-4ca3-a78b-7aef7e419f09/ehivJ5MDkU.json";

const Login = () => {
  return (
    <div className="container-login-admin">
      <div className="animation">
        <iframe src={url} title="ras" />
      </div>
      <form>
        <h1>Administrateur</h1>
        <>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            placeholder="username"
            id="username"
          />
        </>
        <>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="password"
            id="password"
          />
        </>

        <button>Envoyer</button>
      </form>
    </div>
  );
};

export default Login;
