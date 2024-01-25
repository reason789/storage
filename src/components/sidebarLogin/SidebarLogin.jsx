import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import "./SidebarLogin.css";
import CartItem from "../cartItem/CartItem";
import { SiFacebook } from "react-icons/si";
import { FcGoogle } from "react-icons/fc";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import user from "../../assets/user.png";

const SidebarLogin = ({ showLogin, setShowLogin }) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="SidebarLogin_wrapper">
      <div
        onClick={() => setShowLogin(false)}
        className={` ${showLogin ? "SidebarLogin_opacity" : ""}`}
      ></div>
      <div className={`SidebarLogin ${showLogin ? "SidebarLogin_active" : ""}`}>
        <div className="SidebarLogin_top">
          <div className="SidebarLogin_top_cart">
            <h3>Sign In</h3>
            <div onClick={() => setShowLogin(false)}>
              <RxCross1 className="icon" />
            </div>
          </div>
          <div className="SideBarLogin-body">
            <p>Email address</p>
            <input className="input" type="text" />
            <div className="SideBarLogin-password">
              <p>Password</p>
              <input
                className="input"
                type={!showPassword ? "password" : "text"}
              />
              <div
                onClick={() => setShowPassword(!showPassword)}
                className="SideBarLogin-eye"
              >
                {!showPassword ? (
                  <IoEyeOutline className="icon" />
                ) : (
                  <IoEyeOffOutline className="icon" />
                )}
              </div>
            </div>
            <div className="SideBarLogin-link">
              <div>
                <input
                  type="checkbox"
                  id="remember"
                  name="remember"
                  value="yes"
                />
                <label for="remember">Remember me</label>
              </div>
              <Link to="/forgot">Forgot Password</Link>
            </div>
            <button>LOG IN</button>
            <p className="SidebarLogin-p">OR</p>
            <div className="sidebar-login_socials">
              <div className="sidebar-login_socials_btn">
                <FcGoogle className="sidebar-login_socials_btn_icon" />
                <h4>Login With Google</h4>
              </div>
              <div className="sidebar-login_socials_btn">
                <SiFacebook className="sidebar-login_socials_btn_icon" />
                <h4>Login With Facebook</h4>
              </div>
            </div>

            <div className="SidebarLogin-footer">
              <img src={user} width="120px" />
              <p>No account Yet?</p>
              <Link onClick={() => setShowLogin(false)} to="/login">
                Create an account
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarLogin;
