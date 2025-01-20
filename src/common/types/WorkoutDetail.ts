export type Instructor = {
  id: string;
  userId: string;

  /**
   * Descriptors
   */
  descriptors: {
    bio: string;
    shortBio: string;
    coachType: string;

    quote: string;
    username: string;
    name: string;
    firstName: string;
    lastName: string;

    isFeaturedProfile: string;

    fitnessDisciplines: string[];

    isActive: boolean;
    isVisible: boolean;
  };

  /**
   * Image related
   */
  media: {
    aboutImageUrl: string;
    imageUrl: string;
    webInstructorListGifImageUrl: string | null;
    instructorHeroImageUrl: string;
    workoutShareImages: Array<{
      fitnessDiscipline: string;
      imageUrl: string;
    }>;

    background: string;
    lifeStyleImageUrl: string;

    bikeInstructorListDisplayImageUrl: string | null;
    webInstructorListDisplayImageUrl: string;
    iosInstructorListDisplayImageUrl: string;
  };

  /**
   * Investigate
   */
  // instagramProfile: string;
  // stravaProfile: string;
  // twitterProfile: string;
  // facebookFanPage: string;
  // musicBio: string;
  // spotifyPlaylistUri: string;

  // orderedQAndAs: Array<string[]>;

  // defaultCrossFade: number;
  // defaultCueDelay: number;
  // jumbotronUrl: string | null;
  // jumbotronUrlDark: string;
  // jumbotronUrlIos: string;

  // isFilterable: boolean;
  // isInstructorGroup: boolean;
  // individualInstructorIds: string[];
  // isAnnounced: boolean;
  // listOrder: number;
  // filmLink: string;

  /**
   * Not important
   */
};

// TODO: export type RideBase = Ride | Walk;
export type RideBase = Cycle | Walk;

export type CycleDescriptors = {
  title: string;
  description: string;
  isExplicit: boolean;
  explicitRating: number;

  length: number;
  originalAirTime: number;
  scheduledStartTime: number;
  isFixedDistance: boolean;
  isOutdoor: boolean;
  classTypeIds: string[];
  equipmentIds: string[];
  equipmentTags: string[];

  imageUrl: string;
  extraImages: string[];

  fitnessDiscipline: string;
  fitnessDisciplineDisplayName: string;

  location: string;

  isArchived: boolean;
};

export type Cycle = {
  id: string;
  instructor: Instructor;
  instructorId: string;

  /**
   * This is essential in determining the type of ride
   */
  fitnessDiscipline: "cycle";

  /**
   * Descriptors
   */
  descriptors: CycleDescriptors;

  /**
   * Stats
   */
  stats: {
    rating: number;
    totalRatings: number;
    totalWorkouts: number;
    overallRatingAvg: number;
    overallRatingCount: number;
    pedalingStartOffset: number;
    pedalingEndOffset: number;
    pedalingDuration: number;

    distance: number | null;
    distanceUnit: string | null;
    distanceDisplayValue: string | null;

    classAvgFollowAlongScore: number;

    difficultyEstimate: number;
    overallEstimate: number;
    difficultyRatingAvg: number;
    difficultyRatingCount: number;
    difficultyLevel: number | null;

    muscleGroupScore: Array<{
      muscleGroup: string;
      score: number;
      percentage: number;
      bucket: number;
      displayName: string;
    }>;

    duration: number;
    hasPedalingMetrics: boolean;
    metrics: string[];

    individualInstructorIds: string[];
  };

  /**
   * Hold onto these
   */
  // language: string;
  // originLocale: string;
  // liveStreamId: string;
  // liveStreamUrl: string | null;
  // isDynamicVideoEligible: boolean;
  // dynamicVideoRecordedSpeedInMph: number;
  // sampleVodStreamUrl: string | null;
  // samplePreviewStreamUrl: string | null;

  /**
   * Investigate
   */
  // totalInProgressWorkouts: number;
  // homePelotonId: string;
  // contentProvider: string;
  // contentFormat: string;
  // seriesId: string;
  // studioPelotonId: string;
  // rideTypeId: string;
  // rideTypeIds: string[];
  // flags: string[];
  // thumbnailTitle: string | null;
  // thumbnailLocation: string | null;

  /**
   * Not sure if important
   */
  // vodStreamUrl: string | null;
  // vodStreamId: string;

  /**
   * Not important
   */
  // contentAvailability: string;
  // contentAvailabilityLevel: string;
  // availability: {
  //   isAvailable: boolean;
  //   reason: string | null;
  // };
  // userCaptionLocales: string[];
  // hasClosedCaptions: boolean;
  // captions: string[];
  // hasTreadPaceTarget: boolean;
  // joinTokens: {
  //   onDemand: string;
  // };
  // soldOut: boolean;
  // freeForLimitedTime: boolean;
  // isLimitedRide: boolean;
  // excludedPlatforms: string[];
  // isClosedCaptionShown: boolean;
  // hasFreeMode: boolean;
  // isLiveInStudioOnly: boolean;
};

export type Walk = {
  // id: "00000000000000000000000000000000";
  id: string;
  isArchived: boolean;
  title: string;
  scheduledStartTime: number;
  duration: number;
  /**
   * This is essential in determining the type of ride
   */
  fitnessDiscipline: "walk";
  instructor: {
    // name: "JUST WALK";
    name: string;
    imageUrl: string;
  };
};

export type WorkoutDetail = {
  id: string;
  pelotonId: string;
  userId: string;

  ride: RideBase;

  descriptors: {
    // fitnessDiscipline: "cycling" | "walking";
    fitnessDiscipline: string;

    name: string;
    title: string;

    createdAt: string;
    created: number;
    endTime: number;
    startTime: number;

    deviceType: string;
    deviceTypeDisplayName: string;
    platform: string;
    status: string; // "COMPLETE"
    metricsType: string; // Appears to be null when walk
    workoutType: string;
  };

  stats: {
    hasLeaderboardMetrics: boolean;
    leaderboardRank: number;
    totalLeaderboardUsers: number;
    isTotalWorkPersonalRecord: boolean;

    hasPedalingMetrics: boolean;

    averageEffortScore: number;
    totalWork: number;
    totalHeartRateZoneDurations: number;

    isOutdoor: boolean;
    ftpInfo: {
      ftp: number;
      ftpSource: string;
      ftpWorkoutId: string;
    };
  };

  /**
   * Not important
   */
  // deviceTimeCreatedAt: number;
  // serviceId: string | null;
  // achievementTemplates: string[];

  // totalVideoWatchTimeSeconds: number;
  // totalVideoBufferingSeconds: number;
  // v2TotalVideoWatchTimeSeconds: number;
  // v2TotalVideoBufferingSeconds: number;
  // totalMusicAudioPlaySeconds: number | null;
  // totalMusicAudioBufferSeconds: number | null;

  // isSkipIntroAvailable: boolean;
  // timezone: string;
  // stravaId: string | null;
  // fitbitId: string | null;

  /**
   * Pause details, not important
   */
  // pauseTimeRemaining: number | null;
  // pauseTimeElapsed: number | null;
  // isPaused: boolean;
  // hasPaused: boolean;
  // isPauseAvailable: boolean;
  // pauseTimeLimit: number;
};

export const asCycle = (ride: RideBase): Cycle => {
  if (ride.fitnessDiscipline !== "cycle") {
    console.log(ride);
    throw new Error("Expected a Cycle ride");
  }
  return ride as Cycle;
};

export const asWalk = (ride: RideBase): Walk => {
  if (ride.fitnessDiscipline !== "walk") {
    throw new Error("Expected a Walk ride");
  }
  return ride as Walk;
};
