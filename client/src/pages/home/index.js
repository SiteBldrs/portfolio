import { QUALIFICATIONS } from "constants";
import "./home.scss";
import {
  QualifyCardComponent,
  ContactComponent,
  LoadingReviewCardComponent,
  ErrorComponent,
} from "components";
import { Link } from "react-router-dom";
import { RightArrow } from "constants/icons";
import { useEffect, useState } from "react";
import client, { fetchQualifications } from "utils";

export const HomePage = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchData = () => {
    client
      .fetch(fetchQualifications)
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
    document.title = "Abdullahi Salihu ~ Portfolio";
  }, []);

  useEffect(() => {
    fetchData();
  }, [data]);

  return (
    <div className="home_container">
      <h1 className="title">
        Are you looking for a highly skilled ReactJs developer? Look no further.
      </h1>
      <p className="subtitle">
        With a strong foundation in HTML, CSS, and JavaScript, I possess the
        necessary skills to bring your vision to life. Leveraging the power of
        React, I can develop dynamic and interactive components that enhance
        usability and overall functionality. Whether it's crafting engaging user
        interfaces or optimizing performance, I am committed to delivering
        high-quality code that meets the highest standards.
      </p>

      <div className="bottom_home-container flex justify-between">
        <div
          className="reviews_content flex col"
          style={{ gap: isLoading && "1.5rem" }}
        >
          <h2
            className="clients"
            style={{
              marginBottom: !isLoading && "1rem",
            }}
          >
            Some of my credentials
          </h2>
          {isLoading ? (
            <LoadingReviewCardComponent len={2} />
          ) : isError ? (
            <ErrorComponent />
          ) : (
            data
              ?.slice(0, 2)
              .map((review, _id) => (
                <QualifyCardComponent {...review} key={_id} />
              ))
          )}
          {data?.length >= 2 && (
            <Link
              className="reviews_page flex items-center"
              to={QUALIFICATIONS}
            >
              <span>View all</span>
              <RightArrow />
            </Link>
          )}
        </div>

        <div className="form_container flex col">
          <ContactComponent />
        </div>
      </div>
    </div>
  );
};
