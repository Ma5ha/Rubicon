import { ReactComponentElement, useEffect, useState } from "react";

interface props {
  children: ReactComponentElement<any>;
  delay: number;
}

const DelayMount = ({ children, delay }: props) => {
  const [item, setItem] = useState<ReactComponentElement<any>>();

  useEffect(() => {
    const timeOut = setTimeout(() => setItem(children), delay);

    return () => clearTimeout(timeOut);
  }, []);

  return item ? item : null;
};

export default DelayMount;
