import React, { useEffect } from "react";
import "./PriceRangeSlider.css";

const PriceRangeSlider = () => {
  useEffect(() => {
    function getVals() {
      // Get slider values
      let parent = this.parentNode;
      let slides = parent.getElementsByTagName("input");
      let slide1 = parseFloat(slides[0].value);
      let slide2 = parseFloat(slides[1].value);
      // Neither slider will clip the other, so make sure we determine which is larger
      if (slide1 > slide2) {
        let tmp = slide2;
        slide2 = slide1;
        slide1 = tmp;
      }

      let displayElement = parent.getElementsByClassName(
        "PriceRangeSlider-rangeValues"
      )[0];
      displayElement.innerHTML = "$" + slide1 + " - $" + slide2;
    }

    // Initialize Sliders
    let sliderSections = document.getElementsByClassName(
      "PriceRangeSlider-range-slider"
    );
    for (let x = 0; x < sliderSections.length; x++) {
      let sliders = sliderSections[x].getElementsByTagName("input");
      for (let y = 0; y < sliders.length; y++) {
        if (sliders[y].type === "range") {
          sliders[y].addEventListener("input", getVals);
          // Manually trigger event first time to display values
          getVals.call(sliders[y]);
        }
      }
    }
  }, []);

  return (
    <div className="PriceRangeSlider">
      <div className="PriceRangeSlider-range-slider">
        {/* <span className="PriceRangeSlider-rangeValues"></span> */}
        <input
          defaultValue="1000"
          min="1000"
          max="50000"
          step="500"
          type="range"
        />
        <input
          defaultValue="50000"
          min="1000"
          max="50000"
          step="500"
          type="range"
        />
      </div>
      <span className="PriceRangeSlider-rangeValues">Range: 400 - 5400</span>
    </div>
  );
};

export default PriceRangeSlider;
