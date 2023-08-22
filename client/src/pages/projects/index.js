import {
  ProjectCardComponent,
  LoadingProjectCardComponent,
  ErrorComponent,
} from "components";
import "./projects.scss";
import { useEffect, useState } from "react";
import client, { fetchProjects } from "utils";

export const ProjectsPage = () => {
  const [data, setData] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = () => {
    client
      .fetch(fetchProjects)
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
    document.title = "Projects I've worked on";
  }, []);

  useEffect(() => {
    fetchData();
  }, [data]);

  return (
    <div className="projects_container">
      <div className="project_container-details">
        <h1 className="title">
          A list of my completed code projects is provided below.
        </h1>
        <p className="subtitle">
          I've worked on a lot of little projects over the years, but these are
          my favorites. Many of them are open-source, so if you discover
          anything that interests you, check out the code and contribute if you
          have suggestions for how to enhance it. You'll find a meaningful
          selection of web apps that I've created over my coding adventure here.
        </p>
      </div>

      <div
        className="project_cards flex col"
        style={{
          gap: isLoading && "1rem",
        }}
      >
        {isLoading ? (
          <LoadingProjectCardComponent />
        ) : isError ? (
          <div className="project_container-details">
            <ErrorComponent />
          </div>
        ) : (
          data?.map((project, _id) => (
            <ProjectCardComponent {...project} key={_id} />
          ))
        )}
      </div>
    </div>
  );
};
