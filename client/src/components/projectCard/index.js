import { Link } from "react-router-dom";
import "./projectCard.scss";
import { UrlIcon } from "constants/icons";
import { urlFor } from "utilities";
import { LazyComponent } from "components/lazy";

export const ProjectCardComponent = ({
  name,
  description,
  url,
  textStacks,
  imageDesktop,
  imageMobile,
}) => {
  return (
    <div className="project_card-container relative">
      <div className="project_card flex items-center">
        <div className="project_image relative">
          {imageDesktop && (
            <LazyComponent src={urlFor(imageDesktop).url()} alt={name} />
          )}

          {imageMobile && (
            <div className="mobile absolute">
              <LazyComponent src={urlFor(imageMobile).url()} alt={name} />
            </div>
          )}
        </div>

        <div className="project_details flex col">
          <div className="project_con url flex items-center justify-between">
            <div className="flex col">
              <span>Name:</span>
              <p>{name}</p>
            </div>

            <div className="links">
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
            </div>
          </div>
          <div className="project_con flex col">
            <span>Description:</span>
            <p>{description}</p>
          </div>
          {textStacks && (
            <div className="project_con flex col categories">
              <span>Stack:</span>
              <div className="flex items-center">
                {textStacks.map((stack, _key) => (
                  <div className="category" key={_key}>
                    {stack}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export const LoadingProjectCardComponent = () => {
  return Array.from({ length: 3 }).map((_, _key) => (
    <div className="project_card-container relative loading" key={_key}>
      <div className="project_card flex items-center">
        <div className="project_image relative isLoading" />

        <div className="project_details flex col">
          <div className="project_con flex items-center url">
            <span className="isLoading" />
          </div>
          <div className="project_con flex col desc">
            <span className="isLoading" />
            <span className="isLoading" />
            <span className="isLoading" />
          </div>
          <div className="project_con flex items-center categories">
            <div className="flex items-center">
              <span className="isLoading" />
              <span className="isLoading" />
              <span className="isLoading" />
              <span className="isLoading" />
              <span className="isLoading" />
              <span className="isLoading" />
              <span className="isLoading" />
              <span className="isLoading" />
            </div>
          </div>
        </div>
      </div>
    </div>
  ));
};
