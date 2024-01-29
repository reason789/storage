import { getRandomProducts } from "../utils/action";
import { BsFilterLeft } from "react-icons/bs";
import { useState, useEffect } from "react";
import Products from "../products/Products";
import { RxCross1 } from "react-icons/rx";
import { FiFilter } from "react-icons/fi";
import { products } from "../data";
import "./ProductCategory.css";
import ProductFilter from "../productFilter/ProductFilter";

const ProductCategory = () => {
  const relatedProducts = products.slice(0, 8);
  const [filter, setFilter] = useState(false);
  const [overlay, setOverlay] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setFilter(window.innerWidth >= 1025);
      setOverlay(false);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array means this effect runs once, equivalent to componentDidMount

  return (
    <div className="ProductCategory container">
      <div
        className={`ProductCategory-left-overlay ${
          overlay && "ProductCategory-left-overlay-active"
        } `}
        onClick={() => {
          setFilter(false);
          setOverlay(false);
        }}
      ></div>
      <div
        className={`ProductCategory-left ${
          filter && "ProductCategory-left-active"
        } `}
      >
        <div className="ProductCategory-filter_wrapper">
          <ProductFilter setFilter={setFilter} setOverlay={setOverlay} />
        </div>
      </div>
      <div
        className="ProductCategory-left-filter mbl"
        onClick={() => {
          setFilter(!filter);
          setOverlay(!overlay);
        }}
      >
        <FiFilter className="icon" />
      </div>
      <div className="ProductCategory-right">
        <div className="ProductCategory-right-header">
          <div className="ProductCategory-right-header-info">
            <h1>SWEATSHIRT</h1>
            <p>
              <span>53</span> products are found
            </p>
          </div>
          <div className="ProductCategory-right-header-select">
            <select>
              <option value="dhaka">Dhaka</option>
              <option value="chittagong">Chittagong</option>
              <option value="comilla">Comilla</option>
            </select>
            <div className="ProductCategory-right-header-select-filter">
              <BsFilterLeft className="icon" />
            </div>
          </div>
        </div>
        <div className="ProductCategory-tags-container">
          <span className="tag">
            New <RxCross1 className="tag-icon" />
          </span>
          <span className="tag">
            Red <RxCross1 className="tag-icon" />
          </span>
          <span className="tag">
            Xl <RxCross1 className="tag-icon" />
          </span>
        </div>
        <Products products={relatedProducts} />
      </div>
    </div>
  );
};

export default ProductCategory;
