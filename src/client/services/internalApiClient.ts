import axios, { AxiosInstance } from "axios";

const baseURL = import.meta.env.VITE_INTERNAL_API_BASEURL;

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
