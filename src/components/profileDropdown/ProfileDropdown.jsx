import { PiPasswordBold } from "react-icons/pi";
import { MdBorderColor } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { FaPowerOff } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import "./ProfileDropdown.css";
import React from "react";

const ProfileDropdown = () => {
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
        <div className="ProfileDropdown-body-flex">
          <FaUser className="icon" />
          <p>My Profile</p>
        </div>
        <div className="ProfileDropdown-body-flex">
          <MdBorderColor className="icon" />
          <p>My Orders</p>
        </div>
        <div className="ProfileDropdown-body-flex">
          <IoSettings className="icon" />
          <p>Settings</p>
        </div>
      </div>
      <div className="ProfileDropdown-bottom">
        <div className="ProfileDropdown-body-flex">
          <FaPowerOff className="icon" />
          <p>Logout</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileDropdown;
