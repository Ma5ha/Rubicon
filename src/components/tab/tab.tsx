import React from "react";
import "./tab.css";
const NavigationWarper = (prop) => {
  const className = "navigation";
  return (
    <div {...prop} className={className}>
      {prop.children}
    </div>
  );
};

export default NavigationWarper;
