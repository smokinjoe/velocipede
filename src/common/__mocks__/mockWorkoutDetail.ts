import {
  Cycle,
  Walk,
  WorkoutDetail,
  WorkoutStats,
} from "../types/WorkoutDetail";

export const mockCycle: Cycle = {
  id: "mock-id",
  fitnessDiscipline: "cycle",
  instructorId: "mock-instructor-id",

  descriptors: {
    classTypeIds: ["mock-class-type-id"],
    description: "mock-description",
    equipmentIds: ["mock-equipment-id"],
    equipmentTags: ["mock-equipment-tag"],
    explicitRating: 1,
    extraImages: ["mock-extra-image"],
    fitnessDiscipline: "mock-fitness-discipline",
    fitnessDisciplineDisplayName: "mock-fitness-discipline-display-name",
    imageUrl: "https://image-url.com",
    isArchived: false,
    isExplicit: true,
    isFixedDistance: true,
    isOutdoor: true,
    length: 4,
    location: "mock-location",
    originalAirTime: 426681600,
    scheduledStartTime: 426681600,
    title: "mock-title",
  },

  stats: {
    classAvgFollowAlongScore: 1,
    difficultyEstimate: 1,
    difficultyLevel: 1,
    difficultyRatingAvg: 1,
    difficultyRatingCount: 1,
    distance: 1,
    distanceDisplayValue: "mock-distance-display-value",
    distanceUnit: "mock-distance-unit",
    duration: 30,
    hasPedalingMetrics: true,
    individualInstructorIds: ["mock-individual-instructor-id"],
    metrics: ["mock-metric"],
    muscleGroupScore: [
      {
        bucket: 1,
        displayName: "mock-display-name",
        muscleGroup: "mock-muscle-group",
        percentage: 0.55,
        score: 4,
      },
    ],
    overallEstimate: 1,
    overallRatingAvg: 1,
    overallRatingCount: 1,
    pedalingDuration: 1,
    pedalingEndOffset: 1,
    pedalingStartOffset: 1,
    rating: 1,
    totalRatings: 1,
    totalWorkouts: 1,
  },

  instructor: {
    id: "mock-instructor-id",
    media: {
      aboutImageUrl: "https://about-image-url.com",
      background: "instructor background",
      bikeInstructorListDisplayImageUrl:
        "https://bike-instructor-list-display-image-url.com",
      imageUrl: "https://image-url.com",
      instructorHeroImageUrl: "https://instructor-hero-image-url.com",
      iosInstructorListDisplayImageUrl:
        "https://ios-instructor-list-display-image-url.com",
      lifeStyleImageUrl: "https://list-style-image-url.com",
      webInstructorListDisplayImageUrl:
        "https://web-instructor-list-display-image-url.com",
      webInstructorListGifImageUrl:
        "https://web-instructor-list-gif-image-url.com",
      workoutShareImages: [
        {
          fitnessDiscipline: "instructor fitness discipline",
          imageUrl: "https://image-url.com",
        },
      ],
    },
    descriptors: {
      bio: "instructor bio",
      coachType: "instructor coach type",
      firstName: "instructor first name",
      fitnessDisciplines: ["instructor fitness discipline"],
      isActive: true,
      isFeaturedProfile: "Featured",
      isVisible: true,
      lastName: "instructor last name",
      name: "instructor name",
      quote: "instructor quote",
      shortBio: "instructor short bio",
      username: "instructor username",
    },
    userId: "mock-instructor-user-id",
  },
};

export const mockWorkoutDetailStats: WorkoutStats = {
  averageEffortScore: 0,
  ftpInfo: {
    ftp: 1,
    ftpSource: "mock-ftp-source",
    ftpWorkoutId: "mock-ftp-workout-id",
  },
  hasLeaderboardMetrics: true,
  hasPedalingMetrics: true,
  isOutdoor: true,
  isTotalWorkPersonalRecord: true,
  leaderboardRank: 1,
  totalHeartRateZoneDurations: 0,
  totalLeaderboardUsers: 1,
  totalWork: 1,
};

export const mockWorkoutDetail: WorkoutDetail = {
  id: "mock-id",
  pelotonId: "mock-peloton-id",
  userId: "mock-user-id",

  descriptors: {
    fitnessDiscipline: "cycling",
    name: "mock-name",
    title: "No Title",

    createdAt: "07/10/1983",
    created: 426681600,
    endTime: 426681660,
    startTime: 426681630,

    deviceType: "mock-device-type",
    deviceTypeDisplayName: "mock-device-type-display-name",
    platform: "mock-platform",
    status: "COMPLETE",
    metricsType: "mock-metrics-type",
    workoutType: "mock-workout-type",
  },

  ride: mockCycle,

  stats: mockWorkoutDetailStats,
};

export const mockWalk: Walk = {
  id: "mock-id",
  isArchived: false,
  title: "mock-title",
  scheduledStartTime: 426681600,
  duration: 30,
  fitnessDiscipline: "walk",
  instructor: {
    name: "mock-instructor-name",
    imageUrl: "mock-instructor-image-url",
  },
};
