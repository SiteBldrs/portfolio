import { ReviewCardComponent } from "components";
import "./reviews.scss";
import { reviews } from "constants";

export const ReviewsPage = () => {
  return (
    <div className="reviews_container">
      <h1 className="title">
        Client evaluations, reviews, and comments that I have received
      </h1>
      <p className="subtitle">
        Here are some of the testimonials I've received from clients I've worked
        with.
      </p>

      <div className="reviews_cards grid">
        {reviews.map((review, _id) => (
          <ReviewCardComponent {...review} key={_id} />
        ))}
      </div>
    </div>
  );
};
