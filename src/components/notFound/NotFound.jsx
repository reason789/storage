import { useNavigate } from "react-router-dom";
import Gradient from "../gradient/Gradient";
import ghost from "../../assets/ghost.gif";
import { FaHome } from "react-icons/fa";
import React from "react";
import "./NotFound.css";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="NotFound container">
      <Gradient />
      <div className="NotFound-wrapper">
        <h1>404</h1>
        <img src={ghost} width="200px" />
        <h2>oooooowwwww! It's a ghost!</h2>
        <p>Go back to home now</p>
        <button onClick={() => navigate("/")}>
          {" "}
          <FaHome className="icon" />
        </button>
      </div>
    </div>
  );
};

export default NotFound;
