import {
  PelotonWorkoutResponse,
  PelotonBaseWorkoutDataResponse,
} from "@/server/types/PelotonWorkoutResponse";

export const mockPelotonBaseWorkoutDataResponse: PelotonBaseWorkoutDataResponse =
  {
    id: "mock-workout-id",
    created_at: 1234567890,
    start_time: 1234567890,
    end_time: 1234567890,
    has_pedaling_metrics: true,
    has_leaderboard_metrics: true,
    is_total_work_personal_record: true,
    is_outdoor: false,
    name: "mock-workout-name",
    status: "COMPLETE",
    timezone: "mock-timezone",
    total_work: 123.45,
    user_id: "mock-user-id",

    total_video_watch_time_seconds: 1234567890,
    total_video_buffering_seconds: 1234567890,
    total_music_audio_play_seconds: null,
    total_music_audio_buffer_seconds: null,
    service_id: null,

    created: 1234567890,
    device_time_created_at: 1234567890,
    strava_id: null,
    fitbit_id: null,
    effort_zones: null,
    is_splits_personal_record: true,

    device_type: "android",
    fitness_discipline: "walking",
    metrics_type: null,
    peloton_id: "mock-peloton-id",
    platform: "android",
    title: "mock-title",
    workout_type: "class",
    v2_total_video_watch_time_seconds: null,
    v2_total_video_buffering_seconds: null,

    // TODO: This might be a different object if it is walk vs cycle
    ride: {
      id: "mock-ride-id",
      is_archived: false,
      title: "mock-ride-title",
      scheduled_start_time: 1234567890,
      duration: 1234567890,
      instructor: {
        name: "mock-instructor-name",
        image_url: "mock-instructor-image-url",
      },
    },
  };

export const mockPelotonWorkoutResponse: PelotonWorkoutResponse = {
  data: [mockPelotonBaseWorkoutDataResponse],

  limit: 1,
  page: 1,
  total: 1,
  count: 1,
  page_count: 1,
  show_previous: false,
  show_next: false,
  sort_by: "created_at",
  next: {
    workout_id: "mock-next-workout-id",
    created_at: 123,
  },
  summary: { string: 123 },
  aggregate_stats: [],
  total_heart_rate_zone_durations: null,
};
