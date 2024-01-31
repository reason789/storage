import React from "react";
import "./Products.css";
import Product from "../../components/product/Product";

const Products = ({ products }) => {
  return (
    <>
      <div className="Products">
        {products &&
          products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
      </div>
    </>
  );
};

export default Products;
