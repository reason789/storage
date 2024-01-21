import React, { useState } from "react";
import "./Gallary.css";
import i from "../../assets/1.webp";
import ii from "../../assets/2.webp";
import iii from "../../assets/3.webp";
import { ImEnlarge } from "react-icons/im";
import FullScreenGalary from "./FullScreenGalary";
const Gallary = () => {
  const [show, setShow] = useState(i);
  const [fullScreen, setFullScreen] = useState(false);
  return (
    <>
      <div className="Gallary">
        <div className="Gallary-carousel">
          <img className="Gallary-carousel-img" src={show} />
        </div>

        <div className="Gallary-icon" onClick={() => setFullScreen(true)}>
          <ImEnlarge className="icon" />
          <span>Zoom image</span>
        </div>
        <div className="Gallary-discount">
          <span>-30%</span>
        </div>
      </div>
      <div className="Gallary-images">
        <div
          onClick={() => {
            setShow(i);
          }}
          className={
            show == i
              ? "Gallary-image-container Gallary-image-container-opacity"
              : "Gallary-image-container"
          }
        >
          <img src={i} />
        </div>
        <div
          onClick={() => {
            setShow(ii);
          }}
          className={
            show == ii
              ? "Gallary-image-container Gallary-image-container-opacity"
              : "Gallary-image-container"
          }
        >
          <img src={ii} />
        </div>
        <div
          onClick={() => {
            setShow(iii);
          }}
          className={
            show == iii
              ? "Gallary-image-container Gallary-image-container-opacity"
              : "Gallary-image-container"
          }
        >
          <img src={iii} />
        </div>
      </div>
      <div className="Gallary-image-zoom">
        {fullScreen && <FullScreenGalary setFullScreen={setFullScreen} />}
      </div>
    </>
  );
};

export default Gallary;
