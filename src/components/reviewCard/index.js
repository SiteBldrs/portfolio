import "./reviewCard.scss";
import { Star } from "utilities";

export const ReviewCardComponent = ({ name, createdAt, content, rating }) => {
  return (
    <div className="review_card relative">
      <div className="review_card-container flex col">
        <div className="date">
          <span>{createdAt}</span>
        </div>

        <h2>{name}</h2>

        <p>{content}</p>

        <div className="stars flex items-center justify-end">
          <Star rating={rating} />
        </div>
      </div>
    </div>
  );
};
