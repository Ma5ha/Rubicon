import useInputHook from "./inputHook";
import useDebounce from "./useDebounce";

const useDebounceInputHook = (arg: string, deley) => {
  const [input, setInput] = useInputHook(arg);
  const [debouncedInput] = useDebounce(input, deley);

  return [debouncedInput, setInput];
};

export default useDebounceInputHook;
