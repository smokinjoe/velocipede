import { PelotonMeResponse } from "../types/PelotonMeResponse";
import { Me } from "../../common/types/Me";

export const mapMe = (response: PelotonMeResponse): Me => {
  return {
    id: response.id,
    imageUrl: response.image_url,
    username: response.username,
    name: response.name,
    firstName: response.first_name,
    middleInitial: response.middle_initial,
    lastName: response.last_name,

    gender: response.gender,
    email: response.email,
    birthday: response.birthday,

    totalFollowers: response.total_followers,
    totalFollowing: response.total_following,

    weight: response.weight,
    weightUnit: response.weight_unit,
    height: response.height,
    heightUnit: response.height_unit,

    location: response.location,

    totalWorkouts: response.total_workouts,
    defaultMaxHeartRate: response.default_max_heart_rate,
    defaultHeartRateZones: response.default_heart_rate_zones,
    totalPedalingMetricWorkouts: response.total_pedaling_metric_workouts,
    cyclingFtpSource: response.cycling_ftp_source,
    cyclingFtp: response.cycling_ftp,
    estimatedCyclingFtp: response.estimated_cycling_ftp,

    workoutCounts: response.workout_counts.map((workoutCount) => ({
      name: workoutCount.name,
      slug: workoutCount.slug,
      count: workoutCount.count,
      iconUrl: workoutCount.icon_url,
    })),
  };
};
