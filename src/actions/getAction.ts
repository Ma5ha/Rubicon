import axios, { AxiosRequestConfig } from "axios";

async function getAction<T>(
  api: string,
  callback: (result: T) => void,
  config?: AxiosRequestConfig
) {
  const reslut = await axios.get<T>(api, config);
  callback(reslut.data);
}

export default getAction;
