import React from "react";

const Button = ({ onClick, children, className }) => {
  return <button {...{ onClick, className }}>{children}</button>;
};

export default Button;
