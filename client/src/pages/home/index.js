import { QUALIFICATIONS } from "constants";
import "./home.scss";
import {
  QualifyCardComponent,
  ContactComponent,
  LoadingReviewCardComponent,
  ErrorComponent,
  BannerComponent,
  LazyComponent,
} from "components";
import { Link } from "react-router-dom";
import { RightArrow } from "constants/icons";
import { useEffect, useState } from "react";
import client, { fetchQualifications } from "utils";
import { me } from "assets";

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
      <div className="home_content flex justify-between">
        <div className="flex col">
          <BannerComponent
            title="Are you looking for a highly skilled ReactJs developer? Look no further."
            subtitle="With expertise in HTML, CSS, and JavaScript, I can create dynamic, interactive components using React, enhancing usability and functionality. I'm dedicated to delivering high-quality code, ensuring engaging user interfaces and performance optimization."
          />
        </div>
        <div className="home_image flex">
          <div className="col-1 flex col items-end">
            <div className="home_image-holder">
              {/* <LazyComponent src={me} alt="me" /> */}
            </div>
            <div className="home_image-holder">
              {/* <LazyComponent src={me} alt="me" /> */}
            </div>
            <div className="home_image-holder">
              {/* <LazyComponent src={me} alt="me" /> */}
            </div>
          </div>
          <div className="col-2 flex col items-start">
            <div className="home_image-holder">
              {/* <LazyComponent src={me} alt="me" /> */}
            </div>
            <div className="home_image-holder">
              {/* <LazyComponent src={me} alt="me" /> */}
            </div>
          </div>
        </div>
      </div>

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
