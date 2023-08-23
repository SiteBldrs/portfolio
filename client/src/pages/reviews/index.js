import {
  BannerComponent,
  ErrorComponent,
  LoadingReviewCardComponent,
  ReviewCardComponent,
} from "components";
import "./reviews.scss";
import { useEffect, useState } from "react";
import client, { fetchReviews } from "utils";

export const ReviewsPage = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchData = () => {
    client
      .fetch(fetchReviews)
      .then((res) => {
        setData(res);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsError(true);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
    document.title = "Review by Client's";
  }, []);

  useEffect(() => {
    fetchData();
  }, [data]);

  return (
    <div className="reviews_container">
      <BannerComponent
        title="Evaluations, reviews, and comments from clients."
        subtitle="I've received good feedback from customers, and I'd love to hear your thoughts. For access to the upload a feedback feature, kindly get in touch with me."
      />

      <div
        className="reviews_cards grid"
        style={{ gridGap: isLoading && "1.5rem" }}
      >
        {isLoading ? (
          <LoadingReviewCardComponent len={4} />
        ) : isError ? (
          <ErrorComponent />
        ) : (
          data?.map((review, _id) => (
            <ReviewCardComponent {...review} key={_id} />
          ))
        )}
      </div>

      {/* <div className="congratulations flex col center">
        <h1 className="title">Successfully uploaded! 🥳🥳</h1>
        <p className="subtitle">
          I sincerely thank you for your thoughtful review, which is extremely
          valuable and will be included in my portfolio after careful
          consideration. Your contribution, together with other client
          testimonials, adds to the story of my collaborative coding journey.
          Thank you for being such an important part of my story.
        </p>
      </div> */}
    </div>
  );
};
