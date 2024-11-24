import { useMutation } from "@tanstack/react-query";

import { login } from "../services/pelotonService";

export const useLogin = () => {
  return useMutation({
    mutationFn: async (credentials: { username: string; password: string }) =>
      await login(credentials.username, credentials.password),
    onSuccess: (response) => console.log(response),
  });
};
