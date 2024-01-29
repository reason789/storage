import React, { useState } from "react";
import "./ProductFilter.css";
import { RxCross1 } from "react-icons/rx";
import PriceRangeSlider from "../PriceRangeSlider";

const ProductFilter = (setFilter, setOverlay) => {
  const [show, setShow] = useState(false);
  return (
    <div className="ProductFilter">
      <div className="ProductFilter-header mbl">
        <div className="Sidebar_top_cart">
          <h3>Filter</h3>
          <div
            onClick={() => {
              setFilter(false);
              setOverlay(false);
            }}
          >
            <RxCross1 className="icon" />
          </div>
        </div>
      </div>
      <div className="ProductFilter-body">
        <div className="ProductFilter-categories">
          <h1>Categories</h1>
          <div className="ProductFilter-items">
            <p>All Products</p>
            <p>80</p>
          </div>
          <div className="ProductFilter-items">
            <p>Jersey</p>
            <p>20</p>
          </div>
          <div className="ProductFilter-items">
            <p>Shirt</p>
            <p>25</p>
          </div>
          <div className="ProductFilter-items">
            <p>Pants</p>
            <p>42</p>
          </div>
        </div>
        <div className="ProductFilter-filter">
          <h1>Filter By</h1>
          <h2>Price</h2>
          <div className="ProductFilter-items-price">
            <div>
              <PriceRangeSlider />
            </div>
          </div>

          <h2>Color</h2>
          <div className="ProductFilter-items">
            <p>All Products</p>
            <p>80</p>
          </div>

          <h2>Size</h2>
          <div className="ProductFilter-items">
            <p>All Products</p>
            <p>80</p>
          </div>

          <h2>Brand</h2>
          <div className="ProductFilter-items">
            <p>All Products</p>
            <p>80</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFilter;
