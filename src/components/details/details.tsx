import React from "react";

export const Title = ({ children }) => {
  return <h1 className="title">{children}</h1>;
};

export const Overview = ({ children }) => {
  return <p className="overview">{children}</p>;
};

export const Creator = ({ children }) => {
  return (
    <div>
      <h5>{[children[0]?.name]}</h5> <h6>Creator</h6>
    </div>
  );
};

export const Trailer = ({ video }) => {
  const src = `https://www.youtube.com/embed/${video} `;
  return (
    <iframe width="100%" height="315" {...{ src }} title="no title"></iframe>
  );
};

export const Details = ({ children }) => {
  const className = "detailsBox";
  return <div {...{ className }}>{children}</div>;
};
