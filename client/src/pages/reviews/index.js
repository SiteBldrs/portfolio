import { LoadingReviewCardComponent, ReviewCardComponent } from "components";
import "./reviews.scss";
import { useEffect, useState } from "react";
import client from "utilities";

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
        Here are some of the testimonials I've received from clients I've worked
        with.
      </p>

      <div
        className="reviews_cards grid"
        style={{ gridGap: isLoading && "1.5rem" }}
      >
        {isLoading ? (
          <LoadingReviewCardComponent len={4} />
        ) : isError ? (
          <p>{isError}</p>
        ) : (
          data?.map((review, _id) => (
            <ReviewCardComponent {...review} key={_id} />
          ))
        )}
      </div>
    </div>
  );
};
