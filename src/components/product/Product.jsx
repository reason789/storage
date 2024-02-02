import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { addToCart } from "../utils/action";
import { FaCartPlus } from "react-icons/fa";
import { useState, useEffect } from "react";
import Sidebar from "../sidebar/Sidebar";
import "./Product.css";

const Products = ({ product }) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const { pathname } = useLocation();
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (pathname == "/product/category") {
        setIsLargeScreen(window.innerWidth > 1200);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    // <div className="Product">
    <div className={`Product ${isLargeScreen ? "large-screen" : ""}`}>
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <div
        className="Product-image"
        // onMouseEnter={() => setIsHovered(true)}
        // onMouseLeave={() => setIsHovered(false)}
      >
        <img
          onClick={() =>
            navigate(
              `/product-details/${product && product.id}/${product.title
                .split(" ")
                .join("-")}`
            )
          }
          className="Product-image-img"
          src={product && product.image}
          alt="Product"
        />
      </div>

      {product.tag && (
        <div className="Product-tag">
          <p>{product.tag}</p>
        </div>
      )}
      <div className="Product-content">
        <h2
          onClick={() =>
            navigate(
              `/product-details/${product && product.id}/${product.title
                .split(" ")
                .join("-")}`
            )
          }
        >
          {product && product.title}
        </h2>
        <div className="Product-content-pricing">
          <s>৳{product && product.oldPrice}</s>
          <p>৳{product && product.price}</p>
        </div>
        <button
          className="btn"
          onClick={() => {
            addToCart(product);
            setShowSidebar(true);
          }}
        >
          <FaCartPlus className="icon" />
          <p>ADD TO CART</p>
        </button>
      </div>
    </div>
  );
};

export default Products;
