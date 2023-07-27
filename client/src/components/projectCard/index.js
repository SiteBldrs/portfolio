import { Link } from "react-router-dom";
import "./projectCard.scss";
import { UrlIcon, PreviewIcon } from "constants/icons";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { urlFor } from "utilities";

export const ProjectCardComponent = ({ name, description, url, image }) => {
  return (
    <div className="project_card-container relative">
      <div className="project_card flex col">
        <div className="project_image">
          <LazyLoadImage effect="blur" src={urlFor(image).url()} alt={name} />
        </div>
        <h2>{name}</h2>
        <p>{description}</p>
        <div className="bottom_links flex items-center">
          {url && (
            <Link
              className="project_link flex items-center"
              to={url}
              target="_blank"
            >
              <UrlIcon />
              <span>live site</span>
            </Link>
          )}

          <span className="dot">&middot;</span>

          <Link className="project_link flex items-center">
            <PreviewIcon />
            <span>github</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export const LoadingProjectCardComponent = () => {
  return Array.from({ length: 6 }).map((_, _key) => (
    <div className="project_card-container relative loading" key={_key}>
      <div className="project_card flex col isLoading"></div>
    </div>
  ));
};
