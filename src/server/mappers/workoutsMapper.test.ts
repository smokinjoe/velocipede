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

test('workoutDataMapper includes a ride property for "walking" fitness_discipline', () => {
  // TODO: This is a dumb solution
  const fitness_discipline = "walking" as const;

  const walkingWorkout = {
    ...mockPelotonBaseWorkoutDataResponse,
    fitness_discipline,
    ride: {
      id: "ride-id",
      is_archived: false,
      title: "Walk with Robin",
      scheduled_start_time: 1234567890,
      duration: 1800,
      instructor: {
        name: "Robin Arzon",
        image_url: "https://path/to/image.jpg",
      },
    },
  };
  const mappedWorkout = workoutDataMapper(walkingWorkout);
  expect(mappedWorkout.ride).toEqual({
    id: "ride-id",
    isArchived: false,
    title: "Walk with Robin",
    scheduledStartTime: 1234567890,
    duration: 1800,
    instructor: {
      name: "Robin Arzon",
      imageUrl: "https://path/to/image.jpg",
    },
  });
});

test('workoutDataMapper does not include a ride property for "cycling" fitness_discipline', () => {
  // TODO: This is a dumb solution
  const fitness_discipline = "cycling" as const;

  const cyclingWorkout = {
    ...mockPelotonBaseWorkoutDataResponse,
    fitness_discipline,
    ride: {
      id: "ride-id",
      is_archived: false,
      title: "Ride with Robin",
      scheduled_start_time: 1234567890,
      duration: 1800,
      instructor: {
        name: "Robin Arzon",
        image_url: "https://path/to/image.jpg",
      },
    },
  };

  const mappedWorkout = workoutDataMapper(cyclingWorkout);
  expect(mappedWorkout.ride).toBeNull();
});
