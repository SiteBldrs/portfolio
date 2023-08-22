/* eslint-disable jsx-a11y/heading-has-content */
import "./reviewCard.scss";
import { Star } from "utils";
import moment from "moment";

export const ReviewCardComponent = ({
  clientName,
  reviewContent,
  dateAdded,
  rating,
}) => {
  return (
    <div className="review_card relative">
      <div className="review_card-container flex col">
        <div className="date">
          <span>{moment(dateAdded).format("MMMM Do, YYYY - h:mm A")}</span>
        </div>

        <h2>{clientName}</h2>

        <p>{reviewContent}</p>

        <div className="stars flex col items-end">
          <div className="flex items-center">
            <Star stars={rating} />
          </div>
          <p>{rating} out of 5 stars</p>
        </div>
      </div>
    </div>
  );
};

export const LoadingReviewCardComponent = ({ len }) => {
  return Array.from({ length: len }).map((_, _key) => (
    <div className="review_card relative isLoading" key={_key}>
      <div className="review_card-container flex col">
        <div className="date ">
          <span />
        </div>

        <h2 />

        <p />
      </div>
    </div>
  ));
};
