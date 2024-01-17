import React, { useState } from "react";
import "@lottiefiles/lottie-player";
import "../../../styles/Ecom/Connection.css";
import { Link } from "react-router-dom";
import axios from "axios";
import {useNavigate} from "react-router-dom"
const url =
  "https://lottie.host/embed/a5217286-1524-4e24-891e-bebc0849ce5c/wFTRdttrwf.json";

const Connection = () => {
  const [formData, setFormData] = useState({
    email: "",
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
    axios.post(`http://localhost:5000/api/ecom`, { formData })
    .then(res => {
      console.log(res.data); 
      navigate(`${res.data.message._id}/home`)
    })
    .catch(err=>{
      console.log(err);
    })
  };
  return (
    <div className="ecom">
      <div className="container-login-ecom">
        <div className="container-image-ecom">
          <iframe src={url} title="ras" />
        </div>
        <form onSubmit={handleSubmit}>
          <h1>Connectez-vous</h1>
          <>
            <input
              type="text"
              name="email"
              placeholder="votre email"
              id="email"
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
          <span>Pas encore de compte ?</span>
          <Link to="/ecom/inscription/">Inscrivez-vous</Link>
        </form>
      </div>
    </div>
  );
};

export default Connection;
