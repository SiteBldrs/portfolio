import {
  ErrorComponent,
  LoadingReviewCardComponent,
  ReviewCardComponent,
} from "components";
import "./reviews.scss";
import { useEffect, useState } from "react";
import client from "utilities";
import { Link } from "react-router-dom";

export const ReviewsPage = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState("");

  const fetchData = () => {
    client
      .fetch(
        `*[_type == "reviews"] {
          clientName,
          reviewContent,
          dateAdded,
          rating
      } | order(_createdAt desc)`
      )
      .then((res) => {
        setData(res);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsError(err.message);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    fetchData();
  }, [data]);

  return (
    <div className="reviews_container">
      <h1 className="title">
        Evaluations, reviews, and comments from clients.
      </h1>
      <p className="subtitle">
        Clients have expressed positive feedback about me, and I would greatly
        appreciate your feedback. Click{" "}
        <Link to="" target="_blank">
          here
        </Link>{" "}
        to leave feedback for other clients to see.
      </p>

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
