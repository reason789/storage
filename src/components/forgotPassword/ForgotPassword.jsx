import React, { useState } from "react";
import Gradient from "../gradient/Gradient";
import "./ForgotPassword.css";

const ForgotPassword = () => {
  return (
    <div className="ForgotPassword_bg">
      <Gradient />
      <div className="ForgotPassword">
        <div className="ForgotPassword_logo">
          <h2>STYLE HUT</h2>
          <p>Your Trusted Shop</p>
        </div>
        <div className="ForgotPassword_content">
          <h2>Forgot Password</h2>
          <p>Enter your email</p>
          <input type="text" placeholder="example@gmail.com" />

          <button>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
