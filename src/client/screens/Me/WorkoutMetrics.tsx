import { DataList } from "@/client/components/ui/DataList";

type WorkoutMetricsProps = {
  totalWorkouts: number;
  defaultMaxHeartRate: number;
  defaultHeartRateZones: string;
  totalPedalingMetricWorkouts: number;
  cyclingFtpSource: string;
  cyclingFtp: number;
  estimatedCyclingFtp: number;
};

export const WorkoutMetrics = (props: WorkoutMetricsProps) => {
  const rowTitles = {
    totalWorkouts: "Total Workouts",
    defaultMaxHeartRate: "Default Max Heart Rate",
    defaultHeartRateZones: "Default Heart Rate Zones",
    totalPedalingMetricWorkouts: "Total Pedaling Metric Workouts",
    cyclingFtpSource: "Cycling FTP Source",
    cyclingFtp: "Cycling FTP",
    estimatedCyclingFtp: "Estimated Cycling FTP",
  };

  return (
    <>
      <div className="text-3xl font-bold col-span-12 mt-5">Workout Metrics</div>
      <DataList rowTitles={rowTitles} data={props} />
    </>
  );
};
