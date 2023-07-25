import "./tools.scss";
import { ToolCardComponent, LoadingToolCardComponent } from "components";
import { useEffect, useState } from "react";
import client from "utilities";

export const ToolsPage = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState("");

  useEffect(() => {
    client
      .fetch(
        `*[_type == "tools"] {
          title,
          items
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
  }, []);

  return (
    <div className="tools_container">
      <h1 className="title">
        I use these apps and services to manage my personal life and complete
        various tasks.
      </h1>
      <p className="subtitle">
        I get asked a lot about the things I use to build software, stay
        productive, or buy to fool myself into thinking I’m being productive
        when I’m really just procrastinating. Here’s a big list of all of my
        favorite stuff.
      </p>

      <div className="tools_cards flex col">
        {isLoading ? (
          <LoadingToolCardComponent />
        ) : isError ? (
          <p>{isError}</p>
        ) : (
          data?.map((item, _id) => <ToolCardComponent key={_id} {...item} />)
        )}
      </div>
    </div>
  );
};
