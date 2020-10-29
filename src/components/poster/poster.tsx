import React from "react";
import "./poster.css";
const Poster = ({ url }: { url: string }) => {
  return <img className="poster" src={url} alt="empty" />;
};

export default Poster;
