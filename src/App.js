import ProductDetails from "./components/productDetails/ProductDetails";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Login from "./components/login/Login";
import Home from "./pages/Home";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Cart from "./components/cart/Cart";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      {/* <Sidebar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="product/*" element={<ProductDetails />} />
        <Route path="cart" element={<Cart />} />
        <Route path="login" element={<Login />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
