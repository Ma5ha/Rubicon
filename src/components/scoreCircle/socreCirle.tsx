import React from "react";
import "./scroeCircle.css";
const ScoreCircle = ({ children }) => {
  const className = "circle";
  return (
    <div className={className}>
      <InnerCircle>{children}</InnerCircle>
    </div>
  );
};

const InnerCircle = ({ children }) => {
  const className = "innerCircle";
  return <div className={className}>{children}</div>;
};

export default ScoreCircle;
