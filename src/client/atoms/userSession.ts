import { atom } from "jotai";
import { UserSession } from "../../common/types/UserSession";

export const defaultUserSession: UserSession = {
  isLoggedIn: false,
};

export const userSessionAtom = atom<UserSession>({
  isLoggedIn: false,
});
