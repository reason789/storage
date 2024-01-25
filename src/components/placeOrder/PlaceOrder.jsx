import React from "react";
import "./PlaceOrder.css";
import image from "../../assets/success.png";

import { useNavigate } from "react-router-dom";

const PlaceOrder = () => {
  const navigate = useNavigate();
  return (
    <div className="PlaceOrder container">
      <div className="PlaceOrder-wrapper">
        <h1> Your Order has been placed</h1>
        <img src={image} width="70px" />
        <h2>Thnak you for your purchase !</h2>
        <p>
          Your Order ID: <span className="PlaceOrder-id">#57TVD58XY</span>
        </p>
        <p>
          You will recieve an order confirmation <b>email</b> with details of
          your order
        </p>
        <button onClick={() => navigate(`/`)}>CONTINUE SHOPPING</button>
      </div>
    </div>
  );
};

export default PlaceOrder;
