import { mockPelotonOverviewResponse } from "@/server/__mocks__/mockPelotonOverviewResponse";
import { PelotonOverviewResponse } from "@/server/types/PelotonOverviewResponse";
import { overviewMapper } from "./overviewMapper";

test("overviewMapper maps a PelotonOverResponse to Overview", () => {
  const response = mockPelotonOverviewResponse;

  const expected = {
    id: "guid",
    workoutCounts: {
      totalWorkouts: 1,
      workouts: [
        {
          name: "name",
          slug: "slug",
          count: 1,
          iconUrl: "icon_url",
          workoutName: "workout_name",
        },
      ],
    },
    personalRecords: [
      {
        name: "name",
        slug: "slug",
        firstWorkoutDate: "022-09-07T18:09:08",
        resetDate: "reset_date",
        records: [
          {
            name: "name",
            value: "123 unit",
            rawValue: 123,
            workoutId: "workout_id",
            workoutDate: "10/27/2023",
          },
        ],
      },
    ],
    streaks: {
      currentWeekly: 10,
      bestWeekly: 15,
      startDateOfCurrentWeekly: "07/19/2023",
    },
    achievements: [
      {
        id: "achievement_id",
        name: "name",
        slug: "slug",
        imageUrl: "image_url",
        description: "description",
      },
    ],
  };

  expect(
    overviewMapper(response as unknown as PelotonOverviewResponse)
  ).toEqual(expected);
});
