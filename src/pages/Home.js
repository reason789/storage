import Hero from "../components/hero/Hero";
import UniqueProducts from "../components/uniqueProducts/UniqueProducts";
import Banner from "../components/banner/Banner";
import Products from "../components/products/Products";

const Home = () => {
  return (
    <>
      <Hero />
      <UniqueProducts />
      <Banner
        title="Shirt"
        bg="linear-gradient(-225deg, #20E2D7 0%, #F9FEA5 100%)"
      />
      <Products />
      <Banner
        title="Shoes"
        bg="linear-gradient(to top, #d9afd9 0%, #97d9e1 100%)"
      />
      <Products />
    </>
  );
};

export default Home;
