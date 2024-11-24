import { getPelotonApiClient } from "./pelotonApiClient";

export const login = async (username: string, password: string) => {
  const response = await getPelotonApiClient().post(
    "/auth/login",
    {
      username_or_email: username,
      password,
      with_pubsub: false,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response.data;
};
