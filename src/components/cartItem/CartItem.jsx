import { useNavigate } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";
import React from "react";
import "./CartItem.css";

import { removeFromCart } from "../utils/action";

const CartItem = ({ item, setShowSidebar }) => {
  const navigate = useNavigate();

  return (
    <div className="CartItem">
      <div className="CartItem-image">
        <img src={item.image} width="60px" />
        <div
          onClick={() => {
            navigate(
              `product/${item && item.id}/${item.title.split(" ").join("-")}`
            );
            setShowSidebar(false);
          }}
          className="CartItem-content"
        >
          <h2> {item.title}</h2>
          <p>
            {item.quantity} x <span>৳{item.price}</span>
          </p>
        </div>
      </div>
      <RxCross1
        onClick={() => {
          removeFromCart(item.id);
        }}
        className="icon"
      />
    </div>
  );
};

export default CartItem;
