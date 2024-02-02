import { useState } from "react";
import "./SearchItem.css";
import { useNavigate } from "react-router-dom";

const SearchItem = ({ products, setQuery }) => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  const handleProductClick = (productId, productTitle) => {
    navigate(
      `product-details/${productId}/${productTitle.split(" ").join("-")}`
    );
    setQuery("");
  };
  return (
    <div className="SearchItem">
      {products &&
        products.map((product) => (
          <div
            key={product.id}
            onClick={() => handleProductClick(product.id, product.title)}
            className="SearchItem-product"
          >
            <div className="SearchItem-product-top">
              <img src={product.image} width="40px" />
              <h1>{product.title}</h1>
            </div>
            <p>৳{product.price}</p>
          </div>
        ))}
    </div>
  );
};

export default SearchItem;
