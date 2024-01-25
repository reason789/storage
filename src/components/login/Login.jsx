import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SiFacebook } from "react-icons/si";
import { FcGoogle } from "react-icons/fc";
import "./Login.css";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import Gradient from "../gradient/Gradient";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="Login_bg">
      <Gradient />
      <div className="Login">
        <div className="Login_logo">
          <h2>STYLE HUT</h2>
          <p>Your Trusted Shop</p>
        </div>
        <div className="Login_content">
          <div
            onClick={() => setIsLogin(!isLogin)}
            className="Login_content_toggle"
          >
            <h6>&#9755;</h6> {!isLogin ? "Login" : "Signup"}{" "}
          </div>
          <h2>{isLogin ? "Login" : "Signup"}</h2>
          <p>Email</p>
          <input type="text" placeholder="example@gmail.com" />
          <div className="Login-password">
            <p>Password</p>
            <input
              className="input"
              type={!showPassword ? "password" : "text"}
            />
            <div
              onClick={() => setShowPassword(!showPassword)}
              className="Login-eye"
            >
              {!showPassword ? (
                <IoEyeOutline className="icon" />
              ) : (
                <IoEyeOffOutline className="icon" />
              )}
            </div>
          </div>
          {!isLogin && (
            <div className="Login-password">
              <p>Confirm Password</p>
              <input
                className="input"
                type={!showPassword ? "password" : "text"}
              />
              <div
                onClick={() => setShowPassword(!showPassword)}
                className="Login-eye"
              >
                {!showPassword ? (
                  <IoEyeOutline className="icon" />
                ) : (
                  <IoEyeOffOutline className="icon" />
                )}
              </div>
            </div>
          )}
          {isLogin && <Link to="/">Forgot password?</Link>}
          <br />
          <button>{isLogin ? "LOG IN" : "SIGN UP"}</button>
          <h4>
            {isLogin ? "Don't have an account ?" : "Already have an account ?"}{" "}
            <span onClick={() => setIsLogin(!isLogin)}>
              {isLogin ? "SignUp" : "Login"}
            </span>
          </h4>
          <div className="Login_socials">
            <div className="Login_socials_btn">
              <FcGoogle className="Login_socials_btn_icon" />
              <h4>{isLogin ? "Login" : "Sign up"} With Google</h4>
            </div>
            <div className="Login_socials_btn">
              <SiFacebook className="Login_socials_btn_icon" />
              <h4>{isLogin ? "Login" : "Sign up"} With Facebook</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
