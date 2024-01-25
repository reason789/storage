import ProductDetails from "./components/productDetails/ProductDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PlaceOrder from "./components/placeOrder/PlaceOrder";
import Gradient from "./components/gradient/Gradient";
import Checkout from "./components/checkout/Checkout";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Login from "./components/login/Login";
import Cart from "./components/cart/Cart";
import Home from "./pages/Home";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      {/* <Sidebar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="product/:id/*" element={<ProductDetails />} />
        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="success" element={<PlaceOrder />} />
        <Route path="login" element={<Login />} />
        <Route path="gradient" element={<Gradient />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
