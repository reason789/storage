import { useState } from "react";

const useProductFilters = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [maxPrice, setMaxPrice] = useState(20000);
  const [minPrice, setMinPrice] = useState(0);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category === selectedCategory ? null : category);
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
  return {
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
  };
};

export default useProductFilters;
