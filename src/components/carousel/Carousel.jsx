import React, { useState, useEffect } from "react";
import "./Carousel.css";

const Carousel = ({ images }) => {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  let timeOut = null;

  useEffect(() => {
    timeOut =
      autoPlay &&
      setTimeout(() => {
        slideRight();
      }, 4500);
  });

  const slideRight = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  const slideLeft = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };
  console.log(current);
  return (
    <div
      className="Carousel"
      onMouseEnter={() => {
        setAutoPlay(false);
        clearTimeout(timeOut);
      }}
      onMouseLeave={() => {
        setAutoPlay(true);
      }}
    >
      <div className="Carousel-wrapper">
        {images.map((image, index) => {
          return (
            <div
              key={index}
              className={
                index == current
                  ? "Carousel-card Carousel-card-active"
                  : "Carousel-card"
              }
            >
              <img className="Carousel-card-image" src={image.image} alt="" />
              <div className="Carousel-card-overlay">
                <h2 className="Carousel-card-title">{image.title}</h2>
              </div>
            </div>
          );
        })}
        <div className="Carousel-arrow-left" onClick={slideLeft}>
          &lsaquo;
        </div>
        <div className="Carousel-arrow-right" onClick={slideRight}>
          &rsaquo;
        </div>
        <div className="Carousel-pagination">
          {images.map((_, index) => {
            return (
              <div
                key={index}
                className={
                  index == current
                    ? "Carousel-pagination-dot Carousel-pagination-dot-active"
                    : "Carousel-pagination-dot"
                }
                onClick={() => setCurrent(index)}
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
