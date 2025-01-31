import {
  PelotonMeResponse,
  PelotonWorkoutCount,
} from "@/server/types/PelotonMeResponse";
import {
  Me,
  UserDetails,
  WorkoutCount,
  WorkoutMetrics,
} from "@/common/types/Me";
import { formatMsToMMDDYYY } from "@/common/utils/date";

const mapUserDetails = (
  response: Pick<
    PelotonMeResponse,
    | "username"
    | "image_url"
    | "name"
    | "email"
    | "birthday"
    | "total_followers"
    | "total_following"
    | "weight"
    | "height"
  >
): UserDetails => {
  return {
    username: response.username,
    imageUrl: response.image_url,
    name: response.name,
    email: response.email,
    birthday: formatMsToMMDDYYY(response.birthday),
    totalFollowers: response.total_followers,
    totalFollowing: response.total_following,
    weight: `${response.weight} lbs`,
    height: `${response.height} inches`,
  };
};

const mapWorkoutMetrics = (
  response: Pick<
    PelotonMeResponse,
    | "total_workouts"
    | "default_max_heart_rate"
    | "default_heart_rate_zones"
    | "total_pedaling_metric_workouts"
    | "cycling_ftp_source"
    | "cycling_ftp"
    | "estimated_cycling_ftp"
  >
): WorkoutMetrics => {
  return {
    totalWorkouts: response.total_workouts,
    defaultMaxHeartRate: response.default_max_heart_rate,
    defaultHeartRateZones: response.default_heart_rate_zones.join(", "),
    totalPedalingMetricWorkouts: response.total_pedaling_metric_workouts,
    cyclingFtpSource: response.cycling_ftp_source,
    cyclingFtp: response.cycling_ftp,
    estimatedCyclingFtp: response.estimated_cycling_ftp,
  };
};

const mapWorkoutCounts = (response: PelotonWorkoutCount): WorkoutCount => ({
  name: response.name,
  slug: response.slug,
  count: response.count,
  iconUrl: response.icon_url,
});

export const mapMe = (response: PelotonMeResponse): Me => {
  return {
    id: response.id,

    userDetails: mapUserDetails(response),
    workoutMetrics: mapWorkoutMetrics(response),
    workoutCounts: response.workout_counts.map(mapWorkoutCounts),

    firstName: response.first_name,
    middleInitial: response.middle_initial,
    lastName: response.last_name,
    gender: response.gender,
    weightUnit: response.weight_unit,
    heightUnit: response.height_unit,
    location: response.location,
  };
};
