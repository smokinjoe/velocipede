import { mapMe } from "./meMapper";
import { mockPelotonMeResponse } from "@/server/__mocks__/mockPelotonMeResponse";

test("that mapMe converts a PelotonMeResponse to a Me", () => {
  const response = mockPelotonMeResponse;

  const result = mapMe(response);

  expect(result).toEqual({
    id: "guid",

    userDetails: {
      username: "username",
      imageUrl: "image_url",
      name: "name",
      email: "email",
      birthday: "12/31/1969",
      totalFollowers: 1,
      totalFollowing: 2,
      weight: "3 lbs",
      height: "4 inches",
    },
    workoutMetrics: {
      totalWorkouts: 5,
      defaultMaxHeartRate: 6,
      defaultHeartRateZones: "7",
      totalPedalingMetricWorkouts: 8,
      cyclingFtpSource: "source",
      cyclingFtp: 10,
      estimatedCyclingFtp: 11,
    },
    workoutCounts: [
      {
        name: "name",
        slug: "slug",
        count: 12,
        iconUrl: "icon_url",
      },
    ],

    firstName: "first_name",
    middleInitial: "middle_initial",
    lastName: "last_name",
    gender: "gender",
    weightUnit: "weight_unit",
    heightUnit: "height_unit",
    location: "location",
  });
});
