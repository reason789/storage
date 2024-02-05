import { getItemsFromLocalStorage, subtotal } from "../utils/action";
import emptyCart from "../../assets/empty-cart.png";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CartItem from "../cartItem/CartItem";
import { RxCross1 } from "react-icons/rx";
import "./Sidebar.css";

const Sidebar = ({ showSidebar, setShowSidebar }) => {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  // useEffect(() => {
  //   const itemss = getItemsFromLocalStorage();
  //   setItems(itemss);
  // }, [items]);
  const updateItems = () => {
    const itemss = getItemsFromLocalStorage();
    setItems(itemss);
    return;
  };
  useEffect(() => {
    updateItems();
  }, [items]);

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
            {items.length !== 0 ? (
              items.map((item, index) => (
                <CartItem
                  key={index}
                  item={item}
                  setShowSidebar={setShowSidebar}
                />
              ))
            ) : (
              <div className="Sidebar-no-item">
                <img src={emptyCart} width="120px" />
                <p>No item in this cart</p>
                <button
                  onClick={() => {
                    setShowSidebar(false);
                    navigate("/product/category");
                  }}
                  className="btn"
                >
                  Do Shopping
                </button>
              </div>
            )}
          </div>
        </div>
        <div className="Sidebar_bottom">
          <div className="Sidebar_bottom-pricing">
            <h3>Subtotal: </h3>
            <p>৳{subtotal && subtotal()}</p>
          </div>
          <div className="Sidebar_bottom-buttons">
            <button
              onClick={() => {
                setShowSidebar(false);
                navigate(`/cart`);
              }}
              className="Sidebar_bottom-white-btn "
            >
              VIEW CART
            </button>
            <button
              className="Sidebar_bottom-black-btn "
              onClick={() => {
                setShowSidebar(false);
                navigate(`/checkout`);
              }}
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
