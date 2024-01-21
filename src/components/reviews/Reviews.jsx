import React from "react";
import "./Reviews.css";
import { MdOutlineRateReview } from "react-icons/md";

const Reviews = () => {
  return (
    <div className="Reviews">
      <MdOutlineRateReview className="icon" />
      <p>No Reviews Yet</p>
    </div>
  );
};

export default Reviews;
