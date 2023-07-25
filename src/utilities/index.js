import {
  BsStar as StarOutline,
  BsStarHalf as StarHalf,
  BsStarFill as StarFull,
} from "react-icons/bs";
import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

// ! SANITY CONFIGURATION STARTS ----->
const builder = imageUrlBuilder({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  dataset: process.env.REACT_APP_SANITY_DATASET,
});

export const urlFor = (source) => {
  return builder.image(source);
};

export default createClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  dataset: process.env.REACT_APP_SANITY_DATASET,
  useCdn: true,
  apiVersion: "2023-07-25",
});

// ! SANITY CONFIGURATION ENDS ----->

export const Star = ({ stars }) => {
  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    let num = index + 0.5;

    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <StarFull />
        ) : stars >= num ? (
          <StarHalf />
        ) : (
          <StarOutline />
        )}
      </span>
    );
  });

  return ratingStar;
};
