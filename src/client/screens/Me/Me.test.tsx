import { screen, act, renderHook, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

import { mockMe } from "@/common/__mocks__/mockMe";
import { mockOverview } from "@/common/__mocks__/mockOverview";

import { useUserSession } from "@/client/hooks/useUserSession";
import * as useSelectedVview from "@/client/components/ui/PillNavigation/useSelectedView";
import { renderWithRouterAndQueryClient } from "@/client/utils/testHelpers";
import Me from "./Me";

jest.mock("@/client/utils/getEnv", () => ({
  getBaseUrl: jest.fn().mockReturnValue("http://localhost:3000"),
}));

const setupMockMeService = (data = mockMe) => {
  mockAxios.onGet(`/api/me?session_id=${sessionId}`).reply(200, data);
};

const setupMockOverviewService = (data = mockOverview) => {
  mockAxios
    .onGet(`/api/overview?user_id=${userId}&session_id=${sessionId}`)
    .reply(200, data);
};

const useSelectedViewSpy = jest.spyOn(useSelectedVview, "useSelectedView");

const mockAxios = new MockAdapter(axios);

const userId = "userId";
const sessionId = "sessionId";
const cookies = "cookies";

describe("Me", () => {
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
    useSelectedViewSpy.mockReturnValue("me");
  });

  afterEach(() => {
    mockAxios.reset();
    jest.clearAllMocks();
  });

  afterAll(() => {
    jest.clearAllMocks();
  });

  test("should render the me view", async () => {
    setupMockMeService();
    setupMockOverviewService();

    renderWithRouterAndQueryClient(<Me />);

    await waitFor(() => {
      expect(screen.getByText("Me Data")).toBeInTheDocument();
      expect(screen.getByTestId("user-details")).toBeInTheDocument();
      expect(screen.getByTestId("workout-metrics")).toBeInTheDocument();
      expect(screen.getByTestId("workout-counts")).toBeInTheDocument();
    });
  });

  test("should render the overview view when navigation has overview selected", async () => {
    useSelectedViewSpy.mockReturnValue("overview");
    setupMockMeService();
    setupMockOverviewService();

    renderWithRouterAndQueryClient(<Me />);

    await waitFor(() => {
      expect(screen.getByTestId("overview")).toBeInTheDocument();
      expect(screen.getByTestId("personal-records")).toBeInTheDocument();
      expect(screen.getByTestId("achievements")).toBeInTheDocument();
      expect(screen.getByTestId("streaks")).toBeInTheDocument();
    });
  });

  test("should render error message when Me service fails", async () => {
    mockAxios.onGet(`/api/me?session_id=${sessionId}`).reply(500);
    setupMockOverviewService();

    renderWithRouterAndQueryClient(<Me />);

    await waitFor(() => {
      expect(
        screen.getByText("There was an error fetching your Me data")
      ).toBeInTheDocument();
    });
  });

  test("should render error message when Overview service fails", async () => {
    useSelectedViewSpy.mockReturnValue("overview");
    setupMockMeService();
    mockAxios
      .onGet(`/api/overview?user_id=${userId}&session_id=${sessionId}`)
      .reply(500);

    renderWithRouterAndQueryClient(<Me />);

    await waitFor(() => {
      expect(
        screen.getByText("There was an error fetching your Overview data")
      ).toBeInTheDocument();
    });
  });
});
