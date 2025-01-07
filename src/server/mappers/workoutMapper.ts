import {
  PelotonWorkoutResponse,
  PelotonBaseWorkoutDataResponse,
} from "../types/PelotonWorkoutResponse";
import { Workout, WorkoutData } from "../../common/types/Workout";

const workoutDataMapper = (
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
    totalWork: workout.total_work,
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

export const workoutMapper = (response: PelotonWorkoutResponse): Workout => {
  return {
    workouts: response.data.map(workoutDataMapper),
    limit: response.limit,
    page: response.page,
    total: response.total,
    count: response.count,
    pageCount: response.page_count,
    showPrevious: response.show_previous,
    showNext: response.page < response.page_count,
    sortBy: "created_at",
    next: {
      workoutId: response.next.workout_id,
      createdAt: response.next.created_at,
    },
    summary: response.summary,
  };
};
