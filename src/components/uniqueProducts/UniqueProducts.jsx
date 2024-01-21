import { useState } from "react";
import "./UniqueProducts.css";
import Product from "../product/Product";

const UniqueProducts = () => {
  const [selectedCategory, setSelectedCategory] = useState("top");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };
  return (
    <section>
      <div className="UniqueProducts container">
        <div className="UniqueProducts-wrapper">
          <div className="UniqueProducts-links">
            <p
              className={`${selectedCategory == "top" && "active"}`}
              onClick={() => handleCategoryClick("top")}
            >
              Top
            </p>
            <p
              className={`${selectedCategory == "new" && "active"}`}
              onClick={() => handleCategoryClick("new")}
            >
              New
            </p>
            <p
              className={`${selectedCategory == "flash sale" && "active"}`}
              onClick={() => handleCategoryClick("flash sale")}
            >
              🔥Flash Sale
            </p>
          </div>
          {selectedCategory == "new" && (
            <div className="UniqueProducts-arrow">{"< >"}</div>
          )}
        </div>
        <div>
          <div className="hr" />
          {selectedCategory && (
            <section>
              <div className="UniqueProducts-Products">
                {/* <p>This is {selectedCategory} section</p> */}
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
              </div>
            </section>
          )}
        </div>
      </div>
    </section>
  );
};

export default UniqueProducts;
