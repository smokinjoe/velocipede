export type PelotonBaseWorkoutDataResponse = {
  id: string;
  created_at: number;
  start_time: number;
  end_time: number;
  has_pedaling_metrics: boolean;
  has_leaderboard_metrics: boolean;
  is_total_work_personal_record: boolean;
  is_outdoor: boolean;
  name: string;
  status: "COMPLETE";
  timezone: string;
  total_work: number; // Float?
  user_id: string;

  total_video_watch_time_seconds: number;
  total_video_buffering_seconds: number;
  total_music_audio_play_seconds: null;
  total_music_audio_buffer_seconds: null;
  service_id: null | string; // Looks like most IDs are strings not sure about id

  created: number;
  device_time_created_at: number;
  strava_id: null;
  fitbit_id: null;
  effort_zones: null;
  is_splits_personal_record: boolean;

  device_type: "android" | "home_bike_v1";
  fitness_discipline: "walking" | "cycling";
  metrics_type: null | "cycling";
  peloton_id: null | string;
  platform: "android" | "home_bike";
  title: string | null;
  workout_type: "freestyle" | "class"; // for walk
  v2_total_video_watch_time_seconds: number | null; // null for walk
  v2_total_video_buffering_seconds: number | null; // null for walk

  ride?: {
    id: string; // "00000000000000000000000000000000";
    is_archived: boolean;
    title: string;
    scheduled_start_time: number;
    duration: number;
    instructor: {
      name: string; // "JUST WALK";
      image_url: string; // "https://s3.amazonaws.com/peloton-ride-images/just-walk-outdoor.png";
    };
  };
};

export type PelotonWorkoutResponse = {
  data: PelotonBaseWorkoutDataResponse[];

  limit: number;
  page: number;
  total: number;
  count: number;
  page_count: number;
  show_previous: boolean;
  show_next: boolean;
  sort_by: string;
  next: {
    workout_id: string;
    created_at: number;
  };
  summary: Record<string, number>;
  aggregate_stats: []; // not sure what type of array
  total_heart_rate_zone_durations: null; // not sure what type
};
