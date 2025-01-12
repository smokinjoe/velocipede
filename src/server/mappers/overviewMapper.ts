import {
  formatDateToMMDDYYYY,
  formatDateStringToMMDDYYYY,
} from "../../common/utils/date";
import {
  Achievement,
  Overview,
  PersonalRecord,
  Record,
  Workout,
} from "../../common/types/Overview";
import {
  PelotonAchievement,
  PelotonOverviewResponse,
  PelotonOverviewWorkout,
  PelotonPersonalRecord,
  PelotonRecord,
} from "../types/PelotonOverviewResponse";

const mapWorkout = (workout: PelotonOverviewWorkout): Workout => ({
  name: workout.name,
  slug: workout.slug,
  count: workout.count,
  iconUrl: workout.icon_url,
  workoutName: workout.workout_name,
});

const mapPersonalRecord = (record: PelotonPersonalRecord): PersonalRecord => ({
  name: record.name,
  slug: record.slug,
  firstWorkoutDate: record.first_workout_date,
  resetDate: record.reset_date,
  records: record.records.map(mapRecord),
});

const mapRecord = (record: PelotonRecord): Record => ({
  name: record.name,
  value: `${record.value} ${record.unit}`,
  rawValue: record.raw_value,
  workoutId: record.workout_id,
  workoutDate: formatDateStringToMMDDYYYY(record.workout_date),
});

const mapAchievement = (achievement: PelotonAchievement): Achievement => ({
  id: achievement.id,
  name: achievement.name,
  slug: achievement.slug,
  imageUrl: achievement.image_url,
  description: achievement.description,
  smallImageUrl: achievement.small_image_url,
  largeImageUrl: achievement.large_image_url,
  animatedImageUrl: achievement.animated_image_url,
  kineticTokenBackground: achievement.kinetic_token_background,
});

export const overviewMapper = (response: PelotonOverviewResponse): Overview => {
  return {
    id: response.id,
    workoutCounts: {
      totalWorkouts: response.workout_counts.total_workouts,
      workouts: response.workout_counts.workouts.map(mapWorkout),
    },
    personalRecords: response.personal_records.map(mapPersonalRecord),
    streaks: {
      currentWeekly: response.streaks.current_weekly,
      bestWeekly: response.streaks.best_weekly,
      startDateOfCurrentWeekly: formatDateToMMDDYYYY(
        response.streaks.start_date_of_current_weekly
      ),
    },
    achievements: response.achievements.map(mapAchievement),
  };
};
