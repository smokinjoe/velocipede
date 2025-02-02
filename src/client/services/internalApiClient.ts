import axios, { AxiosInstance } from "axios";
import { getBaseUrl } from "../utils/getEnv";

const baseURL = getBaseUrl();

type HttpClientOptions = {
  baseURL: string;
};

const createHttpClient = (options?: HttpClientOptions): AxiosInstance => {
  const axiosInstance = axios.create({
    ...options,
  });

  return axiosInstance;
};

let client: AxiosInstance;

export const getInternalApiClient = () => {
  if (client === undefined) {
    client = createHttpClient({
      baseURL: `${baseURL}`,
    });
  }

  return client;
};
