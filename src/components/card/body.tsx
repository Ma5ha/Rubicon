import React from "react";
import { ReactElement } from "react";

const Body = ({ children }) => {
  const className = "cardBody";

  return <div className={className}>{children}</div>;
};

export default Body;
