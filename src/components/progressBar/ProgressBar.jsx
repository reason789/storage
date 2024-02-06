import React from "react";
import "./ProgressBar.css";

const ProgressBar = ({ reviews }) => {
  const getColorForRating = (rating) => {
    const ratingColors = {
      1: "#FF6347", // Tomato
      2: "#FFD700", // Gold
      3: "#87CEEB", // SkyBlue
      4: "#7CFC00", // LawnGreen
      5: "#9370DB", // MediumPurple
    };

    return ratingColors[rating] || "#808080"; // Default to grey if rating is not found
  };

  return (
    <div>
      {reviews.map((review, index) => (
        <div className="ProgressBar" key={index}>
          <p>
            {" "}
            {review.rating}
            <span>✮⋆˙</span>
          </p>
          <div
            style={{
              width: `${(review.rating / 5) * 100}%`,
              height: "20px",
              backgroundColor: getColorForRating(review.rating),
              borderRadius: "5px",
              transition: "width 0.5s ease-in-out",
            }}
          ></div>
        </div>
      ))}
    </div>
  );
};

export default ProgressBar;
