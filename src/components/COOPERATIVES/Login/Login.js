import React, { useState } from "react";
import "../../../styles/COOPERATIVES/Login.css";
import axios from "axios";
import {useNavigate} from "react-router-dom"

const Login = () => {
  const [formData, setFormData] = useState({
    cooperativeName: "",
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
    axios.post(`http://localhost:5000/api/cooperative`, { cooperativeName: formData.cooperativeName, password: formData.password })
    .then(res => {
      console.log(res.data.message.adminToken); 
      navigate(`dashboard/${res.data.message.adminToken}`)
    })
    .catch(err=>{  
      console.log(err);
    })
  };
  return (
    <div className="cooperative">
      <div className="container-login-cooperative">
        <div className="container-image-cooperative"></div>
        <form onSubmit={handleSubmit}>
          <h1>Connexion</h1>
          <>
            <input
              type="text"
              name="cooperativeName"
              placeholder="nom de la coopérative "
              id="username"
              onChange={handleChange}
            />
          </>
          <>
            <input
              type="password"
              name="password"
              placeholder="mot de passe"
              id="password"
              onChange={handleChange}
            />
          </>

          <button>Envoyer</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
