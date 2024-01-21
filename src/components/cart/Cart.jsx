// ProductTable.js

import { useState } from "react";
import "./Cart.css";
import image from "../../assets/pants.webp";
import { RxCross1 } from "react-icons/rx";

const Cart = () => {
  const products = [
    {
      id: 111111111111111111111111111,
      name: "Product A",
      price: 20,
      stock: 50,
    },
    { id: 22222222222222222222222222, name: "Product B", price: 30, stock: 30 },
    { id: 22222222222222222222222222, name: "Product B", price: 30, stock: 30 },
    // Add more products as needed
  ];

  const [qty, setQty] = useState(1);

  const incQty = () => {
    setQty((prevQty) => prevQty + 1);
  };

  const decQty = () => {
    if (qty > 1) {
      setQty((prevQty) => prevQty - 1);
    }
  };
  return (
    <div className="Cart container">
      <h1>SHOPPING CART</h1>
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
                          <RxCross1 className="icon" />
                        </div>
                        <div className="Cart-table-product-img">
                          <img src={image} width="80px" />
                        </div>
                        <div className="Cart-table-product-name">
                          <p>Winter Shirt</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="Cart-table-product-price">
                        <p>{product.price}</p>
                      </div>
                    </td>
                    <td>
                      <div className="Cart-table-product-qty">
                        <div className="ProductDetails-product-view-info-inc-btn">
                          <div className="ProductDetails-product-view-info-inc">
                            <div onClick={decQty} className="inc">
                              -
                            </div>
                            <div className="inc">{qty}</div>
                            <div onClick={incQty} className="inc">
                              +
                            </div>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      {" "}
                      <div className="Cart-table-product-subtotal">
                        <p>{product.stock}</p>
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
            <span>৳2370</span>
          </div>
          <div className="Cart-pricing-shipping">
            <p>Shipping</p>
            <div className="Cart-pricing-shipping-radio">
              <input type="radio" id="age1" name="age" value="30" />
              <label for="age1">
                Inside Dhaka <span> ৳60</span>
              </label>
              <br />
              <input type="radio" id="age2" name="age" value="60" />
              <label for="age2">
                Outside Dhaka <span>৳120</span>
              </label>
            </div>
          </div>
          <div className="Cart-pricing-total">
            <p>Total</p>
            <span>৳2475</span>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
      </div>

      <div className="Cart mbl">
        <div className="Cart-items">
          <div className="Cart-itemlist">
            <div className="Cart-itemlist-mbl">
              <div className="Cart-itemlist-mbl-img">
                <img src={image} width="80px" />
              </div>
              <div className="Cart-itemlist-mbl-info">
                <div className="Cart-itemlist-mbl-info-name">
                  <p>Winter Shirt</p>
                  <RxCross1 className="icon" />
                </div>
                <div className="Cart-itemlist-mbl-info-price">
                  <p>PRICE</p>
                  <span>৳950 </span>
                </div>
                <div className="Cart-itemlist-mbl-info-qty">
                  <p>QUANTITY</p>
                  <div>
                    <div className="ProductDetails-product-view-info-inc">
                      <div onClick={decQty} className="inc">
                        -
                      </div>
                      <div className="inc">{qty}</div>
                      <div onClick={incQty} className="inc">
                        +
                      </div>
                    </div>
                  </div>
                </div>
                <div className="Cart-itemlist-mbl-info-subtotal">
                  <p>SUBTOTAL</p>
                  <span>৳950 </span>
                </div>
              </div>
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
              <span>৳2370</span>
            </div>
            <div className="Cart-pricing-shipping">
              <p>Shipping</p>
              <div className="Cart-pricing-shipping-radio">
                <input type="radio" id="area1" name="area" value="30" />
                <label for="area1">
                  Inside Dhaka <span> ৳60</span>
                </label>
                <br />
                <input type="radio" id="area2" name="area" value="60" />
                <label for="area2">
                  Outside Dhaka <span>৳120</span>
                </label>
              </div>
            </div>
            <div className="Cart-pricing-total">
              <p>Total</p>
              <span>৳2475</span>
            </div>
            <button>PROCEED TO CHECKOUT</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
