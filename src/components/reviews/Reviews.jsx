import React, { useState } from "react";
import "./Reviews.css";
import { MdOutlineRateReview } from "react-icons/md";
import ProgressBar from "../progressBar/ProgressBar";

const Reviews = () => {
  const [rating, setRating] = useState(3);
  const getStarClassName = (index) => {
    if (index <= rating) {
      return "yellow-star";
    }
    return "grey-star";
  };

  const sampleReviews = [
    { rating: 5 },
    { rating: 4 },
    { rating: 3 },
    { rating: 2 },
    { rating: 1 },
  ];

  return (
    <div className="Review">
      {!rating && (
        <div className="Reviews">
          <MdOutlineRateReview className="icon" />
          <p>No Reviews Yet</p>
        </div>
      )}
      <div className="Review-wrapper">
        <div className="Review-header">
          <div className="Review-header-info">
            <h1>4.0</h1>
            <div className="Review-stars">
              {[1, 2, 3, 4, 5].map((index) => (
                <span key={index} className={getStarClassName(index)}>
                  ★
                </span>
              ))}
            </div>
            <p>based on 23 reviews</p>
          </div>
          <div className="Review-header-bar">
            <ProgressBar reviews={sampleReviews} />
          </div>
        </div>
        <div className="Review-content">
          <div className="box">a</div>
          <div className="box">b</div>
          <div className="box">c</div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
