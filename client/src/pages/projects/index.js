import {
  ProjectCardComponent,
  LoadingProjectCardComponent,
  ModalComponent,
} from "components";
import "./projects.scss";
import { useEffect, useState } from "react";
import client from "utilities";

export const ProjectsPage = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState("");

  const fetchData = () => {
    client
      .fetch(
        `*[_type == "projects"] {
          name,
          description,
          url,
          image
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
    <div className="projects_container">
      <h1 className="title">
        A list of my completed code projects is provided below.
      </h1>
      <p className="subtitle">
        I've worked on a lot of little projects over the years, but these are my
        favorites. Many of them are open-source, so if you discover anything
        that interests you, check out the code and contribute if you have
        suggestions for how to enhance it. You'll find a meaningful selection of
        web apps that I've created over my coding adventure here.
      </p>

      {/* <ModalComponent /> */}

      <div
        className="project_cards grid"
        style={{
          gridGap: isLoading && "1rem",
        }}
      >
        {isLoading ? (
          <LoadingProjectCardComponent />
        ) : isError ? (
          <p>{isError}</p>
        ) : (
          data?.map((project, _id) => (
            <ProjectCardComponent {...project} key={_id} />
          ))
        )}
      </div>
    </div>
  );
};
