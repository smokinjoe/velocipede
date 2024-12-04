export type UserSession = {
  sessionId?: string;
  userId?: string;
  cookies?: string | null;
  isLoggedIn: boolean;
};
