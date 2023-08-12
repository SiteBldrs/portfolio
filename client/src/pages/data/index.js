import "./data.scss";
import { Link, useNavigate } from "react-router-dom";
import { BackArrow } from "constants/icons";
import { useEffect, useState } from "react";
import client from "utilities";
import { ErrorComponent, LoadingToolCardComponent } from "components";

export const QualificationPage = () => {
  const navigate = useNavigate();
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
    document.title = "Credentials";
  }, []);

  useEffect(() => {
    fetchData();
  }, [data]);

  return (
    <div className="qualification_container flex col">
      <h1 className="subtitle flex items-center" onClick={() => navigate(-1)}>
        <BackArrow />
        <span>Go back</span>
      </h1>
      <div className="qualification_cards flex col">
        {isLoading ? (
          <LoadingToolCardComponent />
        ) : isError ? (
          <ErrorComponent />
        ) : (
          data?.map((data, _key) => (
            <div className="tool_card flex items-start" key={_key}>
              <div className="tool_card-left">
                <h2>
                  <Link to={data.url} target="_blank">
                    {data.company}
                  </Link>
                </h2>
              </div>
              <div className="tool_card-right flex col">
                <div className="flex col">
                  <h3>{data.job}</h3>
                  <p>{data.description}</p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
