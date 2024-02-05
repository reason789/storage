import Categories from "../categories/Categories";
import { useNavigate } from "react-router-dom";
import Carousel from "../carousel/Carousel";
import { countries } from "../data";
import "./Hero.css";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section>
      <div className="Hero container">
        <div className="Hero-carousel ">
          <Carousel images={countries} />
        </div>
        <div className="Hero-category ">
          <Categories />
          <div className="Hero-btn">
            <button onClick={() => navigate("product/category")}>
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
