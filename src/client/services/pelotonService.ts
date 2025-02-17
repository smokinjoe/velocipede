// import { getPelotonApiClient } from "./pelotonApiClient";
import { Me } from "@/common/types/Me";
import { getInternalApiClient } from "./internalApiClient";
import { WorkoutList } from "@/common/types/WorkoutList";
import { Overview } from "@/common/types/Overview";
import { WorkoutDetail } from "@/common/types/WorkoutDetail";

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
  page: number = 0,
  limit: number = 20,
  userId?: string,
  sessionId?: string
): Promise<WorkoutList> => {
  const response = await getInternalApiClient().get(
    `/api/workouts?user_id=${userId}&session_id=${sessionId}&page=${page}&limit=${limit}`
  );
  return response.data;
};

export const workout = async (
  id?: string,
  sessionId?: string
): Promise<WorkoutDetail> => {
  if (id === undefined) {
    throw new Error("Workout ID is required");
  }
  const response = await getInternalApiClient().get(
    `/api/workouts/${id}?session_id=${sessionId}`
  );
  return response.data;
};

export const overview = async (
  userId?: string,
  sessionId?: string
): Promise<Overview> => {
  const response = await getInternalApiClient().get(
    `/api/overview?user_id=${userId}&session_id=${sessionId}`
  );
  return response.data;
};
