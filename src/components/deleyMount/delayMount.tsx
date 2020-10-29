import { useEffect, useState } from "react";

const DelayMount = ({ children, delay }) => {
  const [item, setItem] = useState();

  useEffect(() => {
    const timeOut = setTimeout(() => setItem(children), delay);

    return () => clearTimeout(timeOut);
  }, []);

  return item ? item : null;
};

export default DelayMount;
