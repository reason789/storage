import ProgressBar from "../progressBar/ProgressBar";
import { MdOutlineRateReview } from "react-icons/md";
import user from "../../assets/user2.png";
import React, { useState } from "react";
import "./Reviews.css";

const Reviews = () => {
  const [rating, setRating] = useState(3);
  const getStarClassName = (index,rating) => {
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
                <span key={index} className={getStarClassName(index,5)}>
                  ★
                </span>
              ))}
            </div>
            <p> (23 reviews)</p>
          </div>
          <div className="Review-header-bar">
            <ProgressBar reviews={sampleReviews} />
          </div>
        </div>
        <div className="Review-content">
          <div className="Review-container">
            <div className="Review-top-content">
              <div className="Review-user">
                <img src ={user} width="40px" />
                <div className="Review-user-info">
                  <p>Md. Rahadul Haq</p>
                  <div className="Review-stars">
                    {[1, 2, 3, 4, 5].map((index) => (
                      <span key={index} className={getStarClassName(index,4)}>
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="Review-time"><p>1 month ago</p></div>
            </div>
            <div className="Review-bottom-content">
              <p>Really nice idea, this adds a little flavor to all those dummy-texts! I can recommend setting up keystrokes for this, it'll speed up the process a lot!</p>
            </div>
          </div>

          <div className="Review-container">
            <div className="Review-top-content">
              <div className="Review-user">
                <img src ={user} width="40px" />
                <div className="Review-user-info">
                  <p>Hasan Kabir</p>
                  <div className="Review-stars">
                    {[1, 2, 3, 4, 5].map((index) => (
                      <span key={index} className={getStarClassName(index,3)}>
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="Review-time"><p>8 days ago</p></div>
            </div>
            <div className="Review-bottom-content">
              <p> Fermentum posuere urna nec tincidunt praesent semper feugiat nibh. Nec tincidunt praesent semper feugiat nibh sed pulvinar proin. Faucibus a pellentesque sit amet porttitor eget. </p>
            </div>
          </div>

          <div className="Review-container">
            <div className="Review-top-content">
              <div className="Review-user">
                <img src ={user} width="40px" />
                <div className="Review-user-info">
                  <p>Mainul Islam</p>
                  <div className="Review-stars">
                    {[1, 2, 3, 4, 5].map((index) => (
                      <span key={index} className={getStarClassName(index,4)}>
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="Review-time"><p>1 days ago</p></div>
            </div>
            <div className="Review-bottom-content">
              <p>@kstenschke - Thank you for the quick response and even faster fix !! :D
Now that I can get to rate, I'd give it five.. My co-workers love the "fun/new" dummy text the documents!! Works like a charm, as you might be able to figure out ;</p>
            </div>
          </div>

          <div className="Review-container">
            <div className="Review-top-content">
              <div className="Review-user">
                <img src ={user} width="40px" />
                <div className="Review-user-info">
                  <p>Shihab Hossain</p>
                  <div className="Review-stars">
                    {[1, 2, 3, 4, 5].map((index) => (
                      <span key={index} className={getStarClassName(index,2)}>
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="Review-time"><p>4 days ago</p></div>
            </div>
            <div className="Review-bottom-content">
              <p>This is a high quality product.It's recomonded. You can buy it</p>
            </div>
          </div>
         
        
        </div>
      </div>
    </div>
  );
};

export default Reviews;
