import React from "react";

const Footer = ({ children }) => {
  const className = "cardFooter";
  return <div {...{ className }}>{children}</div>;
};

export default Footer;
