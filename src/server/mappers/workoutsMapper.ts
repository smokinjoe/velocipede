import {
  PelotonWorkoutResponse,
  PelotonBaseWorkoutDataResponse,
} from "../types/PelotonWorkoutResponse";
import { WorkoutList, WorkoutData } from "../../common/types/WorkoutList";

export const workoutDataMapper = (
  workout: PelotonBaseWorkoutDataResponse
): WorkoutData => {
  return {
    id: workout.id,
    createdAt: workout.created,
    startTime: workout.device_time_created_at,
    endTime: workout.device_time_created_at,
    hasPedalingMetrics: workout.has_pedaling_metrics,
    isTotalWorkPersonalRecord: workout.is_splits_personal_record,
    isOutdoor: workout.is_outdoor,
    name: workout.name,
    status: "COMPLETE",
    totalWork: workout.total_work, // TODO: this is in Joules, convert to KJ
    deviceType: workout.device_type,
    fitnessDiscipline: workout.fitness_discipline,
    metricsType: workout.metrics_type,
    pelotonId: workout.peloton_id,
    platform: workout.platform,
    title: workout.title,
    workoutType: workout.workout_type,
    ride:
      "ride" in workout && workout.ride !== undefined
        ? {
            id: workout.ride.id,
            isArchived: workout.ride.is_archived,
            title: workout.ride.title,
            scheduledStartTime: workout.ride.scheduled_start_time,
            duration: workout.ride.duration,
            instructor: {
              name: workout.ride.instructor.name,
              imageUrl: workout.ride.instructor.image_url,
            },
          }
        : null,
  };
};

// TODO: Rename to workoutListMapper
export const workoutsMapper = (
  response: PelotonWorkoutResponse
): WorkoutList => {
  return {
    workouts: response.data.map(workoutDataMapper),
    limit: response.limit,
    page: response.page,
    total: response.total,
    count: response.count,
    pageCount: response.page_count,
    showPrevious: response.show_previous,
    showNext: response.show_next,
    sortBy: "created_at",
    next: {
      workoutId: response.next.workout_id,
      createdAt: response.next.created_at,
    },
    summary: response.summary,
  };
};
