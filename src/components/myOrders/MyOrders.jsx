import { getRandomProducts } from "../utils/action";
import { products } from "../data";
import React from "react";
import "./Myorders.css";

const MyOrders = () => {
  const orderedProducts = getRandomProducts(products, 4);
  console.log(orderedProducts);

  return (
    <div className="MyOrders-wrapper">
      <div className="MyOrders container">
        <h1>My Orders</h1>

        <div className="MyOrders-timeframe">
          <p>Show : </p>
          <select>
            <option value="dhaka">Last 5 Orders</option>
            <option value="chittagong">Last 15 days</option>
            <option value="comilla">Last 30 days</option>
          </select>
        </div>
        <div className="MyOrders-orders">
          <div className="MyOrders-orders-header">
            <p>
              Order <span>#8495048511023</span>
            </p>
            <h4>Placed on 15 Aug 2023 12:01:05</h4>
          </div>
          <div className="MyOrders-orders-body-wrapper">
            {orderedProducts &&
              orderedProducts.map((product) => (
                <div className="MyOrders-orders-body">
                  <div className="MyOrders-orders-body-img">
                    <img
                      src="https://xsgames.co/randomusers/avatar.php?g=male"
                      width="100px"
                    />
                  </div>
                  <div className="MyOrders-orders-body-info">
                    <p>Cotton Short Sleeve Tshirt For Men</p>
                    <h2>
                      Qty: <span>1</span>
                    </h2>
                    <h6>Delivered</h6>
                    <h5>Delivered on 18 Aug 2023</h5>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
