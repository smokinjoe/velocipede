import { Instructor } from "./Instructor";

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

export type CycleStats = {
  rating: number;
  totalRatings: number;
  totalWorkouts: number;
  overallRatingAvg: number;
  overallRatingCount: number;

  /**
   * All in seconds
   */
  pedalingStartOffset: number;
  pedalingEndOffset: number;
  pedalingDuration: number;

  /**
   * Is this always null?
   */
  distance: number | null;
  distanceUnit: string | null;
  distanceDisplayValue: string | null;

  /**
   * Appears to be zero quite a bit
   */
  classAvgFollowAlongScore: number;

  difficultyEstimate: number;
  overallEstimate: number;
  difficultyRatingAvg: number;
  difficultyRatingCount: number;
  difficultyLevel: number | null;

  /**
   * This is static - a summary detail
   */
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
  stats: CycleStats;

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
