import { PelotonMeResponse } from "@/server/types/PelotonMeResponse";

export const mockPelotonMeResponse: PelotonMeResponse = {
  id: "guid",
  first_name: "first_name",
  middle_initial: "middle_initial",
  last_name: "last_name",
  gender: "gender",
  weight_unit: "weight_unit",
  height_unit: "height_unit",
  location: "location",

  username: "username",
  image_url: "image_url",
  name: "name",
  email: "email",
  birthday: 1,
  total_followers: 1,
  total_following: 2,
  weight: 3,
  height: 4,
  total_workouts: 5,
  default_max_heart_rate: 6,
  default_heart_rate_zones: [7],
  total_pedaling_metric_workouts: 8,
  cycling_ftp_source: "source",
  cycling_ftp: 10,
  estimated_cycling_ftp: 11,
  workout_counts: [
    {
      name: "name",
      slug: "slug",
      count: 12,
      icon_url: "icon_url",
    },
  ],
  // TODO: Fill this out completely with all the fields
} as PelotonMeResponse;
