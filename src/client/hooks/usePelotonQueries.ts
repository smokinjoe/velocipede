import { useAtom } from "jotai";
import { useMutation, useQuery } from "@tanstack/react-query";

import { userSessionAtom } from "../atoms/userSession";
import { login, me, workouts } from "../services/pelotonService";
import { UserSession } from "../../common/types/UserSession";

export const useLogin = () => {
  const [userSession, setUserSession] = useAtom<UserSession>(userSessionAtom);

  const mutation = useMutation({
    mutationFn: async (credentials: { username: string; password: string }) =>
      await login(credentials.username, credentials.password),
    onSuccess: (response) => {
      setUserSession({ ...response });
    },
  });

  return {
    ...mutation,
    userSession,
  };
};

export const useMe = ({ isLoggedIn, sessionId }: UserSession) => {
  return useQuery({
    queryKey: ["me"],
    enabled: isLoggedIn,
    queryFn: async () => await me(sessionId),
  });
};

export const useWorkouts = ({ isLoggedIn, userId, sessionId }: UserSession) => {
  return useQuery({
    queryKey: ["workouts"],
    enabled: isLoggedIn,
    queryFn: async () => await workouts(userId, sessionId),
  });
};
