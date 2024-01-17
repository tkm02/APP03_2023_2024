import React, { useState } from "react";
import "@lottiefiles/lottie-player";
import "../../../styles/ADMIN/Login.css";
import axios from "axios";
import {useNavigate} from "react-router-dom"

const url =
  "https://lottie.host/embed/165a1862-ed54-4ca3-a78b-7aef7e419f09/ehivJ5MDkU.json";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post(`http://localhost:5000/api/admin/`, { admin: formData.username, password: formData.password })
    .then(res => {
      navigate("../dashboard")
    })
    .catch(err=>{
      console.log(err);
    })
  };

  return (
    <div className="container-login-admin">
      <div className="animation">
        <iframe src={url} title="ras" />
      </div>
      <form onSubmit={handleSubmit}>
        <h1>Administrateur</h1>
        <>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            placeholder="username"
            id="username"
            onChange={handleChange}
          />
        </>
        <>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="password"
            id="password"
            onChange={handleChange}
          />
        </>

        <button>Envoyer</button>
      </form>
    </div>
  );
};

export default Login;
