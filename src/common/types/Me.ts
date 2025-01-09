export type WorkoutCount = {
  name: string;
  slug: string;
  count: number;
  iconUrl: string;
};

export type Me = {
  id: string;
  imageUrl: string;
  username: string;
  name: string;
  firstName: string;
  middleInitial: string;
  lastName: string;

  gender: string;
  email: string;
  birthday: number;

  totalFollowers: number;
  totalFollowing: number;

  weight: number;
  weightUnit: string;
  height: number;
  heightUnit: string;

  location: string;

  totalWorkouts: number;
  defaultMaxHeartRate: number;
  defaultHeartRateZones: Array<number>;
  totalPedalingMetricWorkouts: number;
  cyclingFtpSource: string;
  cyclingFtp: number;
  estimatedCyclingFtp: number;

  workoutCounts: WorkoutCount[];
};
