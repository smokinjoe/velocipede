// import { getPelotonApiClient } from "./pelotonApiClient";
import { getInternalApiClient } from "./internalApiClient";

export const login = async (username: string, password: string) => {
  const response = await getInternalApiClient().post(
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

export const me = async () => {
  const response = await getInternalApiClient().get("/api/me", {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.data;
};
