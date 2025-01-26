import {
  PelotonWorkoutByIdResponse,
  PelotonWalk,
  PelotonCycle,
  PelotonInstructor,
} from "../types/PelotonWorkoutByIdResponse";

export const mockPelotonWalk: PelotonWalk = {
  id: "mock-id",
  is_archived: false,
  title: "mock-title",
  scheduled_start_time: 426681600,
  duration: 30,
  instructor: {
    name: "mock-instructor-name",
    image_url: "mock-instructor-image-url",
  },
};

export const mockInstructor: PelotonInstructor = {
  id: "mock-instructor-id",
  bio: "instructor bio",
  short_bio: "instructor short bio",
  coach_type: "instructor coach type",
  is_active: true,
  is_filterable: true,
  is_instructor_group: true,
  individual_instructor_ids: ["guid-id-id"],
  is_visible: true,
  is_announced: true,
  list_order: 1,
  featured_profile: true,
  film_link: "instructor film link",
  facebook_fan_page: "instructor facebook fan page",
  music_bio: "instructor music bio",
  spotify_playlist_uri: "instructor spotify playlist uri",
  background: "instructor background",
  ordered_q_and_as: [["instructor ordered q and a"]],
  instagram_profile: "instructor instagram profile",
  strava_profile: "instructor strava profile",
  twitter_profile: "instructor twitter profile",
  quote: "instructor quote",
  username: "instructor username",
  name: "instructor name",
  first_name: "instructor first name",
  last_name: "instructor last name",
  user_id: "mock-instructor-user-id",
  life_style_image_url: "https://list-style-image-url.com",
  bike_instructor_list_display_image_url:
    "https://bike-instructor-list-display-image-url.com",
  web_instructor_list_display_image_url:
    "https://web-instructor-list-display-image-url.com",
  ios_instructor_list_display_image_url:
    "https://ios-instructor-list-display-image-url.com",
  about_image_url: "https://about-image-url.com",
  image_url: "https://image-url.com",
  jumbotron_url: "https://jumbotron-url.com",
  jumbotron_url_dark: "https://jumbotron-url-dark.com",
  jumbotron_url_ios: "https://jumbotron-url-ios.com",
  web_instructor_list_gif_image_url:
    "https://web-instructor-list-gif-image-url.com",
  instructor_hero_image_url: "https://instructor-hero-image-url.com",
  workout_share_images: [
    {
      fitness_discipline: "instructor fitness discipline",
      image_url: "https://image-url.com",
    },
  ],
  fitness_disciplines: ["instructor fitness discipline"],
  default_cross_fade: 1,
  default_cue_delay: 1,
};

export const mockPelotonCycle: PelotonCycle = {
  id: "mock-id",
  instructor: mockInstructor,

  content_availability: "mock-content-availability",
  content_availability_level: "mock-content-availability-level",
  free_for_limited_time: true,
  is_limited_ride: true,
  availability: {
    is_available: true,
    reason: "mock-reason",
  },
  class_type_ids: ["mock-class-type-id"],
  content_provider: "mock-content-provider",
  content_format: "mock-content-format",
  description: "mock-description",
  difficulty_estimate: 1,
  overall_estimate: 1,
  difficulty_rating_avg: 1,
  difficulty_rating_count: 1,
  difficulty_level: 1,
  duration: 30,
  equipment_ids: ["mock-equipment-id"],
  equipment_tags: ["mock-equipment-tag"],
  explicit_rating: 1,
  extra_images: ["mock-extra-image"],
  fitness_discipline: "mock-fitness-discipline",
  fitness_discipline_display_name: "mock-fitness-discipline-display-name",
  has_closed_captions: true,
  has_pedaling_metrics: true,
  home_peloton_id: "mock-home-peloton-id",
  image_url: "https://image-url.com",
  instructor_id: "mock-instructor-id",
  individual_instructor_ids: ["mock-individual-instructor-id"],
  is_archived: false,
  is_closed_caption_shown: true,
  is_explicit: true,
  has_free_mode: true,
  is_live_in_studio_only: true,
  language: "mock-language",
  origin_locale: "mock-origin-locale",
  length: 4,
  live_stream_id: "mock-live-stream-id",
  live_stream_url: "mock-live-stream-url",
  location: "mock-location",
  metrics: ["mock-metric"],
  original_air_time: 426681600,
  overall_rating_avg: 1,
  overall_rating_count: 1,
  pedaling_start_offset: 1,
  pedaling_end_offset: 1,
  pedaling_duration: 1,
  rating: 1,
  ride_type_id: "mock-ride-type-id",
  ride_type_ids: ["mock-ride-type-id"],
  sample_vod_stream_url: "mock-sample-vod-stream-url",
  sample_preview_stream_url: "mock-sample-preview-stream-url",
  scheduled_start_time: 426681600,
  series_id: "mock-series-id",
  sold_out: true,
  studio_peloton_id: "mock-studio-peloton-id",
  title: "mock-title",
  total_ratings: 1,
  total_in_progress_workouts: 1,
  total_workouts: 1,
  vod_stream_url: "mock-vod-stream-url",
  vod_stream_id: "mock-vod-stream-id",
  captions: ["mock-captions"],
  user_caption_locales: ["mock-user-caption-locales"],
  join_tokens: {
    on_demand: "mock-on-demand",
  },
  flags: ["mock-flag"],
  is_dynamic_video_eligible: true,
  is_fixed_distance: true,
  dynamic_video_recorded_speed_in_mph: 1,
  thumbnail_title: "mock-thumbnail-title",
  thumbnail_location: "mock-thumbnail-location",
  distance: 1,
  distance_unit: "mock-distance-unit",
  distance_display_value: "mock-distance-display-value",
  is_outdoor: true,
  has_tread_pace_target: true,
  excluded_platforms: ["mock-excluded-platform"],
  class_avg_follow_along_score: 1,
  muscle_group_score: [
    {
      muscle_group: "mock-muscle-group",
      score: 4,
      percentage: 0.55,
      bucket: 1,
      display_name: "mock-display-name",
    },
  ],
};

export const mockPelotonWorkoutByIdResponse: PelotonWorkoutByIdResponse = {
  created_at: 426681600,
  device_type: "mock-device-type",
  end_time: 426681660,
  fitness_discipline: "cycling",
  has_pedaling_metrics: true,
  has_leaderboard_metrics: true,
  id: "mock-id",
  is_total_work_personal_record: true,
  is_outdoor: true,
  metrics_type: "mock-metrics-type",
  name: "mock-name",
  peloton_id: "mock-peloton-id",
  platform: "mock-platform",
  start_time: 426681630,
  status: "COMPLETE",
  timezone: "mock-timezone",
  title: null,
  total_work: 1,
  user_id: "mock-user-id",
  workout_type: "mock-workout-type",
  total_video_watch_time_seconds: 1,
  total_video_buffering_seconds: 1,
  v2_total_video_watch_time_seconds: 1,
  v2_total_video_buffering_seconds: 1,
  total_music_audio_play_seconds: null,
  total_music_audio_buffer_seconds: null,
  service_id: null,

  ride: mockPelotonCycle,

  created: 426681600,
  device_time_created_at: 426681600,
  strava_id: "mock-strava-id",
  fitbit_id: "mock-fitbit-id",
  is_skip_intro_available: true,
  pause_time_remaining: null,
  pause_time_elapsed: null,
  is_paused: false,
  has_paused: false,
  is_pause_available: true,
  pause_time_limit: 60.0,
  total_heart_rate_zone_durations: null,
  average_effort_score: null,
  achievement_templates: ["mock-achievement-template"],
  leaderboard_rank: 1,
  total_leaderboard_users: 1,
  ftp_info: {
    ftp: 1,
    ftp_source: "mock-ftp-source",
    ftp_workout_id: "mock-ftp-workout-id",
  },
  device_type_display_name: "mock-device-type-display-name",
};
