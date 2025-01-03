import { useAtom } from "jotai";

import { UserSession } from "../../common/types/UserSession";
import { userSessionAtom } from "../atoms/userSession";

const UserSessionKey = "peloton-user-key";

export const useUserSession = () => {
  const [userSession, setUserSessionAtom] =
    useAtom<UserSession>(userSessionAtom);

  if (!userSession.isLoggedIn) {
    const storedSession = localStorage.getItem(UserSessionKey);
    if (storedSession) {
      setUserSessionAtom(JSON.parse(storedSession));
    }
  }

  const setUserSession = (session: UserSession) => {
    localStorage.setItem(UserSessionKey, JSON.stringify(session));
    setUserSessionAtom(session);
  };

  return { userSession, setUserSession };
};
