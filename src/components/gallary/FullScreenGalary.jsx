import React, { useState } from "react";
import "./FullScreenGalary.css";
import i from "../../assets/1.webp";
import ii from "../../assets/2.webp";
import iii from "../../assets/3.webp";
import { RxCross2 } from "react-icons/rx";
const images = [i, ii, iii];

const FullScreenGalary = ({ setFullScreen }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const handleNextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const handlePrevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="FullScreenGalary">
      <div className="FullScreenGalary-nav">
        <p>
          {currentImage + 1} / {images.length}
        </p>
        <h2>Winter Shirt</h2>
        <RxCross2 className="icon" onClick={() => setFullScreen(false)} />
      </div>
      <div className="FullScreenGalary-content">
        <img src={images[currentImage]} />
        <div className="FullScreenGallery-navigation">
          <div
            className="FullScreenGallery-arrow-left"
            onClick={handlePrevImage}
          >
            &lsaquo;
          </div>
          <div
            className="FullScreenGallery-arrow-right"
            onClick={handleNextImage}
          >
            &rsaquo;
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullScreenGalary;
