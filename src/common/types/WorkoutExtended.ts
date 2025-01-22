import { Cycle } from "./Cycle";
import { Walk } from "./Walk";

export type RideBase = Cycle | Walk;

export const asCycle = (ride: RideBase): Cycle => {
  if (ride.fitnessDiscipline !== "cycle") {
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

export type WorkoutExtended = {
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
