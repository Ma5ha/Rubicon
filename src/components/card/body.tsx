import React from "react";

const Body = ({ children }) => {
  const className = "cardBody";

  return <div {...{ className }}>{children}</div>;
};

export default Body;
