import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import "./Sidebar.css";
import CartItem from "../cartItem/CartItem";

import { useNavigate } from "react-router-dom";

const Sidebar = ({ showSidebar, setShowSidebar }) => {
  const navigate = useNavigate();
  const itemsJsonString = localStorage.getItem("cartItems");
  const items = itemsJsonString && JSON.parse(itemsJsonString);
  return (
    <div className="Sidebar_wrapper">
      <div
        onClick={() => setShowSidebar(false)}
        className={` ${showSidebar ? "Sidebar_opacity" : ""}`}
      ></div>
      <div className={`Sidebar ${showSidebar ? "Sidebar_active" : ""}`}>
        <div className="Sidebar_top_cart">
          <h3>Shopping Cart</h3>
          <div onClick={() => setShowSidebar(false)}>
            <RxCross1 className="icon" />
          </div>
        </div>
        <div className="Sidebar_top">
          <div>
            {items.map((item) => (
              <CartItem item={item} setShowSidebar={setShowSidebar} />
            ))}
          </div>
        </div>
        <div className="Sidebar_bottom">
          <div className="Sidebar_bottom-pricing">
            <h3>Subtotal: </h3>
            <p>৳950</p>
          </div>
          <div className="Sidebar_bottom-buttons">
            <button
              onClick={() => {
                navigate(`/cart`);
                setShowSidebar(false);
              }}
              className="Sidebar_bottom-white-btn "
            >
              VIEW CART
            </button>
            <button
              className="Sidebar_bottom-black-btn "
              onClick={() => navigate(`/checkout`)}
            >
              CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
