import { screen, act, renderHook, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { Route, MemoryRouter } from "react-router-dom";

import { mockWorkoutDetail } from "@/common/__mocks__/mockWorkoutDetail";

import { useUserSession } from "@/client/hooks/useUserSession";
import { renderWithRouterAndQueryClient } from "@/client/utils/testHelpers";

import WorkoutContainer from "./WorkoutContainer";

jest.mock("@/client/utils/getEnv", () => ({
  getBaseUrl: jest.fn().mockReturnValue("http://localhost:3000"),
}));

// mock id from useParams
const mockId = "123-guid-321";

// mock userSession for isLoggedIn and sessionId
const userId = "userId";
const sessionId = "sessionId";
const cookies = "cookies";

// mock axios and workout data
const mockAxios = new MockAdapter(axios);
const setupMockWorkoutService = (data = mockWorkoutDetail) => {
  //   mockAxios.onGet(`/api/me?session_id=${sessionId}`).reply(200, data);
  mockAxios
    .onGet(`/api/workout/${mockId}?session_id=${sessionId}`)
    .reply(200, data);
};

// WorkoutContainer renders

// WorkoutContainer renders the loading state

// WorkoutContainer renders the error state

// WorkoutContainer renders the workout details for walking discipline

// WorkoutContainer renders the workout details for cycling discipline

describe("WorkoutContainer", () => {
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
    jest.clearAllMocks();
  });

  afterAll(() => {
    // TODO: Might be a little redundant
    // jest.clearAllMocks();
    // TODO: Check other tests and get rid of the jest.clearAllMocks()
  });

  test("should render", async () => {
    setupMockWorkoutService();
    renderWithRouterAndQueryClient(
      <MemoryRouter initialEntries={[`/workout/${mockId}`]}>
        <Route path="/workout/:id">
          <WorkoutContainer />
        </Route>
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText("Workout Details")).toBeInTheDocument();
    });
  });
});
