import React from "react";

interface props {
  children: Element[] | Element | string;
}

export const Title = ({ children }) => {
  return <h1 className="title">{children}</h1>;
};

export const Overview = ({ children }: props) => {
  return <p className="overview">{children}</p>;
};

interface trialer {
  video: string;
}

export const Trailer = ({ video }: trialer) => {
  const src = `https://www.youtube.com/embed/${video} `;
  return (
    <iframe width="100%" height="315" {...{ src }} title="no title"></iframe>
  );
};

export const Details = ({ children }) => {
  const className = "detailsBox";
  return <div {...{ className }}>{children}</div>;
};
