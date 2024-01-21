import React from "react";
import "./Products.css";
import Product from "../../components/product/Product";

const Products = () => {
  return (
    <>
      <div className="Products container">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </>
  );
};

export default Products;
