import { WorkoutList, WorkoutData } from "../types/WorkoutList";

export const mockWorkoutDataWithWalkRide = {
  id: "mock-ride-id",
  isArchived: false,
  title: "mock-ride-title",
  scheduledStartTime: 1234567890,
  duration: 1234567890,
  instructor: {
    name: "mock-instructor-name",
    imageUrl: "mock-instructor-image-url",
  },
};

export const mockWorkoutData: WorkoutData = {
  id: "mock-workout-id",
  createdAt: 1234567890,
  startTime: 1234567890,
  endTime: 1234567890,
  hasPedalingMetrics: true,

  isTotalWorkPersonalRecord: true,
  isOutdoor: false,
  name: "mock-workout-name",
  status: "COMPLETE",
  totalWork: 123.45,

  deviceType: "android",
  fitnessDiscipline: "walking",
  metricsType: null,
  pelotonId: "mock-peloton-id",
  platform: "android",
  title: "mock-title",
  workoutType: "class",
  ride: mockWorkoutDataWithWalkRide,
};

export const mockWorkoutList: WorkoutList = {
  workouts: [mockWorkoutData],
  limit: 1,
  page: 1,
  total: 1,
  count: 1,
  pageCount: 1,
  showPrevious: false,
  showNext: false,
  sortBy: "created_at",
  next: {
    workoutId: "mock-next-workout-id",
    createdAt: 123,
  },
  summary: {
    string: 123,
  },
};
