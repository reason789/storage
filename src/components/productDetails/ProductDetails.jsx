import Description from "../description/Description";
import { getRandomProducts } from "../utils/action";
import { IoLogoPinterest } from "react-icons/io";
import { useLocation } from "react-router-dom";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import Products from "../products/Products";
import { addToCart } from "../utils/action";
import { FaTwitter } from "react-icons/fa";
import Reviews from "../reviews/Reviews";
import Gallary from "../gallary/Gallary";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { products } from "../data";
import { useEffect } from "react";
import "./ProductDetails.css";

const ProductDetails = () => {
  const { pathname } = useLocation();
  const productId = parseInt(pathname.split("/")[2], 10);

  const relatedProducts = getRandomProducts(products, 6);

  const [color, setColor] = useState(null);
  const [qty, setQty] = useState(1);
  const [content, setContent] = useState("desc");

  const incQty = () => {
    setQty((prevQty) => prevQty + 1);
  };
  const decQty = () => {
    if (qty > 1) {
      setQty((prevQty) => prevQty - 1);
    }
  };

  const product = products.find((product) => product.id === productId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="ProductDetails ">
      <div className="ProductDetails-product-view container">
        <div className="ProductDetails-product-view-img">
          <Gallary />
        </div>
        <div className="ProductDetails-product-view-info">
          <div className="ProductDetails-product-view-info-url">
            <Link to="/home">Home / </Link>
            <Link to="/combo-offers">{product && product.category} / </Link>
            <span>{product && product.title}</span>
          </div>
          <h1>{product && product.title}</h1>
          <div className="ProductDetails-product-view-info-pricing">
            <s>৳{product && product.oldPrice}</s>
            <p>৳{product && product.price}</p>
          </div>
          <div className="ProductDetails-product-view-info-size">
            <p>Size : </p>
            <div className="ProductDetails-product-view-info-size-button">
              <p
                className={` ${color === "m" ? "activeColor" : ""}`}
                onClick={() => setColor("m")}
              >
                M
              </p>
              <p
                className={` ${color === "l" ? "activeColor" : ""}`}
                onClick={() => setColor("l")}
              >
                L
              </p>
              <p
                className={` ${color === "xl" ? "activeColor" : ""}`}
                onClick={() => setColor("xl")}
              >
                XL
              </p>
              <p
                className={` ${color === "xxl" ? "activeColor" : ""}`}
                onClick={() => setColor("xxl")}
              >
                XXL
              </p>
            </div>
          </div>
          <div className="ProductDetails-product-view-info-inc-btn">
            <div className="ProductDetails-product-view-info-inc">
              <div onClick={decQty} className="inc">
                -
              </div>
              <div className="inc">{qty}</div>
              <div onClick={incQty} className="inc">
                +
              </div>
            </div>
            <div className="ProductDetails-product-view-info-btn">
              <button className="btns" onClick={() => addToCart(product, qty)}>
                ADD TO CART
              </button>
            </div>
          </div>
          <div className="hr" />
          <div className="ProductDetails-product-view-additional">
            <p>
              SKU: <span>HNC-1</span>
            </p>
            <p>
              Category: <span>Combo Offers</span>
            </p>
            <div className="ProductDetails-product-view-additional-layout">
              <p>Share:</p>
              <div className="ProductDetails-product-view-additional-icons">
                <FaFacebookF className="icon" /> <FaTwitter className="icon" />{" "}
                <IoLogoPinterest className="icon" />
                <FaLinkedinIn className="icon" />{" "}
                <FaTelegram className="icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ProductDetails-text">
        <div className="ProductDetails-text-Navigation">
          <p
            className={`ProductDetails-text-Navigation ${
              content === "desc" ? "ProductDetails-text-Navigation-active" : ""
            }`}
            onClick={() => {
              setContent("desc");
            }}
          >
            DESCRIPTION
          </p>

          <p
            className={`ProductDetails-text-Navigation ${
              content === "reviews"
                ? "ProductDetails-text-Navigation-active"
                : ""
            }`}
            onClick={() => {
              setContent("reviews");
            }}
          >
            REVIEWS (0)
          </p>
        </div>
        <div className="ProductDetails-text-component container">
          {content === "desc" && <Description />}
          {content === "reviews" && <Reviews />}
        </div>
      </div>
      <div className="ProductDetails-related-products ">
        <div className="container">
          <h1 className="">RELATED PRODUCTS</h1>
          <div className="dag " />
        </div>
        <div className="ProductDetails-space-from-top container">
          <Products products={relatedProducts} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
