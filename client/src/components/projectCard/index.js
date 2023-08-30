import { Link } from "react-router-dom";
import "./projectCard.scss";
import { ConstructionIcon, UrlIcon } from "constants/icons";
import { urlFor } from "utils";
import { LazyComponent } from "components/lazy";
import { noImage } from "assets";
import { useScroll, motion, useTransform } from "framer-motion";
import { useRef } from "react";

export const ProjectCardComponent = ({
  name,
  description,
  url,
  textStacks,
  imageDesktop,
  imageMobile,
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.03 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.3, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="project_card-container relative"
      title={name}
    >
      <div className="project_card flex items-center">
        <div className="project_image relative">
          {imageDesktop ? (
            <LazyComponent src={urlFor(imageDesktop).url()} alt={name} />
          ) : (
            <LazyComponent src={noImage} alt={name} />
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
              {url ? (
                <Link
                  className="project_link flex items-center"
                  to={url}
                  title={url}
                  target="_blank"
                >
                  <UrlIcon />
                </Link>
              ) : (
                <div
                  className="project_link flex items-center"
                  title="Under construction"
                >
                  <ConstructionIcon />
                </div>
              )}
            </div>
          </div>
          <div className="project_con flex col">
            <span>Description:</span>
            <p>{description}</p>
          </div>
          {textStacks && (
            <div className="project_con flex col categories">
              <span>Made with:</span>
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
    </motion.div>
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
