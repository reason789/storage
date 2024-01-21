import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import "./Sidebar.css";
import CartItem from "../cartItem/CartItem";

const Sidebar = ({ showSidebar, setShowSidebar }) => {
  return (
    <div className="Sidebar_wrapper">
      <div
        onClick={() => setShowSidebar(false)}
        className={` ${showSidebar ? "Sidebar_opacity" : ""}`}
      ></div>
      <div className={`Sidebar ${showSidebar ? "Sidebar_active" : ""}`}>
        <div className="Sidebar_top">
          <div className="Sidebar_top_cart">
            <h3>Shopping Cart</h3>
            <div onClick={() => setShowSidebar(false)}>
              <RxCross1 className="icon" />
            </div>
          </div>
          <div>
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
          </div>
        </div>
        <div className="Sidebar_bottom">
          <div className="Sidebar_bottom-pricing">
            <h3>Subtotal: </h3>
            <p>৳950</p>
          </div>
          <div className="Sidebar_bottom-buttons">
            <button className="Sidebar_bottom-white-btn ">VIEW CART</button>
            <button className="Sidebar_bottom-black-btn ">CHECKOUT</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
