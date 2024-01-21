import React from "react";
import "./Banner.css";
import photo from "../../assets/pants.webp";

const banner = ({ title, bg }) => {
  return (
    <div className="Banner container">
      <div className="Banner-content">
        {/* <img src={photo} /> */}
        <div>
          <h1>{title}</h1>
          <div className="dag" />
        </div>
        <button className="btns"> See More</button>
      </div>
    </div>
  );
};

export default banner;
