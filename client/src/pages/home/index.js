import { QUALIFICATIONS } from "constants";
import "./home.scss";
import { QualifyCardComponent, ContactComponent } from "components";
import { Link } from "react-router-dom";
import { RightArrow } from "constants/icons";
import { useEffect, useState } from "react";
import client from "utilities";

export const HomePage = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState("");

  const fetchData = () => {
    client
      .fetch(
        `*[_type == "qualifications"] {
          type,
          company,
          job,
          date,
          description,
          url
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
    <div className="home_container">
      <h1 className="title">
        If you're looking for a highly skilled ReactJs developer, look no
        further.
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
        <div className="reviews_content flex col">
          <h2 className="clients">Some of my Qualifications</h2>
          {isLoading ? (
            <p>Please wait</p>
          ) : isError ? (
            <p>{isError}</p>
          ) : (
            data
              ?.slice(0, 2)
              .map((review, _id) => (
                <QualifyCardComponent {...review} key={_id} />
              ))
          )}
          {data?.length >= 3 && (
            <Link
              className="reviews_page flex items-center"
              to={QUALIFICATIONS}
            >
              <span>See more</span>
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
