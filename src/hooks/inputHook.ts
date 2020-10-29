import { useState } from "react";

const useInputHook = (arg: string) => {
  const [input, setInput] = useState<string>(arg);
  const onChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };
  return [input, onChange];
};

export default useInputHook;
