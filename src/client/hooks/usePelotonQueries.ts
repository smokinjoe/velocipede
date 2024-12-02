import { useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";

import { login, me, workouts } from "../services/pelotonService";

type LoggedInUserSession = {
  session_id?: string;
  user_id?: string;
  cookies?: string;
  isLoggedIn: boolean;
};

export const useLogin = () => {
  const [userSession, setUserSession] = useState<LoggedInUserSession>({
    isLoggedIn: false,
  });

  const mutation = useMutation({
    mutationFn: async (credentials: { username: string; password: string }) =>
      await login(credentials.username, credentials.password),
    onSuccess: (response) => {
      setUserSession({ ...response, isLoggedIn: true });
    },
  });

  return {
    ...mutation,
    userSession,
  };
};

export const useMe = ({ isLoggedIn, session_id }: LoggedInUserSession) => {
  return useQuery({
    queryKey: ["me"],
    enabled: isLoggedIn,
    queryFn: async () => await me(session_id),
  });
};

export const useWorkouts = ({
  isLoggedIn,
  user_id,
  session_id,
}: LoggedInUserSession) => {
  return useQuery({
    queryKey: ["workouts"],
    enabled: isLoggedIn,
    queryFn: async () => await workouts(user_id, session_id),
  });
};
