import React from "react";
import "./Banner.css";
import { useNavigate } from "react-router-dom";

const Banner = ({ title, bg, link }) => {
  const navigate = useNavigate();
  return (
    <div className="Banner container">
      <div className="Banner-content">
        {/* <img src={photo} /> */}
        <div>
          <h1>{title}</h1>
          <div className="dag" />
        </div>
        <button
          onClick={() => navigate(`/product/category?q=${link}`)}
          className="btns"
        >
          {" "}
          See More
        </button>
      </div>
    </div>
  );
};

export default Banner;
