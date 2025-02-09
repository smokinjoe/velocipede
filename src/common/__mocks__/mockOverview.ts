import { Overview } from "../types/Overview";

export const mockOverview: Overview = {
  id: "123",
  workoutCounts: {
    totalWorkouts: 100,
    workouts: [
      {
        name: "Cycling",
        slug: "cycling",
        count: 50,
        iconUrl: "https://via.placeholder.com/150",
        workoutName: "Cycling",
      },
      {
        name: "Strength",
        slug: "strength",
        count: 50,
        iconUrl: "https://via.placeholder.com/150",
        workoutName: "Strength",
      },
    ],
  },
  personalRecords: [
    {
      name: "Cycling",
      slug: "cycling",
      firstWorkoutDate: "2021-01-01",
      resetDate: null,
      records: [
        {
          name: "Output",
          value: "300",
          rawValue: 300,
          workoutId: "123",
          workoutDate: "2021-01-01",
        },
      ],
    },
  ],
  streaks: {
    currentWeekly: 5,
    bestWeekly: 10,
    startDateOfCurrentWeekly: "2021-01-01",
  },
  achievements: [
    {
      id: "123",
      name: "Achievement",
      slug: "achievement",
      imageUrl: "https://via.placeholder.com/150",
      description: "Description",
    },
  ],
};
