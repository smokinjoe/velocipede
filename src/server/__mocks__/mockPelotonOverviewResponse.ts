import { PelotonOverviewResponse } from "@/server/types/PelotonOverviewResponse";

export const mockPelotonOverviewResponse: PelotonOverviewResponse = {
  id: "guid",
  workout_counts: {
    total_workouts: 1,
    workouts: [
      {
        name: "name",
        slug: "slug",
        count: 1,
        icon_url: "icon_url",
        workout_name: "workout_name",
      },
    ],
  },
  personal_records: [
    {
      name: "name",
      slug: "slug",
      first_workout_date: "022-09-07T18:09:08",
      reset_date: "reset_date",
      records: [
        {
          name: "name",
          slug: "slug",
          value: 123,
          raw_value: 123,
          workout_id: "workout_id",
          workout_date: "2023-10-27T17:49:29.480000",
          unit: "unit",
          unit_slug: "unit_slug",
        },
      ],
    },
  ],
  streaks: {
    current_weekly: 10,
    best_weekly: 15,
    start_date_of_current_weekly: 1689749414,
  },
  achievements: [
    {
      id: "achievement_id",
      name: "name",
      slug: "slug",
      image_url: "image_url",
      description: "description",
      small_image_url: null,
      large_image_url: null,
      animated_image_url: null,
      kinetic_token_background: null,
    },
  ],
};
