export type WorkoutCount = {
  name: string;
  slug: string;
  count: number;
  iconUrl: string;
};

export type Me = {
  id: string;

  userDetails: UserDetails;
  workoutCounts: WorkoutCount[];
  workoutMetrics: WorkoutMetrics;

  /**
   * Currently unused properties
   */
  firstName: string;
  middleInitial: string;
  lastName: string;
  gender: string;
  weightUnit: string;
  heightUnit: string;
  location: string;
};

export type UserDetails = {
  username: string;
  imageUrl: string;
  name: string;
  email: string;
  birthday: string;
  totalFollowers: number;
  totalFollowing: number;
  weight: string;
  height: string;
};

export type WorkoutMetrics = {
  totalWorkouts: number;
  defaultMaxHeartRate: number;
  defaultHeartRateZones: string;
  totalPedalingMetricWorkouts: number;
  cyclingFtpSource: string;
  cyclingFtp: number;
  estimatedCyclingFtp: number;
};
