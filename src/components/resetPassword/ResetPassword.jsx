import { useState } from "react";
import "./ResetPassword.css";
import Gradient from "../gradient/Gradient";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";

const ResetPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="ForgotPassword_bg">
      <Gradient />
      <div className="ForgotPassword">
        <div className="ForgotPassword_logo">
          <h2>STYLE HUT</h2>
          <p>Your Trusted Shop</p>
        </div>
        <div className="ForgotPassword_content">
          <h2>Reset Password</h2>
          <div className="Login-password">
            <p>New Password</p>
            <input
              className="input"
              type={!showPassword ? "password" : "text"}
            />
            <div
              onClick={() => setShowPassword(!showPassword)}
              className="ResetPassword-eye"
            >
              {!showPassword ? (
                <IoEyeOutline className="icon" />
              ) : (
                <IoEyeOffOutline className="icon" />
              )}
            </div>
          </div>
          <div className="Login-password">
            <p>Confirm Password</p>
            <input
              className="input"
              type={!showPassword ? "password" : "text"}
            />
            <div
              onClick={() => setShowPassword(!showPassword)}
              className="ResetPassword-eye"
            >
              {!showPassword ? (
                <IoEyeOutline className="icon" />
              ) : (
                <IoEyeOffOutline className="icon" />
              )}
            </div>
          </div>

          <button>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
