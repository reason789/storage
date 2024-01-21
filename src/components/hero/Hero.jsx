import Carousel from "../carousel/Carousel";
import "./Hero.css";
import { countries } from "../data";
import Categories from "../categories/Categories";

const Hero = () => {
  return (
    <section>
      <div className="Hero container">
        <div className="Hero-carousel ">
          <Carousel images={countries} />
        </div>
        <div className="Hero-category ">
          <Categories />
        </div>
      </div>
    </section>
  );
};

export default Hero;
