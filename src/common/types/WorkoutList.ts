export type WorkoutData = {
  id: string;

  createdAt: number; // make this actually a Date?
  startTime: number; // make this actually a Date?
  endTime: number; // make this actually a Date?
  hasPedalingMetrics: boolean;

  isTotalWorkPersonalRecord: boolean;
  isOutdoor: boolean;
  name: string;
  status: "COMPLETE";
  totalWork: number;

  deviceType: "android" | "home_bike_v1";
  fitnessDiscipline: "walking" | "cycling";
  metricsType: null | "cycling";
  pelotonId: null | string;
  platform: "android" | "home_bike";
  title: string | null;
  workoutType: "freestyle" | "class";
  ride: null | {
    id: string;
    isArchived: boolean;
    title: string;
    scheduledStartTime: number;
    duration: number;
    instructor: {
      name: string;
      imageUrl: string;
    };
  };
};

export type WorkoutList = {
  workouts: WorkoutData[];
  limit: number;
  page: number;
  total: number;
  count: number;
  pageCount: number;
  showPrevious: boolean;
  showNext: boolean;
  sortBy: string;
  next: {
    workoutId: string;
    createdAt: number;
  };
  summary: Record<string, number>;
};
