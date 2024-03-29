import UniqueProducts from "../components/uniqueProducts/UniqueProducts";
import Products from "../components/products/Products";
import Banner from "../components/banner/Banner";
import { products } from "../components/data";
import Hero from "../components/hero/Hero";

const Home = () => {
  const first8Products = products.slice(0, 6);
  const last8Products = products.slice(-6);
  return (
    <>
      <Hero />
      <UniqueProducts />
      <Banner
        title="Shirt"
        link="Shirt"
        bg="linear-gradient(-225deg, #20E2D7 0%, #F9FEA5 100%)"
      />
      <div className="container">
        <Products products={first8Products} />
      </div>

      <Banner
        title="Pants"
        link="Pants"
        bg="linear-gradient(to top, #d9afd9 0%, #97d9e1 100%)"
      />
      <div className="container">
        <Products products={last8Products} />
      </div>
    </>
  );
};

export default Home;
