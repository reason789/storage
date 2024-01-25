import { useState } from "react";
import "./UniqueProducts.css";
import Product from "../product/Product";
import { products } from "../data";
import Products from "../products/Products";

const UniqueProducts = () => {
  const [selectedCategory, setSelectedCategory] = useState("Top");

  const filteredProducts = products.filter(
    (product) => product.tag == selectedCategory
  );

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };
  return (
    <section>
      <div className="UniqueProducts ">
        <div className="UniqueProducts-wrapper container">
          <div className="UniqueProducts-links ">
            <p
              className={`${selectedCategory == "Top" && "active"}`}
              onClick={() => handleCategoryClick("Top")}
            >
              Top
            </p>
            <p
              className={`${selectedCategory == "New" && "active"}`}
              onClick={() => handleCategoryClick("New")}
            >
              New
            </p>
            <p
              className={`${selectedCategory == "Flash Sale" && "active"}`}
              onClick={() => handleCategoryClick("Flash Sale")}
            >
              🔥Flash Sale
            </p>
          </div>
          {selectedCategory == "new" && (
            <div className="UniqueProducts-arrow">{"< >"}</div>
          )}
        </div>
        <div>
          {selectedCategory && (
            <section>
              <div className="UniqueProducts-Products">
                <Products products={filteredProducts} />
              </div>
            </section>
          )}
        </div>
      </div>
    </section>
  );
};

export default UniqueProducts;
