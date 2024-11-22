import { getPelotonApiClient } from "./pelotonApiClient";

export const login = async (username: string, password: string) => {
  const response = await getPelotonApiClient().post(username, password);
  return response.data;
};
