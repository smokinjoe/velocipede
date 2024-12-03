import { atom } from "jotai";

export type LoggedInUserSession = {
  session_id?: string;
  user_id?: string;
  cookies?: string;
  isLoggedIn: boolean;
};

export const userSessionAtom = atom<LoggedInUserSession>({
  isLoggedIn: false,
});
