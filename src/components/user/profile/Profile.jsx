import UpdatePassword from "../updatePassword/UpdatePassword";
import UpdateProfile from "../updateProfile/UpdateProfile";
import { FaBasketShopping } from "react-icons/fa6";
import { PiPasswordBold } from "react-icons/pi";
import { MdBorderColor } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { FaPowerOff } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import React, { useState } from "react";
import "./Profile.css";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("profile");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="Profile container">
      <h1>
        {activeTab == "profile"
          ? "PROFILE"
          : activeTab == "editProfile"
          ? "EDIT PROFILE"
          : "UPDATE PASSWORD"}
      </h1>
      <div className="Profile-wrapper">
        <div className="Profile-nav">
          <div className="Profile-nav-pc pc"></div>
          <div className="Profile-nav-mbl ">
            <div
              className={`Profile-nav-mbl-flex ${
                activeTab === "profile" ? "Profile-active" : ""
              }`}
              onClick={() => handleTabClick("profile")}
            >
              <FaUser className="icon" />
              <Link>Profile</Link>
            </div>

            <div
              className={`Profile-nav-mbl-flex ${
                activeTab === "editProfile" ? "Profile-active" : ""
              }`}
              onClick={() => handleTabClick("editProfile")}
            >
              <MdBorderColor className="icon" />
              <Link>Edit Profile</Link>
            </div>
            <div
              className={`Profile-nav-mbl-flex ${
                activeTab === "updatePassword" ? "Profile-active" : ""
              }`}
              onClick={() => handleTabClick("updatePassword")}
            >
              <PiPasswordBold className="icon" />
              <Link>Update Password</Link>
            </div>
          </div>
        </div>
        <div className="Profile-page">
          {activeTab === "editProfile" && <UpdateProfile />}
          {activeTab === "updatePassword" && <UpdatePassword />}
          {activeTab === "profile" && (
            <div className="Profile-section">
              <div className="Profile-section-img">
                <img
                  src="https://xsgames.co/randomusers/avatar.php?g=male"
                  width="200px"
                />
              </div>
              <div className="Profile-section-info">
                <h2>Name</h2>
                <p>Md.Rahadul Haq</p>
                <h2>Email</h2>
                <p>rahadul134gmail.com</p>
                <h2>Joined In</h2>
                <p>12 january, 2023</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
