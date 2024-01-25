import { useState } from "react";
import "./Checkout.css";
import photo from "../../assets/cod.png";
import { getItemsFromLocalStorage } from "../utils/action";

const Checkout = () => {
  const [selectedPayment, setSelectedPayment] = useState(null);

  const handlePaymentChange = (event) => {
    setSelectedPayment(event.target.value);
  };

  const products = getItemsFromLocalStorage();
  return (
    <div className="Checkout container">
      <h1>CHECKOUT</h1>
      <div className="Checkout-wrapper">
        <div className="Checkout-address">
          <p>Full Name</p>
          <input type="text" />

          <p>Mobile Number</p>
          <input type="text" />

          <div className="Checkout-address-select-container">
            <div className="Checkout-address-select">
              <p>Division</p>
              <select>
                <option value="dhaka">Dhaka</option>
                <option value="chittagong">Chittagong</option>
                <option value="comilla">Comilla</option>
              </select>
            </div>

            <div className="Checkout-address-select">
              <p>District</p>
              <select>
                <option value="dhaka">Dhaka</option>
                <option value="chittagong">Chittagong</option>
                <option value="comilla">Comilla</option>
              </select>
            </div>

            <div className="Checkout-address-select">
              <p>Thana</p>
              <select>
                <option value="dhaka">Dhaka</option>
                <option value="chittagong">Chittagong</option>
                <option value="comilla">Comilla</option>
              </select>
            </div>
          </div>
          <p>Address</p>
          <input type="text" />
          <p>
            Note<span>(Optional)</span>
          </p>
          <input type="text" />
        </div>
        <div className="Checkout-order-payment">
          <div className="Checkout-order">
            <h2>Cart Details</h2>
            <div className="Checkout-order-cart-details">
              <h4>CART ITEMS</h4>

              {products.map((product) => (
                <div className="Checkout-order-item">
                  <div className="Checkout-order-item-top">
                    <img src={product.image} width="40px" />
                    <p>
                      {product.title} x<span>{product.quantity}</span>
                    </p>
                  </div>
                  <h5>৳{product.price}</h5>
                </div>
              ))}

              <div className="Checkout-subtotal">
                <p>
                  Subtotal: <span> ৳1590</span>
                </p>
              </div>
            </div>
          </div>
          <div className="Checkout-payment">
            <h2>Payment Method</h2>
            <div className="Checkout-payment">
              <div className="Checkout-payment-radio-btns">
                <input
                  type="radio"
                  id="cod"
                  name="payment"
                  value="cod"
                  checked={selectedPayment === "cod"}
                  onChange={handlePaymentChange}
                />
                <label for="cod">Cash On Delivery</label>
                {selectedPayment === "cod" && (
                  <div className="Checkout-payment-radio-div">
                    <div className="Checkout-payment-radio-div-cod">
                      <img src={photo} width="100px" />
                      <h3>Pay when you get your product</h3>
                    </div>
                  </div>
                )}
                <div />
                <input
                  type="radio"
                  id="bkash"
                  name="payment"
                  value="bkash"
                  checked={selectedPayment === "bkash"}
                  onChange={handlePaymentChange}
                />
                <label for="bkash">Bkash</label>
                {selectedPayment === "bkash" && (
                  <div className="Checkout-payment-radio-div">
                    <h2>Bkash</h2>
                    <p>Phone number</p>
                    <input type="text" />
                    <p>Transaction id</p>
                    <input type="text" />
                  </div>
                )}
              </div>
            </div>
            <div className="Checkout-payment-button">
              <button>Place Order</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
