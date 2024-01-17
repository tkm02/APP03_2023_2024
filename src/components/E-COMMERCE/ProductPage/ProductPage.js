import React, { useEffect, useState } from "react";
import Naviguation from "../Naviguation/Naviguation";
// import Slider from "../Slider/Slider";
import bgImage from "../../../images/pexels-ákos-szabó-440731.jpg";
import ProductCard from "../ProductCard/ProductCard";
import SliderProductPage from "../SliderProductPage/SliderProductPage";
// import BarRecherche from "../BarRecherche/BarRecherche";
import ChoiceCategories from "../ChoiceCategories/ChoiceCategories";
import Footer from "../Footer/Footer";


const ProductPage = () => {
  const productsData = [
    {
      id: 1,
      name: "Aubergine",
      price: 2500,
      oldPrice: 3000,
      type: "Légumes",
      rating: 4,
      isValid: true,
    },
    {
      id: 2,
      name: "Tomate",
      price: 2000,
      oldPrice: 2500,
      type: "Légumes",
      rating: 3,
      isValid: true,
    },
    {
      id: 3,
      name: "Carotte",
      price: 1800,
      oldPrice: 2000,
      type: "Légumes",
      rating: 5,
      isValid: true,
    },
    {
      id: 4,
      name: "Carotte",
      price: 1800,
      oldPrice: 2000,
      type: "Légumes",
      rating: 5,
      isValid: true,
    },
    {
      id: 5,
      name: "orange",
      price: 1800,
      oldPrice: 2000,
      type: "Fruits",
      rating: 5,
      isValid: true,
    },
  ];
  const validProducts = productsData.filter((product) => product.isValid);

  const [filteredProducts, setFilteredProducts] = useState(validProducts);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryChange = (category) => {
    var filtre = validProducts.filter(product => product.type === category);
    setFilteredProducts(filtre);    
  };

  useEffect(() => {
    const filteredProduct = validProducts.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filteredProduct);
    console.log(filteredProducts);
    
    return () => {
        setFilteredProducts([]);
      };
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm]); // Dépendances correctes
  
  return (
    <div>
      <Naviguation/>
      <SliderProductPage
        welcomeText={{
          title: "Bienvenue à vous, ",
          title2: "sur",
          title3: "la page des produits.",
          title4:
            "Saisissez un mot-clé pour rechercher des produits dans notre boutique en ligne.",
        }}
        onSearchChange={handleSearchChange}
        backgroundImage={bgImage}
        imageUrl="https://images.pexels.com/photos/2589457/pexels-photo-2589457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        cropTitle="riz"
        buttonProps={{
          buttonText: "Home",
          buttonLink: "/ecom/home",
        }}
      />
      <h2>
        Nos produits par
        <span> categorie</span>
      </h2>
      <ChoiceCategories onCategoryChange={handleCategoryChange}/>
      <div className="product-list" style={{ width: "90%", margin: "0 auto" }}>
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            oldPrice={product.oldPrice}
            rating={product.rating}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default ProductPage;
