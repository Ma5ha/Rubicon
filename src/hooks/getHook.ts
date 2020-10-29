// import { AxiosRequestConfig } from "axios";
import { useState, useEffect } from "react";
import getAction from "../actions/getAction";

function useHookGet<T>(
  url: string,
  config?: any
): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [data, setData] = useState<T>();

  useEffect(() => {
    getAction(url, setData, config);
  }, [url]);

  return [data, setData];
}

export default useHookGet;
