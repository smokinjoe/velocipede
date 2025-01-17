export type Instructor = {
  id: string;
  bio: string;
  shortBio: string;
  coachType: string;
  isActive: boolean;
  isFilterable: boolean;
  isInstructorGroup: boolean;
  individualInstructorIds: string[];
  isVisible: boolean;
  isAnnounced: boolean;
  listOrder: number;
  featuredProfile: boolean;
  filmLink: string;
  facebookFanPage: string;
  musicBio: string;
  spotifyPlaylistUri: string;
  background: string;
  orderedQAndAs: Array<string[]>;
  instagramProfile: string;
  stravaProfile: string;
  twitterProfile: string;
  quote: string;
  username: string;
  name: string;
  firstName: string;
  lastName: string;
  userId: string;
  lifeStyleImageUrl: string;
  bikeInstructorListDisplayImageUrl: string | null;
  webInstructorListDisplayImageUrl: string;
  iosInstructorListDisplayImageUrl: string;
  aboutImageUrl: string;
  imageUrl: string;
  jumbotronUrl: string | null;
  jumbotronUrlDark: string;
  jumbotronUrlIos: string;
  webInstructorListGifImageUrl: string | null;
  instructorHeroImageUrl: string;
  workoutShareImages: Array<{
    fitnessDiscipline: string;
    imageUrl: string;
  }>;
  fitnessDisciplines: string[];
  defaultCrossFade: number;
  defaultCueDelay: number;
};

// TODO: export type RideBase = Ride | Walk;
export type RideBase = Cycle | Walk;

export type Cycle = {
  instructor: Instructor;
  contentAvailability: string;
  contentAvailabilityLevel: string;
  freeForLimitedTime: boolean;
  isLimitedRide: boolean;
  availability: {
    isAvailable: boolean;
    reason: string | null;
  };
  classTypeIds: string[];
  contentProvider: string;
  contentFormat: string;
  description: string;
  difficultyEstimate: number;
  overallEstimate: number;
  difficultyRatingAvg: number;
  difficultyRatingCount: number;
  difficultyLevel: number | null;
  duration: number;
  equipmentIds: string[];
  equipmentTags: string[];
  explicitRating: number;
  extraImages: string[];
  fitnessDiscipline: string;
  fitnessDisciplineDisplayName: string;
  hasClosedCaptions: boolean;
  hasPedalingMetrics: boolean;
  homePelotonId: string;
  id: string;
  imageUrl: string;
  instructorId: string;
  individualInstructorIds: string[];
  isArchived: boolean;
  isClosedCaptionShown: boolean;
  isExplicit: boolean;
  hasFreeMode: boolean;
  isLiveInStudioOnly: boolean;
  language: string;
  originLocale: string;
  length: number;
  liveStreamId: string;
  liveStreamUrl: string | null;
  location: string;
  metrics: string[];
  originalAirTime: number;
  overallRatingAvg: number;
  overallRatingCount: number;
  pedalingStartOffset: number;
  pedalingEndOffset: number;
  pedalingDuration: number;
  rating: number;
  rideTypeId: string;
  rideTypeIds: string[];
  sampleVodStreamUrl: string | null;
  samplePreviewStreamUrl: string | null;
  scheduledStartTime: number;
  seriesId: string;
  soldOut: boolean;
  studioPelotonId: string;
  title: string;
  totalRatings: number;
  totalInProgressWorkouts: number;
  totalWorkouts: number;
  vodStreamUrl: string | null;
  vodStreamId: string;
  captions: string[];
  userCaptionLocales: string[];
  joinTokens: {
    onDemand: string;
  };
  flags: string[];
  isDynamicVideoEligible: boolean;
  isFixedDistance: boolean;
  dynamicVideoRecordedSpeedInMph: number;
  thumbnailTitle: string | null;
  thumbnailLocation: string | null;
  distance: number | null;
  distanceUnit: string | null;
  distanceDisplayValue: string | null;
  isOutdoor: boolean;
  hasTreadPaceTarget: boolean;
  excludedPlatforms: string[];
  classAvgFollowAlongScore: number;
  muscleGroupScore: Array<{
    muscleGroup: string;
    score: number;
    percentage: number;
    bucket: number;
    displayName: string;
  }>;
};

export type Walk = {
  // id: "00000000000000000000000000000000";
  id: string;
  isArchived: boolean;
  title: string;
  scheduledStartTime: number;
  duration: number;
  instructor: {
    // name: "JUST WALK";
    name: string;
    imageUrl: string;
  };
};

export type WorkoutDetail = {
  ride: RideBase;

  createdAt: number;
  deviceType: string;
  endTime: number;
  fitnessDiscipline: "cycling" | "walking";
  hasPedalingMetrics: boolean;
  hasLeaderboardMetrics: boolean;
  id: string;
  isTotalWorkPersonalRecord: boolean;
  isOutdoor: boolean;
  metricsType: string;
  name: string;
  pelotonId: string;
  platform: string;
  startTime: number;
  status: string; // "COMPLETE"
  timezone: string;
  title: string | null;
  totalWork: number;
  userId: string;
  workoutType: string;
  totalVideoWatchTimeSeconds: number;
  totalVideoBufferingSeconds: number;
  v2TotalVideoWatchTimeSeconds: number;
  v2TotalVideoBufferingSeconds: number;
  totalMusicAudioPlaySeconds: number | null;
  totalMusicAudioBufferSeconds: number | null;
  serviceId: string | null;
  created: number;
  deviceTimeCreatedAt: number;
  stravaId: string | null;
  fitbitId: string | null;
  isSkipIntroAvailable: boolean;
  pauseTimeRemaining: number | null;
  pauseTimeElapsed: number | null;
  isPaused: boolean;
  hasPaused: boolean;
  isPauseAvailable: boolean;
  pauseTimeLimit: number;
  totalHeartRateZoneDurations: number | null;
  averageEffortScore: number | null;
  achievementTemplates: string[];
  leaderboardRank: number;
  totalLeaderboardUsers: number;
  ftpInfo: {
    ftp: number;
    ftpSource: string;
    ftpWorkoutId: string;
  };
  deviceTypeDisplayName: string;
};

export const asCycle = (ride: RideBase): Cycle => {
  if ("fitnessDiscipline" in ride) {
    throw new Error("Expected a Cycle ride");
  }
  return ride as Cycle;
};

export const asWalk = (ride: RideBase): Walk => {
  if (!("fitnessDiscipline" in ride)) {
    throw new Error("Expected a Walk ride");
  }
  return ride as Walk;
};
