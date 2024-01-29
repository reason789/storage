import { useState } from "react";
import "./UpdatePassword.css";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";

const UpdatePassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="UpdatePassword">
      <h3>Update Password</h3>
      <div>
        <div className="UpdatePassword-password">
          <p>Old Password</p>
          <input className="input" type={!showPassword ? "password" : "text"} />
          <div
            onClick={() => setShowPassword(!showPassword)}
            className="UpdatePassword-eye"
          >
            {!showPassword ? (
              <IoEyeOutline className="icon" />
            ) : (
              <IoEyeOffOutline className="icon" />
            )}
          </div>
        </div>
      </div>

      <div className="UpdatePassword-password">
        <p>New Password</p>
        <input className="input" type={!showPassword ? "password" : "text"} />
        <div
          onClick={() => setShowPassword(!showPassword)}
          className="UpdatePassword-eye"
        >
          {!showPassword ? (
            <IoEyeOutline className="icon" />
          ) : (
            <IoEyeOffOutline className="icon" />
          )}
        </div>
      </div>

      <div className="UpdatePassword-password">
        <p>Confirm Password</p>
        <input className="input" type={!showPassword ? "password" : "text"} />
        <div
          onClick={() => setShowPassword(!showPassword)}
          className="UpdatePassword-eye"
        >
          {!showPassword ? (
            <IoEyeOutline className="icon" />
          ) : (
            <IoEyeOffOutline className="icon" />
          )}
        </div>
      </div>

      <div>
        <button> Reset Password</button>
      </div>
    </div>
  );
};

export default UpdatePassword;
