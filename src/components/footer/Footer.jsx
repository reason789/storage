import { CiLocationOn } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { TbBrandYoutubeFilled } from "react-icons/tb";
import { CiPhone } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import logo from "../../assets/logo.png";
import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section>
      <div className="Footer-bg">
        <div className="Footer container">
          <div className="Footer-address ">
            <div className="Footer-image">
              <img
                className="Footer-image-img"
                width="150px"
                src={logo}
                alt=""
              />
            </div>
            <div className="Footer-flex">
              <CiLocationOn className="icon" />
              <span>Kazipara, Mirpur 10, Dhaka-1216</span>
            </div>
            <div className="Footer-flex">
              <CiMail className="icon" />
              <span>info@stylehutbd.com</span>
            </div>
            <div className="Footer-flex">
              <CiPhone className="icon" />
              <span> (+88)01882154949</span>
            </div>
            <div className="Footer-flex">
              <CiPhone className="icon" />
              <span> (+88)01880541772</span>
            </div>
          </div>
          <div className="Footer-icons">
            <h2>Follow Us</h2>
            <div className="Footer-icons-flex">
              <FaFacebookF className="icon" title="facebook" />
              <RiInstagramFill className="icon" title="Instagram" />
              <TbBrandYoutubeFilled className="icon" title="Youtube" />
            </div>
          </div>
          <div className="Footer-links">
            <h2> Useful Links</h2>
            <div className="Footer-links-list">
              <Link to="about-us">About Us</Link>
              <Link to="terms-conditions">Terms & Conditions</Link>
              <Link to="privacy-policy">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="Footer-copyright">
        <p>
          Copyright © {new Date().getFullYear() + 1} <span>STYLE HUT</span> all
          rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Footer;
