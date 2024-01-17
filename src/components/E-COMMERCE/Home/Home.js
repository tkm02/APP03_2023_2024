import React, { useEffect, useState } from "react";
import "../../../styles/Ecom/Home.css";
import Naviguation from "../Naviguation/Naviguation";
import Slider from "../Slider/Slider";
// import EtatCommande from "../EtatCommande/EtatCommande";
import CardsCooperative from "../CardsCooperatives/CardsCooperative";
import ProductCard from "../ProductCard/ProductCard";
import bgImage from "../../../images/pexels-mark-stebnicki-2252584.jpg";
import CategorieProduits from "../CategorieProduits/CategorieProduits";
import Services from "../Services/Services";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import axios from "axios"
import { useParams } from "react-router-dom";

const Home = () => {
  // const popularProductsData = [
  //   {
  //     id: 1,
  //     name: "Pommes vertes",
  //     image: "../../../images/pomme.png",
  //     price: 1499,
  //     oldPrice: 0,
  //     rating: 4.5,
  //   },
  //   {
  //     id: 2,
  //     name: "Malte indienne fraîche",
  //     image: "../../../images/orange.png",
  //     price: 2000,
  //     oldPrice: 0,
  //     rating: 4.2,
  //   },
  //   {
  //     id: 3,
  //     name: "Aubergine",
  //     image: "../../../images/aubergine.png",
  //     price: 1200,
  //     oldPrice: 0,
  //     rating: 4.0,
  //   },
  //   {
  //     id: 4,
  //     name: "Maïs",
  //     image: "../../../images/maïs.png",
  //     price: 19.99,
  //     oldPrice: 0,
  //     rating: 4.5,
  //   },

  //   {
  //     id: 5,
  //     name: "Patates Douces",
  //     image: "../../../images/pomme-de-terre.png",
  //     price: 19.99,
  //     oldPrice: 0,
  //     rating: 4.5,
  //   },
  //   {
  //     id: 6,
  //     name: "Laitue verte",
  //     image: "../../../images/salad.png",
  //     price: 24.99,
  //     oldPrice: 0,
  //     rating: 4.2,
  //   },

  //   // Ajoutez autant d'objets que nécessaire pour représenter vos produits populaires.
  // ];
  const [produits, setProduits] = useState([]);
  const { id } = useParams();
  console.log(id);


  const validProducts = [];

  useEffect(() => {
      axios
        .get(`http://localhost:5000/api/admin/dashboard/validations`)
        .then((res) => {
          const prod = res.data.products;
          for (const product of prod) {
              // Ajoute le produit au tableau `invalidProducts` si sa valeur de `isValide` est `false`
              if (product.isValide) {
                validProducts.push(product);
              }
            }
          setProduits(validProducts)
          console.log(prod);
        })
        .catch((err) => console.log(err));
    }, []);
    console.log(produits);
  return (
    <div className="home">
      <Naviguation />
      <Slider
        welcomeText={{
          title: "Bienvenue à vous, ",
          title2: "chez",
          title3: "AgroLeadTech.",
          title4: "AgroLeadTech, l'agriculture à l'ère du numérique : ",
        }}
        backgroundImage={bgImage}
        imageUrl="https://images.pexels.com/photos/4187621/pexels-photo-4187621.jpeg"
        cropTitle="riz"
        buttonProps={{
          buttonText: "Découvrir",
          buttonLink: "/ecom/products",
        }}
      />
      <h2>
        Les coopératives partenaire à{" "}
        <span>
          <span className="Tech">AgroLead</span>Tech
        </span>
      </h2>
      <CardsCooperative />

      <h2>
        Nos produits par
        <span> categorie</span>
      </h2>
      <CategorieProduits />

      <Services />

      <h2>
        Quelques
        <span> Produits</span>
      </h2>
      <div className="card-container">
        {produits.map((item) => (
          <ProductCard
            key={item._id}
            id={item._id}
            name={item.nomProduit}
            price={item.prixUnitaire}
            image={item.image}
            rating={item.rating}
            idClient={id}
          />
        ))}
      </div>

      <div className="voir-tout-produits">
        <Link to="/ecom/products">Voir plus de produits</Link>
        <i className="fa-solid fa-arrow-right"></i>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
