import ProfileDropdown from "../profileDropdown/ProfileDropdown";
import Categories from "../../components/categories/Categories";
import SidebarLogin from "../sidebarLogin/SidebarLogin";
import Sidebar from "../../components/sidebar/Sidebar";
import { MdOutlineShoppingBag } from "react-icons/md";
import SearchItem from "../searchItem/SearchItem";
import { BiSolidCategory } from "react-icons/bi";
import { totalCartItems } from "../utils/action";
import { CgMenuLeftAlt } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { useState, useEffect } from "react";
import { FaPhone } from "react-icons/fa6";
import logo from "../../assets/logo.png";
import Leftbar from "../leftbar/Leftbar";
import { Link } from "react-router-dom";
import { products } from "../data";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const [showSidebarLogin, setShowSidebarLogin] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [showLeftbar, setShowLeftbar] = useState(false);
  const [user, setUser] = useState(true);
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredProducts = products.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

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
          <input
            type="text"
            name=""
            id=""
            value={query}
            onChange={handleInputChange}
            placeholder="Search for products"
          />
          <div className="Navbar-search-icon">
            <IoIosSearch className="icon" />
          </div>
          <div
            className="Navbar-search-item-list"
            style={{ visibility: query && "visible", opacity: "1" }}
          >
            <SearchItem products={filteredProducts} setQuery={setQuery} />
          </div>
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
                  width="30px"
                />
                <div className="Navbar-dropdown">
                  <div className="Navbar-square"></div>
                  <div className="Navbar-profile-wrapper">
                    <ProfileDropdown user={user} setUser={setUser} />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="Navbar-search mbl">
        <input
          type="text"
          name=""
          id=""
          onChange={handleInputChange}
          value={query}
          placeholder="Search for products"
        />
        <IoIosSearch className="icon pos" />
        <div
          className="Navbar-search-item-list"
          style={{ visibility: query && "visible", opacity: "1" }}
        >
          <SearchItem products={filteredProducts} setQuery={setQuery} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
