import React from "react";
import "./myLink.css";

const MyLink = ({ children, navigate }) => {
  return (
    <div className={"myLink"} onClick={() => navigate()}>
      {children}
    </div>
  );
};

export default MyLink;
