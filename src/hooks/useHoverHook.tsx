import { useState } from "react";

const useHoverHook = () => {
  const [hover, setHover] = useState(false);

  const onMouseEnter = () => {
    setHover(true);
  };

  const onMouseLeave = () => {
    setHover(false);
  };

  const hoverBind = { onMouseEnter, onMouseLeave };
  return [hover, hoverBind];
};

export default useHoverHook;
