import React from "react";
import "./CartItem.css";
import image from "../../assets/pants.webp";
import { RxCross1 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";

const CartItem = () => {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(`/`)} className="CartItem">
      <div className="CartItem-image">
        <img src={image} width="60px" />
        <div className="CartItem-content">
          <h2> Winter Shirt</h2>
          <p>
            1 x <span>৳950</span>
          </p>
        </div>
      </div>
      <RxCross1 className="icon" />
    </div>
  );
};

export default CartItem;
