export type PelotonOverviewWorkoutCounts = {
  total_workouts: number;
  workouts: PelotonOverviewWorkout[];
};

export type PelotonOverviewWorkout = {
  name: string;
  slug: string;
  count: number;
  icon_url: string;
  workout_name: string;
};

export type PelotonPersonalRecord = {
  name: string;
  slug: string;
  first_workout_date: string;
  reset_date: null | string;
  records: PelotonRecord[];
};

export type PelotonRecord = {
  name: string;
  slug: string;
  value: number;
  raw_value: number;
  unit: string;
  unit_slug: string;
  workout_id: string;
  workout_date: string;
};

export type PelotonStreaks = {
  current_weekly: number;
  best_weekly: number;
  start_date_of_current_weekly: number;
};

export type PelotonAchievement = {
  id: string;
  name: string;
  slug: string;
  image_url: string;
  description: string;
  small_image_url: null | string;
  large_image_url: null | string;
  animated_image_url: null | string;
  kinetic_token_background: null | string;
};

export type PelotonOverviewResponse = {
  id: string;
  workout_counts: PelotonOverviewWorkoutCounts;
  personal_records: PelotonPersonalRecord[];
  streaks: PelotonStreaks;
  achievements: PelotonAchievement[];
};
