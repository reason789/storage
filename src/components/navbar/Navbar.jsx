import Categories from "../../components/categories/Categories";
import SidebarLogin from "../sidebarLogin/SidebarLogin";
import Sidebar from "../../components/sidebar/Sidebar";
import { MdOutlineShoppingBag } from "react-icons/md";
import { BiSolidCategory } from "react-icons/bi";
import { CgMenuLeftAlt } from "react-icons/cg";
import { totalCartItems } from "../utils/action";
import { FaUserCircle } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { useState, useEffect } from "react";
import { FaPhone } from "react-icons/fa6";
import logo from "../../assets/logo.png";
import Leftbar from "../leftbar/Leftbar";
import { Link } from "react-router-dom";
import "./Navbar.css";
import ProfileDropdown from "../profileDropdown/ProfileDropdown";

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showSidebarLogin, setShowSidebarLogin] = useState(false);
  const [showLeftbar, setShowLeftbar] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  const [user, setUser] = useState(false);

  // const user = {
  //   name: "Md. Rahadul Haq",
  //   displayName: "Md",
  //   image: "https://xsgames.co/randomusers/avatar.php?g=male",
  // };

  useEffect(() => {
    const handleScroll = () => {
      const minWidthForCategories = 1025;

      if (window.scrollY > 300 && window.innerWidth >= minWidthForCategories) {
        setShowCategories(true);
      } else {
        setShowCategories(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="Navbar-wrapper ">
      <SidebarLogin
        showLogin={showSidebarLogin}
        setShowLogin={setShowSidebarLogin}
      />
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <Leftbar showLeftbar={showLeftbar} setShowLeftbar={setShowLeftbar} />
      <div className="Navbar">
        <div
          onClick={() => {
            setShowLeftbar(true);
          }}
          className="Navbar-menu"
        >
          <Link to="/">
            <CgMenuLeftAlt className="icon" />
          </Link>
        </div>
        <div className="Navbar-logo">
          <Link to="/">
            <img src={logo} width="160px" />
          </Link>
        </div>
        {showCategories && (
          <div className="Navbar-categories-container">
            <div className="Navbar-categories pc">
              <BiSolidCategory className="icon" />
              <p>Categories</p>
            </div>
            <div className="Navbar-categories-category">
              <Categories />
            </div>
          </div>
        )}

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
            <span>{totalCartItems()}</span>
          </div>
          {!user ? (
            <div
              onClick={() => {
                setShowSidebarLogin(true);
              }}
              title="Sing Up / Login"
            >
              <FaUserCircle className="icon pc" />
            </div>
          ) : (
            <div
              onClick={() => {
                // setShowSidebarLogin(true);
              }}
              // title="My Account"
            >
              <div className="Navbar-user-wrapper">
                <p>Rahadul</p>
                <img
                  className="Navbar-user-img"
                  src="https://xsgames.co/randomusers/avatar.php?g=male"
                  width="40px"
                />
                <div className="Navbar-dropdown">
                  <div className="Navbar-square"></div>
                  <div className="Navbar-profile-wrapper">
                    <ProfileDropdown />
                  </div>
                </div>
              </div>
            </div>
          )}
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
