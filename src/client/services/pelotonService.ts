// import { getPelotonApiClient } from "./pelotonApiClient";
import { Me } from "@/common/types/Me";
import { getInternalApiClient } from "./internalApiClient";
import { Workout } from "@/common/types/Workout";

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
      withCredentials: true, // TODO: Remove if unnecessary
    }
  );

  return response.data;
};

export const me = async (sessionId?: string): Promise<Me> => {
  const response = await getInternalApiClient().get(
    `/api/me?session_id=${sessionId}`,
    {
      headers: {
        "content-Type": "application/json",
      },
    }
  );
  return response.data;
};

export const workouts = async (
  userId?: string,
  sessionId?: string
): Promise<Workout> => {
  const response = await getInternalApiClient().get(
    `/api/workouts?user_id=${userId}&session_id=${sessionId}`
  );
  return response.data;
};
