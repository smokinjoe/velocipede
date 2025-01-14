import {
  Instructor,
  RideBase,
  Walk,
  Cycle,
  WorkoutDetail,
} from "../../common/types/WorkoutDetail";
import {
  PelotonInstructor,
  PelotonRide,
  PelotonRideBase,
  PelotonWalk,
  PelotonWorkoutByIdResponse,
} from "../types/PelotonWorkoutByIdResponse";

const instructorMapper = (
  pelotonInstructor: PelotonInstructor
): Instructor => ({
  id: pelotonInstructor.id,
  bio: pelotonInstructor.bio,
  shortBio: pelotonInstructor.short_bio,
  coachType: pelotonInstructor.coach_type,
  isActive: pelotonInstructor.is_active,
  isFilterable: pelotonInstructor.is_filterable,
  isInstructorGroup: pelotonInstructor.is_instructor_group,
  individualInstructorIds: pelotonInstructor.individual_instructor_ids,
  isVisible: pelotonInstructor.is_visible,
  isAnnounced: pelotonInstructor.is_announced,
  listOrder: pelotonInstructor.list_order,
  featuredProfile: pelotonInstructor.featured_profile,
  filmLink: pelotonInstructor.film_link,
  facebookFanPage: pelotonInstructor.facebook_fan_page,
  musicBio: pelotonInstructor.music_bio,
  spotifyPlaylistUri: pelotonInstructor.spotify_playlist_uri,
  background: pelotonInstructor.background,
  orderedQAndAs: pelotonInstructor.ordered_q_and_as,
  instagramProfile: pelotonInstructor.instagram_profile,
  stravaProfile: pelotonInstructor.strava_profile,
  twitterProfile: pelotonInstructor.twitter_profile,
  quote: pelotonInstructor.quote,
  username: pelotonInstructor.username,
  name: pelotonInstructor.name,
  firstName: pelotonInstructor.first_name,
  lastName: pelotonInstructor.last_name,
  userId: pelotonInstructor.user_id,
  lifeStyleImageUrl: pelotonInstructor.life_style_image_url,
  bikeInstructorListDisplayImageUrl:
    pelotonInstructor.bike_instructor_list_display_image_url,
  webInstructorListDisplayImageUrl:
    pelotonInstructor.web_instructor_list_display_image_url,
  iosInstructorListDisplayImageUrl:
    pelotonInstructor.ios_instructor_list_display_image_url,
  aboutImageUrl: pelotonInstructor.about_image_url,
  imageUrl: pelotonInstructor.image_url,
  jumbotronUrl: pelotonInstructor.jumbotron_url,
  jumbotronUrlDark: pelotonInstructor.jumbotron_url_dark,
  jumbotronUrlIos: pelotonInstructor.jumbotron_url_ios,
  webInstructorListGifImageUrl:
    pelotonInstructor.web_instructor_list_gif_image_url,
  instructorHeroImageUrl: pelotonInstructor.instructor_hero_image_url,
  // TODO: Create mapper
  workoutShareImages: pelotonInstructor.workout_share_images?.map((obj) => ({
    fitnessDiscipline: obj.fitness_discipline,
    imageUrl: obj.image_url,
  })),
  fitnessDisciplines: pelotonInstructor.fitness_disciplines,
  defaultCrossFade: pelotonInstructor.default_cross_fade,
  defaultCueDelay: pelotonInstructor.default_cue_delay,
});

/**
 * TODO: Create a Cycling type and have this rideMapper map a walk or cycle
 */
const rideMapper = (
  pelotonRide: PelotonRideBase,
  fitnessDiscipline: string
): RideBase => {
  if (fitnessDiscipline === "cycling") {
    // TODO: figure out some way to assert this - or can I use a generic?
    return cycleMapper(pelotonRide as PelotonRide);
  }
  if (fitnessDiscipline === "walking") {
    return walkMapper(pelotonRide);
  }

  throw new Error("Invalid fitness discipline");
};

export const cycleMapper = (pelotonRide: PelotonRide): Cycle => ({
  instructor: instructorMapper(pelotonRide.instructor),
  contentAvailability: pelotonRide.content_availability,
  contentAvailabilityLevel: pelotonRide.content_availability_level,
  freeForLimitedTime: pelotonRide.free_for_limited_time,
  isLimitedRide: pelotonRide.is_limited_ride,
  availability: pelotonRide.availability && {
    isAvailable: pelotonRide.availability.is_available,
    reason: pelotonRide.availability.reason,
  },
  classTypeIds: pelotonRide.class_type_ids,
  contentProvider: pelotonRide.content_provider,
  contentFormat: pelotonRide.content_format,
  description: pelotonRide.description,
  difficultyEstimate: pelotonRide.difficulty_estimate,
  overallEstimate: pelotonRide.overall_estimate,
  difficultyRatingAvg: pelotonRide.difficulty_rating_avg,
  difficultyRatingCount: pelotonRide.difficulty_rating_count,
  difficultyLevel: pelotonRide.difficulty_level,
  duration: pelotonRide.duration,
  equipmentIds: pelotonRide.equipment_ids,
  equipmentTags: pelotonRide.equipment_tags,
  explicitRating: pelotonRide.explicit_rating,
  extraImages: pelotonRide.extra_images,
  fitnessDiscipline: pelotonRide.fitness_discipline,
  fitnessDisciplineDisplayName: pelotonRide.fitness_discipline_display_name,
  hasClosedCaptions: pelotonRide.has_closed_captions,
  hasPedalingMetrics: pelotonRide.has_pedaling_metrics,
  homePelotonId: pelotonRide.home_peloton_id,
  id: pelotonRide.id,
  imageUrl: pelotonRide.image_url,
  instructorId: pelotonRide.instructor_id,
  individualInstructorIds: pelotonRide.individual_instructor_ids,
  isArchived: pelotonRide.is_archived,
  isClosedCaptionShown: pelotonRide.is_closed_caption_shown,
  isExplicit: pelotonRide.is_explicit,
  hasFreeMode: pelotonRide.has_free_mode,
  isLiveInStudioOnly: pelotonRide.is_live_in_studio_only,
  language: pelotonRide.language,
  originLocale: pelotonRide.origin_locale,
  length: pelotonRide.length,
  liveStreamId: pelotonRide.live_stream_id,
  liveStreamUrl: pelotonRide.live_stream_url,
  location: pelotonRide.location,
  metrics: pelotonRide.metrics,
  originalAirTime: pelotonRide.original_air_time,
  overallRatingAvg: pelotonRide.overall_rating_avg,
  overallRatingCount: pelotonRide.overall_rating_count,
  pedalingStartOffset: pelotonRide.pedaling_start_offset,
  pedalingEndOffset: pelotonRide.pedaling_end_offset,
  pedalingDuration: pelotonRide.pedaling_duration,
  rating: pelotonRide.rating,
  rideTypeId: pelotonRide.ride_type_id,
  rideTypeIds: pelotonRide.ride_type_ids,
  sampleVodStreamUrl: pelotonRide.sample_vod_stream_url,
  samplePreviewStreamUrl: pelotonRide.sample_preview_stream_url,
  scheduledStartTime: pelotonRide.scheduled_start_time,
  seriesId: pelotonRide.series_id,
  soldOut: pelotonRide.sold_out,
  studioPelotonId: pelotonRide.studio_peloton_id,
  title: pelotonRide.title,
  totalRatings: pelotonRide.total_ratings,
  totalInProgressWorkouts: pelotonRide.total_in_progress_workouts,
  totalWorkouts: pelotonRide.total_workouts,
  vodStreamUrl: pelotonRide.vod_stream_url,
  vodStreamId: pelotonRide.vod_stream_id,
  captions: pelotonRide.captions,
  userCaptionLocales: pelotonRide.user_caption_locales,
  joinTokens: pelotonRide.join_tokens && {
    onDemand: pelotonRide.join_tokens.on_demand,
  },
  flags: pelotonRide.flags,
  isDynamicVideoEligible: pelotonRide.is_dynamic_video_eligible,
  isFixedDistance: pelotonRide.is_fixed_distance,
  dynamicVideoRecordedSpeedInMph:
    pelotonRide.dynamic_video_recorded_speed_in_mph,
  thumbnailTitle: pelotonRide.thumbnail_title,
  thumbnailLocation: pelotonRide.thumbnail_location,
  distance: pelotonRide.distance,
  distanceUnit: pelotonRide.distance_unit,
  distanceDisplayValue: pelotonRide.distance_display_value,
  isOutdoor: pelotonRide.is_outdoor,
  hasTreadPaceTarget: pelotonRide.has_tread_pace_target,
  excludedPlatforms: pelotonRide.excluded_platforms,
  classAvgFollowAlongScore: pelotonRide.class_avg_follow_along_score,
  // TODO: Create mapper
  muscleGroupScore:
    pelotonRide.muscle_group_score &&
    pelotonRide.muscle_group_score.map((obj) => ({
      muscleGroup: obj.muscle_group,
      score: obj.score,
      percentage: obj.percentage,
      bucket: obj.bucket,
      displayName: obj.display_name,
    })),
});

export const walkMapper = (response: PelotonWalk): Walk => {
  return {
    id: response.id,
    isArchived: response.is_archived,
    title: response.title,
    scheduledStartTime: response.scheduled_start_time,
    duration: response.duration,
    instructor: response.instructor && {
      name: response.instructor.name,
      imageUrl: response.instructor.image_url,
    },
  };
};

export const workoutMapper = (
  response: PelotonWorkoutByIdResponse
): WorkoutDetail => {
  return {
    createdAt: response.created_at,
    deviceType: response.device_type,
    endTime: response.end_time,
    fitnessDiscipline: response.fitness_discipline,
    hasPedalingMetrics: response.has_pedaling_metrics,
    hasLeaderboardMetrics: response.has_leaderboard_metrics,
    id: response.id,
    isTotalWorkPersonalRecord: response.is_total_work_personal_record,
    isOutdoor: response.is_outdoor,
    metricsType: response.metrics_type,
    name: response.name,
    pelotonId: response.peloton_id,
    platform: response.platform,
    startTime: response.start_time,
    status: response.status,
    timezone: response.timezone,
    title: response.title,
    totalWork: response.total_work,
    userId: response.user_id,
    workoutType: response.workout_type,
    totalVideoWatchTimeSeconds: response.total_video_watch_time_seconds,
    totalVideoBufferingSeconds: response.total_video_buffering_seconds,
    v2TotalVideoWatchTimeSeconds: response.v2_total_video_watch_time_seconds,
    v2TotalVideoBufferingSeconds: response.v2_total_video_buffering_seconds,
    totalMusicAudioPlaySeconds: response.total_music_audio_play_seconds,
    totalMusicAudioBufferSeconds: response.total_music_audio_buffer_seconds,
    serviceId: response.service_id,
    ride: rideMapper(response.ride, response.fitness_discipline),
    created: response.created,
    deviceTimeCreatedAt: response.device_time_created_at,
    stravaId: response.strava_id,
    fitbitId: response.fitbit_id,
    isSkipIntroAvailable: response.is_skip_intro_available,
    pauseTimeRemaining: response.pause_time_remaining,
    pauseTimeElapsed: response.pause_time_elapsed,
    isPaused: response.is_paused,
    hasPaused: response.has_paused,
    isPauseAvailable: response.is_pause_available,
    pauseTimeLimit: response.pause_time_limit,
    totalHeartRateZoneDurations: response.total_heart_rate_zone_durations,
    averageEffortScore: response.average_effort_score,
    achievementTemplates: response.achievement_templates,
    leaderboardRank: response.leaderboard_rank,
    totalLeaderboardUsers: response.total_leaderboard_users,
    ftpInfo: {
      ftp: response.ftp_info.ftp,
      ftpSource: response.ftp_info.ftp_source,
      ftpWorkoutId: response.ftp_info.ftp_workout_id,
    },
    deviceTypeDisplayName: response.device_type_display_name,
  };
};
