import { MdOutlineShoppingBag } from "react-icons/md";
import { CgMenuLeftAlt } from "react-icons/cg";
import { IoIosSearch } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import logo from "../../assets/logo.png";
import { FiUser } from "react-icons/fi";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import SidebarLogin from "../sidebarLogin/SidebarLogin";
const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showSidebarLogin, setShowSidebarLogin] = useState(false);

  return (
    <div className="Navbar-wrapper ">
      <SidebarLogin
        showLogin={showSidebarLogin}
        setShowLogin={setShowSidebarLogin}
      />
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <div className="Navbar">
        <div className="Navbar-menu">
          <Link to="/">
            <CgMenuLeftAlt className="icon" />
          </Link>
        </div>
        <div className="Navbar-logo">
          <Link to="/">
            <img src={logo} width="160px" />
          </Link>
        </div>
        <div className="Navbar-search pc">
          <input type="text" name="" id="" placeholder="Search for products" />
          <IoIosSearch className="icon" />
        </div>
        <div className="Navbar-phone pc">
          <FaPhone className="icon" />
          <p>01941743121</p>
        </div>
        <div className="Navbar-cart-items">
          <div
            onClick={() => {
              setShowSidebar(true);
            }}
            className="Navbar-cart"
            title="Cart"
          >
            <MdOutlineShoppingBag className="icon" />
            <span>1</span>
          </div>
          <div
            onClick={() => {
              setShowSidebarLogin(true);
            }}
            title="My Account"
          >
            <FiUser className="icon pc" />
          </div>
        </div>
      </div>
      <div className="Navbar-search mbl">
        <input type="text" name="" id="" placeholder="Search for products" />
        <IoIosSearch className="icon" />
      </div>
    </div>
  );
};

export default Navbar;
