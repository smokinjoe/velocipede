import axios from "axios";
import MockAdapter from "axios-mock-adapter";

import { login, me, workouts, workout, overview } from "./pelotonService";

jest.mock("../utils/getEnv", () => ({
  getBaseUrl: jest.fn().mockReturnValue("http://localhost:3000"),
}));

const mockAxios = new MockAdapter(axios);

afterEach(() => {
  mockAxios.reset();
});

afterAll(() => {
  jest.clearAllMocks();
});

test("login successfully responds", async () => {
  const username = "username";
  const password = "password";
  mockAxios.onPost("/auth/login").reply(200, { data: "data" });
  const response = await login(username, password);
  expect(response).toEqual({ data: "data" });
});

test("me successfully responds", async () => {
  const sessionId = "sessionId";
  mockAxios
    .onGet(`/api/me?session_id=${sessionId}`)
    .reply(200, { data: "data" });
  const response = await me(sessionId);
  expect(response).toEqual({ data: "data" });
});

test("workouts successfully responds", async () => {
  const page = 0;
  const limit = 20;
  const userId = "userId";
  const sessionId = "sessionId";
  mockAxios
    .onGet(
      `/api/workouts?user_id=${userId}&session_id=${sessionId}&page=${page}&limit=${limit}`
    )
    .reply(200, { data: "data" });
  const response = await workouts(page, limit, userId, sessionId);
  expect(response).toEqual({ data: "data" });
});

test("workout successfully responds", async () => {
  const id = "id";
  const sessionId = "sessionId";
  mockAxios.onGet(`/api/workouts/${id}?session_id=${sessionId}`).reply(200, {
    data: "data",
  });
  const response = await workout(id, sessionId);
  expect(response).toEqual({ data: "data" });
});

test("workout throws error when id is undefined", async () => {
  const id = undefined;
  const sessionId = "sessionId";
  await expect(workout(id, sessionId)).rejects.toThrow(
    "Workout ID is required"
  );
});

test("overview successfully responds", async () => {
  const userId = "userId";
  const sessionId = "sessionId";

  mockAxios
    .onGet(`/api/overview?user_id=${userId}&session_id=${sessionId}`)
    .reply(200, { data: "data" });
  const response = await overview(userId, sessionId);
  expect(response).toEqual({ data: "data" });
});
