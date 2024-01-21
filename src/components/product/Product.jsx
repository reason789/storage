import { useNavigate } from "react-router-dom";
import photos from "../../assets/pantss.webp";
import { FaCartPlus } from "react-icons/fa";
import photo from "../../assets/pants.webp";
import { useState } from "react";
import "./Product.css";

const Products = () => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="Product">
      <div
        className="Product-image"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          onClick={() => navigate("/product/id")}
          className="Product-image-img"
          src={isHovered ? photos : photo}
          alt="Product"
        />
      </div>
      <div className="Product-content">
        <h2 onClick={() => navigate("/product/id")}>Winter Trouser</h2>
        <div className="Product-content-pricing">
          <s>৳500</s>
          <p>৳450</p>
        </div>
        <button className="btn" onClick={() => navigate("/button")}>
          <FaCartPlus className="icon" />
          <p>ADD TO CART</p>
        </button>
      </div>
    </div>
  );
};

export default Products;
