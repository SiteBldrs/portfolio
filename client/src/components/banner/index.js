import React from "react";

export const BannerComponent = ({ title, subtitle }) => {
  return (
    <React.Fragment>
      <h1 className="title" dangerouslySetInnerHTML={{ __html: title }} />
      <p className="subtitle">{subtitle}</p>
    </React.Fragment>
  );
};
