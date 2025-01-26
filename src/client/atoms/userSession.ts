import { atom } from "jotai";
import { UserSession } from "../../common/types/UserSession";

export const defaultUserSession: UserSession = {
  isLoggedIn: false,
};

/**
 * TODO: Should I just use defaultUserSession in here?
 */
export const userSessionAtom = atom<UserSession>({
  isLoggedIn: false,
});
