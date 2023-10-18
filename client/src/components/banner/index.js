import React from "react";

export const BannerComponent = ({ title, subtitle }) => {
  return (
    <React.Fragment>
      <h1
        className="title"
        style={{
          fontWeight: "900",
        }}
        dangerouslySetInnerHTML={{ __html: title }}
      />
      <p className="subtitle">{subtitle}</p>
    </React.Fragment>
  );
};
