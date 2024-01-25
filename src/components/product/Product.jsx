import { useNavigate } from "react-router-dom";
import { addToCart } from "../utils/action";
import { FaCartPlus } from "react-icons/fa";
import { useState } from "react";
import "./Product.css";
import Sidebar from "../sidebar/Sidebar";

const Products = ({ product }) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="Product">
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <div
        className="Product-image"
        // onMouseEnter={() => setIsHovered(true)}
        // onMouseLeave={() => setIsHovered(false)}
      >
        <img
          onClick={() =>
            navigate(
              `product/${product && product.id}/${product.title
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
              `product/${product && product.id}/${product.title
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
