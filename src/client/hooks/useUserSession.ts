import { useAtom } from "jotai";

import { UserSession } from "@/common/types/UserSession";
import {
  userSessionAtom,
  defaultUserSession,
} from "@/client/atoms/userSession";
import { useEffect } from "react";

const UserSessionKey = "peloton-user-key";

export const useUserSession = () => {
  const [userSession, setUserSessionAtom] =
    useAtom<UserSession>(userSessionAtom);

  useEffect(() => {
    if (!userSession.isLoggedIn) {
      const storedSession = localStorage.getItem(UserSessionKey);
      if (storedSession) {
        setUserSessionAtom(JSON.parse(storedSession));
      }
    }
  }, []);

  const setUserSession = (session: UserSession) => {
    localStorage.setItem(UserSessionKey, JSON.stringify(session));
    setUserSessionAtom(session);
  };

  const clearSession = () => {
    localStorage.removeItem(UserSessionKey);
    setUserSessionAtom(defaultUserSession);
  };

  return { userSession, setUserSession, clearSession };
};
