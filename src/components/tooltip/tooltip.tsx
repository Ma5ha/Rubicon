import React from "react";
import useHoverHook from "../../hooks/useHoverHook";
import "./tooltip.css";

const Tooltip = ({ text, children }) => {
  const [hover, hoverBind] = useHoverHook();

  return (
    <div className="tooltip" {...hoverBind}>
      {children}
      {hover ? <div className="tooltipContent">{text}</div> : null}
    </div>
  );
};

export default Tooltip;
