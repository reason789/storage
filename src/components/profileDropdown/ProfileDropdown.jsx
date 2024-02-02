import { PiPasswordBold } from "react-icons/pi";
import { MdBorderColor } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { FaPowerOff } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import "./ProfileDropdown.css";
import React from "react";
import { useNavigate } from "react-router-dom";

const ProfileDropdown = ({ user, setUser }) => {
  const navigate = useNavigate();
  return (
    <div className="ProfileDropdown">
      <div className="ProfileDropdown-top">
        <img
          className="ProfileDropdown-top-img"
          src="https://xsgames.co/randomusers/avatar.php?g=male"
          width="40px"
        />
        <div className="ProfileDropdown-top-content">
          <h1>Md.Rahadul Haq</h1>
          <p>rahadul134@gmail.com</p>
        </div>
      </div>
      <div className="ProfileDropdown-body">
        <div
          className="ProfileDropdown-body-flex"
          onClick={() => navigate(`account`)}
        >
          <FaUser className="icon" />
          <p>My Profile</p>
        </div>
        <div
          className="ProfileDropdown-body-flex"
          onClick={() => navigate(`my-orders`)}
        >
          <MdBorderColor className="icon" />
          <p>My Orders</p>
        </div>
        <div className="ProfileDropdown-body-flex">
          <IoSettings className="icon" />
          <p>Settings</p>
        </div>
      </div>
      <div className="ProfileDropdown-bottom">
        <div
          onClick={() => {
            setUser(false);
            navigate("/");
          }}
          className="ProfileDropdown-body-flex"
        >
          <FaPowerOff className="icon" />
          <p>Logout</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileDropdown;
