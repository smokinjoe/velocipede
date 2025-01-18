import {
  Instructor,
  RideBase,
  Walk,
  Cycle,
  WorkoutDetail,
} from "../../common/types/WorkoutDetail";
import {
  asPelotonCycle,
  asPelotonWalk,
  PelotonInstructor,
  PelotonCycle,
  PelotonRideBase,
  PelotonWalk,
  PelotonWorkoutByIdResponse,
} from "../types/PelotonWorkoutByIdResponse";

import { formatDateToMMDDYYYY } from "../../common/utils/date";

const instructorMapper = (
  pelotonInstructor: PelotonInstructor
): Instructor => ({
  id: pelotonInstructor.id,
  userId: pelotonInstructor.user_id,

  descriptors: {
    bio: pelotonInstructor.bio,
    shortBio: pelotonInstructor.short_bio,
    coachType: pelotonInstructor.coach_type,
    quote: pelotonInstructor.quote,
    username: pelotonInstructor.username,
    name: pelotonInstructor.name,
    firstName: pelotonInstructor.first_name,
    lastName: pelotonInstructor.last_name,
    isActive: pelotonInstructor.is_active,
    isVisible: pelotonInstructor.is_visible,
    featuredProfile: pelotonInstructor.featured_profile,
    fitnessDisciplines: pelotonInstructor.fitness_disciplines,
  },

  media: {
    background: pelotonInstructor.background,
    lifeStyleImageUrl: pelotonInstructor.life_style_image_url,
    bikeInstructorListDisplayImageUrl:
      pelotonInstructor.bike_instructor_list_display_image_url,
    webInstructorListDisplayImageUrl:
      pelotonInstructor.web_instructor_list_display_image_url,
    iosInstructorListDisplayImageUrl:
      pelotonInstructor.ios_instructor_list_display_image_url,
    aboutImageUrl: pelotonInstructor.about_image_url,
    imageUrl: pelotonInstructor.image_url,
    webInstructorListGifImageUrl:
      pelotonInstructor.web_instructor_list_gif_image_url,
    instructorHeroImageUrl: pelotonInstructor.instructor_hero_image_url,
    workoutShareImages: pelotonInstructor.workout_share_images?.map((obj) => ({
      fitnessDiscipline: obj.fitness_discipline,
      imageUrl: obj.image_url,
    })),
  },
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
    // I could create an `asCycle` and an `asWalk` to assert the type
    return cycleMapper(asPelotonCycle(pelotonRide));
  }
  if (fitnessDiscipline === "walking") {
    return walkMapper(asPelotonWalk(pelotonRide));
  }

  throw new Error("Invalid fitness discipline");
};

export const cycleMapper = (pelotonRide: PelotonCycle): Cycle => ({
  id: pelotonRide.id,
  instructor: instructorMapper(pelotonRide.instructor),
  instructorId: pelotonRide.instructor_id,

  descriptors: {
    classTypeIds: pelotonRide.class_type_ids,
    description: pelotonRide.description,
    equipmentIds: pelotonRide.equipment_ids,
    equipmentTags: pelotonRide.equipment_tags,

    title: pelotonRide.title,
    length: pelotonRide.length,

    isExplicit: pelotonRide.is_explicit,
    explicitRating: pelotonRide.explicit_rating,

    imageUrl: pelotonRide.image_url,
    extraImages: pelotonRide.extra_images,
    fitnessDiscipline: pelotonRide.fitness_discipline,
    fitnessDisciplineDisplayName: pelotonRide.fitness_discipline_display_name,
    location: pelotonRide.location,
    isFixedDistance: pelotonRide.is_fixed_distance,
    isOutdoor: pelotonRide.is_outdoor,

    originalAirTime: pelotonRide.original_air_time,
    scheduledStartTime: pelotonRide.scheduled_start_time,
    isArchived: pelotonRide.is_archived,
  },

  stats: {
    difficultyEstimate: pelotonRide.difficulty_estimate,
    overallEstimate: pelotonRide.overall_estimate,
    difficultyRatingAvg: pelotonRide.difficulty_rating_avg,
    difficultyRatingCount: pelotonRide.difficulty_rating_count,
    difficultyLevel: pelotonRide.difficulty_level,
    duration: pelotonRide.duration,
    hasPedalingMetrics: pelotonRide.has_pedaling_metrics,
    individualInstructorIds: pelotonRide.individual_instructor_ids,
    metrics: pelotonRide.metrics,
    overallRatingAvg: pelotonRide.overall_rating_avg,
    overallRatingCount: pelotonRide.overall_rating_count,
    pedalingStartOffset: pelotonRide.pedaling_start_offset,
    pedalingEndOffset: pelotonRide.pedaling_end_offset,
    pedalingDuration: pelotonRide.pedaling_duration,
    totalRatings: pelotonRide.total_ratings,
    totalWorkouts: pelotonRide.total_workouts,
    rating: pelotonRide.rating,
    distance: pelotonRide.distance,
    distanceUnit: pelotonRide.distance_unit,
    distanceDisplayValue: pelotonRide.distance_display_value,
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
  },
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
    id: response.id,
    pelotonId: response.peloton_id,
    userId: response.user_id,

    ride: rideMapper(response.ride, response.fitness_discipline),

    descriptors: {
      fitnessDiscipline: response.fitness_discipline,
      name: response.name,
      title: response.title,

      createdAt: formatDateToMMDDYYYY(response.created_at),
      created: response.created,
      endTime: response.end_time,
      startTime: response.start_time,

      deviceType: response.device_type,
      deviceTypeDisplayName: response.device_type_display_name,
      platform: response.platform,
      status: response.status,
      metricsType: response.metrics_type,
      workoutType: response.workout_type,
    },

    stats: {
      hasLeaderboardMetrics: response.has_leaderboard_metrics,
      leaderboardRank: response.leaderboard_rank,
      totalLeaderboardUsers: response.total_leaderboard_users,
      isTotalWorkPersonalRecord: response.is_total_work_personal_record,

      hasPedalingMetrics: response.has_pedaling_metrics,

      averageEffortScore: response.average_effort_score,
      totalWork: response.total_work,
      totalHeartRateZoneDurations: response.total_heart_rate_zone_durations,

      isOutdoor: response.is_outdoor,
      ftpInfo: {
        ftp: response.ftp_info.ftp,
        ftpSource: response.ftp_info.ftp_source,
        ftpWorkoutId: response.ftp_info.ftp_workout_id,
      },
    },
  };
};
