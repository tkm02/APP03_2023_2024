import React, { useState, useEffect } from "react";
import "../../../styles/Ecom/Slider.css";
import img1 from "../../../images/pexels-sergei-a-2589457.jpg";
import img2 from "../../../images/pexels-mark-stebnicki-2252584.jpg";
import img3 from "../../../images/Fields_Corn_505533.jpg";
const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [img1, img2, img3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === images.length - 1 ? 0 : prevSlide + 1
      );
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="slider-container">
      <h3>MAMADOU</h3>
      <div className="slider">
        {images.map((image, index) => (
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            className={`img ${index === currentSlide ? "active" : " "}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
