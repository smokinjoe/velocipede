export type OverviewWorkoutCount = {
  totalWorkouts: number;
  workouts: Workout[];
};

export type Workout = {
  name: string;
  slug: string;
  count: number;
  iconUrl: string;
  workoutName: string;
};

export type PersonalRecord = {
  name: string;
  slug: string;
  firstWorkoutDate: string;
  resetDate: null | string;
  records: Record[];
};

export type Record = {
  name: string;
  value: string;
  rawValue: number;
  workoutId: string;
  workoutDate: string;
};

export type Streaks = {
  currentWeekly: number;
  bestWeekly: number;
  startDateOfCurrentWeekly: string;
};

export type Achievement = {
  id: string;
  name: string;
  slug: string;
  imageUrl: string;
  description: string;
};

export type Overview = {
  id: string;
  workoutCounts: OverviewWorkoutCount;
  personalRecords: PersonalRecord[];
  streaks: Streaks;
  achievements: Achievement[];
};
