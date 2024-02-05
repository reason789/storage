import PriceRangeSlider from "../PriceRangeSlider/PriceRangeSlider";
// import useProductFilters from "../utils/hooks/useProductFilters";
import React, { useEffect, useState } from "react";
import { allCategory, allProductslength } from "../utils/action";
import { RxCross1 } from "react-icons/rx";
import "./ProductFilter.css";

const ProductFilter = ({
  setFilter,
  setOverlay,
  selectedCategory,
  setSelectedCategory,
  selectedColors,
  setSelectedColors,
  selectedBrands,
  setSelectedBrands,
  selectedSizes,
  setSelectedSizes,
  maxPrice,
  setMaxPrice,
  minPrice,
  setMinPrice,
  predefinedColors,
  predefinedSizes,
  handleSizeClick,
  handleColorClick,
  handleBrandToggle,
  selectedFilters,
  handleCategoryClick,
  qParam,
}) => {
  useEffect(() => {
    setSelectedCategory(qParam);
  }, []);
  console.log();
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
          <div
            className={`ProductFilter-items ${
              selectedCategory === null ? "selected-category" : ""
            }`}
            onClick={() => handleCategoryClick(null)}
          >
            <p>All Products</p>
            <p>{allProductslength()}</p>
          </div>
          {Object.entries(allCategory()).map(([category, count]) => (
            <div
              className={`ProductFilter-items ${
                selectedCategory === category ? "selected-category" : ""
              }`}
              onClick={() => handleCategoryClick(category)}
            >
              <p>{category}</p>
              <p>{count}</p>
            </div>
          ))}
        </div>
        <div className="ProductFilter-filter">
          <h1>Filter By</h1>
          <h2>Price</h2>
          <div className="ProductFilter-items-price">
            <div>
              <PriceRangeSlider
                minPrice={minPrice}
                maxPrice={maxPrice}
                setMinPrice={setMinPrice}
                setMaxPrice={setMaxPrice}
              />
            </div>
          </div>

          <h2>Color</h2>
          <div className="ProductFilter-items">
            <div className="ProductFilter-items-colors">
              {predefinedColors.map((color) => (
                <div
                  key={color}
                  className="ProductFilter-items-color-box"
                  style={{
                    backgroundColor: color,
                    cursor: "pointer",
                    border: selectedColors.includes(color)
                      ? "2px solid #ffa800"
                      : "2px solid transparent",
                  }}
                  onClick={() => handleColorClick(color)}
                >
                  {selectedColors.includes(color) && "✓"}
                </div>
              ))}
            </div>
          </div>

          <h2>Size</h2>
          <div className="ProductFilter-items">
            <div className="ProductDetails-product-view-info-size-button">
              {predefinedSizes.map((size) => (
                <p
                  key={size}
                  className={` ${
                    selectedSizes.includes(size) ? "activeColor" : ""
                  }`}
                  onClick={() => handleSizeClick(size)}
                >
                  {size}
                </p>
              ))}
            </div>
          </div>

          <div>
            <h2>Brand</h2>
            <div className="">
              <div className="ProductFilter-checkboxes">
                <label>
                  <input
                    type="checkbox"
                    checked={selectedBrands.includes("Adidas")}
                    onChange={() => handleBrandToggle("Adidas")}
                  />
                  Adidas
                </label>
              </div>
              <div className="ProductFilter-checkboxes">
                <label>
                  <input
                    type="checkbox"
                    checked={selectedBrands.includes("Easy")}
                    onChange={() => handleBrandToggle("Easy")}
                  />
                  Easy
                </label>
              </div>
              <div className="ProductFilter-checkboxes">
                <label>
                  <input
                    type="checkbox"
                    checked={selectedBrands.includes("Nike")}
                    onChange={() => handleBrandToggle("Nike")}
                  />
                  Nike
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFilter;
