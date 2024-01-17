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
        {[0,1,2,4].map((_, index) => (
          <div
            key={index}
            className="img"
            onClick={() => handleImageClick(imageList)}
          >
            <img src={imageList} alt="img" />
          </div>
        ))}
      </div>
      <div className="image-selectionner">
        <img id="img-select" src={imageList} alt="Selected" />
      </div>
    </div>
  );
};

export default AfficheImages;
