import { atom } from "jotai";
import { UserSession } from "../../common/types/UserSession";

export const userSessionAtom = atom<UserSession>({
  isLoggedIn: false,
});
