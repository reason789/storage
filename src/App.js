import ProductCategory from "./components/productCategory/ProductCategory";
import ProductDetails from "./components/productDetails/ProductDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PlaceOrder from "./components/placeOrder/PlaceOrder";
import Profile from "./components/user/profile/Profile";
import Gradient from "./components/gradient/Gradient";
import MyOrders from "./components/myOrders/MyOrders";
import Checkout from "./components/checkout/Checkout";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Login from "./components/login/Login";
import Cart from "./components/cart/Cart";
import Home from "./pages/Home";
import "./App.css";
import ForgotPassword from "./components/forgotPassword/ForgotPassword";
import ResetPassword from "./components/resetPassword/ResetPassword";
import NotFound from "./components/notFound/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      {/* <Sidebar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/category" element={<ProductCategory />} />
        <Route path="product-details/:id/*" element={<ProductDetails />} />
        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="success" element={<PlaceOrder />} />
        <Route path="account" element={<Profile />} />
        <Route path="my-orders" element={<MyOrders />} />
        <Route path="login" element={<Login />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="reset-password" element={<ResetPassword />} />
        <Route path="gradient" element={<Gradient />} />
        {/* Not Found route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
