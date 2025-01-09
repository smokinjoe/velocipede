import { useUserSession } from "@/client/hooks/useUserSession";
import { useMe } from "../../hooks/usePelotonQueries";
import { Loading } from "@/client/components/ui/Loading";
import { DataList } from "@/client/components/ui/DataList";
import { Table } from "@/client/components/ui/Table";
import { WorkoutCounts } from "./WorkoutCounts";

export const Me = () => {
  const { userSession } = useUserSession();
  const { isLoggedIn, sessionId } = userSession;

  const { data, isLoading } = useMe({
    isLoggedIn: isLoggedIn,
    sessionId,
  });

  if (isLoading) {
    return <Loading />;
  }

  if (!data) {
    return <div>There was an error fetching your data</div>;
  }

  // Peel off user details
  const {
    username,
    imageUrl,
    name,
    email,
    birthday,
    totalFollowers,
    totalFollowing,
    weight,
    height,
  } = data;

  const userDetails = {
    username,
    imageUrl,
    name,
    email,
    birthday,
    totalFollowers,
    totalFollowing,
    weight,
    height,
  };

  // Workout metric details
  const {
    totalWorkouts,
    defaultMaxHeartRate,
    defaultHeartRateZones,
    totalPedalingMetricWorkouts,
    cyclingFtpSource,
    cyclingFtp,
    estimatedCyclingFtp,
  } = data;

  const metricDetails = {
    totalWorkouts,
    defaultMaxHeartRate,
    defaultHeartRateZones: defaultHeartRateZones.join(", "),
    totalPedalingMetricWorkouts,
    cyclingFtpSource,
    cyclingFtp,
    estimatedCyclingFtp,
  };

  return (
    <>
      <div className="text-5xl font-bold col-span-12">Me Data</div>

      <div className="text-3xl font-bold col-span-12">User Details</div>
      <DataList data={userDetails} />

      <div className="text-3xl font-bold col-span-12">Workout Metrics</div>
      <DataList data={metricDetails} />

      <WorkoutCounts workouts={data.workoutCounts} />
    </>
  );
};
