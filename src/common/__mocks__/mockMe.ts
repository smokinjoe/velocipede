import { Me, UserDetails, WorkoutCount, WorkoutMetrics } from "../types/Me";

export const mockUserDetails: UserDetails = {
  username: "mock-username",
  imageUrl: "mock-imageUrl",
  name: "mock-name",
  email: "mock-email",
  birthday: "mock-birthday",
  totalFollowers: 0,
  totalFollowing: 0,
  weight: "165 lbs",
  height: "69 inches",
};

export const mockWorkoutCounts: WorkoutCount[] = [
  {
    name: "Bike Bootcamp",
    slug: "bike_bootcamp",
    count: 0,
    iconUrl:
      "https://s3.amazonaws.com/static-cdn.pelotoncycle.com/workout-count-icons/zero-bike_bootcamp2.png",
  },
  {
    name: "Rowing",
    slug: "caesar",
    count: 0,
    iconUrl:
      "https://s3.amazonaws.com/static-cdn.pelotoncycle.com/workout-count-icons/zero-caesar2.png",
  },
  {
    name: "Row Bootcamp",
    slug: "caesar_bootcamp",
    count: 0,
    iconUrl:
      "https://s3.amazonaws.com/static-cdn.pelotoncycle.com/workout-count-icons/zero-caesar_bootcamp2.png",
  },
  {
    name: "Cardio",
    slug: "cardio",
    count: 0,
    iconUrl:
      "https://s3.amazonaws.com/static-cdn.pelotoncycle.com/workout-count-icons/zero-cardio2.png",
  },
  {
    name: "Tread Bootcamp",
    slug: "circuit",
    count: 0,
    iconUrl:
      "https://s3.amazonaws.com/static-cdn.pelotoncycle.com/workout-count-icons/zero-circuit2.png",
  },
  {
    name: "Cycling",
    slug: "cycling",
    count: 300,
    iconUrl:
      "https://s3.amazonaws.com/static-cdn.pelotoncycle.com/workout-count-icons/nonzero-cycling2.png",
  },
  {
    name: "Meditation",
    slug: "meditation",
    count: 0,
    iconUrl:
      "https://s3.amazonaws.com/static-cdn.pelotoncycle.com/workout-count-icons/zero-meditation2.png",
  },
  {
    name: "Running",
    slug: "running",
    count: 0,
    iconUrl:
      "https://s3.amazonaws.com/static-cdn.pelotoncycle.com/workout-count-icons/zero-running2.png",
  },
  {
    name: "Strength",
    slug: "strength",
    count: 0,
    iconUrl:
      "https://s3.amazonaws.com/static-cdn.pelotoncycle.com/workout-count-icons/zero-strength2.png",
  },
  {
    name: "Stretching",
    slug: "stretching",
    count: 0,
    iconUrl:
      "https://s3.amazonaws.com/static-cdn.pelotoncycle.com/workout-count-icons/zero-stretching2.png",
  },
  {
    name: "Walking",
    slug: "walking",
    count: 302,
    iconUrl:
      "https://s3.amazonaws.com/static-cdn.pelotoncycle.com/workout-count-icons/nonzero-walking2.png",
  },
  {
    name: "Yoga",
    slug: "yoga",
    count: 1,
    iconUrl:
      "https://s3.amazonaws.com/static-cdn.pelotoncycle.com/workout-count-icons/nonzero-yoga2.png",
  },
];

export const workoutMetrics: WorkoutMetrics = {
  totalWorkouts: 603,
  defaultMaxHeartRate: 179,
  defaultHeartRateZones: [
    0, 116.35000000000001, 134.25, 152.15, 170.04999999999998,
  ].join(", "),
  totalPedalingMetricWorkouts: 300,
  cyclingFtpSource: "ftp_workout_source",
  cyclingFtp: 0,
  estimatedCyclingFtp: 153,
};

export const mockMe: Me = {
  id: "mock-id",

  userDetails: mockUserDetails,
  workoutCounts: mockWorkoutCounts,
  workoutMetrics: workoutMetrics,

  firstName: "mock-firstName",
  middleInitial: "mock-middleInitial",
  lastName: "mock-lastName",
  gender: "fluid",
  weightUnit: "imperial",
  heightUnit: "imperial",
  location: "mock-location",
};
