import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import "./Leftbar.css";
import CartItem from "../cartItem/CartItem";
import Categories from "../categories/Categories";
import image from "../../assets/user2.png";

import SidebarLogin from "../sidebarLogin/SidebarLogin";

const Leftbar = ({ showLeftbar, setShowLeftbar }) => {
  const [showSidebarLogin, setShowSidebarLogin] = useState(false);
  return (
    <div className="Leftbar_wrapper">
      <SidebarLogin
        showLogin={showSidebarLogin}
        setShowLogin={setShowSidebarLogin}
      />
      <div
        onClick={() => setShowLeftbar(false)}
        className={` ${showLeftbar ? "Leftbar_opacity" : ""}`}
      ></div>
      <div className={`Leftbar ${showLeftbar ? "Leftbar_active" : ""}`}>
        <div className="Leftbar_top">
          <div className="Leftbar_top_cart">
            <h3>Home</h3>
            <div onClick={() => setShowLeftbar(false)}>
              <RxCross1 className="icon" />
            </div>
          </div>
          <div className="Leftbar-categories">
            <Categories />
          </div>
        </div>
        <div className="Leftbar_bottom">
          <div className="Leftbar_bottom-img">
            <img src={image} width="70px" />
          </div>
          <div className="Leftbar_bottom-buttons">
            <button
              onClick={() => {
                setShowSidebarLogin(true);
                setShowLeftbar(false);
              }}
              className="Leftbar_bottom-black-btn "
            >
              LOG IN / REGISTER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leftbar;
