import React from "react";
import "./lazy.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";

export const LazyComponent = ({ src, alt }) => {
  return <LazyLoadImage effect="blur" src={src} alt={alt} />;
};
