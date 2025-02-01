import { act, renderHook } from "@testing-library/react";
import { useUserSession } from "./useUserSession";

test("useUserSession", () => {
  const { result } = renderHook(() => useUserSession());

  expect(result.current.userSession).toEqual({
    isLoggedIn: false,
  });

  act(() => {
    result.current.setUserSession({
      isLoggedIn: true,
      userId: "userId",
      cookies: "cookies",
      sessionId: "sessionId",
    });
  });

  expect(result.current.userSession).toEqual({
    isLoggedIn: true,
    userId: "userId",
    cookies: "cookies",
    sessionId: "sessionId",
  });

  act(() => {
    result.current.clearSession();
  });

  expect(result.current.userSession).toEqual({
    isLoggedIn: false,
  });
});
