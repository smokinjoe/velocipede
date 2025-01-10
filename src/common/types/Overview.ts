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
  slug: string;
  value: number;
  rawValue: number;
  unit: string;
  unitSlug: string;
  workoutId: string;
  workoutDate: string;
};

export type Streaks = {
  currentWeekly: number;
  bestWeekly: number;
  startDateOfCurrentWeekly: number;
};

export type Achievement = {
  id: string;
  name: string;
  slug: string;
  imageUrl: string;
  description: string;
  smallImageUrl: null | string;
  largeImageUrl: null | string;
  animatedImageUrl: null | string;
  kineticTokenBackground: null | string;
};

export type Overview = {
  id: string;
  workoutCounts: OverviewWorkoutCount;
  personalRecords: PersonalRecord[];
  streaks: Streaks;
  achievements: Achievement[];
};
