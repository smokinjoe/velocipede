import { screen, act, renderHook, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

import { mockWorkoutList } from "@/common/__mocks__/mockWorkoutList";

import { useUserSession } from "@/client/hooks/useUserSession";
import * as useSelectedVview from "@/client/components/ui/PillNavigation/useSelectedView";
import { renderWithRouterAndQueryClient } from "@/client/utils/testHelpers";
import Workouts from "./Workouts";

jest.mock("@/client/utils/getEnv", () => ({
  getBaseUrl: jest.fn().mockReturnValue("http://localhost:3000"),
}));

const useSelectedViewSpy = jest.spyOn(useSelectedVview, "useSelectedView");

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

  beforeEach(() => {
    useSelectedViewSpy.mockReturnValue("workouts");
  });

  afterEach(() => {
    mockAxios.reset();
    jest.clearAllMocks();
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

  test("should render workouts table when selected view is workouts", async () => {
    mockAxios
      .onGet(
        `/api/workouts?user_id=${userId}&session_id=${sessionId}&page=${page}&limit=${limit}`
      )
      .reply(200, mockWorkoutList);

    renderWithRouterAndQueryClient(<Workouts />);

    await waitFor(() => {
      const workoutsTable = screen.getByTestId("workouts-table");
      expect(workoutsTable).toBeInTheDocument();
    });
  });

  test("should render workouts summary when selected view is summary", async () => {
    useSelectedViewSpy.mockReturnValue("summary");

    mockAxios
      .onGet(
        `/api/workouts?user_id=${userId}&session_id=${sessionId}&page=${page}&limit=${limit}`
      )
      .reply(200, mockWorkoutList);

    renderWithRouterAndQueryClient(<Workouts />);

    await waitFor(() => {
      const workoutsTable = screen.getByTestId("workouts-summary");
      expect(workoutsTable).toBeInTheDocument();
    });
  });
});
