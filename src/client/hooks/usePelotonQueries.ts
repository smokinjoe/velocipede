import { useMutation, useQuery } from "@tanstack/react-query";

import { useUserSession } from "./useUserSession";

import { login, me, overview, workouts } from "../services/pelotonService";
import { UserSession } from "../../common/types/UserSession";

export const useLogin = () => {
  const { setUserSession } = useUserSession();

  const mutation = useMutation({
    mutationFn: async (credentials: { username: string; password: string }) =>
      await login(credentials.username, credentials.password),
    onSuccess: (response) => {
      setUserSession({ ...response });
    },
  });

  return {
    ...mutation,
  };
};

export const useMe = ({ isLoggedIn, sessionId }: UserSession) => {
  return useQuery({
    queryKey: ["me"],
    enabled: isLoggedIn,
    queryFn: async () => await me(sessionId),
  });
};

type useWorkoutsParams = UserSession & {
  page: number;
  limit: number;
};

export const useWorkouts = ({
  isLoggedIn,
  userId,
  sessionId,
  page,
  limit,
}: useWorkoutsParams) => {
  return useQuery({
    queryKey: ["workouts", page, limit],
    enabled: isLoggedIn,
    queryFn: async () => await workouts(page, limit, userId, sessionId),
  });
};

export const useOverview = ({ isLoggedIn, sessionId, userId }: UserSession) => {
  return useQuery({
    queryKey: ["overview"],
    enabled: isLoggedIn,
    queryFn: async () => await overview(userId, sessionId),
  });
};
