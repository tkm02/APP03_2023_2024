import React, { useState } from "react";
import "../../../styles/Ecom/AfficheImages.css";

const AfficheImages = ({ imageList }) => {
  const [selectedImage, setSelectedImage] = useState(imageList[0]);

  const handleImageClick = (newImage) => {
    setSelectedImage(newImage);
  };
  return (
    <div className="gauche">
      <div className="détail">
        {imageList.map((image, index) => (
          <div
            key={index}
            className="img"
            onClick={() => handleImageClick(image)}
          >
            <img src={image} alt="img" />
          </div>
        ))}
      </div>
      <div className="image-selectionner">
        <img id="img-select" src={selectedImage} alt="Selected" />
      </div>
    </div>
  );
};

export default AfficheImages;
