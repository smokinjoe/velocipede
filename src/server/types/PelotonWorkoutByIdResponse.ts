export type PelotonInstructor = {
  id: string;
  bio: string;
  short_bio: string;
  coach_type: string;
  is_active: boolean;
  is_filterable: boolean;
  is_instructor_group: boolean;
  individual_instructor_ids: string[]; // TODO: was empty array, not sure about string[]
  is_visible: boolean;
  is_announced: boolean;
  list_order: number;
  featured_profile: boolean;
  film_link: string;
  facebook_fan_page: string;
  music_bio: string;
  spotify_playlist_uri: string;
  background: string;
  ordered_q_and_as: Array<string[]>;
  instagram_profile: string;
  strava_profile: string;
  twitter_profile: string;
  quote: string;
  username: string;
  name: string;
  first_name: string;
  last_name: string;
  user_id: string;
  life_style_image_url: string;
  bike_instructor_list_display_image_url: string | null; // TODO: was null not sure about string
  web_instructor_list_display_image_url: string;
  ios_instructor_list_display_image_url: string;
  about_image_url: string;
  image_url: string;
  jumbotron_url: string | null;
  jumbotron_url_dark: string;
  jumbotron_url_ios: string;
  web_instructor_list_gif_image_url: string | null; // TODO: was null not sure about string
  instructor_hero_image_url: string;
  workout_share_images: Array<{
    fitness_discipline: string;
    image_url: string;
  }>;
  fitness_disciplines: string[];
  default_cross_fade: number;
  default_cue_delay: number;
};

export type PelotonRideBase = PelotonCycle | PelotonWalk;

// TODO: Should I rename this to PelotonCycle?
export type PelotonCycle = {
  instructor: PelotonInstructor;
  content_availability: string;
  content_availability_level: string;
  free_for_limited_time: boolean;
  is_limited_ride: boolean;
  availability: {
    is_available: boolean;
    reason: string | null; // TODO: was just null, not sure about string
  };
  class_type_ids: string[];
  content_provider: string;
  content_format: string;
  description: string;
  difficulty_estimate: number;
  overall_estimate: number;
  difficulty_rating_avg: number;
  difficulty_rating_count: number;
  difficulty_level: number | null; // TODO: was just null, not sure about number
  duration: number;
  equipment_ids: string[];
  equipment_tags: string[];
  explicit_rating: number;
  extra_images: string[];
  fitness_discipline: string;
  fitness_discipline_display_name: string;
  has_closed_captions: boolean;
  has_pedaling_metrics: boolean;
  home_peloton_id: string;
  id: string;
  image_url: string;
  instructor_id: string;
  individual_instructor_ids: string[];
  is_archived: boolean;
  is_closed_caption_shown: boolean;
  is_explicit: boolean;
  has_free_mode: boolean;
  is_live_in_studio_only: boolean;
  language: string;
  origin_locale: string;
  length: number;
  live_stream_id: string;
  live_stream_url: string | null; // TODO: was just null, not sure about string
  location: string;
  metrics: string[];
  original_air_time: number;
  overall_rating_avg: number;
  overall_rating_count: number;
  pedaling_start_offset: number;
  pedaling_end_offset: number;
  pedaling_duration: number;
  rating: number;
  ride_type_id: string;
  ride_type_ids: string[];
  sample_vod_stream_url: string | null; // TODO: was just null, not sure about string
  sample_preview_stream_url: string | null; // TODO: was just null, not sure about string
  scheduled_start_time: number;
  series_id: string;
  sold_out: boolean;
  studio_peloton_id: string;
  title: string;
  total_ratings: number;
  total_in_progress_workouts: number;
  total_workouts: number;
  vod_stream_url: string | null; // TODO: was just null, not sure about string
  vod_stream_id: string;
  captions: string[];
  user_caption_locales: string[];
  join_tokens: {
    on_demand: string;
  };
  flags: string[];
  is_dynamic_video_eligible: boolean;
  is_fixed_distance: boolean;
  dynamic_video_recorded_speed_in_mph: number;
  thumbnail_title: string | null;
  thumbnail_location: string | null;
  distance: number | null;
  distance_unit: string | null;
  distance_display_value: string | null;
  is_outdoor: boolean;
  has_tread_pace_target: boolean;
  excluded_platforms: string[];
  class_avg_follow_along_score: number;
  muscle_group_score: Array<{
    muscle_group: string;
    score: number;
    percentage: number;
    bucket: number;
    display_name: string;
  }>;
};

/**
 * TODO: Figure out how to handle the expected constant values of id and name
 */
export type PelotonWalk = {
  // id: "00000000000000000000000000000000";
  id: string;
  is_archived: boolean;
  title: string;
  scheduled_start_time: number;
  duration: number;
  instructor: {
    // name: "JUST WALK";
    name: string;
    image_url: string;
  };
};

export type PelotonWorkoutByIdResponse = {
  created_at: number;
  device_type: string;
  end_time: number;
  fitness_discipline: "cycling" | "walking";
  has_pedaling_metrics: boolean;
  has_leaderboard_metrics: boolean;
  id: string;
  is_total_work_personal_record: boolean;
  is_outdoor: boolean;
  metrics_type: string;
  name: string;
  peloton_id: string;
  platform: string;
  start_time: number;
  status: string; // "COMPLETE"
  timezone: string;
  title: null | string; // TODO: Not sure about string
  total_work: number;
  user_id: string;
  workout_type: string;
  total_video_watch_time_seconds: number;
  total_video_buffering_seconds: number;
  v2_total_video_watch_time_seconds: number;
  v2_total_video_buffering_seconds: number;
  total_music_audio_play_seconds: null | number; // TODO: not sure about number
  total_music_audio_buffer_seconds: null | number; // TODO: not sure about number
  service_id: null | string; // TODO: not sure about string

  ride: PelotonRideBase;

  created: number;
  device_time_created_at: number;
  strava_id: string | null;
  fitbit_id: string | null;
  is_skip_intro_available: boolean;
  pause_time_remaining: number | null;
  pause_time_elapsed: number | null;
  is_paused: boolean;
  has_paused: boolean;
  is_pause_available: boolean;
  pause_time_limit: 60.0;
  total_heart_rate_zone_durations: number | null;
  average_effort_score: number | null;
  achievement_templates: string[];
  leaderboard_rank: number;
  total_leaderboard_users: number;
  ftp_info: {
    ftp: number;
    ftp_source: string;
    ftp_workout_id: string;
  };
  device_type_display_name: string;
};

export const asPelotonCycle = (ride: PelotonRideBase): PelotonCycle => {
  if ("fitnessDiscipline" in ride) {
    throw new Error("Expected a Cycle ride");
  }
  return ride as PelotonCycle;
};

export const asPelotonWalk = (ride: PelotonRideBase): PelotonWalk => {
  if (!("fitnessDiscipline" in ride)) {
    throw new Error("Expected a Walk ride");
  }
  return ride as PelotonWalk;
};
