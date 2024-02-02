import ProductFilter from "../productFilter/ProductFilter";
import { useLocation } from "react-router-dom";
import { BsFilterLeft } from "react-icons/bs";
import { IoIosSearch } from "react-icons/io";
import { useState, useEffect } from "react";
import Products from "../products/Products";
import { RxCross1 } from "react-icons/rx";
import { FiFilter } from "react-icons/fi";
import { products } from "../data";
import "./ProductCategory.css";

const ProductCategory = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [sortOption, setSortOption] = useState("default");
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [maxPrice, setMaxPrice] = useState(20000);
  const [overlay, setOverlay] = useState(false);
  const [filter, setFilter] = useState(false);
  const [minPrice, setMinPrice] = useState(0);
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const qParam = queryParams.get("q");

  const handleCategoryClick = (category) => {
    const newQValue = category === selectedCategory ? null : category;

    const newUrl = updateUrlParameter(window.location.href, "q", newQValue);
    window.history.pushState({ path: newUrl }, "", newUrl);

    setSelectedCategory(newQValue);
  };

  const updateUrlParameter = (url, param, value) => {
    const urlObj = new URL(url);
    if (value !== null) {
      urlObj.searchParams.set(param, value);
    } else {
      urlObj.searchParams.delete(param);
    }
    return urlObj.toString();
  };

  const predefinedColors = ["red", "blue", "black", "white", "yellow"];
  const predefinedSizes = ["M", "L", "XL", "XXL"];

  const handleSizeClick = (size) => {
    if (selectedSizes.includes(size)) {
      setSelectedSizes(
        selectedSizes.filter((selectedSize) => selectedSize !== size)
      );
    } else {
      setSelectedSizes([...selectedSizes, size]);
    }
  };

  const handleColorClick = (color) => {
    if (selectedColors.includes(color)) {
      setSelectedColors(
        selectedColors.filter((selectedColor) => selectedColor !== color)
      );
    } else {
      setSelectedColors([...selectedColors, color]);
    }
  };

  const handleBrandToggle = (brand) => {
    if (selectedBrands.includes(brand)) {
      setSelectedBrands(
        selectedBrands.filter((selectedBrand) => selectedBrand !== brand)
      );
    } else {
      setSelectedBrands([...selectedBrands, brand]);
    }
  };

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  // All selected filters

  const selectedFilters = {
    Category: selectedCategory,
    Brands: selectedBrands.join(", "),
    Size: selectedSizes.join(", "),
    Color: selectedColors.join(", "),
    Price:
      minPrice !== 0
        ? `${minPrice} - ${maxPrice}`
        : maxPrice !== 20000
        ? `${minPrice} - ${maxPrice}`
        : "",
  };

  const clearFilter = (filterName) => {
    switch (filterName) {
      case "Category":
        const updatedUrl = updateUrlParameter(window.location.href, "q", null);
        window.history.pushState({ path: updatedUrl }, "", updatedUrl);
        setSelectedCategory(null);
        break;
      case "Color":
        setSelectedColors([]);
        break;
      case "Size":
        setSelectedSizes([]);
        break;
      case "Brands":
        setSelectedBrands([]);
        break;
      case "Price":
        setMinPrice(0);
        setMaxPrice(20000);
        break;
      default:
        break;
    }
  };

  // Filter products ----------------------------------------------------------------------------------------
  const [selectedCategories, setSelectedCategories] = useState(null);
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredData = (products, selected, query) => {
    let filteredProducts = products;

    // Filtering Input Items
    if (query) {
      filteredProducts = filteredProducts.filter(
        (product) =>
          product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
      );
    }

    // Applying selected filters
    if (selected.Category) {
      filteredProducts = filteredProducts.filter(
        (product) => product.category === selected.Category
      );
    }

    if (selected.Brands.length > 0) {
      filteredProducts = filteredProducts.filter((product) =>
        selected.Brands.includes(product.brand)
      );
    }

    if (selected.Size.length > 0) {
      filteredProducts = filteredProducts.filter((product) =>
        selected.Size.includes(product.size)
      );
    }

    if (selected.Color.length > 0) {
      filteredProducts = filteredProducts.filter((product) =>
        selected.Color.includes(product.color)
      );
    }
    if (selected.Price) {
      const [minPrice, maxPrice] = selected.Price.split(" - ");
      filteredProducts = filteredProducts.filter(
        (product) =>
          product.price >= parseFloat(minPrice) &&
          product.price <= parseFloat(maxPrice)
      );
    }

    // Applying selected sorting
    switch (sortOption) {
      case "latest":
        filteredProducts.sort((a, b) => new Date(b.date) - new Date(a.date));
        break;
      case "phl":
        filteredProducts.sort((a, b) => b.price - a.price);
        break;
      case "plh":
        filteredProducts.sort((a, b) => a.price - b.price);
        break;
      case "aaz":
        filteredProducts.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "aza":
        filteredProducts.sort((a, b) => b.title.localeCompare(a.title));
        break;
      default:
        break;
    }

    return filteredProducts;
  };

  const result = filteredData(products, selectedFilters, query);

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
  }, []);

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
          <ProductFilter
            setFilter={setFilter}
            setOverlay={setOverlay}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            selectedColors={selectedColors}
            setSelectedColors={setSelectedColors}
            selectedBrands={selectedBrands}
            setSelectedBrands={setSelectedBrands}
            selectedSizes={selectedSizes}
            setSelectedSizes={setSelectedSizes}
            maxPrice={maxPrice}
            setMaxPrice={setMaxPrice}
            minPrice={minPrice}
            setMinPrice={setMinPrice}
            predefinedColors={predefinedColors}
            predefinedSizes={predefinedSizes}
            handleSizeClick={handleSizeClick}
            handleColorClick={handleColorClick}
            handleBrandToggle={handleBrandToggle}
            selectedFilters={selectedFilters}
            handleCategoryClick={handleCategoryClick}
            qParam={qParam}
          />
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
            <h1>{selectedCategory ? selectedCategory : "All Products"}</h1>
            <p>
              <span>{result.length}</span> products are found
            </p>
          </div>
          <div className="ProductCategory-right-header-search">
            <input
              type="text"
              placeholder="Search..."
              onChange={handleInputChange}
            />
            <IoIosSearch className="icon" />
          </div>
          <div className="ProductCategory-right-header-select">
            <select value={sortOption} onChange={handleSortChange}>
              <option value="default">Sort by: Default</option>
              <option value="latest">Date: Latest</option>
              <option value="phl">Price: High to Low</option>
              <option value="plh">Price: Low to High</option>
              <option value="aaz">Alphabatic: A to Z</option>
              <option value="aza">Alphabatic: Z to A</option>
            </select>
            <div className="ProductCategory-right-header-select-filter">
              <BsFilterLeft className="icon" />
            </div>
          </div>
        </div>
        <div className="ProductCategory-tags-container">
          {Object.entries(selectedFilters).map(
            ([filterName, filterValue]) =>
              filterValue && (
                <span key={filterName} className="tag">
                  <>{filterName}:</> <p>{filterValue}</p>{" "}
                  <RxCross1
                    onClick={() => clearFilter(filterName)}
                    className="tag-icon"
                  />
                </span>
              )
          )}
        </div>
        <div className="ProductCategory-related-products">
          <Products products={result} />
        </div>
      </div>
    </div>
  );
};

export default ProductCategory;
