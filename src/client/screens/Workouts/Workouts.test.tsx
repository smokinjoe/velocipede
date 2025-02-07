import { screen, act, renderHook, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

import { mockWorkoutList } from "@/common/__mocks__/mockWorkoutList";

import { useUserSession } from "@/client/hooks/useUserSession";
import { renderWithRouterAndQueryClient } from "@/client/utils/testHelpers";
import Workouts from "./Workouts";

jest.mock("@/client/utils/getEnv", () => ({
  getBaseUrl: jest.fn().mockReturnValue("http://localhost:3000"),
}));

const mockAxios = new MockAdapter(axios);

const userId = "userId";
const sessionId = "sessionId";
const cookies = "cookies";
const page = 0;
const limit = 20;

describe("Workouts", () => {
  beforeAll(() => {
    const { result } = renderHook(() => useUserSession());

    act(() => {
      result.current.setUserSession({
        isLoggedIn: true,
        userId,
        cookies,
        sessionId,
      });
    });
  });

  afterEach(() => {
    mockAxios.reset();
  });

  afterAll(() => {
    jest.clearAllMocks();
  });

  test("should render", async () => {
    mockAxios
      .onGet(
        `/api/workouts?user_id=${userId}&session_id=${sessionId}&page=${page}&limit=${limit}`
      )
      .reply(200, mockWorkoutList);

    renderWithRouterAndQueryClient(<Workouts />);

    const workoutsElement = await screen.findByTestId("workouts");
    expect(workoutsElement).toBeInTheDocument();
  });

  test("should render error message", async () => {
    mockAxios
      .onGet(
        `/api/workouts?user_id=${userId}&session_id=${sessionId}&page=${page}&limit=${limit}`
      )
      .reply(500);

    renderWithRouterAndQueryClient(<Workouts />);

    await waitFor(() => {
      const errorMessage = screen.getByText(
        "There was an error fetching your data"
      );
      expect(errorMessage).toBeInTheDocument();
    });
  });
});
