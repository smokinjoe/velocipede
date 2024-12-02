import { useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";

import { login, me } from "../services/pelotonService";

type LoggedInUserSession = {
  session_id: string;
  user_id: string;
  cookie?: Array<string>;
};

export const useLogin = () => {
  const [userSession, setUserSession] = useState<LoggedInUserSession>({
    session_id: "",
    user_id: "",
  });

  const mutation = useMutation({
    mutationFn: async (credentials: { username: string; password: string }) =>
      await login(credentials.username, credentials.password),
    onSuccess: (response) => {
      setUserSession(response);
    },
  });

  return {
    ...mutation,
    userSession,
  };
};

export const useMe = ({ session_id }: LoggedInUserSession) => {
  return useQuery({
    queryKey: ["me"],
    enabled: session_id.length > 0,
    queryFn: async () => await me(),
  });
};
