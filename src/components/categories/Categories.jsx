import { useNavigate } from "react-router-dom";
import { categories } from "../data";
import "./Categories.css";
import React from "react";

const Categories = () => {
  const navigate = useNavigate();
  return (
    <div className="Categories">
      {categories.map((category, index) => (
        <div
          key={index}
          onClick={() => navigate(`/product/category?q=${category.url}`)}
          className="Categories-Category"
          style={{ backgroundColor: `${category.bgColor}` }}
        >
          <div className="Categories-Category-icon">
            <div className="Categories-Category-icon">{category.icon}</div>
          </div>
          <p>{category.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Categories;
