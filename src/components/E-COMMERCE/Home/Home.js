import React from 'react';
import "../../../styles/Ecom/Home.css";
import Naviguation from '../Naviguation/Naviguation';
import Slider from '../Slider/Slider';
import EtatCommande from '../EtatCommande/EtatCommande';
import CardsCooperative from '../CardsCooperatives/CardsCooperative';
import ProductCard from '../ProductCard/ProductCard';

const Home = () => {
    const popularProductsData = [
        {
          id: 1,
          name: "Pommes vertes",
          image: "../../../images/pomme.png",
          price: 1499,
          oldPrice: 0,
          rating: 4.5,
        },
        {
          id: 2,
          name: "Malte indienne fraîche",
          image: "../../../images/orange.png",
          price: 2000,
          oldPrice: 0,
          rating: 4.2,
        },
        {
          id: 3,
          name: "Aubergine",
          image: "../../../images/aubergine.png",
          price: 1200,
          oldPrice: 0,
          rating: 4.0,
        },
        {
          id: 4,
          name: "Maïs",
          image: "../../../images/maïs.png",
          price: 19.99,
          oldPrice: 0,
          rating: 4.5,
        },
    
        {
          id: 5,
          name: "Patates Douces",
          image: "../../../images/pomme-de-terre.png",
          price: 19.99,
          oldPrice: 0,
          rating: 4.5,
        },
        {
          id: 6,
          name: "Laitue verte",
          image: "../../../images/salad.png",
          price: 24.99,
          oldPrice:0,
          rating: 4.2,
        },
    
        {
          id: 7,
          name: "Chou chinois",
          image: "../../../images/chou.png",
          price: 19.99,
          oldPrice: 0,
          rating: 4.5,
        },
        {
          id: 8,
          name: "Malte indienne fraîche",
          image: "../../../images/orange.png",
          price: 24.99,
          oldPrice: 0,
          rating: 4.2,
        },
        {
          id: 9,
          name: "Aubergine",
          image: "../../../images/aubergine.png",
          price: 1200,
          oldPrice: 0,
          rating: 4.0,
        },
        {
          id: 10,
          name: "Maïs",
          image: "../../../images/maïs.png",
          price: 19.99,
          oldPrice: 0,
          rating: 4.5,
        },
    
        // Ajoutez autant d'objets que nécessaire pour représenter vos produits populaires.
      ];
    return (
        <div className='home'>
            <Naviguation />
            <Slider />
            <h2>Commençons vos achats dés maintenant,<span>NOM_DE_ENTRERISE</span></h2>
            <EtatCommande />
            <h2>Les coopératives partenaire à <span><span className='Tech'>AgroLead</span>Tech</span></h2>
            <CardsCooperative />
            <div className='card-container'>
            {popularProductsData.map((item) => (
                <ProductCard
                  key={item.id}
                  name={item.name}
                  price={item.price}
                  image={item.image}
                  oldPrice={item.oldPrice}
                  rating={item.rating}
                />
              ))}

            </div>
        </div>
    );
}

export default Home;
