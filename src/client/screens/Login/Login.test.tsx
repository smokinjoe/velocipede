import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import Login from "./Login";

import * as useUserSession from "@/client/hooks/useUserSession";
import * as useLogin from "@/client/hooks/usePelotonQueries";

jest.mock("@/client/utils/getEnv", () => ({
  getBaseUrl: jest.fn().mockReturnValue("http://localhost:3000"),
}));

const useUserSessionSpy = jest.spyOn(useUserSession, "useUserSession");
const useLoginSpy = jest.spyOn(useLogin, "useLogin");

type UseLoginReturn = ReturnType<typeof useLogin.useLogin>;
type UseUserSessionReturn = ReturnType<typeof useUserSession.useUserSession>;

const clearSessionMock = jest.fn();
const mutateMock = jest.fn();

describe("Login", () => {
  beforeEach(() => {
    useUserSessionSpy.mockReturnValue({
      userSession: { isLoggedIn: false },
      clearSession: clearSessionMock,
    } as unknown as UseUserSessionReturn);
    useLoginSpy.mockReturnValue({
      mutate: mutateMock,
      isPending: false,
    } as unknown as UseLoginReturn);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("should render", () => {
    render(<Login />);
    expect(screen.getByText("Actions")).toBeInTheDocument();
  });

  test("should render the userSession", () => {
    useUserSessionSpy.mockReturnValue({
      userSession: {
        isLoggedIn: false,
        sessionId: "sessionIdMock",
        userId: "userIdMock",
        cookies: "cookiesMock",
      },
      clearSession: clearSessionMock,
    } as unknown as UseUserSessionReturn);
    render(<Login />);
    expect(screen.getByText(/Session Data/)).toBeInTheDocument();
    expect(screen.getByText(/sessionIdMock/)).toBeInTheDocument();
    expect(screen.getByText(/userIdMock/)).toBeInTheDocument();
    expect(screen.getByText(/cookiesMock/)).toBeInTheDocument();
  });

  test("should call login on form submit", () => {
    render(<Login />);
    const loginButton = screen.getByText("Login");
    fireEvent.click(loginButton);
    expect(mutateMock).toHaveBeenCalled();
  });

  test("should call clearSession on logout button click", () => {
    render(<Login />);
    const logoutButton = screen.getByText("Logout");
    fireEvent.click(logoutButton);
    expect(clearSessionMock).toHaveBeenCalled();
  });

  test("should show loading when isPending is true", () => {
    useLoginSpy.mockReturnValue({
      mutate: mutateMock,
      isPending: true,
    } as unknown as UseLoginReturn);
    render(<Login />);
    expect(screen.getByText(/Loading.../)).toBeInTheDocument();
  });
});
