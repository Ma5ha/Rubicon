import React, { useEffect, useState } from "react";

const AnimationDelay = ({ children, delay }) => {
  const [item, setItem] = useState();

  useEffect(() => {
    const timeout = setTimeout(() => setItem(children), delay);
    return () => clearTimeout(timeout);
  }, []);

  return item ? item : null;
};

export default AnimationDelay;
