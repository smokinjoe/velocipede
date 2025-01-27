import { workoutsMapper, workoutDataMapper } from "./workoutsMapper";
import {
  mockPelotonWorkoutResponse,
  mockPelotonBaseWorkoutDataResponse,
} from "../__mocks__/mockPelotonWorkoutResponse";
import {
  mockWorkoutList,
  mockWorkoutData,
} from "../../common/__mocks__/mockWorkoutList";

test("workoutsMapper should map PelotonWorkoutResponse to WorkoutList", () => {
  const mappedWorkouts = workoutsMapper(mockPelotonWorkoutResponse);
  expect(mappedWorkouts).toEqual(mockWorkoutList);
});

test("workoutDataMapper should map PelotonBaseWorkoutDataResponse to WorkoutData", () => {
  const mappedWorkout = workoutDataMapper(mockPelotonBaseWorkoutDataResponse);
  expect(mappedWorkout).toEqual(mockWorkoutData);
});
