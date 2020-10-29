import React from "react";
import "./card.css";
const Card = ({ klass, children }) => {
  const className = `card ${klass}`;
  return <div {...{ className }}>{children}</div>;
};

export default Card;
