import {
  getItemsFromLocalStorage,
  decreaseQuantity,
  increaseQuantity,
  subtotal,
} from "../utils/action";
import { useLocation, useNavigate } from "react-router-dom";
import { removeFromCart } from "../utils/action";
import { useState, useEffect } from "react";
import { RxCross1 } from "react-icons/rx";
import "./Cart.css";

const Cart = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [products, setProducts] = useState([]);
  const [deliveryOption, setDeliveryOption] = useState(0);

  const handleDeliveryChange = (event) => {
    setDeliveryOption(parseInt(event.target.value));
  };

  useEffect(() => {
    const products = getItemsFromLocalStorage();
    setProducts(products);
  }, [products, deliveryOption]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="Cart container">
      <div className="Cart-header-text">
        <h1>SHOPPING CART &nbsp;</h1>
        <p>
          {">"} CHECKOUT {"> "}
        </p>
        <p>&nbsp; PLACE ORDER </p>
      </div>
      <div className="Cart-table pc">
        <div className="Cart-itemlist">
          <div className="table-container ">
            <table>
              <thead>
                <tr>
                  <th>PRODUCT</th>
                  <th>PRICE</th>
                  <th>QUANTITY</th>
                  <th>SUBTOTAL</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id}>
                    <td>
                      <div className="Cart-table-product">
                        <div className="Cart-table-product-action">
                          <RxCross1
                            className="icon"
                            onClick={() => {
                              removeFromCart(product.id);
                            }}
                          />
                        </div>
                        <div className="Cart-table-product-img">
                          <img src={product.image} width="80px" />
                        </div>
                        <div className="Cart-table-product-name">
                          <p>{product && product.title}</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="Cart-table-product-price">
                        <p>৳{product && product.price}</p>
                      </div>
                    </td>
                    <td>
                      <div className="Cart-table-product-qty">
                        <div className="ProductDetails-product-view-info-inc-btn">
                          <div className="ProductDetails-product-view-info-inc">
                            <div
                              onClick={() => decreaseQuantity(product.id)}
                              className="inc"
                            >
                              -
                            </div>
                            <div className="inc">{product.quantity}</div>
                            <div
                              onClick={() => increaseQuantity(product.id)}
                              className="inc"
                            >
                              +
                            </div>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      {" "}
                      <div className="Cart-table-product-subtotal">
                        <p>৳{product && product.price * product.quantity}</p>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="Cart-coupon">
              <div className="Cart-coupon-input">
                <input type="text" placeholder="Coupon Code" />
              </div>
              <div className="Cart-coupon-btn">
                <button>APPLY COUPON</button>
              </div>
            </div>
          </div>
        </div>
        <div className="Cart-pricing">
          <h2>CART TOTALS</h2>
          <div className="Cart-pricing-subtotal">
            <p>Subtotal</p>
            <span>৳{subtotal && subtotal()}</span>
          </div>
          <div className="Cart-pricing-shipping">
            <p>Shipping</p>
            <div className="Cart-pricing-shipping-radio">
              <input
                type="radio"
                id="insideDhaka"
                name="delivery"
                value={60}
                checked={deliveryOption === 60}
                onChange={handleDeliveryChange}
              />
              <label htmlFor="insideDhaka">
                Inside Dhaka <span> ৳60</span>
              </label>
              <br />
              <input
                type="radio"
                id="outsideDhaka"
                name="delivery"
                value={120}
                checked={deliveryOption === 120}
                onChange={handleDeliveryChange}
              />
              <label htmlFor="outsideDhaka">
                Outside Dhaka <span>৳120</span>
              </label>
            </div>
          </div>
          <div className="Cart-pricing-total">
            <p>Total</p>
            <span>৳{subtotal && subtotal() + deliveryOption}</span>
          </div>
          <button onClick={() => navigate("/checkout")}>
            PROCEED TO CHECKOUT
          </button>
        </div>
      </div>

      <div className="Cart mbl">
        <div className="Cart-items">
          <div className="Cart-itemlist">
            <div className="Cart-itemlist-mbl-container">
              {products.map((product) => (
                <div className="Cart-itemlist-mbl">
                  <div className="Cart-itemlist-mbl-img">
                    <img src={product.image} width="80px" />
                  </div>
                  <div className="Cart-itemlist-mbl-info">
                    <div className="Cart-itemlist-mbl-info-name">
                      <p>{product.title}</p>
                      <RxCross1
                        onClick={() => {
                          removeFromCart(product.id);
                        }}
                        className="icon"
                      />
                    </div>
                    <div className="Cart-itemlist-mbl-info-price">
                      <p>PRICE</p>
                      <span>৳{product.price} </span>
                    </div>
                    <div className="Cart-itemlist-mbl-info-qty">
                      <p>QUANTITY</p>
                      <div>
                        <div className="ProductDetails-product-view-info-inc">
                          <div
                            onClick={() => decreaseQuantity(product.id)}
                            className="inc"
                          >
                            -
                          </div>
                          <div className="inc">{product.quantity}</div>
                          <div
                            onClick={() => increaseQuantity(product.id)}
                            className="inc"
                          >
                            +
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="Cart-itemlist-mbl-info-subtotal">
                      <p>SUBTOTAL</p>
                      <span>
                        ৳{product && product.price * product.quantity}{" "}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="Cart-mbl-coupon">
              <div className="Cart-coupon">
                <div className="Cart-coupon-input">
                  <input type="text" placeholder="Coupon Code" />
                </div>
                <div className="Cart-coupon-btn">
                  <button>APPLY COUPON</button>
                </div>
              </div>
            </div>
          </div>
          <div className="Cart-pricing">
            <h2>CART TOTALS</h2>
            <div className="Cart-pricing-subtotal">
              <p>Subtotal</p>
              <span>৳{subtotal && subtotal()}</span>
            </div>
            <div className="Cart-pricing-shipping">
              <p>Shipping</p>
              <div className="Cart-pricing-shipping-radio">
                <input type="radio" id="area1" name="area" value="30" />
                <label htmlFor="area1">
                  Inside Dhaka <span> ৳60</span>
                </label>
                <br />
                <input type="radio" id="area2" name="area" value="60" />
                <label htmlFor="area2">
                  Outside Dhaka <span>৳120</span>
                </label>
              </div>
            </div>
            <div className="Cart-pricing-total">
              <p>Total</p>
              <span>৳{subtotal && subtotal() + deliveryOption}</span>
            </div>
            <button
              onClick={() => {
                navigate("/checkout");
              }}
            >
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
